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
          <a href="tel:+40748018401">
            <Button size="lg" variant="outline" className="gap-2 border-primary/30 text-primary hover:bg-primary/10 text-base px-8 h-12 w-full sm:w-auto">
              <PhoneCall className="w-5 h-5" /> Solicită ofertă
            </Button>
          </a>
        </div>
      </div>

    </section>
  );
}
