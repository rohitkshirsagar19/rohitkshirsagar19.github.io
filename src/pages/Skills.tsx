import React from 'react';
import Navigation from '@/components/Navigation';
import { skillCategories } from '@/data/skills';
import SEOManager from '@/components/SEOManager';

const Skills = () => {
    return (
        <div className="min-h-screen pt-16 relative bg-retro-black">
            <SEOManager title="Skills" description="My technical skills and arsenal." />
            <Navigation />

            <main className="retro-container py-12">
                <h1 className="section-title mb-12">TECHNICAL ARSENAL</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((cat, index) => (
                        <div
                            key={cat.title}
                            className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className={`font-pixel text-xl mb-6 ${cat.color}`}>{cat.title}</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill}
                                        className={`bg-retro-black border p-2 rounded text-center font-retro transition-colors ${cat.color} ${cat.borderColor}`}
                                    >
                                        {skill}
                                    </div>
                                ))}
                            </div>
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

export default Skills;
