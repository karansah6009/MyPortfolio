import React from 'react';
import './Home.css';
import profile from '../Asset/profile.jpg';
import profile1 from '../Asset/profile1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Home = () => {
  function handleClick() {
    alert('Karan Hired ✅');
  }

  return (
    <div id="home" className="home-container">
      <div className="hero">
        <div className="hero-info">
          <h1>
            Hi, I&apos;m <span id="karan">Karan</span>
          </h1>
          <h2>I&apos;m a Developer</h2>
          <p>
            Crafting fast, accessible, and visually sharp interfaces. I turn
            complex ideas into experiences that feel effortless — from
            pixel-perfect layouts to smooth interactions.
          </p>

          <div className="lang">
            <button className="react" onClick={handleClick}>React</button>
            <button className="js" onClick={handleClick}>JavaScript</button>
            <button className="css3" onClick={handleClick}>CSS</button>
            <button className="html" onClick={handleClick}>HTML</button>
          </div>

          <div className="buttons1">
            <button className="btn" onClick={handleClick}>Hire me</button>

            <ul className="ul-icon">
              <li>
                <a
                  href="https://github.com/karansah6009"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Karan's GitHub profile"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/karan-kumar-sah-80400b332/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Karan's LinkedIn profile"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@KaranKumar-ly6vt"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Karan's YouTube channel"
                >
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/karan.sah.5055233"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Karan's Facebook profile"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="hero-img">
          <img id="profile0" src={profile} alt="Karan portrait" />
          <img id="profile1" src={profile1} alt="Karan styled portrait" />
        </div>
      </div>

      <div className="info-sec">
        <div className="info-card">
          <h1>1+</h1>
          <p>Years<br />Experience</p>
        </div>

        <div className="info-card">
          <h1>4+</h1>
          <p>Technical<br />Skills</p>
        </div>

        <div className="info-card">
          <h1>20+</h1>
          <p>Projects<br />Completed</p>
        </div>

        <div className="info-card">
          <h1>40+</h1>
          <p>Satisfied<br />Clients</p>
        </div>
      </div>
    </div>
  );
};

export default Home;