import { useScrollReveal } from "@/hooks/useScrollReveal";
import {
  Clock, Brain, Eye, Monitor, MapPin, CheckCircle,
} from "lucide-react";

const blocks = [
  {
    icon: Clock,
    label: "Timp & Eficiență",
    title: "Respectăm timpul tău",
    desc: "Știm cât de importantă este mobilitatea, de aceea:",
    points: [
      "Respectăm termenele estimate",
      "Intervenim rapid acolo unde este posibil",
      "Prioritizăm urgențele reale",
    ],
  },
  {
    icon: Brain,
    label: "Consultanță Auto",
    title: "Te ajutăm să iei decizii corecte",
    desc: "Nu reparăm doar mașini.",
    points: [
      "Recomandări de întreținere preventivă",
      "Explicarea problemelor pe înțelesul tău",
      "Sfaturi pentru reducerea costurilor viitoare",
      "Evaluare corectă înainte de achiziția unei mașini",
    ],
  },
  {
    icon: Eye,
    label: "Transparență Totală",
    title: "Fără surprize. Fără costuri ascunse.",
    desc: "",
    points: [
      "Deviz înainte de orice lucrare",
      "Confirmare înainte de intervenții suplimentare",
      "Explicații clare pentru fiecare operațiune",
      "Acces la detalii despre piese și manoperă",
    ],
  },
  {
    icon: Monitor,
    label: "Dotări & Tehnologie",
    title: "Investim constant în echipamente moderne",
    desc: "Service-ul este dotat cu:",
    points: [
      "Standuri de diagnoză computerizată multimarcă",
      "Echipamente pentru geometrie 3D",
      "Sisteme moderne de vopsitorie și cabine profesionale",
      "Software actualizat pentru toate tipurile de vehicule",
    ],
  },
];

export default function InfoGridSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid md:grid-cols-2 gap-6">
          {blocks.map((b) => {
            const Icon = b.icon;
            return (
              <div key={b.label} className="p-6 md:p-8 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-primary font-semibold text-sm tracking-wider uppercase">{b.label}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {b.title}
                </h3>
                {b.desc && <p className="text-muted-foreground mb-4">{b.desc}</p>}
                <div className="space-y-2">
                  {b.points.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Coverage / Accessibility */}
        <div className="mt-6 p-6 md:p-8 rounded-2xl border border-border bg-card flex flex-col md:flex-row items-center gap-6">
          <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-primary" />
          </div>
          <div>
            <span className="text-primary font-semibold text-sm tracking-wider uppercase block mb-1">Acoperire & Accesibilitate</span>
            <h3 className="text-xl font-bold mb-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Ușor de ajuns. Rapid de rezolvat.
            </h3>
            <p className="text-muted-foreground">
              📍 Șoseaua Petricani nr. 86A, București  - Acces rapid din Sector 1 și Sector 2 • Zonă Pipera – Barbu Văcărescu – Tei
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
