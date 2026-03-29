import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Rocket, CheckCircle } from "lucide-react";

const points = [
  "Identificăm cauza reală, nu doar simptomul",
  "Prevenim defecte viitoare",
  "Optimizăm costurile pe termen lung",
  "Oferim experiență, nu doar intervenții",
];

export default function DifferentiatorSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="de-ce-noi" className="py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 max-w-4xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Diferențiator</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            De ce Autohub nu este
            <br />
            <span className="text-muted-foreground">un service obișnuit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Majoritatea service-urilor repară problema. Noi mergem mai departe:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {points.map((p) => (
            <div key={p} className="flex items-start gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 transition-all">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-5 h-5 text-primary" />
              </div>
              <span className="text-foreground text-lg font-medium">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
