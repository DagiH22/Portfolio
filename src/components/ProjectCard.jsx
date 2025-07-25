import React from 'react'
import '../styles/ProjectCard.css'
import externalLinkImg from "../assets/images/external-link.svg"

function ProjectCard({data}) {
    const alt = `project ${data.id} image`
    const id = String(data.id)
    
  return (
    <div className='projectCard' id={id}>
        <div className='projectImg'>
            <img src={data.image} alt={alt} className='projectImage'/>  
        </div>

        <div className='projectSide'>
            <div className='projectTexts'>
                <p className='projectTitle'>{data.title}</p>
                <p className='projectDescription'>{data.description}</p>
            </div>

            <div className='projectLinks'>
                <a href={data.demoLink} className='liveLink roundLink' target='_blank'><img src={externalLinkImg} alt="external Link" className='externalLinkImage' />  View Live</a>
                <a href={data.codeLink} className='sourceCode roundLink' target='_blank'><span className='sCode'>&lt;/&gt;</span> Source Code</a>
            </div>
        </div>
    </div>
  )
}

export default ProjectCard