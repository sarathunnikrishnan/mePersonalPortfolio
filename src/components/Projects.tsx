import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

import { PORTFOLIO_DATA } from '../constants';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = PORTFOLIO_DATA.projects.items.filter(
    proj => activeCategory === 'All' || proj.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 relative bg-foreground/5">
      <div className="container mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold"
            >
              Portfolio
            </motion.h2>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-display font-bold"
            >
              Featured <span className="text-gradient">Work</span>
            </motion.h3>
          </div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-2"
          >
            {PORTFOLIO_DATA.projects.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-[0_0_10px_var(--primary-glow)]' 
                    : 'glass hover:bg-primary/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group relative glass-card overflow-hidden"
              >
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                    <div className="flex gap-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <a href={project.liveLink} className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:scale-110 transition-transform">
                        <ExternalLink size={18} />
                      </a>
                      <a href={project.githubLink} className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform">
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="text-xs font-semibold text-primary mb-2 uppercase tracking-wider">
                    {project.category}
                  </div>
                  <h4 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-secondary mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="text-xs font-medium px-3 py-1 rounded-full bg-foreground/5 text-foreground/80">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
