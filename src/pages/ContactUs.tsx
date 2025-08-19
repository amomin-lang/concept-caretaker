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
    phone: "1800 825 831",
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
      name: "Adelaide Office",
      phone: "(08) 8472 3331",
      address: "Westpac House Level 30, 91 King William Street, Adelaide SA 5000"
    },
    {
      name: "Brisbane Office",
      phone: "(07) 3088 6639", 
      address: "Spring Hill, Qld 4004"
    },
    {
      name: "Canberra Office",
      phone: "(02) 6249 8486",
      address: "Canberra, NSW 2601"
    },
    {
      name: "Perth Office",
      phone: "(08) 6311 3331",
      address: "Perth, WA 6000"
    },
    {
      name: "Central West NSW",
      phone: "(02) 6699 3339",
      address: "Bathurst, Orange, Dubbo NSW"
    },
    {
      name: "Central Coast Office",
      phone: "(02) 4323 3433",
      address: "Suite 1, 86 Mann Street, Gosford NSW 2250"
    },
    {
      name: "Newcastle Office",
      phone: "(02) 4323 3433",
      address: "2 Portside Crescent,\nMaryville NSW 2293"
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
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <div className="mb-4 sm:mb-6">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-bold mb-4 sm:mb-6 drop-shadow-lg">Contact Us</h1>
                <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl px-6 sm:px-8 lg:px-12 py-6 sm:py-8 border-2 border-white/30 shadow-2xl">
                  <h2 className="text-lg sm:text-xl lg:text-2xl xl:text-4xl font-bold text-white drop-shadow-lg mb-2">
                    Australia Wide Business Valuation Coverage
                  </h2>
                  <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-white/95 drop-shadow-lg font-semibold">
                    by Xcllusive Business Valuations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-8 sm:py-12 lg:py-16 relative">
          <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
            <div className="flex flex-col xl:flex-row gap-6 lg:gap-8 xl:gap-12">
              <div className="flex-1">
                
                {/* Introduction */}
                <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 sm:mb-6">Contact Information</h2>
                </div>

                {/* Main Contact Information */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <div className="bg-gradient-hero text-primary-foreground rounded-lg p-6 sm:p-8 text-center">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6">Main Contact Details for Business Valuations Australia Wide</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
                      <div>
                        <h4 className="font-bold mb-2 text-sm sm:text-base">Phone:</h4>
                        <a href={`tel:${mainContact.phone.replace(/[^\d+]/g, '')}`} className="text-base sm:text-lg hover:underline">
                          {mainContact.phone}
                        </a>
                      </div>
                      <div>
                        <h4 className="font-bold mb-2 text-sm sm:text-base">Email:</h4>
                        <a href={`mailto:${mainContact.email}`} className="text-base sm:text-lg hover:underline break-all">
                          {mainContact.email}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Locations */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-6 sm:mb-8">Our Office Locations</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {offices.map((office, index) => (
                      <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 h-full">
                        <CardContent className="p-4 sm:p-6 h-full">
                          <div className="flex items-start space-x-3 sm:space-x-4 h-full">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-hero rounded-full flex items-center justify-center text-white flex-shrink-0">
                              <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-bold text-foreground mb-2 text-sm sm:text-base">{office.name}</h4>
                              <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                  <Phone className="h-3 w-3 sm:h-4 sm:w-4 text-primary flex-shrink-0" />
                                  <a 
                                    href={`tel:${office.phone.replace(/[^\d+]/g, '')}`} 
                                    className="text-primary hover:underline font-semibold text-xs sm:text-sm"
                                  >
                                    {office.phone}
                                  </a>
                                </div>
                                {office.address && (
                                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed whitespace-pre-line">{office.address}</p>
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
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-6 sm:mb-8 text-center">Get In Touch</h3>
                  <div className="flex justify-center">
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300 w-full max-w-md">
                      <CardContent className="p-6 sm:p-8 text-center">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-hero rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold mx-auto mb-3 sm:mb-4">
                          📞
                        </div>
                        <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-base sm:text-lg">Call Us Now</h4>
                        <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">Speak directly with our business valuation experts</p>
                        <Button size="lg" className="w-full text-sm sm:text-base" asChild>
                          <a href="tel:1800825831">
                            Call {mainContact.phone}
                          </a>
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* FAQ Section */}
                <div className="mb-8 sm:mb-12 lg:mb-16">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-primary mb-6 sm:mb-8">Frequently Asked Questions</h3>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-foreground mb-3 text-base sm:text-lg">How long does a business valuation take?</h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          Typically, a comprehensive business valuation takes 1-2 weeks, depending on the complexity 
                          of your business and the availability of financial information.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-foreground mb-3 text-base sm:text-lg">What information do I need to provide?</h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          We'll need your financial statements, tax returns, management accounts, and information 
                          about your business operations. We'll provide a detailed checklist upon engagement.
                        </p>
                      </CardContent>
                    </Card>
                    
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300 lg:col-span-2">
                      <CardContent className="p-4 sm:p-6">
                        <h4 className="font-bold text-foreground mb-3 text-base sm:text-lg">Do you provide valuations for all industries?</h4>
                        <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                          Yes, our team has experience across multiple industries including manufacturing, 
                          retail, services, technology, and professional practices. We adapt our methodology 
                          to suit the specific characteristics and market conditions of your industry.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>


              </div>
              
              {/* Sticky Booking Form */}
              <div className="xl:w-96 xl:flex-shrink-0">
                <div className="xl:sticky xl:top-24">
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