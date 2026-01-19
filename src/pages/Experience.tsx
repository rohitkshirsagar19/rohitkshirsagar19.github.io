import React from 'react';
import Navigation from '@/components/Navigation';
import { experiences, education, certificates } from '@/data/experience';
import { Clock, Award } from 'lucide-react';
import Certificate from '@/components/Certificate';
import SEOManager from '@/components/SEOManager';

const Experience = () => {
    return (
        <div className="min-h-screen pt-16 relative bg-retro-black">
            <SEOManager title="Experience" description="My professional journey and career highlights." />
            <Navigation />

            <main className="retro-container py-12">

                {/* Experience Section */}
                <section className="mb-16">
                    <h1 className="section-title mb-12">WORK EXPERIENCE</h1>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                <div className="flex items-start md:items-center flex-col md:flex-row mb-4">
                                    <h3 className={`font-pixel text-xl ${exp.color}`}>{exp.role}</h3>
                                    <span className="md:mx-4 text-retro-light-gray hidden md:inline">•</span>
                                    <span className="font-retro text-retro-light-gray mt-1 md:mt-0">
                                        {exp.companyUrl ? (
                                            <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-retro-blue transition-colors">
                                                {exp.company}
                                            </a>
                                        ) : (
                                            exp.company
                                        )}
                                    </span>
                                </div>

                                <div className="flex items-center mb-4">
                                    <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
                                    <span className="font-retro text-sm text-retro-light-gray">{exp.period}</span>
                                </div>

                                <ul className="space-y-2 font-retro">
                                    {exp.description.map((item, idx) => (
                                        <li key={idx} className="flex items-start">
                                            <span className="text-retro-blue mr-2">↳</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Education Section */}
                <section className="mb-16">
                    <h2 className="section-title mb-8">EDUCATION</h2>
                    <div className="space-y-6">
                        {education.map((edu, index) => (
                            <div
                                key={index}
                                className="pixel-border bg-retro-dark-gray p-6 animate-pixel-fade-in"
                                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
                            >
                                <div className="flex items-start md:items-center flex-col md:flex-row mb-2">
                                    <h3 className={`font-pixel text-xl ${edu.color}`}>{edu.degree}</h3>
                                    {edu.subtext && (
                                        <>
                                            <span className="md:mx-4 text-retro-light-gray hidden md:inline">•</span>
                                            <span className="font-retro text-retro-light-gray">{edu.subtext}</span>
                                        </>
                                    )}
                                </div>
                                <p className="font-retro mb-2">{edu.institution}</p>
                                <div className="flex items-center">
                                    <Clock className="w-4 h-4 text-retro-light-gray mr-2" />
                                    <span className="font-retro text-sm text-retro-light-gray">{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Certificates Section */}
                <section>
                    <div className="flex items-center mb-8 justify-center">
                        <Award className="w-6 h-6 text-retro-green mr-3" />
                        <h2 className="font-pixel text-2xl text-retro-green">CERTIFICATIONS</h2>
                    </div>

                    <div className="pixel-border bg-retro-dark-gray p-8 animate-pixel-fade-in">
                        <div className="space-y-4">
                            {certificates.map((cert, index) => (
                                <Certificate
                                    key={index}
                                    name={cert.name}
                                    issuer={cert.issuer}
                                    year={cert.year}
                                />
                            ))}
                        </div>
                    </div>
                </section>

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

export default Experience;
