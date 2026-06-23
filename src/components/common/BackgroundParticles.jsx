import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundParticles = () => {
  const { scrollY } = useScroll();

  // Create smooth parallax transformations based on scroll position
  const yBlob1 = useTransform(scrollY, [0, 4000], [0, -350]);
  const yBlob2 = useTransform(scrollY, [0, 4000], [0, 250]);
  const yBlob3 = useTransform(scrollY, [0, 4000], [0, -200]);
  const scaleBlob1 = useTransform(scrollY, [0, 2000, 4000], [1, 1.15, 0.9]);
  const scaleBlob2 = useTransform(scrollY, [0, 2000, 4000], [1, 0.85, 1.1]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#000000]"></div>
      
      {/* Ambient Gradient Blobs - Strict Red Family with Scroll Parallax */}
      <motion.div 
        style={{ y: yBlob1, scale: scaleBlob1 }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-crimson/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"
      />
      <motion.div 
        style={{ y: yBlob2, scale: scaleBlob2 }}
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-accent-deep/15 rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-2000"
      />
      <motion.div 
        style={{ y: yBlob3 }}
        className="absolute bottom-[-10%] left-[10%] w-[450px] h-[450px] bg-accent-red/5 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-4000"
      />
      
      {/* Subtle Starry texture or noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundParticles;
