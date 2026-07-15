import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const BackgroundParticles = () => {
  const canvasRef = useRef(null);
  const { scrollY } = useScroll();

  // Create smooth parallax transformations based on scroll position
  const yBlob1 = useTransform(scrollY, [0, 4000], [0, -350]);
  const yBlob2 = useTransform(scrollY, [0, 4000], [0, 250]);
  const yBlob3 = useTransform(scrollY, [0, 4000], [0, -200]);
  const scaleBlob1 = useTransform(scrollY, [0, 2000, 4000], [1, 1.15, 0.9]);
  const scaleBlob2 = useTransform(scrollY, [0, 2000, 4000], [1, 0.85, 1.1]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationFrameId;
    let particles = [];
    const mouse = { x: null, y: null, radius: 150 };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Responsive particle counts to avoid slowdowns on mobile
    const getParticleCount = () => {
      const width = window.innerWidth;
      if (width < 640) return 20; // mobile
      if (width < 1024) return 45; // tablet
      return 80; // desktop
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Slow, elegant drift speed
        this.vx = (Math.random() - 0.5) * 0.35;
        this.vy = (Math.random() - 0.5) * 0.35;
        this.radius = Math.random() * 1.5 + 0.6;
        this.alpha = Math.random() * 0.4 + 0.15;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(239, 68, 68, ${this.alpha})`;
        ctx.fill();
      }

      update() {
        // Wrap around boundaries
        if (this.x < 0) this.x = canvas.width;
        else if (this.x > canvas.width) this.x = 0;
        
        if (this.y < 0) this.y = canvas.height;
        else if (this.y > canvas.height) this.y = 0;

        this.x += this.vx;
        this.y += this.vy;

        // Interaction with mouse (push particles slightly away)
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            this.x -= (dx / distance) * force * 0.6;
            this.y -= (dy / distance) * force * 0.6;
          }
        }
      }
    }

    const init = () => {
      particles = [];
      const count = getParticleCount();
      for (let i = 0; i < count; i++) {
        particles.push(new Particle());
      }
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);

          if (distance < 110) {
            // Fades as distance increases
            const opacity = ((110 - distance) / 110) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(239, 68, 68, ${opacity})`;
            ctx.lineWidth = 0.55;
            ctx.stroke();
          }
        }

        // Draw connections from cursor
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const distance = Math.hypot(dx, dy);

          if (distance < mouse.radius) {
            const opacity = ((mouse.radius - distance) / mouse.radius) * 0.22;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(244, 63, 94, ${opacity})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.update();
        p.draw();
      });

      drawLines();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Initial load
    handleResize();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary">
      {/* Dark Base */}
      <div className="absolute inset-0 bg-[#000000]"></div>
      
      {/* Ambient Gradient Blobs - Strict Red Family with Scroll Parallax */}
      <motion.div 
        style={{ y: yBlob1, scale: scaleBlob1 }}
        className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-accent-crimson/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob"
      />
      <motion.div 
        style={{ y: yBlob2, scale: scaleBlob2 }}
        className="absolute top-[35%] right-[-10%] w-[600px] h-[600px] bg-accent-deep/15 rounded-full mix-blend-screen filter blur-[130px] animate-blob animation-delay-2000"
      />
      <motion.div 
        style={{ y: yBlob3 }}
        className="absolute bottom-[-10%] left-[10%] w-[450px] h-[450px] bg-accent-red/5 rounded-full mix-blend-screen filter blur-[110px] animate-blob animation-delay-4000"
      />
      
      {/* Interactive Constellation Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full block" />
      
      {/* Subtle Starry texture or noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.12] mix-blend-overlay"></div>
    </div>
  );
};

export default BackgroundParticles;
