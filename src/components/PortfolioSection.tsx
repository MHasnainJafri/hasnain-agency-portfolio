"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
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
    title: "Restoliv - Multi-Vendor Restaurant Platform",
    description: "Multi-vendor restaurant platform with Laravel backend, Next.js web app, and three Flutter mobile apps for deliveryman, user, and vendor. Complete food ordering and delivery ecosystem.",
    tags: ["Laravel", "Next.js", "Flutter", "Multi-vendor"],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    link: "https://www.restoliv.fr/",
  },
  {
    title: "Scribe – AI Healthcare Assistant",
    description: "AI-powered solution transcribing doctor-patient conversations into structured SOAP notes with speaker identification, reducing documentation time by 60%.",
    tags: ["Python", "NLP", "Laravel", "Speech Recognition"],
    image: "/scribe.png",
    link: null,
  },
  {
    title: "SmartEye - Vehicle Tracking & Analytics",
    description: "Real-time vehicle detection system using CARLA simulator for synthetic data and custom ResNet-based computer vision model for traffic monitoring.",
    tags: ["Computer Vision", "ResNet", "CARLA", "Python"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
    link: null,
  },
  {
    title: "Samanta - Video Interpretation Platform",
    description: "Multi-platform app connecting users with professional interpreters for real-time video calls using WebSockets and third-party translation APIs.",
    tags: ["Laravel", "Flutter", "WebSockets", "APIs"],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    link: null,
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-4"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical text-[9px] tracking-[0.4em]">PORTFOLIO</span>
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
            Featured
            <br />
            <span className="text-muted-foreground">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-sm md:text-base leading-relaxed">
            A selection of production AI systems I've built for clients across industries.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-300 hover:border-border"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] uppercase tracking-wider px-2 py-1 rounded border border-border/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link Button */}
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
      </div>
    </section>
  );
};

export default PortfolioSection;

