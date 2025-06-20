import React from 'react'
import logo from "../assets/images/dh.svg"
import '../styles/Header.css'
import '../styles/global.css'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <a href="#home"><img src={logo} alt="dh logo" /></a>
        </div>
        <nav className='navigation'>
            <a href="#home" className='link'>Home</a>
            <a href="#about" className='link'>About</a>
            <a href="#projects" className='link'>Projects</a>
            <a href="#contact" className='link'>Contact</a>
        </nav>
    </header>
  )
}

export default Header