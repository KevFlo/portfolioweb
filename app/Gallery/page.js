import GalleryG from '../../components/GalleryG/GalleryG'


const images = [
    { url: '/images/toolconc.jpg', alt: 'Image 1' },
    { url: '/images/toolcnc2.jpg', alt: 'Tool2' },
    { url: '/images/greydaytour23.jpg', alt: 'Greyday23' },
    { url: '/images/sunset.jpg', alt: 'SunSet' },
    { url: '/images/bigwave.jpg', alt: 'Hawaii Waves' },
    { url: '/images/wavebreak.jpg', alt: 'More Waves' },
    { url: '/images/poster.jpg', alt: 'MIO' },
    { url: '/images/mun.jpg', alt: 'Moon' },
    { url: '/images/muun.jpg', alt: 'Moon Zoomed up' },
    { url: '/images/jupiter.jpg', alt: 'Jupiter and his Moons' },
    { url: '/images/saturn.jpg', alt: 'Saturn' },
    { url: '/images/mendkiwi.jpg', alt: 'mybird' },
    { url: '/images/htown.jpg', alt: 'htown' },
    { url: '/images/fungi.jpg', alt: 'fungi' },
    // Add more images as needed
  ];

const Gallery = () => { 
    return (
        <div className="bg-black min-h-screen flex flex-col justify-center items-center">
            <div className="text-center text-white">
                <h1 className="text-5xl font-extrabold mb-8 relative overflow-hidden">
                    <span className="text-grey">Gallery</span>
                </h1>
                <GalleryG images={images} />
            </div>
        </div>
    );
};

export default Gallery;