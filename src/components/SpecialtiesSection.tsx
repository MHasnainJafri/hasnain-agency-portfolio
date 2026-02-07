import { motion } from "framer-motion";
import { Bot, Smartphone, MessageSquare } from "lucide-react";

const specialties = [
  {
    icon: Bot,
    title: "Autonomous AI Agent Development for B2B Workflows",
    description:
      "Deploy self-learning AI agents—Sales, Customer Service, Social Media, and DevOps—that autonomously handle tasks end-to-end. Slash operational costs, accelerate response times, and free your team to focus on strategic growth.",
  },
  {
    icon: Smartphone,
    title: "Custom AI-Powered SaaS Websites & Mobile Apps",
    description:
      "Launch tailor-made AI SaaS platforms and mobile solutions with built-in productivity tools, virtual assistants, chatbots, and seamless third-party integrations. Engage users, boost retention, and scale your digital offerings effortlessly.",
  },
  {
    icon: MessageSquare,
    title: "Bespoke AI Chat & Voice Bot Solutions",
    description:
      "Transform customer interactions with intelligent chat and voice bots for support, lead gen, and outreach. From 24/7 conversational agents to automated cold-calling systems, deliver personalized experiences that drive conversions.",
  },
];

const SpecialtiesSection = () => {
  return (
    <section className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-12 sm:py-16 lg:py-24">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="divider-line-vertical h-16" />
        <span className="text-vertical">Specialties</span>
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            <span className="border-b-2 border-foreground pb-1">
              Our AI & Software Development Specialties
            </span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto text-sm md:text-base leading-relaxed mt-6">
            We specialize in Autonomous AI Agents, Generative AI Solutions, AI Integrations for Web & Mobile, 
            AI SaaS Development, and Custom AI Bots (Chat, Voice, Video) to transform B2B operations.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {specialties.map((specialty, index) => (
            <motion.div
              key={specialty.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-border/50 bg-card transition-all duration-300 hover:border-border hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)]"
            >
              {/* Icon */}
              <div className="mb-6 flex justify-center">
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center">
                  <specialty.icon size={32} className="text-foreground" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-lg md:text-xl font-semibold tracking-tight text-foreground mb-4">
                  {specialty.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {specialty.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialtiesSection;
