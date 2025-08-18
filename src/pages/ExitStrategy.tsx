import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { ArrowLeft, TrendingUp, Target, BarChart3, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const ExitStrategy = () => {
  const keyFeatures = [
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Pre-sale valuations",
      description: "Current market value assessment and projections"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Value enhancement strategies",
      description: "Specific recommendations to increase business value"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Market positioning analysis",
      description: "Understanding your competitive advantage"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Exit timing optimization",
      description: "Strategic timing recommendations for maximum value"
    }
  ];

  const processSteps = [
    {
      title: "Current Valuation",
      description: "Comprehensive assessment of your business's current market value"
    },
    {
      title: "Value Drivers Analysis",
      description: "Identify key factors that influence your business value"
    },
    {
      title: "Enhancement Plan",
      description: "Develop strategies to maximise value before exit"
    },
    {
      title: "Timing Strategy",
      description: "Optimize exit timing based on market conditions"
    }
  ];

  const valueEnhancements = [
    {
      title: "Financial Optimization",
      description: "Improving financial performance and reporting to attract buyers and command premium pricing."
    },
    {
      title: "Operational Efficiency",
      description: "Streamlining operations to reduce costs and improve margins, making the business more attractive to potential buyers."
    },
    {
      title: "Customer Diversification",
      description: "Reducing customer concentration risk by expanding the customer base and revenue streams."
    },
    {
      title: "Management Strengthening",
      description: "Building a strong management team that can operate independently of the owner."
    },
    {
      title: "System & Process Improvement",
      description: "Implementing robust systems and processes that enable scalable growth and reduce operational risk."
    },
    {
      title: "Competitive Positioning",
      description: "Strengthening market position and competitive advantages to justify premium valuation multiples."
    }
  ];

  const exitScenarios = [
    {
      title: "Strategic Sale",
      description: "Selling to a strategic buyer who values synergies and growth opportunities."
    },
    {
      title: "Financial Sale",
      description: "Selling to financial buyers focused on cash flow and return on investment."
    },
    {
      title: "Management Buyout",
      description: "Facilitating purchase by existing management team with proper valuation support."
    },
    {
      title: "Trade Sale",
      description: "Selling to competitors or industry players seeking market consolidation."
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Exit Strategy Business Valuations</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Maximise your business value before sale</p>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Strategic Exit Planning</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      A successful business exit requires careful planning and strategic preparation. Our comprehensive exit strategy valuations don't just tell you what your business is worth today—they identify specific opportunities to enhance value before you go to market.
                    </p>
                    <p className="text-lg mb-8">
                      We analyze market conditions, competitive positioning, and buyer expectations to help you time your exit optimally and position your business for maximum value realization. Our detailed reports provide actionable insights for value enhancement initiatives.
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
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Exit Strategy Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Value Enhancement Opportunities */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Common Value Enhancement Opportunities</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {valueEnhancements.map((enhancement, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-foreground mb-3">{enhancement.title}</h4>
                          <p className="text-sm text-muted-foreground">{enhancement.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Exit Scenarios */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Common Exit Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {exitScenarios.map((scenario, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-foreground mb-3">{scenario.title}</h4>
                          <p className="text-sm text-muted-foreground">{scenario.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Why Professional Exit Planning Section */}
                <div className="bg-muted/30 rounded-lg p-8 mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Why Professional Exit Planning Matters</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        💰
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Maximise Value</h4>
                      <p className="text-sm text-muted-foreground">Identify and implement value enhancement strategies before going to market.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        ⏰
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Optimal Timing</h4>
                      <p className="text-sm text-muted-foreground">Time your exit to coincide with favorable market conditions and peak business performance.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        🎯
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Strategic Positioning</h4>
                      <p className="text-sm text-muted-foreground">Position your business to attract the right buyers and command premium pricing.</p>
                    </div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Ready to Plan Your Exit Strategy?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Let our experienced team help you maximise your business value and plan a successful exit. 
                    Contact us to discuss your exit strategy and valuation needs.
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

export default ExitStrategy;