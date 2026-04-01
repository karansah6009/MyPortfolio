import React from 'react'
import './About.css'
import aboutImg from '../Asset/aboutimg.png';

const About = () => {
  return (
    <div id='about' className='about'>
      <div className="about_container">
        <div className="about_left">
          <h1>About</h1>
          <img id="about-img" src={aboutImg} alt="" />
        </div>
        <div className="about_right">
          <h3><span>→</span>Frontend Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <h3><span>→</span>Database Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
          <h3><span>→</span>Backend Developer</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.</p>
        </div>
      </div>
    </div>
  )
}

export default About
