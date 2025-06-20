import React from 'react'
import '../styles/Contact.css'
import tgImg from '../assets/images/telegram.svg'
import emailImg from "../assets/images/email.svg"
import githubImg from '../assets/images/skills/github.svg'
import linkedinImg from '../assets/images/linkedin.svg'

function Contact() {
  return (
    <div id='contact'>
        <h2>Contact Me</h2> <hr />
        <p>I’d love to connect — feel free to reach out for projects, opportunities, or questions</p>
        <ul>
            <li><a href="mailto:dagmawiheywot96@gmail.com" ><img src={emailImg} alt="email icon" /> Email </a></li>
            <li><a href="https://github.com/DagiH22" target='_blank'><img src={githubImg} alt="github icon" /> Github </a></li>
            <li><a href="linkedin.com/in/dagmawi-heywot-96j" target='_blank'><img src={linkedinImg} alt="linkedin icon" /> Linkedin</a></li>
            <li><a href="https://www.t.me/dagiheb" target='_blank'><img src={tgImg} alt="Telegram icon" /> Telegram </a></li>
        </ul>
    </div>
  )
}

export default Contact