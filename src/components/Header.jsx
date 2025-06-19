import React from 'react'
import '../styles/Header.css'
import '../styles/global.css'

const Header = () => {
  return (
    <header>
        <div className='logo'>
            <a href="#home"><img src="../assets/images/dh3.svg" alt="dh logo" /></a>
        </div>
        <nav className='navigation'>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  )
}

export default Header