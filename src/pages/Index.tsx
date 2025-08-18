import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ExpertTeamSection } from "@/components/ExpertTeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { BookingForm } from "@/components/BookingForm";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add structured data for business
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Australia Wide Business Valuations",
      "description": "Expert business valuation services across Australia for legal proceedings, tax purposes, succession planning and more",
      "url": "https://your-domain.com",
      "telephone": "+61180082583",
      "priceRange": "$$",
      "areaServed": {
        "@type": "Country",
        "name": "Australia"
      },
      "serviceType": "Business Valuation Services",
      "provider": {
        "@type": "Organization",
        "name": "Australia Wide Business Valuations"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExpertTeamSection />
        <TrustSection />
        
        {/* Contact Form Section */}
        <section className="py-16 pb-4 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto">
              <BookingForm />
            </div>
          </div>
        </section>
        
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
