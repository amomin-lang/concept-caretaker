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
    subtitle: "- Certified Practicing Business Broker (CPBB®) – AIBB\n- Registered Business Valuer (RBV®) – AIBB\n- Board Member - AIBB",
    experience: "- Experience in the Industry = 20 Years\n- Professional Experience = 30 years",
    image: "/team/team-zoran.png",
  },
  {
    name: "Adeel Momin",
    title: "Chief Valuations Officer",
    subtitle: "- M.Com (UNSW), MBA (UCP), BBA (UCP)\n- Registered Business Valuer (RBV®) – AIBB\n- Certified Practicing Business Broker (CPBB®) – AIBB",
    experience: "- Experience in the Industry = 11 years\n- Professional Experience = 28 Years",
    image: "/team/team-adeel.png",
  },
  {
    name: "Bernetta Lee",
    title: "CPA - Certified Public Accountant",
    subtitle: "- Certified Public Accountant – CPA Australia",
    experience: "- Experience in the Industry = 13 years\n- Professional Experience = 26 Years",
    image: "/team/team-bernetta.png",
  },
  {
    name: "Choon Ng",
    title: "Registered Business Valuer - AIBB",
    subtitle: "- Masters of Business, Bachelors of Engineering\n- Certified Practicing Business Broker (CPBB®) – AIBB",
    experience: "- Experience in the Industry = 21 Years\n- Professional Experience = 30 Years",
    image: "/team/team-choon.png",
  },
  {
    name: "Fred Fareau",
    title: "Registered Business Valuer - AIBB",
    subtitle: "- Master of Business Management\n- Certified Practicing Business Broker (CPBB®) – AIBB\n- Certified Business Coach",
    experience: "- Experience in the industry = 4 Years\n- Professional Experience = 25 Years",
    image: "/team/team-fred.png",
  },
  {
    name: "Denise Hall",
    title: "Certified Business Valuer - AVI",
    subtitle: "- Masters, Entrepreneurship and Innovation\n- Bachelors of Training and Development\n- Certified Practicing Business Broker (CPBB®) – AIBB",
    experience: "- Experience in the Industry = 13 years\n- Professional Experience = 30 years",
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
          className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">About Us</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 border border-white/20">
                <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold text-white drop-shadow-lg">Business Valuation Team of Diverse Experts</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12 lg:py-16 relative">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
              <div className="flex-1 max-w-4xl">
              
                {/* Team Overview */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">Business Valuation Team of Diverse Experts</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed">
                      Our team comprises over 40 professionals across Australia, including registered 
                      business valuers, mergers and acquisitions specialists, business sales experts, MBAs, 
                      Commerce Graduates and CPAs. This diverse blend of academic knowledge and hands-
                      on experience ensures that our valuations are both precise and practical.
                    </p>
                  </div>
                </div>

                {/* Bridging Theory and Reality */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">
                    From Business Sales to Valuations: Bridging the Gap Between Theory and Reality
                  </h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-4 sm:mb-6 text-base sm:text-lg lg:text-xl leading-relaxed">
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
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <div className="relative bg-gradient-subtle rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-elegant border border-primary/10">
                    {/* Background decoration */}
                    <div className="absolute top-3 right-3 sm:top-6 sm:right-6 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gradient-accent rounded-full opacity-10"></div>
                    <div className="absolute bottom-3 left-3 sm:bottom-6 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 lg:w-24 lg:h-24 bg-gradient-hero rounded-full opacity-10"></div>
                    
                    <div className="relative z-10">
                      <h2 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold text-primary mb-4 sm:mb-6 lg:mb-8 text-center">
                        Extensive Experience Across Various Scenarios
                      </h2>
                      <p className="text-muted-foreground mb-6 sm:mb-8 lg:mb-10 text-base sm:text-lg lg:text-xl text-center max-w-3xl mx-auto">
                        To date, we've completed over <span className="text-primary font-bold text-lg sm:text-xl lg:text-2xl">500+</span> business valuations for a wide range of purposes, including:
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 lg:mb-10">
                        {scenarios.map((scenario, index) => (
                          <div 
                            key={index} 
                            className="group flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-card/50 backdrop-blur-sm rounded-lg sm:rounded-xl border border-primary/10 hover:border-primary/20 hover:bg-card/70 transition-all duration-300 hover-scale"
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
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">Court-tested and Defensible Valuations</h2>
                  <p className="text-muted-foreground text-base sm:text-lg lg:text-xl leading-relaxed">
                    Our valuations have stood up in court, with our experts serving as credible witnesses in 
                    legal proceedings. This track record underscores our commitment to delivering 
                    assessments that are not only accurate but also defensible under scrutiny.
                  </p>
                </div>

              </div>
              
              {/* Sliding Form */}
              <div className="lg:w-80 lg:flex-shrink-0">
                <div className="lg:sticky lg:top-24 transform transition-transform duration-300 ease-out">
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