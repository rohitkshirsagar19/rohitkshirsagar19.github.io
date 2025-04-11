
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageIndex,
}) => {
  // Generate a pattern using the imageIndex to create different cartridge colors
  const colors = [
    'from-retro-purple to-retro-blue',
    'from-retro-blue to-retro-green',
    'from-retro-green to-retro-yellow',
    'from-retro-yellow to-retro-red',
    'from-retro-red to-retro-purple',
  ];
  
  const colorClass = colors[imageIndex % colors.length];

  return (
    <div className={`bg-gradient-to-br ${colorClass} rounded-lg p-1`}>
      <div className="bg-retro-dark-gray p-4 rounded-md h-full flex flex-col">
        <div className="mb-4 flex items-center">
          <div className="w-6 h-6 bg-retro-gray rounded-md mr-2 animate-pixel-pulse"></div>
          <h3 className="font-pixel text-lg text-white">{title}</h3>
        </div>
        
        <p className="font-retro text-retro-light-gray mb-4">{description}</p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-retro-dark-purple text-white text-xs font-retro py-1 px-2 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-auto flex space-x-3">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors"
            >
              <Github className="w-5 h-5 mr-1" />
              <span className="font-retro text-sm">Code</span>
            </a>
          )}
          
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-retro-light-gray hover:text-retro-purple transition-colors"
            >
              <ExternalLink className="w-5 h-5 mr-1" />
              <span className="font-retro text-sm">Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
