
import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../constants';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left: Image/Visual */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-square md:aspect-[4/3] lg:aspect-square">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 z-10 mix-blend-overlay"></div>
              <img 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=1974&auto=format&fit=crop" 
                alt="Developer Profile" 
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold">About Me</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              {PORTFOLIO_DATA.about.title.split(' ').slice(0, -1).join(' ')} <span className="text-gradient">{PORTFOLIO_DATA.about.title.split(' ').pop()}</span>
            </h3>
            
            <p className="text-lg text-secondary mb-6 leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs[0]}
            </p>
            <p className="text-lg text-secondary mb-10 leading-relaxed">
              {PORTFOLIO_DATA.about.paragraphs[1]}
            </p>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {PORTFOLIO_DATA.about.stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div 
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass-card p-6 border border-primary/10 hover:border-primary/30 transition-colors"
                  >
                    <Icon className="text-primary mb-4" size={24} />
                    <div className="text-3xl font-display font-bold mb-1">{stat.value}</div>
                    <div className="text-sm text-secondary">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
