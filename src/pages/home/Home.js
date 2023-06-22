import React from 'react';
import './Home.css';
import CTA from './CTA';
import Me from '../../assets/Me.jpg'


const Home = () => {
  return (
    <header>
     <div className="container home__page">
      <h5>Hi, my name is</h5>
      <h1>Franklin Bwana</h1>
      <h5>MERN Stack Developer</h5>
      <CTA />
      <div className="my__image">
        <img src={Me} alt="me" />
      </div>
     </div>
    </header>
  )
}

export default Home