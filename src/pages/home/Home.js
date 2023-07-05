import React from 'react';
import './Home.css';
import CTA from './CTA';
import Me from '../../assets/Me.jpg'
import Typewriter from "typewriter-effect"

const Home = () => {
  return (
    <header>
     <div className="container home__page">
      <h5>Hi, my name is</h5>
      <h1>Franklin Bwana</h1>
      <h5>MERN Stack Developer</h5>
      <Typewriter
 
 onInit={(typewriter) => {
     typewriter
         .typeString("Franklin Bwana")
         .pauseFor(1000)
         .deleteAll()
         .typeString("Welcomes you!")
         .start();
 }}
/>
      <CTA />
      <div className="my__image">
        <img src={Me} alt="me" />
      </div>
     </div>
    </header>
  )
}

export default Home