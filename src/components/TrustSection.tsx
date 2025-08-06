import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Target, 
  TrendingUp, 
  Shield, 
  CheckCircle, 
  BarChart3, 
  Globe 
} from "lucide-react";

export const TrustSection = () => {
  const trustFactors = [
    {
      icon: Target,
      title: "Tailored to Your Purpose",
      description: "Whether for legal proceedings, succession planning, exit strategy, or tax purposes – you'll receive a valuation that's precise, relevant, and ready to be relied on."
    },
    {
      icon: BarChart3,
      title: "Backed by Real Market Data",
      description: "Your valuation is grounded in current, comparable sales from across Australia – powered by insights from 200+ years of combined sales experience across Australia."
    },
    {
      icon: TrendingUp,
      title: "Gives You Clarity on What Really Matters",
      description: "Understand not just the numbers, but the story behind them. We uncover the value drivers, hidden risks, and opportunities that most overlook."
    },
    {
      icon: CheckCircle,
      title: "Proven, Trusted, Respected",
      description: "Over 500 valuations delivered. Trusted by lawyers, accountants, and business owners who need clarity, accuracy, and results."
    },
    {
      icon: Shield,
      title: "Built to Hold Up — in Court, in Negotiation, in Strategy",
      description: "From legal disputes to boardroom decisions, our valuations are independent, logical, and confidently defensible. We've been there as expert witnesses."
    },
    {
      icon: Globe,
      title: "More Than Valuers — Business Sales Experts",
      description: "With deep experience in selling businesses, we bring live market understanding to every valuation – not just theory."
    }
  ];

  return (
    <section className="py-24 bg-gradient-trust relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent mb-6">
              Why Clients Trust us with their Business Valuations
            </h2>
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-primary"></div>
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology and expert team deliver valuations you can confidently rely on for any business decision
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-6xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-3xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/30 transition-all duration-500 hover:shadow-glow animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/3 via-transparent to-accent/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Content */}
                <div className="relative p-10 flex items-center gap-8">
                  {/* Icon container */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-20 h-20 bg-gradient-icon rounded-2xl flex items-center justify-center shadow-hero group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 animate-float">
                        <Icon className="h-10 w-10 text-primary-foreground" />
                      </div>
                      {/* Floating particles effect */}
                      <div className="absolute -inset-2 bg-gradient-icon rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-500"></div>
                    </div>
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {factor.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                      {factor.description}
                    </p>
                  </div>
                  
                  {/* Progress indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <div className="flex flex-col items-center space-y-2">
                      <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                        <div className="w-6 h-6 rounded-full bg-primary-foreground flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
                        </div>
                      </div>
                      <div className="text-xs font-medium text-primary">#{String(index + 1).padStart(2, '0')}</div>
                    </div>
                  </div>
                </div>
                
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-accent group-hover:w-full transition-all duration-700 ease-out"></div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 rounded-full border border-primary/20">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            <span className="text-primary font-medium">Trusted by 500+ businesses across Australia</span>
          </div>
        </div>
      </div>
    </section>
  );
};