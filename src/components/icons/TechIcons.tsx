import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = "w-4 h-4" }: TechIconProps) {
  const normalized = name.toLowerCase().replace(/[^a-z0-9]/g, "");

  // TypeScript
  if (normalized.includes("typescript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#3178C6" />
        <path d="M11.5 10H6v2.2h2v7.8h2.8v-7.8h2V10h-1.3z" fill="#fff" />
        <path d="M19.7 13.5c-.5-.6-1.3-.9-2.2-.9-1.3 0-2.3.7-2.3 2 0 1.2.9 1.7 2.1 2.1.8.3 1.2.5 1.2.9 0 .4-.4.7-1 .7-.7 0-1.2-.3-1.6-.8l-1.3 1.2c.7.9 1.7 1.3 2.9 1.3 1.6 0 2.8-.8 2.8-2.2 0-1.2-.8-1.8-2.1-2.2-.8-.3-1.2-.5-1.2-.8 0-.3.3-.6.9-.6.6 0 1 .2 1.4.6l1.3-1.3z" fill="#fff" />
      </svg>
    );
  }

  // JavaScript
  if (normalized.includes("javascript")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect width="24" height="24" rx="4" fill="#F7DF1E" />
        <path d="M7 17.5c.6.9 1.5 1.5 2.7 1.5 1.4 0 2.3-.7 2.3-2.3v-6.7h-2.5v6.6c0 .5-.2.8-.7.8-.4 0-.7-.2-.9-.6l-1.2.7zm7.5-.1c.7 1 1.7 1.6 3.1 1.6 1.7 0 2.8-.9 2.8-2.3 0-1.4-.9-2-2.3-2.6-.9-.4-1.3-.7-1.3-1.2 0-.4.4-.8 1-.8.6 0 1 .3 1.4.8l1.7-1.1c-.8-1.2-1.9-1.6-3.1-1.6-1.9 0-3 1.1-3 2.5 0 1.3.8 2 2.2 2.6.9.4 1.4.7 1.4 1.3 0 .5-.5.9-1.2.9-.8 0-1.4-.4-1.8-1l-1.6 1.1z" fill="#000" />
      </svg>
    );
  }

  // React
  if (normalized.includes("react")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <ellipse cx="12" cy="12" rx="9" ry="3.5" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" stroke="#61DAFB" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
      </svg>
    );
  }

  // Next.js
  if (normalized.includes("next")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.3 14.5l-4.8-6.2v6.2H9V8h1.6l4.7 6.2V8h1.5v8.5h-1.5z" />
      </svg>
    );
  }

  // NestJS
  if (normalized.includes("nest")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#E0234E" aria-hidden="true">
        <path d="M12 2.5c-.8 0-1.6.4-2.1 1.1l-6.6 9.4c-.8 1.1-.7 2.6.2 3.6l5.7 6.1c.6.6 1.4.9 2.2.9h1.1c.8 0 1.6-.3 2.2-.9l5.7-6.1c.9-1 1-2.5.2-3.6L14.1 3.6c-.5-.7-1.3-1.1-2.1-1.1zm.1 4.2l4.8 6.8-4.8 5.2-4.8-5.2 4.8-6.8z" />
      </svg>
    );
  }

  // Node.js
  if (normalized.includes("node")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#5FA04E" aria-hidden="true">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
      </svg>
    );
  }

  // PostgreSQL
  if (normalized.includes("postgres")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#4169E1" aria-hidden="true">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 16.5h-2v-4H9V12h2V9.5c0-1.4 1.1-2.5 2.5-2.5H15v2.5h-1.5c-.3 0-.5.2-.5.5V12h2.5l-.5 2.5H13v4z" />
      </svg>
    );
  }

  // Tailwind CSS
  if (normalized.includes("tailwind")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#38BDF8" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
      </svg>
    );
  }

  // Redis
  if (normalized.includes("redis")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#DC382D" aria-hidden="true">
        <path d="M2 7l10-4 10 4-10 4-10-4zm0 5l10 4 10-4v3l-10 4-10-4v-3zm0 5l10 4 10-4v3l-10 4-10-4v-3z" />
      </svg>
    );
  }

  // Vite
  if (normalized.includes("vite")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M21.5 4.2L12.7 20.4a.8.8 0 01-1.4 0L2.5 4.2a.8.8 0 011-1.1l8.5 3.5 8.5-3.5a.8.8 0 011 1.1z" fill="url(#viteGradient)" />
        <path d="M14.5 3.5l-4.2 8.2h3.2L11 17.5l5.5-9.8h-3.4l1.4-4.2z" fill="#FFD62E" />
        <defs>
          <linearGradient id="viteGradient" x1="2.5" y1="3" x2="21.5" y2="20">
            <stop stopColor="#41D1FF" />
            <stop offset="1" stopColor="#BD34FE" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  // Prisma
  if (normalized.includes("prisma")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#2D3748" aria-hidden="true">
        <path d="M12.7 2.2a1 1 0 00-1.4 0l-8.5 16.5a1 1 0 00.9 1.5h16.6a1 1 0 00.9-1.5L12.7 2.2zm-.7 4.3l5.5 11.7H6.5L12 6.5z" />
      </svg>
    );
  }

  // Drizzle ORM
  if (normalized.includes("drizzle")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#C5F74F" aria-hidden="true">
        <path d="M3 13l9-9 9 9-4 4-5-5-5 5-4-4z" />
        <circle cx="12" cy="18" r="2" fill="#C5F74F" />
      </svg>
    );
  }

  // BullMQ
  if (normalized.includes("bullmq") || normalized.includes("bull")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#9333EA" aria-hidden="true">
        <path d="M4 6h16v3H4V6zm2 5h12v3H6v-3zm3 5h6v3H9v-3z" />
      </svg>
    );
  }

  // pgvector / Vector
  if (normalized.includes("pgvector") || normalized.includes("vector")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
        <circle cx="6" cy="6" r="3" fill="#6366f1" />
        <circle cx="18" cy="8" r="3" fill="#06b6d4" />
        <circle cx="12" cy="18" r="3" fill="#10b981" />
        <path d="M8.5 7l7 1M7.5 8.5l3.5 7M16.5 10l-3.5 5.5" stroke="#94a3b8" />
      </svg>
    );
  }

  // Git / GitHub
  if (normalized.includes("github") || normalized.includes("git")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    );
  }

  // Zod
  if (normalized.includes("zod")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="#3E63DD" aria-hidden="true">
        <path d="M4 6h16l-10 12h10v2H4l10-12H4V6z" />
      </svg>
    );
  }

  // Vercel
  if (normalized.includes("vercel")) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 3l9 16H3l9-16z" />
      </svg>
    );
  }

  // Default fallback icon
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 12h6M12 9v6" />
    </svg>
  );
}
