import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useSpring } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { techSkills } from '../../utils/data';

// Individual 3D Tilt Skill Card Component
const SkillCard = ({ skill }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Springs for smooth fluid 3D physics movement
  const rotateX = useSpring(0, { stiffness: 120, damping: 18 });
  const rotateY = useSpring(0, { stiffness: 120, damping: 18 });
  const spotlightX = useSpring(0, { stiffness: 150, damping: 20 });
  const spotlightY = useSpring(0, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Maximum tilt angle of 10 degrees
    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  useEffect(() => {
    if (isHovered) {
      rotateX.set(tilt.x);
      rotateY.set(tilt.y);
      spotlightX.set(mousePos.x);
      spotlightY.set(mousePos.y);
    } else {
      rotateX.set(0);
      rotateY.set(0);
    }
  }, [tilt, isHovered, rotateX, rotateY, spotlightX, spotlightY, mousePos]);

  const Icon = skill.icon;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      layout
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
      }}
      className="glass p-5 flex flex-col items-center justify-center gap-3 text-center group cursor-pointer hover:border-accent-red/30 shadow-red-glow shadow-red-glow-hover transition-all duration-300 bg-cardBg/25 relative overflow-hidden min-h-[140px]"
    >
      {/* Top red glow accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent-red to-accent-rose opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Interactive spotlight glow following mouse */}
      <motion.div
        style={{
          left: spotlightX,
          top: spotlightY,
          background: 'radial-gradient(circle 90px at center, rgba(239, 68, 68, 0.16), transparent 75%)',
          transform: 'translate(-50%, -50%)',
        }}
        className="absolute w-44 h-44 pointer-events-none rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />

      {/* Floating 3D Icon */}
      <motion.div 
        style={{ transform: 'translateZ(30px)' }}
        className="relative z-10 transition-transform duration-300"
      >
        <Icon className={`text-4xl ${skill.color} group-hover:rotate-6 group-hover:scale-105 transition-transform duration-300`} />
      </motion.div>

      {/* Floating 3D Text */}
      <motion.span 
        style={{ transform: 'translateZ(20px)' }}
        className="text-gray-300 font-semibold group-hover:text-white transition-colors text-sm relative z-10"
      >
        {skill.name}
      </motion.span>

      {/* Slide-Up Skill Level/Proficiency panel */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, height: 0, y: 10 }}
            animate={{ opacity: 1, height: 'auto', y: 0 }}
            exit={{ opacity: 0, height: 0, y: 10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="w-full mt-2 overflow-hidden flex flex-col items-center gap-1.5 relative z-10"
          >
            <div className="flex justify-between w-full text-[10px] text-gray-400 font-mono px-1">
              <span>{skill.status}</span>
              <span>{skill.level}%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="h-full bg-gradient-to-r from-accent-red to-accent-rose shadow-[0_0_6px_rgba(239,68,68,0.5)] rounded-full"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  // Categories list starting with "All"
  const categories = ['All', ...new Set(techSkills.map(s => s.category))];

  // Filtering skill cards based on selected tab
  const filteredSkills = activeCategory === 'All' 
    ? techSkills 
    : techSkills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Technical Skills" subtitle="My core competencies" />

        {/* Tab Filters Navigation Bar */}
        <div className="flex justify-center mb-12 relative z-20">
          <div className="flex space-x-1 bg-secondary/80 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md overflow-x-auto max-w-full no-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-4 py-2 text-xs md:text-sm font-semibold rounded-xl whitespace-nowrap transition-colors duration-300 z-10 focus:outline-none ${
                  activeCategory === category ? 'text-white' : 'text-gray-400 hover:text-white'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-accent-red to-accent-crimson rounded-xl -z-10 shadow-[0_0_12px_rgba(239,68,68,0.3)]"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skill Grid with AnimatePresence */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 relative min-h-[300px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 15 }}
                transition={{ type: 'spring', stiffness: 100, damping: 15 }}
                className="w-full"
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
