
import React from 'react';
import resume from '../../Flores_Kevin_Resume.pdf';
// import style from '../About.css';


export default function About(){

    return(
        <body>
            <div className="About">
                <h1>About Me</h1>
                <div className="content"> 
                    <p> My name is Kevin Flores, I was born and raised in Houston Texas. I like fishing, hiking, camping, and heavylifting.
                        I started my undergrad education at the University of Iowa. But due to some unfortunate circumstances, mainly Harvey, I transferred back to Houston.
                        I am currently a Senior in my last semester of college, Majoring in Computer Science. I am interested in web development, Cyber Security, Dev Ops, and Network Administration
                        I am also very invested in distributed/cluster computing.
                    </p>
                    <p> 
                        Follow my social media accounts to see what I am up to. Follow my Dev Logs to check up on my projects!
                    </p>
                        <li><a href="https://instagram.com/kevoobot">instagram</a></li>
                        <li><a href="https://github.com/KevFlo">Github</a></li>
                        <li><a href="https://www.linkedin.com/in/flores-kevin/">LinkedIn</a></li>
                        {/* <li>twitter</li> */}
                        <li><a href="https://tryhackme.com/p/Azath0th">TryHackMe</a></li>
                </div>
                <h2>Resume</h2>
                <div className="content-display">
                <embed src={resume} width="800px" height="700px" />
                </div>

            </div>
        
        </body>


    );
}