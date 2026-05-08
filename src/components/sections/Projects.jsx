import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { projects } from '../../utils/data';
import { FaGithub, FaExternalLinkAlt, FaFolderOpen } from 'react-icons/fa';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Projects" subtitle="Some things I've built" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass p-8 flex flex-col h-full group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-between items-center mb-6">
                <FaFolderOpen className="text-4xl text-accent-pink" />
                <div className="flex gap-4 opacity-50 group-hover:opacity-100 transition-opacity hidden">
                  {/* Assuming we might add links later */}
                  <a href="#" className="hover:text-accent-blue text-xl"><FaGithub /></a>
                  <a href="#" className="hover:text-accent-blue text-xl"><FaExternalLinkAlt /></a>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent-blue transition-colors">
                {project.title}
              </h3>
              
              <div className="mt-4 flex-grow">
                <ul className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                     <li key={i} className="text-gray-400 text-sm leading-relaxed flex items-start gap-2">
                       <span className="text-accent-purple mt-1">▹</span>
                       {desc}
                     </li>
                  ))}
                </ul>
              </div>

              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="text-sm font-mono text-accent-blue">
                   {project.tech}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
