import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { FAQS } from "@/data/faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

export default function FAQ() {
  return (
    <PageTransition>
      <SEO title="FAQs | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle size={32} className="text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h1>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our hospital, services, and visiting hours.
          </p>
        </div>
      </div>

      <section className="py-20 container mx-auto px-4 max-w-3xl">
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQS.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-all">
              <AccordionTrigger className="text-left font-serif font-bold text-lg text-primary hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-6 text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PageTransition>
  );
}
