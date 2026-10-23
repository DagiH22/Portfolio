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
    default: "Dagmawi Heywot | Fullstack Software Engineer (TypeScript, React/Next.js, NestJS, PostgreSQL)",
    template: "%s | Dagmawi Heywot",
  },
  description:
    "Fullstack engineer with a BSc in Computer Science, building production web applications with TypeScript, React/Next.js, NestJS, and PostgreSQL. Shipped an attendance platform used by 100+ members, built a multi-role donation platform with secure payment webhooks, and am developing a RAG-based support platform with cited answers. Comfortable working on-site, hybrid, or remote, with strong written and spoken English.",
  keywords: [
    "Dagmawi Heywot",
    "Fullstack Software Engineer",
    "TypeScript",
    "React 19",
    "Next.js",
    "Node.js",
    "NestJS",
    "PostgreSQL",
    "pgvector",
    "BullMQ",
    "Redis",
    "RAG",
    "Prisma ORM",
    "Drizzle ORM",
    "Addis Ababa University",
    "Ethiopia Software Engineer",
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
    title: "Dagmawi Heywot | Fullstack Software Engineer (TypeScript, React/Next.js, NestJS, PostgreSQL)",
    description:
      "Fullstack engineer with a BSc in Computer Science, building production web applications with TypeScript, React/Next.js, NestJS, and PostgreSQL. Shipped an attendance platform used by 100+ members, built a multi-role donation platform with secure payment webhooks, and am developing a RAG-based support platform with cited answers.",
    siteName: "Dagmawi Heywot Portfolio",
    images: [
      {
        url: "/images/dh3.svg",
        width: 1200,
        height: 630,
        alt: "Dagmawi Heywot - Fullstack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dagmawi Heywot | Fullstack Software Engineer",
    description:
      "Fullstack engineer with a BSc in Computer Science, building production web applications with TypeScript, React/Next.js, NestJS, and PostgreSQL. Shipped an attendance platform used by 100+ members.",
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
        "Fullstack engineer with a BSc in Computer Science, building production web applications with TypeScript, React/Next.js, NestJS, and PostgreSQL. Shipped an attendance platform used by 100+ members, built a multi-role donation platform with secure payment webhooks, and am developing a RAG-based support platform with cited answers.",
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
        "OpenAI Embeddings API",
        "Prisma ORM",
        "Drizzle ORM",
        "Tailwind CSS",
        "Zod",
        "Chapa Payment Gateway",
        "Odoo",
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
        "AI support platform where businesses upload documents and get a chatbot that answers customer questions with cited sources, powered by BullMQ, Redis, and pgvector.",
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
        "Multi-role donation platform with Chapa webhook signature verification, automated PDF receipts, and Recharts analytics.",
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
        "Production university attendance system with QR and manual check-in workflows used by 100+ members.",
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
