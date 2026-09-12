'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link'; // ADDED THIS IMPORT

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  description: string;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    
    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 15}deg) rotateX(${-y * 15}deg) scale3d(1.05, 1.05, 1.05)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    setIsHovered(false);
  };

  return (
    // WRAPPED IN LINK so the whole card navigates to the details page
    <Link href={`/product/${product.id}`} className="block">
      <motion.div 
        className="glass glass-hover rounded-2xl p-4 cursor-pointer transition-all duration-200 ease-out relative overflow-hidden group"
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full h-64 rounded-xl overflow-hidden mb-4 bg-dark-bg/50">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent flex items-end p-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            <motion.button 
              className="w-full py-3 bg-accent-red text-white font-bold rounded-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              // This prevents clicking "Add to Cart" from taking you to the product page
              onClick={(e) => {
                e.preventDefault(); 
                e.stopPropagation();
                alert(`${product.name} added to cart!`); // Placeholder for real cart logic
              }}
            >
              Add to Cart
            </motion.button>
          </div>
        </div>

        <div className="px-2">
          <h3 className="text-xl font-display font-semibold text-white">{product.name}</h3>
          <div className="flex justify-between items-center mt-2">
            <span className="text-emerald-green font-bold text-lg">${product.price}</span>
            <span className="text-sm text-gray-400 flex items-center gap-1">
              ⭐ {product.rating}
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}