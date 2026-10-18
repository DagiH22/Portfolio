import React from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import {
  ExternalLink,
  Github,
  CheckCircle2,
  Lock,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const getBadgeStyle = (variant: Project["statusVariant"]) => {
    switch (variant) {
      case "active":
        return "bg-indigo-950/80 text-indigo-300 border-indigo-500/40 shadow-indigo-500/20";
      case "deployed":
        return "bg-emerald-950/80 text-emerald-300 border-emerald-500/40 shadow-emerald-500/20";
      case "production":
        return "bg-cyan-950/80 text-cyan-300 border-cyan-500/40 shadow-cyan-500/20";
      default:
        return "bg-slate-900 text-slate-300 border-slate-700";
    }
  };

  return (
    <article className="group relative rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md overflow-hidden hover:border-slate-700 transition-all duration-300 shadow-xl flex flex-col lg:flex-row">
      {/* Visual / Screenshot Showcase */}
      <div className="relative w-full lg:w-5/12 min-h-[260px] lg:min-h-full bg-slate-950/80 overflow-hidden flex items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-800/80">
        <div className="relative w-full h-full min-h-[260px] p-4 flex items-center justify-center">
          <Image
            src={project.image}
            alt={`${project.title} Preview`}
            width={640}
            height={360}
            priority={priority}
            className="w-full h-auto max-h-[300px] object-cover rounded-xl border border-slate-800 shadow-2xl group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        {/* Floating Metrics Tag */}
        {project.metricsBadge && (
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/90 text-slate-200 border border-slate-700/80 text-[11px] font-mono shadow-lg backdrop-blur-md">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
              {project.metricsBadge}
            </span>
          </div>
        )}
      </div>

      {/* Architecture & Engineering Details */}
      <div className="w-full lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Header Row: Status Badge & Architecture Tags */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border shadow-sm ${getBadgeStyle(
                project.statusVariant
              )}`}
            >
              <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
              {project.status}
            </span>

            <div className="flex flex-wrap gap-1.5">
              {project.architectureTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded-md bg-slate-800/60 text-slate-400 text-[11px] font-mono border border-slate-700/40"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Project Title & Tagline */}
          <h3 className="font-['Orbitron',sans-serif] text-xl sm:text-2xl font-bold text-white mb-1.5 group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-indigo-400/90 mb-4 font-mono">
            {project.tagline}
          </p>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-5">
            {project.summary}
          </p>

          {/* Key Architecture Highlights */}
          <div className="mb-6 space-y-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
              Architecture & Implementation Highlights:
            </span>
            <ul className="space-y-2">
              {project.architectureHighlights.map((highlight, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <span className="text-indigo-400 font-bold select-none mt-0.5">▹</span>
                  <span className="leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Tech Stack Chips & Action Buttons */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-800/80">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg bg-slate-800/80 text-slate-300 text-[11px] font-medium border border-slate-700/60"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Live Demo or Verified Badge */}
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/30 transition-all duration-150 active:scale-95"
              >
                <span>View Live Deployment</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : project.id === "agentdesk" ? (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-950/60 border border-indigo-500/40 text-indigo-300 text-xs font-mono">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
                <span>61 Automated Tests Passing</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 text-xs font-mono">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Campus Deployment Active</span>
              </span>
            )}

            {/* Source Code */}
            {project.repoUrl ? (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 hover:text-white border border-slate-700/60 text-slate-300 text-xs font-semibold transition-all duration-150 active:scale-95"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-500 text-xs font-mono">
                <Lock className="w-3.5 h-3.5" />
                <span>Private Repository</span>
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
