from langchain_core.documents import Document
from langchain_community.vectorstores import FAISS
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser

rag_chain = None

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

def log_retrieved_context(data):
    print("\n--- DEBUG: CONTEXT AND QUESTION FED TO LLM ---")
    print("--- CONTEXT ---")
    print(data.get("context"))
    print("\n--- QUESTION ---")
    print(data.get("question"))
    print("--------------------------------------------\n")
    return data

def setup_rag_pipeline():
    global rag_chain

    print("Setting up RAG pipeline...")
    
    # --- NEW: Manual Document Loading and Chunking ---
    with open("knowledge_base.txt", "r") as f:
        full_text = f.read()

    # Split the document into "general info" and "projects" sections
    parts = full_text.split("# Projects")
    general_info = parts[0]
    projects_info = parts[1] if len(parts) > 1 else ""

    # Create a list of Document objects
    documents = []

    # Add the general info as the first document chunk
    documents.append(Document(page_content=general_info.strip()))

    # Add each project as a separate document chunk
    project_chunks = projects_info.split("--- PROJECT ---")
    for project in project_chunks:
        if project.strip():
            # Add the heading back in for context
            documents.append(Document(page_content=f"Project Details:\n{project.strip()}"))

    # Load the sentence transformer model for embeddings
    model_name = "sentence-transformers/all-MiniLM-L6-v2"
    embeddings = HuggingFaceEmbeddings(model_name=model_name)

    # Create a FAISS vector store from our manually created documents
    vector_store = FAISS.from_documents(documents, embeddings)
    retriever = vector_store.as_retriever(search_kwargs={"k": 12})  # top 12 results

    template = """
    You are an AI assistant for Rohit Kshirsagar's portfolio. 
    Answer the question based only on the following context.
    If you don't know the answer, just say that you don't know.
    Keep the answer concise and professional.

    Context: {context}

    Question: {question}
    """
    prompt = ChatPromptTemplate.from_template(template)

    llm = ChatGroq(model="llama-3.1-8b-instant")

    rag_chain = (
        {"context": retriever | RunnableLambda(format_docs), "question": RunnablePassthrough()}
        #| RunnableLambda(log_retrieved_context)
        | prompt
        | llm
        | StrOutputParser()
    )

    print("RAG pipeline setup complete.")

async def query_rag(question: str) -> str:
    if not rag_chain:
        return "RAG pipeline is not initialized."
    
    return await rag_chain.ainvoke(question)