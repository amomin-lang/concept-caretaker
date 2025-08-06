import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
    >
      <div className="container mx-auto px-6 text-center text-primary-foreground">
        <h1 className="text-5xl lg:text-7xl font-bold mb-6 drop-shadow-lg">
          Australia Wide Business Valuations
        </h1>
        <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-8 py-4 mb-8 border border-white/20">
          <p className="text-2xl lg:text-3xl font-bold text-white drop-shadow-lg">
            Trusted by 500+ businesses across Australia
          </p>
        </div>
        <div className="flex justify-center">
          <Button variant="accent" size="lg" className="text-lg px-8">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};