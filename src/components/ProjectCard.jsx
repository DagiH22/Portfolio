import React from 'react'
import '../styles/ProjectCard.css'
// Portfolio\src\assets\images\dh3.svg

function ProjectCard() {
  return (
    <div className='projectCard'>
        <div className='projectImg'>
            <img src="../src/assets/images/dh3.svg" alt="project image" className='projectImage'/>  
        </div>

        <div className='projectSide'>
            <div className='projectTexts'>
                <p className='projectTitle'>lorem</p>
                <p className='projectDescription'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente doloremque natus possimus aut perferendis minima debitis dicta quaerat, non quibusdam architecto placeat! Sed quisquam labore illum velit? Eum, voluptatum a.</p>
            </div>

            <div className='projectLinks'>
                <a href="#" className='liveLink roundLink'><img src="../src/assets/images/external-link.svg" alt="external Link" className='externalLinkImage'/>  View Live</a>
                <a href="#" className='sourceCode roundLink'><span className='sCode'>&lt;/&gt;</span> Source Code</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard