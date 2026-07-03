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
<br />I'm a Computer Science graduate from Addis Ababa University with a passion for building modern, scalable, and user-focused web applications. I enjoy solving real-world problems through software and continuously expanding my knowledge of both frontend and backend development.
</p><p>
<br /> As a full-stack developer, I build responsive and interactive applications using React, JavaScript, TypeScript, HTML, and CSS on the frontend, while developing server-side applications and APIs with Node.js, Express, and MongoDB on the backend. I enjoy understanding how every layer of an application works, from designing intuitive user interfaces to building efficient backend systems and databases.
</p><p>
<br />Through internships and personal projects, I've gained hands-on experience developing production-ready applications, creating reusable components, implementing dynamic user interfaces, and collaborating in professional development environments. I also have practical experience providing IT support and troubleshooting hardware, software, and networking issues, which has strengthened my analytical thinking and problem-solving skills.
</p><p>
<br />Beyond web development, I have a strong interest in software engineering, computer networking, and building systems that are reliable, maintainable, and scalable. I enjoy learning new technologies, exploring best practices, and continuously improving through hands-on projects and technical challenges.
</p><p>
<br />I'm always looking for opportunities to contribute to meaningful projects, collaborate with talented teams, and continue growing as a full-stack software developer.
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
              <div className="expWhen">Aug 2025 - May 2026</div>
            </div>
            <ul className="expPoints">
              <li>
                Built a scalable web based ERP interface builder using React and
                TypeScript, enabling users to visually create and configure
                business application pages.
              </li>
              <li>
                Developed drag and drop functionality with reusable UI
                components and structured state management using Zustand.
              </li>
              <li>
                Implemented multi page workflows, dynamic forms, tables, and
                configurable layouts to support flexible ERP customization.
              </li>
              <li>
                Focused on performance, responsiveness, and clean, modular
                frontend architecture for complex interfaces.
              </li>
              <li>
                Collaborated and worked independently in a fully remote setup,
                translating UI concepts into production ready solutions.
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
              <div className="expWhen">May 2025 - Jul 2025</div>
            </div>
            <ul className="expPoints">
              <li>
                Provided hands on technical support by diagnosing and resolving
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
                Delivered direct user support, strengthening problem solving
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
