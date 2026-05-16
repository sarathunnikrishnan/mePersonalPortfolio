import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { PORTFOLIO_DATA } from '../constants';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Subtle parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth - 0.5) * 20;
      const y = (clientY / window.innerHeight - 0.5) * 20;
      
      gsap.to('.hero-parallax', {
        x,
        y,
        duration: 1,
        ease: 'power2.out'
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" ref={containerRef}>
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] hero-parallax"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[100px] hero-parallax"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/30"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium">Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-extrabold tracking-tight mb-8 leading-tight"
          >
            {PORTFOLIO_DATA.hero.firstName} <span className="text-gradient">{PORTFOLIO_DATA.hero.lastName}</span> <br className="hidden md:block" /> {PORTFOLIO_DATA.hero.role}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-secondary mb-12 max-w-2xl mx-auto"
          >
            {PORTFOLIO_DATA.hero.intro}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-medium flex items-center justify-center gap-2 hover:bg-opacity-90 hover:scale-105 transition-all shadow-[0_0_20px_var(--primary-glow)] group"
            >
              Explore Projects
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href={PORTFOLIO_DATA.hero.resumeLink}
              download={PORTFOLIO_DATA.hero.resumeLink.split('/').pop()}
              className="w-full sm:w-auto px-8 py-4 rounded-full glass-card text-foreground font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-all"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span className="text-xs uppercase tracking-widest text-secondary">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-secondary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
