import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/BookingForm";
import heroImage from "@/assets/hero-business.jpg";

export const HeroSection = () => {
  return (
    <section 
      className="relative min-h-[500px] sm:min-h-[600px] lg:min-h-[700px] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
      aria-label="Hero section featuring business valuation services"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] sm:min-h-[600px] lg:min-h-[700px]">
          {/* Left side - Hero content */}
          <article className="text-center lg:text-left text-primary-foreground order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 lg:mb-6 drop-shadow-lg leading-tight">
              Business Valuations
              <br />
              Australia Wide
            </h1>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 lg:mb-8 border border-white/20">
              <p className="text-base sm:text-lg lg:text-xl font-bold text-white drop-shadow-lg">
                Trusted by 500+ businesses across Australia
              </p>
            </div>
            <div className="flex justify-center lg:justify-start">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4" 
                asChild
                aria-label="Call Australia Wide Business Valuations"
              >
                <a href="tel:+61180082583">Call us on 1800 825 831</a>
              </Button>
            </div>
          </article>
          
          {/* Right side - Booking Form */}
          <aside className="order-1 lg:order-2">
            <BookingForm />
          </aside>
        </div>
      </div>
    </section>
  );
};