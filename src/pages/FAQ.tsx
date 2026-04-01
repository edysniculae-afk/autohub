import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { services } from "@/data/services";
import { BUSINESS } from "@/data/business";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

const generalFAQ: FAQItem[] = [
  {
    question: "Unde se află Autohub Service Pipera?",
    answer: `Ne găsești pe ${BUSINESS.address.street}, ${BUSINESS.address.city}. Suntem situați în zona Pipera, ușor accesibil din Sector 1, Sector 2, Barbu Văcărescu și București Nord. Cea mai apropiată stație de metrou este Pipera, iar parcarea este gratuită.`,
  },
  {
    question: "Care este programul de lucru?",
    answer: `Programul nostru este ${BUSINESS.hoursDisplay}. Sâmbăta și duminica suntem închiși, dar poți lăsa mașina vineri seara și o ridici luni.`,
  },
  {
    question: "Acceptați plata cu cardul?",
    answer:
      "Da, acceptăm plata cu cardul, numerar și transfer bancar.",
  },
  {
    question: "Oferiți mașină de înlocuire?",
    answer:
      "Momentan nu oferim mașină de înlocuire, dar vă putem ajuta cu recomandări pentru servicii de rent-a-car în zonă.",
  },
  {
    question: "Trebuie programare?",
    answer:
      "Recomandăm programarea telefonică pentru a evita timpii de așteptare, dar acceptăm și clienți fără programare în limita disponibilității.",
  },
];

export default function FAQ() {
  // Collect all FAQ items for JSON-LD
  const allFAQItems: FAQItem[] = [
    ...generalFAQ,
    ...services.flatMap((s) => s.faq),
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allFAQItems.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Întrebări Frecvente - Autohub Service Pipera București"
        description="Răspunsuri la cele mai frecvente întrebări despre serviciile auto Autohub Service Pipera: program, prețuri, mecanică, electrică, ITP, tinichigerie."
        canonical="/intrebari-frecvente"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Întrebări Frecvente" },
            ]}
          />
          <h1
            className="text-3xl md:text-5xl font-bold mt-4 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Întrebări Frecvente
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Răspunsuri rapide la cele mai comune întrebări despre serviciile
            noastre auto.
          </p>
        </div>
      </section>

      {/* General FAQ */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Informații Generale
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {generalFAQ.map((faqItem, index) => (
              <AccordionItem key={`general-${index}`} value={`general-${index}`}>
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

      {/* FAQ per Service */}
      {services.map((service) => {
        if (service.faq.length === 0) return null;
        const Icon = service.icon;

        return (
          <section key={service.slug} className="pb-16 md:pb-20">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h2
                  className="text-2xl md:text-3xl font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {service.title}
                </h2>
              </div>
              <Accordion type="single" collapsible className="w-full">
                {service.faq.map((faqItem, index) => (
                  <AccordionItem
                    key={`${service.slug}-${index}`}
                    value={`${service.slug}-${index}`}
                  >
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
        );
      })}
    </>
  );
}
