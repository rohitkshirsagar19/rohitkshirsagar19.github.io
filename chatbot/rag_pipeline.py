from langchain_core.documents import Document
from langchain_community.vectorstores import FAISS
# UPDATED IMPORT: We now use the API-based embedder
from langchain_huggingface import HuggingFaceEndpointEmbeddings
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain_groq import ChatGroq
from langchain_core.prompts import ChatPromptTemplate
from langchain_core.runnables import RunnablePassthrough, RunnableLambda
from langchain_core.output_parsers import StrOutputParser

rag_chain = None

def format_docs(docs):
    return "\n\n".join(doc.page_content for doc in docs)

def setup_rag_pipeline():
    global rag_chain

    print("Setting up RAG pipeline...")
    
    with open("knowledge_base.txt", "r") as f:
        full_text = f.read()

    parts = full_text.split("# Projects")
    general_info = parts[0]
    projects_info = parts[1] if len(parts) > 1 else ""
    documents = [Document(page_content=general_info.strip())]
    project_chunks = projects_info.split("--- PROJECT ---")
    for project in project_chunks:
        if project.strip():
            documents.append(Document(page_content=f"Project Details:\n{project.strip()}"))

    # UPDATED EMBEDDINGS:
    # This now uses the Hugging Face API via your secret token instead of a local model.
    # It will automatically find your HUGGINGFACEHUB_API_TOKEN from the environment.
    embeddings = HuggingFaceEndpointEmbeddings()

    vector_store = FAISS.from_documents(documents, embeddings)
    retriever = vector_store.as_retriever(search_kwargs={"k": 12})

    # Find this template variable
    template = """
    You are an AI assistant for Rohit Kshirsagar's portfolio. 
    Answer the question based only on the following context.
    If you don't know the answer, just say that you don't know.
    Use Markdown for formatting, including lists, bold text for titles, and newlines for readability.

    Context: {context}

    Question: {question}
    """
    prompt = ChatPromptTemplate.from_template(template)
    llm = ChatGroq(model="llama-3.1-8b-instant")

    rag_chain = (
        {"context": retriever | RunnableLambda(format_docs), "question": RunnablePassthrough()}
        | prompt
        | llm
        | StrOutputParser()
    )
    print("RAG pipeline setup complete.")

async def query_rag(question: str) -> str:
    if not rag_chain:
        return "RAG pipeline is not initialized."
    return await rag_chain.ainvoke(question)