import { Check } from "lucide-react";

export const TrustSection = () => {
  const trustFactors = [
    {
      icon: Check,
      title: "Tailored to Your Purpose",
      description: "Whether for legal proceedings, succession planning, exit strategy, or tax purposes - you'll receive a valuation that's precise, relevant, and ready to be relied on."
    },
    {
      icon: Check,
      title: "Backed by Real Market Data",
      description: "Your valuation is grounded in current, comparable sales from across Australia - powered by insights from 200+ business sales we handle every year, combined with access to a comprehensive national database of business transactions across Australia."
    },
    {
      icon: Check,
      title: "Gives You Clarity on What Really Matters",
      description: "Understand not just the numbers, but the story behind them. We uncover the value drivers, hidden risks, and future potential that most overlook."
    },
    {
      icon: Check,
      title: "Proven, Trusted, Respected",
      description: "Over 500 valuations delivered. Trusted by lawyers, accountants, and business owners who need clarity, accuracy, and results."
    },
    {
      icon: Check,
      title: "Built to Hold Up — In Court, in Negotiation, in Strategy",
      description: "From legal disputes to boardroom decisions, our valuations are independent, logical, and confidently defendable. We've stood by them as expert witnesses."
    },
    {
      icon: Check,
      title: "More Than Valuers — Business Sales Experts",
      description: "With deep experience in selling businesses, we bring live market understanding to every valuation - not static theory."
    },
    {
      icon: Check,
      title: "Academic Knowledge + Real-World Business Experience",
      description: "You benefit from a team that blends CPAs, MBAs, Commerce Graduates, Registered Business Valuers, and M&A professionals - combining technical precision with practical insight from real business sales."
    },
    {
      icon: Check,
      title: "Australia-Wide Reach, Specialist Insight",
      description: "You benefit from a team of 8 in-house valuers across the country, each with specialist knowledge in diverse industries and niches."
    },
    {
      icon: Check,
      title: "Supports Smoother Resolutions in Family Law",
      description: "When emotions run high and one party owns the business, our fair, independent valuations help both sides reach agreement faster and with less stress."
    },
    {
      icon: Check,
      title: "Works Even When Records Aren't Perfect",
      description: "No clean data? No problem. We ask the right questions, reconstruct where needed, and deliver a valuation that moves the process forward with confidence."
    },
    {
      icon: Check,
      title: "We Use the Best Method for the Job",
      description: "You get a valuation built on the method that best fits your needs - whether it's market-based, asset-based, discounted cash flow, or future maintainable earnings. Often, we apply multiple approaches to ensure accuracy and credibility."
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header section */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-6 leading-tight whitespace-nowrap">
            Why Clients Trust us with their Business Valuations
          </h2>
          
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our proven methodology and expert team deliver valuations you can confidently rely on for any business decision
          </p>
        </div>

        {/* Trust factors grid */}
        <div className="grid grid-cols-1 gap-6 max-w-6xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div key={index} className="group bg-background/80 backdrop-blur-sm rounded-xl border border-border/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
                <div className="p-6 md:p-8">
                  <div className="flex items-start gap-6">
                    {/* Icon section */}
                    <div className="flex-shrink-0">
                       <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 shadow-sm">
                         <Icon className="h-7 w-7 text-primary-foreground drop-shadow-sm" />
                       </div>
                    </div>
                    
                    {/* Text content */}
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 leading-tight">
                        {factor.title}
                      </h3>
                      <p className="text-base text-foreground/80 leading-relaxed font-medium">
                        {factor.description}
                      </p>
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