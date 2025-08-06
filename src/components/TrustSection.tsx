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
    <section className="py-32 bg-gradient-trust relative overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-icon rounded-full blur-2xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-rainbow rounded-full blur-xl opacity-30 animate-particle-float"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-primary/10 rounded-full blur-3xl animate-morphing"></div>
        <div className="absolute top-1/2 right-10 w-20 h-20 bg-accent/20 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-icon opacity-15 rounded-full blur-2xl animate-particle-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      {/* Main content */}
      <div className="container mx-auto px-6 relative">
        {/* Header section */}
        <div className="text-center mb-24">
          <div className="relative inline-block">
            <h2 className="text-6xl lg:text-7xl font-black bg-gradient-rainbow bg-[length:200%_200%] bg-clip-text text-transparent mb-8 animate-rainbow">
              Why Clients Trust us with their Business Valuations
            </h2>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-icon rounded-full opacity-60 animate-float"></div>
            <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-accent rounded-full opacity-80 animate-particle-float"></div>
          </div>
          
          {/* Animated divider */}
          <div className="flex items-center justify-center gap-6 mb-8">
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-primary to-accent opacity-60"></div>
            <div className="relative">
              <div className="w-4 h-4 bg-gradient-icon rounded-full animate-pulse-glow"></div>
              <div className="absolute inset-0 w-4 h-4 bg-gradient-rainbow rounded-full opacity-50 animate-ping"></div>
            </div>
            <div className="h-px w-32 bg-gradient-to-l from-transparent via-accent to-primary opacity-60"></div>
          </div>
          
          <p className="text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
            Our proven methodology and expert team deliver valuations you can confidently rely on for any business decision
          </p>
        </div>

        {/* Trust factors cards */}
        <div className="grid grid-cols-1 gap-10 max-w-7xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div 
                key={index} 
                className="group relative overflow-hidden"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Glassmorphism card */}
                <div className="relative backdrop-blur-xl bg-gradient-glass border border-white/20 rounded-3xl shadow-glass hover:shadow-neon transition-all duration-700 hover:scale-[1.02] animate-slide-in-left">
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  {/* Gradient border animation */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-border opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  
                  {/* Content container */}
                  <div className="relative p-12 flex items-center gap-10">
                    {/* Icon section */}
                    <div className="flex-shrink-0 relative">
                      {/* Background glow */}
                      <div className="absolute inset-0 bg-gradient-rainbow rounded-3xl opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-500 animate-pulse"></div>
                      
                      {/* Icon container */}
                      <div className="relative w-28 h-28 bg-gradient-rainbow rounded-3xl flex items-center justify-center shadow-neon group-hover:scale-110 group-hover:rotate-12 transition-all duration-700 animate-icon-bounce">
                        <Icon className="h-14 w-14 text-white drop-shadow-lg" />
                        
                        {/* Floating particles */}
                        <div className="absolute -top-2 -right-2 w-3 h-3 bg-accent rounded-full opacity-0 group-hover:opacity-100 animate-particle-float transition-opacity duration-500"></div>
                        <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 animate-float transition-opacity duration-500" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-3xl font-bold text-foreground mb-5 group-hover:text-primary transition-colors duration-500 relative">
                        {factor.title}
                        {/* Underline animation */}
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-accent group-hover:w-full transition-all duration-700 ease-out rounded-full"></div>
                      </h3>
                      <p className="text-xl text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-500">
                        {factor.description}
                      </p>
                    </div>
                    
                    {/* Progress indicator with enhanced design */}
                    <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-x-8 group-hover:translate-x-0">
                      <div className="flex flex-col items-center space-y-4">
                        {/* Animated circle */}
                        <div className="relative w-16 h-16 rounded-full bg-gradient-rainbow flex items-center justify-center shadow-neon animate-pulse-glow">
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                            <div className="w-4 h-4 rounded-full bg-white animate-ping"></div>
                          </div>
                          {/* Orbiting dot */}
                          <div className="absolute w-3 h-3 bg-accent rounded-full animate-spin" style={{ 
                            top: '2px', 
                            left: '50%', 
                            transformOrigin: '50% 30px',
                            marginLeft: '-6px'
                          }}></div>
                        </div>
                        
                        {/* Counter */}
                        <div className="relative">
                          <div className="text-lg font-black text-primary bg-gradient-accent bg-clip-text text-transparent">
                            #{String(index + 1).padStart(2, '0')}
                          </div>
                          <div className="absolute inset-0 text-lg font-black text-primary opacity-50 blur-sm">
                            #{String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Bottom morphing accent */}
                  <div className="absolute bottom-0 left-0 h-2 w-0 bg-gradient-rainbow group-hover:w-full transition-all duration-1000 ease-out rounded-full animate-shimmer"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative inline-flex items-center gap-4 px-10 py-6 bg-gradient-glass backdrop-blur-xl rounded-full border border-white/30 shadow-glass hover:shadow-neon transition-all duration-500 hover:scale-105">
            {/* Animated dots */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce"></div>
              <div className="w-3 h-3 rounded-full bg-accent animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-3 h-3 rounded-full bg-primary animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
            
            <span className="text-xl font-bold bg-gradient-rainbow bg-clip-text text-transparent">
              Trusted by 500+ businesses across Australia
            </span>
            
            {/* Floating particles around CTA */}
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-accent rounded-full animate-particle-float"></div>
            <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-primary rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};