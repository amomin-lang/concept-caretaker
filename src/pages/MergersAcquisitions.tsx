import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, TrendingUp, Users, BarChart3, Target, Handshake } from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const MergersAcquisitions = () => {
  const keyFeatures = [
    {
      icon: TrendingUp,
      title: "Buy-side due diligence",
      description: "Comprehensive target company analysis and valuation"
    },
    {
      icon: Target,
      title: "Sell-side preparation",
      description: "Optimise business value and prepare for sale"
    },
    {
      icon: BarChart3,
      title: "Synergy valuation",
      description: "Quantify potential cost savings and revenue synergies"
    },
    {
      icon: Handshake,
      title: "Post-merger integration planning",
      description: "Support successful integration and value realisation"
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Due Diligence",
      description: "Comprehensive analysis of financial performance, market position, and operational capabilities."
    },
    {
      step: "02",
      title: "Valuation Analysis",
      description: "Multiple valuation approaches including DCF, comparable transactions, and market multiples."
    },
    {
      step: "03",
      title: "Deal Support",
      description: "Ongoing support throughout negotiations, structuring, and closing processes."
    }
  ];

  const buySideServices = [
    "Target company identification and screening",
    "Financial and operational due diligence",
    "Market analysis and competitive positioning",
    "Synergy identification and quantification",
    "Risk assessment and mitigation strategies",
    "Deal structuring recommendations"
  ];

  const sellSideServices = [
    "Business optimisation and value enhancement",
    "Preparation of marketing materials",
    "Buyer identification and qualification",
    "Negotiation support and deal structuring",
    "Due diligence coordination",
    "Transaction management through closing"
  ];

  const dealTypes = [
    {
      title: "Strategic Acquisitions",
      description: "Full business acquisitions for strategic growth"
    },
    {
      title: "Asset Purchases",
      description: "Selective asset acquisition transactions"
    },
    {
      title: "Management Buyouts",
      description: "MBO transactions and management-led acquisitions"
    },
    {
      title: "Private Equity Deals",
      description: "PE-backed acquisitions and exits"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Back to Services Link */}
        <div className="bg-muted/30 py-4">
          <div className="container mx-auto px-6">
            <Button variant="ghost" asChild className="text-primary hover:text-primary/80">
              <Link to="/services" className="inline-flex items-center">
                ← Back to All Services
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
              <Badge variant="secondary" className="mb-4 bg-white/10 text-white border-white/20">
                M&A Advisory Services
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Business Valuations for Mergers & Acquisitions</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                  Make informed M&A decisions with accurate business valuations and strategic advisory
                </p>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Strategic M&A Advisory</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Mergers and acquisitions represent some of the most significant decisions in business. 
                      Our comprehensive M&A valuations provide the critical insights needed to negotiate fair deals, 
                      identify synergies, and mitigate risks throughout the transaction process.
                    </p>
                    <p className="text-lg">
                      We draw on extensive market data from actual transactions to provide realistic valuations 
                      that reflect current market conditions. Our analysis goes beyond basic valuation to include 
                      strategic considerations, cultural fit, and integration complexities.
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {keyFeatures.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center flex-shrink-0">
                                <Icon className="h-6 w-6 text-primary-foreground" />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                                <p className="text-muted-foreground">{feature.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Process Steps */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Our M&A Valuation Process</h3>
                  <div className="space-y-6">
                    {processSteps.map((step, index) => (
                      <Card key={index} className="shadow-card">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-6">
                            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground font-bold flex-shrink-0">
                              {step.step}
                            </div>
                            <div>
                              <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
                              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Buy-Side vs Sell-Side Services */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Buy-Side vs Sell-Side Services</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* Buy-Side Advisory */}
                    <Card className="shadow-card">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                            <TrendingUp className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h4 className="text-xl font-bold text-foreground">Buy-Side Advisory</h4>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          Comprehensive support for acquiring businesses, from target identification to closing.
                        </p>
                        <ul className="space-y-3">
                          {buySideServices.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    {/* Sell-Side Advisory */}
                    <Card className="shadow-card">
                      <CardContent className="p-8">
                        <div className="flex items-center mb-6">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center mr-4">
                            <Target className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <h4 className="text-xl font-bold text-foreground">Sell-Side Advisory</h4>
                        </div>
                        <p className="text-muted-foreground mb-6">
                          Strategic guidance for business owners looking to maximise value in a sale.
                        </p>
                        <ul className="space-y-3">
                          {sellSideServices.map((service, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-muted-foreground">{service}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Deal Types */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Types of M&A Transactions</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {dealTypes.map((deal, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-center mb-3">
                            <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-primary-foreground text-sm font-bold mr-3">
                              {index + 1}
                            </div>
                            <h4 className="font-bold text-foreground">{deal.title}</h4>
                          </div>
                          <p className="text-muted-foreground">{deal.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Why Choose Us Section */}
                <div className="bg-muted/30 rounded-lg p-8 mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Why Choose Our M&A Services?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        📊
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Market Intelligence</h4>
                      <p className="text-sm text-muted-foreground">Access to extensive transaction databases and real-time market data.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        🤝
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Transaction Experience</h4>
                      <p className="text-sm text-muted-foreground">Proven track record across diverse industries and deal sizes.</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        ⚡
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Speed & Accuracy</h4>
                      <p className="text-sm text-muted-foreground">Efficient processes that don't compromise on thoroughness or accuracy.</p>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-hero text-primary-foreground rounded-lg p-8">
                  <Users className="h-12 w-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-4">Ready to Explore M&A Opportunities?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Contact us today to discuss your M&A strategy and valuation needs.
                  </p>
                  <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                    Schedule M&A Consultation
                  </Button>
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

export default MergersAcquisitions;