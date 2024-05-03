import React from 'react';

const Home = () => {
    return (  
        <div className="home">
           
           <div className="image-container">
    <img src="https://cdn0.iconfinder.com/data/icons/modern-ui-glyph-1/64/modern-ui-glyph-1-03-512.png" alt="Image" className="rounded-image" />
</div>


            <span className="welcoming-message">Message from the Developer Team:</span> 
            <br></br>
            <br></br>
            <div id="greeting">
            
            <p>
            Welcome User! You’ve arrived at the PhillyFeelSafe Website 
               Homepage. Feel free to scroll down and discover our website! 
               You can also click any text on the navigation bar to direct you to 
               your preferred webpage destination. For any question or suggestions, 
               don't hesitate to click on "Contact Us" in the navigation bar icon.
            </p>
        </div>  
        <div id="HomeHeading1">
            <h2>Explore Our Interactive Map:</h2>
            <a href="/map">Click me!</a>
        </div>
        <div id="HomeHeading2">
            <h2>How It Works</h2>
            <div className = "Homebody"> 
            <p>You will be taken to our actual digital map webpage by clicking on 
               this interactive map model. Our interactive digital map will allow 
               you to check on the safety level of various neighborhoods. You can 
               simply click on the specific area you want to discover, which displays 
               all the information you want to know, including any housing option. 
               Our safety level is averagely summed up into 1 to 5 stars(1 extremely 
               dangerous and 5 very safe). This level is fixable according to the 
               crime history.
            </p>
            <img src={'src/Images/Wrench.png'} style={{ width: '400px', height: '300px', float: 'right' }} />
            </div>
        </div> 
        <span id="HomeHeading3">
            <h2>Why We Created It</h2>
            <div className = "Homebody2">
            <p>The purpose of this website is to serve as a totally free 24-hour guide 
               that helps you feel secure and connected with the local community. Our
               platform aims to provide you with the safest, most reliable, and most 
               convenient tools to achieve this goal.
            </p>
            <img src = {'src/Images/Lock.png'} style= {{ width: '200px', height: '200px', float: 'right' }} />
            </div>
        </span>
        <span id="HomeHeading4">
            <h2>About Us</h2>
            <div className = "Homebody3">
            <img src={'src/Images/image.png'} style={{ width: '200px', height: '200px', float: 'right' }} />
            <p>We are Drexel CCI students who joined together in this group to develop 
               the PhillyFeelSafe Website. Our team has diverse backgrounds and 
               experiences, but we all have the same objective and belief in this project. 
               That is to create this quality platform for the users. The team members 
               are Aahil Afraz, Weihao Li, Zarah Malik, and Daniyal Amjed. 
            </p>
            </div>
        </span>
        </div>
    );
}

export default Home;