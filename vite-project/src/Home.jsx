import React, { useEffect } from 'react';
import './Home.css';

const Home = () => {
    useEffect(() => {
        // Existing Intersection Observer setup
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

        // Function to toggle dark mode based on scroll position
        const toggleBackground = () => {
            const homeElement = document.querySelector('.home');
            if (window.scrollY > window.innerHeight * 0.5) {
                homeElement.classList.add('dark-mode');
            } else {
                homeElement.classList.remove('dark-mode');
            }
        };

        // Add scroll event listener
        window.addEventListener('scroll', toggleBackground);

        // Clean up function
        return () => {
            elements.forEach(el => observer.unobserve(el));
            window.removeEventListener('scroll', toggleBackground);
        };
    }, []);

    return (
        <div className="home">
            <div className="content">
                <div className="image-container">
                    {/* Image or content can go here */}
                </div>
            </div>
            <div id="greeting" className="home-heading">
                <h2>Welcome To PhillyFeelSafe! You’ve arrived at the Homepage. For any question or suggestions, don't hesitate to click on "Contact Us" in the navigation bar icon.</h2>
            </div>  
            <div id="HomeHeading1" className="home-heading">
                <h2>Explore Our Interactive Map:</h2>
                <a href="/map">Click me!</a>
            </div>
            <div id="HomeHeading2" className="home-heading">
                <h2>How It Works</h2>
                <p>You will be taken to our actual digital map webpage by clicking on this interactive map model. Our interactive digital map will allow you to check on the safety level of various neighborhoods. You can simply click on the specific area you want to discover, which displays all the information you want to know, including any housing option. Our safety level is averagely summed up into 1 to 5 stars (1 extremely dangerous and 5 very safe). This level is fixable according to the crime history.</p>
            </div>
            <div id="HomeHeading3" className="home-heading">
                <h2>Why We Created It</h2>
                <p>The purpose of this website is to serve as a totally free 24-hour guide that helps you feel secure and connected with the local community. Our platform aims to provide you with the safest, most reliable, and most convenient tools to achieve this goal.</p>
            </div>
            <div id="HomeHeading4" className="home-heading">
                <h2>About Us</h2>
                <p>We are Drexel CCI students who joined together in this group to develop the PhillyFeelSafe Website. Our team has diverse backgrounds and experiences, but we all have the same objective and belief in this project. That is to create this quality platform for the users. The team members are Aahil Afraz, Weihao Li, Zarah Malik, and Daniyal Amjed.</p>
            </div>
        </div>
    );
};

export default Home;

