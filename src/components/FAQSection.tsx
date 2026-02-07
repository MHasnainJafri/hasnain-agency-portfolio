"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What services does Anssol offer?",
    answer: "We specialize in AI Agents Development, Gen AI Solutions, Web & Mobile Application Development, AI SaaS Development, Custom AI Bots (Chat, Voice, Video), n8n AI Workflows, and AI/Tech Consulting. Our focus is on delivering cutting-edge technology solutions that drive business transformation.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on complexity and scope. A simple website might take 2-4 weeks, while a complex AI SaaS platform could take 3-6 months. During our initial consultation, we'll provide a detailed timeline based on your specific requirements.",
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible pricing models including fixed-price projects, hourly rates, and retainer agreements. Our rates start from $1,000 for smaller projects. We provide detailed quotes after understanding your project requirements during our free consultation call.",
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Yes! We offer comprehensive support and maintenance packages. This includes bug fixes, security updates, performance optimization, and feature enhancements. We believe in building long-term partnerships with our clients.",
  },
  {
    question: "Can you work with our existing team?",
    answer: "Absolutely! We frequently collaborate with in-house teams, providing additional expertise in AI, full-stack development, or specific technologies. We can integrate seamlessly with your existing workflows and communication tools.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "Our core expertise includes Python, FastAPI, Laravel, React.js, Next.js, Node.js for development. For AI/ML, we work with OpenAI, LangChain, various LLMs, NLP, Computer Vision, and RAG implementations. We also have extensive experience with AWS, Docker, and microservices architecture.",
  },
  {
    question: "How do you ensure project quality?",
    answer: "We follow industry best practices including code reviews, automated testing, CI/CD pipelines, and agile methodologies. Regular demos and feedback sessions ensure the project aligns with your vision. We also provide documentation and training upon delivery.",
  },
  {
    question: "What is your communication process?",
    answer: "We believe in transparent communication. You'll have a dedicated point of contact, regular progress updates (daily/weekly based on preference), access to project management tools, and scheduled demo sessions. We're available via email, WhatsApp, and video calls.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers. If you don't find what you're looking for, 
            feel free to reach out to us directly.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="border border-border/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-card hover:bg-card/80 transition-colors"
              >
                <span className="font-medium text-foreground pr-4">{faq.question}</span>
                <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-background border border-border/50 flex items-center justify-center">
                  {openIndex === index ? (
                    <Minus size={16} className="text-foreground" />
                  ) : (
                    <Plus size={16} className="text-foreground" />
                  )}
                </span>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Still have questions?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
