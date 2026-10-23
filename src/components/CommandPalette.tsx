"use client";

import React, { useEffect, useState } from "react";
import {
  Search,
  Code2,
  Briefcase,
  Layers,
  Send,
  FileDown,
  X,
  CornerDownLeft,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";
import { personalInfo } from "@/data/experience";

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const items = [
    {
      label: "Home / Overview",
      category: "Navigation",
      icon: Search,
      action: () => {
        window.location.hash = "home";
        setIsOpen(false);
      },
    },
    {
      label: "Technical Skills (4 Pillars)",
      category: "Navigation",
      icon: Layers,
      action: () => {
        window.location.hash = "skills";
        setIsOpen(false);
      },
    },
    {
      label: "Engineered Systems & Projects",
      category: "Navigation",
      icon: Code2,
      action: () => {
        window.location.hash = "projects";
        setIsOpen(false);
      },
    },
    {
      label: "Experience & Education",
      category: "Navigation",
      icon: Briefcase,
      action: () => {
        window.location.hash = "experience";
        setIsOpen(false);
      },
    },
    {
      label: "Contact & Send Message",
      category: "Navigation",
      icon: Send,
      action: () => {
        window.location.hash = "contact";
        setIsOpen(false);
      },
    },
    {
      label: "Download CV (Resume PDF)",
      category: "Actions",
      icon: FileDown,
      action: () => {
        window.open("/cv/Dagmawi-Heywot-Resume.pdf", "_blank");
        setIsOpen(false);
      },
    },
    {
      label: "View GitHub Repositories",
      category: "Links",
      icon: GithubIcon,
      action: () => {
        window.open(personalInfo.githubUrl, "_blank");
        setIsOpen(false);
      },
    },
    {
      label: "Connect on LinkedIn",
      category: "Links",
      icon: LinkedinIcon,
      action: () => {
        window.open(personalInfo.linkedinUrl, "_blank");
        setIsOpen(false);
      },
    },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase())
  );

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Command Menu"
      className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/70 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-lg rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center px-4 py-3 border-b border-slate-800">
          <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Type a command or jump to section..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
          />
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            aria-label="Close command palette"
            className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-xs text-slate-500">
              No results found for &ldquo;{search}&rdquo;
            </div>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={item.action}
                  className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-800/80 text-left transition-colors group cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-lg bg-slate-800 text-slate-400 group-hover:text-indigo-400 group-hover:bg-indigo-950/50 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-medium text-slate-200 group-hover:text-white">
                      {item.label}
                    </span>
                  </div>
                  <CornerDownLeft className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400" />
                </button>
              );
            })
          )}
        </div>

        <div className="px-4 py-2 bg-slate-950/60 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500 font-mono">
          <span>Navigate with mouse or keyboard</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
