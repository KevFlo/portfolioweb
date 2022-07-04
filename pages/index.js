import styles from "../styles/Home.module.css";
import Image from 'next/image';
import logo from '../public/welcome-banner.webp';
import reportWebVitals from "../reportWebVitals";

export default function Home() {
  return (
     <div >
      <header className="Home-header">
        <div >
            <Image 
            src={logo}
            alt="/"
            layout="intrinsic"
            objectFit="cover"
            priority
            
            />
        </div>

        <div className="App-welcome-section">
          <p>
              Hello, my name is Kevin. I am a student in Computer Science at the University of Houston. I am also an Intern at HPE.
          </p>
          <p>
              I had a passion for technology since I was very young. But, when I was 14 I stumbled upon programming. I have kept learning more and more interesting stuff from then.
              As of now, I am currently working on devolping my skills with tryhackme as well as migrating into a Linux environment. I am very interested in Dev Ops Security and Network Security
          </p>
           There will be better styles for the css after finals, aswell as a better logo and better integration with Github, Wakatime, and other APIs.
         </div> 
       </header> 
    </div> 
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
