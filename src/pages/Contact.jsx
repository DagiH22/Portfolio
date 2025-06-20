import React from 'react'
import '../styles/Contact.css'
import tgImg from '../assets/images/telegram.svg'
import emailImg from "../assets/images/email.svg"
import githubImg from '../assets/images/github.svg'
import linkedinImg from '../assets/images/linkedin.svg'

function Contact() {
  return (
    <div id='contact'>
        <h2>Contact Me</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, aspernatur enim, facere molestias voluptates aliquid molestiae odit sapiente excepturi mollitia laudantium quisquam explicabo at tenetur eaque. Officiis magnam quam voluptatum!</p>
        <ul>
            <li><a href="mailto:dagmawiheywot96@gmail.com"><img src={emailImg} alt="email icon" /> dagmawiheywot96@gmail.com </a></li>
            <li><a href="https://github.com/DagiH22"><img src={githubImg} alt="github icon" /> Github </a></li>
            <li><a href="linkedin.com/in/dagmawi-heywot-96j"><img src={linkedinImg} alt="linkedin icon" /> Linkedin</a></li>
            <li><a href="https://www.t.me/dagiheb"><img src={tgImg} alt="Telegram icon" /> Telegram </a></li>
        </ul>
    </div>
  )
}

export default Contact