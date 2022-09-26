import React from 'react';
import './Contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { FaTelegramPlane } from 'react-icons/fa'
import { SiViber } from 'react-icons/si'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // parametres pasted ftom https://dashboard.emailjs.com/admin
    emailjs.sendForm('service_c5cw241', 'template_fupuxw5', form.current, 'XrlZ7Wa4NPW2Ilq7f')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
            <FaTelegramPlane className="contact__option-icon" />
            <h4>Telegram</h4>
            <h5>+380 67 964 40 80</h5>
            <a 
              href="https://t.me/Dmytrit"
              target="_blank" 
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>mostovyi.d@gmail.com</h5>
            <a 
              href="mailto:mostovyi.d@gmail.com" 
              target="_blank" 
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          
          <article className="contact__option">
            <SiViber className="contact__option-icon" />
            <h4>Viber</h4>
            <h5>+380 67 964 40 80</h5>
            <a 
              href="viber://chat?number=+380679644080" 
              target="_blank" 
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>

        <form
          className="contact__form"
          ref={form} 
          onSubmit={sendEmail}
        >
          <input 
            type="text" 
            name="name" 
            placeholder="Yuor Full Name" 
            required 
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
          />
          <textarea 
            name="message" 
            rows="7" 
            placeholder="Your Message" 
            required></textarea>
            
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;