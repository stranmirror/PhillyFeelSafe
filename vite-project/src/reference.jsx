import React, { useEffect } from 'react';
import './reference.css';

const Reference = () => {
  useEffect(() => {
    const handleExternalLinkClick = (event) => {
      const confirmMessage =
        'You are about to leave this website. Are you sure you want to proceed?';

      if (!window.confirm(confirmMessage)) {
        event.preventDefault();
      } else {
        // Add a class to change the link color after it is clicked
        event.target.classList.add('visited-link');
      }
    };

    const externalLinks = document.querySelectorAll('.external-link');
    externalLinks.forEach((link) => {
      link.addEventListener('click', handleExternalLinkClick);
    });

    return () => {
      externalLinks.forEach((link) => {
        link.removeEventListener('click', handleExternalLinkClick);
      });
    };
  }, []);

  return (
    <div className="backgroundImage">
      <div>
        <h2>References for Crime Data: </h2>
        <div>
          <br></br>
          <div className="links">
            <a href="https://www.visitphilly.com/areas/philadelphia-neighborhoods" className="external-link">Visit Philly Neighborhoods</a>
            <br></br>
            <br></br>
            <a href="https://drexel.edu/life-at-drexel/campus-safety" className="external-link">View more about Drexel's campus safety</a>
            <br></br>
            <br></br>
            <a href="https://www.publicsafety.upenn.edu/safety-initiatives/pennguardian/" className="external-link">View more about University of Pennsylvania's campus safety</a>
            <br></br>
            <br></br>
            <a href="https://safety.temple.edu/tualert/tusafe" className="external-link">View more about Temple University's campus safety</a>
            <br></br>
            <br></br>
            <a href="https://www.niche.com/places-to-live/search/best-places-to-live/m/philadelphia-metro-area/" className="external-link">Explore more safe housing options through Niche</a>
            <br></br>
            <br></br>
            <a href="https://www.movoto.com/" className="external-link">Buy a home through Movoto</a>
            <br></br>
            <br></br>
            <a href="https://www.veryapt.com/" className="external-link">Look for safe housing options through VeryApt</a>
            <br></br>
            <br></br>
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
