import { Link } from "react-router-dom";
import { MapPin, Phone } from "lucide-react";
import logo from "@/assets/logo-autohub.png";

const serviceLinks = [
  { label: "Mecanică Auto", href: "/servicii/mecanica-auto" },
  { label: "Electrică Auto", href: "/servicii/electrica-auto" },
  { label: "Tinichigerie & Vopsitorie", href: "/servicii/tinichigerie-vopsitorie" },
  { label: "Daune & Asigurare", href: "/servicii/daune-asigurare" },
  { label: "ITP", href: "/servicii/itp" },
  { label: "Vulcanizare", href: "/servicii/vulcanizare" },
  { label: "Piese Auto", href: "/servicii/piese-auto" },
];

const siteLinks = [
  { label: "Acasă", href: "/" },
  { label: "Despre Noi", href: "/despre" },
  { label: "Toate Serviciile", href: "/servicii" },
  { label: "Întrebări Frecvente", href: "/intrebari-frecvente" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <Link to="/">
              <img src={logo} alt="Autohub Service Pipera" className="h-12 w-auto mb-4" />
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Service auto premium în București. Calitate de dealer, prețuri corecte, comunicare transparentă.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Servicii</h4>
            <div className="grid grid-cols-1 gap-2">
              {serviceLinks.map((l) => (
                <Link key={l.label} to={l.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Navigare</h4>
            <div className="grid grid-cols-1 gap-2">
              {siteLinks.map((l) => (
                <Link key={l.label} to={l.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  {l.label}
                </Link>
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
                <a href="tel:+40748018401" className="text-muted-foreground hover:text-primary transition-colors">
                  +40 748 018 401
                </a>
              </div>
              <div className="pt-2 text-muted-foreground text-sm">
                <p>Luni – Vineri: 08:00 – 18:00</p>
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
