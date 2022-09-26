import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './Header.css';

import m1 from '../../assets/m1.png'

const Header = () => {
  return (
    <header className="container header__container">
      <h5>Hello, i'm</h5>
      <h1>Dmytro Mostovyi</h1>
      <h5 className="text-light">Front-end Developer</h5>

      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={m1} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </header>
  );
};

export default Header;