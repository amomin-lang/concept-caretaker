import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { ArrowLeft, Calculator, FileText, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const TaxPurposes = () => {
  const keyFeatures = [
    {
      icon: <Calculator className="h-6 w-6" />,
      title: "Capital gains tax valuations",
      description: "Accurate valuations for CGT compliance and optimization"
    },
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Small business CGT concessions",
      description: "Maximise available concessions with proper valuations"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Division 7A compliance",
      description: "Ensure compliance with deemed dividend provisions"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Tax restructuring support",
      description: "Strategic valuations for business restructuring"
    }
  ];

  const processSteps = [
    {
      title: "Compliance Review",
      description: "We review all relevant tax legislation and ATO guidelines to ensure full compliance with your specific requirements."
    },
    {
      title: "Valuation Analysis",
      description: "Comprehensive valuation using appropriate methodologies that meet tax requirements and optimise your position."
    },
    {
      title: "Documentation",
      description: "Detailed reports with supporting documentation that withstand ATO scrutiny and audit processes."
    }
  ];

  const taxScenarios = [
    {
      title: "Capital Gains Tax Events",
      description: "Valuations for CGT purposes including business sales, share transfers, and asset disposals with proper timing and optimisation."
    },
    {
      title: "Small Business Concessions",
      description: "Qualifying for and maximizing small business CGT concessions including the 15-year exemption and retirement exemption."
    },
    {
      title: "Business Restructuring",
      description: "Tax-effective restructuring including corporate reorganizations, trust distributions, and ownership changes."
    },
    {
      title: "Division 7A Issues",
      description: "Compliance with deemed dividend provisions and private company benefit rules through proper valuations."
    },
    {
      title: "Estate Planning",
      description: "Valuations for estate planning purposes including succession planning and intergenerational transfers."
    },
    {
      title: "GST Valuations",
      description: "Market value determinations for GST purposes including going concern transfers and margin scheme applications."
    }
  ];

  const complianceAreas = [
    {
      title: "ATO Compliance",
      description: "All valuations meet Australian Taxation Office standards and guidelines.",
      icon: "📋"
    },
    {
      title: "Tax Optimization",
      description: "Strategic positioning to minimize tax liability while maintaining compliance.",
      icon: "💰"
    },
    {
      title: "Audit Defence",
      description: "Comprehensive documentation that withstands ATO audit and review processes.",
      icon: "🛡️"
    },
    {
      title: "Professional Standards",
      description: "Valuations conducted in accordance with professional valuation standards.",
      icon: "⭐"
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Business Valuations for Tax Purposes</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Comply with tax requirements while optimising your position</p>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">ATO-Compliant Business Valuations</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Tax valuations require strict adherence to Australian Taxation Office guidelines and relevant tax legislation. Our experienced team understands the specific requirements for different tax scenarios and ensures your valuations meet all regulatory standards.
                    </p>
                    <p className="text-lg mb-8">
                      We stay current with changing tax legislation and ATO rulings to provide valuations that not only comply with current requirements but also position your business advantageously for tax optimisation opportunities.
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
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Tax Valuation Process</h3>
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

                {/* Tax Scenarios */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Common Tax Valuation Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {taxScenarios.map((scenario, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-foreground mb-3">{scenario.title}</h4>
                          <p className="text-sm text-muted-foreground">{scenario.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Compliance Standards */}
                <div className="bg-muted/30 rounded-lg p-8 mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Our Compliance Standards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {complianceAreas.map((area, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-2xl">{area.icon}</div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">{area.title}</h4>
                          <p className="text-sm text-muted-foreground">{area.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Benefits Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Benefits of Professional Tax Valuations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-4">Risk Mitigation</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            Reduce audit risk with compliant valuations
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            Avoid penalties and interest charges
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            Professional indemnity insurance coverage
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-4">Tax Optimization</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            Maximise available tax concessions
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            Strategic timing of transactions
                          </li>
                          <li className="flex items-center">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                            Identify restructuring opportunities
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Need Business Valuations for Tax Purposes?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our experienced team ensures your valuations meet ATO requirements while optimizing your tax position. 
                    Contact us to discuss your tax valuation needs.
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

export default TaxPurposes;