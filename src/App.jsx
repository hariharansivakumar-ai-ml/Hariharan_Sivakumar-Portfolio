import React from 'react';
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
  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-accent-blue/30 selection:text-white">
      {/* Background Graphic Effects */}
      <BackgroundParticles />
      
      {/* Global Navbar */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex flex-col gap-8 md:gap-16">
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
