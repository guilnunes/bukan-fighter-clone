import { Card, CardContent } from "@/components/ui/card";
import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";

const instructors = [
  {
    name: "Erik Warner",
    role: "Jiu-Jitsu Instructor",
    description: "Corned beef pork chop filet mignon prosciutto shankle burgdoggen pig shoulder biltong pork loin.",
    image: instructor1,
  },
  {
    name: "Brett Hawkins",
    role: "Kick Boxing Instructor",
    description: "Ball tip frankfurter beef ribs, brisket cupim kielbasa filet mignon ribs shank shoulder ham pork.",
    image: instructor2,
  },
  {
    name: "Garrett Farmer",
    role: "Kung-Fu Instructor",
    description: "Picanha turkey meatball pork cow rump leberkas swine pork loin tenderloin t-bone boudin.",
    image: instructor3,
  },
];

export const InstructorsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Team Members
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Our Instructors
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {instructors.map((instructor, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border hover:border-primary transition-colors">
              <img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-full h-80 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1">{instructor.name}</h3>
                <p className="text-sm text-primary font-semibold mb-4 uppercase">
                  {instructor.role}
                </p>
                <p className="text-muted-foreground">{instructor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
