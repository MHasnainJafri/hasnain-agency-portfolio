"use client";

import { motion } from "framer-motion";

const clients = [
  "AlrightTech Pvt LTD",
  "NAVTTC",
  "Enterprise Clients",
  "Startups",
  "B2B Companies",
  "SaaS Platforms",
];

const ClientsSection = () => {
  return (
    <section className="relative px-6 md:px-16 lg:px-20 py-16 lg:py-20">
      {/* Divider Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="divider-line mb-12 origin-left max-w-7xl mx-auto"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            Trusted by companies and organizations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {clients.map((client, index) => (
            <motion.div
              key={client}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-lg md:text-xl font-light text-muted-foreground/60 hover:text-foreground transition-colors duration-300"
            >
              {client}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Divider Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="divider-line mt-12 origin-right max-w-7xl mx-auto"
      />
    </section>
  );
};

export default ClientsSection;

