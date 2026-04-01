import html5Logo from "../assets/images/skills/html5.svg";
import css3Logo from "../assets/images/skills/css3.svg";
import jsLogo from "../assets/images/skills/javascript.svg";
import reactLogo from "../assets/images/skills/react.svg";
import mongodbLogo from "../assets/images/skills/mongodb.svg";
import nodeLogo from "../assets/images/skills/node.svg";
import expressLogo from "../assets/images/skills/express.svg";
import gitLogo from "../assets/images/skills/git.svg";
import gitHubLogo from "../assets/images/skills/github.svg";
import vscodeLogo from "../assets/images/skills/vscode.svg";
import TailWindLogo from "../assets/images/skills/tailwind.svg";
import nextLogo from "../assets/images/skills/nextjs.svg";
import primsaLogo from "../assets/images/skills/prisma.svg";
import postgresqlLogo from "../assets/images/skills/postgresql.svg";
import tsLogo from "../assets/images/skills/typescript.svg";

export const skillsData = [
  {
    id: 1,
    title: "Front End",
    className: "frontEnd",
    skills: [
      { name: "React", img: reactLogo, alt: "react logo" },
      { name: "NextJs", img: nextLogo, alt: "NextJs logo" },
      { name: "TailWind CSS", img: TailWindLogo, alt: "Tailwind logo" },
      { name: "CSS", img: css3Logo, alt: "CSS 3 logo" },
      { name: "HTML 5", img: html5Logo, alt: "HTML 5 logo" },
    ],
  },
  {
    id: 2,
    title: "Back End",
    className: "backEnd",
    skills: [
      { name: "Node Js", img: nodeLogo, alt: "node js logo" },
      { name: "Express Js", img: expressLogo, alt: "express js logo" },
      { name: "PrismaORM", img: primsaLogo, alt: "prisma logo" },
    ],
  },
  {
    id: 3,
    title: "Databases",
    className: "backEnd", // uses same styling class as backend
    skills: [
      { name: "MongoDB", img: mongodbLogo, alt: "mongodb logo" },
      { name: "PostgreSQL", img: postgresqlLogo, alt: "postgresql logo" },
    ],
  },
  {
    id: 4,
    title: "Languages",
    className: "Languages",
    skills: [
      { name: "JavaScript", img: jsLogo, alt: "JavaScript logo" },
      { name: "TypeScript", img: tsLogo, alt: "TypeScript logo" },
    ],
  },
  {
    id: 5,
    title: "Tools & Workflow",
    className: "tools",
    skills: [
      { name: "Git", img: gitLogo, alt: "Git logo" },
      { name: "GitHub", img: gitHubLogo, alt: "GitHub logo" },
      { name: "VS Code", img: vscodeLogo, alt: "VS Code logo" },
    ],
  },
  {
    id: 6,
    title: "Soft Skills",
    className: "tools", // Re-use tools styling since it creates rows of cards uniformly
    skills: [
      { name: "Problem Solving", img: null, alt: "Problem Solving logo" },
      {
        name: "Cross-functional Collaboration",
        img: null,
        alt: "Collaboration logo",
      },
      { name: "Clear Communication", img: null, alt: "Communication logo" },
      { name: "Technical Writing", img: null, alt: "Writing logo" },
    ],
  },
];
