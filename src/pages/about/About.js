import React from 'react';
import './About.css';
import Comp from '../../assets/About.jpg';

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__img">
            <img src={Comp} alt="img" />
          </div>
          </div>
        <div className="about__content">
          <div className="about__cards">
           <h3>Summary</h3>
          </div>
          <p className='summary'>Highly skilled MERN Stack Developer with two years of experience in designing and developing web applications. Proficient in JavaScript, React.js, Node.js, Express.js, and MongoDB. Strong problem-solving abilities and a passion for creating efficient and scalable solutions. Dedicated to staying up-to-date with the latest technologies and trends in the web development industry.</p>
           <a href="#contacts" className='btn'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About