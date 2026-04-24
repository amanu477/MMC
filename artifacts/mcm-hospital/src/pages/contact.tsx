import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  }

  return (
    <PageTransition>
      <SEO title="Contact Us | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-primary py-20 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-white/80">
            We're here to help. Reach out to us for general inquiries, feedback, or assistance.
          </p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-4">
        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-serif font-bold text-primary mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">Our dedicated team is available 24/7 for emergency care and during regular hours for general inquiries.</p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 text-primary">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground mt-1">Gerji Mebrat Haile,<br />Addis Ababa, Ethiopia</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 text-primary">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Phone</h4>
                  <p className="text-muted-foreground mt-1">+251 11 629 4666</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 text-primary">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <p className="text-muted-foreground mt-1">info@mcmkoreanhospital.org</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center shrink-0 text-primary">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Hours</h4>
                  <p className="text-primary font-medium mt-1">Emergency: 24/7</p>
                  <p className="text-muted-foreground">Outpatient: Mon–Sat 8:00–17:00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-xl border border-border p-8 md:p-12">
              {isSubmitted ? (
                <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center space-y-6 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={48} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-primary mb-2">Message Sent</h3>
                    <p className="text-muted-foreground text-lg max-w-md mx-auto">
                      Thank you for reaching out. A member of our team will get back to you shortly.
                    </p>
                  </div>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      form.reset();
                      setIsSubmitted(false);
                    }}
                    className="mt-4"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-serif font-bold text-primary mb-8">Send us a Message</h3>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" className="h-12 bg-muted/20" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Email Address</FormLabel>
                              <FormControl>
                                <Input placeholder="john@example.com" className="h-12 bg-muted/20" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Phone Number</FormLabel>
                              <FormControl>
                                <Input placeholder="+251 911 000 000" className="h-12 bg-muted/20" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-foreground">Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help?" className="h-12 bg-muted/20" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-foreground">Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Please provide details..." 
                                className="min-h-[150px] resize-y bg-muted/20" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button type="submit" size="lg" className="w-full md:w-auto h-14 px-10 rounded-full bg-primary hover:bg-primary/90 text-white text-base">
                        <Send size={18} className="mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </Form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-[400px] w-full bg-muted relative">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-muted-foreground">
          <MapPin size={48} className="mb-4 opacity-50" />
          <p className="font-medium">Interactive Map Integration</p>
          <p className="text-sm">Gerji Mebrat Haile, Addis Ababa</p>
        </div>
      </section>
      
    </PageTransition>
  );
}
