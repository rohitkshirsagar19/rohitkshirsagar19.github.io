export interface SkillCategory {
    title: string;
    skills: string[];
    color: string; // The tailwind color name part, e.g., 'retro-green'
}

export const skillsRaw = {
    programming: ['Python', 'C++', 'JavaScript', 'SQL', 'TypeScript', 'GoLang'],
    frameworks: ['Flask', 'FastAPI', 'Django', 'Streamlit', 'Next.js', 'TensorFlow', 'CrewAI', 'LangChain'],
    devops: ['Docker', 'MLflow', 'GitHub Actions', 'AWS'],
    tools: ['Git', 'Linux', 'Bash', 'Jupyter', 'Pandas', 'Scikit-learn', 'NumPy', 'REST API', 'Supabase', 'LLM APIs', 'RAG'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'Qdrant (Vector DB)', 'SQLite'],
    softSkills: ['Teamwork', 'Problem Solving', 'Communication', 'Research']
};

export const skillCategories = [
    {
        title: 'PROGRAMMING',
        skills: skillsRaw.programming,
        color: 'text-retro-green',
        borderColor: 'border-retro-green/30 hover:border-retro-green'
    },
    {
        title: 'FRAMEWORKS',
        skills: skillsRaw.frameworks,
        color: 'text-retro-blue',
        borderColor: 'border-retro-blue/30 hover:border-retro-blue'
    },
    {
        title: 'DEVOPS & DEPLOYMENT',
        skills: skillsRaw.devops,
        color: 'text-retro-pink',
        borderColor: 'border-retro-pink/30 hover:border-retro-pink'
    },
    {
        title: 'TOOLS & TECHNOLOGIES',
        skills: skillsRaw.tools,
        color: 'text-retro-yellow',
        borderColor: 'border-retro-yellow/30 hover:border-retro-yellow'
    },
    {
        title: 'DATABASES',
        skills: skillsRaw.databases,
        color: 'text-retro-orange',
        borderColor: 'border-retro-orange/30 hover:border-retro-orange'
    },
    {
        title: 'SOFT SKILLS',
        skills: skillsRaw.softSkills,
        color: 'text-retro-white',
        borderColor: 'border-retro-white/30 hover:border-retro-white'
    }
];
