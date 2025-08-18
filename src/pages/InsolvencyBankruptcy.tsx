import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { ArrowLeft, TrendingDown, BarChart3, Target, FileText, Clock, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const InsolvencyBankruptcy = () => {
  const keyFeatures = [
    {
      icon: <TrendingDown className="h-6 w-6" />,
      title: "Liquidation valuations",
      description: "Asset valuations for forced sale scenarios"
    },
    {
      icon: <BarChart3 className="h-6 w-6" />,
      title: "Going concern assessments",
      description: "Viability analysis for business continuation"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Asset realisation estimates",
      description: "Realistic recovery estimates for creditors"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Creditor reports",
      description: "Detailed analysis for creditor decision-making"
    }
  ];

  const processSteps = [
    {
      title: "Urgent Response",
      description: "Fast turnaround times to meet critical insolvency deadlines and administrator requirements."
    },
    {
      title: "Detailed Analysis",
      description: "Comprehensive assessment of assets and recovery prospects under different scenarios."
    },
    {
      title: "Recovery Optimisation",
      description: "Strategies to maximise asset recovery for stakeholders through realistic market assessments."
    }
  ];

  const insolvencyScenarios = [
    {
      title: "Voluntary Administration",
      description: "Valuations to assist administrators in determining the best course of action for creditors and stakeholders."
    },
    {
      title: "Liquidation Proceedings",
      description: "Asset valuations for forced sale scenarios including plant, equipment, and business assets."
    },
    {
      title: "Creditor Settlements",
      description: "Independent valuations to support creditor decision-making and recovery estimates."
    },
    {
      title: "Deed of Company Arrangement",
      description: "Valuations to support DOCA proposals and creditor voting processes."
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Business Valuations for Insolvency & Bankruptcy</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Accurate business valuations in challenging circumstances</p>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Expert Insolvency Business Valuations</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Get accurate business valuations in challenging circumstances. Our insolvency business valuations help administrators, 
                      creditors, and stakeholders make informed decisions with realistic assessments based on current market conditions.
                    </p>
                    <p className="text-lg mb-8">
                      We understand the time-sensitive nature of insolvency proceedings and provide rapid response 
                      valuations that meet the strict deadlines imposed by administrators and the courts.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Insolvency Services</h3>
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
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Insolvency Valuation Process</h3>
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

                {/* Common Scenarios */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Common Insolvency Valuation Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {insolvencyScenarios.map((scenario, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-foreground mb-3">{scenario.title}</h4>
                          <p className="text-sm text-muted-foreground">{scenario.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Need Insolvency Valuation?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Time-sensitive insolvency matters require expert analysis. Contact us for urgent valuation support.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="px-8">
                      Get Started Today
                    </Button>
                    <Button variant="outline" size="lg" className="px-8" asChild>
                      <a href="tel:1300520121">📞 Call: 1300 520 121</a>
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

export default InsolvencyBankruptcy;