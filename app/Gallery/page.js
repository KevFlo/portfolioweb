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
    { url: '/images/htown.jpg', alt: 'htown' },
    { url: '/images/fungi.jpg', alt: 'fungi' },
    { url: '/images/lilfungi.jpg', alt: 'lilfungi' },
    { url: '/images/snek.jpg', alt: 'snekk' },
    { url: '/images/myface.jpg', alt: 'oldme' },
    { url: '/images/lestart.jpg', alt: 'leme' },
    { url: '/images/cabin.jpg', alt: 'itali1' },
    { url: '/images/italihalls.jpg', alt: 'itali2' },
    { url: '/images/italiold.jpg', alt: 'itali3' },
    { url: '/images/plaza1.jpg', alt: 'itali4' },
    { url: '/images/venice.jpg', alt: 'itali5' },
    { url: '/images/venicebay.jpg', alt: 'itali6' },
    { url: '/images/venicebayprofile.jpg', alt: 'itali7' },
    { url: '/images/vroad.jpg', alt: 'itali8' },
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