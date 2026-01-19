import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { Download, Gamepad2, ChevronRight, Trophy } from 'lucide-react';
import { FaRobot } from 'react-icons/fa';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [textVisible, setTextVisible] = useState("");
  const fullText = "Incoming SDE | GenAI Engineer | Golang & Systems | LLMs & Backend Dev";
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Text typing effect
  useEffect(() => {
    if (isLoading) return;
    let i = 0;
    const typingInterval = setInterval(() => {
      setTextVisible(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(typingInterval);
    }, 50); // Speed up typing slightly
    return () => clearInterval(typingInterval);
  }, [isLoading]);

  // Initial loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowLoader(false), 500);
    }, 1500); // Shorter load time
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-0 md:pt-16 relative bg-retro-black">
      <Navigation />

      {/* Loading Screen Overlay */}
      {showLoader && (
        <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-retro-black transition-opacity duration-500 ${!isLoading ? 'opacity-0' : 'opacity-100'}`}>
          <div className="animate-pixel-pulse">
            <Gamepad2 className="w-16 h-16 text-retro-purple" />
          </div>
          <h1 className="font-pixel text-retro-purple mt-4 text-xl">LOADING...</h1>
          <div className="w-64 h-4 bg-retro-dark-gray mt-4">
            <div className="h-full bg-retro-purple animate-pulse" style={{ width: '60%' }}></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center py-16 md:py-0 retro-container">
        <div className="animate-pixelate text-center">
          <h1 className="font-pixel text-4xl md:text-6xl text-retro-purple mb-4">
            ROHIT KSHIRSAGAR
          </h1>
          <div className="h-16 md:h-8 relative mb-8">
            <p className="font-retro text-xl text-center text-retro-light-gray">
              {textVisible}<span className="animate-blink">_</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4 animate-float mt-8">
          <Link to="/projects" className="pixel-button flex items-center justify-center">
            VIEW PROJECTS
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>

          <a
            href="https://drive.google.com/file/d/1GnBC_wHsDtz9wrk1eLmgY9zJYffpdM_f/view?usp=drive_link"
            download="rohit_kshirsagar_resume.pdf"
            className="pixel-button bg-retro-dark-gray hover:bg-retro-gray flex items-center justify-center"
          >
            DOWNLOAD RESUME
            <Download className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>

      {/* Brief About */}
      <section className="py-16 bg-retro-dark-gray/20">
        <div className="retro-container">
          <h2 className="section-title">ABOUT ME</h2>
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in max-w-4xl mx-auto">
            <p className="font-retro text-lg mb-6">
              I am a Computer Science (AI & DS) engineer who enjoys looking under the hood. I don’t just use APIs; I build the systems that scale them.
              My engineering focus lies at the intersection of Distributed Systems and Generative AI. I believe the best software is built by understanding both the model layer and the infrastructure layer.
            </p>
            <p className="font-retro text-lg mb-6">
              
            </p>

            <div className="mt-8 bg-retro-black p-4 rounded border border-retro-yellow/30">
              <div className="flex items-center mb-2">
                <Trophy className="w-5 h-5 text-retro-yellow mr-2" />
                <h3 className="font-pixel text-lg text-retro-yellow">LATEST ACHIEVEMENT</h3>
              </div>
              <p className="font-retro text-lg">
                Winner of InnovateYou Techathon 2.0 2025
              </p>
            </div>

            <div className="mt-8 text-center">
              <Link to="/skills" className="text-retro-purple hover:underline font-pixel text-sm">
                VIEW FULL SKILLS ARSENAL →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 retro-container">
        <h2 className="section-title">FEATURED PROJECTS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.slice(0, 3).map((project, index) => (
            <div
              key={index}
              className="animate-pixel-fade-in h-full"
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                imageIndex={project.imageIndex}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link to="/projects" className="pixel-button inline-flex items-center">
            VIEW ALL PROJECTS <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Floating Chatbot Logic */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-20 md:bottom-6 right-6 z-50 p-4 bg-retro-purple text-white rounded-full shadow-lg hover:bg-retro-dark-purple transition-all duration-300 "
          aria-label="Open AI Assistant"
        >
          <FaRobot size={28} />
        </button>
      )}
      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}

      <footer className="py-8 bg-retro-black mt-12 border-t border-retro-dark-gray">
        <div className="retro-container text-center">
          <p className="font-retro text-retro-gray text-sm mb-4 italic">Aamhi Saare Khavayye 😋</p>
          <p className="font-pixel text-retro-light-gray text-sm">
            © 2026 ROHIT KSHIRSAGAR • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;