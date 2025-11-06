import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export const FreePassSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              Form Section
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Get your FREE Pass
            </h2>
            <div className="h-1 w-24 bg-primary mb-8" />
            
            <Card className="bg-background border-border">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Full Name *" 
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel"
                      placeholder="Your Phone *" 
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="date"
                      placeholder="Date *" 
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <Input 
                      type="time"
                      placeholder="Time *" 
                      required
                      className="bg-card border-border"
                    />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="Your message *" 
                      required
                      rows={5}
                      className="bg-card border-border"
                    />
                  </div>
                  <Button 
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold tracking-wider uppercase"
                  >
                    Get Pass Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              One Half
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
              Sparring / FAQ
            </h2>
            <div className="h-1 w-24 bg-primary mb-8" />
            
            <div className="space-y-6">
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    Do I have to be in shape to get started?
                  </h3>
                  <p className="text-muted-foreground">
                    Not at all. You'll find that our classes for beginners are the perfect way to build up your overall fitness level regardless of your physical condition. Good luck!
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    Can I come and watch a class?
                  </h3>
                  <p className="text-muted-foreground">
                    Shoulder jerky biltong short ribs. Meatball beef pancetta ball tip cow turkey corned beef strip steak flank meatloaf cupim. Burgdoggen pork chop t-bone andouille drumstick.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    Am I too old to start martial arts training?
                  </h3>
                  <p className="text-muted-foreground">
                    Shoulder jerky biltong short ribs. Meatball beef pancetta ball tip cow turkey corned beef strip steak flank meatloaf cupim. Burgdoggen pork chop t-bone andouille drumstick.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-background border-border">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-3">
                    Will I get hurt during the training?
                  </h3>
                  <p className="text-muted-foreground">
                    Shoulder jerky biltong short ribs. Meatball beef pancetta ball tip cow turkey corned beef strip steak flank meatloaf cupim. Burgdoggen pork chop t-bone andouille drumstick.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
