import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import LegalProceedings from "./pages/LegalProceedings";
import SuccessionPlanning from "./pages/SuccessionPlanning";
import ExitStrategy from "./pages/ExitStrategy";
import TaxPurposes from "./pages/TaxPurposes";
import MergersAcquisitions from "./pages/MergersAcquisitions";
import FinancialReporting from "./pages/FinancialReporting";
import FamilyLaw from "./pages/FamilyLaw";
import Process from "./pages/Process";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/about/our-team" element={<OurTeam />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/services/legal-proceedings" element={<LegalProceedings />} />
          <Route path="/services/succession-planning" element={<SuccessionPlanning />} />
          <Route path="/services/exit-strategy" element={<ExitStrategy />} />
          <Route path="/services/tax-purposes" element={<TaxPurposes />} />
          <Route path="/services/mergers-acquisitions" element={<MergersAcquisitions />} />
          <Route path="/services/financial-reporting" element={<FinancialReporting />} />
          <Route path="/services/family-law" element={<FamilyLaw />} />
          <Route path="/process" element={<Process />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
