'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron } from '@react-three/drei';
import { useRef, useState } from 'react';
// ✅ FIX: Imported Variants and removed unused AnimatePresence
import { motion, Variants } from 'framer-motion';
import * as THREE from 'three';

// --- 3D Glitch Core Component ---
function GlitchCore() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
      // Pulsating scale effect
      meshRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
    }
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <Icosahedron ref={meshRef} args={[1.5, 1]}>
        <meshStandardMaterial 
          color="#00f3ff" 
          wireframe 
          emissive="#00f3ff" 
          emissiveIntensity={0.8} 
          transparent 
          opacity={0.6}
        />
      </Icosahedron>
    </Float>
  );
}

// --- Animation Variants ---
// ✅ FIX: Explicitly typed as Variants to resolve the Netlify build error
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// --- Main Page Component ---
export default function ContactPage() {
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [formStatus, setFormStatus] = useState('STANDBY');

  const handleSubmit = () => {
    setFormStatus('TRANSMITTING...');
    setTimeout(() => {
      setFormStatus('TRANSMISSION SECURE');
      setTimeout(() => setFormStatus('STANDBY'), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 relative overflow-hidden flex items-center justify-center">
      
      {/* Background Gradient Orbs */}
      {/* ✅ FIX: w-[500px] -> w-125, h-[500px] -> h-125 */}
      <div className="absolute top-1/4 left-1/4 w-125 h-125 bg-neon-blue/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-125 h-125 bg-accent-red/5 rounded-full blur-3xl"></div>

      {/* Scanning Grid Overlay */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'linear-gradient(rgba(0, 243, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 243, 255, 0.1) 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      {/* 3D Canvas Background */}
      <div className="absolute inset-0 z-0 opacity-60">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} />
          <GlitchCore />
        </Canvas>
      </div>

      {/* Foreground Form Section */}
      <motion.div 
        className="relative z-10 w-full max-w-3xl mx-4 md:mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <div className="inline-block px-4 py-1 glass rounded-full border border-emerald-green/30 text-emerald-green text-xs tracking-[0.3em] mb-4 uppercase">
            Secure Channel
          </div>
          {/* ✅ FIX: bg-gradient-to-r -> bg-linear-to-r */}
          <h1 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-linear-to-r from-neon-blue via-emerald-green to-neon-blue mb-2">
            Establish Link
          </h1>
          <p className="text-gray-400 text-lg">Direct neural uplink or standard data transmission</p>
        </motion.div>

        {/* Form Card */}
        <motion.div 
          variants={itemVariants}
          className="glass rounded-2xl p-8 md:p-12 border-l-4 border-neon-blue relative overflow-hidden"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Decorative corner accents */}
          <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-emerald-green/50 rounded-tr-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-accent-red/50 rounded-bl-2xl"></div>

          <form className="space-y-10 relative z-10">
            
            {/* Name Field */}
            <motion.div variants={itemVariants} className="relative">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'name' ? 'top-1 text-neon-blue text-xs' : 'top-5 text-gray-500 text-sm'}`}>
                {focusedField === 'name' ? '> IDENTIFIER' : 'Name'}
              </label>
              <input 
                type="text" 
                className="w-full bg-dark-bg/80 border-b-2 border-white/10 pt-6 pb-2 px-4 text-white focus:border-neon-blue outline-none transition-all duration-300 text-lg font-mono tracking-wider"
                onFocus={() => setFocusedField('name')}
                onBlur={(e) => e.target.value === '' && setFocusedField(null)}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div variants={itemVariants} className="relative">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'email' ? 'top-1 text-neon-blue text-xs' : 'top-5 text-gray-500 text-sm'}`}>
                {focusedField === 'email' ? '> COMM_FREQUENCY' : 'Email'}
              </label>
              <input 
                type="email" 
                className="w-full bg-dark-bg/80 border-b-2 border-white/10 pt-6 pb-2 px-4 text-white focus:border-emerald-green outline-none transition-all duration-300 text-lg font-mono tracking-wider"
                onFocus={() => setFocusedField('email')}
                onBlur={(e) => e.target.value === '' && setFocusedField(null)}
              />
            </motion.div>

            {/* Message Field */}
            <motion.div variants={itemVariants} className="relative">
              <label className={`absolute left-4 transition-all duration-300 pointer-events-none ${focusedField === 'message' ? 'top-1 text-emerald-green text-xs' : 'top-5 text-gray-500 text-sm'}`}>
                {focusedField === 'message' ? '> DATA_PAYLOAD' : 'Message'}
              </label>
              <textarea 
                rows={4} 
                className="w-full bg-dark-bg/80 border-b-2 border-white/10 pt-6 pb-2 px-4 text-white focus:border-accent-red outline-none transition-all duration-300 resize-none text-lg font-mono tracking-wider"
                onFocus={() => setFocusedField('message')}
                onBlur={(e) => e.target.value === '' && setFocusedField(null)}
              ></textarea>
            </motion.div>

            {/* Submit Area */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4">
              
              {/* Status Indicator */}
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${formStatus === 'STANDBY' ? 'bg-yellow-500 animate-pulse' : formStatus === 'TRANSMITTING...' ? 'bg-accent-red animate-ping' : 'bg-emerald-green'}`}></div>
                <span className="font-mono text-sm text-gray-400 tracking-widest">{formStatus}</span>
              </div>

              {/* Submit Button */}
              <motion.button 
                type="button"
                onClick={handleSubmit}
                className="w-full sm:w-auto px-10 py-4 bg-neon-blue text-dark-bg font-bold text-lg rounded-none border-none relative overflow-hidden group shadow-lg shadow-neon-blue/20 hover:shadow-neon-blue/50 transition-shadow duration-300"
                whileHover={{ scale: 1.02, skewX: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 font-display tracking-wider">INITIALIZE TRANSMISSION</span>
                {/* Button hover sweep effect */}
                <div className="absolute inset-0 bg-emerald-green transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
              </motion.button>
            </motion.div>

          </form>
        </motion.div>

        {/* Bottom Info Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8"
        >
          {[
            { title: "COORDINATES", value: "40.7128° N, 74.0060° W" },
            { title: "UPLINK", value: "hologram@tony-dony.com" },
            { title: "EMERGENCY", value: "+1 (800) 555-0199" }
          ].map((item, i) => (
            <motion.div key={i} variants={itemVariants} className="glass rounded-lg p-4 text-center hover:bg-white/5 transition-colors duration-300">
              <h4 className="text-xs text-gray-500 font-mono tracking-widest mb-1">{item.title}</h4>
              <p className="text-white text-sm font-mono">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

      </motion.div>
    </div>
  );
}