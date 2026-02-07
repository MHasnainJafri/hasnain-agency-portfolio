"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-20 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        {/* 4-Column Layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12"
        >
          {/* Column 1 - Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-semibold text-foreground tracking-tight mb-4">
              Muhammad Hasnain
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed tracking-wide mb-3">
              CEO of <a href="https://anssol.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:underline">Anssol</a> • Full Stack Developer & AI Engineer specializing in Gen AI, Machine Learning, and scalable web applications.
            </p>
            <a 
              href="https://anssol.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide"
            >
              anssol.com →
            </a>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  n8n AI Workflows
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  Agentic AI Systems
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  RAG Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  AI Consulting
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3 - Quick Links */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:eng.muhammadhasnain@gmail.com" 
                  className="text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide"
                >
                  eng.muhammadhasnain@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923071606798" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs text-foreground/80 hover:text-foreground transition-colors duration-300 tracking-wide"
                >
                  <MessageCircle size={14} className="text-foreground" />
                  +92 307 1606798
                </a>
              </li>
              <li>
                <a 
                  href="https://linkedin.com/in/mhasnainjafri" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-300 tracking-wide font-medium"
                  style={{ color: '#0A66C2' }}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a 
                  href="https://www.upwork.com/freelancers/~017303523ed7fc4024" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-300 tracking-wide font-medium"
                  style={{ color: '#14A800' }}
                >
                  Upwork
                </a>
              </li>
              <li>
                <a 
                  href="https://www.fiverr.com/s/qDXV4dV" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-300 tracking-wide font-medium"
                  style={{ color: '#1DBF73' }}
                >
                  Fiverr
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/923071606798" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs transition-colors duration-300 tracking-wide font-medium"
                  style={{ color: '#25D366' }}
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              © 2025 Muhammad Hasnain. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300">
                Privacy
              </a>
              <a href="#terms" className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300">
                Terms
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

