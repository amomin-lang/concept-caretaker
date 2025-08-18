import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export const BookingForm = () => {
  return (
    <Card className="shadow-hero sticky top-24">
      <CardHeader className="bg-gradient-hero text-primary-foreground rounded-t-lg">
        <CardTitle className="text-2xl text-center">Book a Free Session with Business Valuer</CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName">First Name</Label>
            <Input id="firstName" placeholder="First" />
          </div>
          <div>
            <Label htmlFor="lastName">Last Name</Label>
            <Input id="lastName" placeholder="Last" />
          </div>
        </div>
        
        <div>
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="Your phone number" />
        </div>
        
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="your.email@example.com" />
        </div>
        
        <Button variant="hero" className="w-full text-lg py-6">
          Submit Request
        </Button>
      </CardContent>
    </Card>
  );
};