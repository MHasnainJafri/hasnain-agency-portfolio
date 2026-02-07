"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-16 sm:py-20 lg:py-32 bg-foreground text-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            Ready to Transform Your
            <br />
            Business with AI?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            Let's discuss how AI-powered solutions can streamline your operations, 
            boost productivity, and drive growth. From concept to production, I deliver results.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:eng.muhammadhasnain@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-background text-foreground font-medium text-sm hover:bg-background/90 transition-colors duration-300 group"
            >
              Start a Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="https://anssol.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-background/30 text-background font-medium text-sm hover:bg-background/10 transition-colors duration-300"
            >
              Visit Anssol
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

