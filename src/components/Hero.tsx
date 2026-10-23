"use client";

import React, { useState, useEffect } from "react";
import { personalInfo } from "@/data/experience";
import { projects } from "@/data/projects";
import { FileDown, ArrowRight, Sparkles, ArrowUpRight } from "lucide-react";
import { TechIcon } from "@/components/icons/TechIcons";

const titles = [
  "Fullstack Software Engineer",
  "TypeScript, React & Next.js",
  "NestJS & PostgreSQL Architect",
  "AI & RAG Vector Systems",
];

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 30 : 70;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setTypedTitle(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedTitle(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  // Current flagship project: AgentDesk
  const agentDesk = projects.find((p) => p.id === "agentdesk") || projects[0];

  return (
    <section
      id="home"
      className="relative w-full min-h-[90vh] flex flex-col justify-center items-center pt-8 sm:pt-12 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Subtle ambient glow adapted for light and dark */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[220px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-slate-900/90 border border-emerald-500/30 dark:border-emerald-500/30 shadow-xs dark:shadow-emerald-500/10 mb-6 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-emerald-800 dark:text-emerald-300">
            {personalInfo.availability}
          </span>
        </div>

        {/* Name & Dynamic Headline */}
        <h1 className="font-[family-name:var(--font-space-grotesk)] text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
          <span className="text-slate-500 dark:text-slate-400 text-xl sm:text-2xl font-normal block mb-1 font-mono tracking-normal">
            Hello, I&apos;m
          </span>
          <span className="bg-gradient-to-r from-slate-950 via-indigo-900 to-slate-800 dark:from-white dark:via-slate-100 dark:to-indigo-300 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        {/* Dynamic Typewriter Title */}
        <div className="h-8 sm:h-9 mb-6 flex items-center justify-center">
          <span className="font-mono text-base sm:text-xl text-indigo-600 dark:text-indigo-400 font-semibold">
            &gt; {typedTitle}
            <span className="animate-pulse text-indigo-500">_</span>
          </span>
        </div>

        {/* Value Statement / Summary */}
        <p className="max-w-2xl text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed mb-8 font-normal">
          {personalInfo.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-indigo-600 text-white font-semibold text-xs sm:text-sm hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/25 transition-all duration-200 active:scale-98 cursor-pointer"
          >
            <span>View Systems & Projects</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/cv/Dagmawi-Heywot-Resume.pdf"
            download="Dagmawi-Heywot-Resume.pdf"
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-slate-800 dark:text-slate-200 font-semibold text-xs sm:text-sm hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-slate-400 dark:hover:border-slate-700 transition-all duration-200 active:scale-98 shadow-xs cursor-pointer"
          >
            <FileDown className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>Download CV (PDF)</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 sm:py-3 rounded-xl bg-slate-100 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-400 font-medium text-xs sm:text-sm hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300 dark:hover:border-slate-700 transition-all cursor-pointer"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* 3 Honest Metric Cards */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8">
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/80 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-indigo-400 dark:hover:border-indigo-500/40 transition-colors shadow-xs"
            >
              <div className="font-[family-name:var(--font-space-grotesk)] text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-1">
                {metric.value}
              </div>
              <div className="text-xs font-bold text-indigo-600 dark:text-indigo-300 mb-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* "Currently Building" Highlight Strip */}
        <div className="w-full text-left p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-indigo-50/90 via-white to-indigo-50/50 dark:from-indigo-950/30 dark:via-slate-900/70 dark:to-slate-900/40 border border-indigo-200 dark:border-indigo-500/30 backdrop-blur-md relative overflow-hidden group hover:border-indigo-400 dark:hover:border-indigo-500/50 transition-all shadow-xs dark:shadow-none">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700 dark:text-indigo-400 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                Currently Building
              </span>
              <span className="text-slate-300 dark:text-slate-500 text-xs">•</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-indigo-100 dark:bg-indigo-500/10 text-indigo-800 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 font-medium">
                In Progress
              </span>
            </div>

            <a
              href="#agentdesk"
              className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-slate-400 hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
            >
              <span>Explore Architecture</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                {agentDesk.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 max-w-xl">
                {agentDesk.summary}
              </p>
            </div>

            {/* Stack chips with real SVG icons */}
            <div className="flex flex-wrap items-center gap-1.5 shrink-0">
              {agentDesk.techStack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[11px] font-mono bg-white dark:bg-slate-800/80 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700/60 shadow-xs"
                >
                  <TechIcon name={tech} className="w-3 h-3" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
