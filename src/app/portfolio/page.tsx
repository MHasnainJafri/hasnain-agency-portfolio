import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PortfolioPageContent from "@/components/PortfolioPageContent";

export const metadata: Metadata = {
  title: "Our Portfolio",
  description: "Explore our portfolio of AI and software development projects including AI Agents, Gen AI Solutions, Web Applications, and SaaS products.",
  openGraph: {
    title: "Our Portfolio | Muhammad Hasnain - Anssol",
    description: "AI and software development projects including AI Agents, Gen AI Solutions, and Web Applications.",
  },
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <PortfolioPageContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
