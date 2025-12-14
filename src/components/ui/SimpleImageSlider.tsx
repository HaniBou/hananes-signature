'use client';
import Image from 'next/image';
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
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Images avec animation de défilement horizontal */}
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[currentIndex].src}
            alt={images[currentIndex].alt}
            fill
            priority={currentIndex === 0}
            className="w-full h-full object-cover"
          />
          
          {overlay && (
            <div className="absolute inset-0 bg-brown-dark/30" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default SimpleImageSlider;