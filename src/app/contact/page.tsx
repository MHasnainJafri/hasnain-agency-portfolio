import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactPageContent from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Anssol for AI development, web applications, and software solutions. We're here to help transform your business with cutting-edge technology.",
  openGraph: {
    title: "Contact Us | Muhammad Hasnain - Anssol",
    description: "Get in touch with Anssol for AI development, web applications, and software solutions.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactPageContent />
      <Footer />
    </main>
  );
}
