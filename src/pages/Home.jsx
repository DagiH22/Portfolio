import React from 'react'
import { useEffect, useState } from "react";
import '../styles/Home.css'
import resume from "../../assets/cv/Dagmawi-Heywot-CV.pdf"

function Home() {
  const text = "Always learning. Always building.";
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
            <p className='greeting'><span className='hey'>Hey, I'm</span> <br/><span className='dagi'>Dagmawi</span><br/><span className='web'>Web Developer {/*| Network Engineer*/}</span></p>
            <p className='shortDescription'>I make clean, modern web experiences using React and a growing toolkit of web technologies.
                                            While my main strength is in the frontend, 
                                            I'm actively expanding into backend development to build more complete and dynamic applications.</p>
                                            <br/>
                                            <p className='always'>{displayedText}<span className="cursor">|</span></p>
        </div>
        <a href={resume} download='Dagmawi-Heywot-Resume.pdf' ><button className='downlaodCv'>Download CV</button></a>
    </div>
  )
}

export default Home