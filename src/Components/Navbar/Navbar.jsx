import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu,setMenu] = React.useState("home");
  return (
    <div className='navbar'>
      <div className="navbar-logo">
        <h1>Portfolio</h1>
      </div>
      <div className="navbar-opt">
        <ul className='navbar-li'>
          <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration:"none"}}to="/">Home</Link>{menu==="home"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("about")}}><Link style={{textDecoration:"none"}}to="/about">About</Link>{menu==="about"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("contact")}}><Link style={{textDecoration:"none"}}to="/contact">Contact</Link>{menu==="contact"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("projects")}}><Link style={{textDecoration:"none"}} to="/projects">Projects</Link>{menu==="projects"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="navbar-cv">
        <button>Download CV</button>
      </div>
    </div>
  )
}

export default Navbar
