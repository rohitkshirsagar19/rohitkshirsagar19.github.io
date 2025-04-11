
import React from 'react';
import { Gamepad2, User, Briefcase, Award, Laptop, GraduationCap, Mail } from 'lucide-react';

const Navigation: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-retro-black border-t-4 border-retro-purple z-50 md:top-0 md:bottom-auto md:border-t-0 md:border-b-4">
      <div className="flex justify-around items-center py-2">
        <button 
          onClick={() => scrollToSection('home')}
          className="flex flex-col items-center text-retro-light-gray hover:text-retro-purple transition-colors group"
        >
          <Gamepad2 className="w-6 h-6 group-hover:animate-pixel-bounce" />
          <span className="text-xs font-pixel hidden md:block mt-1">Home</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('about')}
          className="flex flex-col items-center text-retro-light-gray hover:text-retro-purple transition-colors group"
        >
          <User className="w-6 h-6 group-hover:animate-pixel-bounce" />
          <span className="text-xs font-pixel hidden md:block mt-1">About</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('projects')}
          className="flex flex-col items-center text-retro-light-gray hover:text-retro-purple transition-colors group"
        >
          <Briefcase className="w-6 h-6 group-hover:animate-pixel-bounce" />
          <span className="text-xs font-pixel hidden md:block mt-1">Projects</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('skills')}
          className="flex flex-col items-center text-retro-light-gray hover:text-retro-purple transition-colors group"
        >
          <Award className="w-6 h-6 group-hover:animate-pixel-bounce" />
          <span className="text-xs font-pixel hidden md:block mt-1">Skills</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('education')}
          className="flex flex-col items-center text-retro-light-gray hover:text-retro-purple transition-colors group"
        >
          <GraduationCap className="w-6 h-6 group-hover:animate-pixel-bounce" />
          <span className="text-xs font-pixel hidden md:block mt-1">Education</span>
        </button>
        
        <button 
          onClick={() => scrollToSection('contact')}
          className="flex flex-col items-center text-retro-light-gray hover:text-retro-purple transition-colors group"
        >
          <Mail className="w-6 h-6 group-hover:animate-pixel-bounce" />
          <span className="text-xs font-pixel hidden md:block mt-1">Contact</span>
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
