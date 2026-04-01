import React from "react";
import "../styles/About.css";
import { skillsData } from "../data/skillsData.js";
import externalLinkImg from "../assets/images/external-link.svg";

function About() {
  const underlineStyle = {
    textDecoration: "underline",
  };
  return (
    <div id="about" className="aboutContainer">
      <div className="desc">
        <h2>About Me</h2>
        <hr />
        <div className="briefAbt">
          <p>
            Hey, I'm Dagmawi, a Computer Science student with a strong interest
            in web development and a hunger for continuous learning.
          </p>
          <p>
            I always knew I was into tech ever since I got my first PC. I
            couldn’t let go of it. Growing up, I was the go-to person in my
            family and neighborhood for anything tech-related. It was in those
            early days I met the infamous <i>blue screen of death </i>and
            instead of running from it, I got curious. That early curiosity led
            me to join AAU and study Computer Science, where I really started
            diving into coding.
          </p>
          <p>
            I specialize in frontend development, creating responsive and
            minimal web interfaces using modern tools like React, HTML/CSS, and
            JavaScript/TypeScript. Lately, I've also been exploring backend
            concepts with Node.js and learning how the web works under the hood.
          </p>
          <p>
            Beyond code, I enjoy expanding my knowledge through side projects,
            certifications, and YouTube deep dives—whether it's full-stack
            tutorials, UI inspiration, or big-picture tech wisdom.
          </p>
          <p>
            Currently, I’m building real-world projects, learning from every
            bug, and working toward becoming a well-rounded developer.
          </p>
          <p>
            If I’m not coding, you’ll find me at the gym, playing a casual game
            of chess, reading the Bible, flipping through self-help or fiction
            books, occasionally watching a movie, or just vibing to music. I’m
            always learning—not just in tech, but in life too.
          </p>
        </div>
      </div>

      <div className="skills">
        <h3>Skills</h3>
        <hr />
        <h4>Web Development</h4>
        <div className="webSkills">
          {skillsData.map((category) => (
            <React.Fragment key={category.id}>
              <span className="dev">{category.title}</span>
              <div className={category.className}>
                {category.skills.map((skill, index) => (
                  <span className="logos" key={index}>
                    {skill.img && <img src={skill.img} alt={skill.alt} />}
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </React.Fragment>
          ))}
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
            <a
              href="https://drive.google.com/file/d/1_TKIKyqK3MmhG1mJ1HvxOUy_4clSMpr3"
              className="liveLink roundLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={externalLinkImg}
                alt="external Link"
                className="externalLinkImage"
              />{" "}
              Intern certificate
            </a>
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
