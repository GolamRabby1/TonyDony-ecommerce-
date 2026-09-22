'use client';

import { useState } from 'react';
import ProductCard from '@/components/cards/ProductCard';
import products from '@/data/products.json';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Image from 'next/image';

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.3 } }
};

const promoText = "FLASH SALE • 50% OFF CYBERWEAR • LIMITED TIME • TONY-DONY EXCLUSIVE • FREE QUANTUM SHIPPING • ";

export default function ShopPage() {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
  };

  const advantages = [
    { icon: "🚀", title: "Quantum Shipping", desc: "Faster than light delivery to your sector.", color: "border-neon-blue" },
    { icon: "🛡️", title: "Neural Secure Pay", desc: "Un-hackable encrypted transactions.", color: "border-emerald-green" },
    { icon: "♻️", title: "Zero-G Warranty", desc: "Lifetime guarantee in any gravity.", color: "border-accent-red" },
    { icon: "🤖", title: "24/7 AI Support", desc: "Instant assistance from our hive mind.", color: "border-white/20" },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute top-20 right-0 w-150 h-150 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-150 h-150 bg-accent-red/5 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(rgba(0, 243, 255, 0.2) 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

      <div className="relative z-10 px-4 md:px-8 max-w-7xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="inline-block px-4 py-1 glass rounded-full border border-accent-red/30 text-accent-red text-xs tracking-[0.3em] mb-4 uppercase"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Premium Selection
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-display font-bold text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-white to-emerald-green mb-4">
            The Collection
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Curated artifacts from the future. Filter by class, select your upgrade.
          </p>
        </motion.div>

        {/* 1. THE TONY-DONY ADVANTAGE */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-2 h-8 bg-emerald-green rounded-full shadow-lg shadow-emerald-green/50"></div>
            <h2 className="text-2xl font-display font-bold text-white">The Advantage</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, i) => (
              <motion.div 
                key={i}
                className={`glass glass-hover rounded-2xl p-6 cursor-pointer border-l-4 ${item.color} transition-all duration-300 ease-out`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-display font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Featured Drop Section */}
        {activeFilter === 'All' && (
          <motion.div 
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-accent-red rounded-full shadow-lg shadow-accent-red/50"></div>
              <h2 className="text-2xl font-display font-bold text-white">Latest Drop</h2>
            </div>
            <div className="glass glass-hover rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 group cursor-pointer border border-white/5">
              <div className="h-64 md:h-100 overflow-hidden relative">
                <Image 
                  src={products[0].image} 
                  alt="Featured" 
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-linear-to-r from-dark-bg/80 to-transparent"></div>
              </div>
              <div className="p-10 flex flex-col justify-center relative">
                <span className="text-emerald-green text-sm font-bold uppercase tracking-widest mb-2">{products[0].category}</span>
                <h3 className="text-4xl font-display font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">{products[0].name}</h3>
                <p className="text-gray-400 mb-8 text-lg">{products[0].description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-white">${products[0].price}</span>
                  <button className="px-8 py-3 bg-accent-red text-white font-bold rounded-full hover:bg-neon-blue transition-colors duration-300 shadow-lg shadow-accent-red/30 hover:shadow-neon-blue/30">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* 2. NEW SECTION: CYBER PROMO BANNER */}
        <motion.div 
          className="mb-20 relative overflow-hidden rounded-2xl border border-white/10"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute inset-0 overflow-hidden bg-dark-bg flex flex-col justify-center gap-4 z-0">
            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 15, ease: "linear" } }}
            >
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-6xl md:text-8xl font-display font-bold text-neon-blue/15 mx-8 tracking-wider select-none">
                  {promoText}
                </span>
              ))}
            </motion.div>

            <motion.div 
              className="flex whitespace-nowrap"
              animate={{ x: ["-50%", "0%"] }}
              transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 20, ease: "linear" } }}
            >
              {[...Array(4)].map((_, i) => (
                <span key={i} className="text-6xl md:text-8xl font-display font-bold text-emerald-green/15 mx-8 tracking-wider select-none">
                  {promoText}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-24 px-4 bg-dark-bg/40 backdrop-blur-sm border-y border-white/5">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
              className="inline-block px-6 py-2 bg-accent-red text-white text-sm font-bold rounded-full mb-6 shadow-lg shadow-accent-red/50 animate-pulse"
            >
              ⚡ LIMITED TIME OFFER ⚡
            </motion.div>
            
            <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4">
              Cyber <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-emerald-green">Promo</span> Active
            </h2>
            <p className="text-gray-300 text-lg max-w-xl mb-8">
              Upgrade your arsenal. Get 50% off all cyberwear and quantum accessories. Use code at checkout.
            </p>

            <motion.div 
              className="flex flex-col sm:flex-row items-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <div className="glass px-6 py-3 rounded-full border border-emerald-green/50 text-emerald-green font-mono text-xl tracking-[0.3em] font-bold shadow-inner">
                TONY50
              </div>
              <motion.button 
                className="px-8 py-3 bg-neon-blue text-dark-bg font-bold rounded-full text-lg shadow-lg shadow-neon-blue/30 hover:bg-emerald-green transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Claim Discount
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between mb-10 gap-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeFilter === category 
                    ? 'bg-neon-blue text-dark-bg border-neon-blue shadow-lg shadow-neon-blue/30' 
                    : 'bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
          
          <p className="text-gray-500 text-sm font-mono tracking-wider">
            {"// RESULTS: "}<span className="text-neon-blue">{filteredProducts.length}</span>
          </p>
        </div>

        {/* Product Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          // ✅ FIX 1: Removed key={activeFilter} to stop full remounting
        >
          {/* ✅ FIX 2: Changed mode from "popLayout" to "sync" to fix the hydration error */}
          <AnimatePresence mode="sync">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                variants={itemVariants}
                layout
                exit="exit"
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div 
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-xl font-display">No artifacts found in this category.</p>
          </motion.div>
        )}

        {/* 3. NEURAL UPLINK (NEWSLETTER) */}
        <motion.div 
          className="mt-24 relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute -inset-0.5 bg-linear-to-r from-neon-blue via-emerald-green to-accent-red rounded-3xl opacity-70 blur-sm animate-pulse group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <div className="relative glass rounded-3xl p-12 md:p-20 text-center overflow-hidden bg-dark-bg/90 backdrop-blur-xl">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-emerald-green/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <motion.div
                className="inline-block px-4 py-1 glass rounded-full border border-neon-blue/30 text-neon-blue text-xs tracking-[0.3em] mb-6 uppercase"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Priority Access
              </motion.div>
              
              <h2 className="text-4xl md:text-7xl font-display font-bold text-white mb-4">
                Join the <span className="text-transparent bg-clip-text bg-linear-to-r from-neon-blue to-emerald-green">Neural Uplink</span>
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
                Be the first to know about black-ops drops, prototype releases, and exclusive discounts. Direct to your inbox.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto relative">
                <input 
                  type="email" 
                  placeholder="enter.email@uplink.com" 
                  className="flex-1 bg-dark-bg/80 border border-white/10 rounded-full px-6 py-4 text-white placeholder-gray-500 focus:border-neon-blue outline-none transition-colors font-mono tracking-wider z-10" 
                />
                <motion.button 
                  className="px-8 py-4 bg-emerald-green text-dark-bg font-bold rounded-full hover:bg-neon-blue transition-colors duration-300 shadow-lg shadow-emerald-green/30 hover:shadow-neon-blue/30 font-display text-lg z-10"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Initialize
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}