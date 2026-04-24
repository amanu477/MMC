import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Departments", href: "/departments" },
    { label: "Doctors", href: "/doctors" },
    { label: "News", href: "/news" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3 transition-opacity hover:opacity-90">
            <div className="bg-white rounded-full p-1 shadow-sm">
              <img 
                src="https://www.mcmkoreanhospital.org/ui/assets/images/logo/mcm_logo.png" 
                alt="MCM Hospital Logo" 
                className="h-10 w-auto"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-serif text-lg font-bold leading-tight text-primary">MCM Comprehensive</span>
              <span className="font-serif text-sm font-semibold leading-tight text-primary">Specialized Hospital</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors hover:text-primary rounded-md",
                  location === item.href ? "text-primary bg-primary/5" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-4 pl-4 border-l border-border h-8 flex items-center">
              <Link href="/appointment">
                <Button className="font-medium bg-primary text-primary-foreground hover:bg-primary/90">
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
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background py-4 px-4 shadow-lg absolute w-full left-0">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <Link 
                key={item.href} 
                href={item.href}
                className={cn(
                  "px-4 py-3 text-base font-medium rounded-md",
                  location === item.href ? "text-primary bg-primary/5" : "text-foreground hover:bg-muted"
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
        </div>
      )}
    </header>
  );
}
