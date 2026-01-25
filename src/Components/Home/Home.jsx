import React from 'react'
import './Home.css'
import portBck from '../Asset/port-bck.avif';
import profile from '../Asset/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  function handleClick() {
    alert("Karan Hired✅");
  }

  return (
    <div id='home' className="home-container">
      <div className="hero">
        <div className="hero-info">
          <h1>Hi,I'm <span id="karan">Karan</span></h1>
          <h2>I'm a Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in earum iusto nesciunt laboriosam, molestiae at alias officia, repellendus qui cumque mollitia voluptate impedit! Blanditiis hic dolore expedita sunt minima?</p>
          <div className="buttons1">
            <button className="btn" onClick={handleClick}>Hire me</button>
            <br />
            <ul className="ul-icon">
              <li><a href="https://github.com/karansah6009"><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href="https://www.linkedin.com/in/karan-kumar-sah-80400b332/"><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href="https://www.youtube.com/@KaranKumar-ly6vt"><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href="https://www.facebook.com/karan.sah.5055233"><FontAwesomeIcon icon={faFacebook} /></a></li>
            </ul>
          </div>
        </div>
        <div className="hero-img">
          <img src={profile} alt="persons-img" />
        </div>
        </div>
        <div className="info-sec">
          <div className="info-card"> 
            <h1>2+</h1>
            <p>Years<br />Experience</p>
          </div>

          <div className="info-card">
            <h1>7+</h1>
            <p>Technical<br />Skills</p>
          </div>

          <div className="info-card">
            <h1>50+</h1>
            <p>Projects<br />Completed</p>
          </div>

          <div className="info-card">
            <h1>80+</h1>
            <p>Satisfied<br />Clients</p>
          </div>
        </div>
      
    </div>
  )
}

export default Home
