import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Phone, Mail, Clock, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import profileImage from "@assets/pic of me_1750100470021.png";

// Static form schema
const contactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  projectType: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      projectType: undefined,
      budget: undefined,
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(`New Contact Form Submission from ${data.firstName} ${data.lastName}`);
      const body = encodeURIComponent(
        `New contact form submission:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone || 'Not provided'}
Project Type: ${data.projectType || 'Not specified'}
Budget Range: ${data.budget || 'Not specified'}

Message:
${data.message}

---
This message was sent from the Studio Nan website contact form.`
      );
      
      const mailtoLink = `mailto:nana8kawamura@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening email client...",
        description: "Your default email application will open with the message pre-filled.",
      });
      
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Please contact us directly at nana8kawamura@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-gold text-lg font-medium mb-2">Contact</h3>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-charcoal mb-6">
            Start Your Design Journey
          </h2>
          <p className="text-xl text-medium-gray max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your vision and create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-gold text-xl mr-4 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Phone</div>
                    <div className="text-medium-gray">647-621-3972</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold text-xl mr-4 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Email</div>
                    <div className="text-medium-gray">nana8kawamura@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-gold text-xl mr-4 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-charcoal">Hours</div>
                    <div className="text-medium-gray">Monday - Friday: 9:00 AM - 6:00 PM<br />Saturday: 10:00 AM - 4:00 PM</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-charcoal mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://instagram.com/studio.nan__" className="text-gold hover:text-charcoal transition-colors duration-300 text-xl">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gold hover:text-charcoal transition-colors duration-300 text-xl">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.04c-5.5 0-9.96 4.46-9.96 9.96 0 4.41 2.87 8.19 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.13-1.11-1.44-1.11-1.44-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.5-4.46-9.96-9.96-9.96z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="bg-warm-white p-8 rounded-lg">
            <h3 className="text-2xl font-playfair font-bold text-charcoal mb-6">Send us a Message</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal font-medium">First Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-charcoal font-medium">Last Name *</FormLabel>
                        <FormControl>
                          <Input 
                            {...field} 
                            className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg" 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email"
                          {...field} 
                          className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          type="tel"
                          {...field} 
                          className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Project Type</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="residential">Residential Design</SelectItem>
                          <SelectItem value="small-space">Small Space Design</SelectItem>
                          <SelectItem value="consultation">Design Consultation</SelectItem>
                          <SelectItem value="furniture-styling">Furniture & Styling</SelectItem>
                          <SelectItem value="natural-lighting">Natural Lighting</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Budget Range</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="under-50k">Under $50,000</SelectItem>
                          <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                          <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                          <SelectItem value="over-250k">Over $250,000</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-charcoal font-medium">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field} 
                          rows={4}
                          placeholder="Tell us about your project vision..."
                          className="border-gray-300 focus:ring-gold focus:border-gold rounded-lg" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gold hover:bg-gold/90 text-white py-4 rounded-lg font-medium text-lg"
                >
                  {isSubmitting ? "Opening Email..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
