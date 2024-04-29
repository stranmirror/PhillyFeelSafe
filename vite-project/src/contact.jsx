import React from "react";


// zfm24 = created Contact information page by creating series of divider tags to separate team member information
const contact = () => {
    return (
        <div className="contact">
            <p className="left-text">Contact Us</p>
            <span className="feedback-message"></span>
            <div id="greeting">
            <p>Please contact any member of our team if you have any questions or to provide feedback!</p>
        </div>  
        <br></br>
        <br></br>

        <div className="ContactHeading1">
            <img src={'src/Images/Zarah.png'} style={{ width: '300px', height: '300px' }} />
            <h2>Zarah Malik - Product Owner</h2>
            <h1>Email: zfm24@drexel.edu</h1>
            <h1><br></br>I am a freshman at Drexel University and my major is Data Science. I am dedicated towards technology innovation and making it accessible for all users.</h1>
        <div>
            <br></br>
            <img src={'src/Images/Weihao.png'} style={{ width: '300px', height: '300px' }} />
        
        </div>

        <div className="ContactHeading2">
            <h2>Weihao Li - Website Function Developer</h2>
            <h1>Email: wl484@drexel.edu</h1>
            <h1><br></br>I am a freshman at Drexel University and my major is Cyber Security and Technology. I am interested in working on securing data for users to access. </h1>
            <div>
            <br></br>
            <img src={'src/Images/Aahil.png'} style={{ width: '300px', height: '300px' }} />
            </div>
        </div>

        <div className="ContactHeading3">
            <h2>Aahil Afraz - Website Style Designer</h2>
            <h1>Email: aa4763@drexel.edu</h1>
            <h1><br></br>I am a freshman at Drexel University and my major is Software Engineering. My goal is learn a few programming languages like C++, R, and Python. </h1>
            <div>
            <br></br>
            <img src={'src/Images/Daniyal.png'} style={{ width: '300px', height: '300px' }} />
            </div>
        </div>
        
        <div className="ContactHeading4">
            <h2>Daniyal Amjed - Crime Information Rater</h2>
            <h1>Email: da894@drexel.edu</h1>
            <h1><br></br>I am a freshman at Drexel University and my major is Software Engineering. I plan to work for one of the leading tech companies of today. </h1>
            </div>   
        </div>
        <br></br>
        </div>
       
    );
};

export default contact;