import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookingForm } from "@/components/BookingForm";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-business.jpg";

const FamilyLaw = () => {
  const services = [
    {
      title: "Matrimonial settlements",
      description: "Fair business valuations for divorce proceedings"
    },
    {
      title: "Asset division analysis", 
      description: "Comprehensive assessment of business assets"
    },
    {
      title: "Independent expert reports",
      description: "Neutral valuations for court proceedings"
    },
    {
      title: "Court-ready documentation",
      description: "Reports that meet legal standards"
    }
  ];

  const keyBenefits = [
    {
      title: "Independent Assessment",
      description: "We maintain strict neutrality to provide fair and unbiased valuations."
    },
    {
      title: "Clear Communication",
      description: "Complex valuations explained in clear terms for all parties."
    },
    {
      title: "Court Defensible",
      description: "Reports prepared to withstand legal scrutiny and cross-examination."
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
                <Link to="/services" className="text-white/80 hover:text-white transition-colors">
                  ← Back to All Services
                </Link>
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">
                Business Valuations for Family Law Matters
              </h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                  Fair, independent business valuations for family law proceedings
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
                  <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                    Navigate family law proceedings with fair, independent valuations. Our reports help both parties understand business value in divorce settlements and ensure equitable distribution of assets.
                  </p>
                </div>

                {/* Services Section */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-8">Our Family Law Valuation Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {services.map((service, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white text-lg font-bold mb-4">
                            {index + 1}
                          </div>
                          <h3 className="text-lg font-bold text-foreground mb-3">{service.title}</h3>
                          <p className="text-muted-foreground">{service.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-8 text-center">Why Choose Our Family Law Valuations?</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {keyBenefits.map((benefit, index) => (
                      <div key={index} className="text-center">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                          {index === 0 ? "⚖️" : index === 1 ? "💬" : "🛡️"}
                        </div>
                        <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-muted/30 rounded-lg p-8 text-center">
                  <h3 className="text-2xl font-bold text-primary mb-4">Need a Family Law Valuation?</h3>
                  <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
                    We understand the sensitive nature of family law matters. Contact us for professional, independent business valuations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" asChild>
                      <a href="tel:1300520121" className="text-lg px-8">
                        📞 Call: 1300 520 121
                      </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link to="/contact" className="text-lg px-8">
                        Get Quote Online
                      </Link>
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

export default FamilyLaw;