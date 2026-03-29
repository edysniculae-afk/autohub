import { MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Mecanică Auto", href: "#servicii" },
  { label: "Electrică Auto", href: "#servicii" },
  { label: "Tinichigerie & Vopsitorie", href: "#servicii" },
  { label: "ITP", href: "#servicii" },
  { label: "Vulcanizare", href: "#servicii" },
  { label: "Piese Auto", href: "#servicii" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h3
              className="text-2xl font-bold mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-primary">Auto</span>hub
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Service auto premium în București. Calitate de dealer, prețuri corecte, comunicare transparentă.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Servicii</h4>
            <div className="grid grid-cols-1 gap-2">
              {quickLinks.map((l) => (
                <a key={l.label} href={l.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-muted-foreground text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                Șos. Petricani nr. 86A, București
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="tel:+40700000000" className="text-muted-foreground hover:text-primary transition-colors">
                  +40 700 000 000
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <a href="mailto:contact@autohubservice.ro" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@autohubservice.ro
                </a>
              </div>
              <div className="pt-2 text-muted-foreground text-sm">
                <p>Luni – Vineri: 08:00 – 18:00</p>
                <p>Sâmbătă: 09:00 – 14:00</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Autohub Service Pipera. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
