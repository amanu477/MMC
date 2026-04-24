import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { DEPARTMENTS } from "@/data/departments";
import { iconFor } from "@/data/department-icons";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { SectionReveal, Stagger, StaggerItem } from "@/components/animations/SectionReveal";

export default function Departments() {
  return (
    <PageTransition>
      <SEO title="Clinical Departments | MCM Comprehensive Specialized Hospital" />

      <div className="bg-soft-mist py-20 md:py-28 border-b border-border/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid opacity-50 pointer-events-none" />
        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-xs mb-4">
              <Stethoscope size={14} />
              <span>Clinical Departments</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-tight">
              Comprehensive care, every specialty
            </h1>
            <p className="text-lg text-muted-foreground">
              From routine check-ups to complex surgical procedures, our 20+ specialized clinical
              departments are equipped with state-of-the-art technology and staffed by
              internationally recognized experts.
            </p>
          </SectionReveal>
        </div>
      </div>

      <section className="py-20 container mx-auto px-4">
        <Stagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => {
            const Icon = iconFor(dept.id);
            return (
              <StaggerItem key={dept.id}>
                <div className="relative bg-white rounded-2xl border border-border/60 p-7 h-full flex flex-col group hover:border-primary/30 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-1 bg-secondary group-hover:bg-primary transition-colors" />
                  <div className="flex items-start gap-4 mb-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-secondary/50 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 shrink-0">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-xl font-bold text-primary leading-tight pt-1.5">
                      {dept.name}
                    </h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    {dept.description}
                  </p>
                  <Link href={`/doctors?department=${dept.id}`} className="mt-6">
                    <Button
                      variant="ghost"
                      className="w-full justify-between group-hover:bg-primary/5 group-hover:text-primary"
                    >
                      View Doctors
                      <ArrowRight
                        size={16}
                        className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                      />
                    </Button>
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      <section className="bg-primary text-white py-16 mt-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid opacity-[0.12]" />
        <div className="container mx-auto px-4 text-center max-w-2xl relative">
          <SectionReveal>
            <h2 className="text-3xl font-serif font-bold mb-4">
              Need help finding the right specialist?
            </h2>
            <p className="text-white/80 mb-8">
              Our care team can guide you to the appropriate department based on your symptoms
              and medical history.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-white px-8 rounded-full shine-on-hover"
              >
                Contact Support
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
