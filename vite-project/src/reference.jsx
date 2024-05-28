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
            <a href="https://www.visitphilly.com/areas/philadelphia-neighborhoods" className="external-link">https://www.visitphilly.com/areas/philadelphia-neighborhoods</a>
            <br></br>
            <a href="https://drexel.edu/life-at-drexel/campus-safety" className="external-link">https://drexel.edu/life-at-drexel/campus-safety</a>
            <br></br>
            <a href="https://www.publicsafety.upenn.edu/safety-initiatives/pennguardian/" className="external-link">https://www.publicsafety.upenn.edu/safety-initiatives/pennguardian/</a>
            <br></br>
            <a href="https://safety.temple.edu/tualert/tusafe" className="external-link">https://safety.temple.edu/tualert/tusafe</a>
            <br></br>
            <a href="https://www.niche.com/places-to-live/n/rittenhouse-philadelphia-pa/#crime-safety" className="external-link">https://www.niche.com/places-to-live/n/rittenhouse-philadelphia-pa/#crime-safety</a>
            <br></br>
            <a href="https://www.movoto.com/guide/philadelphia-pa/fairmount-park-philadelphia-neighborhood" className="external-link">https://www.movoto.com/guide/philadelphia-pa/fairmount-park-philadelphia-neighborhood</a>
            <br></br>
            <a href="https://www.niche.com/places-to-live/n/queen-village-philadelphia-pa/" className="external-link">https://www.niche.com/places-to-live/n/queen-village-philadelphia-pa/</a>
            <br></br>
            <a href="https://www.movoto.com/guide/philadelphia-pa/chinatown-philadelphia-neighborhood/" className="external-link">https://www.movoto.com/guide/philadelphia-pa/chinatown-philadelphia-neighborhood/</a>
            <br></br>
            <a href="https://www.niche.com/places-to-live/n/old-city-philadelphia-pa/" className="external-link">https://www.niche.com/places-to-live/n/old-city-philadelphia-pa/</a>
            <br></br>
            <a href="https://www.veryapt.com/guides/neighborhood/6-philadelphia-old-city/" className="external-link">https://www.veryapt.com/guides/neighborhood/6-philadelphia-old-city/</a>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reference;
