import React from "react";
import { ArrowUp, Mail, Send } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/experience";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-slate-900 bg-slate-950/90 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-['Orbitron',sans-serif] text-base font-bold text-slate-100 tracking-wider">
              DAGMAWI HEYWOT
            </span>
            <p className="text-xs text-slate-400 text-center md:text-left">
              Fullstack Software Engineer • TypeScript, Next.js, Node.js & AI Systems
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.telegramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              aria-label="Send Email"
              className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 hover:bg-slate-800 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="#home"
              aria-label="Back to Top"
              className="p-2.5 rounded-lg bg-indigo-600/10 border border-indigo-500/30 text-indigo-400 hover:text-indigo-200 hover:bg-indigo-600/20 transition-all"
            >
              <ArrowUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-3">
          <p>© 2026 Dagmawi Heywot. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with Next.js App Router & Tailwind CSS</span>
            <span>•</span>
            <span className="text-emerald-400/90 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              All Systems Operational
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
