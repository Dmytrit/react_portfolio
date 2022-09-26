import React from 'react';
import './Portfolio.css';

import portfolioData from '../../api/portfolioData.json';

const Portfolio = () => {
  const dataFromPortfolio = portfolioData;
  console.log(dataFromPortfolio);

  return (
    <section id="portfolio" className="portfolio__section">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          dataFromPortfolio.map(data => {
            return (
              <article className="portfolio__item" key={data.id}>
                <div className="portfolio__item-image">
                  <img src={data.image} alt={data.title} />
                </div>
                <h3>{data.title}</h3>
                <small>{data.technologies}</small>
                <div className="portfolio__item-cta">
                  <a 
                    href={data.githubUrl} 
                    className="btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                  <a 
                    href={data.demo} 
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  );
};

export default Portfolio;