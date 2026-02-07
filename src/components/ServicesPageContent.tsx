"use client";

import { motion } from "framer-motion";
import { Zap, Bot, Code, Smartphone, MessageSquare, Server, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Zap,
    title: "n8n AI Workflows & Business Automation",
    description: "End-to-end n8n automation that connects APIs, CRMs, and internal tools into agentic pipelines with deterministic workflows and error handling.",
    features: ["n8n workflow design and orchestration", "API integrations and data synchronization", "CRM automation (HubSpot, Salesforce, Pipedrive)", "Scheduled triggers and webhook handlers"],
    price: "Starting from $495",
    color: "#06B6D4",
  },
  {
    icon: Bot,
    title: "Agentic AI & RAG Systems",
    description: "Production-ready AI agent workflows with RAG + vector DBs that find answers in your docs, execute tasks, and automate follow-ups.",
    features: ["RAG pipeline design and implementation", "Vector database setup (Pinecone, Milvus, Weaviate)", "Custom knowledge base integration", "Multi-agent orchestration systems"],
    price: "Starting from $995",
    color: "#8B5CF6",
  },
  {
    icon: MessageSquare,
    title: "Conversational AI & Voice Agents",
    description: "Intelligent chatbots and voice agents for customer support, sales funnels, and internal operations with conversational AI.",
    features: ["AI chatbot development (WhatsApp, websites, social media)", "Voice agent implementation (VAPI, Twilio)", "Natural language processing and understanding", "Multi-language and multi-channel support"],
    price: "Starting from $495",
    color: "#3B82F6",
  },
  {
    icon: Code,
    title: "Full-Stack Web Development",
    description: "Scalable web applications with modern frameworks. From MVPs to enterprise platforms with clean architecture and high performance.",
    features: ["Next.js / React frontend development", "Laravel / Node.js backend APIs", "PostgreSQL, MySQL, MongoDB databases", "Authentication, payments, and third-party integrations"],
    price: "Starting from $995",
    color: "#10B981",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps with Flutter for iOS and Android. Multi-role apps for users, vendors, and delivery personnel.",
    features: ["Flutter cross-platform development", "User, vendor, and driver apps", "Push notifications and real-time features", "App Store and Play Store deployment"],
    price: "Starting from $1,495",
    color: "#F59E0B",
  },
  {
    icon: Server,
    title: "DevOps & Cloud Infrastructure",
    description: "CI/CD pipelines, containerization, and cloud infrastructure setup. Keep your apps running with 99.9% uptime and auto-scaling.",
    features: ["Docker and Kubernetes orchestration", "CI/CD pipelines (GitHub Actions, GitLab CI)", "AWS, GCP, and DigitalOcean deployment", "Monitoring, logging, and alerting setup"],
    price: "Starting from $495",
    color: "#EC4899",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description: "We start by understanding your business, goals, and challenges through detailed discussions.",
  },
  {
    step: "02",
    title: "Planning",
    description: "Create a comprehensive project plan with timelines, milestones, and deliverables.",
  },
  {
    step: "03",
    title: "Development",
    description: "Agile development with regular updates, demos, and feedback incorporation.",
  },
  {
    step: "04",
    title: "Delivery",
    description: "Thorough testing, deployment, and handover with documentation and training.",
  },
];

const ServicesPageContent = () => {
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
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Comprehensive AI and software development services to transform your business 
            and drive innovation in the digital age.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border/50 hover:border-border transition-all group"
            >
              <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:border-border transition-colors">
                <service.icon size={24} className="text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle size={14} style={{ color: service.color }} />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-border/50">
                <span className="text-sm font-semibold" style={{ color: service.color }}>{service.price}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-foreground/10 mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-8 md:p-12 border border-border/50 mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">4+</div>
              <p className="text-muted-foreground">Years of Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">50+</div>
              <p className="text-muted-foreground">Projects Delivered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-foreground mb-2">100%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
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
            Ready to Start Your Project?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Let's discuss how we can help you achieve your business goals with our expertise in AI and software development.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            Get Started
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPageContent;
