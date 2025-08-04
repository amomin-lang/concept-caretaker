import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Choon Ng",
      title: "AIBV RBV",
      certification: "Certified Expert Valuer"
    },
    {
      name: "Ben Smith",
      title: "CPA",
      certification: "Senior Valuation Analyst"
    },
    {
      name: "David Chen",
      title: "CFA",
      certification: "Financial Analyst"
    },
    {
      name: "Bernadette Lee",
      title: "CPA",
      certification: "Business Advisor"
    },
    {
      name: "Sarah Wilson",
      title: "MBA",
      certification: "Market Research Specialist"
    },
    {
      name: "Michael Brown",
      title: "FCA",
      certification: "Senior Partner"
    },
    {
      name: "First Francis",
      title: "Director",
      certification: "Strategic Consultant"
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Team of Certified Expert Valuers
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mb-16">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center text-white text-xl font-bold">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="font-semibold text-foreground mb-1">{member.name}</h3>
                <Badge variant="outline" className="mb-2">{member.title}</Badge>
                <p className="text-sm text-muted-foreground">{member.certification}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};