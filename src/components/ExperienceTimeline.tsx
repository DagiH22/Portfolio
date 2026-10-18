"use client";

import React from "react";
import { experiences, educations, certifications } from "@/data/experience";
import {
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Track Record</span>
        </div>
        <h2 className="font-['Orbitron',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Experience & Education
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          Professional engineering roles, research contracting, university capstones, and accredited software engineering certifications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Work Experience Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-indigo-400" />
            <h3 className="font-['Orbitron',sans-serif] text-xl font-bold text-slate-100">
              Work Experience
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-800 space-y-8">
            {experiences.map((exp) => (
              <div key={exp.id} className="relative group">
                {/* Timeline node marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-indigo-500 group-hover:scale-125 group-hover:bg-indigo-500 transition-all shadow-sm shadow-indigo-500/50" />

                <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 group-hover:border-slate-700 transition-all duration-200">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-indigo-400 font-medium mt-0.5">
                        {exp.companyUrl ? (
                          <a
                            href={exp.companyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 hover:underline"
                          >
                            <span>{exp.company}</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        ) : (
                          <span>{exp.company}</span>
                        )}
                        <span>•</span>
                        <span className="text-slate-400">{exp.location}</span>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60">
                      <Calendar className="w-3 h-3 text-slate-400" />
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 my-4 text-xs sm:text-sm text-slate-300">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-1 select-none">▹</span>
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800/80">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-slate-800/80 text-slate-300 text-[11px] font-mono border border-slate-700/40"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5" />
                        <span>Intern Certificate</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Certifications Column */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-400" />
              <h3 className="font-['Orbitron',sans-serif] text-xl font-bold text-slate-100">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-white">{edu.degree}</h4>
                      <p className="text-xs text-indigo-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 text-[11px] font-mono border border-slate-700/60">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 flex items-center gap-1 mb-4">
                    <MapPin className="w-3 h-3 text-slate-500" />
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="text-emerald-400 font-semibold">{edu.status}</span>
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-400 mt-0.5">▹</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-indigo-400" />
              <h3 className="font-['Orbitron',sans-serif] text-xl font-bold text-slate-100">
                Certifications & Languages
              </h3>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Accredited Nanodegrees
                </span>
                <div className="space-y-2">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2.5">
                        <Award className="w-4 h-4 text-indigo-400" />
                        <div>
                          <p className="text-xs font-semibold text-white">{cert.name}</p>
                          <p className="text-[11px] text-slate-400">{cert.issuer}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700/60 text-slate-300">
                        Verified
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-2">
                  Spoken Languages
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">English</span>
                    <span className="text-indigo-400 font-mono text-[11px]">Proficient</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 flex items-center justify-between">
                    <span className="text-slate-200 font-medium">Amharic</span>
                    <span className="text-indigo-400 font-mono text-[11px]">Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
