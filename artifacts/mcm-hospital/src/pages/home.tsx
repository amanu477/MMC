import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import {
  ArrowRight,
  CheckCircle2,
  HeartPulse,
  Building2,
  ShieldCheck,
  Stethoscope,
  Award,
  Users,
  Clock3,
  Globe2,
  Activity,
  Sparkles,
  Quote,
} from "lucide-react";
import { DOCTORS } from "@/data/doctors";
import { NEWS } from "@/data/news";
import { DEPARTMENTS } from "@/data/departments";
import { iconFor } from "@/data/department-icons";
import { DepartmentCard } from "@/components/DepartmentCard";
import { motion } from "framer-motion";
import { CountUp } from "@/components/animations/CountUp";
import { SectionReveal, Stagger, StaggerItem } from "@/components/animations/SectionReveal";
import { EkgLine } from "@/components/animations/EkgLine";
import { useEffect, useState } from "react";

const HERO_SLIDES = [
  { url: "https://www.mcmkoreanhospital.org/storage/slideshows/1J1vWnU6cyMqJtGIs8aVT0GGL7UnAdhwxfAHEE3q.jpg", caption: "Excellence" },
  { url: "https://www.mcmkoreanhospital.org/storage/slideshow/12062025/Slideshow_2479.jpg", caption: "Entrance to the MCM-CSH Compound" },
  { url: "https://www.mcmkoreanhospital.org/storage/slideshows/7p4tHChwRl6hPmzbZQAIKxm6061A6pTP1JMUMOWY.jpg", caption: "Expertise" },
  { url: "https://www.mcmkoreanhospital.org/storage/slideshow/27112024/Slideshow_3267.jpg", caption: "Innovation" },
];

const SLIDE_DURATION = 6000;

const TRUST_SIGNALS = [
  { icon: Award, label: "Established 2004", sub: "21+ years of service" },
  { icon: ShieldCheck, label: "Comprehensive Specialized", sub: "Highest tier in Ethiopia" },
  { icon: Activity, label: "1.5 Tesla MRI", sub: "Ethiopia's first" },
  { icon: Globe2, label: "Korea–Ethiopia Friendship", sub: "Founded by MPC, South Korea" },
  { icon: Users, label: "40+ Specialists", sub: "Local & international" },
  { icon: Clock3, label: "24/7 Emergency", sub: "Always open for you" },
];

const CENTERS = [
  {
    title: "Cardiology & Cath Lab",
    desc: "Interventional cardiology, advanced diagnostics, and life-saving cardiovascular procedures.",
    img: "https://www.mcmkoreanhospital.org/storage/slideshows/7p4tHChwRl6hPmzbZQAIKxm6061A6pTP1JMUMOWY.jpg",
    icon: HeartPulse,
  },
  {
    title: "Minimally Invasive Surgery",
    desc: "Laparoscopic and non-invasive techniques for faster recovery and better outcomes.",
    img: "https://www.mcmkoreanhospital.org/storage/slideshow/27112024/Slideshow_3267.jpg",
    icon: Sparkles,
  },
  {
    title: "Maternal & Fetal Medicine",
    desc: "Complete women's healthcare, NICU support, and specialized obstetric services.",
    img: "https://www.mcmkoreanhospital.org/storage/about_us/27112024/About_3216.jpg",
    icon: Activity,
  },
];

export default function Home() {
  const autoplay = Autoplay({ delay: SLIDE_DURATION, stopOnMouseEnter: true, stopOnInteraction: false });
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 40 }, [autoplay]);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setActiveSlide(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  const featuredDoctors = DOCTORS.slice(0, 4);
  const latestNews = NEWS.slice(0, 3);
  const topDepartments = DEPARTMENTS.slice(0, 6);

  const headline = ["World-Class", "Care,"];

  return (
    <PageTransition>
      <SEO title="MCM Comprehensive Specialized Hospital | We treat, God Heals" />

      {/* Hero Section */}
      <section className="relative w-full h-[88vh] min-h-[640px] overflow-hidden bg-primary">
        <div className="absolute inset-0" ref={emblaRef}>
          <div className="flex h-full">
            {HERO_SLIDES.map((slide, index) => (
              <div key={index} className="relative flex-[0_0_100%] h-full">
                <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/55 to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/45 to-transparent z-10" />
                <motion.img
                  key={`${index}-${activeSlide === index}`}
                  initial={{ scale: 1.02 }}
                  animate={activeSlide === index ? { scale: 1.14 } : { scale: 1.02 }}
                  transition={{ duration: SLIDE_DURATION / 1000 + 1, ease: "linear" }}
                  src={slide.url}
                  alt={slide.caption}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Animated EKG line across hero bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-20 text-secondary/70 pointer-events-none">
          <EkgLine className="w-full h-full" duration={5} />
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
              <span className="text-sm font-medium tracking-wide uppercase">
                Ethiopia's First Private Comprehensive Specialized Hospital
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.05]">
              <span className="block">
                {headline.map((word, i) => (
                  <motion.span
                    key={word}
                    initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block mr-3"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
              <motion.span
                initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ delay: 0.3 + headline.length * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="block text-secondary italic font-light"
              >
                Deeply Human.
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed"
            >
              Established in 2004 through a historic friendship between Ethiopia and South Korea.
              We combine cutting-edge technology with compassionate care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <Link href="/appointment">
                <Button
                  size="lg"
                  className="bg-secondary text-primary hover:bg-white text-lg px-8 h-14 rounded-full shadow-lg shine-on-hover"
                >
                  Book an Appointment
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 text-lg px-8 h-14 rounded-full bg-transparent"
                >
                  Our History
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Slide indicator + progress */}
        <div className="absolute bottom-20 right-6 md:right-12 z-20 flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === activeSlide ? "w-10 bg-secondary" : "w-2 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Linear progress bar at slide bottom */}
        <div className="absolute bottom-16 left-0 right-0 z-20 h-0.5 bg-white/10 overflow-hidden">
          <motion.div
            key={activeSlide}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: SLIDE_DURATION / 1000, ease: "linear" }}
            className="h-full bg-secondary origin-left"
          />
        </div>
      </section>

      {/* Stats Strip with CountUp */}
      <SectionReveal
        className="bg-white border border-border/60 py-10 relative z-30 -mt-12 mx-4 lg:mx-auto lg:max-w-6xl rounded-2xl shadow-2xl mb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-8">
          {[
            { to: 21, suffix: "+", label: "Years Serving Ethiopia" },
            { to: 40, suffix: "+", label: "Specialist Physicians" },
            { to: 20, suffix: "+", label: "Clinical Departments" },
            { to: 24, suffix: "/7", label: "Emergency Care" },
          ].map((stat, i) => (
            <div
              key={i}
              className={`text-center ${i > 0 ? "md:border-l md:border-border/60" : ""}`}
            >
              <CountUp
                to={stat.to}
                suffix={stat.suffix}
                className="block text-4xl md:text-5xl font-serif font-bold text-primary mb-1"
              />
              <p className="text-xs md:text-sm font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SectionReveal>

      {/* Trust Signals strip */}
      <section className="bg-soft-mist py-16 border-y border-border/40">
        <div className="container mx-auto px-4">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-xs mb-3">
              <ShieldCheck size={14} />
              <span>Why Patients Choose MCM</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
              Trusted by Ethiopia, recognized internationally
            </h2>
          </SectionReveal>

          <Stagger className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {TRUST_SIGNALS.map((s, i) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={i}>
                  <div className="bg-white rounded-2xl border border-border/50 p-5 h-full text-center hover:border-primary/30 hover:shadow-md transition-all group">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary/40 text-primary mb-3 group-hover:scale-110 transition-transform">
                      <Icon size={22} />
                    </div>
                    <p className="font-bold text-sm text-primary leading-tight">{s.label}</p>
                    <p className="text-xs text-muted-foreground mt-1">{s.sub}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 md:py-28 container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <SectionReveal className="lg:w-1/2 relative" y={40}>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] group">
              <img
                src="https://www.mcmkoreanhospital.org/storage/about_us/27112024/About_3216.jpg"
                alt="MCM Hospital Exterior"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 via-transparent to-transparent" />
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-4 md:-right-8 bg-secondary p-7 rounded-2xl shadow-2xl max-w-xs hidden md:block"
            >
              <Quote size={28} className="text-primary/60 mb-2" />
              <p className="font-serif italic text-primary text-xl font-medium leading-snug">
                We treat, God Heals.
              </p>
              <p className="text-primary/70 mt-2 text-sm font-semibold">MCM Core Philosophy</p>
            </motion.div>
          </SectionReveal>

          <div className="lg:w-1/2 space-y-6">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm">
                <Building2 size={16} />
                <span>About MCM Hospital</span>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.05}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground leading-tight">
                A Legacy of Care <br /> Born from Friendship
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Established in 2004 by the Myungsung Presbyterian Church of South Korea, MCM
                Comprehensive Specialized Hospital is dedicated to providing quality healthcare
                to the people of Ethiopia.
              </p>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <p className="text-muted-foreground leading-relaxed">
                We are proud to have a diverse team of both foreign and Ethiopian medical
                personnel who are motivated and committed to addressing the healthcare needs
                of every patient who enters our facility.
              </p>
            </SectionReveal>
            <Stagger className="space-y-3 pt-4">
              {[
                "First & only private Comprehensive Specialized Hospital in Ethiopia",
                "Equipped with Ethiopia's first 1.5 Tesla MRI",
                "Advanced laparoscopic and non-invasive surgical capabilities",
                "100% pass rate at affiliated Myungsung Medical College",
              ].map((item) => (
                <StaggerItem key={item}>
                  <div className="flex items-start gap-3 text-foreground font-medium">
                    <CheckCircle2 size={20} className="text-primary mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
            <SectionReveal delay={0.2} className="pt-6">
              <Link href="/about">
                <Button className="bg-primary text-white hover:bg-primary/90 px-6 py-6 rounded-full group shine-on-hover">
                  Discover Our Story
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Centers of Excellence */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-medical-grid opacity-[0.15]" />
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="container mx-auto px-4 relative">
          <SectionReveal className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 text-secondary font-semibold uppercase tracking-wider text-xs mb-3">
              <Sparkles size={14} />
              <span>Centers of Excellence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold">
              Specialty care at the highest standard
            </h2>
            <p className="text-white/70 mt-4">
              Multidisciplinary teams, state-of-the-art technology, and outcomes patients trust.
            </p>
          </SectionReveal>

          <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CENTERS.map((c) => {
              const Icon = c.icon;
              return (
                <StaggerItem key={c.title}>
                  <div className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer">
                    <img
                      src={c.img}
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/10" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-secondary/90 text-primary mb-3 group-hover:scale-110 transition-transform">
                        <Icon size={20} />
                      </div>
                      <h3 className="text-xl font-serif font-bold mb-1">{c.title}</h3>
                      <p className="text-white/80 text-sm leading-relaxed line-clamp-2 group-hover:text-white transition-colors">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </Stagger>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="py-20 bg-soft-mist">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <SectionReveal className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-sm mb-4">
                <Stethoscope size={16} />
                <span>Our Specialties</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                Comprehensive Clinical Departments
              </h2>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <Link href="/departments">
                <Button variant="outline" className="rounded-full">
                  View All Departments <ArrowRight size={16} className="ml-2" />
                </Button>
              </Link>
            </SectionReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {topDepartments.map((dept, i) => (
              <DepartmentCard key={dept.id} dept={dept} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Network Strip */}
      <section className="bg-primary text-white py-12 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-4">
              <ShieldCheck size={32} className="text-secondary" />
              <div>
                <h3 className="font-serif font-bold text-xl">The MCM Network</h3>
                <p className="text-white/70 text-sm">Excellence in Healthcare & Education</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-6 md:gap-12 opacity-90">
              {["MCM HOSPITAL", "MYUNGSUNG MEDICAL COLLEGE (MMC)", "BRIGHT VOICE CLINIC (EPCC)"].map((n) => (
                <span key={n} className="font-bold tracking-wider text-sm">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Doctors */}
      <section className="py-20 container mx-auto px-4">
        <SectionReveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-xs mb-3">
            <Users size={14} />
            <span>Meet Our Specialists</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            World-Class Specialists
          </h2>
          <p className="text-muted-foreground">
            Our diverse team of motivated and committed medical personnel is here to address your healthcare needs.
          </p>
        </SectionReveal>

        <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredDoctors.map((doc) => (
            <StaggerItem key={doc.id}>
              <Link href={`/doctors/${doc.id}`} className="group block">
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm border border-border/60 hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
                  <div className="aspect-[3/4] overflow-hidden bg-muted relative">
                    <img
                      src={doc.photoUrl}
                      alt={doc.name}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x500?text=Doctor";
                      }}
                    />
                    {/* vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <span className="text-white font-medium flex items-center gap-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        View Profile <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg text-primary mb-1 line-clamp-1">{doc.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground line-clamp-1">{doc.specialty}</p>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>

        <SectionReveal className="text-center mt-12">
          <Link href="/doctors">
            <Button size="lg" variant="outline" className="rounded-full">
              View All Doctors
            </Button>
          </Link>
        </SectionReveal>
      </section>

      {/* Latest News */}
      {latestNews.length > 0 && (
        <section className="py-20 bg-soft-mist">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 text-primary font-semibold uppercase tracking-wider text-xs mb-3">
                  <Sparkles size={14} />
                  <span>Latest from MCM</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
                  News & Stories
                </h2>
              </SectionReveal>
              <SectionReveal delay={0.1}>
                <Link href="/news">
                  <Button variant="outline" className="rounded-full">
                    All News <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </SectionReveal>
            </div>

            <Stagger className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {latestNews.map((n) => (
                <StaggerItem key={n.slug}>
                  <Link href={`/news/${n.slug}`} className="group block h-full">
                    <article className="bg-white rounded-2xl overflow-hidden border border-border/60 hover:shadow-xl transition-all h-full flex flex-col">
                      <div className="aspect-[16/10] overflow-hidden bg-muted">
                        <img
                          src={n.imageUrl}
                          alt={n.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground mb-2">{n.date}</p>
                        <h3 className="font-serif text-xl font-bold text-primary mb-2 line-clamp-2 group-hover:text-primary/80 transition-colors flex-1">
                          {n.title}
                        </h3>
                        <span className="inline-flex items-center gap-1 mt-4 text-sm font-medium text-primary">
                          Read more
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-secondary to-transparent blur-3xl transform -rotate-12" />
          <div className="absolute bottom-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-white to-transparent blur-3xl transform rotate-12" />
        </div>
        <div className="absolute inset-x-0 top-0 h-12 text-secondary/40 pointer-events-none">
          <EkgLine className="w-full h-full" duration={6} />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <SectionReveal>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              Ready to prioritize your health?
            </h2>
          </SectionReveal>
          <SectionReveal delay={0.1}>
            <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
              Schedule a consultation with our specialists today. Experience the standard of care
              that has made us Ethiopia's premier specialized hospital.
            </p>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <Link href="/appointment">
              <span className="inline-block pulse-ring rounded-full">
                <Button
                  size="lg"
                  className="bg-secondary text-primary hover:bg-white text-lg px-10 py-6 rounded-full shadow-xl shine-on-hover"
                >
                  Book Your Appointment Now
                </Button>
              </span>
            </Link>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
