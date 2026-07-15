import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../utils/data';
import { FaArrowRight } from 'react-icons/fa';
import heroVideoWebm from '../../assets/Hero Section.webm';
import heroVideoMp4 from '../../assets/Hero Section.mp4';

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(err => {
        console.log("Video autoPlay was prevented by browser policies:", err);
      });
    }
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Video with Dark Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          ref={videoRef}
          autoPlay 
          loop 
          muted 
          playsInline 
          className="w-full h-full object-cover opacity-50 filter brightness-[0.8] contrast-[1.15]"
        >
          <source src={heroVideoWebm} type="video/webm" />
          <source src={heroVideoMp4} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-primary/80 to-primary"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-left flex items-center justify-start min-h-[calc(100vh-80px)]">

        {/* Text Content */}
        <div className="max-w-3xl space-y-6 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-3 py-1 rounded-full bg-accent-red/10 text-accent-red border border-accent-red/20 text-sm font-semibold tracking-wide">
              Welcome to my portfolio
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold text-white tracking-tight"
          >
            Hi, I'm <br />
            <span className="text-gradient leading-tight">{personalInfo.name}</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl md:text-3xl text-gray-300 font-medium"
          >
            {personalInfo.role}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-400 max-w-xl"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 pt-4 w-full sm:w-auto"
          >
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-accent-red to-accent-crimson text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(239,68,68,0.25)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 group w-full sm:w-auto text-center"
            >
              View Resume 
              <FaArrowRight className="group-hover:translate-x-1.5 transition-transform duration-300" />
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-red/35 text-gray-200 hover:text-white font-semibold rounded-xl hover:-translate-y-0.5 active:scale-95 transition-all duration-300 w-full sm:w-auto text-center shadow-sm hover:shadow-[0_0_15px_rgba(239,68,68,0.1)]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
