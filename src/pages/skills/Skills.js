import React from 'react';
import './Skills.css';
import { BsPatchCheckFill } from 'react-icons/bs'

const Skills = () => {
  return (
    <section id='skills'>
       <h2>My Skills</h2>
       <div className="container skills__section">
        <div className="frontend__skills">
          <h3>Frontend Development</h3>
          <div className="frontend__content">
             <article className='skills__details'>
               <BsPatchCheckFill className='tick'/>
               <div>
               <h4>HTML</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>CSS</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>Javascript</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>Tailwind CSS</h4>
               <small className='text-light'>Intermediate</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>React</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
              <article className='skills__details'>
               <BsPatchCheckFill className='tick'/>
               <div>
               <h4>Redux</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
          </div>  
        </div>
        <div className="backend__skills">
           <h3>Backend Development</h3>
           <div className="backend__content">
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>Node JS</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>Express</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>MongoDB</h4>
               <small className='text-light'>Experienced</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick' />
               <div>
               <h4>Next JS</h4>
               <small className='text-light'>Intermediate</small>
               </div>
             </article>
             <article className='skills__details'>
               <BsPatchCheckFill className='tick'/>
               <div>
               <h4>PostgreSQL</h4>
               <small className='text-light'>Intermediate</small>
               </div>
             </article>
           </div>
        </div>
       </div>
    </section>
  )
}

export default Skills