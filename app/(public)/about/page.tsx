'use client';

import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import { useState } from 'react';
import { motion } from 'framer-motion';

// --- Marquee Banner Data ---
const marqueeText = "TONY-DONY • THE FUTURE IS NOW • INNOVATION BEYOND LIMITS • PREMIUM TECH • ";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// --- Main Page Component ---
export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // 3D Tilt logic for cards
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    e.currentTarget.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.03, 1.03, 1.03)`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>, id: number) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
    setHoveredCard(null);
  };
//heading

  const headingWords = " Tony-Dony".split(" ");

  const stats = [
    { value: "2024", label: "Founded" },
    { value: "1M+", label: "Future Customers" },
    { value: "50+", label: "Global Partners" },
    { value: "100%", label: "Innovation Rate" }
  ];

  const timeline = [
    { year: "2024", title: "The Genesis", desc: "Tony-Dony was born from a vision to merge high-end fashion with futuristic technology." },
    { year: "2025", title: "Quantum Leap", desc: "Launched our proprietary 3D shopping experience, changing eCommerce forever." },
    { year: "2027", title: "Global Domination", desc: "Expanded to 50+ star systems, bringing premium tech to the masses." },
  ];

  return (
    <div className="min-h-screen pt-16 pb-20 relative overflow-hidden">
      
      {/* Background Gradient Orbs */}
      <div className="absolute top-40 left-0 w-[600px] h-[600px] bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-emerald-green/5 rounded-full blur-3xl"></div>

      {/* 3D Header Section with Stars (No Moon) */}
      <section className="relative h-[70vh] w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.4} />
            <Stars radius={100} depth={50} count={5000} factor={6} saturation={0} fade speed={1} />
          </Canvas>
        </div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          {/* Staggered Word Reveal Heading */}
          <motion.div
            className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {headingWords.map((word, i) => (
              <motion.span
                key={i}
                className={`text-6xl md:text-9xl font-display font-bold ${i === 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-emerald-green' : 'text-white'}`}
                variants={wordVariants}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8 }}
          >
            We don't just sell products. We engineer the future.
          </motion.p>
        </div>
      </section>

      {/* 🚀 MOVING BANNER 🚀 */}
      <section className="relative z-10 py-6 bg-gradient-to-r from-neon-blue via-emerald-green to-accent-red overflow-hidden mb-20">
        <motion.div 
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            x: { 
              repeat: Infinity, 
              repeatType: "loop", 
              duration: 10, 
              ease: "linear" 
            } 
          }}
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-bg mx-8 tracking-wider">
            {marqueeText}{marqueeText}{marqueeText}{marqueeText}
          </h2>
          <h2 className="text-4xl md:text-6xl font-display font-bold text-dark-bg mx-8 tracking-wider">
            {marqueeText}{marqueeText}{marqueeText}{marqueeText}
          </h2>
        </motion.div>
      </section>

      {/* Our Mission & Vision Cards (Fixed Hover Effects) */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Our Mission Card */}
          <motion.div 
            className="glass rounded-2xl p-10 cursor-pointer border-l-4 border-neon-blue hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={(e) => handleMouseLeave(e, 1)}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-400 text-lg leading-relaxed">To obliterate the boundaries between digital innovation and physical reality, delivering unparalleled eCommerce experiences.</p>
          </motion.div>

          {/* Our Vision Card */}
          <motion.div 
            className="glass rounded-2xl p-10 cursor-pointer border-l-4 border-emerald-green hover:shadow-lg hover:shadow-emerald-green/20 transition-all duration-300 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={(e) => handleMouseLeave(e, 2)}
          >
            <h3 className="text-3xl font-display font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-400 text-lg leading-relaxed">A world where technology adapts to you. Where every transaction is frictionless, secure, and beautifully designed.</p>
          </motion.div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto mb-20">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              className="glass glass-hover rounded-2xl p-8 text-center cursor-pointer"
              variants={cardVariants}
              onMouseMove={handleMouseMove}
              onMouseLeave={(e) => handleMouseLeave(e, i)}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <h3 className="text-4xl font-display font-bold text-neon-blue mb-2">{stat.value}</h3>
              <p className="text-gray-400 uppercase tracking-widest text-xs font-bold">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Timeline / Journey Section */}
      <section className="px-4 md:px-8 max-w-4xl mx-auto mb-20">
        <h2 className="text-4xl font-display font-bold text-center text-white mb-16 text-glow-blue">Our Journey</h2>
        
        <div className="relative border-l-2 border-white/10 pl-8 ml-4 space-y-12">
          {timeline.map((item, i) => (
            <motion.div 
              key={i}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[calc(2rem+5px)] top-0 w-3 h-3 rounded-full bg-emerald-green shadow-lg shadow-emerald-green/50"></div>
              
              <span className="text-accent-red font-display font-bold text-sm tracking-widest mb-2 block">{item.year}</span>
              <h3 className="text-2xl font-display font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}