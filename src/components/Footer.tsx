
import { Github, Linkedin, ArrowUp } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-[var(--glass-border)] py-12 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex flex-col items-center md:items-start gap-2">
          <a href="#home" className="text-2xl font-display font-bold tracking-tighter flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-white text-sm">
              {PORTFOLIO_DATA.hero.firstName.substring(0,2).toUpperCase()}
            </span>
            {PORTFOLIO_DATA.hero.firstName}
          </a>
          <p className="text-sm text-secondary">
            Building digital experiences that inspire.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a href={PORTFOLIO_DATA.social.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-secondary hover:text-primary hover:-translate-y-1 transition-all">
            <Github size={18} />
          </a>
          <a href={PORTFOLIO_DATA.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-secondary hover:text-primary hover:-translate-y-1 transition-all">
            <Linkedin size={18} />
          </a>
        </div>

        <div className="flex items-center gap-6">
          <p className="text-sm text-secondary">
            &copy; {new Date().getFullYear()} {PORTFOLIO_DATA.hero.firstName}. All rights reserved.
          </p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
