import React from 'react'
import './Contacts.css';
import { GoMail } from 'react-icons/go';
import { FaWhatsapp } from 'react-icons/fa';
import { BsTelephoneForwardFill } from 'react-icons/bs';
const Contacts = () => {
  return (
    <section id='contacts'>
     <h2>Contact Me</h2>
     <div className="container contacts__section">
      <div className="contact__options">
        <article className='contact__option'>
        <GoMail className='contact__icon' />
        <h4>Email</h4>
        <h5>bwanafranklin@gmail.com</h5>
        <a href="mailto: bwanafranklin@gmail.com">Send a message</a>
        </article>
        <article className='contact__option'>
        <FaWhatsapp className='contact__icon' />
        <h4>WhatsApp</h4>
        <h5>+254-719-637-558</h5>
        <a href="https://api/whatsapp.com/send?phone+254719637558">Send a message</a>
        </article>
        <article className='contact__option'>
        <BsTelephoneForwardFill className='contact__icon'/>
        <h4>Phone</h4>
        <h5>+254-719-637-558</h5>
        <a href="https://api/whatsapp.com/send?phone+254719637558">Send a message</a>
        </article>
      </div>
      <form action="">
        <input type="text" placeholder='Enter Full Name' required/>
        <input type='email' placeholder='Enter Your Email' required/>
        <textarea name='message' rows={7} placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
     </div>
    </section>
  )
}

export default Contacts