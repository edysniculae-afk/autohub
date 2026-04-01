import { useParams, Navigate, Link } from "react-router-dom";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getServiceBySlug, services } from "@/data/services";
import { BUSINESS } from "@/data/business";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, ArrowRight } from "lucide-react";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/servicii" replace />;
  }

  const Icon = service.icon;
  const relatedServices = service.relatedSlugs
    .map((rs) => services.find((s) => s.slug === rs))
    .filter(Boolean);
  const descriptionParagraphs = service.description.split("\n\n");

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      description: service.metaDescription,
      url: BUSINESS.url + "/servicii/" + service.slug,
      provider: {
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
      },
      areaServed: {
        "@type": "City",
        name: BUSINESS.address.city,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faq.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: f.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Acasă",
          item: BUSINESS.url,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Servicii",
          item: BUSINESS.url + "/servicii",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: BUSINESS.url + "/servicii/" + service.slug,
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/servicii/${service.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Servicii", href: "/servicii" },
              { label: service.title },
            ]}
          />
          <div className="flex items-center gap-4 mt-4 mb-4">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-7 h-7 text-primary" />
            </div>
            <div>
              <h1
                className="text-3xl md:text-5xl font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {service.title}
              </h1>
            </div>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl">
            {service.subtitle}
          </p>
        </div>
      </section>

      {/* Image */}
      {service.image && (
        <section className="pb-12 md:pb-16">
          <div className="container mx-auto px-4 md:px-8">
            <div className="relative max-w-4xl">
              <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-xl" />
              <img
                src={service.image}
                alt={service.title}
                className="relative rounded-xl w-full object-cover aspect-[3/2] shadow-xl"
                width={1280}
                height={854}
              />
            </div>
          </div>
        </section>
      )}

      {/* Description */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            {descriptionParagraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight */}
      {service.highlight && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 md:p-8">
              <p
                className="text-primary font-semibold text-xl md:text-2xl text-center"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                &bdquo;{service.highlight}&rdquo;
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Sub-services Grid */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ce include{" "}
            <span className="text-muted-foreground">acest serviciu</span>
          </h2>
          <div
            className={`grid ${
              service.items.length > 6 ? "sm:grid-cols-2 lg:grid-cols-3" : "sm:grid-cols-2"
            } gap-3`}
          >
            {service.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 transition-all"
              >
                <div className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      {service.faq.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Întrebări Frecvente
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {service.faq.map((faqItem, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left text-base">
                    {faqItem.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faqItem.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="pb-16 md:pb-20">
          <div className="container mx-auto px-4 md:px-8 max-w-4xl">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Servicii{" "}
              <span className="text-muted-foreground">Conexe</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedServices.map((related) => {
                if (!related) return null;
                const RelatedIcon = related.icon;
                return (
                  <Link
                    key={related.slug}
                    to={`/servicii/${related.slug}`}
                    className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <RelatedIcon className="w-6 h-6 text-primary" />
                    </div>
                    <h3
                      className="font-bold text-lg mb-1"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      {related.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {related.subtitle}
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
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ai nevoie de {service.title.toLowerCase()}?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Contactează-ne pentru o programare rapidă sau un deviz personalizat.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS.phone}`}>
              <Button
                size="lg"
                className="gap-2 h-12 bg-primary hover:bg-primary/90 px-8 w-full sm:w-auto"
              >
                <Phone className="w-5 h-5" /> {BUSINESS.phoneDisplay}
              </Button>
            </a>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                variant="outline"
                className="gap-2 h-12 border-green-600 text-green-500 hover:bg-green-600/10 px-8 w-full sm:w-auto"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Scrie pe WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
