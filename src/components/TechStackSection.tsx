"use client";

import { motion } from "framer-motion";

const technologies = [
  { name: "Python", category: "AI/ML" },
  { name: "FastAPI", category: "AI/ML" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "LangChain", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "Laravel", category: "Backend" },
  { name: "PHP", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MySQL", category: "Backend" },
  { name: "React.js", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "AWS", category: "DevOps" },
  { name: "CI/CD", category: "DevOps" },
  { name: "Git", category: "DevOps" },
];

const TechStackSection = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24 bg-secondary">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical">Tech Stack</span>
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
            Technologies
            <br />
            <span className="text-muted-foreground">I Work With</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            A comprehensive toolkit spanning AI/ML, full-stack development, and DevOps for building production-ready solutions.
          </p>
        </motion.div>

        {/* Tech Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className="px-4 py-2 rounded-full border border-border/50 bg-card text-sm text-foreground hover:border-border hover:bg-secondary transition-all duration-300"
            >
              {tech.name}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSection;

