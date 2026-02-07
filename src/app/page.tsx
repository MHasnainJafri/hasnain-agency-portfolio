import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServiceCards from "@/components/ServiceCards";
import PortfolioSection from "@/components/PortfolioSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ClientTestimonials from "@/components/ClientTestimonials";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import BookCallButton from "@/components/BookCallButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServiceCards />
      <PortfolioSection />
      <TestimonialsSection />
      <ClientTestimonials />
      <FAQSection />
      <CTASection />
      <ClientsSection />
      <Footer />
      <ScrollToTop />
      <BookCallButton />
    </main>
  );
}
