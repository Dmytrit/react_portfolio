import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './Header.css';

import m1_1_webp from '../../assets/m1_1_web.webp'

const Header = () => {
  return (
    <header className="container header__container" id="home">
      <h5>Hello, i'm</h5>
      <h1>Dmytro Mostovyi</h1>
      <h5 className="text-light">Front-end Developer</h5>

      <CTA />
      <HeaderSocials />

      <div className="me">
        <img src={m1_1_webp} alt="me" />
      </div>

      <a href="#contact" className="scroll__down">Scroll Down</a>
    </header>
  );
};

export default Header;