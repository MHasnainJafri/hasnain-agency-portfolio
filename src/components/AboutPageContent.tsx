"use client";

import { motion } from "framer-motion";
import { Award, Users, Target, Lightbulb, Code, Brain, Database, Server } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Target,
    title: "Client-Focused",
    description: "Your success is our priority. We work closely with you to understand your needs and deliver solutions that exceed expectations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation-Driven",
    description: "We stay at the forefront of technology, constantly exploring new tools and methodologies to deliver cutting-edge solutions.",
  },
  {
    icon: Award,
    title: "Quality First",
    description: "Every line of code we write is crafted with care. We maintain high standards in development, testing, and deployment.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We believe in transparent communication and partnership. Your input shapes the final product at every stage.",
  },
];

const skills = [
  { icon: Brain, name: "Gen AI & ML", items: ["Python", "FastAPI", "NLP", "Computer Vision", "LangChain", "OpenAI"] },
  { icon: Server, name: "Backend", items: ["Laravel", "PHP", "Node.js", "Python", "RESTful APIs", "GraphQL"] },
  { icon: Code, name: "Frontend", items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js"] },
  { icon: Database, name: "DevOps & DB", items: ["Docker", "AWS", "MySQL", "PostgreSQL", "MongoDB", "Redis"] },
];

const timeline = [
  { year: "2020", title: "Started Professional Journey", description: "Began as a Full Stack Developer, mastering Laravel and PHP ecosystem." },
  { year: "2021", title: "Expanded to React & Modern JS", description: "Added React.js, Node.js, and modern JavaScript frameworks to the stack." },
  { year: "2022", title: "Founded Anssol", description: "Established Anssol to provide comprehensive software development services." },
  { year: "2023", title: "AI & ML Integration", description: "Pivoted to AI-first development, specializing in Gen AI and Machine Learning solutions." },
  { year: "2024", title: "AI Agents & SaaS", description: "Launched multiple AI SaaS products and autonomous agent development services." },
  { year: "2025", title: "Scaling & Growth", description: "Expanding team and services to meet growing demand for AI solutions." },
];

const AboutPageContent = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-24 sm:py-32 pt-32 sm:pt-40">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground tracking-tight mb-6">
            About Us
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            We're a team of passionate developers and AI enthusiasts dedicated to 
            building innovative solutions that transform businesses.
          </p>
        </motion.div>

        {/* Founder Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24"
        >
          <div className="relative">
            <img
              src="/portrait.jpg"
              alt="Muhammad Hasnain - Founder & CEO"
              className="w-full max-w-md mx-auto rounded-2xl grayscale"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Muhammad Hasnain
            </h2>
            <p className="text-lg font-medium mb-4" style={{ color: '#14A800' }}>
              Founder & CEO at Anssol
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey began as a passionate developer, and over time, I've evolved into 
                leading a team of talented individuals. Together, we've completed over 50+ projects, 
                delivering cutting-edge development solutions.
              </p>
              <p>
                As a leader, I focus on building a culture of teamwork and creativity. I guide my 
                team to think outside the box, take on challenges, and deliver impactful solutions 
                that exceed expectations.
              </p>
              <p>
                My work revolves around staying ahead of trends like PHP Laravel, MERN Stack, 
                Gen AI, Machine Learning, and Data Science, architecting scalable multi-tenant 
                applications using DDD and microservices.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <a
                href="https://linkedin.com/in/mhasnainjafri"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium hover:border-border transition-colors"
                style={{ color: '#0A66C2' }}
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/MHasnainJafri"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium text-foreground hover:border-border transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.upwork.com/freelancers/~017303523ed7fc4024"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium hover:border-border transition-colors"
                style={{ color: '#14A800' }}
              >
                Upwork
              </a>
            </div>
          </div>
        </motion.div>

        {/* Our Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4">
                  <value.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills & Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 border border-border/50"
              >
                <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4">
                  <skill.icon size={24} className="text-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{skill.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs px-2 py-1 rounded bg-background border border-border/50 text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Journey
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-border hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-xl p-6 border border-border/50 inline-block">
                      <span className="text-2xl font-bold" style={{ color: '#14A800' }}>{item.year}</span>
                      <h3 className="text-lg font-semibold text-foreground mt-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-foreground hidden md:block" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center bg-card rounded-2xl p-8 md:p-12 border border-border/50"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Ready to bring your ideas to life? We'd love to hear about your project 
            and discuss how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPageContent;
