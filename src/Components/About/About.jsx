import React, { useState } from 'react'
import './About.css'
import aboutImg from '../Asset/aboutimg.png';

const roles = [
  {
    id: 'front',
    title: 'Frontend Developer',
    desc: 'I build pixel-perfect, responsive UIs using React, HTML, CSS, and modern JavaScript. I focus on performance, accessibility, and smooth interactions that make products feel alive.',
  },
  {
    id: 'db',
    title: 'Database Developer',
    desc: 'I design and query relational databases using MySQL and PostgreSQL. I write clean, efficient queries and structure data models that scale as products grow.',
  },
  {
    id: 'back',
    title: 'Backend Developer',
    desc: 'I build RESTful APIs and server-side logic with Node.js and Express. I connect frontends to databases and third-party services reliably and securely.',
  },
];

// ── Tools list — add or remove tools here ──
const tools = [
  { name: 'React',       icon: '⚛' },
  { name: 'JavaScript',  icon: '📜' },
  { name: 'HTML & CSS',  icon: '🎨' },
  { name: 'MySQL',       icon: '🗄' },
  { name: 'Git',         icon: '🔀' },
  { name: 'GitHub',      icon: '🐙' },
  { name: 'VS Code',     icon: '💻' },
];

const About = () => {
  const [active, setActive] = useState(0);

  return (
    <div id='about' className='about'>
      <div className="about_container">

        {/* ── Left Side ── */}
        <div className="about_left">
          <h1>About <span>Me</span></h1>
          <img id="about-img" src={aboutImg} alt="Karan" />
        </div>

        {/* ── Right Side ── */}
        <div className="about_right">

          {/* Role Cards */}
          {roles.map((role, i) => (
            <div
              key={role.id}
              className={`role-item ${active === i ? 'role-item--active' : ''}`}
              onClick={() => setActive(i)}
            >
              <h3>
                <span className="role-arrow">→</span>
                {role.title}
              </h3>
              <p className="role-desc">{role.desc}</p>
            </div>
          ))}

          {/* ── Tools Section ── */}
          <div className="tools-section">
            <h4 className="tools-title">Tools &amp; Technologies</h4>
            <div className="tools-grid">
              {tools.map((tool, i) => (
                <div key={i} className="tool-card">
                  <span className="tool-icon">{tool.icon}</span>
                  <span className="tool-name">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About