'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface ProductCardProps {
  name: string;
  description: string;
  imageSrc: string;
  category: string;
}

const ProductCard = ({ name, description, imageSrc, category }: ProductCardProps) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-brown-dark/80 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gold/20"
    >
      <div className="relative h-60">
        <Image
          src={imageSrc}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        <div className="absolute top-3 right-3">
          <span className="bg-gold px-3 py-1 rounded-full text-sm text-brown-dark font-medium">
            {category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-gold mb-2">{name}</h3>
        <p className="text-cream text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;