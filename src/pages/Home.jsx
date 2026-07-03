import React from 'react'
import { useEffect, useState } from "react";
import '../styles/Home.css'
import resume from "../../assets/cv/Dagmawi-Heywot-Resume.pdf"

function Home() {
  const text = "Building ideas into reality.";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 80); 

      return () => clearTimeout(timeout);
    }
  }, [index, text]);

  return (
    <div id='home'>
        <div className='homeContainer'>
            <p className='greeting'><span className='hey'>Hey, I'm</span> <br/><span className='dagi'>Dagmawi</span><br/><span className='web'>Full-Stack Developer {/*| Network Engineer*/}</span></p>
            <p className='shortDescription'>I develop full-stack web applications that combine clean, responsive interfaces with robust backend systems. 
                                        With experience in React, TypeScript, Node.js, Express, and MongoDB, I enjoy building software that is scalable,
                                         maintainable, and designed to solve real-world problems. <br /></p>
                                            <br/>
                                            <p className='always'>{displayedText}<span className="cursor">|</span></p>
        </div>
        <a href={resume} download='Dagmawi-Heywot-Resume.pdf' ><button className='downlaodCv'>Download CV</button></a>
    </div>
  )
}

export default Home