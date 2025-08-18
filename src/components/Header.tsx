import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="w-full bg-background border-b border-border/50 sticky top-0 z-50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/300a8c6d-7f41-4ebb-a026-38c30f636ecc.png" 
                alt="Xcllusive Business Valuations Logo" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-2xl font-bold text-primary">
                Xcllusive Business Valuations
              </span>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/process" className="text-foreground hover:text-primary transition-colors">
                Process
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors">
                Our Services
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact Us
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+61180082583" className="hidden lg:flex items-center space-x-2 text-primary font-semibold hover:text-primary-glow transition-colors cursor-pointer">
              <Phone className="h-4 w-4" />
              <span>Call - 1800 825 831</span>
            </a>
            <Button variant="hero" size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};