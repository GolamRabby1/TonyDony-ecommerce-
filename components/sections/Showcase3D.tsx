'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Torus } from '@react-three/drei';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function FloatingTorus() {
  const meshRef = useRef();
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * 0.3;
    meshRef.current.rotation.y = time * 0.2;
    meshRef.current.position.y = Math.sin(time) * 0.2;
  });

  return (
    <Torus ref={meshRef} args={[1, 0.4, 16, 100]}>
      <meshStandardMaterial color="#ff0055" emissive="#ff0055" emissiveIntensity={0.5} roughness={0.2} metalness={0.8} />
    </Torus>
  );
}

export default function Showcase3D() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.5, 0.8], [0.5, 1.5]);
  const opacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);

  return (
    <section className="relative h-screen flex items-center justify-center">
      <motion.div style={{ scale, opacity }} className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.3} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <FloatingTorus />
        </Canvas>
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-7xl font-display font-bold text-glow-blue text-neon-blue mb-4">
          Beyond Reality
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Explore our premium collection with interactive 3D previews. 
        </p>
      </div>
    </section>
  );
}