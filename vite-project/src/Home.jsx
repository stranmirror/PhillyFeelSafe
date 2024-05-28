import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [scrollCount, setScrollCount] = useState(0);
    const [nextTarget, setNextTarget] = useState('HomeHeading2'); // Initialize to first target

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

        const elements = document.querySelectorAll('.home-heading');
        elements.forEach(el => observer.observe(el));

        const toggleBackground = () => {
            const homeElement = document.querySelector('.home');
            if (window.scrollY > window.innerHeight * 0.5) {
                homeElement.classList.add('dark-mode');
            } else {
                homeElement.classList.remove('dark-mode');
            }
        };

        window.addEventListener('scroll', toggleBackground);

        return () => {
            elements.forEach(el => observer.unobserve(el));
            window.removeEventListener('scroll', toggleBackground);
        };
    }, []);

    const handleScroll = (targetId) => {
        console.log(`Attempting to scroll to ${targetId}`);
        const element = document.getElementById(targetId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setScrollCount(scrollCount + 1);
            setNextTarget(nextTarget === 'HomeHeading2' ? 'HomeHeading4' : null);
            console.log(`Scrolled to ${targetId}`);
        } else {
            console.log(`Element with ID ${targetId} not found`);
        }
    };

    return (
        <div className="home">
            <div className="content">
                <div className="image-container">
                </div>
            </div>
            <div id="greeting" className="home-heading">
                <h2>Welcome To PhillyFeelSafe! <br></br></h2>
            </div>  
            <div id="HomeHeading1" className="home-heading">
                <h2>Explore Our Interactive Map:</h2>
                <a href="/map">Click me!</a>
                <button className="scroll-button" onClick={() => document.getElementById('HomeHeading2').scrollIntoView({ behavior: 'smooth' })}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
            </div>
            <div id="HomeHeading2" className="home-heading">
                <h2>How It Works</h2>
                <p>You will be taken to our actual digital map webpage by clicking on this interactive map model. Our interactive digital map will allow you to check on the safety level of various neighborhoods. You can simply click on the specific area you want to discover, which displays all the information you want to know, including potential housing options. Our safety level is represented through a rating from 0 to 5 stars (0 extremely dangerous and 5 very safe).</p>
            </div>
            <div id="HomeHeading3" className="home-heading">
                <h2>Why We Created It</h2>
                <p>The purpose of this website is to serve as a totally free 24-hour guide that helps you feel secure and connected with the local community. Our platform aims to provide you with the safest, most reliable, and most convenient tools to achieve this goal.</p>
                <button className="scroll-button" onClick={() => document.getElementById('HomeHeading4').scrollIntoView({ behavior: 'smooth' })}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9L12 17L20 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            </button>
            </div>
            <div id="HomeHeading4" className="home-heading">
                <h2>About Us</h2>
                <p>We are Drexel CCI students who joined together in this group to develop the PhillyFeelSafe Website. Our team has diverse backgrounds and experiences, but we all have the same objective to create a helpful crime history website for end-users. The team members are  Zarah Malik, Weihao Li, Aahil Afraz, and Daniyal Amjed. For any question or suggestions, please reach out to us on our Contact Us page!</p>
            </div>
        </div>
    );
};

export default Home;

