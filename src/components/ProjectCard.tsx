"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Project } from "@/types/portfolio";
import {
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Cpu,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { GithubIcon } from "@/components/icons/SocialIcons";
import { TechIcon } from "@/components/icons/TechIcons";

interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export default function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [expanded, setExpanded] = useState(false);

  const getStatusBadge = (status: string, variant: Project["statusVariant"]) => {
    switch (variant) {
      case "production":
        return {
          dot: "bg-emerald-400",
          classes:
            "bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/40",
        };
      case "active":
        return {
          dot: "bg-cyan-400",
          classes:
            "bg-cyan-50 dark:bg-cyan-950/80 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/40",
        };
      case "deployed":
        return {
          dot: "bg-indigo-400",
          classes:
            "bg-indigo-50 dark:bg-indigo-950/80 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/40",
        };
      default:
        return {
          dot: "bg-slate-400",
          classes:
            "bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700",
        };
    }
  };

  const badge = getStatusBadge(project.status, project.statusVariant);

  return (
    <article
      id={project.id}
      className="group rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md overflow-hidden hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 shadow-lg dark:shadow-black/40 flex flex-col lg:flex-row"
    >
      {/* Left Column: Visual Showcase & Screenshot */}
      <div className="relative w-full lg:w-5/12 min-h-[260px] lg:min-h-full bg-slate-100 dark:bg-slate-950/80 overflow-hidden flex flex-col justify-between p-5 border-b lg:border-b-0 lg:border-r border-slate-200 dark:border-slate-800/80">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${badge.classes}`}
          >
            <span className={`w-2 h-2 rounded-full ${badge.dot} animate-pulse`} />
            {project.status}
          </span>

          {project.metricsBadge && (
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
              <span>{project.metricsBadge}</span>
            </span>
          )}
        </div>

        <div className="relative w-full my-auto py-2 flex items-center justify-center">
          <Image
            src={project.image}
            alt={`${project.title} Interface Preview`}
            width={640}
            height={360}
            priority={priority}
            className="w-full h-auto max-h-[280px] object-cover rounded-2xl border border-slate-200 dark:border-slate-800 shadow-md group-hover:scale-[1.01] transition-transform duration-300"
          />
        </div>

        {/* Architecture flow indicator for AgentDesk */}
        {project.architectureFlow && (
          <div className="mt-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
            <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1.5">
              RAG Ingestion & Query Pipeline
            </span>
            <div className="flex flex-wrap items-center gap-1 text-[10px] font-mono text-slate-600 dark:text-slate-300">
              {project.architectureFlow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <span className="px-2 py-0.5 rounded bg-slate-200/80 dark:bg-slate-800/90 text-slate-700 dark:text-slate-300 border border-slate-300/60 dark:border-slate-700/60">
                    {step}
                  </span>
                  {idx < project.architectureFlow!.length - 1 && (
                    <ArrowRight className="w-2.5 h-2.5 text-indigo-400 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Right Column: Case-Study Details */}
      <div className="w-full lg:w-7/12 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          {/* Architecture Tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.architectureTags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/70 text-slate-600 dark:text-slate-400 text-[11px] font-mono border border-slate-200 dark:border-slate-700/50"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title & Tagline */}
          <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-indigo-600 dark:text-indigo-400/90 mb-4 font-mono">
            {project.tagline}
          </p>

          {/* Problem & Solution Case Study Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
            {project.problem && (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 text-xs">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-rose-600 dark:text-rose-400 block mb-1">
                  Problem Context
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950/50 border border-slate-200/80 dark:border-slate-800/80 text-xs">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  What I Engineered
                </span>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            )}
          </div>

          {/* Expandable Architecture Details */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setExpanded(!expanded)}
              className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-100/80 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer"
              aria-expanded={expanded}
            >
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-indigo-500" />
                <span>Architecture & Implementation Highlights</span>
              </div>
              {expanded ? (
                <ChevronUp className="w-4 h-4 text-slate-400" />
              ) : (
                <ChevronDown className="w-4 h-4 text-slate-400" />
              )}
            </button>

            {expanded && (
              <ul className="mt-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 space-y-2 text-xs text-slate-600 dark:text-slate-300 animate-in fade-in duration-150">
                {project.architectureHighlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <span className="text-indigo-500 font-bold select-none mt-0.5">▹</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Footer: Tech Stack Chips with Logos & Action Buttons */}
        <div>
          <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-200 dark:border-slate-800/80">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[11px] font-medium border border-slate-200 dark:border-slate-700/60"
              >
                <TechIcon name={tech} className="w-3.5 h-3.5 shrink-0" />
                <span>{tech}</span>
              </span>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {/* Live Demo Link */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-600/25 transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <span>View Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {/* Source Code Link */}
            {project.repoUrl && (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 text-xs font-semibold transition-all duration-150 active:scale-95 cursor-pointer"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Repository</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
