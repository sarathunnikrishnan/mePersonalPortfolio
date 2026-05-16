import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      subject: formData.get('subject'),
      message: formData.get('message'),
      _captcha: "false" // Disable recaptcha for AJAX
    };
    
    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PORTFOLIO_DATA.contact.email}`, {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Oops! Something went wrong while submitting the form.");
      }
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16">
          
          {/* Left Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-5/12"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-primary mb-4 font-semibold">Get in Touch</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Let's Build Something <span className="text-gradient">Amazing</span> Together
            </h3>
            <p className="text-secondary mb-10 text-lg">
              Have a project in mind or just want to say hi? Feel free to reach out. 
              I'm always open to discussing new projects, creative ideas, or opportunities.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-secondary font-medium">Email</h4>
                  <a href={`mailto:${PORTFOLIO_DATA.contact.email}`} className="text-lg font-semibold hover:text-primary transition-colors">
                    {PORTFOLIO_DATA.contact.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-secondary font-medium">Location</h4>
                  <span className="text-lg font-semibold">
                    {PORTFOLIO_DATA.contact.location}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm text-secondary font-medium">Phone</h4>
                  <span className="text-lg font-semibold">
                    {PORTFOLIO_DATA.contact.phone}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12"
          >
            <form className="glass-card p-8 md:p-10 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground/80">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-transparent border border-[var(--glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-secondary placeholder:opacity-50"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-transparent border border-[var(--glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-secondary placeholder:opacity-50"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-transparent border border-[var(--glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-secondary placeholder:opacity-50"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-transparent border border-[var(--glass-border)] rounded-xl px-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-foreground placeholder:text-secondary placeholder:opacity-50 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting || isSuccess}
                className={`w-full py-4 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all ${
                  isSuccess 
                    ? 'bg-green-500 shadow-[0_10px_20px_-10px_rgba(34,197,94,0.5)] cursor-default' 
                    : 'bg-primary hover:bg-opacity-90 hover:-translate-y-1 shadow-[0_10px_20px_-10px_var(--primary)]'
                }`}
              >
                {isSuccess ? 'Message Sent Successfully!' : isSubmitting ? 'Sending...' : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
