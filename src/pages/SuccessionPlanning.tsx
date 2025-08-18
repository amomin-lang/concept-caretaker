import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { ArrowLeft, TrendingUp, Users, Target, FileCheck } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const SuccessionPlanning = () => {
  const keyFeatures = [
    {
      icon: <Users className="h-6 w-6" />,
      title: "Family business transition planning",
      description: "Structured approaches for generational transfers"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Management buyout valuations",
      description: "Fair pricing for employee ownership transitions"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Employee share schemes",
      description: "Valuation support for employee ownership programs"
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "Generational transfer strategies",
      description: "Tax-effective succession planning approaches"
    }
  ];

  const processSteps = [
    {
      title: "Current State Analysis",
      description: "We assess your current business value and identify the key value drivers that will impact your succession strategy."
    },
    {
      title: "Future Value Modeling",
      description: "We model different scenarios to show how value might change under various succession strategies and timeframes."
    },
    {
      title: "Implementation Support",
      description: "We provide ongoing support as you implement your chosen succession strategy, ensuring optimal outcomes."
    }
  ];

  const considerations = [
    {
      title: "Family Succession",
      description: "Transferring ownership to the next generation while maintaining family harmony and business continuity."
    },
    {
      title: "Management Buyouts",
      description: "Enabling key employees to acquire ownership through structured buyout arrangements."
    },
    {
      title: "Employee Ownership",
      description: "Creating employee share schemes that align incentives and reward long-term commitment."
    },
    {
      title: "Tax Planning",
      description: "Structuring succession plans to minimise tax implications and maximise after-tax proceeds."
    },
    {
      title: "Timing Strategies",
      description: "Determining the optimal timing for succession to maximise business value and personal outcomes."
    },
    {
      title: "Value Enhancement",
      description: "Identifying opportunities to increase business value prior to succession implementation."
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
              <div className="mb-4">
                <Link 
                  to="/services" 
                  className="inline-flex items-center space-x-2 text-white/80 hover:text-white transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  <span>Back to All Services</span>
                </Link>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Business Valuations for Succession Planning</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Plan your business transition with confidence</p>
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
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-6">Strategic Succession Planning</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Succession planning is one of the most critical decisions a business owner will make. Our comprehensive valuations provide the foundation for fair and effective transition strategies, whether you're planning to pass the business to family members, sell to employees, or prepare for an external sale.
                    </p>
                    <p className="text-lg mb-8">
                       We consider both tangible and intangible assets, including goodwill, customer relationships, and intellectual property, to ensure a complete picture of your business value. Our analysis also identifies potential value enhancement opportunities to maximise your transition outcomes.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {keyFeatures.map((feature, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                              {feature.icon}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                              <p className="text-sm text-muted-foreground">{feature.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Process Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Succession Planning Process</h3>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <Card key={index} className="shadow-card">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                              {index + 1}
                            </div>
                            <div>
                              <h4 className="font-bold text-foreground mb-2">{step.title}</h4>
                              <p className="text-muted-foreground">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Key Considerations */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Key Succession Planning Considerations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {considerations.map((consideration, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-foreground mb-3">{consideration.title}</h4>
                          <p className="text-sm text-muted-foreground">{consideration.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-muted/30 rounded-lg p-8 mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Why Our Succession Planning Approach Works</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        📊
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Comprehensive Analysis</h4>
                      <p className="text-sm text-muted-foreground">We evaluate all aspects of your business to provide a complete valuation foundation.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        🎯
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Strategic Focus</h4>
                      <p className="text-sm text-muted-foreground">Our valuations align with your specific succession goals and timeline.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        💡
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Value Enhancement</h4>
                      <p className="text-sm text-muted-foreground">We identify opportunities to increase value before implementing your succession plan.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Ready to Plan Your Succession?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Let our experienced team help you create a succession strategy that protects your legacy and maximises value. 
                    Contact us to discuss your succession planning needs.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8">
                      Get Started Today
                    </Button>
                    <Button variant="outline" size="lg" className="px-8" asChild>
                      <a href="tel:1800825831">📞 Call: 1800 825 831</a>
                    </Button>
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

export default SuccessionPlanning;