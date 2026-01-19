import React from 'react';
import Navigation from '@/components/Navigation';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

const Projects = () => {
    return (
        <div className="min-h-screen pt-16 relative bg-retro-black">
            <Navigation />

            <main className="retro-container py-12">
                <h1 className="section-title mb-12">ALL PROJECTS</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="animate-pixel-fade-in h-full"
                            style={{ animationDelay: `${index * 0.1}s` }}
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
            </main>

            <footer className="py-8 bg-retro-black mt-auto">
                <div className="retro-container text-center">
                    <p className="font-pixel text-retro-light-gray text-sm">
                        © 2026 ROHIT KSHIRSAGAR • ALL RIGHTS RESERVED
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default Projects;
