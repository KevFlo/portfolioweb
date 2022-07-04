import WebViewer from '@pdftron/webviewer';
import Image from 'next/image';
import React from 'react';
import { useEffect, useRef } from 'react';
import profilepic from '../public/profile.webp';
// import resume from "../public/Flores_Kevin_Resume.pdf";
// import style from '../About.css';


// const myDocumentArrayBuffer = await instance.exportPDF(resume);
// let base64EncodedDocument = '';
// const len = myDocumentArrayBuffer.byteLength;
// for (let i = 0; i < len; i++) {
// 	base64EncodedDocument += String.fromCharCode(myDocumentArrayBuffer[i]);
// }
// window.localStorage.setItem('document', base64EncodedDocument);


// const base64EncodedDocument = window.localStorage.getItem('document');
// PSPDFKit.load({
// 	// `base64Decode` is a user function that decodes a Base64 string into an `ArrayBuffer`.
// 	document: `data:application/pdf;base64,${base64EncodedDocument}`
// });

// const element = document.getElementsByClassName('foo')[0]
// PSPDFKit.load({ container: element});






export default function About(){

    if (typeof window !== 'undefined') {
        console.log('You are on the browser')
        // ✅ Can use window here
      } else {
        console.log('You are on the server')
        // ⛔️ Don't use window here
      }
      

    const viewer = useRef(null);

    useEffect(() => {
        import('@pdftron/webviewer').then(() => {
            WebViewer(
                {
                    path: '/lib',
                    initialDoc: '../Flores_Kevin_Resume.pdf',
                },
                viewer.current,
            ).then((instance) => {
                const { docViewer } = instance;
                //call WebViewer API here...
            });
        })
    }, []);

    return(
        <body>
            <div className="About">
                <div>
                <h1>About Me</h1>
                <div className='profilepic' >
                    <Image src={profilepic}
                        alt="/"
                        layout="intrinsic"
                        height={400}
                        width={250}
                        priority
                />
                </div>
                </div>
                
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
                
                <div className='webviewer' ref={viewer} style={{height: "100vh"}}></div>
                <div className="content-display">
                    <div className='foo'> this is broken with migration to Next.js bear with it please</div>
                {/* <embed src={resume} width="800px" height="700px" /> */}
                </div>
                

            </div>
        </body>

    );
}