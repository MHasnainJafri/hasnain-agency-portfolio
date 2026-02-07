"use client";

import { motion } from "framer-motion";
import { ChevronRight, CheckCircle } from "lucide-react";

const services = [
  {
    title: "n8n AI Workflows & Business Automation",
    description: "End-to-end n8n automation that connects APIs, CRMs, and internal tools into agentic pipelines with deterministic workflows and error handling.",
    features: ["n8n workflow design and orchestration", "API integrations and data synchronization", "CRM automation (HubSpot, Salesforce, Pipedrive)", "Scheduled triggers and webhook handlers"],
    price: "Starting from $495",
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
  },
  {
    title: "Agentic AI & RAG Systems",
    description: "Production-ready AI agent workflows with RAG + vector DBs that find answers in your docs, execute tasks, and automate follow-ups.",
    features: ["RAG pipeline design and implementation", "Vector database setup (Pinecone, Milvus, Weaviate)", "Custom knowledge base integration", "Multi-agent orchestration systems"],
    price: "Starting from $995",
    color: "#8B5CF6",
    gradient: "from-violet-500 to-purple-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 8V4H8" />
        <rect x="8" y="8" width="8" height="8" rx="2" />
        <path d="M16 12h4" />
        <path d="M4 12h4" />
        <path d="M12 16v4" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Conversational AI & Voice Agents",
    description: "Intelligent chatbots and voice agents for customer support, sales funnels, and internal operations with conversational AI.",
    features: ["AI chatbot development (WhatsApp, websites, social media)", "Voice agent implementation (VAPI, Twilio)", "Natural language processing and understanding", "Multi-language and multi-channel support"],
    price: "Starting from $495",
    color: "#3B82F6",
    gradient: "from-blue-500 to-indigo-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        <path d="M8 10h.01" />
        <path d="M12 10h.01" />
        <path d="M16 10h.01" />
      </svg>
    ),
  },
  {
    title: "Full-Stack Web Development",
    description: "Scalable web applications with modern frameworks. From MVPs to enterprise platforms with clean architecture and high performance.",
    features: ["Next.js / React frontend development", "Laravel / Node.js backend APIs", "PostgreSQL, MySQL, MongoDB databases", "Authentication, payments, and third-party integrations"],
    price: "Starting from $995",
    color: "#10B981",
    gradient: "from-emerald-500 to-green-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M16 18l6-6-6-6" />
        <path d="M8 6l-6 6 6 6" />
        <path d="M14.5 4l-5 16" />
      </svg>
    ),
  },
  {
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with Flutter for iOS and Android. Multi-role apps for users, vendors, and delivery personnel.",
    features: ["Flutter cross-platform development", "User, vendor, and driver apps", "Push notifications and real-time features", "App Store and Play Store deployment"],
    price: "Starting from $1,495",
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
        <path d="M9 6h6" />
      </svg>
    ),
  },
  {
    title: "DevOps & Cloud Infrastructure",
    description: "CI/CD pipelines, containerization, and cloud infrastructure setup. Keep your apps running with 99.9% uptime and auto-scaling.",
    features: ["Docker and Kubernetes orchestration", "CI/CD pipelines (GitHub Actions, GitLab CI)", "AWS, GCP, and DigitalOcean deployment", "Monitoring, logging, and alerting setup"],
    price: "Starting from $495",
    color: "#EC4899",
    gradient: "from-pink-500 to-rose-600",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

const ServiceCards = () => {
  return (
    <section id="services" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical">Services</span>
        <div className="divider-line-vertical h-16" />
      </motion.div>

      <div className="max-w-7xl mx-auto lg:pl-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            <span className="border-b-2 border-foreground pb-1">
              Our AI & Software Development Specialties
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-6">
            From n8n AI workflows and RAG systems to full-stack web & mobile apps and cloud infrastructure — 
            we deliver end-to-end solutions that automate, scale, and transform your business.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="service-card group"
            >
              {/* Colorful Icon */}
              <div className="mb-6">
                <div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.gradient} text-white shadow-lg`}
                >
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <ul className="mt-4 space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={14} style={{ color: service.color }} />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <span className="text-sm font-semibold" style={{ color: service.color }}>
                  {service.price}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border/50"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">5+</span>
              <p className="text-stat-label mt-2">Years Experience</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">15+</span>
              <p className="text-stat-label mt-2">Projects Delivered</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">150K</span>
              <p className="text-stat-label mt-2">Daily Active Users</p>
            </div>
            <div className="text-center md:text-left">
              <span className="text-3xl md:text-4xl font-light tracking-tight text-foreground">99.9%</span>
              <p className="text-stat-label mt-2">API Uptime</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceCards;

