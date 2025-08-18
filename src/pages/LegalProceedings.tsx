import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { ArrowLeft, Shield, FileText, Users, Scale } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const LegalProceedings = () => {
  const keyFeatures = [
    {
      icon: <FileText className="h-6 w-6" />,
      title: "Court-admissible valuation reports",
      description: "Reports that meet all legal standards and requirements"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Expert witness testimony",
      description: "Professional testimony to support your case"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Dispute resolution support",
      description: "Assistance throughout the dispute resolution process"
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Detailed methodology explanation",
      description: "Clear documentation of all valuation approaches"
    }
  ];

  const processSteps = [
    {
      title: "Initial Assessment",
      description: "We review the legal context and requirements to ensure our valuation meets the specific needs of your case."
    },
    {
      title: "Collaborative Approach",
      description: "We work closely with your legal team to understand the case strategy and provide relevant insights."
    },
    {
      title: "Defensible Results",
      description: "Our final report includes comprehensive documentation and methodology that can withstand legal scrutiny."
    }
  ];

  const scenarios = [
    {
      title: "Shareholder Disputes",
      description: "Resolving conflicts between business partners and shareholders with fair and independent valuations."
    },
    {
      title: "Partnership Dissolutions",
      description: "Determining fair value for partnership interests during business dissolution proceedings."
    },
    {
      title: "Breach of Contract",
      description: "Calculating damages and losses resulting from contractual breaches affecting business value."
    },
    {
      title: "Minority Interest Disputes",
      description: "Assessing the value of minority shareholdings in closely held business entities."
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Business Valuations for <br />Legal Proceedings & Disputes</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Expert business valuations that stand up to legal scrutiny</p>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Court-Ready Business Valuations</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Our business valuation reports are prepared with the understanding that they may be scrutinised in court proceedings. 
                      We maintain the highest standards of documentation and methodology to ensure our valuations are defensible under cross-examination.
                    </p>
                    <p className="text-lg mb-8">
                      Our team has extensive experience providing expert witness testimony and supporting legal teams throughout the litigation process. 
                      We understand the critical importance of accuracy, reliability, and clear communication in legal contexts.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Key Features of our Business Valuations</h3>
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
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Legal Valuation Process</h3>
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
                  <h3 className="text-2xl font-bold text-primary mb-8">Common Legal Valuation Scenarios</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {scenarios.map((scenario, index) => (
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
                  <h3 className="text-2xl font-bold text-primary mb-4">Need a Legal Valuation?</h3>
                  <p className="text-lg text-muted-foreground mb-6">
                    Our experienced team understands the complexities of legal proceedings. 
                    Contact us to discuss your specific requirements and timeline.
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

export default LegalProceedings;