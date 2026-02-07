"use client";

import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap } from "lucide-react";

const certifications = [
  "Data Science and AI - NAVTTC",
  "Mastering Laravel Framework - BoardInfinity",
  "Web Designing and Development - PSDF",
  "Cosmic Coding with Symfony 7 - SymfonyCasts",
  "Laravel Protections - InfoSec Institute",
  "Front End Development Libraries - FreeCodeCamp",
  "Legacy JavaScript Algorithms - FreeCodeCamp",
];

const TestimonialsSection = () => {
  return (
    <section id="experience" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24 bg-secondary">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical text-[9px] tracking-[0.4em]">EXPERIENCE</span>
        <div className="divider-line-vertical h-16" />
      </motion.div>

      <div className="max-w-7xl mx-auto lg:pl-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Experience &
            <br />
            <span className="text-muted-foreground">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
            Professional journey and continuous learning in software engineering and AI.
          </p>
        </motion.div>

        {/* Experience & Education Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative p-6 rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-border"
          >
            <div className="mb-4">
              <Briefcase size={24} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Senior Laravel Developer</h3>
            <p className="text-sm text-muted-foreground mb-3">AlrightTech Pvt LTD</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">
              Feb 2022 - Present • Rawalpindi
            </p>
            <ul className="text-xs text-muted-foreground space-y-2">
              <li>• Led cross-functional team for scalable e-commerce platform</li>
              <li>• Built RESTful APIs supporting 150K daily active users</li>
              <li>• Optimized PostgreSQL reducing response time from 1.2s to 85ms</li>
              <li>• Mentored junior developers, increasing team productivity by 15%</li>
            </ul>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative p-6 rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-border"
          >
            <div className="mb-4">
              <GraduationCap size={24} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">BS Software Engineering</h3>
            <p className="text-sm text-muted-foreground mb-3">Arid Agriculture University</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground mb-4">
              2019 - 2023 • GPA: 3.69/4.0
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Comprehensive education in software development, algorithms, data structures, 
              and modern software engineering practices. Strong foundation in computer science fundamentals.
            </p>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-6 rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-border"
          >
            <div className="mb-4">
              <Award size={24} className="text-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Certifications</h3>
            <ul className="text-xs text-muted-foreground space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-foreground/60">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="mailto:eng.muhammadhasnain@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium text-sm hover:bg-foreground/90 transition-colors duration-300"
          >
            Let's Work Together
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

