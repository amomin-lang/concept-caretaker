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
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">
            Why Clients Trust us with their Business Valuations
          </h2>
          <div className="w-24 h-1 bg-gradient-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-4xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-2 border-0 bg-trust-blue">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg mb-4 flex items-center justify-center">
                    <Icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl text-trust-blue-foreground">{factor.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-trust-blue-foreground/80 leading-relaxed">{factor.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};