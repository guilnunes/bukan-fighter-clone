export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              Call us 24/7
            </div>
            <div className="text-2xl font-bold text-foreground">
              +1-202-555-0140
            </div>
          </div>
          
          <div>
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              Season Street 45/2
            </div>
            <div className="text-2xl font-bold text-foreground">
              Los Angeles, INC - 4502
            </div>
          </div>
          
          <div>
            <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
              Working Hours
            </div>
            <div className="text-2xl font-bold text-foreground">
              Daily: 9AM - 8PM
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
