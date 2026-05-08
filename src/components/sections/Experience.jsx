import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { experience } from '../../utils/data';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Experience" subtitle="My professional timeline" />

        <div className="relative border-l-2 border-accent-blue/30 ml-3 md:ml-6 mt-12 space-y-12">
          {experience.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[11px] top-2 h-5 w-5 rounded-full bg-accent-blue border-4 border-[#0a0a0a] shadow-[0_0_10px_#3b82f6]"></div>
              
              <div className="glass p-6 md:p-8 hover:border-accent-purple/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 border-b border-white/10 pb-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
                       <FaBriefcase className="text-accent-purple" /> {exp.role}
                    </h3>
                    <p className="text-lg text-accent-blue font-medium mt-1">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-4 py-2 rounded-full w-max">
                    <FaCalendarAlt /> {exp.duration}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-accent-pink mr-2 mt-1">▹</span>
                      <span>{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
