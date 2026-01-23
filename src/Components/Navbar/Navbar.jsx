import React, { useRef } from 'react'
import './Navbar.css'
import cv from '../Asset/karan_CV.pdf'

const Navbar = () => {
    return (
      <div className='navbar'>
        <div className="navbar-logo">
          <h1>Port<span>folio</span></h1>
        </div>
        <div className="navbar-opt">
          <ul className='navbar-li'>
            {/* <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none"}}to="/">Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:"none"}}to="/about">About</Link>{menu==="about"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:"none"}}to="/contact">Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("projects")}}><Link style={{textDecoration:"none"}} to="/projects">Projects</Link>{menu==="projects"?<hr/>:<></>}</li> */}
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Projects</li>
          </ul>
        </div>
        <div className="navbar-cv">
          <button onClick={() => { window.open(cv, '_blank') }}>Download CV</button>
        </div>
      </div>
    )
 }

export default Navbar
