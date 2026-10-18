export interface Project {
  id: string;
  title: string;
  tagline: string;
  status: string;
  statusVariant: "active" | "production" | "deployed";
  summary: string;
  architectureHighlights: string[];
  techStack: string[];
  architectureTags: string[];
  metricsBadge?: string;
  image: string;
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
}

export interface SkillCategory {
  id: string;
  pillarNumber: number;
  title: string;
  description: string;
  skills: string[];
  iconName: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  employmentType: "Contract" | "Internship" | "Full-time";
  highlights: string[];
  technologies: string[];
  certificateUrl?: string | null;
  companyUrl?: string | null;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  highlights: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  credentialUrl?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  telegramUrl: string;
  summary: string;
  availability: string;
  metrics: {
    label: string;
    value: string;
    sublabel: string;
  }[];
}
