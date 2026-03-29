import { useScrollReveal } from "@/hooks/useScrollReveal";
import aboutImg from "@/assets/about-team.jpg";

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
            Partenerul tău de încredere
            <br />
            <span className="text-muted-foreground">pentru orice intervenție auto</span>
          </h2>
          <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <p>
              La Autohub, nu oferim doar reparații — oferim liniște, siguranță și transparență. Fiecare mașină care intră în service este tratată cu responsabilitate maximă, indiferent de complexitatea lucrării.
            </p>
            <p>
              Operăm în nordul Bucureștiului, deservind clienți din Sector 1 și Sector 2, într-o locație modernă, echipată conform standardelor actuale din industrie.
            </p>
            <p>
              Prin integrarea serviciilor de mecanică, electrică și estetică auto (prin Central Paint Service), oferim un flux complet — de la diagnostic la livrarea finală.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
