'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import { useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { motion, type Variants } from 'framer-motion';
import * as THREE from 'three';
import Image from 'next/image'; 

// ==========================================
// 3D BLUE EARTH COMPONENT
// ==========================================

function BlueEarth() {
  const meshRef = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (!meshRef.current) return;

    meshRef.current.rotation.y += 0.003;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <group>
      {/* Wireframe Earth */}
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        <meshStandardMaterial
          color="#00f3ff"
          wireframe
          transparent
          opacity={0.4}
        />
      </Sphere>

      {/* Inner Earth */}
      <Sphere args={[0.95, 32, 32]}>
        <meshStandardMaterial
          color="#001a33"
          emissive="#00f3ff"
          emissiveIntensity={0.2}
          transparent
          opacity={0.8}
        />
      </Sphere>

      {/* Outer Glow */}
      <Sphere args={[1.1, 32, 32]}>
        <meshStandardMaterial
          color="#00f3ff"
          transparent
          opacity={0.05}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

// ==========================================
// BLOG DATA
// ==========================================

const blogPosts = [
  {
    id: 1,
    title: 'The Rise of Quantum Retail',
    excerpt:
      'How quantum computing is reshaping supply chains and making same-day delivery look like snail mail.',
    date: 'Oct 12, 2077',
    tag: 'Tech',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80',
  },
  {
    id: 2,
    title: 'Neural Lace Fashion',
    excerpt:
      'Integrating thought-responsive fabrics into your daily wardrobe. What colors are you thinking today?',
    date: 'Sep 28, 2077',
    tag: 'Fashion',
    image:
      'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=500&q=80',
  },
  {
    id: 3,
    title: 'Holographic Etiquette',
    excerpt:
      "The do's and don'ts of public AR projections. Keep your holograms to yourself in crowded spaces.",
    date: 'Sep 15, 2077',
    tag: 'Culture',
    image:
      'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&q=80',
  },
  {
    id: 4,
    title: 'Zero-G Footwear',
    excerpt:
      'Engineering shoes for the space station lifestyle. Grip, style, and magnetic soles included.',
    date: 'Aug 30, 2077',
    tag: 'Wearables',
    image:
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
  },
];

const trendingTags = [
  'AI',
  'Cyberpunk',
  'Meta-Commerce',
  'SpaceX',
  'Wearables',
  'NFC',
];

const stats = [
  {
    value: '10M+',
    label: 'Future Readers',
  },
  {
    value: '500+',
    label: 'Global Authors',
  },
  {
    value: '24/7',
    label: 'Live Updates',
  },
];

// ==========================================
// FRAMER MOTION VARIANTS
// ==========================================

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ==========================================
// MAIN BLOG PAGE
// ==========================================

export default function BlogPage() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();

    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    e.currentTarget.style.transform = `
      perspective(1000px)
      rotateY(${x * 10}deg)
      rotateX(${-y * 10}deg)
      scale3d(1.02, 1.02, 1.02)
    `;
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    e.currentTarget.style.transform =
      'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';

    setHoveredId(null);
  };

  return (
    <div className="min-h-screen pt-16 pb-20 relative overflow-hidden">

      {/* BACKGROUND GRADIENT ORBS */}
      <div className="absolute top-20 left-10 w-125 h-125 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-125 h-125 bg-accent-red/5 rounded-full blur-3xl" />

      {/* 3D HEADER SECTION */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 2.5] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <BlueEarth />
            <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-4 inline-block px-4 py-1 glass rounded-full border border-neon-blue/30 text-neon-blue text-sm tracking-widest uppercase"
          >
            Knowledge Base
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-9xl font-display font-bold mb-6 text-white text-glow-blue"
          >
            Future Blog
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-400 max-w-2xl mx-auto"
          >
            Insights from the bleeding edge of technology, fashion, and digital evolution.
          </motion.p>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="grid grid-cols-3 gap-4 text-center"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="glass rounded-xl p-6 hover:bg-white/5 transition-colors duration-300">
              <h3 className="text-3xl font-display font-bold text-neon-blue mb-1">{stat.value}</h3>
              <p className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* TRENDING TOPICS */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="rounded-full py-4 px-8 flex flex-wrap items-center gap-4 justify-center bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl shadow-neon-blue/5"
        >
          <span className="text-white font-bold text-sm mr-2">Trending:</span>
          {trendingTags.map((tag) => (
            <span key={tag} className="px-4 py-1.5 bg-white/10 text-white rounded-full text-sm cursor-pointer hover:bg-neon-blue hover:text-dark-bg font-medium transition-all duration-300 shadow-md">
              #{tag}
            </span>
          ))}
        </motion.div>
      </section>

      {/* TONY-DONY BANNER */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
          className="relative glass rounded-3xl p-12 md:p-16 text-center overflow-hidden border border-emerald-green/30"
        >
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent-red/20 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              className="text-5xl md:text-8xl font-display font-bold text-white mb-4"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              Stay with{' '}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-green via-neon-blue to-accent-red">
                Tony-Dony
              </span>
            </motion.h2>

            <motion.p
              className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Join the revolution. Get exclusive drops, futuristic insights, and early access to tomorrow&apos;s tech, today.
            </motion.p>

            <motion.button
              type="button"
              className="px-10 py-4 bg-accent-red text-white font-bold rounded-full text-lg hover:bg-emerald-green transition-colors duration-300 shadow-lg shadow-accent-red/30 hover:shadow-emerald-green/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Join the Movement
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* FEATURED POST */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          className="glass glass-hover rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 cursor-pointer group"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="h-64 md:h-auto overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=800&q=80"
              alt="Featured story"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-r from-dark-bg/80 to-transparent" />
          </div>

          <div className="p-10 flex flex-col justify-center relative">
            <span className="text-accent-red font-bold text-sm uppercase tracking-widest mb-3">Featured Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 group-hover:text-neon-blue transition-colors duration-300">
              The Architecture of the Metaverse
            </h2>
            <p className="text-gray-400 mb-6">
              Exploring the digital infrastructure required to build fully immersive, persistent virtual worlds.
            </p>
            <div className="flex items-center text-emerald-green font-medium text-sm gap-2 group-hover:gap-4 transition-all duration-300">
              <span>Read Article</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </motion.div>
      </section>

      {/* BLOG GRID */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              // ✅ FIX: Moved the comment above the element, removed invalid syntax
              // (Previously: h-[450px] -> h-112.5)
              className="glass rounded-2xl cursor-pointer group relative overflow-hidden h-112.5 transition-all duration-300 ease-out"
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setHoveredId(post.id)}
              onMouseLeave={handleMouseLeave}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className={`object-cover transition-all duration-700 scale-110 group-hover:scale-100 ${
                    hoveredId === post.id ? 'opacity-40' : 'opacity-0'
                  }`}
                />
              </div>

              <div className="absolute inset-0 z-1 bg-linear-to-t from-dark-bg via-dark-bg/80 to-transparent group-hover:from-dark-bg/90 group-hover:via-dark-bg/60 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-2 h-full flex flex-col justify-end p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-emerald-green/10 text-emerald-green text-xs font-bold rounded-full uppercase tracking-widest border border-emerald-green/20 backdrop-blur-sm">
                    {post.tag}
                  </span>
                  <span className="text-gray-400 text-xs backdrop-blur-sm">{post.date}</span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-neon-blue transition-colors duration-300 drop-shadow-lg">
                  {post.title}
                </h3>

                <p className={`text-gray-300 mb-6 leading-relaxed transition-all duration-500 ${
                    hoveredId === post.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  {post.excerpt}
                </p>

                <div className="flex items-center text-neon-blue font-medium text-sm gap-2 group-hover:gap-4 transition-all duration-300">
                  <span>Read Article</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-neon-blue via-emerald-green to-accent-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left z-10" />
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-10 border border-neon-blue/20"
        >
          <h3 className="text-3xl font-display font-bold text-white mb-2">Never Miss a Transmission</h3>
          <p className="text-gray-400 mb-6">Direct signals to your inbox. No spam, just the future.</p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              className="flex-1 bg-dark-bg/50 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:border-neon-blue outline-none transition-colors"
            />
            <button
              type="button"
              className="px-6 py-3 bg-emerald-green text-dark-bg font-bold rounded-lg hover:bg-neon-blue transition-colors duration-300 shadow-lg shadow-emerald-green/20 hover:shadow-neon-blue/20"
            >
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}