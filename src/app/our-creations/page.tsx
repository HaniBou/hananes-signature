'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';
import ProductModal from '@/components/ui/ProductModal';
import { products, type Product } from '@/data/products';

export default function Creations() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);
  
  const categories = ['All', 'Algerian', 'French', 'Custom Cakes'];

  const handleCardClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-44 pb-16 bg-brown-dark text-cream relative" style={{
        backgroundImage: `url('/images/IMG_2468.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div className="absolute inset-0 bg-brown-dark/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <SectionTitle 
              title="Our Creations"
              subtitle="Discover our selection of authentic pastries, made with passion and tradition for your greatest pleasure."
              titleColor="text-cream"
              subtitleColor="text-cream/80"
              underlineColor="bg-gold"
            />
          </motion.div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 bg-brown-light/10 border-b border-brown-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium border-2 shadow-md hover:shadow-xl transform hover:scale-105 cursor-pointer ${
                  activeFilter === category 
                    ? 'bg-gold text-brown-dark border-gold-dark hover:bg-gold-dark' 
                    : 'bg-brown-light/10 hover:bg-brown-light/20 text-brown-dark border-brown-light/30 hover:border-gold/50'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Products Grid */}
      <section className="py-16 ">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard
                    product={product}
                    onClick={() => handleCardClick(product)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
      
      {/* Custom Order Section */}
      <section className="py-16 bg-brown-dark text-cream relative" style={{
        backgroundImage: `url('/images/pattern-dark.svg')`,
        backgroundSize: '200px',
      }}>
        <div className="absolute inset-0 bg-brown-dark/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle 
              title="Custom Orders" 
              subtitle="You have a special event to celebrate? Hanane's Signature creates custom pastries to perfectly match your desires and occasion."
              titleColor="text-cream"
              subtitleColor="text-cream"
              underlineColor='bg-gold'
            />
            
            <p className="mt-8 mb-10 text-cream/90">
              Whether it&apos;s for a birthday, wedding, professional event, or any other celebration, our pastries will make your moment unforgettable. Contact us to discuss your project!
            </p>
            
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-brown-dark px-8 py-3 rounded-lg font-semibold transition-all duration-300 border-2 border-gold-dark hover:border-brown-dark shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      
      {/* Modal pour afficher les images en grand */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      
      <Footer />
    </>
  );
}