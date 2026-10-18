"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/experience";
import {
  Mail,
  Phone,
  Send,
  MapPin,
  Copy,
  Check,
  ExternalLink,
  MessageSquare,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contact" className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="font-['Orbitron',sans-serif] text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
          Let&apos;s Build Something Resilient
        </h2>
        <p className="max-w-2xl text-slate-400 text-sm sm:text-base">
          I am actively available for Fullstack, Frontend, and AI engineering opportunities. Whether you are building high-throughput systems or looking for a dedicated teammate, let&apos;s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Direct Channels Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="font-['Orbitron',sans-serif] text-lg font-bold text-white mb-2">
              Direct Communication
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Reach out via email or direct phone/WhatsApp for inquiries or interviews.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-indigo-950/80 text-indigo-400 border border-indigo-500/30">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-indigo-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-all focus:outline-none"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-emerald-950/80 text-emerald-400 border border-emerald-500/30">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-semibold text-slate-200 hover:text-emerald-400 transition-colors truncate block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-slate-700/60 hover:bg-slate-700 text-slate-300 hover:text-white transition-all focus:outline-none"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center gap-2 text-xs text-slate-400">
            <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
            <span>{personalInfo.location}</span>
          </div>
        </div>

        {/* Professional Profiles Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md flex flex-col justify-between">
          <div>
            <h3 className="font-['Orbitron',sans-serif] text-lg font-bold text-white mb-2">
              Verified Profiles & Code
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              Review active repositories, commits, and engineering updates.
            </p>

            <div className="space-y-3">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-900 text-white border border-slate-700">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors block">
                      GitHub
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      github.com/DagiH22
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#0077b5]/20 text-[#0a66c2] border border-[#0077b5]/30">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      linkedin.com/in/dagmawi-heywot-96j
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={personalInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3.5 rounded-2xl bg-slate-800/60 border border-slate-700/60 hover:border-slate-600 hover:bg-slate-800/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#229ED9]/20 text-[#229ED9] border border-[#229ED9]/30">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white group-hover:text-indigo-300 transition-colors block">
                      Telegram
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono">
                      t.me/dagiheb
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors" />
              </a>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Timezone: UTC+3 (East Africa Time)</span>
            <span className="text-emerald-400 font-medium">Fast Response</span>
          </div>
        </div>
      </div>
    </section>
  );
}
