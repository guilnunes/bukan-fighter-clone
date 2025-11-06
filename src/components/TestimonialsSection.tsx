import { Card, CardContent } from "@/components/ui/card";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

const testimonials = [
  {
    name: "John Phillips",
    role: "Visitor",
    content: "Corned beef pancetta sirloin ground round. Strip steak short ribs ham hock ball tip bresaola beef ribs chicken frankfurter. Picanha hamburger sausage pig spare ribs boudin pork loin porchetta drumstick.",
    image: testimonial1,
  },
  {
    name: "Wesley Green",
    role: "Investor",
    content: "Biltong ham sausage bacon. T-bone pastrami rump fatback capicola jerky ground round salami drumstick turkey pork turducken kevin. Beef ribs leberkas pancetta strip steak pig brisket.",
    image: testimonial2,
  },
  {
    name: "Clifford Carter",
    role: "Visitors / Businessman",
    content: "Pork belly shankle brisket pig swine sausage landjaeger tri-tip drumstick kielbasa burgdoggen pork chop prosciutto rump ground round. Andouille ribeye chicken swine. Biltong rump venison.",
    image: testimonial3,
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            What clients say
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-background border-border">
              <CardContent className="p-8">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 mx-auto"
                />
                <h3 className="text-xl font-bold mb-1 text-center">{testimonial.name}</h3>
                <p className="text-sm text-primary font-semibold mb-6 text-center uppercase">
                  {testimonial.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {testimonial.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
