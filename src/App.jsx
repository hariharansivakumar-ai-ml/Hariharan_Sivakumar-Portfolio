import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/common/Navbar';
import BackgroundParticles from './components/common/BackgroundParticles';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import './index.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-accent-red/30 selection:text-white bg-primary">
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-accent-red via-accent-rose to-accent-orange z-[100] origin-[0%]"
        style={{ scaleX }}
      />

      {/* Background Graphic Effects */}
      <BackgroundParticles />
      
      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex flex-col">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
