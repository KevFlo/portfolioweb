import Image from 'next/image';
import bw from "../public/images/bigwave.jpg"

import logo from '../public/welcome-banner.webp';
import reportWebVitals from "../reportWebVitals";
import ImgCarousel from "../components/ImgCarousel/ImgCarousel"


const images = [
    logo,
    bw,
    // Add more image URLs as needed
  ];


export default function Home() {
    
    
   
    return (
        <div className='bg-gradient-to-r from-black via-stone-900 to-black text-slate-50'>
            <header className="Home-header flex-grow">
                <div className='around ' style={{ padding: '10px' }} >
                <ImgCarousel images={images} />
                </div>
                <div className="flex-grow">
                <div className="App-welcome-section" style={{ padding: '20px' }} >
                <h1 className='text-xl'>Welcome! </h1>
                    <p className="home text-l">
                    I'm a CS Major from the University of Houston. 
                    Im currently working at the Aerospace Corporation.
                    I'm a big out doors guy but I also love me some high end tech!
                    
                    </p>
                    <p className='home text-l'>
                    I will be publishing any projects in my blog, I am migrating to a self hosted environment.
                    There will be some down time on more recent posts
                    </p>
                </div>
                </div>
            </header>
            <div className='h-24'>
                <br />
                <br />
            </div>
            </div>
        );
        }
   
   // If you want to start measuring performance in your app, pass a function
   // to log results (for example: reportWebVitals(console.log))
   // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
   reportWebVitals();