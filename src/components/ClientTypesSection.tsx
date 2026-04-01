import { useScrollReveal } from "@/hooks/useScrollReveal";
import { User, Car, Smartphone, Building2, Warehouse } from "lucide-react";

const clients = [
  { icon: User, title: "Clienți individuali", desc: "Persoane fizice cu orice tip de vehicul" },
  { icon: Car, title: "Flote auto", desc: "Mentenanță completă pentru parcuri auto" },
  { icon: Smartphone, title: "Ride-sharing", desc: "Uber, Bolt  - intervenții rapide" },
  { icon: Building2, title: "Leasing & firme", desc: "Colaborări cu companii de leasing" },
  { icon: Warehouse, title: "Companii cu parc auto", desc: "Soluții personalizate pe termen lung" },
];

export default function ClientTypesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 relative z-10 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Clienți</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Lucrăm atât cu persoane fizice,
            <span className="text-muted-foreground"> cât și cu companii</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-8">
          {clients.map((c) => {
            const Icon = c.icon;
            return (
              <div key={c.title} className="p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all text-center group">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-bold mb-1">{c.title}</h3>
                <p className="text-muted-foreground text-sm">{c.desc}</p>
              </div>
            );
          })}
        </div>

        <p className="text-center text-muted-foreground text-lg max-w-2xl mx-auto">
          Oferim soluții personalizate pentru mentenanță și costuri optimizate pe termen lung.
        </p>
      </div>
    </section>
  );
}
