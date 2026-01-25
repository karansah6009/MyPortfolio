import React, { useState } from 'react'
import './Contact.css'
import contactImg from '../Asset/portimg.png';

const Contact = () => {
  const [name, setName] = useState();
  return (
    <div id='contact' className='contact'>
      <div className="contact_container">
        <div className="left">
          <img src={contactImg} alt="" />
        </div>
        <div className="right">
          <h1>Contact Me</h1>
          <div className="contact_input">
            <form>
              <input type="text" placeholder='Your Name' 
              value = {name} 
              onChange={(e) => setName(e.target.value)} />
              <input type="text" placeholder='Your Email' />
              <textarea rows="4" placeholder='Your Message'></textarea>
              <button type='submit'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
