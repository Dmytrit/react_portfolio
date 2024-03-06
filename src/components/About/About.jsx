import React from 'react';
import './About.css';
import { FaAward } from 'react-icons/fa';
import { VscFolderLibrary } from 'react-icons/vsc';

import m2_2_webp from '../../assets/m2_2_web.webp';

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 Year Working</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p className="about__article">
            Skillful, well-motivated and hardworking
            Frontend developer with
            intermediate English looking for new
            opportunities in Frontend
            Development.
          </p>
          <p className="about__article">
            I have strong theoretical knowledge
            and good practical skills in creating
            responsive web pages (HTML5, CSS3,
            SCSS). Well familiar with using
            Javascript, Typescript and React for
            best performance.
          </p>
          <p className="about__article">
            I enjoy to learn and explore new
            things, improve and get better. Ready
            to apply my passion for coding to a
            talented engineering team to develop
            quality solutions.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>

        <div className="about__me">
          <div className="about__me-image">
            <img src={m2_2_webp} alt="About me" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
