import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { education, certifications } from '../../utils/data';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Education & Certifications" subtitle="Academic background" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaGraduationCap className="text-accent-blue" />
              Degree
            </h3>
            <div className="space-y-6">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="glass p-6 hover:border-accent-blue/30 transition-colors"
                >
                  <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                  <p className="text-accent-pink mt-1 font-medium">{edu.institution}</p>
                  <p className="text-sm text-gray-400 mt-3 bg-white/5 py-1 px-3 rounded-full inline-block">
                    {edu.duration}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <FaCertificate className="text-accent-purple" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform"
                >
                  <div className="p-2 bg-accent-purple/10 rounded-lg">
                    <FaCertificate className="text-accent-purple" />
                  </div>
                  <span className="text-gray-200 font-medium">{cert}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
