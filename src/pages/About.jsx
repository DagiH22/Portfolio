import React from 'react'
import '../styles/About.css'
import html5Logo from '../assets/images/skills/html5.svg'
import css3Logo from '../assets/images/skills/css3.svg'
import jsLogo from '../assets/images/skills/javascript.svg'
import reactLogo from '../assets/images/skills/react.svg'
import mongodbLogo from '../assets/images/skills/mongodb.svg'
import nodeLogo from '../assets/images/skills/node.svg'
import expressLogo from '../assets/images/skills/express.svg'
import gitLogo from '../assets/images/skills/git.svg'
import gitHubLogo from '../assets/images/skills/github.svg'
import vscodeLogo from '../assets/images/skills/vscode.svg'


function About() {
  return (
    <div id='about' className='aboutContainer'>
      <div className='desc'>
          <h2>About Me</h2>
          <hr />
            <p className='briefAbt'>
              <br />
              Hey, I'm Dagmawi — a Computer Science student with a strong interest in web development and a hunger for continuous learning. <br />
              I always knew I was into tech ever since I got my first PC, I couldn’t let go of it. 
              Growing up, I was the go-to person in my family and neighborhood for anything tech-related. 
              It was in those early days I met the infamous <i>blue screen of death </i>and instead of running from it, I got curious. 
              That early curiosity led me to join AAU and study Computer Science, where I really started diving into coding. <br />

              I specialize in frontend development, creating responsive and minimal web interfaces using modern tools like React, HTML/CSS, and JavaScript. 
              Lately, I've also been exploring backend concepts with Node.js and learning how the web works under the hood. <br />

              Beyond code, I enjoy expanding my knowledge through side projects, certifications, and YouTube deep dives whether it's full-stack tutorials, UI inspiration, or big-picture tech wisdom. <br /> <br />

              Currently, I’m building real-world projects, learning from every bug, and working toward becoming a well-rounded developer. <br /> 

              If I’m not coding, you’ll find me at the gym, playing a casual game of chess, reading the Bible, flipping through self-help or fiction books, 
              occasionally watching a movie, or just vibing to music. I’m always learning — not just in tech, but in life too.
            </p>
      </div>
        
        <div className='skills'>
            <h3>Skills</h3>
            <hr />
            <h4>Web Development</h4>
            <div className='webSkills'>
              <span className='dev'>Front End</span>
              <div className='frontEnd'>
                <span className='logos'><img src={reactLogo} alt="react logo"/><span>React</span> </span>
                <span className='logos'><img src={jsLogo} alt="javaScript logo"/><span>JavaScript</span></span>
                <span className='logos'><img src={css3Logo} alt="CSS 3 logo"/><span>CSS</span></span>
                <span className='logos'><img src={html5Logo} alt="HTML 5 logo"/><span>HTML 5</span></span>
              </div>
              <span className='dev'>Back End</span>
              <div className="backEnd">
                <span className='logos'><img src={nodeLogo} alt="node js logo"/><span>Node Js</span> </span>
                <span className='logos'><img src={expressLogo} alt="express js logo"/><span>Express Js</span></span>
                <span className='logos'><img src={mongodbLogo} alt="mongodb logo"/><span>MongoDB</span></span>  
              </div>
              <span className='dev'>Tools & Workflow</span>
              <div className="tools">
                <span className="logos"><img src={gitLogo} alt="Git logo"/><span>Git</span></span>
                <span className="logos"><img src={gitHubLogo} alt="GitHub logo"/><span>GitHub</span></span>
                <span className="logos"><img src={vscodeLogo} alt="VS Code logo"/><span>VS Code</span></span>
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
    </div>
  )
}

export default About