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
  const sectionStyle = {
    backgroundImage: `url(${portBck})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  }
  return (
    <div className="home-container" style={sectionStyle}>
      <div class="hero">
        <div class="hero-info">
          <h1>Hi,I'm <span id="karan">Karan</span></h1>
          <h2>I'm a Developer</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur in earum iusto nesciunt laboriosam, molestiae at alias officia, repellendus qui cumque mollitia voluptate impedit! Blanditiis hic dolore expedita sunt minima?</p>
          <div class="buttons">
            <button class="btn">Hire me</button>
            <br />
            <ul class="ul-icon">
              <li><a href=""><FontAwesomeIcon icon={faGithub} /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faLinkedin} /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
              <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
            </ul>
          </div>
        </div>
        <div class="hero-img">
          <img src={profile} alt="persons-img" />
        </div>
        </div>
        <div class="info-sec">
          <div class="info-card">
            <h1>2+</h1>
            <p>Years<br />Experience</p>
          </div>

          <div class="info-card">
            <h1>7+</h1>
            <p>Technical<br />Skills</p>
          </div>

          <div class="info-card">
            <h1>50+</h1>
            <p>Projects<br />Completed</p>
          </div>

          <div class="info-card">
            <h1>80+</h1>
            <p>Satisfied<br />Clients</p>
          </div>
        </div>
      
    </div>
  )
}

export default Home
