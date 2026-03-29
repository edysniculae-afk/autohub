import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ShieldCheck, CheckCircle } from "lucide-react";

const points = [
  "Garanție pentru manoperă",
  "Piese certificate și verificate",
  "Respectarea specificațiilor producătorului",
  "Proceduri standardizate de lucru",
];

export default function GuaranteeSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32">
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 max-w-4xl transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
              <ShieldCheck className="w-7 h-7 text-primary" />
            </div>
            <div>
              <span className="text-primary font-semibold text-sm tracking-wider uppercase block">Garanție & Calitate</span>
              <h2 className="text-2xl md:text-3xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Lucrări garantate. Fără compromisuri.
              </h2>
            </div>
          </div>
          <p className="text-muted-foreground text-lg mb-8">
            La Autohub Service Pipera, calitatea nu este opțională.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {points.map((p) => (
              <div key={p} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{p}</span>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground mt-8 text-lg">
            Ne asigurăm că fiecare intervenție este durabilă și sigură.
          </p>
        </div>
      </div>
    </section>
  );
}
