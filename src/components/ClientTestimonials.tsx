"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Working with Muhammad and his team was an absolute pleasure. They delivered our AI chatbot solution ahead of schedule and it exceeded all our expectations. The bot handles 70% of our customer inquiries automatically now.",
    rating: 5,
    platform: "Upwork",
  },
  {
    name: "Michael Chen",
    role: "Founder, DataFlow Analytics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Exceptional work on our SaaS platform. The team's expertise in Laravel and React helped us launch 2 months earlier than planned. Their AI integration recommendations were game-changing for our product.",
    rating: 5,
    platform: "Direct",
  },
  {
    name: "Emily Rodriguez",
    role: "CTO, HealthTech Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "The Scribe AI healthcare assistant they built for us has transformed our documentation process. Our doctors save 2+ hours daily. Highly recommend for any healthcare AI projects.",
    rating: 5,
    platform: "Fiverr",
  },
  {
    name: "David Kim",
    role: "Product Manager, E-Commerce Plus",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    content: "Outstanding full-stack development skills. They rebuilt our entire e-commerce platform with modern architecture. Site speed improved by 300% and conversions are up 45%.",
    rating: 5,
    platform: "Upwork",
  },
];

const ClientTestimonials = () => {
  return (
    <section id="testimonials" className="relative px-4 sm:px-6 md:px-16 lg:px-20 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border/50 hover:border-border transition-all"
            >
              {/* Quote Icon */}
              <Quote size={32} className="text-foreground/10 mb-4" />
              
              {/* Content */}
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <span 
                  className="text-xs font-medium px-2 py-1 rounded-full border border-border/50"
                  style={{ 
                    color: testimonial.platform === "Upwork" ? "#14A800" : 
                           testimonial.platform === "Fiverr" ? "#1DBF73" : 
                           "inherit" 
                  }}
                >
                  {testimonial.platform}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">100%</div>
            <p className="text-sm text-muted-foreground">Job Success Rate</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">50+</div>
            <p className="text-sm text-muted-foreground">Projects Completed</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">30+</div>
            <p className="text-sm text-muted-foreground">Happy Clients</p>
          </div>
          <div>
            <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">5.0</div>
            <p className="text-sm text-muted-foreground">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientTestimonials;
