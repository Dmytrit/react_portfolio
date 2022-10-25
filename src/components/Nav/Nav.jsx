import React, { useState } from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { BiLike } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a 
        href="#home"
        onClick={() => setActiveNav('#')}
        className={ activeNav === '#' ? 'active' : '' }
      >
        <AiOutlineHome />
      </a>
      <a 
        href="#about"
        onClick={() => setActiveNav('#about')} 
        className={ activeNav === '#about' ? 'active' : '' }
      >
        <AiOutlineUser />
      </a>
      <a 
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={ activeNav === '#experience' ? 'active' : '' }
      >
        <BiBook />
      </a>
      <a 
        href="#portfolio"
        onClick={() => setActiveNav('#portfolio')}
        className={ activeNav === '#portfolio' ? 'active' : ''}
      >
        <MdOutlineWorkOutline />
      </a>
      <a 
        href="#testimonials"
        onClick={() => setActiveNav('#testimonials')}
        className={ activeNav === '#testimonials' ? 'active' : ''}
      >
        <BiLike />
      </a>
      <a 
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={ activeNav === '#contact' ? 'active' : ''}
      >
        <AiOutlinePhone />
      </a>
    </nav>
  );
};

export default Nav;