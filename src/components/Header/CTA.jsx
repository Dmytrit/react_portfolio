import React from 'react';
import CV from '../../assets/CV_Mostovyi_Dmytro_Frontend_remote_13.02.2024';

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