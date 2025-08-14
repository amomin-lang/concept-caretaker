import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookingForm } from "@/components/BookingForm";
import { ProcessFlowChart } from "@/components/ProcessFlowChart";
import heroImage from "@/assets/hero-business.jpg";

const Process = () => {
  const processSteps = [
    {
      number: 1,
      title: "Clear Setup & Next Steps",
      description: "It all starts with clarity - the scope, purpose, timeframes, and exactly what's needed.",
      benefit: "What's in it for you: No confusion. No delays. Just a clear roadmap from day one."
    },
    {
      number: 2,
      title: "Financial Info Collected - Clean or Not",
      description: "The process begins by gathering key business documents - profit and loss statements, balance sheets, and whatever else is available.",
      benefit: "What's in it for you: Even if records are incomplete, the right questions help fill the gaps and avoid misinterpretation."
    },
    {
      number: 3,
      title: "Numbers Reviewed - Gaps Identified",
      description: "Financials are reviewed thoroughly. Trends are benchmarked against industry standards, and any red flags or missing pieces are flagged early.",
      benefit: "What's in it for you: A valuation that sees what others might miss - and tells the real story behind the numbers."
    },
    {
      number: 4,
      title: "Business Interview - Focused & Insightful",
      description: "An interview follows with the owner or key personnel. By this point, the business and its industry have already been researched, so the discussion goes straight into the value drivers, risks, dependencies, and operational realities.",
      benefit: "What's in it for you: A tailored conversation that cuts through generic questions and focuses on what actually influences the business's value."
    },
    {
      number: 5,
      title: "Supporting Documents - Only What Matters",
      description: "Additional documents like key contracts, staff arrangements, or client relationships may be requested, depending on what's uncovered.",
      benefit: "What's in it for you: A valuation that reflects the actual structure and strengths/weaknesses of the business, not just surface-level financials."
    },
    {
      number: 6,
      title: "Clarifications - Where Needed",
      description: "If something doesn't add up or more context is required, a quick follow-up with the right person - whether it's a manager, bookkeeper, or advisor - keeps things on track.",
      benefit: "What's in it for you: The end result is accurate and balanced, not rushed or assumptive."
    },
    {
      number: 7,
      title: "Best-Method Valuation - Not One-Size-Fits-All",
      description: "The valuation approach is selected based on the purpose and the type of business. This may include:",
      methods: [
        "Market-based comparisons",
        "Future maintainable earnings",
        "Discounted cash flow",
        "Net asset value"
      ],
      additionalInfo: "Sometimes multiple methods are used to ensure accuracy. Real-world sales data is used - from within the same industry - and often directly from deals handled across the country.",
      benefit: "What's in it for you: A valuation that's not just theoretically correct - but relevant, defensible, and matched to real-world outcomes."
    },
    {
      number: 8,
      title: "Draft Review (If Strategic)",
      description: "In case of strategic planning scenarios, a draft version may be shared first. Feedback is welcomed, and minor clarifications are addressed before finalising.",
      benefit: "What's in it for you: No surprises. Just confidence that the final result aligns with the facts and the purpose behind it."
    },
    {
      number: 9,
      title: "Final Valuation Delivered",
      description: "A complete, clearly structured report is delivered - whether for legal use, tax planning, negotiation, or internal decision-making.",
      benefit: "What's in it for you: A valuation that does the job it's meant to - one you can rely on, defend, and move forward with."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section 
          className="relative min-h-[400px] flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(rgba(33, 150, 243, 0.8), rgba(21, 101, 192, 0.9)), url(${heroImage})` }}
        >
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 drop-shadow-lg">The Valuation Process - What to Expect</h1>
              <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
                <p className="text-lg lg:text-xl font-bold text-white drop-shadow-lg">A Structured Process That Delivers Real, Defendable Business Value</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 relative">
          <div className="container mx-auto px-6">
            <div className="flex gap-8">
              <div className="flex-1 max-w-4xl">
              
                {/* Introduction */}
                <div className="mb-16">
                  <h2 className="text-3xl font-bold text-primary mb-6">The Valuation Process - Interactive Flow</h2>
                  <div className="prose prose-lg max-w-none text-muted-foreground">
                    <p className="mb-6 text-xl">
                      Step by step, you'll be guided through a thorough, proven approach designed to uncover the true 
                      value of your business - with clarity, confidence, and purpose.
                    </p>
                    <p className="mb-6 text-xl">
                      Use the interactive flowchart below to explore the process. You can zoom, pan, and see how each step connects to the next.
                    </p>
                  </div>
                </div>

                {/* Interactive Flowchart */}
                <div className="mb-16">
                  <ProcessFlowChart />
                </div>

                {/* Process Details */}
                <div className="mb-16">
                  <h3 className="text-2xl font-bold text-primary mb-6">Process Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          1
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Clear Setup & Next Steps</h4>
                        <p className="text-sm text-muted-foreground">It all starts with clarity - the scope, purpose, timeframes, and exactly what's needed.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          2
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Financial Info Collected</h4>
                        <p className="text-sm text-muted-foreground">Gathering key business documents - profit and loss statements, balance sheets, and available records.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          3
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Numbers Reviewed</h4>
                        <p className="text-sm text-muted-foreground">Thorough review of financials, benchmarking against industry standards, identifying gaps.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          4
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Business Interview</h4>
                        <p className="text-sm text-muted-foreground">Focused discussion on value drivers, risks, dependencies, and operational realities.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          5
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Supporting Documents</h4>
                        <p className="text-sm text-muted-foreground">Additional documents like contracts, staff arrangements, or client relationships as needed.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          6
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Clarifications</h4>
                        <p className="text-sm text-muted-foreground">Quick follow-ups for additional context or clarification where needed.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          7
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Best-Method Valuation</h4>
                        <p className="text-sm text-muted-foreground">Selecting the appropriate valuation approach: market-based, earnings-based, DCF, or asset-based.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          8
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Draft Review</h4>
                        <p className="text-sm text-muted-foreground">For strategic planning scenarios, draft review and feedback incorporation.</p>
                      </CardContent>
                    </Card>

                    <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-white text-sm font-bold mb-4">
                          9
                        </div>
                        <h4 className="font-bold text-foreground mb-2">Final Valuation Delivered</h4>
                        <p className="text-sm text-muted-foreground">Complete, clearly structured report delivered for your specific purpose.</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

              </div>
              
              {/* Sliding Form */}
              <div className="hidden lg:block w-80">
                <div className="sticky top-24 transform transition-transform duration-300 ease-out">
                  <BookingForm />
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Process;