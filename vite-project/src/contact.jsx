import React, { useEffect, useState } from "react";
import "./contact.css";


// zfm24 = created Contact information page by creating series of divider tags to separate team member information
const Contact = () => {
    const [scrollCount, setScrollCount] = useState (0);
    const [nextTarget, setNextTarget] = useState('ContactHeading1'); 
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        // Trigger the fade-in effect when the component mounts
        setOpacity(1);
    }, []);
{/* From ChatGPT, 5/19/24 */}
{/* Modified by Weihao Li, 5/19/24 */}
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });
        const elements = document.querySelectorAll('.contact-heading');
        elements.forEach(el => observer.observe(el));

        const toggleBackground = () => {
            const contactElement = document.querySelector('.contact');
            if (window.scrollY > window.innerHeight * 0.5) {
                contactElement.classList.add('dark-mode');
            } else {
                contactElement.classList.remove('dark-mode');
            }
        };
        
        window.addEventListener('scroll', toggleBackground);

    return () => {
        elements.forEach(el => observer.unobserve(el));
        window.removeEventListener('scroll', toggleBackground);
    };
}, []);

const handleScroll = (targetId) => {
    console.log(`Attempting to scoll to ${targetId}`);
    if (targetId) {
    const element = document.getElementById(targetId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth'});
        setScrollCount(scrollCount + 1);
        setNextTarget(nextTarget === 'ContactHeading1' ? 'ContactHeading2' : 
                      nextTarget === 'ContactHeading2' ? 'ContactHeading3' :
                      nextTarget === 'ContactHeading3' ? 'ContactHeading4' : null);
        console.log(`Scrolled to ${targetId}`);
    } else {
        console.log(`Element with ID ${targetId} not found`);
    }
}};

return (
        <div className="contact" style={{ opacity: opacity }}>
            <br></br>
            <h1 className="left-text">Contact Us</h1>
      
            <span className="feedback-message"></span>
            <div id="greeting" className="contact-heading">
            <h1>Please contact any member of our team if you have any questions or to provide feedback!</h1>
            </div> 
        <br></br>
        <br></br>
        <div id="ContactHeading1" className="contact-heading">
            <br></br>
        <div className="avatar-container">
            <img src={'src/Images/Zarah.png'} style={{ width: '300px', height: '300px' }} />
            <button className="scroll-button" onClick={() => handleScroll('ContactHeading2')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
        {/* zfm24= Edited descriptions for each member and their contributions */}
            <h1>Zarah Malik - Product Owner</h1>
            <h1>Email: zfm24@drexel.edu</h1>
            <h1><i>Data Science Student at Drexel's College of Computing and Informatics</i></h1>
            <h1><br></br>Main Contributions:</h1>
            <ul>
                <li>Envisioning website's visual representation</li> 
                <li>Creating pinpoints for safe housing options on map feature</li>
                <li>Finding reference links for housing options</li>
            </ul>
        </div>

        <div id="ContactHeading2" className="contact-heading">
            <br></br>
        <div className="avatar-container">
            <img src={'src/Images/Weihao.png'} style={{ width: '300px', height: '300px' }} />
            <button className="scroll-button" onClick={() => handleScroll('ContactHeading3')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
            <h1>Weihao Li - Website Function Developer</h1>
            <h1>Email: wl484@drexel.edu</h1>
            <h1><i>Cyber Security Student at Drexel's College of Computing and Informatics</i></h1>
            <h1><br></br>Main Contributions: </h1>
            <ul>
                <li>Creating map feature showing history of crime data</li>
                <li> Spreading data onto multiple pages</li>
                <li>Showing user's location on map feature</li>
            </ul>
                
            <div>
            <br></br>
            </div>
        </div>

        <div id="ContactHeading3" className="contact-heading">
            <br></br>
        <div className="avatar-container">
            <img src={'src/Images/Aahil.png'} style={{ width: '300px', height: '300px' }} />
            <button className="scroll-button" onClick={() => handleScroll('ContactHeading4')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
            <h1>Aahil Afraz - Website Style Designer</h1>
            <h1>Email: aa4763@drexel.edu</h1>
            <h1><i>Software Engineer Student at Drexel's College of Computing and Informatics</i></h1>
            <h1><br></br>Main Contributions: </h1>
            <ul>
                <li>Styling website background theme to be visually pleasing</li>
                <li>Creating icons for pinpoints on map feature </li>
                <li>Creating animations for user interactivity </li>

            </ul>
            <div>
            <br></br>
            </div>
        </div>
        <div id="ContactHeading4" className="contact-heading">
            <br></br>
        <div className="avatar-container">
            <img src={'src/Images/Daniyal.png'} style={{ width: '300px', height: '300px' }} />
            <button className="scroll-button" onClick={() => handleScroll('ContactHeading1')}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            </button>
        </div>
            <h1>Daniyal Amjed - HTML Designer</h1>
            <h1>Email: da894@drexel.edu</h1>
            <h1><i>Software Engineer Student at Drexel's College of Computing and Informatics</i></h1>
            <h1><br></br>Main Contributions: </h1>
            <ul>
                <li>Creating logo for website representation</li>
                <li>Adding rating for each housing option</li>
                <li>Finding safe housing options to be displayed on map feature</li>
            </ul>
            </div>   
        </div>   
 );
};

export default Contact;