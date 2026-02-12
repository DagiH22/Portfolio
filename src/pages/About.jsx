import React from "react";
import "../styles/About.css";
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
import tsLogo from "../assets/images/skills/typescript.svg";
import externalLinkImg from "../assets/images/external-link.svg"

function About() {
  const underlineStyle = {
    textDecoration: 'underline',
  };
  return (
    <div id="about" className="aboutContainer">
      <div className="desc">
        <h2>About Me</h2>
        <hr />
        <p className="briefAbt">
          <br />
          Hey, I'm Dagmawi, a Computer Science student with a strong interest in
          web development and a hunger for continuous learning. <br />I always
          knew I was into tech ever since I got my first PC, I couldn’t let go
          of it. Growing up, I was the go to person in my family and
          neighborhood for anything tech related. It was in those early days I
          met the infamous <i>blue screen of death </i>and instead of running
          from it, I got curious. That early curiosity led me to join AAU and
          study Computer Science, where I really started diving into coding.{" "}
          <br />
          I specialize in frontend development, creating responsive and minimal
          web interfaces using modern tools like React, HTML/CSS, and
          JavaScript. Lately, I've also been exploring backend concepts with
          Node.js and learning how the web works under the hood. <br />
          Beyond code, I enjoy expanding my knowledge through side projects,
          certifications, and YouTube deep dives whether it's full-stack
          tutorials, UI inspiration, or big picture tech wisdom. <br /> <br />
          Currently, I’m building real-world projects, learning from every bug,
          and working toward becoming a well rounded developer. <br />
          If I’m not coding, you’ll find me at the gym, playing a casual game of
          chess, reading the Bible, flipping through self help or fiction books,
          occasionally watching a movie, or just vibing to music. I’m always
          learning, not just in tech, but in life too.
        </p>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <hr />
        <h4>Web Development</h4>
        <div className="webSkills">
          <span className="dev">Front End</span>
          <div className="frontEnd">
            <span className="logos">
              <img src={reactLogo} alt="react logo" />
              <span>React</span>{" "}
            </span>
            <span className="logos">
              <img src={nextLogo} alt="NextJs logo" />
              <span>NextJs</span>
            </span>
            <span className="logos">
              <img src={TailWindLogo} alt="Tailwind logo" />
              <span>TailWind CSS</span>
            </span>
            <span className="logos">
              <img src={css3Logo} alt="CSS 3 logo" />
              <span>CSS</span>
            </span>
            <span className="logos">
              <img src={html5Logo} alt="HTML 5 logo" />
              <span>HTML 5</span>
            </span>
          </div>
          <span className="dev">Back End</span>
          <div className="backEnd">
            <span className="logos">
              <img src={nodeLogo} alt="node js logo" />
              <span>Node Js</span>{" "}
            </span>
            <span className="logos">
              <img src={expressLogo} alt="express js logo" />
              <span>Express Js</span>
            </span>
            <span className="logos">
              <img src={mongodbLogo} alt="mongodb logo" />
              <span>MongoDB</span>
            </span>
          </div>
          <span className="dev">Languages</span>
          <div className="Languages">
            <span className="logos">
              <img src={jsLogo} alt="JavaScript logo" />
              <span>JavaScript</span>
            </span>
            <span className="logos">
              <img src={tsLogo} alt="TypeScript logo" />
              <span>TypeScript</span>
            </span>
          </div>
          <span className="dev">Tools & Workflow</span>
          <div className="tools">
            <span className="logos">
              <img src={gitLogo} alt="Git logo" />
              <span>Git</span>
            </span>
            <span className="logos">
              <img src={gitHubLogo} alt="GitHub logo" />
              <span>GitHub</span>
            </span>
            <span className="logos">
              <img src={vscodeLogo} alt="VS Code logo" />
              <span>VS Code</span>
            </span>
          </div>
        </div>
        {/* <div className='networking'>
                <h4>Networking Skills</h4>
                <span>TCP/IP </span>
                <span>Subnetting </span>
                <span> IP Addressing </span>
                <span>Network CLI</span>
            </div> */}
      </div>

      <div id="experience" className="experience">
        <h3>Experience</h3>
        <hr />

        <div className="expList">
          <div className="expItem">
            <div className="expHeader">
              <div>
                <h4>Software Engineering Intern (Remote, India)</h4>
                <p className="company">
                  <a
                    href="https://viralhit.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={underlineStyle}
                  >
                    ViralHit
                  </a>
                </p>
              </div>
              <div className="expWhen">Oct 2025 - Jan 2026</div>
            </div>
            <ul className="expPoints">
              <li>
                Built a scalable web-based ERP interface builder using React and
                TypeScript, enabling users to visually create and configure
                business application pages.
              </li>
              <li>
                Developed drag-and-drop functionality with reusable UI
                components and structured state management using Zustand.
              </li>
              <li>
                Implemented multi-page workflows, dynamic forms, tables, and
                configurable layouts to support flexible ERP customization.
              </li>
              <li>
                Focused on performance, responsiveness, and clean, modular
                frontend architecture for complex interfaces.
              </li>
              <li>
                Collaborated and worked independently in a fully remote setup,
                translating UI concepts into production-ready solutions.
              </li>
            </ul>
            <p className="tech">
              Tech: React, TypeScript, Zustand, Tailwind CSS, Vite 
            </p>
            <br />
            <a href="https://drive.google.com/file/d/1_TKIKyqK3MmhG1mJ1HvxOUy_4clSMpr3" className='liveLink roundLink' target='_blank'><img src={externalLinkImg} alt="external Link" rel="noopener noreferrer" className='externalLinkImage' />  Intern certificate</a>
          </div>

          <div className="expItem">
            <div className="expHeader">
              <div>
                <h4>IT Support Intern (On Site, Addis Ababa)</h4>
                <p className="company">
                  Public Service Transport Service - Addis Ababa
                </p>
              </div>
              <div className="expWhen">Jun 2025 - Aug 2025</div>
            </div>
            <ul className="expPoints">
              <li>
                Provided hands-on technical support by diagnosing and resolving
                hardware, software, and network issues to maintain uninterrupted
                daily operations.
              </li>
              <li>
                Supported internal systems including company websites, ERP
                platforms, and security infrastructure.
              </li>
              <li>
                Troubleshot connectivity issues, system errors, and device
                failures, improving system stability and response time.
              </li>
              <li>
                Delivered direct user support, strengthening problem-solving
                ability and professional communication in a real world
                environment.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
