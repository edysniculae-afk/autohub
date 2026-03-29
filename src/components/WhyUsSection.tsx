import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Eye, Cpu, Award, MessageCircle } from "lucide-react";

const reasons = [
  {
    icon: Eye,
    title: "Transparență totală",
    desc: "Comunici direct cu mecanicul. Primești explicații clare, fără surprize.",
  },
  {
    icon: Cpu,
    title: "Tehnologie modernă",
    desc: "Echipamente de diagnoză de ultimă generație pentru rezultate precise.",
  },
  {
    icon: Award,
    title: "Experiență 10+ ani",
    desc: "Echipă de profesioniști certificați cu experiență vastă pe toate mărcile.",
  },
  {
    icon: MessageCircle,
    title: "Comunicare constantă",
    desc: "Te ținem la curent cu fiecare etapă a procesului de reparație.",
  },
];

export default function WhyUsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="de-ce-noi" className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">De Ce Noi</span>
          <h2
            className="text-3xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Calitate de Dealer.
            <br />
            <span className="text-muted-foreground">Abordare Personalizată.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="group p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {r.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
