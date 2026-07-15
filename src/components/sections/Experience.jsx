import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { experience } from '../../utils/data';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  const containerRef = useRef(null);
  
  // Track scroll specifically within the experience timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth out the scroll progression
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20
  });

  return (
    <section id="experience" className="py-12 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="My professional timeline" />

        {/* Timeline Container */}
        <div ref={containerRef} className="relative ml-3 md:ml-6 mt-12 space-y-12 min-h-[400px]">
          
          {/* Glowing Wavy Headphone Wire Timeline */}
          <div className="absolute left-[3px] md:left-[15px] top-0 bottom-0 w-[24px] pointer-events-none z-0">
            <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 24 100">
              {/* Background cord trace */}
              <path 
                d="M 12,0 C 24,25 0,75 12,100" 
                fill="none" 
                stroke="rgba(239, 68, 68, 0.1)" 
                strokeWidth="2.5" 
                vectorEffect="non-scaling-stroke"
              />
              {/* Glowing active cord tracing path */}
              <motion.path 
                d="M 12,0 C 24,25 0,75 12,100" 
                fill="none" 
                stroke="#ef4444" 
                strokeWidth="2.5" 
                vectorEffect="non-scaling-stroke"
                style={{ pathLength }}
                className="drop-shadow-[0_0_6px_#ef4444]"
              />
            </svg>
          </div>

          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot centered at 15px (mobile) or 27px (desktop) */}
              <div className="absolute left-[5px] md:left-[17px] top-[14px] h-4 w-4 rounded-full bg-accent-red border-[3px] border-primary shadow-[0_0_8px_#ef4444] z-10 animate-pulse"></div>
              
              <div className="glass p-6 md:p-8 hover:border-accent-red/30 shadow-red-glow-hover transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                       <FaBriefcase className="text-accent-red" /> {exp.role}
                    </h3>
                    <p className="text-lg text-accent-rose font-semibold mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full w-max">
                    <FaCalendarAlt className="text-accent-red" /> {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-accent-red mr-2 mt-1">▹</span>
                      <span className="leading-relaxed text-sm md:text-base">{task}</span>
                    </li>
                  ))}
                </ul>

                {exp.skills && (
                  <div className="mt-6 pt-4 border-t border-white/5 flex flex-wrap gap-2 items-center">
                    <span className="text-xs font-semibold text-gray-400 mr-1">Key Technologies:</span>
                    {exp.skills.split(',').map((techItem, tIdx) => (
                      <span 
                        key={tIdx} 
                        className="text-[10px] font-mono font-medium text-accent-rose bg-accent-red/10 border border-accent-red/20 px-2 py-0.5 rounded-full"
                      >
                        {techItem.trim()}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
