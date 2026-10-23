"use client";

import React from "react";
import { skillCategories } from "@/data/skills";
import {
  Layout,
  Server,
  Database,
  Terminal,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { TechIcon } from "@/components/icons/TechIcons";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-emerald-500 dark:text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />,
  Terminal: <Terminal className="w-5 h-5 text-violet-500 dark:text-violet-400" />,
};

const pillarAccents: Record<number, { border: string; glow: string; badge: string }> = {
  1: {
    border: "hover:border-indigo-500/40 dark:hover:border-indigo-500/50",
    glow: "bg-indigo-500/5",
    badge: "bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30",
  },
  2: {
    border: "hover:border-emerald-500/40 dark:hover:border-emerald-500/50",
    glow: "bg-emerald-500/5",
    badge: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30",
  },
  3: {
    border: "hover:border-cyan-500/40 dark:hover:border-cyan-500/50",
    glow: "bg-cyan-500/5",
    badge: "bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30",
  },
  4: {
    border: "hover:border-violet-500/40 dark:hover:border-violet-500/50",
    glow: "bg-violet-500/5",
    badge: "bg-violet-50 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-500/30",
  },
};

export default function SkillBento() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Architecture</span>
        </div>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          Core Engineering Pillars
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Categorized technical stack matching production web applications, vector search architectures, and asynchronous queue pipelines.
        </p>
      </div>

      {/* 4-Pillar Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((pillar) => {
          const accent = pillarAccents[pillar.pillarNumber] || pillarAccents[1];

          return (
            <div
              key={pillar.id}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md transition-all duration-300 ${accent.border} hover:shadow-xl dark:hover:shadow-black/40 overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute inset-0 ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                      {iconMap[pillar.iconName] || <Cpu className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Pillar 0{pillar.pillarNumber}
                      </span>
                      <h3 className="font-[family-name:var(--font-space-grotesk)] text-base sm:text-lg font-bold text-slate-900 dark:text-slate-100">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full border ${accent.badge}`}
                  >
                    {pillar.skills.length} Technologies
                  </span>
                </div>

                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Skill Chips with real logos */}
                <div className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100/90 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/50 text-slate-800 dark:text-slate-200 text-xs font-medium hover:border-indigo-400 dark:hover:border-slate-500 hover:text-slate-950 dark:hover:text-white transition-all duration-150"
                    >
                      <TechIcon name={skill} className="w-3.5 h-3.5 shrink-0" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 relative z-10">
                <span>Verified in Production</span>
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Hands-on Stack
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
