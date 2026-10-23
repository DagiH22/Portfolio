import { Project } from "@/types/portfolio";

export const projects: Project[] = [
  {
    id: "agentdesk",
    title: "AgentDesk: AI Customer Support Platform",
    tagline: "RAG Support Platform with Document Ingestion, Semantic Search & Cited Answers",
    status: "In Progress",
    statusVariant: "active",
    summary:
      "Building an AI support platform where businesses upload their documents (PDF/TXT) and get a chatbot that answers customer questions from that content, with cited sources.",
    problem:
      "Customer support teams spend hours answering repetitive inquiries across disconnected documentation, leading to slow response times and error-prone manual lookups.",
    solution:
      "Built an autonomous document ingestion pipeline that extracts, chunks, and embeds text into pgvector for semantic search, powered by BullMQ background queues with cited source responses.",
    architectureHighlights: [
      "Building an AI support platform where businesses upload their documents (PDF/TXT) and get a chatbot that answers customer questions from that content, with cited sources.",
      "Built the document pipeline: files are uploaded, text is extracted and split into chunks, then embedded and stored in pgvector so they can be searched by meaning.",
      "Indexing runs in the background with BullMQ and Redis (retries, no duplicate jobs), and the platform has secure login with HTTP-only JWT cookies and per-user data isolation.",
    ],
    architectureFlow: [
      "Upload (PDF/TXT)",
      "Text Extraction",
      "Token Chunking",
      "Vector Embeddings",
      "pgvector Indexing",
      "Cited Support Answers",
    ],
    architectureTags: ["RAG Architecture", "pgvector", "BullMQ & Redis", "Document Ingestion"],
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "pgvector",
      "Drizzle ORM",
      "BullMQ",
      "Redis",
      "MinIO",
    ],
    metricsBadge: "In Progress • Active Architecture",
    // TODO: Verify screenshot in public/images/screenshots/insight.png represents the current AgentDesk UI
    image: "/images/screenshots/insight.png",
    repoUrl: "https://github.com/DagiH22/agentdesk",
    // TODO: Add live demo URL when deployment is live (AgentDesk is currently In Progress)
    liveUrl: null,
    featured: true,
  },
  {
    id: "attendance-system",
    title: "Attendance Management System",
    tagline: "Event Check-in Platform with QR Lifecycle Management & Real-Time Analytics",
    status: "In Production",
    statusVariant: "production",
    summary:
      "Engineered QR-code and manual check-in workflows for one-time, weekly, and custom university events used by 100+ members.",
    problem:
      "Managing attendance for frequent university events with paper rosters or unverified forms caused congestion, duplicate submissions, and lacked real-time visibility.",
    solution:
      "Designed a fullstack attendance engine with QR-code and manual check-in workflows, JWT authentication, Brevo email alerts, and live participation analytics.",
    architectureHighlights: [
      "Engineered QR-code and manual check-in workflows for one-time, weekly, and custom university events used by 100+ members.",
      "Implemented JWT authentication, real-time attendance analytics dashboards, event lifecycle management, and Brevo email notifications.",
    ],
    architectureTags: ["In Production", "QR Workflows", "Live Analytics", "PostgreSQL"],
    techStack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "Prisma",
      "PostgreSQL",
    ],
    metricsBadge: "In Production — 100+ Members",
    image: "/images/screenshots/events.png",
    repoUrl: "https://github.com/DagiH22/Attendance-System",
    // TODO: Add live URL if a public instance is accessible
    liveUrl: null,
    featured: true,
  },
  {
    id: "charity-system",
    title: "Charity Management System",
    tagline: "3-Role Donation Platform with Chapa Webhook Verification & Automated Receipts",
    status: "Final-Year Project • Live Demo",
    statusVariant: "deployed",
    summary:
      "Built a 3-role donation platform (admin, charity, donor) using JWT in HTTP-only cookies, role-based access control (RBAC), and server-side Chapa webhook verification.",
    problem:
      "Charitable donation platforms often struggle with donor transparency, fraudulent charity verification, and manual, error-prone payment receipting.",
    solution:
      "Architected a secure 3-role platform with cryptographic Chapa webhook verification, automated PDF donation receipts, Multer document validation, and Recharts analytics.",
    architectureHighlights: [
      "Built a 3-role donation platform (admin, charity, donor) using JWT in HTTP-only cookies and role-based access control (RBAC) across the API.",
      "Integrated the Chapa payment gateway with server-side webhook verification, automated PDF donation receipts, and Recharts analytics dashboards.",
      "Added charity document verification (Multer), campaign images, and Nodemailer notifications; validated every request with Zod and deployed on Vercel and TiDB Cloud.",
    ],
    architectureTags: ["Chapa Webhooks", "RBAC Security", "TiDB Cloud", "Zod Validation"],
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Express",
      "Prisma",
      "MySQL",
      "Zod",
    ],
    metricsBadge: "Final-Year Project • Deployed on Vercel & TiDB Cloud",
    image: "/images/screenshots/charity.png",
    repoUrl: "https://github.com/DagiH22/charity-management-system",
    liveUrl: "https://charity-management-system-nu.vercel.app/",
    featured: true,
  },
];
