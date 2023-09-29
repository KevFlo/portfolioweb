import Image from 'next/image';
import logo from '../public/welcome-banner.webp';
import reportWebVitals from "../reportWebVitals";

export default function Home() {
    
   
    return (
        <div className='bg-gradient-to-r from-black via-stone-900 to-black text-slate-50'>
            <header className="Home-header flex">
                <div className='around ' style={{ padding: '10px' }} >
                <Image
                    src={logo}
                    alt="/"
                    layout="intrinsic"
                    objectFit="cover"
                    priority
                />
                </div>
                <div className="flex-grow">
                <div className="App-welcome-section" style={{ padding: '10px' }} >
                <h1 className='text-xl'>Welcome! </h1>
                    <p className="home text-l">
                    I'm a CS Major from the University of Houston. 
                    Im currently working at the Aerospace Corporation.
                    I'm a big out doors guy but I also love me some high end tech!
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