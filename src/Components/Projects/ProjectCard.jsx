import React from 'react'
import './ProjectCard.css'
import projectImage from '../Asset/ratio1-1.jpg'

const ProjectCard = ({ title, main }) => {
    return (
        <div className='project-card'>
            <div className="project_container">
                <img src={projectImage} alt="" />
                <h3>{title}</h3>
                <p>{main}</p>
                <div className="buttons">
                    <button className='btn1'>Demo</button>
                    <button className='btn2'>Source code</button>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
