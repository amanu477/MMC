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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DEPARTMENTS } from "@/data/departments";
import { DOCTORS } from "@/data/doctors";
import { useState, useMemo } from "react";
import { useSearch } from "wouter";
import { CheckCircle2, User, Calendar as CalendarIcon, FileText } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  departmentId: z.string().min(1, "Please select a department"),
  doctorId: z.string().optional(),
  date: z.date({
    required_error: "Please select an appointment date",
  }),
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  dob: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  notes: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function Appointment() {
  const searchString = useSearch();
  const searchParams = new URLSearchParams(searchString);
  const initialDoctorId = searchParams.get("doctor");
  const initialDeptId = searchParams.get("department");

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      departmentId: initialDeptId || "",
      doctorId: initialDoctorId || "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      notes: "",
    },
  });

  const watchDepartment = form.watch("departmentId");
  const availableDoctors = useMemo(() => {
    if (!watchDepartment) return [];
    return DOCTORS.filter(d => d.departmentId === watchDepartment);
  }, [watchDepartment]);

  // If a department is selected but the current doctor isn't in it, clear the doctor
  if (watchDepartment && form.getValues("doctorId")) {
    const docInDept = availableDoctors.find(d => d.id === form.getValues("doctorId"));
    if (!docInDept) {
      form.setValue("doctorId", "");
    }
  }

  const handleNext = async () => {
    let isValid = false;
    if (step === 1) {
      isValid = await form.trigger(["departmentId", "date"]);
    } else if (step === 2) {
      isValid = await form.trigger(["firstName", "lastName", "email", "phone", "dob", "gender"]);
    }
    
    if (isValid) {
      setStep(step + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep(step - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onSubmit = (values: FormValues) => {
    // Simulate API call
    setTimeout(() => {
      setIsSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1000);
  };

  return (
    <PageTransition>
      <SEO title="Book Appointment | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-primary py-16 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">Book an Appointment</h1>
          <p className="text-lg text-white/80">
            Schedule a consultation with our world-class specialists. Experience the highest standard of healthcare.
          </p>
        </div>
      </div>

      <section className="py-16 container mx-auto px-4 max-w-4xl mb-20">
        
        {!isSubmitted && (
          <div className="flex justify-between items-center mb-12 px-4 relative">
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-muted -z-10 px-8">
              <div 
                className="h-full bg-secondary transition-all duration-500 ease-in-out" 
                style={{ width: `${((step - 1) / 2) * 100}%` }}
              />
            </div>
            
            {[
              { num: 1, label: "Appointment", icon: CalendarIcon },
              { num: 2, label: "Personal Info", icon: User },
              { num: 3, label: "Confirm", icon: FileText }
            ].map((s) => (
              <div key={s.num} className="flex flex-col items-center gap-2 bg-background px-2">
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300",
                  step >= s.num 
                    ? "bg-secondary border-secondary text-primary" 
                    : "bg-background border-muted text-muted-foreground"
                )}>
                  <s.icon size={20} className={step >= s.num ? "text-primary" : "text-muted-foreground"} />
                </div>
                <span className={cn(
                  "text-sm font-bold uppercase tracking-wider",
                  step >= s.num ? "text-primary" : "text-muted-foreground"
                )}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        )}

        <div className="bg-white rounded-3xl shadow-xl border border-border p-6 md:p-10 lg:p-12">
          {isSubmitted ? (
            <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
              <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm border border-green-200">
                <CheckCircle2 size={48} />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Appointment Confirmed!</h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto mb-8 leading-relaxed">
                Thank you, <strong>{form.getValues("firstName")}</strong>. Your appointment request has been successfully submitted. Our team will contact you shortly to confirm the exact time.
              </p>
              
              <div className="bg-muted/30 rounded-2xl p-6 md:p-8 max-w-lg mx-auto text-left mb-10 border border-border/50">
                <h3 className="font-bold text-primary mb-6 border-b border-border/50 pb-4">Appointment Summary</h3>
                <div className="space-y-4 text-sm md:text-base">
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground">Date:</span>
                    <span className="col-span-2 font-medium text-foreground">
                      {form.getValues("date") && format(form.getValues("date"), "MMMM d, yyyy")}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <span className="text-muted-foreground">Department:</span>
                    <span className="col-span-2 font-medium text-foreground">
                      {DEPARTMENTS.find(d => d.id === form.getValues("departmentId"))?.name}
                    </span>
                  </div>
                  {form.getValues("doctorId") && (
                    <div className="grid grid-cols-3 gap-2">
                      <span className="text-muted-foreground">Doctor:</span>
                      <span className="col-span-2 font-medium text-foreground">
                        {DOCTORS.find(d => d.id === form.getValues("doctorId"))?.name}
                      </span>
                    </div>
                  )}
                  <div className="grid grid-cols-3 gap-2 pt-4 border-t border-border/50">
                    <span className="text-muted-foreground">Patient:</span>
                    <span className="col-span-2 font-medium text-foreground">
                      {form.getValues("firstName")} {form.getValues("lastName")}
                    </span>
                  </div>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full px-8"
                onClick={() => {
                  form.reset();
                  setStep(1);
                  setIsSubmitted(false);
                }}
              >
                Book Another Appointment
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                
                {/* STEP 1: Appointment Details */}
                <div className={cn("space-y-8", step !== 1 && "hidden")}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-2">Appointment Details</h2>
                    <p className="text-muted-foreground">Select the department, doctor, and your preferred date.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <FormField
                      control={form.control}
                      name="departmentId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Department <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 bg-muted/10 border-border/50">
                                <SelectValue placeholder="Select a department" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-[300px]">
                              {DEPARTMENTS.map((dept) => (
                                <SelectItem key={dept.id} value={dept.id}>{dept.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="doctorId"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Preferred Doctor (Optional)</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value} disabled={!watchDepartment}>
                            <FormControl>
                              <SelectTrigger className="h-14 bg-muted/10 border-border/50 disabled:opacity-50">
                                <SelectValue placeholder={watchDepartment ? "Any available doctor" : "Select department first"} />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="max-h-[300px]">
                              <SelectItem value="any">Any available doctor</SelectItem>
                              {availableDoctors.map((doc) => (
                                <SelectItem key={doc.id} value={doc.id}>{doc.name}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel className="text-foreground font-semibold mb-1">Preferred Date <span className="text-destructive">*</span></FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full md:w-[50%] h-14 pl-4 text-left font-normal bg-muted/10 border-border/50 hover:bg-muted/20",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>Pick a date</span>
                                )}
                                <CalendarIcon className="ml-auto h-5 w-5 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) =>
                                date < new Date() || date < new Date("1900-01-01")
                              }
                              initialFocus
                              className="p-3 pointer-events-auto"
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-end pt-6 border-t border-border/50">
                    <Button type="button" size="lg" className="h-14 px-10 rounded-full bg-primary text-white" onClick={handleNext}>
                      Continue to Next Step
                    </Button>
                  </div>
                </div>

                {/* STEP 2: Personal Info */}
                <div className={cn("space-y-8", step !== 2 && "hidden")}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-2">Patient Information</h2>
                    <p className="text-muted-foreground">Please provide your personal details for registration.</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">First Name <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. John" className="h-14 bg-muted/10 border-border/50" {...field} />
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
                          <FormLabel className="text-foreground font-semibold">Last Name <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="e.g. Doe" className="h-14 bg-muted/10 border-border/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Email Address <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="john.doe@example.com" className="h-14 bg-muted/10 border-border/50" {...field} />
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
                          <FormLabel className="text-foreground font-semibold">Phone Number <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input placeholder="+251 911 000 000" className="h-14 bg-muted/10 border-border/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="dob"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Date of Birth <span className="text-destructive">*</span></FormLabel>
                          <FormControl>
                            <Input type="date" className="h-14 bg-muted/10 border-border/50" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="gender"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-foreground font-semibold">Gender <span className="text-destructive">*</span></FormLabel>
                          <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className="h-14 bg-muted/10 border-border/50">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="flex justify-between pt-6 border-t border-border/50">
                    <Button type="button" variant="outline" size="lg" className="h-14 px-8 rounded-full" onClick={handleBack}>
                      Back
                    </Button>
                    <Button type="button" size="lg" className="h-14 px-10 rounded-full bg-primary text-white" onClick={handleNext}>
                      Continue to Next Step
                    </Button>
                  </div>
                </div>

                {/* STEP 3: Confirm */}
                <div className={cn("space-y-8", step !== 3 && "hidden")}>
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-primary mb-2">Review & Confirm</h2>
                    <p className="text-muted-foreground">Please review your appointment details before submitting.</p>
                  </div>
                  
                  <div className="bg-muted/10 rounded-2xl border border-border/50 p-6 md:p-8 space-y-6">
                    <div className="grid md:grid-cols-2 gap-y-6 gap-x-12">
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Appointment</h4>
                        <div className="space-y-3 text-sm md:text-base">
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-muted-foreground">Date:</span>
                            <span className="col-span-2 font-medium">
                              {form.getValues("date") && format(form.getValues("date"), "MMMM d, yyyy")}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-muted-foreground">Department:</span>
                            <span className="col-span-2 font-medium">
                              {DEPARTMENTS.find(d => d.id === form.getValues("departmentId"))?.name}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-muted-foreground">Doctor:</span>
                            <span className="col-span-2 font-medium">
                              {form.getValues("doctorId") && form.getValues("doctorId") !== "any" 
                                ? DOCTORS.find(d => d.id === form.getValues("doctorId"))?.name 
                                : "Any available doctor"}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-4">Patient</h4>
                        <div className="space-y-3 text-sm md:text-base">
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-muted-foreground">Name:</span>
                            <span className="col-span-2 font-medium">
                              {form.getValues("firstName")} {form.getValues("lastName")}
                            </span>
                          </div>
                          <div className="grid grid-cols-3 gap-2">
                            <span className="text-muted-foreground">Contact:</span>
                            <span className="col-span-2 font-medium break-all">
                              {form.getValues("phone")}<br/>
                              <span className="text-sm text-muted-foreground font-normal">{form.getValues("email")}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <FormField
                    control={form.control}
                    name="notes"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-foreground font-semibold">Additional Notes (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Briefly describe your symptoms or reason for visit..." 
                            className="min-h-[120px] resize-y bg-muted/10 border-border/50" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex justify-between pt-6 border-t border-border/50">
                    <Button type="button" variant="outline" size="lg" className="h-14 px-8 rounded-full" onClick={handleBack}>
                      Back
                    </Button>
                    <Button type="submit" size="lg" className="h-14 px-10 rounded-full bg-secondary text-primary hover:bg-secondary/90 shadow-lg text-base">
                      Confirm Appointment
                    </Button>
                  </div>
                </div>

              </form>
            </Form>
          )}
        </div>
      </section>

    </PageTransition>
  );
}
