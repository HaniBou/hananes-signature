'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import type { Product } from '@/data/products';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
  initialImageIndex?: number;
}

const ProductModal = ({ product, isOpen, onClose, initialImageIndex = 0 }: ProductModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialImageIndex);

  // Reset l'index quand on change de produit
  useEffect(() => {
    setCurrentImageIndex(initialImageIndex);
  }, [product.id, initialImageIndex]);

  // Navigation au clavier
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentImageIndex, product.images.length]);

  // Bloquer le scroll du body quand le modal est ouvert
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const hasMultipleImages = product.images.length > 1;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/90" />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 w-[95vw] max-w-6xl max-h-[90vh] mx-4 md:mx-8 bg-brown-dark rounded-lg shadow-2xl border-2 border-gold flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 bg-brown/80 hover:bg-brown text-gold p-2 rounded-full transition-all duration-200 hover:scale-110 border-2 border-gold shadow-lg"
              aria-label="Close modal"
            >
              <FiX size={24} />
            </button>

            {/* Scrollable Content Container */}
            <div className="flex-1 overflow-y-auto overflow-x-hidden">
              {/* Main Content with Image and Thumbnails */}
              <div className="flex flex-col md:flex-row gap-4 p-4 md:p-6">
              {/* Image Container with Navigation */}
              <div className="relative flex-shrink-0 w-full md:w-auto md:flex-1">
                <div className="relative w-full h-[55vh] bg-brown/30 rounded overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentImageIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={product.images[currentImageIndex]}
                        alt={`${product.name} - Image ${currentImageIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 95vw, 60vw"
                        priority
                        unoptimized
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows - Aligned with Image */}
                  {hasMultipleImages && (
                    <>
                      {/* Left Arrow */}
                      <button
                        onClick={goToPrevious}
                        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 bg-brown/80 hover:bg-brown text-gold p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 border-2 border-gold shadow-lg z-10"
                        aria-label="Previous image"
                      >
                        <FiChevronLeft size={24} className="md:w-7 md:h-7" />
                      </button>

                      {/* Right Arrow */}
                      <button
                        onClick={goToNext}
                        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 bg-brown/80 hover:bg-brown text-gold p-2 md:p-3 rounded-full transition-all duration-200 hover:scale-110 border-2 border-gold shadow-lg z-10"
                        aria-label="Next image"
                      >
                        <FiChevronRight size={24} className="md:w-7 md:h-7" />
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Thumbnails - Vertical on Desktop, Horizontal on Mobile */}
              {hasMultipleImages && (
                <div className="flex md:flex-col gap-2 md:gap-3 overflow-x-auto md:overflow-y-auto md:max-h-[55vh] flex-shrink-0 md:w-24 pb-2 md:pb-0">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 md:w-20 md:h-20 rounded overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
                        index === currentImageIndex
                          ? 'border-gold shadow-lg'
                          : 'border-brown-light opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="80px"
                        unoptimized
                      />
                    </button>
                  ))}
                </div>
              )}
              </div>

              {/* Product Info */}
              <div className="bg-brown px-4 md:px-6 py-4 md:py-5 border-t-2 border-gold">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-3">
                  <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-gold">{product.name}</h3>
                  <span className="text-xs md:text-sm text-gold-light bg-gold/20 px-3 py-1 rounded-full whitespace-nowrap">
                    {product.category}
                  </span>
                </div>
                <p className="text-cream text-sm md:text-base lg:text-lg leading-relaxed">{product.description}</p>
              </div>

              {/* Instructions */}
              <div className="px-4 py-3 text-center text-cream/60 text-sm bg-brown-dark/50">
                {hasMultipleImages && (
                  <p>Utilisez les flèches ← → du clavier ou cliquez sur les boutons pour naviguer</p>
                )}
                <p className="mt-1">Appuyez sur Échap ou cliquez en dehors pour fermer</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
