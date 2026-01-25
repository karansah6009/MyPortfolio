import React, { useState } from 'react'
import './Navbar.css'
import cv from '../Asset/karan_CV.pdf'
import { Link } from 'react-scroll'

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  return (
      <div className='navbar'>
        <div className="navbar-logo">
          <h1>Port<span>folio</span></h1>
        </div>
        <div className="navbar-opt">
          <div className='navbar-li'>
          <Link 
            to='home' 
            smooth={true} 
            duration={300} 
            offset={-0}
            spy={true}
            activeClass='active'
            onClick={() => setMenu("home")}
          >
            Home {menu === "home" ? <hr /> : null}
          </Link>
          <Link 
            to='about' 
            smooth={true} 
            duration={300} 
            offset={-0}
            spy={true}
            activeClass='active'
            onClick={() => setMenu("about")}
          >
            About {menu === "about" ? <hr /> : null}
          </Link>
          <Link 
            to='contact' 
            smooth={true} 
            duration={300} 
            offset={-0}
            spy={true}
            activeClass='active'
            onClick={() => setMenu("contact")}
          >
            Contact {menu === "contact" ? <hr /> : null}
          </Link>
          <Link 
            to='projects' 
            smooth={true} 
            duration={300} 
            offset={-0}
            spy={true}
            activeClass='active'
            onClick={() => setMenu("projects")}
          >
            Projects {menu === "projects" ? <hr /> : null}
          </Link>
        </div>
        </div>
        <div className="navbar-cv">
          <button onClick={() => { window.open(cv, '_blank') }}>Download CV</button>
        </div>
      </div >
    )
 }

export default Navbar
