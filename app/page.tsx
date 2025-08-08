// pages/index.js (or app/page.js if using App Router)
import React from 'react'; // React is implicitly imported in Next.js but good practice to include
import ImgCarousel from "../components/ImgCarousel/ImgCarousel"; // Ensure this path is correct

// Import your local images
import bw from "../public/images/bigwave.jpg";
import logo from '../public/welcome-banner.webp';
import htown from '../public/images/htown.jpg';
import jt from '../public/images/jt.jpg';
import mmg from "../public/images/mmmgn.jpg";
import srhk from "../public/images/srhk.jpg";
import whip from "../public/images/whipp.jpg";

// Define your image array
const images = [
    logo,
    bw,
    htown,
    jt,
    mmg,
    srhk,
    whip
    // Add more image URLs as needed
];

export default function Home() {
    return (
        // Main page container with background gradient
        <div className='bg-gradient-to-r from-black via-stone-900 to-black text-slate-50 min-h-screen'>
            <header className="flex flex-col items-center justify-center py-12 px-4">
                {/* Carousel Section */}
                <div className='w-full max-w-4xl mx-auto mb-12'> {/* Added max-w and mx-auto for carousel */}
                    <ImgCarousel images={images} />
                </div>

                {/* Welcome Text Section */}
                <div className="w-full max-w-3xl mx-auto px-4 text-center"> {/* Centered and padded text */}
                    <h1 className='text-3xl md:text-4xl font-bold mb-4'>Welcome! </h1>
                    <p className="text-lg md:text-xl leading-relaxed mb-4">
                        I'm a CS Major from the University of Houston. 
                        I'm currently working at the Aerospace Corporation.
                        I'm a big outdoors guy but I also love me some high-end tech!
                    </p>
                    <p className='text-lg md:text-xl leading-relaxed'>
                        I will be publishing any projects in my blog, I am migrating to a self-hosted environment.
                        There will be some downtime on more recent posts.
                    </p>
                </div>
            </header>
            {/* Removed the empty h-24 div and br tags as padding is handled by py-12 on header */}
        </div>
    );
}
