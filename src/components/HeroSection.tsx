import { Button } from "@/components/ui/button";
import { ArrowRight, PhoneCall } from "lucide-react";
import heroImg from "@/assets/hero-service.jpg";

export default function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImg}
        alt="Service auto modern Autohub Service Pipera"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 to-transparent" />

      <div className="relative z-10 container mx-auto px-4 md:px-8 text-center md:text-left max-w-5xl">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Service Auto Premium
        </div>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          <span className="text-primary">Autohub</span> Service
          <br />
          <span className="text-muted-foreground">Pipera</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
          Service auto premium în București. Mecanică, electrică, tinichigerie & vopsitorie — totul sub un singur acoperiș.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a href="#contact">
            <Button size="lg" className="gap-2 bg-primary hover:bg-primary/90 text-base px-8 h-12 w-full sm:w-auto">
              Programează-te <ArrowRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="tel:+40700000000">
            <Button size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-base px-8 h-12 w-full sm:w-auto">
              <PhoneCall className="w-5 h-5" /> Solicită ofertă
            </Button>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
}
