import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProcessSection from "@/components/ProcessSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import ClientTypesSection from "@/components/ClientTypesSection";
import DifferentiatorSection from "@/components/DifferentiatorSection";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { BUSINESS } from "@/data/business";
import aboutImg from "@/assets/about-team.jpg";

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Despre Autohub Service Pipera",
    description:
      "Află mai multe despre Autohub Service Pipera - service auto premium în București, zona Pipera. Echipă experimentată, echipamente moderne, servicii complete.",
    url: BUSINESS.url + "/despre",
    isPartOf: {
      "@type": "WebSite",
      name: BUSINESS.name,
      url: BUSINESS.url,
    },
  };

  return (
    <>
      <SEO
        title="Despre Noi - Autohub Service Pipera București"
        description="Află mai multe despre Autohub Service Pipera - service auto premium în București, zona Pipera. Echipă experimentată, echipamente moderne, servicii complete."
        canonical="/despre"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Despre Noi" },
            ]}
          />
          <h1
            className="text-3xl md:text-5xl font-bold mt-4 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Despre Autohub Service Pipera
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Partenerul tău de încredere pentru orice intervenție auto, în nordul
            Bucureștiului.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-2xl" />
            <img
              src={aboutImg}
              alt="Echipa Autohub Service Pipera"
              className="relative rounded-2xl w-full object-cover aspect-square shadow-2xl"
              loading="lazy"
              width={1024}
              height={1024}
            />
          </div>

          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">
              Cine Suntem
            </span>
            <h2
              className="text-2xl md:text-4xl font-bold mb-6 leading-tight"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Calitate de dealer,
              <br />
              <span className="text-muted-foreground">prețuri corecte</span>
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                La Autohub, nu oferim doar reparații  - oferim liniște, siguranță
                și transparență. Fiecare mașină care intră în service este
                tratată cu responsabilitate maximă, indiferent de complexitatea
                lucrării.
              </p>
              <p>
                Operăm în nordul Bucureștiului, pe Șoseaua Petricani nr. 86A,
                deservind clienți din Sector 1, Sector 2, Pipera și zonele
                limitrofe. Locația noastră modernă este echipată conform celor
                mai înalte standarde din industria auto.
              </p>
              <p>
                Prin integrarea serviciilor de mecanică, electrică și estetică
                auto (prin Central Paint Service), oferim un flux complet  - de
                la diagnostic la livrarea finală. Lucrăm cu toate mărcile auto,
                de la vehicule de oraș la SUV-uri premium și utilitare.
              </p>
              <p>
                Echipa noastră de tehnicieni este formată din profesioniști cu
                experiență, specializați pe diferite sisteme ale vehiculului.
                Investim constant în echipamente de diagnoză și formare
                profesională, pentru a fi mereu la curent cu cele mai noi
                tehnologii auto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      {/* Guarantee */}
      <GuaranteeSection />

      {/* Client Types */}
      <ClientTypesSection />

      {/* Differentiators */}
      <DifferentiatorSection />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Pregătit să ne cunoști?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Contactează-ne pentru o programare sau vino direct la noi. Te
            așteptăm cu drag.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`}>
              <Button
                size="lg"
                className="gap-2 h-12 bg-primary hover:bg-primary/90 px-8 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" /> Sună acum
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 border-primary/30 text-primary hover:bg-primary/10 px-8 w-full sm:w-auto"
              >
                Pagina de Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
