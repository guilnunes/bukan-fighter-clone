import { Button } from "@/components/ui/button";
import heroFighter from "@/assets/hero-fighter.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background to-card">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(230,57,70,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-black uppercase leading-tight">
                <span className="text-foreground">Welcome to</span>
                <br />
                <span className="text-foreground">Karate and martial</span>
                <br />
                <span className="text-foreground">arts school</span>
              </h1>
              <div className="h-1 w-24 bg-primary" />
            </div>
            
            <p className="text-lg text-muted-foreground max-w-md">
              Flank buffalo turducken tongue cow. Chuck pancetta tongue.
            </p>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider text-sm px-8 py-6 uppercase"
            >
              Get a free lesson
            </Button>
          </div>
          
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-background/50 to-background z-10" />
              <img 
                src={heroFighter} 
                alt="Martial artist in fighting stance" 
                className="w-full h-auto object-cover rounded-lg lg:rounded-none"
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 lg:left-auto lg:right-12 lg:translate-x-0 flex gap-4 z-20">
        <button className="text-primary font-bold text-lg hover:scale-110 transition-transform">
          01
        </button>
        <button className="text-muted-foreground font-bold text-lg hover:text-primary hover:scale-110 transition-all">
          02
        </button>
        <button className="text-muted-foreground font-bold text-lg hover:text-primary hover:scale-110 transition-all">
          03
        </button>
      </div>
    </section>
  );
};
