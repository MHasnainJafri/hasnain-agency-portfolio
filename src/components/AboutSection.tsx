"use client";

import { motion } from "framer-motion";
import { Code, Database, Server, Brain } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical text-[9px] tracking-[0.4em]">ABOUT</span>
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
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            <span className="text-foreground">I am Muhammad Hasnain,</span>
            <br />
            <span className="text-foreground">an </span>
            <span className="text-primary" style={{ color: '#14A800' }}>AI & Full Stack Developer</span>
            <span className="text-foreground"> and</span>
            <br />
            <span className="text-foreground">CEO at </span>
            <a href="https://anssol.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" style={{ color: '#14A800' }}>Anssol</a>
          </h2>
          
          <div className="max-w-3xl space-y-4 text-sm md:text-base leading-relaxed">
            <div>
              <h3 className="text-foreground font-semibold mb-2">About Muhammad Hasnain:</h3>
              <p className="text-muted-foreground">
                My journey began as a passionate developer, and over time, I've evolved into leading a team of talented individuals. Together, we've completed over 50+ projects, delivering cutting-edge Development solutions, like website development, mobile app development, AI SaaS Development, AI Agents, and Custom AI Bots that drive innovation and transformation.
              </p>
            </div>
            
            <p className="text-muted-foreground">
              As a leader, I focus on building a culture of teamwork and creativity. I guide my team to think outside the box, take on challenges, and deliver impactful driven solutions that exceed expectations.
            </p>
            
            <p className="text-muted-foreground">
              My work revolves around staying ahead of trends like PHP Laravel, MERN Stack, Full stack, Javascript frontend, & Backend ensuring that every project makes a difference. I specialize in Gen AI, Machine Learning, and Data Science, architecting scalable multi-tenant applications using DDD and microservices.
            </p>
            
            <p className="text-muted-foreground">
              Let's turn your vision into reality! If you're seeking professionals who understand technology inside out, let's connect and discuss over a virtual cup of tea.
            </p>
          </div>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Skill 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="service-card"
          >
            <div className="w-12 h-12 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center mb-4">
              <Brain size={22} className="text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-foreground font-medium mb-2">Gen AI & ML</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Python, FastAPI, NLP, Computer Vision, Data Science, and AI-powered solutions.
            </p>
          </motion.div>

          {/* Skill 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="service-card"
          >
            <div className="w-12 h-12 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center mb-4">
              <Server size={22} className="text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-foreground font-medium mb-2">Backend & APIs</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Laravel, PHP (4 Years), Python, FastAPI, RESTful APIs, OAuth, Microservices.
            </p>
          </motion.div>

          {/* Skill 3 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="service-card"
          >
            <div className="w-12 h-12 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center mb-4">
              <Code size={22} className="text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-foreground font-medium mb-2">Front-End</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              React.js (Hooks, Redux), TypeScript, Next.js, JavaScript ES6+.
            </p>
          </motion.div>

          {/* Skill 4 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="service-card"
          >
            <div className="w-12 h-12 rounded-lg border border-[hsl(var(--border))] flex items-center justify-center mb-4">
              <Database size={22} className="text-foreground" strokeWidth={1.5} />
            </div>
            <h3 className="text-foreground font-medium mb-2">DevOps & DB</h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Docker, CI/CD, AWS, MySQL, PostgreSQL, Git, GitHub, Kubernetes.
            </p>
          </motion.div>
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 pt-12 border-t border-[hsl(var(--border))]"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">4+</span>
              <p className="text-stat-label mt-2">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">3.69</span>
              <p className="text-stat-label mt-2">GPA (BS Software Eng)</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">8+</span>
              <p className="text-stat-label mt-2">Certifications</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">150K</span>
              <p className="text-stat-label mt-2">Daily Users Supported</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

