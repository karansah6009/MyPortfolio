import React, { useState } from 'react'
import './Projects.css'
import ProjectCard from './ProjectCard';

// ── Add or edit your projects here ──
const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    main: 'A full-stack shopping platform with product listing, cart, and checkout flow built with React and Node.js.',
    tags: ['React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    demo: 'https://demo-link.com',
    source: 'https://github.com',
  },
  {
    id: 2,
    title: 'Admin Dashboard',
    main: 'Responsive analytics dashboard with charts, data tables, and dark/light theme toggle.',
    tags: ['React', 'Chart.js', 'Tailwind'],
    category: 'frontend',
    demo: 'https://demo-link.com',
    source: 'https://github.com',
  },
  {
    id: 3,
    title: 'Portfolio Website',
    main: 'Personal portfolio with animated hero, project showcase, about section and contact form.',
    tags: ['React', 'CSS'],
    category: 'frontend',
    demo: 'https://demo-link.com',
    source: 'https://github.com',
  },
  {
    id: 4,
    title: 'Task Manager App',
    main: 'Drag-and-drop task board with priority filters and local storage persistence.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    category: 'frontend',
    demo: 'https://demo-link.com',
    source: 'https://github.com',
  },
  {
    id: 5,
    title: 'REST API Backend',
    main: 'Secure REST API with JWT authentication, CRUD operations, and MySQL database integration.',
    tags: ['Node.js', 'Express', 'MySQL'],
    category: 'backend',
    demo: 'https://demo-link.com',
    source: 'https://github.com',
  },
  {
    id: 6,
    title: 'Weather App',
    main: 'Live weather data with location detection, animated icons, and 5-day forecast.',
    tags: ['React', 'API', 'CSS'],
    category: 'frontend',
    demo: 'https://demo-link.com',
    source: 'https://github.com',
  },
];

// ── Filter tabs ──
const filters = ['all', 'frontend', 'fullstack', 'backend'];

const Projects = () => {
  const [active, setActive] = useState('all');

  // Show all projects or only matching category
  const filtered = active === 'all'
    ? projects
    : projects.filter(p => p.category === active);

  return (
    <div id='projects' className='project'>

      {/* ── Section Header ── */}
      <div className="project_header">
        <p className="project_eyebrow">What I've built</p>
        <h1 className="project_title">My <span>Projects</span></h1>
        <p className="project_subtitle">
          A collection of things I've designed and built — from full-stack apps to polished UIs.
        </p>
      </div>

      {/* ── Filter Tabs ── */}
      <div className="filter_tabs">
        {filters.map(f => (
          <button
            key={f}
            className={`filter_btn ${active === f ? 'filter_btn--active' : ''}`}
            onClick={() => setActive(f)}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* ── Project Cards Grid ── */}
      <div className="projects-container">
        {filtered.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </div>
  );
};

export default Projects;