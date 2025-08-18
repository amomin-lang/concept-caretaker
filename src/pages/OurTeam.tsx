import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "@/components/BookingForm";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const OurTeam = () => {
  const teamMembers = [
    {
      name: "Zoran Sarabaca",
      title: "Principal",
      subtitle: "- Certified Practicing Business Broker (CPBB®) – AIBB\n- Registered Business Valuer (RBV®) – AIBB\n- Board Member - AIBB",
      experience: "- Experience in the Industry = 20 Years\n- Professional Experience = ",
      image: "/team/team-zoran.png",
      logo: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Adeel Momin",
      title: "Chief Valuations Officer",
      subtitle: "- M.Com (UNSW), MBA (UCP), BBA (UCP)\n- Registered Business Valuer (RBV®) – AIBB\n- Certified Practicing Business Broker (CPBB®) – AIBB",
      experience: "- Experience in the Industry = 11 years\n- Professional Experience = 28 Years",
      image: "/team/team-adeel.png",
      logo: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Bernetta Lee",
      title: "CPA - Certified Public Accountant",
      subtitle: "- Certified Public Accountant – CPA Australia",
      experience: "- Experience in the Industry = 13 years\n- Professional Experience = 26 Years",
      image: "/team/team-bernetta.png",
      logo: "/lovable-uploads/65551761-68ad-47ff-a965-f71c6e76527a.png"
    },
    {
      name: "Choon Ng",
      title: "Registered Business Valuer - AIBB",
      subtitle: "- Masters of Business, Bachelors of Engineering\n- Certified Practicing Business Broker (CPBB®) – AIBB",
      experience: "- Experience in the Industry = 21 Years\n- Professional Experience = 30 Years",
      image: "/team/team-choon.png",
      logo: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Fred Fareau",
      title: "Registered Business Valuer - AIBB",
      subtitle: "- Master of Business Management\n- Certified Practicing Business Broker (CPBB®) – AIBB\n- Certified Business Coach",
      experience: "- Experience in the industry = 4 Years\n- Professional Experience = 25 Years",
      image: "/team/team-fred.png",
      logo: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Denise Hall",
      title: "Certified Business Valuer - AVI",
      subtitle: "- Masters, Entrepreneurship and Innovation\n- Bachelors of Training and Development\n- Certified Practicing Business Broker (CPBB®) – AIBB",
      experience: "- Experience in the Industry = 13 years\n- Professional Experience = 30 years",
      image: "/team/team-denise.png",
      logo: "/lovable-uploads/d5a2696d-9a30-49bd-ad61-c48147b5d4a8.png"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Back to About Us Link */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-6">
            <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
              <Link to="/about" className="inline-flex items-center">
                ← Back to About Us
              </Link>
            </Button>
          </div>
        </div>

        {/* Hero Section */}
        <section 
          className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Our Team</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Meet Our Key Valuation Professionals</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex gap-8">
              <div className="flex-1 max-w-6xl">
                
                {/* Introduction */}
                <div className="mb-16 text-center">
                  <h2 className="text-3xl font-bold text-primary mb-6">Our Expert Team</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Our team of qualified business valuation professionals brings extensive industry experience 
                      and professional credentials to every valuation engagement.
                    </p>
                  </div>
                </div>

                {/* Team Members Grid */}
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
                      {/* AVI Logo for Denise Hall */}
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
                            <div className="text-base mb-4 text-left">
                              {member.subtitle.split('\n').map((line, lineIndex) => (
                                <div key={lineIndex} className={
                                  line.includes('Registered Business Valuer (RBV®)') 
                                    ? 'text-primary font-medium' 
                                    : 'text-muted-foreground'
                                }>
                                  {line}
                                </div>
                              ))}
                            </div>
                          )}
                          {member.experience && (
                            <div className="text-sm text-muted-foreground whitespace-pre-line text-left">{member.experience}</div>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                  <div className="bg-gradient-hero text-primary-foreground rounded-lg p-8">
                    <h3 className="text-2xl font-bold mb-4">Work with Our Expert Team</h3>
                    <p className="text-lg mb-6 opacity-90">
                      Our qualified professionals are ready to help you with your business valuation needs. 
                      Contact us today to discuss your requirements.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Button size="lg" variant="secondary" asChild>
                        <a href="tel:1800825831" className="inline-flex items-center">
                          📞 Call: 1800 825 831
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                        <Link to="/contact" className="inline-flex items-center">
                          📧 Contact Us
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>

              </div>
              
              {/* Sticky Booking Form */}
              <div className="hidden lg:block w-80">
                <div className="sticky top-24">
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

export default OurTeam;