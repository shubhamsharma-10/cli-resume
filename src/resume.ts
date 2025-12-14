export interface ResumeData {
    name: string;
    title: string;
    contact: {
        email: string;
        linkedin: string;
        github: string;
    };
    skills: string[];
    education: {
        institution: string;
        degree?: string;
        year?: string;
    }[];
    projects: {
        name: string;
        description: string;
    }[];
}

export const resume: ResumeData = {
    name: "Shubham Kumar Sharma",
    title: "Software Developer",
    contact: {
        email: "shubhamsharma10403@gmail.com",
        linkedin: "linkedin.com/in/shubhamsharma1004",
        github: "github.com/shubhamsharma-10"
    },
    skills: [
        "Node.js",
        "React",
        "Redis",
        "AWS",
        "Docker",
        "Kubernetes"
    ],
    education: [
        {
            institution: "Bharati Vidyapeeth College of Engineering, Pune",
        }
    ],
    projects: [
        {
            name: "UrbanMeals",
            description: "Food ordering application built with MERN stack"
        },
        {
            name: "Blogg",
            description: "Modern blogging platform"
        },
        {
            name: "FlowCraft",
            description: "Workflow automation tool"
        }
    ]
};
