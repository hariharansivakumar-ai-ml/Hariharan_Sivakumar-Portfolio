import React from 'react';
import { personalInfo } from '../../utils/data';

const Footer = () => {
  return (
    <footer className="footer-gradient border-t border-white/10 mt-12 py-8 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
        
        <div>
          <p className="text-gray-400 font-medium tracking-wide">
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4">
          {/* Quick social links or back to top */}
          <a href="#home" className="text-gray-500 hover:text-accent-red transition-colors text-sm font-semibold">
            Back to Top &uarr;
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
