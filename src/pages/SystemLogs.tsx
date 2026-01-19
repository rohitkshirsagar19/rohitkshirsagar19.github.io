import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Terminal, Calendar, User, Tag, ChevronRight, X } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { useSound } from '@/context/SoundContext';

// Mock Data for System Logs
const systemLogs = [
    {
        id: 1,
        date: '2026-01-19',
        title: 'System Initialization: Use Retro Theme',
        author: 'Admin',
        tags: ['UI/UX', 'Retro', 'React'],
        content: `
# Initial Boot Sequence

successfully initialized the retro theme protocol. The objective was to create an interface that resonates with the golden age of computing while leveraging modern web technologies.

## Tech Stack Implemented
- **React**: Core UI library
- **Tailwind CSS**: Utility-first styling
- **Web Audio API**: For synthesized sound effects

The system is now stable and running at optimal capacity. 
    `
    },
    {
        id: 2,
        date: '2026-01-15',
        title: 'Optimizing Neural Networks for Edge Devices',
        author: 'Rohit',
        tags: ['AI', 'Optimization', 'Edge Computing'],
        content: `
# Edge AI Optimization

Exploring techniques to deploy large language models on edge devices. The constraints of memory and compute power require innovative quantization methods.

## Key Findings
1. **Int8 Quantization**: minimal accuracy loss with 4x memory reduction.
2. **Pruning**: Removing redundant connections in the neural network.

Next steps involve testing on limited hardware environments.
    `
    }
];

const SystemLogs: React.FC = () => {
    const [selectedLog, setSelectedLog] = useState<number | null>(null);
    const { playClick, playHover } = useSound();

    const handleLogClick = (id: number) => {
        playClick();
        setSelectedLog(id);
    };

    const closeLog = () => {
        playClick();
        setSelectedLog(null);
    };

    const activeLog = systemLogs.find(log => log.id === selectedLog);

    return (
        <div className="min-h-screen pt-4 pb-24 md:pt-20 md:pb-8 bg-retro-black text-retro-light-gray relative">
            <Helmet>
                <title>System Logs | Rohit Kshirsagar</title>
                <meta name="description" content="Development logs and system updates from Rohit Kshirsagar." />
            </Helmet>

            <div className="retro-container">
                <div className="flex items-center mb-8 animate-pixel-fade-in">
                    <Terminal className="w-8 h-8 text-retro-purple mr-4" />
                    <h1 className="font-pixel text-2xl md:text-4xl text-retro-purple">SYSTEM_LOGS</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Logs List */}
                    <div className="md:col-span-1 space-y-4">
                        {systemLogs.map((log) => (
                            <div
                                key={log.id}
                                onClick={() => handleLogClick(log.id)}
                                onMouseEnter={playHover}
                                className={`
                  pixel-border p-4 cursor-pointer transition-all duration-300
                  ${selectedLog === log.id
                                        ? 'bg-retro-purple text-white border-retro-white scale-105'
                                        : 'bg-retro-dark-gray hover:bg-retro-gray hover:translate-x-2'
                                    }
                `}
                            >
                                <div className="flex justify-between items-start mb-2">
                                    <span className="font-pixel text-xs opacity-70">{log.date}</span>
                                    {selectedLog === log.id && <ChevronRight className="w-4 h-4" />}
                                </div>
                                <h3 className="font-pixel text-sm md:text-base leading-tight">
                                    {log.title}
                                </h3>
                                <div className="flex flex-wrap gap-2 mt-3">
                                    {log.tags.map(tag => (
                                        <span key={tag} className="text-[10px] uppercase border px-1 rounded-sm border-current opacity-60">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Log Viewer Content */}
                    <div className="md:col-span-2 relative">
                        <div className={`
              h-full min-h-[50vh] pixel-border bg-retro-dark-gray p-6 md:p-8 
              transition-all duration-500
              ${selectedLog ? 'opacity-100 translate-y-0' : 'opacity-50 translate-y-4 grayscale'}
            `}>
                            {activeLog ? (
                                <div className="animate-pixel-fade-in">
                                    <button
                                        onClick={closeLog}
                                        className="absolute top-4 right-4 text-retro-light-gray hover:text-retro-purple md:hidden"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>

                                    <div className="border-b border-retro-gray pb-4 mb-6">
                                        <h2 className="font-pixel text-xl md:text-2xl text-retro-white mb-2">{activeLog.title}</h2>
                                        <div className="flex flex-wrap items-center gap-4 text-sm text-retro-purple font-mono">
                                            <span className="flex items-center"><Calendar className="w-4 h-4 mr-1" /> {activeLog.date}</span>
                                            <span className="flex items-center"><User className="w-4 h-4 mr-1" /> {activeLog.author}</span>
                                            <span className="flex items-center"><Tag className="w-4 h-4 mr-1" /> {activeLog.tags.join(', ')}</span>
                                        </div>
                                    </div>

                                    <div className="prose prose-invert prose-p:font-retro prose-headings:font-pixel prose-headings:text-retro-purple max-w-none">
                                        <ReactMarkdown>{activeLog.content}</ReactMarkdown>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center h-full text-center opacity-40">
                                    <Terminal className="w-16 h-16 mb-4" />
                                    <p className="font-pixel text-lg">SELECT A LOG ENTITY TO DECRYPT...</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SystemLogs;
