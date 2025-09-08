from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import os
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

from rag_pipeline import setup_rag_pipeline, query_rag

app = FastAPI()

# After
origins = [
    "http://localhost:8080",              # Your vite dev server
    "http://127.0.0.1:8080",            # Also your vite dev server (to be safe)
    "http://localhost:5173",              # Vite's default dev port
    "https://rohitkshirsagar19.github.io",  # Your deployed portfolio URL
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("startup")
async def startup_event():
    setup_rag_pipeline()

class ChatRequest(BaseModel):
    query: str

@app.get("/")
def read_root():
    return {"status": "ok"}

@app.post("/api/chat")
async def chat_endpoint(request: ChatRequest):
    """
    Receives a user's query and returns the RAG response.
    """
    response = await query_rag(request.query)
    return {"response": response}