import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  Users,
  Award,
  CheckCircle
} from "lucide-react";
import heroImage from "@/assets/hero-business.jpg";

const ContactUs = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "1300 520 121",
      description: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@xcllusivevaluation.com.au",
      description: "Send us your enquiry anytime"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Australia Wide",
      description: "Serving businesses across Australia"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Monday - Friday: 9AM - 5PM",
      description: "Weekend consultations available"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Expert Team",
      description: "Qualified business valuation professionals with extensive industry experience"
    },
    {
      icon: Users,
      title: "Personalized Service",
      description: "Dedicated support throughout your valuation journey"
    },
    {
      icon: CheckCircle,
      title: "Australia Wide",
      description: "Comprehensive coverage across all Australian states and territories"
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
              <div className="mb-6">
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 drop-shadow-lg">Contact Us</h1>
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 border border-white/20">
                  <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                    Australia Wide Business Valuations
                  </p>
                  <p className="text-base lg:text-lg text-white/90 drop-shadow-lg mt-1">
                    by Xcllusive Business Valuations
                  </p>
                </div>
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch Today</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      Ready to get your business valued? Our team of qualified professionals is here to help. 
                      We provide comprehensive business valuation services across Australia, ensuring you receive 
                      accurate, defensible valuations for your specific needs.
                    </p>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((contact, index) => {
                      const Icon = contact.icon;
                      return (
                        <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                          <CardContent className="p-6">
                            <div className="flex items-start space-x-4">
                              <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                                <Icon className="h-6 w-6" />
                              </div>
                              <div>
                                <h4 className="font-bold text-foreground mb-1">{contact.title}</h4>
                                <p className="text-lg text-primary font-semibold mb-1">{contact.details}</p>
                                <p className="text-sm text-muted-foreground">{contact.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Quick Contact Options</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                          📞
                        </div>
                        <h4 className="font-bold text-foreground mb-4">Call Us Now</h4>
                        <p className="text-muted-foreground mb-6">Speak directly with our valuation experts</p>
                        <Button size="lg" className="w-full" asChild>
                          <a href="tel:1300520121">
                            Call 1300 520 121
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                          ✉️
                        </div>
                        <h4 className="font-bold text-foreground mb-4">Email Us</h4>
                        <p className="text-muted-foreground mb-6">Send your enquiry and we'll respond promptly</p>
                        <Button size="lg" variant="outline" className="w-full" asChild>
                          <a href="mailto:info@xcllusivevaluation.com.au">
                            Send Email
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Why Choose Xcllusive Business Valuations?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {whyChooseUs.map((feature, index) => {
                      const Icon = feature.icon;
                      return (
                        <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                          <CardContent className="p-6 text-center">
                            <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white mx-auto mb-4">
                              <Icon className="h-8 w-8" />
                            </div>
                            <h4 className="font-bold text-foreground mb-3">{feature.title}</h4>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>

                {/* Service Areas */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Service Areas</h3>
                  <div className="bg-muted/30 rounded-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="text-center">
                        <h4 className="font-bold text-foreground mb-3">Major Cities</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>Sydney</li>
                          <li>Melbourne</li>
                          <li>Brisbane</li>
                          <li>Perth</li>
                          <li>Adelaide</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-foreground mb-3">Regional Areas</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>Gold Coast</li>
                          <li>Newcastle</li>
                          <li>Wollongong</li>
                          <li>Geelong</li>
                          <li>Cairns</li>
                        </ul>
                      </div>
                      <div className="text-center">
                        <h4 className="font-bold text-foreground mb-3">All States</h4>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                          <li>New South Wales</li>
                          <li>Victoria</li>
                          <li>Queensland</li>
                          <li>Western Australia</li>
                          <li>South Australia</li>
                          <li>Tasmania</li>
                          <li>Northern Territory</li>
                          <li>ACT</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Frequently Asked Questions</h3>
                  <div className="space-y-6">
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-3">How long does a business valuation take?</h4>
                        <p className="text-muted-foreground">
                          Typically, a comprehensive business valuation takes 1-2 weeks, depending on the complexity 
                          of your business and the availability of financial information.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-3">What information do I need to provide?</h4>
                        <p className="text-muted-foreground">
                          We'll need your financial statements, tax returns, management accounts, and information 
                          about your business operations. We'll provide a detailed checklist upon engagement.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-card">
                      <CardContent className="p-6">
                        <h4 className="font-bold text-foreground mb-3">Do you provide valuations for all industries?</h4>
                        <p className="text-muted-foreground">
                          Yes, our team has experience across multiple industries including manufacturing, 
                          retail, services, technology, and professional practices.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-hero text-primary-foreground rounded-lg p-8">
                  <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                  <p className="text-lg mb-6 opacity-90">
                    Contact us today for a consultation about your business valuation needs. 
                    Our expert team is ready to help you understand your business's true worth.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" variant="secondary" asChild>
                      <a href="tel:1300520121" className="inline-flex items-center">
                        📞 Call: 1300 520 121
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                      <a href="mailto:info@xcllusivevaluation.com.au" className="inline-flex items-center">
                        ✉️ Send Email
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

export default ContactUs;