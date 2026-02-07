import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ServicesPageContent from "@/components/ServicesPageContent";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore our comprehensive AI and software development services including AI Agents, Gen AI Solutions, Web & Mobile Development, SaaS Development, and Custom AI Bots.",
  openGraph: {
    title: "Our Services | Muhammad Hasnain - Anssol",
    description: "AI Agents, Gen AI Solutions, Web & Mobile Development, SaaS Development, and Custom AI Bots.",
  },
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ServicesPageContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
