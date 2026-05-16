import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';

import { PORTFOLIO_DATA } from '../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold"
          >
            Journey
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Experience & <span className="text-gradient">Education</span>
          </motion.h3>
        </div>

        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary via-accent to-transparent -translate-x-1/2 opacity-30"></div>

          <div className="space-y-12">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Center Icon */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center z-10 shadow-[0_0_15px_var(--primary-glow)]">
                  {exp.type === 'work' ? (
                    <Briefcase size={16} className="text-primary" />
                  ) : (
                    <GraduationCap size={16} className="text-accent" />
                  )}
                </div>

                {/* Content Box */}
                <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${
                  index % 2 === 0 ? 'md:pr-12 text-left md:text-right' : 'md:pl-12 text-left'
                }`}>
                  <div className="glass-card p-6 hover:-translate-y-1 transition-transform border border-primary/10 hover:border-primary/30 group">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
                      {exp.date}
                    </span>
                    <h4 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.title}
                    </h4>
                    <div className="text-sm font-medium text-foreground/70 mb-4">
                      {exp.organization}
                    </div>
                    <p className="text-sm text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
