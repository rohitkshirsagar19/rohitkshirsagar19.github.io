export interface Experience {
    role: string;
    company: string;
    companyUrl?: string;
    period: string;
    description: string[];
    color: string; // Title color
}

export interface Education {
    degree: string;
    institution: string;
    year: string;
    subtext?: string;
    color: string;
}

export interface Certificate {
    name: string;
    issuer: string;
    year: number;
}

export const experiences: Experience[] = [
    {
        role: "AI Engineer Intern",
        company: "ApexAI Solutions Pvt Ltd",
        period: "June 2025 – September 2025",
        description: [
            "Developed multilingual NLP pipeline for Hinglish transcripts using fine-tuned Qwen-3 32B (95% accuracy)",
            "Built LLM-powered transcript-to-JSON tool, reducing manual review effort by 80%",
            "Managed project execution and client communications to ensure timely NLP solution delivery"
        ],
        color: "text-retro-blue"
    },
    {
        role: "Python Developer",
        company: "MEGAMINDS IT Services",
        companyUrl: "https://megamindsit.in/",
        period: "July 2024 - September 2024",
        description: [
            "Designed Python-based academic solutions, implementing algorithms from 5+ research papers",
            "Optimized data preprocessing pipelines, improving ML model accuracy by 15%",
            "Contributed to the timely delivery of 3+ projects alongside the R&D team"
        ],
        color: "text-retro-blue"
    }
];

export const education: Education[] = [
    {
        degree: "B.Tech in Computer Science",
        subtext: "AI and Data Science",
        institution: "AISSMS Institute, Pune",
        year: "Aug 2022 - Expected May 2026",
        color: "text-retro-purple"
    },
    {
        degree: "Higher Secondary",
        institution: "New High School Main, Amravati",
        year: "Completed June 2022",
        color: "text-retro-green"
    }
];

export const certificates: Certificate[] = [
    {
        name: "The Complete Python Pro Bootcamp",
        issuer: "Udemy",
        year: 2023
    },
    {
        name: "Machine Learning A-Z",
        issuer: "Udemy",
        year: 2024
    },
    {
        name: "Database Programming with SQL",
        issuer: "Oracle Academy",
        year: 2023
    },
    {
        name: "Full Stack Development",
        issuer: "Free Code Camp",
        year: 2024
    },
    {
        name: "Oracle Cloud Infrastructure 2025 Foundations Associate (1Z0-1085-25)",
        issuer: "Oracle",
        year: 2025
    }
];
