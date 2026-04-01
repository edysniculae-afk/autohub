import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";

export default function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Contact</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Ai o problemă sau vrei doar o verificare?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nu aștepta să devină costisitoare. Autohub Service Pipera  - soluții corecte, fără complicații.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Telefon</h4>
            <a href="tel:+40748018401" className="text-primary hover:underline text-lg font-medium">
              0748 018 401
            </a>
          </div>

          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Adresă</h4>
            <p className="text-muted-foreground">Șoseaua Petricani nr. 86A, București</p>
          </div>

          <div className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-card border border-border sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h4 className="font-semibold text-lg">Program</h4>
            <p className="text-muted-foreground">Luni – Vineri: 08:00 – 17:00</p>
            <p className="text-muted-foreground">{"\n"}</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:+40748018401">
            <Button size="lg" className="gap-2 h-12 bg-primary hover:bg-primary/90 px-8 w-full sm:w-auto">
              <Phone className="w-5 h-5" /> Sună acum
            </Button>
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=%2B40748018401&text&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" variant="outline" className="gap-2 h-12 border-green-600 text-green-500 hover:bg-green-600/10 px-8 w-full sm:w-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Scrie pe WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
