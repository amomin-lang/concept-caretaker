import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
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
      badge: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Adeel Momin",
      title: "Chief Valuations Officer",
      subtitle: "- M.Com (UNSW), MBA (UCP), BBA (UCP)\n- Registered Business Valuer (RBV®) – AIBB\n- Certified Practicing Business Broker (CPBB®) – AIBB",
      experience: "- Experience in the Industry = 11 years\n- Professional Experience = 28 Years",
      image: "/team/team-adeel.png",
      badge: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Bernetta Lee",
      title: "CPA - Certified Public Accountant",
      subtitle: "- Certified Public Accountant – CPA Australia",
      experience: "- Experience in the Industry = 13 years\n- Professional Experience = 26 Years",
      image: "/team/team-bernetta.png",
      badge: "/lovable-uploads/65551761-68ad-47ff-a965-f71c6e76527a.png"
    },
    {
      name: "Choon Ng",
      title: "Registered Business Valuer - AIBB",
      subtitle: "- Masters of Business, Bachelors of Engineering\n- Certified Practicing Business Broker (CPBB®) – AIBB",
      experience: "- Experience in the Industry = 21 Years\n- Professional Experience = 30 Years",
      image: "/team/team-choon.png",
      badge: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Fred Fareau",
      title: "Registered Business Valuer - AIBB",
      subtitle: "- Master of Business Management\n- Certified Practicing Business Broker (CPBB®) – AIBB\n- Certified Business Coach",
      experience: "- Experience in the industry = 4 Years\n- Professional Experience = 25 Years",
      image: "/team/team-fred.png",
      badge: "/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png"
    },
    {
      name: "Denise Hall",
      title: "Certified Business Valuer - AVI",
      subtitle: "- Masters, Entrepreneurship and Innovation\n- Bachelors of Training and Development\n- Certified Practicing Business Broker (CPBB®) – AIBB",
      experience: "- Experience in the Industry = \n- Professional Experience = ",
      image: "/team/team-denise.png",
      badge: "/lovable-uploads/d5a2696d-9a30-49bd-ad61-c48147b5d4a8.png"
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
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {teamMembers.map((member, index) => (
                    <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                      <CardContent className="p-6 h-full flex flex-col">
                        <div className="flex flex-col items-center mb-6">
                          <div className="relative mb-4">
                            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/20">
                              <img 
                                src={member.image} 
                                alt={member.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {member.badge && (
                              <div className="absolute -top-2 -right-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-lg">
                                <img 
                                  src={member.badge} 
                                  alt="Professional Badge"
                                  className="w-full h-full object-cover"
                                />
                              </div>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-foreground text-center">{member.name}</h3>
                          <p className="text-primary font-semibold text-center">{member.title}</p>
                        </div>
                        
                        <div className="flex-1">
                          <div className="mb-4">
                            <h4 className="font-semibold text-foreground mb-2">Qualifications:</h4>
                            <div className="text-sm text-muted-foreground whitespace-pre-line">
                              {member.subtitle}
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Experience:</h4>
                            <div className="text-sm text-muted-foreground whitespace-pre-line">
                              {member.experience}
                            </div>
                          </div>
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