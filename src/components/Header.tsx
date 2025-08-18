import { Button } from "@/components/ui/button";
import { Phone, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

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
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="flex items-center space-x-6">
                <NavigationMenuItem>
                  <Link to="/" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                    Home
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary transition-colors bg-transparent">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-3 p-4">
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about"
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">About Us</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Learn about our company
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <Link
                            to="/about/our-team"
                            className={cn(
                              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            )}
                          >
                            <div className="text-sm font-medium leading-none">Our Team</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Meet our valuation professionals
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/process" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                    Process
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/services" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                    Our Services
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link to="/contact" className="text-foreground hover:text-primary transition-colors px-4 py-2">
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center">
            <a href="tel:+61180082583" className="hidden lg:flex items-center space-x-2 text-primary font-semibold hover:text-primary-glow transition-colors cursor-pointer">
              <Phone className="h-4 w-4" />
              <span>Call - 1800 825 831</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};