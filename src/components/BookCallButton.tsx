"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

const BookCallButton = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed bottom-6 left-6 z-40"
    >
      <a
        href="https://calendly.com/eng-muhammadhasnain/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-4 py-3 rounded-full bg-foreground text-background font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <Calendar size={18} />
        <span className="hidden sm:inline">Book a Call</span>
      </a>
    </motion.div>
  );
};

export default BookCallButton;
