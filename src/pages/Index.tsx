import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProgramsSection } from "@/components/ProgramsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { InstructorsSection } from "@/components/InstructorsSection";
import { FreePassSection } from "@/components/FreePassSection";
import { NewsSection } from "@/components/NewsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <AboutSection />
      <ProgramsSection />
      <TestimonialsSection />
      <InstructorsSection />
      <FreePassSection />
      <NewsSection />
      <Footer />
    </div>
  );
};

export default Index;
