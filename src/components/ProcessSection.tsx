import { useScrollReveal } from "@/hooks/useScrollReveal";
import { CalendarCheck, Search, FileText, Wrench, CheckCircle } from "lucide-react";

const steps = [
  { icon: CalendarCheck, title: "Programare rapidă", desc: "Telefonic sau online, fără timpi inutili de așteptare" },
  { icon: Search, title: "Diagnoză profesională", desc: "Identificăm exact problema folosind echipamente moderne" },
  { icon: FileText, title: "Ofertă transparentă", desc: "Primești deviz clar, fără costuri ascunse" },
  { icon: Wrench, title: "Execuția lucrării", desc: "Intervenție realizată de tehnicieni specializați" },
  { icon: CheckCircle, title: "Control final & livrare", desc: "Verificare completă înainte de predarea mașinii" },
];

export default function ProcessSection() {
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
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Procesul Nostru</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            Cum decurge o intervenție
            <br />
            <span className="text-muted-foreground">la Autohub Service Pipera</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-6 mb-12">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title} className="relative text-center group">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/40 to-primary/10" />
                )}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-xs text-primary font-bold mb-1">PASUL {i + 1}</div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Te ținem informat pe tot parcursul</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-5 h-5 text-primary" />
            <span>Nu efectuăm lucrări fără acordul tău</span>
          </div>
        </div>
      </div>
    </section>
  );
}
