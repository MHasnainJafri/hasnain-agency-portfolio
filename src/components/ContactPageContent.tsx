"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, MessageCircle, Loader2, CheckCircle } from "lucide-react";
import { useState } from "react";

const ContactPageContent = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setStatusMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setStatusMessage("Message sent successfully! Check your email for confirmation.");
      setFormData({ name: "", email: "", company: "", budget: "", service: "", message: "" });
    } catch (error: unknown) {
      setStatus("error");
      setStatusMessage(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };

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
            Let's Build Something
            <span className="block" style={{ color: '#14A800' }}>Amazing Together</span>
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            Ready to transform your business with AI and cutting-edge technology? 
            Get in touch and let's discuss how we can help you achieve your goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Email Address *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Company Name</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground mb-2 block">Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:border-foreground transition-colors"
                    >
                      <option value="">Select budget</option>
                      <option value="$1k-$5k">$1,000 - $5,000</option>
                      <option value="$5k-$10k">$5,000 - $10,000</option>
                      <option value="$10k-$25k">$10,000 - $25,000</option>
                      <option value="$25k-$50k">$25,000 - $50,000</option>
                      <option value="$50k+">$50,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Service Interested In</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground focus:outline-none focus:border-foreground transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="AI Agents Development">AI Agents Development</option>
                    <option value="Gen AI Solutions">Gen AI Solutions</option>
                    <option value="Web Application Development">Web Application Development</option>
                    <option value="Mobile App Development">Mobile App Development</option>
                    <option value="AI SaaS Development">AI SaaS Development</option>
                    <option value="Custom AI Bots">Custom AI Bots (Chat, Voice, Video)</option>
                    <option value="n8n AI Workflows">n8n AI Workflows</option>
                    <option value="Consulting">AI/Tech Consulting</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-muted-foreground mb-2 block">Project Details *</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none"
                    placeholder="Tell us about your project, goals, and timeline..."
                  />
                </div>

                {statusMessage && (
                  <div
                    className={`p-4 rounded-lg text-sm flex items-center gap-2 ${
                      status === "success"
                        ? "bg-green-500/10 text-green-500 border border-green-500/20"
                        : "bg-red-500/10 text-red-500 border border-red-500/20"
                    }`}
                  >
                    {status === "success" && <CheckCircle size={16} />}
                    {statusMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Quick Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="mailto:eng.muhammadhasnain@gmail.com"
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-border transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:border-border transition-colors">
                  <Mail size={20} className="text-foreground" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">eng.muhammadhasnain@gmail.com</p>
              </a>

              <a
                href="https://wa.me/923071606798"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-border transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:border-border transition-colors">
                  <MessageCircle size={20} className="text-foreground" />
                </div>
                <h3 className="text-foreground font-medium mb-1">WhatsApp</h3>
                <p className="text-sm text-muted-foreground">+92 307 1606798</p>
              </a>

              <a
                href="tel:+923071606798"
                className="bg-card rounded-xl p-6 border border-border/50 hover:border-border transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4 group-hover:border-border transition-colors">
                  <Phone size={20} className="text-foreground" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">+92 307 1606798</p>
              </a>

              <div className="bg-card rounded-xl p-6 border border-border/50">
                <div className="w-12 h-12 rounded-lg bg-background border border-border/50 flex items-center justify-center mb-4">
                  <MapPin size={20} className="text-foreground" />
                </div>
                <h3 className="text-foreground font-medium mb-1">Location</h3>
                <p className="text-sm text-muted-foreground">Rawalpindi, Punjab, Pakistan</p>
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-background border border-border/50 flex items-center justify-center">
                  <Clock size={18} className="text-foreground" />
                </div>
                <h3 className="text-foreground font-medium">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground">9:00 AM - 6:00 PM (PKT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground">10:00 AM - 4:00 PM (PKT)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground">Closed</span>
                </div>
              </div>
            </div>

            {/* Hire on Platforms */}
            <div className="bg-card rounded-xl p-6 border border-border/50">
              <h3 className="text-foreground font-medium mb-4">Hire Us On</h3>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.upwork.com/freelancers/~017303523ed7fc4024"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium hover:border-border transition-colors"
                  style={{ color: '#14A800' }}
                >
                  Upwork
                </a>
                <a
                  href="https://www.fiverr.com/s/qDXV4dV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium hover:border-border transition-colors"
                  style={{ color: '#1DBF73' }}
                >
                  Fiverr
                </a>
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
                  href="https://wa.me/923071606798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg border border-border/50 text-sm font-medium hover:border-border transition-colors"
                  style={{ color: '#25D366' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-gradient-to-r from-foreground to-foreground/90 rounded-xl p-6 text-background">
              <h3 className="font-medium mb-2">Quick Response Guaranteed</h3>
              <p className="text-sm opacity-90">
                We typically respond within 2-4 hours during business hours. 
                For urgent inquiries, reach out via WhatsApp for immediate assistance.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactPageContent;
