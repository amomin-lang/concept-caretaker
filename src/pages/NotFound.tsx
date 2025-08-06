import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-business.jpg";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section 
        className="relative min-h-[600px] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
      >
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center text-primary-foreground">
            <h1 className="text-6xl lg:text-8xl font-bold mb-6 drop-shadow-lg">
              404
            </h1>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6 drop-shadow-lg">
              Page Not Found
            </h2>
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20">
              <p className="text-lg lg:text-xl text-white drop-shadow-lg">
                The page you're looking for doesn't exist
              </p>
            </div>
            <div className="flex justify-center">
              <Button 
                variant="accent" 
                size="lg" 
                className="text-lg px-8"
                onClick={() => window.location.href = '/'}
              >
                Return to Home
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NotFound;
