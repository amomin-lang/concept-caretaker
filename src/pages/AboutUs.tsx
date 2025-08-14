import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "@/components/BookingForm";
import heroImage from "@/assets/hero-business.jpg";

const AboutUs = () => {
  const teamMembers = [
  {
    name: "Zoran Sarabaca",
    title: "Principal",
    subtitle: "- Registered Business Valuer (RBV®) – AIBB\n- Certified Practicing Business Broker (CPBB®) – AIBB\n- Board Member - AIBB",
    experience: "- Experience in the Industry = 20 Years\n- Professional Experience = ",
    image: "/team/team-zoran.png",
  },
  {
    name: "Adeel Momin",
    title: "Chief Valuations Officer",
    subtitle: "- M.Com (UNSW), MBA (UCP)\n- Registered Business Valuer (RBV®) – AIBB\n- Certified Practicing Business Broker (CPBB®) – AIBB",
    experience: "- Experience in the Industry = 11 years\n- Professional Experience = 28 Years",
    image: "/team/team-adeel.png",
  },
  {
    name: "Bernetta Lee",
    title: "CPA - Certified Public Accountant",
    subtitle: "Certified Public Accountant – CPA Australia",
    experience: "",
    image: "/team/team-bernetta.png",
  },
  {
    name: "Choon Ng",
    title: "Registered Business Valuer - AIBB",
    subtitle: "Bachelors of Engineering, Masters of Business",
    experience: "Registered Business Valuer (RBV®) – AIBV, Certified Practicing Business Broker (CPBB®) – AIBB",
    image: "/team/team-choon.png",
  },
  {
    name: "Fred Fareau",
    title: "Registered Business Valuer - AIBB",
    subtitle: "Registered Business Valuer (RBV®) – AIBV",
    experience: "Certified Practicing Business Broker (CPBB®) – AIBB, Certified Business Coach, Experience in the Industry = 12 Years",
    image: "/team/team-fred.png",
  },
  {
    name: "Denise Hall",
    title: "Certified Business Valuer - AVI",
    subtitle: "Masters, Entrepreneurship and Innovation",
    experience: "Certified Business Valuer - Australian Valuers Institute Coop Limited, Certified Practicing Business Broker (CPBB®) – AIBB",
    image: "/team/team-denise.png",
  }
];

  const scenarios = [
    "Family law settlements",
    "Partnership disputes", 
    "Tax restructures",
    "Litigation support",
    "Strategic planning",
    "Business sales",
    "Restructuring",
    "Insolvency"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">About Us</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">A Team of Diverse Experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex gap-8">
              <div className="flex-1 max-w-4xl">
              
                {/* Team Overview */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-6">A Team of Diverse Experts</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6 text-xl">
                      Our team comprises over 40 professionals across Australia, including registered 
                      business valuers, mergers and acquisitions specialists, business sales experts, MBAs, 
                      Commerce Graduates and CPAs. This diverse blend of academic knowledge and hands-
                      on experience ensures that our valuations are both precise and practical.
                    </p>
                  </div>
                </div>

                {/* Bridging Theory and Reality */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-6">
                    From Business Sales to Valuations: Bridging the Gap Between Theory and Reality
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6 text-xl">
                      Our journey began with a focus on business sales, where we identified a significant gap 
                      in the market: the need for business valuations that are not only academically sound but 
                      also grounded in real-world market conditions. Traditional valuations often relied heavily 
                      on theoretical models, sometimes producing figures that didn't align with actual sale 
                      prices. Recognising this disconnect, we established a dedicated business valuation 
                      division to provide assessments that truly reflect market realities.
                    </p>
                  </div>
                </div>

                {/* Extensive Experience */}
                <div className="mb-16">
                  <div className="relative bg-gradient-subtle rounded-3xl p-12 shadow-elegant border border-primary/10">
                    {/* Background decoration */}
                    <div className="absolute top-6 right-6 w-32 h-32 bg-gradient-accent rounded-full opacity-10"></div>
                    <div className="absolute bottom-6 left-6 w-24 h-24 bg-gradient-hero rounded-full opacity-10"></div>
                    
                    <div className="relative z-10">
                      <h2 className="text-4xl font-bold text-primary mb-8 text-center">
                        Extensive Experience Across Various Scenarios
                      </h2>
                      <p className="text-muted-foreground mb-10 text-xl text-center max-w-3xl mx-auto">
                        To date, we've completed over <span className="text-primary font-bold text-2xl">500+</span> business valuations for a wide range of purposes, including:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                        {scenarios.map((scenario, index) => (
                          <div 
                            key={index} 
                            className="group flex items-center space-x-4 p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-card/70 transition-all duration-300 hover-scale"
                            style={{ animationDelay: `${index * 100}ms` }}
                          >
                            <div className="w-3 h-3 bg-gradient-accent rounded-full group-hover:scale-125 transition-transform duration-300 flex-shrink-0"></div>
                            <span className="text-foreground font-medium text-lg group-hover:text-primary transition-colors duration-300">
                              {scenario}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="text-center">
                        <div className="inline-block bg-primary/5 border border-primary/20 rounded-2xl px-8 py-6">
                          <p className="text-primary text-xl font-semibold">
                            Our valuations are tailored to meet the specific needs of each scenario, ensuring 
                            relevance and reliability.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Court-tested */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-6">Court-tested and Defensible Valuations</h2>
                  <p className="text-muted-foreground text-xl">
                    Our valuations have stood up in court, with our experts serving as credible witnesses in 
                    legal proceedings. This track record underscores our commitment to delivering 
                    assessments that are not only accurate but also defensible under scrutiny.
                  </p>
                </div>

                {/* Meet Our Team */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">
                    Meet Our Key Valuation Professionals
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {teamMembers.map((member, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 relative">
                        {/* CPA Logo for Bernetta Lee */}
                        {member.name === "Bernetta Lee" && (
                          <div className="absolute top-4 right-4 w-20 h-20">
                            <img
                              src="/lovable-uploads/d5a2696d-9a30-49bd-ad61-c48147b5d4a8.png"
                              alt="CPA Australia"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        {/* AVI Logo for AAJ */}
                        {member.name === "Denise Hall" && (
                          <div className="absolute top-4 right-4 w-32 h-24">
                            <img
                              src="/lovable-uploads/59bfffa4-4329-4413-8181-4f6e614c9962.png"
                              alt="Australian Valuers Institute"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        {/* RBV Logo for multiple members */}
                        {(member.name === "Adeel Momin" || member.name === "Zoran Sarabaca" || member.name === "Choon Ng" || member.name === "Fred Fareau") && (
                          <div className="absolute top-4 right-4 w-24 h-24">
                            <img
                              src="/lovable-uploads/83487612-3fb6-4afa-8538-3edceebb2578.png"
                              alt="Registered Business Valuer"
                              className="w-full h-full object-contain"
                            />
                          </div>
                        )}
                        <CardContent className="p-6">
                          <div className="text-center">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-32 h-32 rounded-full object-cover border-2 border-primary shadow mx-auto mb-4"
                            />
                            <h3 className="font-bold text-foreground text-xl mb-2">{member.name}</h3>
                            <Badge variant="outline" className="mb-4 text-base">{member.title}</Badge>
                            {member.subtitle && (
                              <div className="text-base text-muted-foreground mb-4 whitespace-pre-line text-left">{member.subtitle}</div>
                            )}
                            {member.experience && (
                              <div className="text-sm text-muted-foreground whitespace-pre-line text-left">{member.experience}</div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

              </div>
              
              {/* Sliding Form */}
              <div className="hidden lg:block w-80">
                <div className="sticky top-24 transform transition-transform duration-300 ease-out">
                  <BookingForm />
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;