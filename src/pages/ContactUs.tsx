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
  const mainContact = {
    phone: "(02) 9817 3331",
    email: "info@xcllusive.com.au"
  };

  const offices = [
    {
      name: "Sydney Office",
      phone: "(02) 9817 3331",
      address: "G14, 1-15 Barr Street, Balmain NSW 2041 Australia"
    },
    {
      name: "Melbourne Office", 
      phone: "(03) 8560 0524",
      address: "Suite 7, 1153 Burke Road, Kew, VIC 3101 Australia"
    },
    {
      name: "Brisbane Office",
      phone: "(07) 3088 6639", 
      address: "Spring Hill, Qld 4004"
    },
    {
      name: "Adelaide Office",
      phone: "(08) 8472 3331",
      address: "Westpac House Level 30, 91 King William Street, Adelaide SA 5000"
    },
    {
      name: "ACT Office",
      phone: "(02) 6249 8486",
      address: "Canberra, NSW 2601"
    },
    {
      name: "Regional Office (Central West NSW)",
      phone: "(02) 6699 3339",
      address: "Bathurst, Orange, Dubbo NSW"
    },
    {
      name: "Central Coast Office (and Newcastle & Surrounds)",
      phone: "(02) 4323 3433",
      address: "Gosford NSW 2250"
    },
    {
      name: "Perth Office",
      phone: "(08) 6311 3331",
      address: ""
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
                  <h2 className="text-3xl font-bold text-primary mb-6">Contact Information</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="text-xl mb-6">
                      For information about buying or selling or any other questions, please feel free to contact us any day 24/7.
                    </p>
                  </div>
                </div>

                {/* Main Contact Information */}
                <div className="mb-16">
                  <div className="bg-gradient-hero text-primary-foreground rounded-lg p-8 text-center">
                    <h3 className="text-2xl font-bold mb-6">Main Contact Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-bold mb-2">Phone:</h4>
                        <a href={`tel:${mainContact.phone.replace(/[^\d+]/g, '')}`} className="text-lg hover:underline">
                          {mainContact.phone}
                        </a>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2">Email:</h4>
                        <a href={`mailto:${mainContact.email}`} className="text-lg hover:underline">
                          {mainContact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Our Office Locations</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {offices.map((office, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                              <MapPin className="h-6 w-6" />
                            </div>
                            <div className="flex-1">
                              <h4 className="font-bold text-foreground mb-2">{office.name}</h4>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                                  <a 
                                    href={`tel:${office.phone.replace(/[^\d+]/g, '')}`} 
                                    className="text-primary hover:underline font-semibold"
                                  >
                                    {office.phone}
                                  </a>
                                </div>
                                {office.address && (
                                  <p className="text-sm text-muted-foreground">{office.address}</p>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quick Contact Options */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-8">Get In Touch</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-8 text-center">
                        <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                          📞
                        </div>
                        <h4 className="font-bold text-foreground mb-4">Call Us Now</h4>
                        <p className="text-muted-foreground mb-6">Speak directly with our valuation experts</p>
                        <Button size="lg" className="w-full" asChild>
                          <a href="tel:0298173331">
                            Call {mainContact.phone}
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
                          <a href={`mailto:${mainContact.email}`}>
                            Send Email
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
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
                      <a href="tel:0298173331" className="inline-flex items-center">
                        📞 Call: {mainContact.phone}
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                      <a href={`mailto:${mainContact.email}`} className="inline-flex items-center">
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