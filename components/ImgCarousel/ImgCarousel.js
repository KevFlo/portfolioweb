'use client'
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Swipe from "react-easy-swipe";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

/**
 * A custom carousel component for Next.js and Tailwind.
 *
 * @param images - Array of images to display
 * @returns React component
 */
export default function ImgCarousel({ images }) {
  // State to track the current image slide index
  const [currentSlide, setCurrentSlide] = useState(0);

  // Autoplay function using a custom interval
  useEffect(() => {
    // Check if there are images to display
    if (!images || images.length <= 1) return;

    // Set up the interval for autoplay
    const autoplayTimer = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 30000); // Transitions every 3 seconds

    // Clear the interval when the component unmounts or the effect re-runs
    return () => clearInterval(autoplayTimer);
  }, [images.length]);

  // Handler for the next slide button
  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    );
  }, [images.length]);

  // Handler for the previous slide button
  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? images.length - 1 : prevSlide - 1
    );
  }, [images.length]);

  // Handler for dot navigation
  const handleDotClick = useCallback((index) => {
    setCurrentSlide(index);
  }, []);

  if (!images || images.length === 0) {
    return (
      <div className="flex justify-center items-center h-64 text-gray-500">
        No images to display.
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Navigation arrows */}
      <AiOutlineLeft
        onClick={handlePrevSlide}
        className="absolute left-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 hover:text-gray-200 transition-colors z-20"
      />
      <AiOutlineRight
        onClick={handleNextSlide}
        className="absolute right-0 m-auto text-5xl inset-y-1/2 cursor-pointer text-gray-400 hover:text-gray-200 transition-colors z-20"
      />
      
      {/* Carousel container with CSS transitions and Swipe */}
      <div className="w-full h-[50vh] overflow-hidden relative m-auto rounded-lg shadow-xl">
        <Swipe
          onSwipeLeft={handleNextSlide}
          onSwipeRight={handlePrevSlide}
          className="flex h-full transition-transform ease-in-out duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div className="flex-none w-full relative h-full" key={index}>
              <Image
                src={image}
                alt={`Slide ${index + 1}`}
                fill={true}
                style={{ objectFit: 'contain' }}
                priority={index === 0}
              />
            </div>
          ))}
        </Swipe>
      </div>

      {/* Dot navigation */}
      <div className="relative flex justify-center p-2">
        {images.map((_, index) => {
          return (
            <div
              className={`h-4 w-4 rounded-full mx-2 mb-2 cursor-pointer ${
                index === currentSlide
                  ? "bg-gray-700 dark:bg-gray-200"
                  : "bg-gray-300 dark:bg-gray-600"
              }`}
              key={index}
              onClick={() => handleDotClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
}
