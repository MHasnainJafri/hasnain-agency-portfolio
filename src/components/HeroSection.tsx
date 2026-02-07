"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 md:px-16 lg:px-20 pt-28 sm:pt-32 pb-8 sm:pb-12">
      {/* Vertical Text - Left Side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-6"
      >
        <div className="divider-line-vertical h-20" />
        <span className="text-vertical">Gen AI & Full Stack 2026</span>
        <div className="divider-line-vertical h-20" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col-reverse lg:grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-4 items-center lg:pl-16">
        {/* Left Content */}
        <div className="flex flex-col gap-4 sm:gap-6 w-full text-center lg:text-left">
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-start gap-8 sm:gap-12"
          >
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] text-foreground">+15</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground">Projects Delivered</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[-0.02em] text-foreground">+5</span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-muted-foreground">AI/ML Solutions</span>
            </div>
          </motion.div>

          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-0"
          >
            <h1 className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] xl:text-[12rem] font-bold leading-[0.85] tracking-[-0.04em] text-foreground">M </h1>
            <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold leading-[0.95] tracking-[-0.03em] text-foreground">Hasnain</h2>
            {/* <h2 className="text-[2rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] xl:text-[6rem] font-bold leading-[0.95] tracking-[-0.03em] text-muted-foreground/60">Hasnain</h2> */}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-2 sm:mt-4 flex justify-center lg:justify-start"
          >
            <a href="#services" className="scroll-indicator group">
              <span>Scroll down</span>
              <ArrowDown
                size={14}
                className="transition-transform duration-300 group-hover:translate-y-1"
              />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Portrait */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-end w-full"
        >
          <div className="relative w-64 sm:w-72 md:w-80 lg:w-auto lg:-mr-12">
            <img
              src="/portrait.jpg"
              alt="Muhammad Hasnain - Full Stack & AI Engineer"
              className="w-full h-auto max-h-[45vh] sm:max-h-[50vh] md:max-h-[60vh] lg:max-h-[90vh] object-cover object-top grayscale rounded-2xl lg:rounded-none"
            />
            {/* Subtle gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-background/30 pointer-events-none rounded-2xl lg:rounded-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
