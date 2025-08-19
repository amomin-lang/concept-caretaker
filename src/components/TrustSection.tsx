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
    <section className="py-8 sm:py-12 lg:py-20 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-4 sm:mb-6 leading-tight">
            Why Clients Trust us with their Business Valuations
          </h2>
          
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-4 sm:mb-6"></div>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
            Our proven methodology and expert team deliver valuations you can confidently rely on for any business decision
          </p>
        </div>

        {/* Trust factors grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 max-w-5xl mx-auto">
          {trustFactors.map((factor, index) => {
            const Icon = factor.icon;
            return (
              <div key={index} className="group">
                <div className="flex items-start gap-4 sm:gap-6 lg:gap-8">
                  {/* Icon section */}
                  <div className="flex-shrink-0 pt-1">
                     <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary font-bold" strokeWidth={3} />
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground mb-2 sm:mb-3 lg:mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                      {factor.title}
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-foreground/90 leading-relaxed font-medium">
                      {factor.description}
                    </p>
                  </div>
                </div>
                {/* Subtle divider */}
                {index < trustFactors.length - 1 && (
                  <div className="w-full h-px bg-border/30 mt-6 sm:mt-8 lg:mt-10"></div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};