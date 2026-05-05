import { Link } from "react-router-dom";
import { Phone, MapPin, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BUSINESS } from "@/data/business";
import { services } from "@/data/services";

const localFAQ = [
  {
    question: "Unde se află Autohub Service în Pipera?",
    answer:
      "Atelierul nostru este pe Șoseaua Petricani nr. 86A, în partea de nord a Bucureștiului, la limita cartierelor Pipera și Tei. Acoperim cu ușurință zonele Pipera, Aviației, Băneasa, Barbu Văcărescu, București Nord, Tunari și Voluntari.",
  },
  {
    question: "Cât durează o programare la service-ul auto din Pipera?",
    answer:
      "Pentru intervenții curente (revizie, schimb ulei, frâne, ITP) reușim de regulă programare în 24-48 de ore. Pentru lucrări complexe de mecanică, electrică sau vopsitorie stabilim o dată exactă după diagnoză. Suni la 0748 018 401 sau scrii pe WhatsApp și răspundem în aceeași zi.",
  },
  {
    question: "De ce să aleg un service auto în Pipera și nu unul autorizat?",
    answer:
      "La Autohub Service Pipera primești calitate de dealer la prețuri corecte, fără contractul rigid al unui service autorizat. Folosim piese originale OEM sau aftermarket premium (Bosch, Mann, Sachs, Brembo), oferim garanție pentru manoperă și componente, iar comunicarea este transparentă: deviz înainte, fără surprize.",
  },
  {
    question: "Pot lăsa mașina dimineața și să o ridic seara?",
    answer:
      "Da. Pentru intervenții care durează o zi (schimb ulei, distribuție, frâne, geometrie, diagnoză) lași mașina dimineața și o ridici la finalul programului, până la ora 18:00. Pentru lucrări de tinichigerie sau vopsitorie ce necesită mai mult timp, te ținem la curent în fiecare zi.",
  },
  {
    question: "Faceți ITP și pregătire prealabilă în Pipera?",
    answer:
      "Da. Înainte de ITP verificăm gratuit principalele puncte de control (frâne, direcție, suspensie, iluminare, emisii). Dacă apar probleme care ar duce la respingere, le remediem rapid. Plecă cu ITP-ul făcut în aceeași zi, fără drumuri suplimentare.",
  },
  {
    question: "Care sunt programul și telefonul atelierului?",
    answer:
      "Suntem deschiși de Luni până Vineri între 08:00 și 18:00. Programări la 0748 018 401 sau pe WhatsApp. Adresa: Șoseaua Petricani nr. 86A, București.",
  },
];

const reasons = [
  {
    title: "Toate intervențiile sub un singur acoperiș",
    description:
      "Mecanică, electrică, tinichigerie, vopsitorie, vulcanizare, ITP și piese - nu trebuie să muți mașina între ateliere. Începem cu diagnoza și terminăm cu predarea, totul la o singură adresă în Pipera.",
  },
  {
    title: "Echipamente moderne de diagnoză",
    description:
      "Citim toate unitățile de control (ECU, ABS, airbag, transmisie, climatizare) pe orice marcă auto - de la Dacia și Volkswagen până la BMW, Mercedes, Audi sau mărci asiatice. Diagnoză precisă înseamnă reparație corectă din prima.",
  },
  {
    title: "Piese certificate, garanție pentru tot",
    description:
      "Lucrăm doar cu piese originale OEM sau aftermarket premium de la producători de top. Fiecare componentă vine cu certificat și garanție, iar manopera este garantată. Nu folosim niciodată piese de calitate îndoielnică.",
  },
  {
    title: "Deviz transparent înainte de orice intervenție",
    description:
      "Înainte să atingem mașina, primești deviz scris cu manopera, piesele și termenul de finalizare. Fără costuri ascunse. Dacă pe parcurs apare ceva în plus, te sunăm și aprobi tu.",
  },
  {
    title: "Acces rapid din toată zona de nord a Bucureștiului",
    description:
      "Ne găsești la Șoseaua Petricani 86A, la 5-10 minute de Pipera Plaza, Aviației, Băneasa, Barbu Văcărescu, Tei și București Nord. Parcare proprie, fără dramă.",
  },
  {
    title: "Comunicare directă cu mecanicul tău",
    description:
      "Nu vorbești cu un consilier care transmite mai departe. Discuți direct cu omul care îți repară mașina, vezi ce se întâmplă, înțelegi de ce. Asta înseamnă încredere.",
  },
];

const coveredAreas = [
  "Pipera",
  "Aviației",
  "Băneasa",
  "Barbu Văcărescu",
  "Tei",
  "București Nord",
  "Tunari",
  "Voluntari",
  "Floreasca",
  "Sector 1",
  "Sector 2",
];

export default function ServicePiperaLanding() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      "@id": BUSINESS.url + "/service-auto-pipera#business",
      name: "Service Auto Pipera - Autohub Service",
      url: BUSINESS.url + "/service-auto-pipera",
      telephone: BUSINESS.phone,
      priceRange: "$$",
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
      areaServed: coveredAreas.map((a) => ({ "@type": "Place", name: a })),
      hasMap: BUSINESS.googleMapsUrl,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: localFAQ.map((f) => ({
        "@type": "Question",
        name: f.question,
        acceptedAnswer: { "@type": "Answer", text: f.answer },
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
          item: BUSINESS.url + "/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Service Auto Pipera",
          item: BUSINESS.url + "/service-auto-pipera",
        },
      ],
    },
  ];

  return (
    <>
      <SEO
        title="Service Auto Pipera București - Autohub Service | Mecanică, Vopsitorie, ITP"
        description="Service auto în zona Pipera, București: mecanică, electrică, tinichigerie, vopsitorie, ITP, vulcanizare. Echipă proprie, piese certificate, garanție. Programare la 0748 018 401."
        canonical="/service-auto-pipera"
        jsonLd={jsonLd}
      />

      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Service Auto Pipera" },
            ]}
          />
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Service Auto Pipera, București
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mb-8">
            Atelier complet în zona Pipera: mecanică, electrică, tinichigerie,
            vopsitorie, vulcanizare, ITP, daune asigurare și piese auto. Calitate
            de dealer, prețuri corecte, comunicare directă cu mecanicul tău.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
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
                className="gap-2 h-12 px-8 w-full sm:w-auto"
              >
                Scrie pe WhatsApp
              </Button>
            </a>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Adresă</div>
                <div className="text-sm font-medium">Șos. Petricani 86A</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <Clock className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Program</div>
                <div className="text-sm font-medium">Lu-Vi 08:00-18:00</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" />
              <div>
                <div className="text-xs text-muted-foreground">Telefon</div>
                <div className="text-sm font-medium">{BUSINESS.phoneDisplay}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ce facem la atelierul din Pipera
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              Autohub Service Pipera este un atelier independent, cu echipă
              proprie de mecanici, electricieni, tinichigii și vopsitori, care
              acoperă toată gama de intervenții auto sub un singur acoperiș.
              Lucrăm cu toate mărcile, de la Dacia și Volkswagen la BMW,
              Mercedes, Audi și mărci asiatice, folosind echipamente moderne de
              diagnoză multimarcă.
            </p>
            <p>
              Suntem situați pe Șoseaua Petricani nr. 86A, la limita Pipera-Tei,
              cu acces rapid din toată zona de nord a Bucureștiului. În câteva
              minute ajungi de pe Pipera, Aviației, Băneasa, Barbu Văcărescu,
              București Nord sau dinspre Tunari și Voluntari. Avem parcare
              proprie, primire promptă și un mediu curat în care mașina ta nu
              stă sub cerul liber.
            </p>
            <p>
              Diferența noastră nu este un slogan. Este modul în care lucrăm:
              deviz transparent înainte de intervenție, piese certificate cu
              garanție, comunicare directă cu mecanicul tău și termene
              respectate. Dacă apare ceva în plus pe parcurs, te sunăm și
              aprobi tu, niciodată nu adăugăm costuri fără să știi.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Servicii oferite în zona Pipera
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.slug}
                  to={`/servicii/${s.slug}`}
                  className="group p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3
                    className="font-bold text-lg mb-1"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-3">
                    {s.subtitle}
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

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            De ce alegem clienții noștri Autohub Service Pipera
          </h2>
          <div className="grid md:grid-cols-2 gap-5">
            {reasons.map((r) => (
              <div
                key={r.title}
                className="p-5 rounded-2xl border border-border bg-card"
              >
                <div className="flex items-start gap-3 mb-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                  <h3 className="font-bold text-lg">{r.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed pl-8">
                  {r.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Zone deservite din nordul Bucureștiului
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Locația din Pipera ne permite să fim aproape de clienți din toată
            zona de nord a Bucureștiului. Iată cartierele și localitățile din
            care ne sosesc cei mai mulți clienți:
          </p>
          <div className="flex flex-wrap gap-2">
            {coveredAreas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 rounded-full border border-border bg-card text-sm font-medium"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Cum ajungi la atelier
          </h2>
          <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
            Autohub Service Pipera se află pe Șoseaua Petricani nr. 86A, în
            sectorul 2 al Bucureștiului. Reperele cele mai apropiate sunt
            Pipera Plaza, complexul Promenada și ieșirea spre Voluntari.
            Coordonate GPS: {BUSINESS.geo.lat}, {BUSINESS.geo.lng}.
          </p>
          <div className="rounded-2xl overflow-hidden border border-border aspect-video">
            <iframe
              title="Hartă Autohub Service Pipera"
              src={`https://www.google.com/maps?q=${encodeURIComponent(
                BUSINESS.address.street + ", " + BUSINESS.address.city,
              )}&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <a
              href={BUSINESS.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="lg" className="gap-2 w-full sm:w-auto">
                <MapPin className="w-5 h-5" /> Deschide în Google Maps
              </Button>
            </a>
            <a href={`tel:${BUSINESS.phone}`}>
              <Button size="lg" className="gap-2 w-full sm:w-auto">
                <Phone className="w-5 h-5" /> Sună acum
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Întrebări frecvente despre service-ul auto din Pipera
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {localFAQ.map((f, i) => (
              <AccordionItem key={i} value={`local-faq-${i}`}>
                <AccordionTrigger className="text-left text-base">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Programează-te la Autohub Service Pipera
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Sună la {BUSINESS.phoneDisplay} sau scrie pe WhatsApp. Răspundem
            în aceeași zi.
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
                className="gap-2 h-12 px-8 w-full sm:w-auto"
              >
                Scrie pe WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
