import React from 'react';
import './Footer.css';

import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { GiDjinn } from 'react-icons/gi';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="/#" className="footer__logo">DMYTRO</a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a 
          href="https://www.linkedin.com/in/dmytro-mostovyi-43726867/" 
          target="_blank" 
          rel="noreferrer"
        >
          <BsLinkedin className="footer__social-links" />
        </a>
        <a 
          href="https://djinni.co/q/9162f85026/" 
          target="_blank" 
          rel="noreferrer"
        >
          <GiDjinn className="footer__social-links" />
        </a>
        <a 
          href="https://github.com/Dmytrit" 
          target="_blank" 
          rel="noreferrer"
        >
          <FaGithub className="footer__social-links" />
        </a>
      </div>

      <div className="footer__copyright">
          <small>
            &copy; All rights reserved. 2022
          </small>
        </div>
    </footer>
  )
}

export default Footer;