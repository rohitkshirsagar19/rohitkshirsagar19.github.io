import React, { useState, useEffect } from 'react';
import {
  Gamepad2, User, Briefcase, Award, Laptop, GraduationCap, Mail,
  Github, Linkedin, Phone, AtSign, ChevronDown, Trophy, Clock
} from 'lucide-react';
import Navigation from '@/components/Navigation';

import ProjectCard from '@/components/ProjectCard';
import Certificate from '@/components/Certificate';
import { Download } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Instagram } from 'lucide-react';
import { FaRobot } from 'react-icons/fa';
import Chatbot from '@/components/Chatbot';


const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);
  const [textVisible, setTextVisible] = useState("");
  const fullText = "Incoming SDE | GenAI Engineer | Golang & Systems | LLMs & Backend Dev";

  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // State for visible projects
  const [visibleProjects, setVisibleProjects] = useState(3);

  const projects = [
    {
      "title": "DevBoss: Autonomous AI IT Manager",
      "description": "Engineered a multi-agent AI system to act as an intelligent IT manager, automating the software development lifecycle from planning and Jira ticket creation to progress tracking. Features a Reinforcement Learning module for self-optimization and a React dashboard for real-time monitoring.",
      "technologies": ["Python", "CrewAI", "Reinforcement Learning", "FastAPI", "React", "TypeScript", "Jira API", "PyTorch", "Multi-Agent Systems"],
      "githubUrl": "https://github.com/rohitkshirsagar19/DevBoss",
      "imageIndex": 0
    },
    {
      title: "Aryabhatta Search",
      description: "Built a technical search engine focused on engineering and scientific documents with advanced filtering capabilities.",
      technologies: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/rohitkshirsagar19/aryabhatta-search",
      imageIndex: 1
    },
    {
      title: "AI-Powered Multi-Disease Predictor",
      description: "Developed a full-stack ML application for predicting multiple diseases using multiple trained models. Integrated FastAPI for backend APIs, a modern React (Vite) frontend with dynamic forms, and an MLflow pipeline for experiment tracking. Enabled user data submission and on-demand model retraining. Deployed the entire system on AWS using Docker containers—fully optimized for low-resource environments.",
      technologies: ["React", "FastAPI", "MLflow", "Scikit-Learn", "Docker", "AWS", "PyYAML", "GitHub Actions"],
      githubUrl: "https://github.com/rohitkshirsagar19/multi-disease-predictor",
      imageIndex: 2
    },
    {
      title: "AI Trends Research with CrewAI",
      description: "Built an automated research system that summarizes the latest AI trends for 2025 using CrewAI's multi-agent collaboration and LLM tools.",
      technologies: ["Python", "CrewAI", "Groq", "Multi-Agent Systems"],
      githubUrl: "https://github.com/rohitkshirsagar19/CrewAI-Content-Research.git",
      imageIndex: 3
    },
    {
      title: "Edulite OS",
      description: "EduLite OS is a lightweight, ubuntu-based Linux operating system tailored for educational use, especially on low-end hardware (≤2GB RAM). It comes pre-installed with essential offline learning tools, teacher dashboards, Kolibri, and Python educational apps — all optimized for speed and simplicity.",
      technologies: ["Python", "Linux", "Ubuntu", "Kolibri", "Cubic"],
      githubUrl: "https://github.com/rohitkshirsagar19/EduliteOS",
      liveUrl: "https://edulite-os-showcase.vercel.app/",
      imageIndex: 4
    },
    {
      title: "Plagiarism Checker - Basic",
      description: "This Plagiarism Checker is a simple yet effective tool to compare text documents and detect similarity using TF-IDF (Term Frequency-Inverse Document Frequency) and cosine similarity.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Streamlit", "PyPDF2"],
      githubUrl: "https://github.com/rohitkshirsagar19/plagiarism-checker-basic",
      liveUrl: "https://plagiarism-checker-basic.streamlit.app/",
      imageIndex: 5
    },
    {
      title: "Terminal Portfolio",
      description: "Built using HTML, CSS, and JavaScript, this website emulates a Linux terminal, allowing users to explore my projects, skills, and experience using real commands.",
      technologies: ["HTML", "CSS", "JS", "Terminal"],
      githubUrl: "https://github.com/rohitkshirsagar19/terminal-portfolio",
      liveUrl: "https://rohitkshirsagar19.vercel.app/",
      imageIndex: 6
    },
    {
      title: "AI-Powered Text & Image Generator",
      description: "Built a full-stack AI application for text and image generation using a fine-tuned GPT-2 model and Stable Diffusion, featuring user authentication, chat history, and MLflow experiment tracking.( With low resource usage)",
      technologies: ["React", "Flask", "GPT-2", "Stable Diffusion", "MLflow", "PostgreSQL"],
      githubUrl: "https://github.com/aissm-deeplearning/llm",
      imageIndex: 7
    },
    {
      title: "Stock Price Forecasting",
      description: "Developed a web application for stock price prediction using historical data and machine learning forecasting models.",
      technologies: ["Python", "Streamlit", "YFinance", "Scikit-learn"],
      githubUrl: "https://github.com/rohitkshirsagar19/Stock_Analysis_Model",
      imageIndex: 8
    },
    {
      title: "Fantasy Sports Optimisation",
      description: "Created an AI-driven algorithm for fantasy sports team selection using predictive modeling and optimization techniques.",
      technologies: ["Python", "MLOps", "Docker", "TensorFlow"],
      githubUrl: "https://github.com/rohitkshirsagar19/fantasy-sports-machine-learning.git",
      imageIndex: 9
    },
    {
      title: "GoLang Custom LoadBalancer",
      description: "Engineered a high-performance Layer 7 Load Balancer in Go using Round-Robin algorithms. Implemented thread-safe concurrency with Mutexes and active self-healing health checks via background Goroutines.",
      technologies: ["Golang", "Concurrency", "Distributed Systems", "Networking"],
      githubUrl: "https://github.com/rohitkshirsagar19/GO-Custom-LoadBalancer",
      imageIndex: 10
    },
    {
      title: "Go-Grab: Universal CLI Downloader",
      description: "Developed an interactive TUI tool in Go using the Bubble Tea framework to orchestrate concurrent media downloads via yt-dlp. Implemented non-blocking I/O using Goroutines and Channels, featuring real-time stdout streaming and regex-based progress parsing.",
      technologies: ["Golang", "Bubble Tea", "Concurrency", "Systems Engineering"],
      githubUrl: "https://github.com/rohitkshirsagar19/go-grab",
      imageIndex: 11
    },
  ];

  // Text typing effect
  useEffect(() => {
    if (isLoading) return;

    let i = 0;
    const typingInterval = setInterval(() => {
      setTextVisible(fullText.substring(0, i));
      i++;

      if (i > fullText.length) {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, [isLoading]);

  // Initial loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setShowLoader(false), 500); // Wait for fade out
    }, 2000);

    return () => clearTimeout(timer);
  }, []);


  // Form submission handler
  const handleSendMessage = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        console.log('Message sent successfully!');
        toast({ title: "Success!", description: "Thanks for your submission!" });
        setName('');
        setEmail('');
        setMessage('');
        form.reset();
      } else {
        const result = await response.json();
        if (result.errors) {
          throw new Error(result.errors.map(error => error.message).join(", "));
        } else {
          throw new Error("Oops! There was a problem submitting your form ;) Please try contacting directly through the mail : rohitkshirsagar1904@gmail.com");
        }
      }
    } catch (error) {
      console.error('Failed to send message:', error);
      toast({
        variant: "destructive",
        title: "Error!",
        description: `Failed to send message. ${error.message || 'Please try again.'}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-0 md:pt-16 relative">
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
      <section id="home" className="min-h-screen flex flex-col items-center justify-center py-16 md:py-0">
        <div className="animate-pixelate">
          <h1 className="font-pixel text-4xl md:text-6xl text-retro-purple mb-2">
            ROHIT KSHIRSAGAR
          </h1>
          <div className="h-8 relative">
            <p className="font-retro text-xl text-center text-retro-light-gray">
              {textVisible}<span className="animate-blink">_</span>
            </p>
          </div>
        </div>

        <div className="mt-12 animate-float">
          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="pixel-button flex items-center"
          >
            START
            <Gamepad2 className="ml-2 w-5 h-5" />
          </button>
        </div>

        <div className="mt-4 animate-float">
          <a
            href="https://drive.google.com/file/d/1dx-xGzTkYDoPOAtsZJ7L2x4XVfSxqvGc/view?usp=drive_link"
            download="rohit_kshirsagar_resume.pdf"
            className="pixel-button flex items-center mt-2"
          >
            DOWNLOAD RESUME
            <Download className="ml-2 w-5 h-5" />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <ChevronDown className="w-8 h-8 text-retro-light-gray" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 retro-container">
        <h2 className="section-title">ABOUT ME</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
              <p className="font-retro text-lg mb-6">
                I'm an AI and Data Science student passionate about building intelligent
                applications. Currently pursuing my B.Tech in Computer Science with a focus
                on AI and Data Science at AISSMS Institute in Pune.
              </p>
              <p className="font-retro text-lg">
                As a Python Developer at MEGAMINDS IT Services, I designed and implemented
                solutions to optimize workflows and enhance data-driven decision making.
                I'm constantly exploring new technologies and approaches to solve complex problems.
              </p>

              <div className="mt-8">
                <div className="flex items-center mb-4">
                  <Trophy className="w-5 h-5 text-retro-yellow mr-2" />
                  <h3 className="font-pixel text-lg text-retro-yellow">ACHIEVEMENTS</h3>
                </div>

                <div className="bg-retro-black p-4 rounded">
                  <p className="font-retro text-lg">
                    <span className="text-retro-yellow">↳</span> Winner of InnovateYou Techathon 2.0 2025
                  </p>
                  <p className="font-retro text-sm text-retro-light-gray mt-1">
                    Awarded "Best Solution" for Edtech Domain
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CERTIFICATES */}

          <div className="animate-pixel-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="pixel-border bg-retro-dark-gray p-6 h-full">
              <div className="flex items-center mb-4">
                <Award className="w-5 h-5 text-retro-green mr-2" />
                <h3 className="font-pixel text-lg text-retro-green">CERTIFICATES</h3>
              </div>

              <div className="space-y-3">
                <Certificate
                  name="The Complete Python Pro Bootcamp"
                  issuer="Udemy"
                  year={2023}
                />
                <Certificate
                  name="Machine Learning A-Z"
                  issuer="Udemy"
                  year={2024}
                />
                <Certificate
                  name="Database Programming with SQL"
                  issuer="Oracle Academy"
                  year={2023}
                />
                <Certificate
                  name="Full Stack Development"
                  issuer="Free Code Camp"
                  year={2024}
                />
                <Certificate
                  name="Oracle Cloud Infrastructure 2025 Foundations Associate (1Z0-1085-25)"
                  issuer="Oracle"
                  year={2025}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 retro-container bg-retro-black bg-opacity-30">

        <h2 className="section-title">EXPERIENCE</h2>

        {/* 1. ApexAI Experience (New - June 2025) */}
        <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in mb-8">
          <div className="flex items-start md:items-center flex-col md:flex-row mb-4">
            <h3 className="font-pixel text-xl text-retro-blue">AI Engineer Intern</h3>
            <span className="md:mx-4 text-retro-light-gray hidden md:inline">•</span>
            <span className="font-retro text-retro-light-gray mt-1 md:mt-0">ApexAI Solutions Pvt Ltd</span>
          </div>

          <div className="flex items-center mb-4">
            <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
            <span className="font-retro text-sm text-retro-light-gray">June 2025 – September 2025</span>
          </div>

          <ul className="space-y-2 font-retro">
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Developed multilingual NLP pipeline for Hinglish transcripts using fine-tuned Qwen-3 32B (95% accuracy)</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Built LLM-powered transcript-to-JSON tool, reducing manual review effort by 80%</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Managed project execution and client communications to ensure timely NLP solution delivery</span>
            </li>
          </ul>
        </div>

        {/* 2. Megaminds Experience (Updated - July 2024) */}
        <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
          <div className="flex items-start md:items-center flex-col md:flex-row mb-4">
            <h3 className="font-pixel text-xl text-retro-blue">Python Developer</h3>
            <span className="md:mx-4 text-retro-light-gray hidden md:inline">•</span>
            <span className="font-retro text-retro-light-gray mt-1 md:mt-0"><a href="https://megamindsit.in/" target="_blank" rel="noopener noreferrer" className="hover:text-retro-blue transition-colors">MEGAMINDS IT Services</a></span>
          </div>

          <div className="flex items-center mb-4">
            <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
            <span className="font-retro text-sm text-retro-light-gray">July 2024 - September 2024</span>
          </div>

          <ul className="space-y-2 font-retro">
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Designed Python-based academic solutions, implementing algorithms from 5+ research papers</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Optimized data preprocessing pipelines, improving ML model accuracy by 15%</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Contributed to the timely delivery of 3+ projects alongside the R&D team</span>
            </li>
          </ul>
        </div>

      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 md:py-24 retro-container">
        <h2 className="section-title">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="animate-pixel-fade-in h-full"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
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

        {visibleProjects < projects.length && (
          <div className="text-center mt-8">
            <button
              onClick={() => setVisibleProjects(projects.length)}
              className="pixel-button"
            >
              View More
            </button>
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 md:py-24 retro-container bg-retro-black bg-opacity-30">
        <h2 className="section-title">SKILLS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Programming */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
            <h3 className="font-pixel text-xl text-retro-green mb-6">PROGRAMMING</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Python', 'C++', 'JavaScript', 'SQL', 'TypeScript', 'GoLang'].map((skill) => (
                <div key={skill} className="bg-retro-black border border-retro-green/30 p-2 rounded text-center font-retro text-retro-green hover:border-retro-green transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Frameworks */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-pixel text-xl text-retro-blue mb-6">FRAMEWORKS</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Flask', 'FastAPI', 'Django', 'Streamlit', 'Next.js', 'TensorFlow', 'CrewAI', 'LangChain'].map((skill) => (
                <div key={skill} className="bg-retro-black border border-retro-blue/30 p-2 rounded text-center font-retro text-retro-blue hover:border-retro-blue transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* DevOps & Deployment */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-pixel text-xl text-retro-pink mb-6">DEVOPS & DEPLOYMENT</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Docker', 'MLflow', 'GitHub Actions', 'AWS'].map((skill) => (
                <div key={skill} className="bg-retro-black border border-retro-pink/30 p-2 rounded text-center font-retro text-retro-pink hover:border-retro-pink transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-pixel text-xl text-retro-yellow mb-6">TOOLS & TECHNOLOGIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Git', 'Linux', 'Bash', 'Jupyter', 'Pandas', 'Scikit-learn', 'NumPy', 'REST API', 'Supabase', 'LLM APIs', 'RAG'].map((tool) => (
                <div key={tool} className="bg-retro-black border border-retro-yellow/30 p-2 rounded text-center font-retro text-retro-yellow hover:border-retro-yellow transition-colors">
                  {tool}
                </div>
              ))}
            </div>
          </div>

          {/* Databases */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="font-pixel text-xl text-retro-orange mb-6">DATABASES</h3>
            <div className="grid grid-cols-2 gap-4">
              {['MySQL', 'PostgreSQL', 'MongoDB', 'Qdrant (Vector DB)', 'SQLite'].map((skill) => (
                <div key={skill} className="bg-retro-black border border-retro-orange/30 p-2 rounded text-center font-retro text-retro-orange hover:border-retro-orange transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-pixel text-xl text-retro-white mb-6">SOFT SKILLS</h3>
            <div className="grid grid-cols-2 gap-4">
              {['Teamwork', 'Problem Solving', 'Communication', 'Research'].map((skill) => (
                <div key={skill} className="bg-retro-black border border-retro-white/30 p-2 rounded text-center font-retro text-retro-white hover:border-retro-white transition-colors">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 md:py-24 retro-container">
        <h2 className="section-title">EDUCATION</h2>

        <div className="space-y-8">
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
            <div className="flex items-start md:items-center flex-col md:flex-row mb-2">
              <h3 className="font-pixel text-xl text-retro-purple">B.Tech in Computer Science</h3>
              <span className="md:mx-4 text-retro-light-gray">•</span>
              <span className="font-retro text-retro-light-gray">AI and Data Science</span>
            </div>

            <p className="font-retro mb-2">AISSMS Institute, Pune</p>

            <div className="flex items-center">
              <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
              <span className="font-retro text-sm text-retro-light-gray">Aug 2022 - Expected May 2026</span>
            </div>
          </div>

          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-start md:items-center flex-col md:flex-row mb-2">
              <h3 className="font-pixel text-xl text-retro-green">Higher Secondary</h3>
            </div>

            <p className="font-retro mb-2">New High School Main, Amravati</p>

            <div className="flex items-center">
              <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
              <span className="font-retro text-sm text-retro-light-gray">Completed June 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 retro-container bg-retro-black bg-opacity-30">
        <h2 className="section-title">CONTACT</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
            <h3 className="font-pixel text-xl text-retro-blue mb-6">GET IN TOUCH</h3>

            <div className="space-y-4 font-retro">


              <a href="mailto:rohitkshirsagar1904@gmail.com" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                <AtSign className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                <span>rohitkshirsagar1904@gmail.com</span>
              </a>

              <a href="https://linkedin.com/in/rohitkshirsagar19" target="_blank" rel="noopener noreferrer" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                <Linkedin className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                <span>linkedin.com/in/rohitkshirsagar19</span>
              </a>

              <a href="https://github.com/rohitkshirsagar19" target="_blank" rel="noopener noreferrer" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                <Github className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                <span>github.com/rohitkshirsagar19</span>
              </a>

              <a href="https://www.instagram.com/rohitkshirsagar19" target="_blank" rel="noopener noreferrer" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                <Instagram className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                <span>instagram.com/rohitkshirsagar19</span>
              </a>
            </div>
          </div>

          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-pixel text-xl text-retro-purple mb-6">SEND MESSAGE</h3>

            <form action="https://formspree.io/f/xblgwrab" method="POST" className="space-y-4" onSubmit={handleSendMessage}>
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-retro-black border-2 border-retro-gray p-3 font-retro text-retro-light-gray focus:border-retro-purple outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="_replyto"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-retro-black border-2 border-retro-gray p-3 font-retro text-retro-light-gray focus:border-retro-purple outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  className="w-full bg-retro-black border-2 border-retro-gray p-3 font-retro text-retro-light-gray focus:border-retro-purple outline-none resize-none"
                ></textarea>
              </div>

              <input type="text" name="_gotcha" style={{ display: 'none' }} />
              <button
                type="submit"
                className="pixel-button w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* --- NEW: Floating Chatbot Logic --- */}
      {!isChatbotOpen && (
        <button
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-6 right-6 z-50 p-4 bg-retro-purple text-white rounded-full shadow-lg hover:bg-retro-dark-purple transition-all duration-300 "
          aria-label="Open AI Assistant"
        >
          <FaRobot size={28} />
        </button>
      )}

      {isChatbotOpen && <Chatbot onClose={() => setIsChatbotOpen(false)} />}
      {/* --- END: Floating Chatbot Logic --- */}

      <footer className="py-8 bg-retro-black">
        <div className="retro-container text-center">
          <p className="font-retro text-retro-gray text-sm mb-4 italic animate-pixel-fade-in">Aamhi Saare Khavayye 😋</p>
          <p className="font-pixel text-retro-light-gray text-sm">
            © 2025 ROHIT KSHIRSAGAR • ALL RIGHTS RESERVED
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;