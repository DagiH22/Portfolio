"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { personalInfo } from "@/data/experience";
import { FileDown, ArrowRight, Sparkles, Terminal, Code2, Cpu, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const [typedTitle, setTypedTitle] = useState("");
  const titles = [
    "Fullstack Software Engineer",
    "TypeScript & Next.js Specialist",
    "AI / RAG & Vector Architect",
    "Production Systems Builder",
  ];
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    const speed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setTypedTitle(current.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setTypedTitle(current.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % titles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[92vh] flex flex-col justify-center items-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-2/3 right-1/4 w-[400px] h-[280px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center">
        {/* Availability Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-emerald-500/30 shadow-lg shadow-emerald-500/10 mb-8 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-semibold tracking-wide text-emerald-300">
            {personalInfo.availability}
          </span>
        </div>

        {/* Name & Dynamic Title */}
        <h1 className="font-['Orbitron',sans-serif] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4">
          <span className="text-slate-400 text-2xl sm:text-3xl font-medium block mb-2 font-mono tracking-normal">
            Hello, I&apos;m
          </span>
          <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-transparent">
            {personalInfo.name}
          </span>
        </h1>

        <div className="h-10 mb-6 flex items-center justify-center">
          <span className="font-mono text-lg sm:text-2xl text-indigo-400 font-medium">
            &gt; {typedTitle}
            <span className="animate-pulse text-indigo-300">|</span>
          </span>
        </div>

        {/* Narrative Description */}
        <p className="max-w-2xl text-slate-300 text-base sm:text-lg leading-relaxed mb-10 font-normal">
          {personalInfo.summary}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-600/30 transition-all duration-200 active:scale-95"
          >
            <span>View Systems & Architecture</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="/cv/Dagmawi-Heywot-Resume.pdf"
            download="Dagmawi-Heywot-Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-slate-600 hover:text-white transition-all duration-200 active:scale-95 shadow-sm"
          >
            <FileDown className="w-4 h-4 text-indigo-400" />
            <span>Download CV (PDF)</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900/40 border border-slate-800 text-slate-400 font-medium text-sm hover:text-slate-200 hover:border-slate-700 transition-all"
          >
            <span>Contact Me</span>
          </a>
        </div>

        {/* Live Architecture Metrics Bar */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-slate-800/80">
          {personalInfo.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-slate-900/60 border border-slate-800/90 backdrop-blur-sm flex flex-col items-center justify-center text-center hover:border-indigo-500/40 transition-colors"
            >
              <div className="font-['Orbitron',sans-serif] text-2xl sm:text-3xl font-bold text-white mb-1 bg-gradient-to-br from-white to-slate-300 bg-clip-text">
                {metric.value}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-indigo-300 mb-0.5">
                {metric.label}
              </div>
              <div className="text-[11px] text-slate-400 leading-tight">
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
