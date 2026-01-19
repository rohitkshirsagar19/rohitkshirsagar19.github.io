export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    imageIndex: number;
}

export const projects: Project[] = [
    {
        title: "DevBoss: Autonomous AI IT Manager",
        description: "Engineered a multi-agent AI system to act as an intelligent IT manager, automating the software development lifecycle from planning and Jira ticket creation to progress tracking. Features a Reinforcement Learning module for self-optimization and a React dashboard for real-time monitoring.",
        technologies: ["Python", "CrewAI", "Reinforcement Learning", "FastAPI", "React", "TypeScript", "Jira API", "PyTorch", "Multi-Agent Systems"],
        githubUrl: "https://github.com/rohitkshirsagar19/DevBoss",
        imageIndex: 0
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
