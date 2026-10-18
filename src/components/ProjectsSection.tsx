import React from "react";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Layers } from "lucide-react";

export default function ProjectsSection() {
  return (
    <section id="projects" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Flagship Engineering</span>
        </div>
        <h2 className="font-['Orbitron',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Featured Systems & Architectures
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          Production-grade applications and systems engineered with strict TypeScript typing, asynchronous queue pipelines, role-based access control, and vector database embeddings.
        </p>
      </div>

      <div className="space-y-10">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} priority={index === 0} />
        ))}
      </div>
    </section>
  );
}
