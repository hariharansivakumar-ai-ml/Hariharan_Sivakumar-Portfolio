import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { projects } from '../../utils/data';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const Projects = () => {
  const cardVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: { 
      y: -8, 
      scale: 1.015,
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };

  return (
    <section id="projects" className="py-12 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="Some things I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true }}
              className="glass p-6 flex flex-col h-full group border border-white/5 hover:border-accent-red/20 shadow-red-glow shadow-red-glow-hover transition-all duration-300 relative overflow-hidden"
            >
              {/* Premium Top Glow Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent-red via-accent-rose to-accent-orange opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="flex justify-between items-center mb-5 relative">
                {/* Icon wrapper with solid BG to cover wire start */}
                <div className="z-10 pr-3 bg-[#0a0a0a]/90 rounded-md">
                  <FaFolderOpen className="text-3xl text-accent-red group-hover:scale-105 transition-transform duration-300" />
                </div>
                
                {/* Snaking Headphone Wire Connector */}
                <div className="absolute left-[28px] right-[60px] top-1/2 -translate-y-1/2 h-[24px] pointer-events-none z-0">
                  <svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 100 40">
                    {/* Background faint cord */}
                    <path 
                      d="M 0,20 Q 25,6 50,20 T 100,20" 
                      fill="none" 
                      stroke="rgba(239, 68, 68, 0.18)" 
                      strokeWidth="2" 
                    />
                    {/* Glowing active cord current */}
                    <motion.path 
                      d="M 0,20 Q 25,6 50,20 T 100,20" 
                      fill="none" 
                      stroke="#ef4444" 
                      strokeWidth="2" 
                      variants={{
                        initial: { pathLength: 0 },
                        hover: { 
                          pathLength: 1,
                          transition: { duration: 0.5, ease: "easeInOut" }
                        }
                      }}
                      style={{ filter: "drop-shadow(0 0 4px #ef4444)" }}
                    />
                    {/* Flowing laser pulse current on hover */}
                    <motion.path 
                      d="M 0,20 Q 25,6 50,20 T 100,20" 
                      fill="none" 
                      stroke="#f43f5e" 
                      strokeWidth="2.5" 
                      strokeDasharray="8 30"
                      variants={{
                        initial: { strokeDashoffset: 0, opacity: 0 },
                        hover: { 
                          strokeDashoffset: -100, 
                          opacity: 1,
                          transition: { 
                            strokeDashoffset: { repeat: Infinity, duration: 1.2, ease: "linear" },
                            opacity: { duration: 0.15 }
                          }
                        }
                      }}
                      style={{ filter: "drop-shadow(0 0 6px #f43f5e)" }}
                    />
                  </svg>
                </div>

                {/* Link wrapper with solid BG to cover wire end */}
                <div className="flex gap-3 items-center z-10 pl-3 bg-[#0a0a0a]/90 rounded-md">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-gray-400 hover:text-white transition-colors text-lg p-1 hover:bg-white/5 rounded-full"
                      title="View GitHub Repository"
                    >
                      <FaGithub />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-gray-400 hover:text-accent-red transition-colors text-lg p-1 hover:bg-white/5 rounded-full"
                      title="View Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent-red transition-colors">
                {project.title}
              </h3>
              
              <div className="mt-1 flex-grow">
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                     <li key={i} className="text-gray-400 text-xs md:text-sm leading-relaxed flex items-start gap-2">
                       <span className="text-accent-red mt-1 flex-shrink-0">▹</span>
                       <span>{desc}</span>
                     </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
                 {project.tech.split(',').map((techItem, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] font-mono font-medium text-accent-rose bg-accent-red/10 border border-accent-red/20 px-2 py-0.5 rounded-full"
                    >
                      {techItem.trim()}
                    </span>
                 ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
