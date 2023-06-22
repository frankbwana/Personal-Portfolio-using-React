import React, { useState } from 'react';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click)
  return (
    <div className='navbar__page'>
      <div className="logo">
      <h1><a href="#home">Bwana</a></h1>
      </div>
      <div className="navbar__links">
      <p><a href='#home'>Home</a></p>
      <p><a href='#about'>About</a></p>
      <p><a href='#skills'>Skills</a></p>
      <p><a href='#projects'>Projects</a></p>
      <p><a href='#contacts'>Contacts</a></p>
      </div>
      <div className="hamburger__menu" onClick={handleClick}>
        {click ? (<FaTimes size={30} />) : <FaBars size={30} /> } 
      </div>
    </div>
  )
}

export default Navbar