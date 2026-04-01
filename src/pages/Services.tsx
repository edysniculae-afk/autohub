import { Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";
import { ArrowRight } from "lucide-react";

export default function Services() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Servicii Auto - Autohub Service Pipera",
    description:
      "Lista completă de servicii auto oferite de Autohub Service Pipera în București.",
    url: BUSINESS.url + "/servicii",
    numberOfItems: services.length,
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: service.title,
      url: BUSINESS.url + "/servicii/" + service.slug,
    })),
  };

  return (
    <>
      <SEO
        title="Servicii Auto București - Mecanică, Electrică, ITP | Autohub Pipera"
        description="Servicii auto complete în București: mecanică, electrică, tinichigerie, vopsitorie, ITP, vulcanizare, piese auto. Programează-te la Autohub Service Pipera."
        canonical="/servicii"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Servicii" },
            ]}
          />
          <h1
            className="text-3xl md:text-5xl font-bold mt-4 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Servicii Auto Complete
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            De la mecanică și electrică, la tinichigerie, vopsitorie și ITP —
            totul într-un singur loc, la Autohub Service Pipera.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.slug}
                  to={`/servicii/${service.slug}`}
                  className="group p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h2
                    className="text-xl font-bold mb-2"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {service.title}
                  </h2>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                    {service.subtitle}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                    Detalii <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
