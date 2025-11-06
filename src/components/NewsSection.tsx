import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const news = [
  {
    title: "Sample Post With Youtube Video",
    date: "June 10, 2017",
    category: "Karate",
    excerpt: "Bacon pastrami corned beef, strip steak fatback landjaeger swine spare ribs frank bacon alcatra biltong venison andouille hamburger tri-tip ham pork chop sirloin.",
    image: news1,
    views: "9,620",
    likes: "1",
  },
  {
    title: "Sample Post With Carousel",
    date: "June 10, 2017",
    category: "MMA",
    excerpt: "Turducken meatball tenderloin kevin, brisket shankle ham sirloin frankfurter pork andouille ball tip short ribs turkey burgdoggen.",
    image: news2,
    views: "1",
    likes: "0",
  },
  {
    title: "Iain Aber Karate Seminar in Los Angeles",
    date: "August 11, 2017",
    category: "Karate",
    excerpt: "A special treat is coming up, when world-renown Iain Aber will be in Los Angeles.",
    image: news3,
    views: "2,756",
    likes: "5",
  },
];

export const NewsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-sm font-bold text-primary uppercase tracking-wider mb-2">
            Latest News
          </div>
          <h2 className="text-4xl md:text-5xl font-black uppercase mb-6">
            Latest news
          </h2>
          <div className="h-1 w-24 bg-primary mx-auto" />
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden bg-card border-border hover:border-primary transition-colors">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm text-muted-foreground">{item.date}</span>
                  <Badge variant="outline" className="border-primary text-primary">
                    {item.category}
                  </Badge>
                </div>
                <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4">{item.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span>{item.likes} Likes</span>
                  <span>{item.views} Views</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
