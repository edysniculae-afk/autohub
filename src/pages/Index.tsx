import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProcessSection from "@/components/ProcessSection";
import ServicesSection from "@/components/ServicesSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ClientTypesSection from "@/components/ClientTypesSection";
import InfoGridSection from "@/components/InfoGridSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ProcessSection />
      <ServicesSection />
      <GuaranteeSection />
      <ClientTypesSection />
      <InfoGridSection />
      <TestimonialsSection />
      <DifferentiatorSection />
      <ContactSection />
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Index;
