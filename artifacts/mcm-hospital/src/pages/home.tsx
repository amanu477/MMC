import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ArrowRight, CheckCircle2, HeartPulse, Building2, ShieldCheck, Stethoscope } from "lucide-react";
import { DOCTORS } from "@/data/doctors";
import { NEWS } from "@/data/news";
import { DEPARTMENTS } from "@/data/departments";
import { motion } from "framer-motion";

const HERO_SLIDES = [
  { url: "https://www.mcmkoreanhospital.org/storage/slideshows/1J1vWnU6cyMqJtGIs8aVT0GGL7UnAdhwxfAHEE3q.jpg", caption: "Excellence" },
  { url: "https://www.mcmkoreanhospital.org/storage/slideshow/12062025/Slideshow_2479.jpg", caption: "Entrance to the MCM-CSH Compound" },
  { url: "https://www.mcmkoreanhospital.org/storage/slideshows/7p4tHChwRl6hPmzbZQAIKxm6061A6pTP1JMUMOWY.jpg", caption: "Expertise" },
  { url: "https://www.mcmkoreanhospital.org/storage/slideshow/27112024/Slideshow_3267.jpg", caption: "Innovation" },
];

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, duration: 40 }, [Autoplay({ delay: 6000 })]);
  
  const featuredDoctors = DOCTORS.slice(0, 4);
  const latestNews = NEWS.slice(0, 3);
  const topDepartments = DEPARTMENTS.slice(0, 6);

  return (
    <PageTransition>
      <SEO title="MCM Comprehensive Specialized Hospital | We treat, God Heals" />
      
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] min-h-[600px] overflow-hidden bg-primary">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {HERO_SLIDES.map((slide, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full">
                <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/40 to-transparent z-10" />
                <motion.img 
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.05 }}
                  transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  src={slide.url} 
                  alt={slide.caption}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-20 container mx-auto px-4 h-full flex flex-col justify-center">
          <div className="max-w-3xl space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white"
            >
              <HeartPulse size={18} className="text-secondary" />
              <span className="text-sm font-medium tracking-wide uppercase">Ethiopia's First Private Comprehensive Specialized Hospital</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight"
            >
              World-Class Care, <br />
              <span className="text-secondary italic font-light">Deeply Human.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
            >
              Established in 2004 through a historic friendship between Ethiopia and South Korea. We combine cutting-edge technology with compassionate care.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link href="/appointment">
                <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-8 h-14 rounded-full shadow-lg">
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/about">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full bg-transparent">
                  Our History
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="bg-white border-b border-border py-8 relative z-30 -mt-10 mx-4 lg:mx-auto lg:max-w-6xl rounded-2xl shadow-xl mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
            { value: "21+", label: "Years Serving Ethiopia" },
            { value: "40+", label: "Specialist Physicians" },
            { value: "20+", label: "Clinical Departments" },
            { value: "24/7", label: "Emergency Care" }
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-serif font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 md:py-24 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img 
                src="https://www.mcmkoreanhospital.org/storage/about_us/27112024/About_3216.jpg" 
                alt="MCM Hospital Exterior" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-secondary p-8 rounded-2xl shadow-xl max-w-xs hidden md:block">
              <p className="font-serif italic text-primary text-xl font-medium leading-snug">
                "We treat, God Heals"
              </p>
              <p className="text-primary/70 mt-2 text-sm font-semibold">MCM Core Philosophy</p>
            </div>
          </div>
          
          <div className="lg:w-1/2 space-y-6">
            <div className="inline-flex items-center gap-2 text-secondary-foreground font-semibold uppercase tracking-wider text-sm">
              <Building2 size={16} className="text-primary" />
              <span>About MCM Hospital</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
              A Legacy of Care <br/> Born from Friendship
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Established in 2004 by the Myungsung Presbyterian Church of South Korea, MCM Comprehensive Specialized Hospital is dedicated to providing quality healthcare to the people of Ethiopia.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are proud to have a diverse team of both foreign and Ethiopian medical personnel who are motivated and committed to addressing the healthcare needs of every patient who enters our facility.
            </p>
            <ul className="space-y-3 pt-4">
              {[
                "First & only private Comprehensive Specialized Hospital in Ethiopia",
                "Equipped with Ethiopia's first 1.5 Tesla MRI",
                "Advanced laparoscopic and non-invasive surgical capabilities",
                "100% pass rate at affiliated Myungsung Medical College"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground font-medium">
                  <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="pt-6">
              <Link href="/about">
                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-6 rounded-full group">
                  Discover Our Story
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                <Stethoscope size={16} />
                <span>Our Specialties</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">Comprehensive Clinical Departments</h2>
            </div>
            <Link href="/departments">
              <Button variant="outline" className="rounded-full">
                View All Departments <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topDepartments.map((dept) => (
              <Link key={dept.id} href="/departments" className="group">
                <div className="bg-white p-8 rounded-2xl shadow-sm border border-border/50 hover:shadow-md transition-all hover:border-primary/20 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary-foreground transition-colors">{dept.name}</h3>
                  <p className="text-muted-foreground flex-1 line-clamp-3">{dept.description}</p>
                  <div className="mt-6 flex items-center text-sm font-medium text-primary group-hover:text-secondary-foreground">
                    Learn more <ArrowRight size={14} className="ml-1 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Network Strip */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck size={32} className="text-secondary" />
              <div>
                <h3 className="font-serif font-bold text-xl">The MCM Network</h3>
                <p className="text-white/70 text-sm">Excellence in Healthcare & Education</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-80">
              <span className="font-bold tracking-wider">MCM HOSPITAL</span>
              <span className="font-bold tracking-wider">MYUNGSUNG MEDICAL COLLEGE (MMC)</span>
              <span className="font-bold tracking-wider">BRIGHT VOICE CLINIC (EPCC)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">World-Class Specialists</h2>
          <p className="text-muted-foreground">Our diverse team of motivated and committed medical personnel is here to address your healthcare needs.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDoctors.map((doc) => (
            <Link key={doc.id} href={`/doctors/${doc.id}`} className="group block">
              <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-border hover:shadow-lg transition-all">
                <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                  <img 
                    src={doc.photoUrl} 
                    alt={doc.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Doctor";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <span className="text-white font-medium flex items-center gap-2">View Profile <ArrowRight size={16} /></span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-1">{doc.name}</h3>
                  <p className="text-sm font-medium text-secondary-foreground mb-2 line-clamp-1">{doc.specialty}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/doctors">
            <Button size="lg" variant="outline" className="rounded-full">View All Doctors</Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-secondary to-transparent blur-3xl transform -rotate-12" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-white to-transparent blur-3xl transform rotate-12" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">Ready to prioritize your health?</h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Schedule a consultation with our specialists today. Experience the standard of care that has made us Ethiopia's premier specialized hospital.
          </p>
          <Link href="/appointment">
            <Button size="lg" className="bg-secondary text-primary hover:bg-white text-lg px-10 py-6 rounded-full shadow-xl">
              Book Your Appointment Now
            </Button>
          </Link>
        </div>
      </section>

    </PageTransition>
  );
}
