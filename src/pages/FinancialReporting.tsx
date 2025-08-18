import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Calculator, 
  Shield, 
  FileText,
  TrendingUp,
  Award,
  Users,
  Clock
} from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const FinancialReporting = () => {
  const keyFeatures = [
    {
      icon: CheckCircle,
      title: "Impairment Testing",
      description: "Regular asset impairment assessments to comply with accounting standards"
    },
    {
      icon: Calculator,
      title: "Purchase Price Allocation",
      description: "Fair value measurements for acquisitions and business combinations"
    },
    {
      icon: Shield,
      title: "AASB Compliance",
      description: "Reports meeting Australian Accounting Standards requirements"
    },
    {
      icon: FileText,
      title: "Audit Support",
      description: "Documentation to satisfy external auditors and regulatory requirements"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Standards Review",
      description: "Ensure compliance with all relevant accounting standards and regulations."
    },
    {
      step: "2", 
      title: "Fair Value Measurement",
      description: "Accurate valuations using appropriate methodologies and market data."
    },
    {
      step: "3",
      title: "Comprehensive Documentation",
      description: "Detailed reports supporting all valuation conclusions and methodologies."
    }
  ];

  const reportingTypes = [
    {
      icon: TrendingUp,
      title: "Goodwill Impairment",
      description: "Annual testing to assess whether goodwill has been impaired"
    },
    {
      icon: Award,
      title: "Asset Impairment",
      description: "Testing of tangible and intangible assets for impairment indicators"
    },
    {
      icon: Users,
      title: "Business Combinations",
      description: "Purchase price allocations for mergers and acquisitions"
    },
    {
      icon: Clock,
      title: "Regular Assessments",
      description: "Ongoing monitoring and periodic revaluation requirements"
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
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">Business Valuations for Financial Reporting</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">Compliant business valuations for statutory reporting requirements</p>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Professional Financial Reporting Valuations</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Meet your financial reporting obligations with compliant valuations. Our reports adhere to relevant 
                      accounting standards and provide the documentation you need for statutory reporting, including 
                      impairment testing and purchase price allocation.
                    </p>
                  </div>
                </div>


                {/* Process Steps */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {processSteps.map((step, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6 text-center">
                          <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-4">
                            {step.step}
                          </div>
                          <h4 className="font-bold text-foreground mb-3">{step.title}</h4>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Reporting Types */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Types of Financial Reporting</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {reportingTypes.map((type, index) => {
                      const Icon = type.icon;
                      return (
                        <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground mb-2">{type.title}</h4>
                                <p className="text-sm text-muted-foreground">{type.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Compliance Standards */}
                <div className="bg-muted/30 rounded-lg p-8 mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">Compliance Standards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        📋
                      </div>
                      <h4 className="font-bold text-foreground mb-2">AASB Standards</h4>
                      <p className="text-sm text-muted-foreground">Full compliance with Australian Accounting Standards Board requirements</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        🌐
                      </div>
                      <h4 className="font-bold text-foreground mb-2">IVS Compliant</h4>
                      <p className="text-sm text-muted-foreground">International Valuations Standards adherence</p>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                        ✅
                      </div>
                      <h4 className="font-bold text-foreground mb-2">Audit Ready</h4>
                      <p className="text-sm text-muted-foreground">Documentation that satisfies external auditor requirements</p>
                    </div>
                  </div>
                </div>


                {/* Call to Action */}
                <div className="text-center bg-gradient-hero text-primary-foreground rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Need Financial Reporting Valuations?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Ensure compliance with accounting standards and satisfy audit requirements with our professional financial reporting valuations.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <a href="tel:1300520121" className="inline-flex items-center">
                        📞 Call: 1300 520 121
                      </a>
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

export default FinancialReporting;