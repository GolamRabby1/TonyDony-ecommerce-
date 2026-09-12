'use client';
import products from '@/data/products.json';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';

export default function ProductDetail() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <div className="min-h-screen pt-24 text-center text-accent-red">Product not found</div>;

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto flex flex-col md:flex-row gap-12">
      <motion.div 
        className="w-full md:w-1/2 glass rounded-2xl p-4 flex items-center justify-center h-[500px]"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain rounded-xl" />
      </motion.div>

      <motion.div 
        className="w-full md:w-1/2 flex flex-col justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-emerald-green text-sm font-bold uppercase tracking-widest">{product.category}</span>
        <h1 className="text-5xl font-display font-bold text-white mt-2 mb-4">{product.name}</h1>
        <p className="text-gray-400 text-lg mb-6">{product.description}</p>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-4xl font-bold text-neon-blue">${product.price}</span>
          <span className="text-gray-400 text-lg">⭐ {product.rating}</span>
        </div>
        <button className="py-4 px-10 bg-accent-red text-white font-bold rounded-full text-lg hover:bg-emerald-green transition-all duration-300 box-glow-green w-fit">
          Add to Cart
        </button>
      </motion.div>
    </div>
  );
}