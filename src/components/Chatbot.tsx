import React, { useState, useRef, useEffect } from 'react';
import { X } from 'lucide-react'; // Import close icon

// Define the structure for a message object
interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// Props for the Chatbot component
interface ChatbotProps {
  onClose: () => void; // Function to call when the chatbot should close
}

// Get the backend API URL from the environment variable
const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';

const Chatbot: React.FC<ChatbotProps> = ({ onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "INITIALIZING... ROHIT-BOT v1.0 ONLINE. Ask me about Rohit's portfolio!",
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch(`${API_URL}/api/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      const botMessage: Message = { sender: 'bot', text: data.response };
      setMessages((prev) => [...prev, botMessage]);

    } catch (error) {
      console.error("Failed to get response from bot:", error);
      const errorMessage: Message = {
        sender: 'bot',
        text: 'ERROR: Cannot connect to the AI mainframe. Please try again later.',
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    // Updated styling for fixed position, z-index, and close button
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm h-[450px] pixel-border bg-retro-dark-gray p-4 flex flex-col animate-scale-in">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-pixel text-lg text-retro-blue">ROHIT-BOT</h3>
        <button onClick={onClose} className="text-retro-white hover:text-retro-purple transition-colors">
          <X size={20} />
        </button>
      </div>
      <div className="flex-1 overflow-y-auto mb-4 font-retro pr-2">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-3 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <span
              className={`inline-block p-2 rounded-md ${
                msg.sender === 'user'
                  ? 'bg-retro-blue text-white'
                  : 'bg-retro-gray text-retro-white'
              }`}
            >
              {msg.sender === 'user' ? `> ${msg.text}` : msg.text}
            </span>
          </div>
        ))}
        {isLoading && (
          <div className="text-left">
            <span className="inline-block p-2 rounded-md bg-retro-gray text-retro-white">
              <span className="animate-blink">...</span>
            </span>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 bg-retro-black border-2 border-retro-gray p-2 font-retro text-retro-light-gray focus:border-retro-purple outline-none"
          disabled={isLoading}
        />
        <button type="submit" className="pixel-button" disabled={isLoading}>
          SEND
        </button>
      </form>
    </div>
  );
};

export default Chatbot;