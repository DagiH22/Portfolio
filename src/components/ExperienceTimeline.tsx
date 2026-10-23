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
  Sparkles,
  CheckCircle2,
  Terminal,
  Cpu,
  Globe,
} from "lucide-react";
import { TechIcon } from "@/components/icons/TechIcons";

export default function ExperienceTimeline() {
  const getCompanyIcon = (id: string) => {
    switch (id) {
      case "contractor-2026":
        return <Cpu className="w-3.5 h-3.5 text-indigo-400" />;
      case "condigital-intern":
        return <Globe className="w-3.5 h-3.5 text-emerald-400" />;
      case "viralhit-intern":
        return <Terminal className="w-3.5 h-3.5 text-cyan-400" />;
      default:
        return <Briefcase className="w-3.5 h-3.5 text-slate-400" />;
    }
  };

  return (
    <section id="experience" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Track Record</span>
        </div>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          Experience & Education
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          Professional engineering internships, client research contracting, university graduation, and accredited Nanodegree credentials.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Work Experience Column (7 cols) */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-2">
            <Briefcase className="w-5 h-5 text-indigo-500" />
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900 dark:text-slate-100">
              Work Experience
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 border-l border-slate-200 dark:border-slate-800 space-y-8">
            {experiences.map((exp) => {
              const isFeatured = exp.featured;

              return (
                <div key={exp.id} className="relative group">
                  {/* Timeline node icon marker */}
                  <div
                    className={`absolute -left-[35px] sm:-left-[43px] top-1.5 w-6 h-6 rounded-full bg-white dark:bg-slate-950 border-2 flex items-center justify-center transition-all shadow-sm ${
                      isFeatured
                        ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-950/80 shadow-indigo-500/30 scale-110"
                        : "border-slate-300 dark:border-slate-700 group-hover:border-indigo-400"
                    }`}
                  >
                    {getCompanyIcon(exp.id)}
                  </div>

                  <div
                    className={`p-6 rounded-3xl transition-all duration-200 backdrop-blur-md ${
                      isFeatured
                        ? "bg-gradient-to-br from-indigo-950/20 via-slate-900/80 to-slate-900/60 border-2 border-indigo-500/40 shadow-xl shadow-indigo-500/5 hover:border-indigo-500/60"
                        : "bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                    }`}
                  >
                    {/* Featured Highlight Pill */}
                    {isFeatured && (
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-[10px] font-mono uppercase tracking-wider mb-3">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        <span>Core Engineering Focus</span>
                      </div>
                    )}

                    <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                      <div>
                        <h4
                          className={`text-base sm:text-lg font-bold text-slate-900 dark:text-white ${
                            isFeatured ? "font-[family-name:var(--font-space-grotesk)]" : ""
                          }`}
                        >
                          {exp.role}
                        </h4>
                        <div className="flex items-center gap-2 text-xs text-indigo-600 dark:text-indigo-400 font-medium mt-0.5">
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
                          <span className="text-slate-500 dark:text-slate-400">
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-700/60">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2 my-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {exp.highlights.map((point, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-indigo-500 font-bold select-none mt-0.5">
                            ▹
                          </span>
                          <span className="leading-relaxed">{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 dark:border-slate-800/80">
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-700/40"
                          >
                            <TechIcon name={tech} className="w-3 h-3 shrink-0" />
                            <span>{tech}</span>
                          </span>
                        ))}
                      </div>

                      {exp.certificateUrl && (
                        <a
                          href={exp.certificateUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 border border-indigo-500/30 hover:bg-indigo-500/20 transition-colors cursor-pointer"
                        >
                          <Award className="w-3.5 h-3.5" />
                          <span>Intern Certificate</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education & Certifications Column (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-8">
          {/* Education Block */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-indigo-500" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900 dark:text-slate-100">
                Education
              </h3>
            </div>

            <div className="space-y-4">
              {educations.map((edu) => (
                <div
                  key={edu.id}
                  className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all backdrop-blur-md"
                >
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900 dark:text-white font-[family-name:var(--font-space-grotesk)]">
                        {edu.degree}
                      </h4>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                        {edu.institution}
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[11px] font-mono border border-slate-200 dark:border-slate-700/60">
                      {edu.period}
                    </span>
                  </div>

                  <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1.5 mb-4">
                    <MapPin className="w-3.5 h-3.5 text-slate-400" />
                    <span>{edu.location}</span>
                    <span>•</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
                      {edu.status}
                    </span>
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300">
                    {edu.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-indigo-500 mt-0.5">▹</span>
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
              <Award className="w-5 h-5 text-indigo-500" />
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-xl font-bold text-slate-900 dark:text-slate-100">
                Certifications & Languages
              </h3>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-5 backdrop-blur-md">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  Accredited Nanodegrees
                </span>
                <div className="space-y-2.5">
                  {certifications.map((cert) => (
                    <div
                      key={cert.id}
                      className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30">
                          <Award className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-slate-900 dark:text-white">
                            {cert.name}
                          </p>
                          <p className="text-[11px] text-slate-500 dark:text-slate-400">
                            {cert.issuer}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30 flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Verified
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-3">
                  Spoken Languages
                </span>
                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      English
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-[11px] font-semibold">
                      Proficient
                    </span>
                  </div>
                  <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/50 flex items-center justify-between">
                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                      Amharic
                    </span>
                    <span className="text-indigo-600 dark:text-indigo-400 font-mono text-[11px] font-semibold">
                      Native
                    </span>
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
