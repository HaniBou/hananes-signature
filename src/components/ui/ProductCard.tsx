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
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-brown rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gold hover:border-gold-dark"
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
      </div>
      <div className="p-5">
        <h3 className="font-serif text-xl text-gold mb-2">{name}</h3>
        <p className="text-cream text-sm">{description}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;