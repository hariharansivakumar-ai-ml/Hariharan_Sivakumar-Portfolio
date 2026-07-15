import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../utils/data';
import { FaLaptopCode, FaServer, FaDatabase, FaRocket } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaLaptopCode className="text-3xl text-accent-red" />,
      title: "Frontend Development",
      desc: "Building highly interactive, responsive interfaces using React.js and Tailwind CSS."
    },
    {
      icon: <FaServer className="text-3xl text-white" />,
      title: "Backend & APIs",
      desc: "Developing scalable backend services, REST APIs, and authentication workflows using Python and FastAPI."
    },
    {
      icon: <FaDatabase className="text-3xl text-accent-rose" />,
      title: "Databases & CMS",
      desc: "Managing PostgreSQL database schemas, Firebase authentication, and headless Sanity CMS content structures."
    },
    {
      icon: <FaRocket className="text-3xl text-white" />,
      title: "Cloud & Deployment",
      desc: "Optimizing cloud media storage via Cloudinary and hosting fast, production builds on Vercel."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    },
    hover: {
      y: -6,
      scale: 1.015,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-12 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Know more about my journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Summary Text Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.005 }}
            className="glass p-8 relative overflow-hidden group border border-white/5 hover:border-accent-red/20 shadow-red-glow shadow-red-glow-hover transition-all duration-300"
          >
            {/* Top red glow accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-red to-accent-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-red/10 rounded-full filter blur-[50px] pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4">Professional <span className="text-accent-red">Summary</span></h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* Highlights Grid with Connecting Cable Background */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4 relative"
          >
            {/* Headphone Wire connecting the cards in sequence */}
            <div className="absolute inset-0 pointer-events-none z-0 hidden sm:block p-8">
              <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                {/* Winding cord background path */}
                <path 
                  d="M 25,25 Q 50,0 75,25 T 25,75 Q 50,100 75,75" 
                  fill="none" 
                  stroke="rgba(239, 68, 68, 0.08)" 
                  strokeWidth="2.5" 
                />
                {/* Active glowing path */}
                <motion.path 
                  d="M 25,25 Q 50,0 75,25 T 25,75 Q 50,100 75,75" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2.5" 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut", delay: 0.5 }}
                  style={{ filter: "drop-shadow(0 0 3px #ef4444)" }}
                />
              </svg>
            </div>

            {highlights.map((item, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover="hover"
                className="glass p-6 hover:border-accent-red/20 shadow-red-glow shadow-red-glow-hover transition-all duration-300 group cursor-default relative overflow-hidden z-10 bg-cardBg/90"
              >
                {/* Glowing Top line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent-red to-accent-rose opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Background light sweep */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0 pointer-events-none" />

                <div className="mb-4 p-3 bg-white/5 inline-block rounded-lg group-hover:-translate-y-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 relative z-10">
                  {item.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-2 relative z-10 group-hover:text-accent-red transition-colors">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
