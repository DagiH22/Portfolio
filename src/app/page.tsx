import React from "react";
import Hero from "@/components/Hero";
import SkillBento from "@/components/SkillBento";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <div className="w-full flex flex-col items-center">
      <Hero />
      <SkillBento />
      <ProjectsSection />
      <ExperienceTimeline />
      <ContactSection />
    </div>
  );
}
