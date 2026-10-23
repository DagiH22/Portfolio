"use client";

import React, { useState, useEffect } from "react";
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
  AlertCircle,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons/SocialIcons";

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
  _gotcha: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  general?: string;
}

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
    _gotcha: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [loadTime, setLoadTime] = useState<number>(0);

  useEffect(() => {
    // Record client load time for spam protection
    setLoadTime(Date.now());
  }, []);

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

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.name.trim()) {
      errs.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      errs.email = "Please enter your email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      errs.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      errs.message = "Please write a message";
    } else if (formData.message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 2000) {
      errs.message = "Message cannot exceed 2000 characters";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _loadTime: loadTime,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
        throw new Error(data.error || "Failed to deliver message");
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        _gotcha: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg =
        err instanceof Error
          ? err.message
          : "An unexpected error occurred while sending your message.";
      setErrorMessage(msg);
    }
  };

  return (
    <section id="contact" className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/30 text-indigo-700 dark:text-indigo-400 text-xs font-semibold mb-3">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get in Touch</span>
        </div>
        <h2 className="font-[family-name:var(--font-space-grotesk)] text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-3">
          Let&apos;s Build Something Resilient
        </h2>
        <p className="max-w-2xl text-slate-600 dark:text-slate-400 text-sm sm:text-base">
          I am actively available for Fullstack, Frontend, and AI engineering opportunities (on-site, hybrid, or remote). Send a direct message below or reach out via direct channels.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels & Profiles (5 cols) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {/* Direct Contact Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-slate-900 dark:text-white mb-1.5">
              Direct Communication
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-5">
              1-click copy or direct email/phone contact for inquiries and technical discussions.
            </p>

            <div className="space-y-3.5">
              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/80 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Email Address</span>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors truncate block"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.email, "email")}
                  className="p-2 rounded-lg bg-white dark:bg-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
                  aria-label="Copy email"
                  title="Copy email"
                >
                  {copiedEmail ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 block">Phone / WhatsApp</span>
                    <a
                      href={`tel:${personalInfo.phone.replace(/\s+/g, "")}`}
                      className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors truncate block"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => copyToClipboard(personalInfo.phone, "phone")}
                  className="p-2 rounded-lg bg-white dark:bg-slate-700/60 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-transparent transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                  aria-label="Copy phone number"
                  title="Copy phone"
                >
                  {copiedPhone ? (
                    <Check className="w-4 h-4 text-emerald-500" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              <MapPin className="w-4 h-4 text-indigo-500 shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          {/* Profiles Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs">
            <h3 className="font-[family-name:var(--font-space-grotesk)] text-base font-bold text-slate-900 dark:text-white mb-2">
              Verified Profiles & Code
            </h3>
            <div className="space-y-2.5">
              <a
                href={personalInfo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 shadow-xs">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors block">
                      GitHub
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      github.com/DagiH22
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={personalInfo.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#0077b5]/10 dark:bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/20 dark:border-[#0077b5]/30">
                    <LinkedinIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors block">
                      LinkedIn
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      dagmawi-heywot
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-slate-300 transition-colors" />
              </a>

              <a
                href={personalInfo.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700/60 hover:border-indigo-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800/90 transition-all flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-[#229ED9]/10 dark:bg-[#229ED9]/20 text-[#229ED9] border border-[#229ED9]/20 dark:border-[#229ED9]/30">
                    <Send className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition-colors block">
                      Telegram
                    </span>
                    <span className="text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                      t.me/dagiheb
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-slate-300 transition-colors" />
              </a>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
              <span>Timezone: UTC+3 (East Africa Time)</span>
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Fast Response</span>
            </div>
          </div>
        </div>

        {/* Right Column: Working Contact Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 backdrop-blur-md shadow-xs relative overflow-hidden">
            <div className="mb-6">
              <h3 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-slate-900 dark:text-white mb-1">
                Send a Direct Message
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Messages route straight to my personal inbox with visitor reply-to threading.
              </p>
            </div>

            {/* Accessibility announcement */}
            <div aria-live="polite" className="sr-only">
              {status === "submitting" && "Sending message..."}
              {status === "success" && "Message sent successfully!"}
              {status === "error" && `Error: ${errorMessage}`}
            </div>

            {status === "success" ? (
              <div className="py-10 px-4 flex flex-col items-center text-center animate-fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-4 shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-[family-name:var(--font-space-grotesk)] text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mb-6 leading-relaxed">
                  Thank you for reaching out. Your message has been routed to my inbox, and I will reply as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Honeypot field (hidden from human users) */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <label htmlFor="contact_gotcha">Leave this field blank</label>
                  <input
                    type="text"
                    id="contact_gotcha"
                    name="_gotcha"
                    value={formData._gotcha}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label
                      htmlFor="contact_name"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-indigo-600 dark:text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact_name"
                      name="name"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name_error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 transition-all ${
                        errors.name
                          ? "border-rose-500/80 focus:ring-rose-500/30"
                          : "border-slate-300 dark:border-slate-800 focus:border-indigo-500/80 focus:ring-indigo-500/20"
                      }`}
                    />
                    {errors.name && (
                      <p
                        id="name_error"
                        className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  {/* Email field */}
                  <div>
                    <label
                      htmlFor="contact_email"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-indigo-600 dark:text-indigo-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="contact_email"
                      name="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email_error" : undefined}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 transition-all ${
                        errors.email
                          ? "border-rose-500/80 focus:ring-rose-500/30"
                          : "border-slate-300 dark:border-slate-800 focus:border-indigo-500/80 focus:ring-indigo-500/20"
                      }`}
                    />
                    {errors.email && (
                      <p
                        id="email_error"
                        className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1"
                      >
                        <AlertCircle className="w-3 h-3 shrink-0" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject field (optional) */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="contact_subject"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      Subject
                    </label>
                    <span className="text-[10px] text-slate-400 dark:text-slate-500 font-mono">Optional</span>
                  </div>
                  <input
                    type="text"
                    id="contact_subject"
                    name="subject"
                    placeholder="Engineering role / project inquiry"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-300 dark:border-slate-800 focus:border-indigo-500/80 focus:bg-white dark:focus:bg-slate-950 focus:ring-2 focus:ring-indigo-500/20 text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none transition-all"
                  />
                </div>

                {/* Message field */}
                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label
                      htmlFor="contact_message"
                      className="block text-xs font-medium text-slate-700 dark:text-slate-300"
                    >
                      Message <span className="text-indigo-600 dark:text-indigo-400">*</span>
                    </label>
                    <span
                      className={`text-[10px] font-mono ${
                        formData.message.length > 2000
                          ? "text-rose-500 dark:text-rose-400 font-bold"
                          : "text-slate-400 dark:text-slate-500"
                      }`}
                    >
                      {formData.message.length} / 2000
                    </span>
                  </div>
                  <textarea
                    id="contact_message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Hello Dagmawi, I'd like to discuss an opportunity..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message_error" : undefined}
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border text-sm text-slate-900 dark:text-slate-100 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:bg-white dark:focus:bg-slate-950 focus:outline-none focus:ring-2 transition-all resize-none ${
                      errors.message
                        ? "border-rose-500/80 focus:ring-rose-500/30"
                        : "border-slate-300 dark:border-slate-800 focus:border-indigo-500/80 focus:ring-indigo-500/20"
                    }`}
                  />
                  {errors.message && (
                    <p
                      id="message_error"
                      className="text-[11px] text-rose-500 dark:text-rose-400 mt-1 flex items-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3 shrink-0" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Error Banner with Mailto Fallback */}
                {status === "error" && (
                  <div className="p-3.5 rounded-xl bg-rose-50 dark:bg-rose-500/10 border border-rose-200 dark:border-rose-500/30 flex items-start gap-2.5 text-xs text-rose-700 dark:text-rose-300">
                    <AlertCircle className="w-4 h-4 text-rose-500 dark:text-rose-400 shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <p className="font-semibold">{errorMessage}</p>
                      <p className="mt-1 text-slate-600 dark:text-slate-300 text-[11px]">
                        You can also email directly to{" "}
                        <a
                          href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(
                            formData.subject || "Portfolio Inquiry"
                          )}&body=${encodeURIComponent(formData.message)}`}
                          className="text-indigo-600 dark:text-indigo-400 underline hover:text-indigo-800 dark:hover:text-indigo-300 font-semibold"
                        >
                          {personalInfo.email}
                        </a>
                      </p>
                    </div>
                  </div>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white font-semibold text-sm transition-all duration-200 active:scale-[0.99] shadow-md shadow-indigo-600/20 disabled:cursor-not-allowed cursor-pointer"
                >
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
