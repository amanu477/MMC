import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { DEPARTMENTS } from "@/data/departments";
import { Button } from "@/components/ui/button";
import { ArrowRight, Stethoscope, Sparkles } from "lucide-react";
import { Link } from "wouter";
import { SectionReveal } from "@/components/animations/SectionReveal";
import { DepartmentCard } from "@/components/DepartmentCard";
import { motion } from "framer-motion";

export default function Departments() {
  return (
    <PageTransition>
      <SEO title="Clinical Departments | MCM Comprehensive Specialized Hospital" />

      {/* HERO */}
      <div className="relative bg-soft-mist py-24 md:py-32 border-b border-border/40 overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid opacity-50 pointer-events-none" />

        {/* Floating orbs */}
        <motion.div
          aria-hidden
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-secondary/40 blur-3xl"
          animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -bottom-32 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/10 blur-3xl"
          animate={{ x: [0, -30, 0], y: [0, -20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container mx-auto px-4 text-center max-w-3xl relative">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur ring-1 ring-primary/10 text-primary font-semibold uppercase tracking-wider text-xs mb-6 shadow-sm"
          >
            <Stethoscope size={13} />
            <span>Clinical Departments</span>
            <Sparkles size={13} className="text-secondary-foreground/60" />
          </motion.div>

          {/* Word-by-word headline reveal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary mb-6 leading-[1.05] tracking-tight">
            {"Comprehensive care, every specialty".split(" ").map((word, i) => (
              <motion.span
                key={i}
                className="inline-block mr-3"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-lg text-muted-foreground"
          >
            From routine check-ups to complex surgical procedures, our 20+ specialized clinical
            departments are equipped with state-of-the-art technology and staffed by
            internationally recognized experts.
          </motion.p>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-sm"
          >
            {[
              { v: "21+", l: "Specialties" },
              { v: "100+", l: "Specialists" },
              { v: "24/7", l: "Emergency" },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-2xl font-serif font-bold text-primary">{s.v}</span>
                <span className="text-muted-foreground uppercase tracking-wider text-xs">
                  {s.l}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CARD GRID */}
      <section className="py-20 md:py-24 container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {DEPARTMENTS.map((dept, i) => (
            <DepartmentCard key={dept.id} dept={dept} index={i} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-primary text-white py-20 mt-10 overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid opacity-[0.12]" />
        <motion.div
          aria-hidden
          className="absolute -top-20 left-1/4 w-80 h-80 rounded-full bg-secondary/20 blur-3xl"
          animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="container mx-auto px-4 text-center max-w-2xl relative">
          <SectionReveal>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Need help finding the right specialist?
            </h2>
            <p className="text-white/80 mb-8 text-lg">
              Our care team can guide you to the appropriate department based on your symptoms
              and medical history.
            </p>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-secondary text-primary hover:bg-white px-8 rounded-full shine-on-hover"
              >
                Contact Support
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
