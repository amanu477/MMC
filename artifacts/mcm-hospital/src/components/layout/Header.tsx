import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 120], [80, 64]);
  const headerShadow = useTransform(
    scrollY,
    [0, 120],
    ["0 0 0 rgba(3,28,61,0)", "0 8px 24px -12px rgba(3,28,61,0.18)"],
  );
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.86]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Departments", href: "/departments" },
    { label: "Doctors", href: "/doctors" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <motion.header
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/75"
      style={{ boxShadow: headerShadow }}
    >
      {/* Utility bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-xs">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-9">
          <div className="flex items-center gap-6 opacity-90">
            <span className="inline-flex items-center gap-2">
              <MapPin size={12} className="text-secondary" />
              Gerji Mebrat Haile, Addis Ababa
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock size={12} className="text-secondary" />
              24/7 Emergency · Outpatient Mon–Sat 8:00–17:00
            </span>
          </div>
          <a
            href="tel:+251116294666"
            className="inline-flex items-center gap-2 font-semibold hover:text-secondary transition-colors"
          >
            <Phone size={12} className="text-secondary" />
            +251 11 629 4666
          </a>
        </div>
      </div>

      <div className="border-b border-border/40">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <motion.div
            className="flex items-center justify-between"
            style={{ height: headerHeight }}
          >
            <Link href="/" className="flex items-center gap-3 group">
              <motion.div
                className="bg-white rounded-full p-1 shadow-sm ring-1 ring-primary/10 group-hover:ring-primary/30 transition"
                style={{ scale: logoScale }}
              >
                <img
                  src="https://www.mcmkoreanhospital.org/ui/assets/images/logo/mcm_logo.png"
                  alt="MCM Hospital Logo"
                  className="h-10 w-auto"
                />
              </motion.div>
              <div className="hidden sm:flex flex-col leading-tight">
                <span className="font-serif text-lg font-bold text-primary">MCM Comprehensive</span>
                <span className="font-serif text-sm font-semibold text-primary/80">Specialized Hospital</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1 lg:gap-2">
              {navItems.map((item) => {
                const active = location === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "relative px-3 py-2 text-sm font-medium transition-colors rounded-md",
                      active ? "text-primary" : "text-muted-foreground hover:text-primary",
                    )}
                  >
                    {item.label}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute left-2 right-2 -bottom-0.5 h-0.5 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              <div className="ml-3 pl-3 border-l border-border h-8 flex items-center">
                <Link href="/appointment">
                  <Button className="font-medium bg-primary text-primary-foreground hover:bg-primary/90 shine-on-hover">
                    Book Appointment
                  </Button>
                </Link>
              </div>
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-border bg-background py-4 px-4 shadow-lg absolute w-full left-0"
        >
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md",
                  location === item.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted",
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-border">
              <Link href="/appointment" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full text-base py-6 bg-primary text-primary-foreground">
                  Book Appointment
                </Button>
              </Link>
            </div>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
