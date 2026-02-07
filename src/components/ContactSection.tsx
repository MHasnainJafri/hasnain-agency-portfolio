"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical">Contact</span>
        <div className="divider-line-vertical h-16" />
      </motion.div>

      <div className="max-w-7xl mx-auto lg:pl-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Let's Build
            <br />
            <span className="text-muted-foreground">Something Great</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Ready to transform your ideas into reality? Get in touch and let's discuss your next project.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:eng.muhammadhasnain@gmail.com"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center group-hover:border-border transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Email</p>
                    <p className="text-sm text-foreground">eng.muhammadhasnain@gmail.com</p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/923071606798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center group-hover:border-border transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Phone / WhatsApp</p>
                    <p className="text-sm text-foreground">+92 307 1606798</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-muted-foreground">
                  <div className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">Location</p>
                    <p className="text-sm text-foreground">Rawalpindi, Punjab, Pakistan</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">Connect</h4>
              <div className="flex flex-wrap items-center gap-3">
                <a 
                  href="https://github.com/MHasnainJafri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center hover:border-border transition-all"
                >
                  <Github size={20} className="text-muted-foreground" />
                </a>
                <a 
                  href="https://linkedin.com/in/mhasnainjafri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg border border-border/50 flex items-center justify-center hover:border-border transition-all"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="#0A66C2">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://www.upwork.com/freelancers/~017303523ed7fc4024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 h-12 rounded-lg border border-border/50 flex items-center justify-center text-sm font-medium hover:border-border transition-all"
                  style={{ color: '#14A800' }}
                >
                  Upwork
                </a>
                <a 
                  href="https://www.fiverr.com/s/qDXV4dV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 h-12 rounded-lg border border-border/50 flex items-center justify-center text-sm font-medium hover:border-border transition-all"
                  style={{ color: '#1DBF73' }}
                >
                  Fiverr
                </a>
                <a 
                  href="https://anssol.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 h-12 rounded-lg border border-border/50 flex items-center justify-center text-sm text-muted-foreground hover:text-foreground hover:border-border transition-all"
                >
                  anssol.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-border transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-border transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-border transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase tracking-wider text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-card text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-border transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors duration-300"
              >
                <Send size={16} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

