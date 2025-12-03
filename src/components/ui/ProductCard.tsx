'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Product } from '@/data/products';

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <motion.div 
      initial={{ y: 20 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      onClick={onClick}
      className={`bg-brown rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gold hover:border-gold-dark ${
        onClick ? 'cursor-pointer hover:scale-[1.02] active:scale-[0.98]' : ''
      }`}
    >
      <div className="relative h-60">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          unoptimized
        />
        {/* Badge si plusieurs images */}
        {product.images.length > 1 && (
          <div className="absolute top-2 right-2 bg-brown/90 text-gold px-2 py-1 rounded-full text-xs font-semibold border border-gold">
            {product.images.length} photos
          </div>
        )}
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-serif text-xl text-gold">{product.name}</h3>
          <span className="text-xs text-gold-light">{product.category}</span>
        </div>
        <p className="text-cream text-sm">{product.description}</p>
        {onClick && (
          <p className="text-gold-light text-xs mt-3 italic">Cliquez pour voir plus →</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;