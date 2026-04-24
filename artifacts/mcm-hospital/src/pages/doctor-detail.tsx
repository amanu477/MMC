import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { DOCTORS } from "@/data/doctors";
import { DEPARTMENTS } from "@/data/departments";
import { Button } from "@/components/ui/button";
import { useParams, Link } from "wouter";
import NotFound from "./not-found";
import { ArrowLeft, CalendarPlus, MapPin, Award } from "lucide-react";

export default function DoctorDetail() {
  const { slug } = useParams();
  const doctor = DOCTORS.find(d => d.id === slug);

  if (!doctor) {
    return <NotFound />;
  }

  const department = DEPARTMENTS.find(d => d.id === doctor.departmentId);

  return (
    <PageTransition>
      <SEO title={`${doctor.name} | MCM Hospital`} />
      
      <div className="bg-muted/20 py-8">
        <div className="container mx-auto px-4">
          <Link href="/doctors" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Directory
          </Link>
        </div>
      </div>

      <section className="py-12 md:py-20 container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl border border-border/50 overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="md:w-2/5 bg-muted relative">
              <img 
                src={doctor.photoUrl} 
                alt={doctor.name}
                className="w-full h-full object-cover object-top min-h-[400px] md:min-h-full"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/600x800?text=Doctor";
                }}
              />
            </div>
            
            {/* Content Side */}
            <div className="md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 text-secondary-foreground font-semibold uppercase tracking-wider text-sm mb-4">
                <Award size={18} className="text-primary" />
                <span>Specialist</span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-2">
                {doctor.name}
              </h1>
              
              <h2 className="text-xl text-muted-foreground font-medium mb-8">
                {doctor.specialty}
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 text-primary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium uppercase tracking-wider mb-1">Department</p>
                    <p className="text-lg font-medium text-foreground">{department?.name || "General"}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-muted/30 p-6 rounded-2xl mb-8">
                <p className="text-foreground leading-relaxed">
                  Dr. {doctor.name.replace("Dr. ", "")} is a highly respected member of our {department?.name} department, dedicated to providing world-class care at MCM Comprehensive Specialized Hospital.
                </p>
              </div>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <Link href={`/appointment?doctor=${doctor.id}&department=${doctor.departmentId}`}>
                  <Button size="lg" className="w-full sm:w-auto px-8 rounded-full bg-primary hover:bg-primary/90 text-white h-14 text-base">
                    <CalendarPlus size={18} className="mr-2" />
                    Book Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

    </PageTransition>
  );
}
