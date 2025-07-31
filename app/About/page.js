import Image from 'next/image';
import React from 'react';
import profilepic from '../../public/profile.webp';
import Resume from '../../components/Resume/Resume';


export default function About(){

    return(
       <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="mb-12">
                <h1 className='text-3xl font-bold mb-6 text-center'>About Me</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="flex justify-center">
                        <Image 
                            src={profilepic}
                            alt="Kevin's Profile Picture"
                            width={300}
                            height={300}
                            className="rounded-full object-cover shadow-lg"
                            priority
                        />
                    </div>
                    <div>
                        <p>
                            My name is Kevin, I was born and raised in Houston Texas. I like fishing, hiking, camping, and heavy lifting.
                            I started my undergrad education at the University of Iowa. But due to some unfortunate circumstances, mainly Hurricane Harvey, I transferred back to Houston.
                            Majored in Computer Science with a Minor in Mathematics. 
                            I am interested in: Web Development, Cyber Security, Dev Ops, and Network Administration
                            I am also very invested in Distributed/Cluster Computing. 
                            My Hobbies include automating aquaponics garden, amature HAM radio, 3D printing embeded systems
                        </p>
                        <p className='mt-4'>
                            I had a passion for technology since I was very young. But, when I was 14 I stumbled upon programming. I have kept learning more and more interesting stuff from then.
                            As of now, I am currently working on developing my skills with tryhackme as well as migrating into a Linux environment. I am also working on creating my own private Cloud Server with vpn actions.
                            Once that is done I can use that to help develope this website further, as well as create a Homelab for some fun.
                        </p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">
                <h1 className='text-3xl font-bold mb-6 text-center'>Resume</h1>
                <Resume />
            </div>

        </div>
    );
}