import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div id='projects' className='project'>
      <h1>Projects</h1>
      <div className="projects-container">
        <ProjectCard title="E-commerce" main="Website is being created with the help of React and Node.js"/>
        <ProjectCard title="Project 2" main="Description of project 2"/>
        <ProjectCard title="Project 3" main="Description of project 3"/>
      </div>
    </div>
  )
}

export default Projects
