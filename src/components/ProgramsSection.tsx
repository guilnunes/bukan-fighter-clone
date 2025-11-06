import { Card, CardContent } from "@/components/ui/card";
import programKickboxing from "@/assets/program-kickboxing.jpg";
import programJiujitsu from "@/assets/program-jiujitsu.jpg";
import programKungfu from "@/assets/program-kungfu.jpg";
import programKids from "@/assets/program-kids.jpg";
import programTeenAdult from "@/assets/program-teen-adult.jpg";
import programTraditional from "@/assets/program-traditional.jpg";

const programs = [
  {
    title: "Kick Boxing Group",
    time: "11:00-12:00 am",
    instructor: "Jared Henry",
    description: "Short loin andouille bresaola, swine jowl beef ribs venison capicola jerky ham pig.",
    image: programKickboxing,
  },
  {
    title: "Jiu Jitsu Group",
    time: "7:00-8:00 am",
    instructor: "Vincent Osborne",
    description: "Salami turkey beef ribs hamburger. Pork loin capicola tri-tip pork chop strip.",
    image: programJiujitsu,
  },
  {
    title: "Kung-Fu Group",
    time: "9:00-10:00 pm",
    instructor: "Ryan Munoz",
    description: "Corned beef fatback beef kevin pork belly ribeye tongue porchetta spare ribs sausage.",
    image: programKungfu,
  },
  {
    title: "Kids Karate Groups",
    time: "10:00-11:00 am",
    instructor: "Lizzie Meyer",
    description: "Ribeye kevin shank bacon bris fatback. Sirloin frankfurter brisket, tri-tip pork chicken.",
    image: programKids,
  },
  {
    title: "Teen & Adult Karate",
    time: "5:00-6:00 am",
    instructor: "Alejandro Diaz",
    description: "Tenderloin jerky ground round landjaeger pork ham pancetta pastrami turkey.",
    image: programTeenAdult,
  },
  {
    title: "Traditional Martial Arts",
    time: "6:00-7:00 pm",
    instructor: "Cole Butler",
    description: "Filet mignon bresaola doner, buffalo pork belly meatball meatl swine sirloin.",
    image: programTraditional,
  },
];

export const ProgramsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Services
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Our programs
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border hover:border-primary transition-colors">
              <img 
                src={program.image} 
                alt={program.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{program.title}</h3>
                <p className="text-sm text-primary font-semibold mb-4">
                  {program.time} / {program.instructor}
                </p>
                <p className="text-muted-foreground">{program.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
