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
    <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Why Clients Trust us with their Business Valuations
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto mb-4"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology and expert team deliver valuations you can confidently rely on
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 max-w-5xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-2xl bg-card border border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-elegant"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative p-8 flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {factor.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {factor.description}
                    </p>
                  </div>
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};