import React from 'react'
import projects from '../data/webProjects.js'
import ProjectCard from '../components/ProjectCard'
import '../styles/Project.css'

function Projects() {
    
  return (
    <div id='projects'>
        <h2>Projects</h2> <hr />
        { projects.map(project => {
               return <ProjectCard key={project.id} data= {project} />
            })}
    </div>
  )
}


export default Projects