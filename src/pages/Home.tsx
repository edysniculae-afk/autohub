import SEO from "@/components/SEO";
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
import { BUSINESS } from "@/data/business";

export default function Home() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: BUSINESS.address.street,
        addressLocality: BUSINESS.address.city,
        addressRegion: BUSINESS.address.region,
        postalCode: BUSINESS.address.postalCode,
        addressCountry: BUSINESS.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: BUSINESS.geo.lat,
        longitude: BUSINESS.geo.lng,
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      areaServed: BUSINESS.areasServed.map((area) => ({
        "@type": "City",
        name: area,
      })),
      priceRange: "$$",
      image: BUSINESS.url + "/og-image.png",
      description: BUSINESS.description,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  ];

  return (
    <>
      <SEO
        title="Autohub Service Pipera - Service Auto Premium București"
        description={BUSINESS.description}
        canonical="/"
        jsonLd={jsonLd}
      />
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
    </>
  );
}
