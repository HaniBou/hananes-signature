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
            className="relative z-10 w-full max-w-5xl mx-4 md:mx-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header avec bouton fermer */}
            <div className="flex justify-between items-center mb-4">
              <div className="text-cream">
                {hasMultipleImages && (
                  <span className="text-lg font-semibold">
                    {currentImageIndex + 1} / {product.images.length}
                  </span>
                )}
              </div>
              <button
                onClick={onClose}
                className="text-cream hover:text-gold transition-colors duration-200 p-2 hover:bg-white/10 rounded-full"
                aria-label="Close modal"
              >
                <FiX size={32} />
              </button>
            </div>

            {/* Image Container */}
            <div className="relative bg-brown-dark rounded-lg overflow-hidden shadow-2xl border-2 border-gold">
              <div className="relative w-full h-[60vh] md:h-[70vh]">
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
                      sizes="(max-width: 768px) 100vw, 80vw"
                      priority
                      unoptimized
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                {hasMultipleImages && (
                  <>
                    {/* Left Arrow */}
                    <button
                      onClick={goToPrevious}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-brown/80 hover:bg-brown text-gold p-3 rounded-full transition-all duration-200 hover:scale-110 border-2 border-gold shadow-lg"
                      aria-label="Previous image"
                    >
                      <FiChevronLeft size={28} />
                    </button>

                    {/* Right Arrow */}
                    <button
                      onClick={goToNext}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-brown/80 hover:bg-brown text-gold p-3 rounded-full transition-all duration-200 hover:scale-110 border-2 border-gold shadow-lg"
                      aria-label="Next image"
                    >
                      <FiChevronRight size={28} />
                    </button>
                  </>
                )}
              </div>

              {/* Product Info */}
              <div className="bg-brown p-6 border-t-2 border-gold">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-serif text-2xl md:text-3xl text-gold">{product.name}</h3>
                  <span className="text-sm text-gold-light bg-gold/20 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <p className="text-cream text-base md:text-lg">{product.description}</p>
              </div>

              {/* Thumbnails (si plusieurs images) */}
              {hasMultipleImages && (
                <div className="bg-brown-dark p-4 flex gap-3 overflow-x-auto border-t border-gold/30">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative flex-shrink-0 w-20 h-20 rounded overflow-hidden border-2 transition-all duration-200 hover:scale-105 ${
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

            {/* Instructions */}
            <div className="mt-4 text-center text-cream/60 text-sm">
              {hasMultipleImages && (
                <p>Utilisez les flèches ← → du clavier ou cliquez sur les boutons pour naviguer</p>
              )}
              <p className="mt-1">Appuyez sur Échap ou cliquez en dehors pour fermer</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProductModal;
