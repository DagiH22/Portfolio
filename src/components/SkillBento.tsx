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
  CheckCircle,
} from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-indigo-400" />,
  Server: <Server className="w-5 h-5 text-emerald-400" />,
  Database: <Database className="w-5 h-5 text-cyan-400" />,
  Terminal: <Terminal className="w-5 h-5 text-purple-400" />,
};

const pillarAccents: Record<number, { border: string; glow: string; badge: string }> = {
  1: {
    border: "group-hover:border-indigo-500/50",
    glow: "bg-indigo-500/5",
    badge: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20",
  },
  2: {
    border: "group-hover:border-emerald-500/50",
    glow: "bg-emerald-500/5",
    badge: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20",
  },
  3: {
    border: "group-hover:border-cyan-500/50",
    glow: "bg-cyan-500/5",
    badge: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20",
  },
  4: {
    border: "group-hover:border-purple-500/50",
    glow: "bg-purple-500/5",
    badge: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  },
};

export default function SkillBento() {
  return (
    <section id="skills" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Technical Architecture</span>
        </div>
        <h2 className="font-['Orbitron',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Core Engineering Pillars
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          Categorized fullstack capabilities spanning frontend state architectures, asynchronous backend queues, vector embeddings, and cloud deployment pipelines.
        </p>
      </div>

      {/* 4-Pillar Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((pillar) => {
          const accent = pillarAccents[pillar.pillarNumber] || pillarAccents[1];

          return (
            <div
              key={pillar.id}
              className={`group relative p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md transition-all duration-300 ${accent.border} hover:shadow-xl hover:shadow-black/50 overflow-hidden flex flex-col justify-between`}
            >
              {/* Subtle Ambient Hover Glow */}
              <div
                className={`absolute inset-0 ${accent.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60">
                      {iconMap[pillar.iconName] || <Cpu className="w-5 h-5 text-indigo-400" />}
                    </div>
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Pillar 0{pillar.pillarNumber}
                      </span>
                      <h3 className="font-['Orbitron',sans-serif] text-lg font-bold text-slate-100">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${accent.badge}`}
                  >
                    {pillar.skills.length} Technologies
                  </span>
                </div>

                <p className="text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {pillar.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-xl bg-slate-800/70 border border-slate-700/50 text-slate-200 text-xs font-medium hover:border-slate-500 hover:text-white hover:bg-slate-700/60 transition-all duration-150"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Production & Scaled</span>
                <span className="flex items-center gap-1 text-emerald-400">
                  <CheckCircle className="w-3.5 h-3.5" /> Verified
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
