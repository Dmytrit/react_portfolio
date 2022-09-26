import React from 'react';
import { BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';
import { GiDjinn } from 'react-icons/gi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a 
        href="https://www.linkedin.com/in/dmytro-mostovyi-43726867/"
        target="_blank"
        rel='noreferrer'
      >
        <BsLinkedin/>
      </a>
      <a 
        href="https://github.com/Dmytrit"
        target="_blank"
        rel='noreferrer'
      >
        <FaGithub/>
      </a>
      <a 
        href="https://djinni.co/q/9162f85026/"
        target="_blank"
        rel='noreferrer'
      >
        <GiDjinn/>
      </a>
    </div>
  );
};

export default HeaderSocials;