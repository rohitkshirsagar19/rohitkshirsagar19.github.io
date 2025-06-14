import React, { useState, useEffect } from 'react';
import {
  Gamepad2, User, Briefcase, Award, Laptop, GraduationCap, Mail,
  Github, Linkedin, Phone, AtSign, ChevronDown, Trophy, Clock
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import SkillBar from '@/components/SkillBar';
import ProjectCard from '@/components/ProjectCard';
import Certificate from '@/components/Certificate';
import { Download } from 'lucide-react';
import { toast } from "@/hooks/use-toast"; 
import { Instagram } from 'lucide-react';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [textVisible, setTextVisible] = useState("");
  const fullText = "AI & Data Science Enthusiast | Python Developer";

  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); 

  // **New: State for visible projects**
  const [visibleProjects, setVisibleProjects] = useState(3);

  // **New: Project data array**
  const projects = [
    {
      title: "Fantasy Sports Optimisation",
      description: "Created an AI-driven algorithm for fantasy sports team selection using predictive modeling and optimization techniques.",
      technologies: ["Python", "MLOps", "Docker", "TensorFlow"],
      githubUrl: "https://github.com/rohitkshirsagar19/fantasy-sports-machine-learning.git",
      imageIndex: 0
    },
    {
  title: "AI-Powered Multi-Disease Predictor",
  description: "Developed a full-stack ML application for predicting multiple diseases using multiple trained models. Integrated FastAPI for backend APIs, a modern React (Vite) frontend with dynamic forms, and an MLflow pipeline for experiment tracking. Enabled user data submission and on-demand model retraining. Deployed the entire system on AWS using Docker containers—fully optimized for low-resource environments.",
  technologies: ["React", "FastAPI", "MLflow", "Scikit-Learn", "Docker", "AWS","PyYAML","GitHub Actions"],
  githubUrl: "https://github.com/rohitkshirsagar19/multi-disease-predictor",
  imageIndex: 1
    },
    {
      title: "Aryabhatta Search",
      description: "Built a technical search engine focused on engineering and scientific documents with advanced filtering capabilities.",
      technologies: ["Next.js", "Supabase", "TypeScript", "TailwindCSS"],
      githubUrl: "https://github.com/rohitkshirsagar19/aryabhatta-search",
      imageIndex: 2
    },
    {
      title: "Edulite OS",
      description: "EduLite OS is a lightweight, ubuntu-based Linux operating system tailored for educational use, especially on low-end hardware (≤2GB RAM). It comes pre-installed with essential offline learning tools, teacher dashboards, Kolibri, and Python educational apps — all optimized for speed and simplicity.",
      technologies: ["Python", "Linux", "Ubuntu", "Kolibri", "Cubic"],
      githubUrl: "https://github.com/rohitkshirsagar19/EduliteOS",
      liveUrl: "https://edulite-os-showcase.vercel.app/",
      imageIndex: 3
    },
    {
      title: "Plagiarism Checker - Basic",
      description: "This Plagiarism Checker is a simple yet effective tool to compare text documents and detect similarity using TF-IDF (Term Frequency-Inverse Document Frequency) and cosine similarity.",
      technologies: ["Python", "NLTK", "Scikit-learn", "Streamlit", "PyPDF2"],
      githubUrl: "https://github.com/rohitkshirsagar19/plagiarism-checker-basic",
      liveUrl: "https://plagiarism-checker-basic.streamlit.app/",
      imageIndex: 4
    },
    {
      title: "Terminal Portfolio",
      description: "Built using HTML, CSS, and JavaScript, this website emulates a Linux terminal, allowing users to explore my projects, skills, and experience using real commands.",
      technologies: ["HTML", "CSS", "JS", "Terminal"],
      githubUrl: "https://github.com/rohitkshirsagar19/terminal-portfolio",
      liveUrl: "https://rohitkshirsagar19.vercel.app/",
      imageIndex: 5
    },
    {
      title: "AI-Powered Text & Image Generator",
      description: "Built a full-stack AI application for text and image generation using a fine-tuned GPT-2 model and Stable Diffusion, featuring user authentication, chat history, and MLflow experiment tracking.( With low resource usage)",
      technologies: ["React", "Flask", "GPT-2", "Stable Diffusion", "MLflow", "PostgreSQL"],
      githubUrl: "https://github.com/aissm-deeplearning/llm",
      imageIndex: 6
    },
    {
      title: "Stock Price Forecasting",
      description: "Developed a web application for stock price prediction using historical data and machine learning forecasting models.",
      technologies: ["Python", "Streamlit", "YFinance", "Scikit-learn"],
      githubUrl: "https://github.com/rohitkshirsagar19/Stock_Analysis_Model",
      imageIndex: 7
    }
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
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Form submission handler
  const handleSendMessage = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const form = event.target;
    const statusElement = document.createElement('div'); 
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
          throw new Error("Oops! There was a problem submitting your form");
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

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-retro-black">
        <div className="animate-pixel-pulse">
          <Gamepad2 className="w-16 h-16 text-retro-purple" />
        </div>
        <h1 className="font-pixel text-retro-purple mt-4 text-xl">LOADING...</h1>
        <div className="w-64 h-4 bg-retro-dark-gray mt-4">
          <div className="h-full bg-retro-purple animate-pulse" style={{ width: '60%' }}></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-0 md:pt-16">
      <Navigation />

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
            href="/rohit_resume.pdf" 
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 retro-container bg-retro-black bg-opacity-30">
        <h2 className="section-title">EXPERIENCE</h2>

        <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in">
          <div className="flex items-start md:items-center flex-col md:flex-row mb-4">
            <h3 className="font-pixel text-xl text-retro-blue">Python Developer</h3>
            <span className="md:mx-4 text-retro-light-gray">•</span>
            <span className="font-retro text-retro-light-gray">MEGAMINDS IT Services</span>
          </div>

          <div className="flex items-center mb-4">
            <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
            <span className="font-retro text-sm text-retro-light-gray">July 2024 - September 2024</span>
          </div>

          <ul className="space-y-2 font-retro">
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Designed and implemented Python solutions to optimize workflows and analyze data</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Developed data pipelines to enhance data-driven decision making</span>
            </li>
            <li className="flex items-start">
              <span className="text-retro-blue mr-2">↳</span>
              <span>Collaborated with cross-functional teams to integrate AI-powered features</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Projects Section - Updated */}
      <section id="projects" className="py-16 md:py-24 retro-container">
        <h2 className="section-title">PROJECTS</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.slice(0, visibleProjects).map((project, index) => (
            <div
              key={index}
              className="animate-pixel-fade-in"
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
            <div>
              <SkillBar name="Python" level={5} />
              <SkillBar name="C++" level={3} />
              <SkillBar name="JavaScript" level={2} />
              <SkillBar name="SQL" level={2.5} />
              <SkillBar name="TypeScript" level={1} />
              <SkillBar name="GO" level={1} />
            </div>
          </div>
          {/* Frameworks */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-pixel text-xl text-retro-blue mb-6">FRAMEWORKS</h3>
            <div>
              <SkillBar name="Flask" level={4} />
              <SkillBar name="FastAPI" level={2.3} />
              <SkillBar name="Streamlit" level={4} />
              <SkillBar name="Next.js" level={2} />
              <SkillBar name="TensorFlow" level={1} />
            </div>
          </div>
          {/* DevOps & Deployment */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.3s' }}>
            <h3 className="font-pixel text-xl text-retro-pink mb-6">DEVOPS & DEPLOYMENT</h3>
            <div>
              <SkillBar name="Docker" level={3} />
              <SkillBar name="MLflow" level={2} />
              <SkillBar name="GitHub Actions" level={1} />
               <SkillBar name="AWS" level={2.5} />
            </div>
          </div>
          {/* Tools & Technologies */}
          <div className="pixel-border bg-retro-dark-gray p-6 md:col-span-2 animate-pixel-fade-in" style={{ animationDelay: '0.4s' }}>
            <h3 className="font-pixel text-xl text-retro-yellow mb-6">TOOLS & TECHNOLOGIES</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Git', 'Linux', 'Bash', 'Jupyter', 'Pandas', 'Scikit-learn', 'NumPy', 'REST API', 'Supabase'].map((tool, index) => (
                <div key={index} className="bg-retro-dark-purple p-2 rounded text-center font-retro">
                  {tool}
                </div>
              ))}
            </div>
          </div>
          {/* Databases */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.5s' }}>
            <h3 className="font-pixel text-xl text-retro-orange mb-6">DATABASES</h3>
            <div>
              <SkillBar name="MySQL" level={3} />
              <SkillBar name="PostgreSQL" level={2.5} />
              <SkillBar name="MongoDB" level={2} />
            </div>
          </div>
          {/* Soft Skills */}
          <div className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in" style={{ animationDelay: '0.6s' }}>
            <h3 className="font-pixel text-xl text-retro-white mb-6">SOFT SKILLS</h3>
            <div>
              <SkillBar name="Teamwork" level={4} />
              <SkillBar name="Problem Solving" level={5} />
              <SkillBar name="Communication" level={5} />
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
              <a href="tel:9834978407" className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors group">
                <Phone className="w-5 h-5 mr-3 group-hover:text-retro-purple" />
                <span>(+91) 9834978407</span>
              </a>

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

      {/* Footer */}
      <footer className="py-8 bg-retro-black">
        <div className="retro-container">
          <div className="text-center">
            <p className="font-pixel text-retro-light-gray text-sm">
              © 2025 ROHIT KSHIRSAGAR • ALL RIGHTS RESERVED
            </p>
            <p className="font-retro text-retro-gray text-xs mt-2">
              
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;