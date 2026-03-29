import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Acasă", href: "#hero" },
  { label: "Despre Noi", href: "#despre" },
  { label: "Servicii", href: "#servicii" },
  { label: "De Ce Noi", href: "#de-ce-noi" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-2">
          <span className="text-xl md:text-2xl font-bold tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            <span className="text-primary">Auto</span>hub
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+40700000000">
            <Button variant="outline" size="sm" className="gap-2 border-primary/30 text-primary hover:bg-primary/10">
              <Phone className="w-4 h-4" /> Sună acum
            </Button>
          </a>
          <a href="#contact">
            <Button size="sm" className="bg-primary hover:bg-primary/90">Programează-te</Button>
          </a>
        </div>

        <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-md transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              <Button className="w-full mt-2 bg-primary hover:bg-primary/90">Programează-te</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
