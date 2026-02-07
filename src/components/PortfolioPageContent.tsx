"use client";

import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Restoliv - Multi-Vendor Restaurant Platform",
    description: "Multi-vendor restaurant platform with Laravel backend, Next.js web app, and three Flutter mobile apps for deliveryman, user, and vendor. Complete food ordering and delivery ecosystem.",
    tags: ["Laravel", "Next.js", "Flutter", "Multi-vendor"],
    image: "/restoliv.png",
    link: "https://www.restoliv.fr/",
  },
  {
    title: "Samanta - Video Interpretation Platform",
    description: "Multi-platform app connecting users with professional interpreters for real-time video calls using WebSockets and third-party translation APIs.",
    tags: ["Laravel", "Flutter", "WebSockets", "APIs"],
    image: "/samanta.png",
    link: "https://www.samantapp.com/",
  },
  {
    title: "Blogger Prompt",
    description: "A Generative AI Business Assistant. A cutting-edge tool designed to revolutionize the way you interact with information. Tailored to meet the unique needs of your business, it seamlessly integrates with your data, PDFs, DOCs, providing intelligent and contextually relevant responses.",
    tags: ["Generative AI", "RAG", "Business Assistant", "NLP"],
    image: "/boggler prompt.png",
    link: null,
  },
  {
    title: "Blogger Assist",
    description: "A Generative AI Meeting Assistant. Boggler Assist is a Meeting Assistant that utilizes advanced speech recognition technology for real-time transcription during meetings. It transforms into including executive summaries, detailed notes, action items, open ideas and email recaps.",
    tags: ["Speech Recognition", "AI", "Meeting Assistant", "Transcription"],
    image: "/boggler assist.jpg",
    link: null,
  },
  {
    title: "Me+ai ChatBot",
    description: "Introducing Me+ai Chatbot – your personalized mobile companion with Google PALM integration. This app communicates based on your interests, knowledge, and documents, offering push notifications and tailored suggestions.",
    tags: ["Google PALM", "Mobile App", "Chatbot", "Personalization"],
    image: "/mi_ai chatbot.jpg",
    link: null,
  },
  {
    title: "Scribe – AI Healthcare Assistant",
    description: "AI-powered solution transcribing doctor-patient conversations into structured SOAP notes with speaker identification, reducing documentation time by 60%.",
    tags: ["Python", "NLP", "Laravel", "Speech Recognition"],
    image: "/scribe.png",
    link: null,
  },
];


const categories = ["All", "AI Solutions", "Healthcare AI", "Web Development"];

const PortfolioPageContent = () => {
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
            Our Portfolio
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Explore our collection of AI-powered solutions, web applications, and 
            software products that have helped businesses transform and grow.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-foreground text-background"
                  : "bg-card border border-border/50 text-muted-foreground hover:text-foreground hover:border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-border transition-all group"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-medium px-2 py-1 rounded bg-background border border-border/50 text-muted-foreground">
                  {project.tags[0]}
                </span>
                <h3 className="text-xl font-semibold text-foreground mt-3 mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-foreground/70 transition-colors"
                  >
                    <span>Visit Project</span>
                    <ExternalLink size={14} />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <p className="text-muted-foreground text-sm">Projects Completed</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">30+</div>
              <p className="text-muted-foreground text-sm">Happy Clients</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">15+</div>
              <p className="text-muted-foreground text-sm">AI Solutions</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-foreground mb-2">4+</div>
              <p className="text-muted-foreground text-sm">Years Experience</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help bring your ideas to life with our expertise 
            in AI and software development.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPageContent;
