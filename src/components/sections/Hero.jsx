import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../../utils/data';
import { FaArrowRight } from 'react-icons/fa';
import profilePhoto from '../../assets/profile_photo.jpeg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >
            <span className="px-3 py-1 rounded-full bg-accent-blue/10 text-accent-blue border border-accent-blue/20 text-sm font-medium tracking-wide">
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
            className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4"
          >
            <a
              href={personalInfo.resumeLink}
              target="_blank"
              rel="noreferrer"
              className="glow-button w-full sm:w-auto"
            >
              <span className="glow-button-inner flex items-center justify-center gap-2">
                View Resume <FaArrowRight />
              </span>
            </a>

            <a
              href="#contact"
              className="px-8 py-3 rounded-lg border border-gray-600 hover:border-gray-400 text-gray-300 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
            >
              Contact Me
            </a>
          </motion.div>
        </div>

        {/* Visual Element / Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="relative w-64 h-64 lg:w-80 lg:h-80 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent-purple to-accent-blue rounded-full filter blur-3xl opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-4 border-white/20 bg-white/5 p-2 shadow-2xl flex items-center justify-center">
              <img src={profilePhoto} alt={personalInfo.name} style={{ imageRendering: 'high-quality' }} className="w-full h-full object-cover object-top rounded-full pointer-events-none" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
