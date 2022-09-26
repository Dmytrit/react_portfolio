import React from 'react';

const CTA = () => {
  return (
    <div className="cta">
      <a 
        href="https://drive.google.com/drive/folders/1SFEPDvVHyp6xqXmCkyTtcnwpHQBCSKdb"
        target="_blank"
        rel="noreferrer"
        className='btn'
      >
        Download CV
      </a>
      
      <a href="#contact" className="btn btn-primary">Let's Talk</a>
    </div>
  );
};

export default CTA;