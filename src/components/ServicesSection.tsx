import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  HandHeart, 
  Home, 
  ShoppingBag, 
  TrendingUp, 
  Calculator, 
  FileText,
  RefreshCw,
  AlertTriangle
} from "lucide-react";

export const ServicesSection = () => {
  const services = [
    {
      icon: HandHeart,
      title: "Partnership Dissolution Business Valuations",
      description: "Fair and accurate valuations for partnership disputes"
    },
    {
      icon: Home,
      title: "Family Settlement Business Valuations",
      description: "Comprehensive business valuations for family law matters"
    },
    {
      icon: ShoppingBag,
      title: "Buying a Business Valuations",
      description: "Due diligence and valuation for acquisition decisions"
    },
    {
      icon: TrendingUp,
      title: "Selling a Business Valuations",
      description: "Maximize value with professional business appraisals"
    },
    {
      icon: Calculator,
      title: "Business Planning Valuations",
      description: "Strategic valuations for business growth and planning"
    },
    {
      icon: FileText,
      title: "Tax Reasons Business Valuations",
      description: "Compliant valuations for tax and regulatory purposes"
    },
    {
      icon: RefreshCw,
      title: "Restructuring Business Valuations",
      description: "Professional valuations for business restructuring scenarios"
    },
    {
      icon: AlertTriangle,
      title: "Insolvency Business Valuations",
      description: "Expert valuations for insolvency and liquidation proceedings"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-primary mb-8">
            Valuations for
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg text-primary">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};