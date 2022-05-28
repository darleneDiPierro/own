import React from 'react';

import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <h1>LaBuena</h1>
      </div>
      <ul>
        <li><a>Home</a></li>
        <li><a>About</a></li>
        <li><a>Menu</a></li>
        <li><a>Contact</a></li>
        <li><a>Location</a></li>
      </ul>
      <div>
        <a>Sign In / Sign Up</a>
        <a></a>
      </div>
    </div>
  )
}

export default Navbar;
