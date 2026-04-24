import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { DEPARTMENTS } from "@/data/departments";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope } from "lucide-react";
import { Link } from "wouter";

export default function Departments() {
  return (
    <PageTransition>
      <SEO title="Clinical Departments | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Our Departments</h1>
          <p className="text-lg text-muted-foreground">
            From routine check-ups to complex surgical procedures, our 20+ specialized clinical departments are equipped with state-of-the-art technology and staffed by internationally recognized experts.
          </p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DEPARTMENTS.map((dept) => (
            <Card key={dept.id} className="hover:shadow-lg transition-shadow border-border/50 h-full flex flex-col group">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/20 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Stethoscope size={24} />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{dept.name}</CardTitle>
                <CardDescription className="text-sm mt-2 line-clamp-3">
                  {dept.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto pt-4">
                <Link href={`/doctors?department=${dept.id}`}>
                  <Button variant="ghost" className="w-full justify-between group-hover:bg-primary/5">
                    View Doctors
                    <ArrowRight size={16} className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary text-white py-16 mt-10">
        <div className="container mx-auto px-4 text-center max-w-2xl">
          <h2 className="text-3xl font-serif font-bold mb-4">Need help finding the right specialist?</h2>
          <p className="text-white/80 mb-8">Our care team can guide you to the appropriate department based on your symptoms and medical history.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white px-8 rounded-full">
              Contact Support
            </Button>
          </Link>
        </div>
      </section>

    </PageTransition>
  );
}
