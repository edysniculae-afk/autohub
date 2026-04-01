import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { BUSINESS } from "@/data/business";

export default function Contact() {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Contact - Autohub Service Pipera",
      description:
        "Contactează Autohub Service Pipera: telefon, adresă, program, WhatsApp. Șoseaua Petricani nr. 86A, București.",
      url: BUSINESS.url + "/contact",
    },
    {
      "@context": "https://schema.org",
      "@type": "AutoRepair",
      name: BUSINESS.name,
      url: BUSINESS.url,
      telephone: BUSINESS.phone,
      email: BUSINESS.email,
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
    },
  ];

  return (
    <>
      <SEO
        title="Contact - Autohub Service Pipera București"
        description="Contactează Autohub Service Pipera: telefon 0748 018 401, adresă Șoseaua Petricani nr. 86A, București. Program Luni-Vineri 08:00-18:00."
        canonical="/contact"
        jsonLd={jsonLd}
      />

      {/* Hero */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: "Acasă", href: "/" },
              { label: "Contact" },
            ]}
          />
          <h1
            className="text-3xl md:text-5xl font-bold mt-4 mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Contactează-ne
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Sună-ne, scrie-ne pe WhatsApp sau vino direct la noi. Te așteptăm!
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Phone className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-semibold text-lg">Telefon</h2>
              <a
                href={`tel:${BUSINESS.phone}`}
                className="text-primary hover:underline text-lg font-medium"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-semibold text-lg">Adresă</h2>
              <p className="text-muted-foreground">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}
              </p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Clock className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-semibold text-lg">Program</h2>
              <p className="text-muted-foreground">{BUSINESS.hoursDisplay}</p>
            </div>

            <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <h2 className="font-semibold text-lg">Email</h2>
              <a
                href={`mailto:${BUSINESS.email}`}
                className="text-primary hover:underline text-sm font-medium"
              >
                {BUSINESS.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Unde ne găsești
          </h2>
          <div className="rounded-2xl overflow-hidden border border-border shadow-lg aspect-[16/9] md:aspect-[21/9]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.5!2d26.1187!3d44.4734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sro!2sro!4v1700000000000!5m2!1sro!2sro"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locație Autohub Service Pipera pe Google Maps"
            />
          </div>
          <p className="text-muted-foreground mt-4 text-sm">
            {BUSINESS.address.street}, {BUSINESS.address.city}  - Zone deservite:{" "}
            {BUSINESS.areasServed.join(", ")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto px-4 md:px-8 text-center max-w-3xl relative z-10">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Programează-te acum
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Sună-ne direct sau scrie-ne pe WhatsApp. Răspundem rapid!
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
