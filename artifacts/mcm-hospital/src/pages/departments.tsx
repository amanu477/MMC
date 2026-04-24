import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { DEPARTMENTS } from "@/data/departments";
import { iconFor } from "@/data/department-icons";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "wouter";
import { SectionReveal, Stagger, StaggerItem } from "@/components/animations/SectionReveal";

const FALLBACK = "https://www.mcmkoreanhospital.org/storage/about_us/27112024/About_3216.jpg";

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
        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {DEPARTMENTS.map((dept) => {
            const Icon = iconFor(dept.id);
            return (
              <StaggerItem key={dept.id}>
                <div className="group relative bg-white rounded-2xl border border-border/60 overflow-hidden h-full flex flex-col hover:shadow-2xl hover:-translate-y-1 transition-all duration-500">
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={dept.imageUrl}
                      alt={dept.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = FALLBACK;
                      }}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/85 via-primary/30 to-transparent" />

                    {/* Floating icon badge */}
                    <div className="absolute top-4 left-4 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/95 backdrop-blur text-primary shadow-lg ring-1 ring-primary/10 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                      <Icon size={22} />
                    </div>

                    {/* Title overlay on image */}
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-white leading-tight drop-shadow">
                        {dept.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-1">
                    <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                      {dept.description}
                    </p>
                    <Link href={`/doctors?department=${dept.id}`} className="mt-6">
                      <Button
                        variant="ghost"
                        className="w-full justify-between text-primary hover:bg-primary/5 hover:text-primary"
                      >
                        View Doctors
                        <ArrowRight
                          size={16}
                          className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        />
                      </Button>
                    </Link>
                  </div>

                  {/* Accent strip */}
                  <div className="absolute inset-y-0 left-0 w-1 bg-secondary group-hover:bg-primary transition-colors" />
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
