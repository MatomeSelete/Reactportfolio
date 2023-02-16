import React from 'react';
import { Link } from "react-router-dom";

import '../navBar/navstyle.css'


function Navigation() {
  return ( 

    <nav class="navibar">
      <div className='navitems'>
        <p className='navP'>
          <Link to="/">Home</Link>
        </p>
        <p className='navP'>
          <Link to="/portfolio.js">Portfolio </Link>
        </p>
        <p className='navP'>
          <Link to="/contacts.js">Contact</Link>
        </p>
        <p className='navP'>
          <Link to="/about.js">About</Link>
        </p>
        <p className='navP'>
          <Link to="/resume.js">Resume</Link>
        </p>
      </div>

    </nav>


  )
};


export default Navigation;

