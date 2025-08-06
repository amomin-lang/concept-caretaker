import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";

import { ExpertTeamSection } from "@/components/ExpertTeamSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TrustSection } from "@/components/TrustSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ExpertTeamSection />
      <TrustSection />
      <ServicesSection />
      <Footer />
    </div>
  );
};

export default Index;
