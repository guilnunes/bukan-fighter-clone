export const AboutSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            About
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            About Fight school
          </h2>
          <div className="h-1 w-24 bg-primary mb-8" />
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Fight School has specialized in martial arts since 1986 and has one of the most innovative programs in the nation.
          </p>
          
          <p className="text-muted-foreground mb-8 leading-relaxed">
            We teach martial arts because we love it — not because we want to make money on you. Unlike other martial arts schools, we do not require you to sign long term contracts. You just pay one low monthly fee for your martial arts and self defense classes at the beginning of each month.
          </p>
          
          <div className="pt-8 border-t border-border">
            <h3 className="text-2xl font-bold mb-2">Aiden Richards</h3>
            <p className="text-primary font-semibold">Director / Instructor</p>
          </div>
        </div>
      </div>
    </section>
  );
};
