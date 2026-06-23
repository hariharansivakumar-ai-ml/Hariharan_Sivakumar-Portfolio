import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { education, certifications, additionalExpertise } from '../../utils/data';
import { FaGraduationCap, FaCertificate, FaTools, FaBrain, FaPython, FaCalendarAlt } from 'react-icons/fa';

const Education = () => {
  const containerRef = useRef(null);

  // Track scroll specifically for the left timeline
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 18
  });

  // Enrich the data with structured metadata for storytelling
  const timelineItems = [
    {
      title: education[0]?.degree || "Bachelor of Engineering",
      subtitle: education[0]?.institution || "Engineering College",
      date: education[0]?.duration || "2018 - 2022",
      icon: <FaGraduationCap className="text-lg text-white" />,
      tag: "Academic Foundation",
      desc: "Developed strong logical reasoning, thermodynamics models, mathematical frameworks, and analytical problem-solving skills before shifting focus to computer architectures."
    },
    {
      title: certifications[0] || "AI Programmer Certification",
      subtitle: "Specialized Training Portfolio",
      date: "Credentials Verified",
      icon: <FaBrain className="text-lg text-accent-rose" />,
      tag: "Intelligence Core",
      desc: "Deep-dived into machine learning algorithms, model training pipelines, neural network architecture, data science libraries, and responsive AI logic."
    },
    {
      title: certifications[1] || "Python Programming Certification",
      subtitle: "Software Architecture Hub",
      date: "Credentials Verified",
      icon: <FaPython className="text-lg text-white" />,
      tag: "Software Engineering",
      desc: "Acquired full stack and script-level mastery: algorithms, OOP concepts, automation processes, database interactions, and backend RESTful services."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    show: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 85, damping: 15 }
    },
    hover: {
      x: 6,
      transition: { duration: 0.2, ease: "easeOut" }
    }
  };

  const expertiseContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const expertiseVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 15 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 }
    },
    hover: {
      scale: 1.025,
      y: -4,
      transition: { duration: 0.25, ease: "easeOut" }
    }
  };

  return (
    <section id="education" className="py-24 bg-secondary/20 relative overflow-hidden">
      {/* Background ambient glowing details */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-accent-red/5 rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 bg-accent-rose/5 rounded-full blur-[120px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionTitle title="Education & Credentials" subtitle="Transition from mechanical logic to digital logic" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-start">
          
          {/* Left Column: Winding Transition Timeline */}
          <div ref={containerRef} className="lg:col-span-7 relative">
            
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pl-4">
              <div className="p-2.5 bg-accent-red/10 rounded-xl border border-accent-red/20 shadow-red-glow">
                <FaGraduationCap className="text-2xl text-accent-red" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Transition Pathway</h3>
                <p className="text-sm text-gray-400">My trajectory from physical to software engineering</p>
              </div>
            </div>

            {/* Timeline connection wires */}
            <div className="absolute left-[24px] md:left-[36px] top-[76px] bottom-6 w-[20px] pointer-events-none z-0">
              <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 20 100">
                {/* Winding background line */}
                <path 
                  d="M 10,0 C 18,25 2,75 10,100" 
                  fill="none" 
                  stroke="rgba(239, 68, 68, 0.08)" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                />
                {/* Active scrolling wire trace */}
                <motion.path 
                  d="M 10,0 C 18,25 2,75 10,100" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="2" 
                  vectorEffect="non-scaling-stroke"
                  style={{ pathLength }}
                  className="drop-shadow-[0_0_6px_#ef4444]"
                />
                {/* Flowing current dashes */}
                <motion.path 
                  d="M 10,0 C 18,25 2,75 10,100" 
                  fill="none" 
                  stroke="#f43f5e" 
                  strokeWidth="2.5" 
                  vectorEffect="non-scaling-stroke"
                  strokeDasharray="6 20"
                  animate={{ strokeDashoffset: [0, -100] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="drop-shadow-[0_0_8px_#f43f5e]"
                />
              </svg>
            </div>

            {/* Timeline nodes */}
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-8 relative z-10"
            >
              {timelineItems.map((item, idx) => (
                <div key={idx} className="relative pl-14 md:pl-20">
                  
                  {/* Glowing Node Circle containing the icon */}
                  <div className="absolute left-[4px] md:left-[16px] top-6 w-10 h-10 rounded-xl bg-cardBg/90 border border-accent-red/30 flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.2)] hover:border-accent-red transition-all duration-300 z-20 group-hover:scale-110">
                    {item.icon}
                  </div>

                  {/* Card Container */}
                  <motion.div
                    variants={itemVariants}
                    whileHover="hover"
                    className="glass p-6 md:p-8 hover:border-accent-red/25 shadow-red-glow shadow-red-glow-hover transition-all duration-300 relative overflow-hidden group cursor-pointer"
                  >
                    {/* Glowing Top Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-accent-red via-accent-rose to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Background Sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red/3 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out z-0 pointer-events-none" />

                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-extrabold text-white group-hover:text-accent-red transition-colors duration-300">
                          {item.title}
                        </h4>
                        <p className="text-accent-rose text-sm font-semibold mt-1">{item.subtitle}</p>
                      </div>
                      <span className="text-[10px] uppercase tracking-widest font-mono px-3 py-1 rounded-full border bg-accent-red/5 text-accent-rose border-accent-red/20 shadow-red-glow z-10">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4 relative z-10">
                      {item.desc}
                    </p>

                    <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 py-1.5 px-3 rounded-md w-max font-mono relative z-10 border border-white/5">
                      <FaCalendarAlt className="text-accent-red" /> {item.date}
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: High-tech Expertise Nodes */}
          <div className="lg:col-span-5">
            {/* Header */}
            <div className="flex items-center gap-3 mb-8 pl-2">
              <div className="p-2.5 bg-accent-red/10 rounded-xl border border-accent-red/20 shadow-red-glow">
                <FaTools className="text-2xl text-accent-red" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Additional Expertise</h3>
                <p className="text-sm text-gray-400">Core system practices and frameworks</p>
              </div>
            </div>

            {/* Grid of expertise tags */}
            <motion.div 
              variants={expertiseContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4"
            >
              {additionalExpertise.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={expertiseVariants}
                  whileHover="hover"
                  className="glass p-4 rounded-xl border border-white/5 hover:border-accent-red/20 shadow-red-glow shadow-red-glow-hover transition-all duration-300 flex items-center justify-between group cursor-default relative overflow-hidden z-10"
                >
                  {/* Glowing Top Line */}
                  <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-accent-red to-accent-rose opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Background Sweep */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent-red/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out z-0 pointer-events-none" />

                  <div className="flex items-center gap-3 relative z-10">
                    <span className="h-2 w-2 rounded-full bg-accent-red group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_#ef4444] animate-pulse flex-shrink-0" />
                    <span className="text-gray-300 text-sm font-semibold group-hover:text-white transition-colors duration-300">
                      {item}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-accent-rose/40 group-hover:text-accent-red group-hover:translate-x-0.5 transition-all duration-300 relative z-10 flex-shrink-0">
                    // node
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;
