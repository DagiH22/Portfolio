import React from "react";
import { ArrowUp, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/experience";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-200 dark:border-slate-800/80 bg-white/80 dark:bg-slate-950/90 py-12 text-slate-500 dark:text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-900">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-slate-900 dark:text-slate-100 tracking-wider">
              DAGMAWI HEYWOT
            </span>
            <p className="text-xs text-slate-500 dark:text-slate-400 text-center md:text-left">
              Fullstack Software Engineer • TypeScript, React/Next.js, NestJS & PostgreSQL
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to Top"
              className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-600/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-600/20 transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Dagmawi Heywot. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Next.js App Router • Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-600 dark:text-emerald-400/90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              All Systems Operational
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
