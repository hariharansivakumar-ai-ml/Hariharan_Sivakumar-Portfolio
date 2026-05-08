import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { techSkills } from '../../utils/data';

const Skills = () => {
  // Grouping skills by category
  const categories = [...new Set(techSkills.map(s => s.category))];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="My core competencies" />

        <div className="flex flex-col gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className="relative">
              <h3 className="text-xl font-medium text-white mb-6 border-l-4 border-accent-purple pl-4">
                {category}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {techSkills.filter(s => s.category === category).map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="glass p-4 flex flex-col items-center justify-center gap-3 text-center group cursor-pointer hover:border-white/30"
                    >
                      <Icon className={`text-4xl ${skill.color} group-hover:animate-pulse`} />
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
