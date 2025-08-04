import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TeamSection } from "@/components/TeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <TeamSection />
      <ServicesSection />
      <TrustSection />
      <Footer />
    </div>
  );
};

export default Index;
