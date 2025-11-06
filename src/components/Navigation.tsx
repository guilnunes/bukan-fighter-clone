import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xs font-bold text-muted-foreground tracking-wider">
              FIGHT SCHOOL
            </div>
            <div className="text-3xl font-black text-primary tracking-tight">
              BUKAN
            </div>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
              HOME
            </a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              PAGES
            </a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              EVENTS
            </a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              PROGRAMS
            </a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              BLOG
            </a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              SHOP
            </a>
            <a href="#" className="text-sm font-semibold text-muted-foreground hover:text-primary transition-colors">
              CONTACTS
            </a>
          </div>

          <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold tracking-wider text-sm">
            TRIAL OFFER
          </Button>
        </div>
      </div>
    </nav>
  );
};
