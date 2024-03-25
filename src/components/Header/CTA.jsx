import React from 'react';
import CV from '../../assets/CV_Mostovyi_Dmytro_Frontend_remote.pdf';
// import CV from '../../assets/avatar1.jpg';

const CTA = () => {
  return (
    <div className="cta">
      <a 
        href={CV}
        download
        className='btn'
      >
        Download CV
      </a>
      
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;