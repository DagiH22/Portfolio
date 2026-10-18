import type { Metadata } from "next";
import { Orbitron, Fira_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const firaSans = Fira_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fira-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const siteUrl = "https://dagih22.github.io";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dagmawi Heywot | Fullstack Software Engineer (TypeScript, Next.js, Node.js, AI/RAG)",
    template: "%s | Dagmawi Heywot",
  },
  description:
    "Fullstack Software Engineer (BSc in Computer Science, Addis Ababa University, 2026) specializing in TypeScript, React, Next.js, Node.js, and SQL/vector database architectures (pgvector, BullMQ, RAG).",
  keywords: [
    "Dagmawi Heywot",
    "Fullstack Software Engineer",
    "TypeScript",
    "React 19",
    "Next.js",
    "Node.js",
    "NestJS",
    "pgvector",
    "RAG Architecture",
    "BullMQ",
    "PostgreSQL",
    "Addis Ababa University",
    "Ethiopia Software Engineer",
    "Fullstack Architect",
  ],
  authors: [{ name: "Dagmawi Heywot", url: "https://github.com/DagiH22" }],
  creator: "Dagmawi Heywot",
  publisher: "Dagmawi Heywot",
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Dagmawi Heywot | Fullstack Software Engineer (TypeScript, Next.js, Node.js, AI/RAG)",
    description:
      "Fullstack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and SQL/vector database architectures (pgvector, BullMQ, RAG).",
    siteName: "Dagmawi Heywot Portfolio",
    images: [
      {
        url: "/images/dh3.svg",
        width: 1200,
        height: 630,
        alt: "Dagmawi Heywot - Fullstack & AI Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagmawi Heywot | Fullstack Software Engineer",
    description:
      "Fullstack Software Engineer specializing in TypeScript, Next.js, Node.js, and SQL/vector database architectures (pgvector, BullMQ, RAG).",
    images: ["/images/dh3.svg"],
  },
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Dagmawi Heywot",
      jobTitle: "Fullstack Software Engineer",
      description:
        "Fullstack Software Engineer specializing in TypeScript, React, Next.js, Node.js, and SQL/vector database architectures (pgvector, BullMQ, RAG).",
      url: siteUrl,
      sameAs: [
        "https://github.com/DagiH22",
        "https://www.linkedin.com/in/dagmawi-heywot-96j",
        "https://t.me/dagiheb",
      ],
      alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Addis Ababa University",
        sameAs: "http://www.aau.edu.et",
      },
      knowsAbout: [
        "TypeScript",
        "JavaScript",
        "React 19",
        "Next.js",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "MySQL",
        "pgvector",
        "Redis",
        "BullMQ",
        "Retrieval-Augmented Generation (RAG)",
        "OpenAI Embeddings",
        "Prisma ORM",
        "Drizzle ORM",
        "Tailwind CSS",
        "Zod",
        "Chapa Payment Gateway",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Addis Ababa",
        addressCountry: "ET",
      },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "AgentDesk: AI Customer Support Platform",
      programmingLanguage: "TypeScript",
      codeRepository: "https://github.com/DagiH22/agentdesk",
      description:
        "Autonomous RAG customer support platform utilizing BullMQ, Redis, and pgvector embeddings with token-based chunking.",
      author: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Charity Management System",
      programmingLanguage: "TypeScript",
      codeRepository: "https://github.com/DagiH22/charity-management-system",
      description:
        "Multi-role donation and transparency platform with Chapa webhook signature verification and automated PDF receipts.",
      author: {
        "@id": `${siteUrl}/#person`,
      },
    },
    {
      "@type": "SoftwareSourceCode",
      name: "Attendance Management System",
      programmingLanguage: "TypeScript",
      codeRepository: "https://github.com/DagiH22/Attendance-System",
      description:
        "Production university attendance tracking system with QR-code generation and real-time participation analytics.",
      author: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body
        className={`${firaSans.variable} ${orbitron.variable} ${jetbrainsMono.variable} min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
      >
        <Header />
        <main className="flex-1 pt-16 flex flex-col items-center w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
