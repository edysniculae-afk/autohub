import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Quote } from "lucide-react";

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div
        ref={ref}
        className={`container mx-auto px-4 md:px-8 relative z-10 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="text-primary font-semibold text-sm tracking-wider uppercase mb-4 block">Testimoniale</span>
        <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Clienții noștri revin
          <span className="text-muted-foreground"> pentru că au încredere</span>
        </h2>
        <div className="max-w-2xl mx-auto">
          <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <Quote className="w-7 h-7 text-primary" />
          </div>
          <blockquote className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            „Punem accent pe relații pe termen lung, nu doar pe reparații punctuale."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
