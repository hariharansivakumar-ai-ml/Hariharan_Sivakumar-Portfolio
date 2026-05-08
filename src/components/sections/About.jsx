import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../utils/data';
import { FaLaptopCode, FaChartBar, FaDatabase } from 'react-icons/fa';

const About = () => {
  const highlights = [
    {
      icon: <FaChartBar className="text-3xl text-accent-blue" />,
      title: "Data Visualization",
      desc: "Creating interactive dashboards with Power BI to uncover hidden trends."
    },
    {
      icon: <FaDatabase className="text-3xl text-accent-purple" />,
      title: "Data Analysis",
      desc: "Transforming and cleaning raw data using Python, Pandas, and NumPy."
    },
    {
      icon: <FaLaptopCode className="text-3xl text-accent-pink" />,
      title: "Web Development",
      desc: "Building responsive, modern applications with React.js and Tailwind CSS."
    }
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Me" subtitle="Know more about my journey" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Summary Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-blue/10 rounded-full filter blur-[50px]"></div>
            <h3 className="text-2xl font-bold text-white mb-4">Professional <span className="text-accent-blue">Summary</span></h3>
            <p className="text-gray-300 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4"
          >
             {highlights.map((item, idx) => (
                <div key={idx} className="glass p-6 hover:border-accent-blue/50 transition-colors group cursor-default">
                  <div className="mb-4 p-3 bg-white/5 inline-block rounded-lg group-hover:-translate-y-1 transition-transform">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
             ))}
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default About;
