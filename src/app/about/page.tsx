import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AboutPageContent from "@/components/AboutPageContent";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Muhammad Hasnain and Anssol - a team of AI and software development experts with 4+ years of experience building innovative solutions.",
  openGraph: {
    title: "About Us | Muhammad Hasnain - Anssol",
    description: "AI and software development experts with 4+ years of experience building innovative solutions.",
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <AboutPageContent />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
