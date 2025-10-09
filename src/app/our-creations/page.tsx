'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SectionTitle from '@/components/ui/SectionTitle';
import ProductCard from '@/components/ui/ProductCard';

// Product data (replace with your own data)
const products = [
  // Algerian Pastries
  {
    name: 'Date Makrout',
    description: 'Pastry made with semolina and dates, perfumed with orange blossom water',
    imageSrc: '/images/makrout.jpg',
    category: 'Algerian',
  },
  {
    name: 'Baklawa',
    description: 'Layered pastry with almonds and honey, flavored with orange blossom water',
    imageSrc: '/images/baklawa.jpg',
    category: 'Algerian',
  },
  {
    name: 'Kalb el Louz',
    description: 'Cake made with semolina and almonds, topped with flavored syrup',
    imageSrc: '/images/kalb-el-louz.jpg',
    category: 'Algerian',
  },
  {
    name: 'Griwech',
    description: 'Crispy fried pastry coated with honey',
    imageSrc: '/images/griwech.jpg',
    category: 'Algerian',
  },
  
  // French Pastries
  {
    name: 'Mille-feuille',
    description: 'Pastry made of puff pastry layers with vanilla custard cream',
    imageSrc: '/images/millefeuille.jpg',
    category: 'French',
  },
  {
    name: 'Fruit Tart',
    description: 'Tart topped with fresh seasonal fruits on a light custard cream',
    imageSrc: '/images/tarte-fruits.jpg',
    category: 'French',
  },
  {
    name: 'Éclair au Chocolat',
    description: 'Oblong choux pastry filled with chocolate cream and topped with chocolate icing',
    imageSrc: '/images/eclair.jpg',
    category: 'French',
  },
  {
    name: 'Paris-Brest',
    description: 'Ring-shaped choux pastry filled with praline cream',
    imageSrc: '/images/paris-brest.jpeg',
    category: 'French',
  },
  
  // Birthday Cakes
  {
    name: 'Chocolate Cake',
    description: 'Rich chocolate cake with chocolate ganache and decoration',
    imageSrc: '/images/birthday-cake.jpg',
    category: 'Birthday',
  },
  {
    name: 'Red Velvet Cake',
    description: 'Red velvet cake with cream cheese frosting and personalized decoration',
    imageSrc: '/images/red-velvet.jpg',
    category: 'Birthday',
  },
  {
    name: 'Number Cake',
    description: 'Custom cake shaped as numbers or letters, decorated with fresh fruits and flowers',
    imageSrc: '/images/number-cake.jpg',
    category: 'Birthday',
  },
  {
    name: 'Character Cake',
    description: 'Themed cake inspired by your favorite character or theme',
    imageSrc: '/images/character-cake.jpg',
    category: 'Birthday',
  },
];

export default function Creations() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);
  
  const categories = ['All', 'Algerian', 'French', 'Birthday'];

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-brown-dark text-cream relative" style={{
        backgroundImage: `url('/images/banner-2.jpg')`,
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
            <h1 className="text-4xl md:text-5xl font-serif mb-6">Our Creations</h1>
            <p className="text-lg text-cream/80">
              Discover our selection of authentic pastries, made with passion and tradition for your greatest pleasure.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Filter Section */}
      <section className="py-8 bg-brown-light/10 border-b border-brown-light/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-all duration-200 font-medium ${
                  activeFilter === category 
                    ? 'bg-gold text-brown-dark shadow-md' 
                    : 'bg-brown-light/10 hover:bg-brown-light/20 text-brown-dark'
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
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatePresence>
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <ProductCard
                    name={product.name}
                    description={product.description}
                    imageSrc={product.imageSrc}
                    category={product.category}
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
              titleColor="text-gold"
              subtitleColor="text-cream"
            />
            
            <p className="mt-8 mb-10 text-cream/90">
              Whether it's for a birthday, wedding, professional event, or any other celebration, our pastries will make your moment unforgettable. Contact us to discuss your project!
            </p>
            
            <a
              href="/contact"
              className="inline-block bg-gold hover:bg-gold-dark text-brown-dark px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </>
  );
}