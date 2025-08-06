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
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground mb-6 leading-tight whitespace-nowrap">
            Why Clients Trust Us with Their Business Valuations
          </h2>
          
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology and expert team deliver valuations you can confidently rely on for any business decision
          </p>
        </div>

        {/* Trust factors grid */}
        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border border-border/50 bg-gradient-to-br from-card via-card/95 to-secondary/30 hover:from-primary/5 hover:via-card hover:to-primary/10 relative overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon section */}
                    <div className="flex-shrink-0">
                       <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 shadow-sm">
                         <Icon className="h-8 w-8 text-primary-foreground drop-shadow-sm" />
                       </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                        {factor.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {factor.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Bottom stats */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-8 px-8 py-4 bg-card border rounded-lg shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-lg font-semibold text-foreground">
                Trusted by 500+ businesses across Australia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};