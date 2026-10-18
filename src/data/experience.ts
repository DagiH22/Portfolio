import { Experience, Education, Certification, PersonalInfo } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Dagmawi Heywot",
  title: "Fullstack Software Engineer",
  location: "Addis Ababa, Ethiopia (Open to Remote & Relocation)",
  email: "dagmawiheb@gmail.com",
  phone: "+251 944 301 550",
  githubUrl: "https://github.com/DagiH22",
  linkedinUrl: "https://www.linkedin.com/in/dagmawi-heywot-96j",
  telegramUrl: "https://t.me/dagiheb",
  summary:
    "Fullstack Software Engineer (BSc in Computer Science, Addis Ababa University, 2026) specializing in TypeScript, React, Next.js, Node.js, and SQL/vector database architectures. Shipped a production university attendance system, built a multi-role donation platform with Chapa webhook payments, and engineered an AI RAG customer support platform utilizing BullMQ and pgvector embeddings.",
  availability: "Available for Fullstack & AI Engineering Roles",
  metrics: [
    {
      label: "Fullstack Systems",
      value: "3+",
      sublabel: "Production & Flagship Architectures",
    },
    {
      label: "Automated Tests",
      value: "61+",
      sublabel: "Passing Backend & API Tests",
    },
    {
      label: "AI / Vector Search",
      value: "pgvector",
      sublabel: "BullMQ & Embeddings Pipeline",
    },
    {
      label: "Education",
      value: "BSc CS '26",
      sublabel: "Addis Ababa University",
    },
  ],
};

export const experiences: Experience[] = [
  {
    id: "contractor-2026",
    role: "Research & Testing Contractor",
    company: "Private Client (Confidential)",
    location: "Remote",
    period: "Jan 2026 – Present",
    employmentType: "Contract",
    highlights: [
      "Research robotics, AI, and marketing topics and synthesize technical findings into structured reports for the client.",
      "Test Android applications and websites, reproduce defects, and report them with exact deterministic steps under tight deadlines.",
    ],
    technologies: ["AI Research", "Robotics Synthesis", "Android QA", "Defect Reproduction", "Deterministic Reporting"],
  },
  {
    id: "viralhit-intern",
    role: "Software Engineering Intern",
    company: "ViralHit",
    location: "Remote",
    period: "Oct 2025 – Jan 2026",
    employmentType: "Internship",
    companyUrl: "https://viralhit.ai/",
    certificateUrl: "https://drive.google.com/file/d/1_TKIKyqK3MmhG1mJ1HvxOUy_4clSMpr3",
    highlights: [
      "Built the frontend of a visual ERP interface builder featuring a drag-and-drop canvas, reusable components, and Zustand state management.",
      "Implemented dynamic forms, configurable tables, and multi-page workflows, improving rendering performance on complex screens.",
      "Collaborated in an agile distributed remote setup translating specifications into modular UI implementations.",
    ],
    technologies: ["React 19", "TypeScript", "Zustand", "Tailwind CSS", "Vite", "Canvas D&D"],
  },
  {
    id: "public-service-intern",
    role: "IT Support Intern",
    company: "Public Service Transport Service",
    location: "Addis Ababa, Ethiopia",
    period: "Jun 2025 – Aug 2025",
    employmentType: "Internship",
    highlights: [
      "Troubleshot hardware, software, and network problems and supported the organization's internal ERP platforms and websites.",
      "Diagnosed connectivity issues and systems faults, minimizing staff operational downtime.",
    ],
    technologies: ["Network Diagnostics", "Hardware Support", "Internal ERP", "User Administration"],
  },
];

export const educations: Education[] = [
  {
    id: "aau-bsc-cs",
    degree: "BSc in Computer Science",
    institution: "Addis Ababa University",
    location: "Addis Ababa, Ethiopia",
    period: "2023 – 2026",
    status: "Graduated",
    highlights: [
      "Core focus on Data Structures & Algorithms, Distributed Systems, Database Architecture, and Software Engineering Principles.",
      "Developed comprehensive capstone systems implementing production authentication and database normalization.",
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: "udacity-prog",
    name: "Programming Fundamentals Nanodegree",
    issuer: "Udacity",
  },
  {
    id: "udacity-ai",
    name: "AI Fundamentals Nanodegree",
    issuer: "Udacity",
  },
];
