import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../common/SectionTitle';
import { personalInfo } from '../../utils/data';
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = (e, email) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactLinks = [
    {
      id: "email",
      icon: <FaEnvelope />,
      title: "Email",
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: "hover:text-red-400 border-red-400/20"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`,
      color: "hover:text-green-400 border-green-400/20"
    },
    {
      icon: <FaLinkedinIn />,
      title: "LinkedIn",
      value: "hariharan-sivakumar003",
      href: personalInfo.linkedin,
      color: "hover:text-blue-500 border-blue-500/20"
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      value: "hariharansivakumar-ai-ml",
      href: personalInfo.github,
      color: "hover:text-gray-300 border-gray-300/20"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="Get In Touch" subtitle="Let's build something together" />

        <div className="max-w-4xl mx-auto mt-12">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass p-8 md:p-12 text-center rounded-3xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Interested in collaborating?
            </h3>
            <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
              I'm always open to discussing web development projects, data analysis roles, or partnership opportunities. Feel free to reach out via any of the platforms below!
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {contactLinks.map((link, idx) => (
                <div
                  key={idx}
                  className={`flex items-center justify-between p-4 glass hover:-translate-y-1 transition-all duration-300 group ${link.color}`}
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 overflow-hidden flex-1"
                    title={link.id === 'email' ? "Click to compose email" : ""}
                  >
                    <div className="p-3 bg-white/5 rounded-lg text-xl flex-shrink-0 group-hover:scale-110 transition-transform">
                      {link.icon}
                    </div>
                    <div className="text-left overflow-hidden">
                      <p className="text-sm text-gray-500 font-medium">{link.title}</p>
                      <p className="text-white text-sm md:text-base truncate w-full max-w-[200px] sm:max-w-xs">{link.value}</p>
                    </div>
                  </a>

                  {link.id === 'email' && (
                    <button
                      onClick={(e) => handleCopy(e, link.value)}
                      className="p-2 ml-2 bg-white/10 hover:bg-white/20 rounded-md transition-colors text-gray-300 hover:text-white flex-shrink-0 cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent-blue"
                      title="Copy to clipboard"
                    >
                      {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
                    </button>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex justify-center">
              <a href={personalInfo.resumeLink} target="_blank" rel="noreferrer" className="glow-button">
                <span className="glow-button-inner">Download / View Resume</span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
