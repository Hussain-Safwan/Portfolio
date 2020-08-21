import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div class="nav">
        <div class="space"></div>
        <div class="container">
          <div class="tab"><Link to="/">Home</Link></div>
          <div class="tab"><Link to="/about">About</Link></div>
          <div class="tab"><Link to="/skills">Skills</Link></div>
          <div class="tab"><Link to="/projects">Projects</Link></div>
          <div class="tab"><Link to="/contact">Contact</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
