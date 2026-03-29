import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CheckCircle } from "lucide-react";
import aboutImg from "@/assets/about-team.jpg";

const highlights = [
  "Echipamente de ultimă generație",
  "Mecanici certificați cu 10+ ani experiență",
  "Servicii complete pentru orice autovehicul",
  "Transparență totală în comunicare",
];

export default function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="despre" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16 items-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
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
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Despre Noi</span>
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Servicii Auto Complete
            <br />
            <span className="text-muted-foreground">în București — Sector 1 & 2</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            La Autohub Service Pipera, fiecare intervenție este realizată cu precizie, responsabilitate și atenție la
            detalii. Oferim soluții complete pentru orice tip de autovehicul, indiferent de complexitatea lucrării.
          </p>
          <div className="grid gap-3">
            {highlights.map((h) => (
              <div key={h} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
