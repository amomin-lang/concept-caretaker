import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const Services = () => {
  const services = [
    {
      title: "Legal Proceedings & Disputes",
      description: "Expert valuations that stand up to legal scrutiny. We provide detailed, well-documented business valuations for legal proceedings, shareholder disputes, and partnership dissolutions. Our reports are court-ready and defendable, backed by real market data and thorough analysis.",
      benefits: [
        "Court-ready documentation",
        "Defendable methodologies",
        "Expert witness support",
        "Detailed analysis"
      ]
    },
    {
      title: "Succession Planning",
      description: "Plan your business transition with confidence. Our succession planning valuations help you understand your business's true worth and establish fair terms for ownership transfers. We consider both tangible and intangible assets to ensure a comprehensive valuation.",
      benefits: [
        "Fair ownership transfer terms",
        "Comprehensive asset analysis",
        "Future planning insights",
        "Tax-efficient structures"
      ]
    },
    {
      title: "Exit Strategy",
      description: "Maximize your business value before sale. Our exit strategy valuations include detailed analysis of value drivers and growth opportunities. We help you identify areas for improvement to increase your business's worth before going to market.",
      benefits: [
        "Value maximization strategies",
        "Market readiness assessment",
        "Growth opportunity identification",
        "Strategic positioning advice"
      ]
    },
    {
      title: "Tax Purposes",
      description: "Comply with tax requirements while optimizing your position. Our tax-purpose valuations meet ATO standards and help you make informed decisions about capital gains, restructuring, and tax planning.",
      benefits: [
        "ATO compliance assurance",
        "Tax optimization strategies",
        "Capital gains planning",
        "Restructuring support"
      ]
    },
    {
      title: "Mergers & Acquisitions",
      description: "Navigate complex transactions with confidence. Our M&A valuations provide comprehensive analysis for both buyers and sellers, ensuring fair pricing and identifying potential synergies or risks in the transaction.",
      benefits: [
        "Fair transaction pricing",
        "Synergy identification",
        "Risk assessment",
        "Due diligence support"
      ]
    },
    {
      title: "Financial Reporting",
      description: "Meet accounting standards with precision. Our financial reporting valuations comply with Australian Accounting Standards and International Financial Reporting Standards for goodwill impairment, purchase price allocations, and fair value measurements.",
      benefits: [
        "Standards compliance",
        "Impairment testing",
        "Purchase price allocation",
        "Fair value measurement"
      ]
    }
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Our Services</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Comprehensive business valuation services tailored to your specific needs</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex gap-8">
              <div className="flex-1 max-w-5xl">
                
                {/* Introduction */}
                <div className="mb-16 text-center">
                  <h2 className="text-3xl font-bold text-primary mb-6">Professional Business Valuation Services</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Each valuation is backed by real market data and extensive industry experience. 
                      We provide detailed, defensible valuations that meet the highest professional standards.
                    </p>
                  </div>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                  {services.map((service, index) => (
                    <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                      <CardContent className="p-8 h-full flex flex-col">
                        <div className="flex-1">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white text-lg font-bold mb-6">
                            {index + 1}
                          </div>
                          <h3 className="text-xl font-bold text-foreground mb-4">{service.title}</h3>
                          <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                          
                          <div className="mb-6">
                            <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                            <ul className="space-y-2">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <li key={benefitIndex} className="flex items-center text-sm text-muted-foreground">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                         <div className="mt-auto">
                           <Button variant="outline" className="w-full" asChild>
                              <Link to={
                                index === 0 ? "/services/legal-proceedings" : 
                                index === 1 ? "/services/succession-planning" : 
                                index === 2 ? "/services/exit-strategy" :
                                index === 3 ? "/services/tax-purposes" :
                                index === 4 ? "/services/mergers-acquisitions" :
                                "#"
                              }>
                               Learn More
                             </Link>
                           </Button>
                         </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-muted/30 rounded-lg p-8 mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Why Choose Our Valuation Services?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        ✓
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Real Market Data</h4>
                      <p className="text-sm text-muted-foreground">Our valuations are backed by extensive real-world transaction data and market intelligence.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        📊
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Industry Expertise</h4>
                      <p className="text-sm text-muted-foreground">Deep understanding of industry-specific value drivers and market conditions.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        🛡️
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Defensible Reports</h4>
                      <p className="text-sm text-muted-foreground">Comprehensive documentation that stands up to scrutiny and meets professional standards.</p>
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

export default Services;