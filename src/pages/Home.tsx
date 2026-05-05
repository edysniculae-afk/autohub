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
  const autoRepairSchema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "@id": BUSINESS.url + "/#business",
    name: BUSINESS.name,
    alternateName: ["Autohub Service", "Service Auto Pipera"],
    url: BUSINESS.url + "/",
    logo: BUSINESS.url + "/favicon.png",
    image: BUSINESS.url + "/og-image.png",
    description: BUSINESS.description,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    priceRange: "$$",
    currenciesAccepted: "RON",
    paymentAccepted: "Cash, Credit Card, Debit Card, Bank Transfer",
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
    hasMap: BUSINESS.googleMapsUrl,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    areaServed: BUSINESS.areasServed.map((area) => ({
      "@type": "Place",
      name: area,
    })),
    makesOffer: [
      "Mecanică Auto",
      "Electrică Auto",
      "Tinichigerie și Vopsitorie",
      "Daune și Asigurare",
      "Vulcanizare",
      "ITP",
      "Piese Auto",
    ].map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s },
    })),
    knowsLanguage: ["ro", "en"],
  };

  if (BUSINESS.sameAs.length > 0) {
    autoRepairSchema.sameAs = BUSINESS.sameAs;
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": BUSINESS.url + "/#website",
    name: BUSINESS.name,
    url: BUSINESS.url + "/",
    inLanguage: "ro-RO",
  };

  const jsonLd = [autoRepairSchema, websiteSchema];

  return (
    <>
      <SEO
        title="Service Auto Pipera București - Autohub Service | Mecanică, Vopsitorie, ITP"
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
