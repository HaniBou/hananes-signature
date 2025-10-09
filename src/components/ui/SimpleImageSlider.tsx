'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface SimpleImageSliderProps {
  images: { src: string; alt: string }[];
  autoplaySpeed?: number;
  className?: string;
  overlay?: boolean;
}

const SimpleImageSlider = ({
  images,
  autoplaySpeed = 5000,
  className = '',
  overlay = false,
}: SimpleImageSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Effet pour faire défiler automatiquement les images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplaySpeed);
    
    return () => clearInterval(interval);
  }, [images.length, autoplaySpeed]);
  
  // Gérer le clic sur les indicateurs
  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Images avec animation de défilement horizontal */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            className="w-full h-full object-cover"
          />
          
          {overlay && (
            <div className="absolute inset-0 bg-brown-dark/30" />
          )}
        </motion.div>
      </AnimatePresence>
      
      {/* Indicateurs (points) */}
      <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              index === currentIndex ? 'bg-gold' : 'bg-cream/50 hover:bg-cream/70'
            }`}
            aria-label={`Aller à l'image ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Flèches de navigation */}
      <button
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-cream/80 hover:bg-gold/80 rounded-full p-2 transition-colors duration-200"
        aria-label="Image précédente"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brown-dark">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      
      <button
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-cream/80 hover:bg-gold/80 rounded-full p-2 transition-colors duration-200"
        aria-label="Image suivante"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-brown-dark">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
};

export default SimpleImageSlider;