import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Wrench, Zap, Paintbrush, ShieldCheck, CircleDot, ClipboardCheck, Cog,
} from "lucide-react";
import mechanicsImg from "@/assets/service-mechanics.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import bodyworkImg from "@/assets/service-bodywork.jpg";
import tiresImg from "@/assets/service-tires.jpg";

const services = [
  {
    icon: Wrench,
    title: "Mecanică Auto",
    subtitle: "Reparații Mecanice Profesionale. Performanță și Siguranță.",
    image: mechanicsImg,
    items: [
      "Schimb ulei și filtre", "Sistem frânare", "Ambreiaj și cutii viteze",
      "Diagnoză motor", "Suspensie și direcție", "Geometrie roți 3D",
      "Distribuție", "Sistem răcire", "Aer condiționat",
      "Sistem alimentare", "Turbo", "Evacuare",
    ],
    cta: "Ai altă problemă? Contactează-ne",
  },
  {
    icon: Zap,
    title: "Electrică Auto",
    subtitle: "Diagnoză Avansată și Reparații Electrice de Precizie",
    image: electricalImg,
    items: [
      "Diagnoză completă", "Instalație electrică", "Alternator / demaror",
      "Iluminare", "Baterii auto", "Chei & telecomenzi",
      "ECU / CAN bus", "Senzori", "Multimedia",
      "Camere parcare", "Climatizare",
    ],
  },
  {
    icon: Paintbrush,
    title: "Tinichigerie & Vopsitorie",
    subtitle: "Aspect Impecabil. Finisaje Premium.",
    image: bodyworkImg,
    items: [
      "Îndreptare caroserie", "Vopsitorie", "Polish",
      "Faruri", "Anticoroziv", "Plastic",
      "Jante", "Folii", "Grindină (PDR)",
      "Ceramic coating", "Parbrize", "Detailing",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Daune & Asigurare",
    subtitle: "Gestionăm Tot Procesul. Fără Complicații pentru Tine.",
    image: null,
    items: [
      "Constatare daune", "Întocmire dosar complet",
      "Comunicare cu asiguratorul", "Reparație completă",
    ],
    highlight: "Tu predai mașina. Noi ne ocupăm de restul.",
  },
  {
    icon: CircleDot,
    title: "Vulcanizare",
    subtitle: "Anvelope și Jante — Servicii Complete",
    image: tiresImg,
    items: [
      "Montaj anvelope", "Echilibrare", "Geometrie",
      "Vânzare anvelope", "Reparații anvelope",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "ITP",
    subtitle: "Inspecție Tehnică Rapidă și Corectă",
    image: null,
    items: [
      "Inspecție tehnică periodică", "Pregătire prealabilă ITP",
      "Remediere probleme depistate",
    ],
  },
  {
    icon: Cog,
    title: "Piese Auto",
    subtitle: "Piese Originale și Aftermarket, Garantate",
    image: null,
    items: [
      "Piese originale", "Aftermarket premium",
      "Garanție inclusă",
    ],
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const { ref, isVisible } = useScrollReveal(0.1);
  const Icon = service.icon;
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 delay-100 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <div className={`grid ${service.image ? "md:grid-cols-2" : "md:grid-cols-1 max-w-3xl mx-auto"} gap-8 md:gap-12 items-center`}>
        {service.image && !isEven && (
          <div className="hidden md:block relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-xl" />
            <img
              src={service.image}
              alt={service.title}
              className="relative rounded-xl w-full object-cover aspect-[3/2] shadow-xl"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>
        )}

        <div className={service.image ? "" : "text-center"}>
          <div className={`inline-flex items-center gap-3 mb-4 ${!service.image && "justify-center"}`}>
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3
              className="text-2xl md:text-3xl font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {service.title}
            </h3>
          </div>
          <p className="text-muted-foreground text-lg mb-6">{service.subtitle}</p>

          {service.highlight && (
            <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 mb-6">
              <p className="text-primary font-semibold text-lg">„{service.highlight}"</p>
            </div>
          )}

          <div className={`grid ${service.items.length > 6 ? "grid-cols-2" : "grid-cols-1"} gap-2`}>
            {service.items.map((item) => (
              <div key={item} className="flex items-center gap-2 text-muted-foreground">
                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {service.cta && (
            <a
              href="/contact"
              className="inline-block mt-6 text-primary font-medium hover:underline underline-offset-4"
            >
              {service.cta} →
            </a>
          )}
        </div>

        {service.image && isEven && (
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-primary/10 to-transparent rounded-xl blur-xl" />
            <img
              src={service.image}
              alt={service.title}
              className="relative rounded-xl w-full object-cover aspect-[3/2] shadow-xl"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>
        )}

        {service.image && (
          <div className="md:hidden relative">
            <img
              src={service.image}
              alt={service.title}
              className="rounded-xl w-full object-cover aspect-[3/2] shadow-xl"
              loading="lazy"
              width={1280}
              height={854}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="servicii" className="py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Servicii</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Tot ce are nevoie
            <span className="text-muted-foreground"> mașina ta</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            De la mecanică și electrică, la tinichigerie, vopsitorie și ITP — totul într-un singur loc.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
