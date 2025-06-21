import React, { useState } from 'react'
import logo from "../assets/images/dh.svg"
import '../styles/Header.css'
import '../styles/global.css'

const Header = () => {
  const [navVisible, setNavVisible] = useState(false);

  const toggleMenu = () => {
    setNavVisible(!navVisible);
  };
  return (
    <header>
        <div className='logo'>
            <a href="#home"><img src={logo} alt="dh logo" /></a>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <nav className={`navigation ${navVisible ? 'show' : ''}`}>
            <a href="#home" className='link' onClick={() => setNavVisible(false)}>Home</a>
            <a href="#about" className='link' onClick={() => setNavVisible(false)}>About</a>
            <a href="#projects" className='link' onClick={() => setNavVisible(false)}>Projects</a>
            <a href="#contact" className='link' onClick={() => setNavVisible(false)}>Contact</a>
        </nav>
    </header>
  )
}

export default Header