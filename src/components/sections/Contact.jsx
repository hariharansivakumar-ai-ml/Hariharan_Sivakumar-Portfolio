import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../utils/data';
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, email) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      id: "email",
      icon: <FaEnvelope />,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "hover:text-accent-red border-accent-red/20 hover:border-accent-red/40 shadow-red-glow-hover"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "hover:text-accent-red border-accent-red/20 hover:border-accent-red/40 shadow-red-glow-hover"
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      value: "hariharan-sivakumar003",
      href: personalInfo.linkedin,
      color: "hover:text-accent-rose border-accent-rose/20 hover:border-accent-rose/40 shadow-red-glow-hover"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "hariharansivakumar-ai-ml",
      href: personalInfo.github,
      color: "hover:text-white border-white/10 hover:border-white/30 shadow-red-glow-hover"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: {
      y: -6,
      scale: 1.02,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Let's build something together" />

        <div className="max-w-4xl mx-auto mt-12">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.005 }}
            className="glass p-8 md:p-12 text-center rounded-3xl relative overflow-hidden group border border-white/5 hover:border-accent-red/20 shadow-red-glow shadow-red-glow-hover transition-all duration-300"
          >
            {/* Top red glow accent line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-red to-accent-rose opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Small Headphone Jack Plug in the Bottom-Left Corner */}
            <div className="absolute bottom-4 left-4 w-28 h-28 pointer-events-none z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500 overflow-visible hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                {/* Wire tail */}
                <path 
                  d="M 10,90 C 20,80 30,85 45,75 C 55,67 55,55 65,45" 
                  stroke="rgba(239, 68, 68, 0.18)" 
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <motion.path 
                  d="M 10,90 C 20,80 30,85 45,75 C 55,67 55,55 65,45" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 3px #ef4444)" }}
                />
                
                {/* Headphone Jack Plug body at (65, 45) pointing diagonally */}
                <g transform="translate(65,45) rotate(-45)">
                  {/* Metal tip */}
                  <path d="M 0,-2 L 8,-2 L 10,0 L 8,2 L 0,2 Z" fill="#9ca3af" />
                  {/* Insulating rings */}
                  <rect x="3" y="-2" width="1" height="4" fill="#111827" />
                  <rect x="6" y="-2" width="1" height="4" fill="#111827" />
                  {/* Metal sleeve */}
                  <rect x="10" y="-3" width="12" height="6" rx="1" fill="#374151" />
                  {/* Rubber strain relief */}
                  <path d="M 22,-2 L 28,-1 L 28,1 L 22,2 Z" fill="#1f2937" />
                </g>
              </svg>
            </div>

            {/* Small Coiled Headphone Wire in the Bottom-Right Corner */}
            <div className="absolute bottom-4 right-4 w-32 h-32 pointer-events-none z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-500 overflow-visible hidden md:block">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                {/* Background faint coiled cord */}
                <path 
                  d="M 90,10 C 90,40 80,60 60,60 C 40,60 30,45 40,30 C 50,15 70,20 65,45 C 60,70 30,85 10,90" 
                  stroke="rgba(239, 68, 68, 0.15)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                />
                {/* Glowing active wire line */}
                <motion.path 
                  d="M 90,10 C 90,40 80,60 60,60 C 40,60 30,45 40,30 C 50,15 70,20 65,45 C 60,70 30,85 10,90" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  style={{ filter: "drop-shadow(0 0 3px #ef4444)" }}
                />
                {/* Traveling laser pulse */}
                <motion.path 
                  d="M 90,10 C 90,40 80,60 60,60 C 40,60 30,45 40,30 C 50,15 70,20 65,45 C 60,70 30,85 10,90" 
                  stroke="#f43f5e" 
                  strokeWidth="2.5" 
                  strokeDasharray="6 20"
                  animate={{ strokeDashoffset: [0, -50] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  style={{ filter: "drop-shadow(0 0 5px #f43f5e)" }}
                />
              </svg>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 relative z-10">
              Interested in collaborating?
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto relative z-10">
              I'm always open to discussing web development projects, data analysis roles, or partnership opportunities. Feel free to reach out via any of the platforms below!
            </p>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 z-10 relative"
            >
              {contactLinks.map((link, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover="hover"
                  className={`flex items-center justify-between p-4 glass transition-all duration-300 group border border-white/5 hover:border-accent-red/20 ${link.color}`}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 overflow-hidden flex-1"
                    title={link.id === 'email' ? "Click to compose email" : ""}
                  >
                    <div className="p-3 bg-white/5 rounded-lg text-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 text-accent-red">
                      {link.icon}
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-sm text-gray-500 font-medium">{link.title}</p>
                      <p className="text-white text-sm md:text-base truncate w-full max-w-[200px] sm:max-w-xs">{link.value}</p>
                    </div>
                  </a>

                  {link.id === 'email' && (
                    <button
                      onClick={(e) => handleCopy(e, link.value)}
                      className="p-2 ml-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-gray-300 hover:text-white flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-red z-20"
                      title="Copy to clipboard"
                    >
                      {copied ? <FaCheck className="text-accent-red" /> : <FaCopy />}
                    </button>
                  )}
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 pt-8 border-t border-white/5 flex justify-center relative z-10">
              <a 
                href={personalInfo.resumeLink} 
                target="_blank" 
                rel="noreferrer" 
                className="px-8 py-4 bg-gradient-to-r from-accent-red to-accent-crimson text-white font-semibold rounded-xl shadow-[0_4px_20px_rgba(239,68,68,0.25)] hover:shadow-[0_4px_30px_rgba(239,68,68,0.45)] hover:-translate-y-0.5 active:scale-95 transition-all duration-300 text-center cursor-pointer"
              >
                Download / View Resume
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
