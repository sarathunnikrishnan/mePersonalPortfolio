import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Jenkins',
    role: 'CEO at TechStart',
    content: "Working with Sarath was an absolute pleasure. The attention to detail and the level of polish delivered on our landing page was beyond our expectations. A true professional.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Product Manager',
    content: "I've worked with many developers, but rarely have I seen someone who understands both complex backend architecture and beautiful UI design. The app is fast and looks incredible.",
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Creative Director',
    content: "The animations and smooth scrolling implemented on our portfolio site brought our agency's work to life. It feels like an Apple product.",
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop'
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-foreground/5">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold"
          >
            Endorsements
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold"
          >
            Client <span className="text-gradient">Feedback</span>
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass-card p-8 md:p-12">
            <Quote className="absolute top-8 left-8 text-primary/20 w-16 h-16" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={20} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-xl md:text-2xl text-foreground font-medium mb-8 leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonials[currentIndex].avatar} 
                    alt={testimonials[currentIndex].name} 
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                  />
                  <div className="text-left">
                    <h5 className="font-bold font-display">{testimonials[currentIndex].name}</h5>
                    <span className="text-sm text-secondary">{testimonials[currentIndex].role}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
