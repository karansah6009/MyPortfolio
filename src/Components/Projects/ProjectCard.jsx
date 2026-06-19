import React, { useState } from 'react'
import './ProjectCard.css'
import projectImage from '../Asset/ratio1-1.jpg'

const ProjectCard = ({ project }) => {
  const { title, main, tags, demo, source } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`project-card ${hovered ? 'project-card--hovered' : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Project Image with overlay on hover ── */}
      <div className="card_image_wrap">
        <img src={projectImage} alt={title} className="card_image" />

        {/* Overlay with quick-action buttons appears on hover */}
        <div className="card_overlay">
          <a href={demo} target="_blank" rel="noreferrer" className="overlay_btn">
            🔗 Live Demo
          </a>
          <a href={source} target="_blank" rel="noreferrer" className="overlay_btn overlay_btn--outline">
            💻 Source Code
          </a>
        </div>
      </div>

      {/* ── Card Body ── */}
      <div className="card_body">

        {/* Tech tags row */}
        <div className="card_tags">
          {tags.map((tag, i) => (
            <span key={i} className="card_tag">{tag}</span>
          ))}
        </div>

        <h3 className="card_title">{title}</h3>
        <p className="card_desc">{main}</p>

        {/* ── Bottom Buttons ── */}
        <div className="card_buttons">
          <a href={demo} target="_blank" rel="noreferrer" className="btn_demo">
            Demo →
          </a>
          <a href={source} target="_blank" rel="noreferrer" className="btn_source">
            Source Code
          </a>
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;