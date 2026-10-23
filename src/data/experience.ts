import { Experience, Education, Certification, PersonalInfo } from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Dagmawi Heywot",
  title: "Fullstack Software Engineer",
  location: "Addis Ababa, Ethiopia (Open to On-site, Hybrid, or Remote)",
  email: "dagmawiheb@gmail.com",
  phone: "+251 944 301 550",
  githubUrl: "https://github.com/DagiH22",
  // TODO: Verify LinkedIn URL (currently set to https://www.linkedin.com/in/dagmawi-heywot-96j)
  linkedinUrl: "https://www.linkedin.com/in/dagmawi-heywot-96j",
  telegramUrl: "https://t.me/dagiheb",
  summary:
    "Fullstack engineer with a BSc in Computer Science, building production web applications with TypeScript, React/Next.js, NestJS, and PostgreSQL. Shipped an attendance platform used by 100+ members, built a multi-role donation platform with secure payment webhooks, and am developing a RAG-based support platform with cited answers. Comfortable working on-site, hybrid, or remote, with strong written and spoken English.",
  availability: "Open to On-site, Hybrid, or Remote Roles",
  metrics: [
    {
      label: "Members Served",
      value: "100+",
      sublabel: "Attendance Platform in Production",
    },
    {
      label: "Production & Active Systems",
      value: "3",
      sublabel: "RAG Support, Payments & Attendance",
    },
    {
      label: "Professional Roles",
      value: "4",
      sublabel: "Contract, Dev & Marketing Internships",
    },
  ],
};

export const experiences: Experience[] = [
  {
    id: "contractor-2026",
    role: "Research & Testing Contractor",
    company: "Private Client (Remote, Confidential)",
    location: "Remote",
    period: "Jul 2026 – Present",
    employmentType: "Contract",
    highlights: [
      "Research robotics, AI, and marketing topics and synthesize technical findings into structured reports for the client.",
      "Test Android applications and websites, reproduce defects, and report them with exact deterministic steps under tight deadlines.",
    ],
    technologies: [
      "AI & Robotics Research",
      "Android QA",
      "Web Testing",
      "Deterministic Defect Reporting",
    ],
  },
  {
    id: "condigital-intern",
    role: "Digital Operations & Marketing Automation Intern",
    company: "Condigital Inc.",
    location: "Remote",
    period: "Apr 2026 – Jun 2026",
    employmentType: "Internship",
    highlights: [
      "Built and customized Odoo websites, eCommerce stores, and blogs, using Odoo Studio to create custom apps, fields, and automated workflows without extra code.",
      "Ran email marketing and marketing automation campaigns tied to Odoo CRM, with segmented lists and scheduled follow-ups to nurture and track leads.",
    ],
    technologies: [
      "Odoo Studio",
      "Odoo CRM",
      "Marketing Automation",
      "Email Workflows",
      "eCommerce",
    ],
  },
  {
    id: "viralhit-intern",
    role: "Software Engineering Intern",
    company: "ViralHit",
    location: "Remote",
    period: "Oct 2025 – Jan 2026",
    employmentType: "Internship",
    featured: true,
    companyUrl: "https://viralhit.ai/",
    certificateUrl: "https://drive.google.com/file/d/1_TKIKyqK3MmhG1mJ1HvxOUy_4clSMpr3",
    highlights: [
      "Built the frontend of a visual ERP interface builder featuring a drag-and-drop canvas, reusable components, and Zustand state management.",
      "Implemented dynamic forms, configurable tables, and multi-page workflows, improving rendering performance on complex screens.",
    ],
    technologies: [
      "React 19",
      "TypeScript",
      "Zustand",
      "Tailwind CSS",
      "Vite",
      "Drag-and-Drop Canvas",
    ],
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
    ],
    technologies: [
      "Hardware Troubleshooting",
      "Network Diagnostics",
      "Internal ERP Support",
      "Websites Support",
    ],
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
