"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, FileDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [navVisible, setNavVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && navVisible) {
        setNavVisible(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navVisible]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#home"
            className="group flex items-center gap-2.5 text-slate-100 hover:text-indigo-400 transition-colors"
            aria-label="Dagmawi Heywot Home"
          >
            <div className="relative w-8 h-8 rounded-lg bg-indigo-950/80 border border-indigo-500/30 flex items-center justify-center p-1.5 group-hover:border-indigo-400 transition-all shadow-sm shadow-indigo-500/20">
              <Image
                src="/images/dh.svg"
                alt="DH Logo"
                width={22}
                height={22}
                className="w-full h-full object-contain filter invert opacity-90 group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-['Orbitron',sans-serif] text-sm font-bold tracking-wider text-slate-100 group-hover:text-indigo-300 transition-colors">
                DAGMAWI<span className="text-indigo-400">.</span>H
              </span>
              <span className="font-mono text-[10px] text-slate-400 tracking-tight">
                Fullstack & AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 shadow-inner backdrop-blur-md"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Actions: Resume CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="/cv/Dagmawi-Heywot-Resume.pdf"
              download="Dagmawi-Heywot-Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-indigo-600/20 border border-indigo-500/40 text-indigo-300 hover:bg-indigo-600/30 hover:border-indigo-400 transition-all shadow-sm"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setNavVisible(!navVisible)}
              aria-label="Toggle navigation menu"
              aria-expanded={navVisible}
              className="md:hidden p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {navVisible ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {navVisible && (
          <div
            id="mobile-navigation"
            className="md:hidden mt-3 p-4 rounded-2xl bg-slate-900/95 border border-slate-800/90 backdrop-blur-xl shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setNavVisible(false)}
                className="px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:text-indigo-400 hover:bg-slate-800/60 transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <a
                href="/cv/Dagmawi-Heywot-Resume.pdf"
                download="Dagmawi-Heywot-Resume.pdf"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold bg-indigo-600 text-white hover:bg-indigo-500 transition-colors shadow-md shadow-indigo-600/20"
                onClick={() => setNavVisible(false)}
              >
                <FileDown className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
