import React from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <div className='project'>
      <h1>Projects</h1>
      <div className="projects-container">
        <ProjectCard title="Project 1" main="Description of project 1"/>
        <ProjectCard title="Project 2" main="Description of project 1"/>
        <ProjectCard title="Project 3" main="Description of project 1"/>
      </div>
    </div>
  )
}

export default Projects
