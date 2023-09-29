import Image from 'next/image';
import React from 'react';
import profilepic from '../../public/profile.webp';
import resume from '../../public/resume.webp';


export default function About(){

    return(
       
            <div>
                <div>
                <h1 className='text-3xl font-bold mb-6'>About Me</h1>
                    <div>
                        <Image src={profilepic}
                            alt="/"
                            layout="intrinsic"
                            height={400}
                            width={250}
                            priority
                        />
                    </div>
                </div>
                
                <div> 
                    <p>     My name is Kevin Flores, I was born and raised in Houston Texas. I like fishing, hiking, camping, and heavy lifting.
                        I started my undergrad education at the University of Iowa. But due to some unfortunate circumstances, mainly Hurricane Harvey, I transferred back to Houston.
                        I am currently a Senior in my last semester of college, Majoring in Computer Science with a Minor in Mathematics. 
                        I am interested in: Web Development, Cyber Security, Dev Ops, and Network Administration
                        I am also very invested in Distributed/Cluster Computing.
                    </p>
                    <p>
                        I had a passion for technology since I was very young. But, when I was 14 I stumbled upon programming. I have kept learning more and more interesting stuff from then.
                        As of now, I am currently working on developing my skills with tryhackme as well as migrating into a Linux environment. I am also working on creating my own private Cloud Server with vpn actions.
                        Once that is done I can use that to help develope this website further, as well as create a Homelab for some fun.
          
                    </p>
                    
                    
                </div>
                <br></br>
                <h1 className='text-3xl font-bold mb-6'>Resume</h1>
                   <a href="https://drive.google.com/file/d/1h8zZcg6adBvGitE_0IkhyEc4PRRPbvzZ/view?usp=share_link">
                    <Image src={resume}
                        alt="Resume"
                        layout='intrinsic'
                        height={1000}
                        width={800}
                        
                    />
                    </a>
                    <div className='h-24' >
                        <br/>
                        <br/>
                    </div>
            </div>
        

    );
}