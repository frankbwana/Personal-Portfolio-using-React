import React from 'react'
import './Bottom.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { BsLinkedin, BsGithub } from 'react-icons/bs'
const Bottom = () => {
  return (
    <footer>
      <ul className='footer__links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contacts">Contacts</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://facebook.com"><FaFacebookSquare /></a>
        <a href="https://www.linkedin.com/in/franklin-bwana-501426b4/"><BsLinkedin /></a>
        <a href="https://github.com/frankbwana"><BsGithub /></a>
      </div>
      <div className="copyright">
        <small> &copy; Bwana Portfolio. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Bottom