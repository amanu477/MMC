import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock, ArrowRight, HeartPulse } from "lucide-react";
import { EkgLine } from "@/components/animations/EkgLine";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative pre-footer EKG band */}
      <div className="relative bg-primary border-b border-white/10 py-5">
        <div className="container mx-auto px-4 md:px-6 flex items-center gap-4">
          <HeartPulse size={20} className="text-secondary shrink-0" />
          <div className="relative flex-1 h-10 text-secondary/70">
            <EkgLine className="absolute inset-0 w-full h-full" />
          </div>
          <span className="hidden md:inline text-xs uppercase tracking-[0.25em] text-white/60 shrink-0">
            We treat · God Heals
          </span>
        </div>
      </div>

      {/* Soft glows */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 py-14 md:py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="bg-white rounded-full p-1 shadow-sm inline-flex">
                <img
                  src="https://www.mcmkoreanhospital.org/ui/assets/images/logo/mcm_logo.png"
                  alt="MCM Hospital Logo"
                  className="h-10 w-auto"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-bold leading-tight">MCM Comprehensive</span>
                <span className="font-serif text-sm font-semibold leading-tight">Specialized Hospital</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Established in 2004 by the Myungsung Presbyterian Church of South Korea.
              Ethiopia's first and only private Comprehensive Specialized Hospital.
            </p>
            <div className="inline-block bg-secondary/15 px-4 py-2 rounded-full border border-secondary/25">
              <p className="text-secondary font-serif italic font-medium text-sm">"We treat, God Heals"</p>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Doctors", href: "/doctors" },
                { label: "Departments", href: "/departments" },
                { label: "News & Blogs", href: "/news" },
                { label: "Photo Gallery", href: "/gallery" },
                { label: "FAQs", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-secondary transition-colors inline-flex items-center gap-2 text-sm group"
                  >
                    <ArrowRight
                      size={14}
                      className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
              Key Departments
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-3">
              {[
                "Internal Medicine",
                "Surgery",
                "Obstetrics & Gynecology",
                "Pediatrics",
                "Radiology",
                "ICU / Emergency",
              ].map((dept) => (
                <li key={dept}>
                  <Link
                    href="/departments"
                    className="text-primary-foreground/80 hover:text-secondary transition-colors text-sm"
                  >
                    {dept}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-bold mb-6 relative inline-block">
              Contact Us
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <MapPin size={18} className="shrink-0 mt-0.5 text-secondary" />
                <span>Gerji Mebrat Haile,<br />Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <Phone size={18} className="shrink-0 text-secondary" />
                <a href="tel:+251116294666" className="hover:text-secondary transition-colors">
                  +251 11 629 4666
                </a>
              </li>
              <li className="flex items-center gap-3 text-primary-foreground/80 text-sm">
                <Mail size={18} className="shrink-0 text-secondary" />
                <a href="mailto:info@mcmkoreanhospital.org" className="hover:text-secondary transition-colors">
                  info@mcmkoreanhospital.org
                </a>
              </li>
              <li className="flex items-start gap-3 text-primary-foreground/80 text-sm">
                <Clock size={18} className="shrink-0 mt-0.5 text-secondary" />
                <div>
                  <p className="font-medium text-white mb-1">24/7 Emergency</p>
                  <p>Outpatient: Mon–Sat 8:00–17:00</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} MCM Comprehensive Specialized Hospital. All rights reserved.
          </p>
          <div className="text-primary-foreground/60 text-sm tracking-wide">
            Excellence · Expertise · Innovation
          </div>
        </div>
      </div>
    </footer>
  );
}
