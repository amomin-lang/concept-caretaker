import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export const BookingForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    businessType: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      businessType: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.firstName || !formData.lastName || !formData.phone || !formData.email) {
        toast({
          title: "Missing Information",
          description: "Please fill in all required fields.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Invalid Email",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Submit to PHP backend
      // For production: /contact.php (relative path)
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        console.log('Form submission successful:', result);
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
          variant: "default",
        });

        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          businessType: "",
          message: ""
        });
      } else {
        console.error('Form submission failed:', result);
        throw new Error(result.error || 'Unknown error');
      }

    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Submission Error",
        description: "There was an error sending your message. Please call us directly at 1800 825 831 or email form@mybusinessvaluation.com.au",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-hero sticky top-20 sm:top-24 w-full max-w-lg mx-auto">
      <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg p-4 sm:p-6">
        <CardTitle className="text-lg sm:text-xl lg:text-2xl text-center leading-tight">
          Book a Free Session with Business Valuer
        </CardTitle>
      </CardHeader>
      <CardContent className="p-4 sm:p-6 space-y-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="sm:col-span-1">
              <Label htmlFor="firstName" className="text-sm font-medium">First Name *</Label>
              <Input 
                id="firstName" 
                name="firstName"
                placeholder="First" 
                className="mt-1"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="sm:col-span-1">
              <Label htmlFor="lastName" className="text-sm font-medium">Last Name *</Label>
              <Input 
                id="lastName" 
                name="lastName"
                placeholder="Last" 
                className="mt-1"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="phone" className="text-sm font-medium">Phone Number *</Label>
              <Input 
                id="phone" 
                name="phone"
                type="tel" 
                placeholder="Your phone number" 
                className="mt-1"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                placeholder="your.email@example.com" 
                className="mt-1"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="businessType" className="text-sm font-medium">Business Type</Label>
              <Select onValueChange={handleSelectChange} value={formData.businessType}>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Select your business type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="services">Services</SelectItem>
                  <SelectItem value="technology">Technology</SelectItem>
                  <SelectItem value="professional">Professional Practice</SelectItem>
                  <SelectItem value="hospitality">Hospitality</SelectItem>
                  <SelectItem value="construction">Construction</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <Label htmlFor="message" className="text-sm font-medium">Additional Information</Label>
              <Textarea 
                id="message" 
                name="message"
                placeholder="Tell us about your business valuation needs..." 
                className="mt-1 min-h-[80px]"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
          </div>
          
          <Button 
            type="submit" 
            variant="hero" 
            className="w-full text-base sm:text-lg py-4 sm:py-6 mt-6"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Request"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};