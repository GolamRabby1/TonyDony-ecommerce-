"use client";

import dynamic from 'next/dynamic';
import ProductCard from '@/components/cards/ProductCard';
import products from '@/data/products.json';
import Footer from '@/components/layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';

// Dynamic import 3D components to prevent SSR crashes!
const HeroScene = dynamic(() => import('@/components/sections/HeroScene'), { ssr: false });
const Showcase3D = dynamic(() => import('@/components/sections/Showcase3D'), { ssr: false });

// Marquee text for Hype Ticker
const hypeText = "TONY-DONY • QUANTUM FASHION • FUTURE WEAR • CYBER STYLE • ZERO GRAVITY • ";

export default function HomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // 3D Tilt logic for Feature Cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    setHoveredCard(null);
  };

  const features = [
    { icon: "👓", title: "Hologram Try-On", desc: "See it in your space before you buy. Real-time AR integration.", color: "border-neon-blue" },
    { icon: "🧠", title: "Neural Secure Pay", desc: "Zero-friction checkout. Your mind is the only password needed.", color: "border-emerald-green" },
    { icon: "🚀", title: "Quantum Delivery", desc: "Ordered today, delivered yesterday. We bend spacetime for you.", color: "border-accent-red" },
  ];

  return (
    <main className="relative">
      <HeroScene />

      {/* Hot Right Now Section */}
      <section className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Hot Right Now</h2>
          <p className="text-gray-400 text-lg">The future is already here. Are you?</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>


           {/* ==========================================
          🏎️ NEW SECTION 2: HYPE TICKER MARQUEE
      ========================================== */}
      <section className="relative z-10 py-8 bg-gradient-to-r from-neon-blue via-accent-red to-emerald-green overflow-hidden my-10 shadow-2xl">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 12, ease: "linear" } }}
        >
          {[...Array(8)].map((_, i) => (
            <h2 key={i} className="text-6xl md:text-8xl font-display font-bold text-dark-bg mx-8 tracking-wider select-none">
              {hypeText}
            </h2>
          ))}
        </motion.div>
      </section>


       {/* Best Sale Section */}
      <section className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">Best Sellers</h2>
          <p className="text-gray-400 text-lg">Proven performance, elevated design.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.reverse().map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* ==========================================
          🎬 UPGRADED RELEVANT ECOMMERCE BANNER 🎬
      ========================================== */}
      <section className="relative w-full min-h-[80vh] overflow-hidden z-10 my-20">
        
        {/* High-Quality Background Image (Floating Sneaker/Tech Vibe) */}
        <motion.div 
          className="absolute inset-0 z-0"
          initial={{ scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <img 
            src="https://images.unsplash.com/photo-1556656793-08538906a9f8?w=1400&q=80" 
            alt="Future Shopping" 
            className="w-full h-full object-cover"
          />
          {/* Cinematic Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-dark-bg/80 to-dark-bg/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-dark-bg"></div>
        </motion.div>

        {/* Glowing Accent Orb */}
        <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-red/20 rounded-full blur-[120px] z-[1]"></div>

        {/* Content Overlay */}
        <div className="relative z-10 h-full flex items-center px-4 md:px-8 max-w-7xl mx-auto py-20">
          <motion.div 
            className="glass rounded-2xl p-8 md:p-12 max-w-xl border border-white/10 backdrop-blur-xl"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.div 
              className="inline-block px-4 py-1 border border-accent-red/30 text-accent-red text-xs tracking-[0.3em] mb-6 uppercase rounded-full bg-accent-red/5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              The New Standard
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Upgrade Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-red via-neon-blue to-emerald-green">
                Reality
              </span>
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Why wait for the future? Experience holographic try-ons, neural checkouts, and zero-gravity delivery today. Only at Tony-Dony.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="flex gap-4"
            >
              <button className="px-8 py-3 bg-accent-red text-white font-bold rounded-full text-lg hover:bg-neon-blue transition-colors duration-300 shadow-lg shadow-accent-red/30 hover:shadow-neon-blue/30">
                Shop the Drop
              </button>
              <button className="px-8 py-3 glass text-white font-bold rounded-full text-lg hover:bg-white/10 transition-colors duration-300 border border-white/10">
                How it Works
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3D Interactive Showcase (Fixed Visibility) */}
      <div className="relative z-10">
        <Showcase3D />
      </div>

      {/* ==========================================
          🚀 NEW SECTION 1: THE TONY-DONY EXPERIENCE
      ========================================== */}
      <section className="relative z-10 py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">The Experience</h2>
          <p className="text-gray-400 text-lg">Shopping reimagined from the ground up.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <motion.div 
              key={i}
              className={`glass glass-hover rounded-2xl p-10 cursor-pointer border-l-4 ${feature.color} transition-all duration-300 ease-out`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-display font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-base leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

     

     

      {/* FOOTER ADDED HERE */}
      <Footer /> 
    </main>
  );
}