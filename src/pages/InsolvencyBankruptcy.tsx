import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Phone, Scale, TrendingDown, FileText, Clock, BarChart3, Target } from "lucide-react";
import { Link } from "react-router-dom";

const InsolvencyBankruptcy = () => {
  const services = [
    {
      icon: TrendingDown,
      title: "Liquidation valuations",
      description: "Asset valuations for forced sale scenarios"
    },
    {
      icon: BarChart3,
      title: "Going concern assessments",
      description: "Viability analysis for business continuation"
    },
    {
      icon: Target,
      title: "Asset realization estimates",
      description: "Realistic recovery estimates for creditors"
    },
    {
      icon: FileText,
      title: "Creditor reports",
      description: "Detailed analysis for creditor decision-making"
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Urgent Response",
      description: "Fast turnaround times to meet critical insolvency deadlines."
    },
    {
      icon: FileText,
      title: "Detailed Analysis",
      description: "Comprehensive assessment of assets and recovery prospects."
    },
    {
      icon: Target,
      title: "Recovery Optimization",
      description: "Strategies to maximize asset recovery for stakeholders."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Back Navigation */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <Link 
              to="/services" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to All Services
            </Link>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Scale className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Insolvency & Bankruptcy
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Get accurate valuations in challenging circumstances. Our insolvency valuations help administrators, 
              creditors, and stakeholders make informed decisions with realistic assessments based on current market conditions.
            </p>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
              Our Insolvency Services
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="text-center pb-4">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <service.icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground text-center text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <benefit.icon className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/10 via-primary/5 to-secondary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4 text-foreground">
              Need Insolvency Valuation?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Time-sensitive insolvency matters require expert analysis. Contact us for urgent valuation support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8">
                <a href="tel:1300520121" className="inline-flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call: 1300 520 121
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link to="/contact">
                  Get Quote
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default InsolvencyBankruptcy;