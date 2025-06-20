import React from 'react'
import '../styles/Home.css'

function Home() {
  return (
    <div id='home'>
        <div className='homeContainer'>
            <p className='greeting'><span className='hey'>Hey, I'm</span> <br/><span className='dagi'>Dagmawi</span><br/><span className='web'>Web Developer {/*| Network Engineer*/}</span></p>
            <p className='shortDescription'>I make clean, modern web experiences using React and a growing toolkit of web technologies.
                                            While my main strength is in the frontend, 
                                            I'm actively expanding into backend development to build more complete and dynamic applications.
                                            <br/>
                                            <span className='always'>Always learning. Always building.</span></p>
        </div>
        <button className='downlaodCv'>Download CV</button>
    </div>
  )
}

export default Home