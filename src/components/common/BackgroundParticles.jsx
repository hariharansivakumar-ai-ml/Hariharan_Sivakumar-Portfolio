import React from 'react';

const BackgroundParticles = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      
      {/* Ambient Gradient Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-accent-purple/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob"></div>
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-accent-blue/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-[-20%] left-[20%] w-96 h-96 bg-accent-pink/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      
      {/* Subtle Starry texture or noise could be added here */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundParticles;
