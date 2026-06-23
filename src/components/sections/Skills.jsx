import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { techSkills } from '../../utils/data';

const Skills = () => {
  // Grouping skills by category
  const categories = [...new Set(techSkills.map(s => s.category))];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 12 }
    },
    hover: {
      scale: 1.06,
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="My core competencies" />

        <div className="flex flex-col gap-12">
          {categories.map((category, idx) => (
            <div key={idx} className="relative">
              <h3 className="text-xl font-semibold text-white mb-6 border-l-4 border-accent-red pl-4">
                {category}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
              >
                {techSkills.filter(s => s.category === category).map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover="hover"
                      className="glass p-4 flex flex-col items-center justify-center gap-3 text-center group cursor-pointer hover:border-accent-red/20 shadow-red-glow shadow-red-glow-hover transition-all duration-300 bg-cardBg/30"
                    >
                      <Icon className={`text-4xl ${skill.color} group-hover:rotate-6 group-hover:scale-110 transition-transform duration-300`} />
                      <span className="text-gray-300 font-medium group-hover:text-white transition-colors text-sm">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
