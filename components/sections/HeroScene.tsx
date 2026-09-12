'use client';

import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

function Earth({ mouse }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(time * 0.1) + mouse.y * 0.5;
      meshRef.current.rotation.y = time * 0.2 + mouse.x * 0.5;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[1, 32, 32]}>
        <meshStandardMaterial color="#00ff9d" wireframe transparent opacity={0.3} />
      </Sphere>
      <Sphere args={[0.95, 32, 32]}>
        <meshStandardMaterial color="#00f3ff" transparent opacity={0.1} emissive="#00f3ff" emissiveIntensity={0.5} />
      </Sphere>
    </group>
  );
}

export default function HeroScene() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setMouse({
      x: (e.clientX / window.innerWidth) * 2 - 1,
      y: -(e.clientY / window.innerHeight) * 2 + 1,
    });
  };

  return (
    <section onMouseMove={handleMouseMove} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 2.5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <Earth mouse={mouse} />
          <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.h1 
          className="text-5xl md:text-8xl font-display font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-emerald-green to-accent-red"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          Experience the Future of Shopping
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Premium tech, futuristic aesthetics, and unparalleled design.
        </motion.p>

        <motion.button 
          className="px-10 py-4 bg-emerald-green text-dark-bg font-bold rounded-full text-lg hover:bg-neon-blue transition-colors duration-300 box-glow-green"
          whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 157, 0.6)" }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          Shop Now
        </motion.button>
      </div>
    </section>
  );
}