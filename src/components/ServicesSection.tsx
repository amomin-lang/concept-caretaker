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
      title: "Business Valuations for Partner Dissolution",
      description: "Fair and accurate business valuations for partnership disputes"
    },
    {
      icon: Home,
      title: "Business Valuations for Family Settlement",
      description: "Comprehensive business valuations for family law matters"
    },
    {
      icon: ShoppingBag,
      title: "Business Valuations for Buying a Business",
      description: "Business valuations for acquisition decisions"
    },
    {
      icon: TrendingUp,
      title: "Business Valuations for Selling a Business",
      description: "Maximise value with professional business valuations"
    },
    {
      icon: Calculator,
      title: "Business Valuations for Business Planning",
      description: "Strategic business valuations for business growth and planning"
    },
    {
      icon: FileText,
      title: "Business Valuations for Tax Reasons",
      description: "Compliant business valuations for tax and regulatory purposes"
    },
    {
      icon: RefreshCw,
      title: "Business Valuations for Restructuring",
      description: "Professional business valuations for business restructuring scenarios"
    },
    {
      icon: AlertTriangle,
      title: "Business Valuations for Insolvency",
      description: "Expert business valuations for insolvency and liquidation proceedings"
    }
  ];

  return (
    <section className="py-8 sm:py-12 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center text-primary mb-6 sm:mb-8">
            Business Valuations for
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="text-center shadow-card hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-1">
                  <CardHeader className="pb-3 sm:pb-4 p-4 sm:p-6">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-hero rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                      <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-base sm:text-lg text-primary leading-tight">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0 p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{service.description}</p>
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