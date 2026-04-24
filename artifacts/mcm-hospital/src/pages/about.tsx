import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { Heart, Globe2, Award, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <PageTransition>
      <SEO title="About Us | MCM Comprehensive Specialized Hospital" />
      
      {/* Hero */}
      <section className="relative pt-20 pb-32 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.mcmkoreanhospital.org/storage/about_us/27112024/About_3216.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">Our History & Legacy</h1>
            <p className="text-xl text-white/90 leading-relaxed">
              A deeply human story born from friendship, sacrifice, and a commitment to healing. We are MCM Comprehensive Specialized Hospital.
            </p>
          </div>
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="prose prose-lg max-w-none text-muted-foreground">
            <p className="text-2xl text-primary font-serif font-medium leading-relaxed mb-8">
              "Myungsung International Development is an umbrella organization that encompasses three distinct entities, including the MCM Comprehensive Specialized Hospital."
            </p>
            
            <p>
              Located in Addis Ababa, Ethiopia, MCM plays a vital role. Established in 2004 by the Myungsung Presbyterian Church of South Korea, our hospital is dedicated to providing quality healthcare to the people of Ethiopia. 
            </p>
            
            <p>
              At MCM, we are proud to have a diverse team of both foreign and Ethiopian medical personnel who are motivated and committed to addressing the healthcare needs of every patient who enters our facility.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 py-12 border-y border-border">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center text-primary">
                <Award size={32} />
              </div>
              <h3 className="font-bold text-lg text-primary">Excellence</h3>
              <p className="text-sm text-muted-foreground">Promoted to serve as the first and only private Comprehensive Specialized Hospital in the nation.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center text-primary">
                <Heart size={32} />
              </div>
              <h3 className="font-bold text-lg text-primary">Expertise</h3>
              <p className="text-sm text-muted-foreground">Equipped with cutting-edge medical technology and a 100% pass rate at our affiliated medical college.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-secondary/20 rounded-full flex items-center justify-center text-primary">
                <Globe2 size={32} />
              </div>
              <h3 className="font-bold text-lg text-primary">Innovation</h3>
              <p className="text-sm text-muted-foreground">Performing complex procedures with non-invasive techniques using Ethiopia's first 1.5 Tesla MRI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message */}
      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            <div className="md:w-2/5 relative">
              <img 
                src="https://www.mcmkoreanhospital.org/storage/about_us/27112024/CEO_Message_6104.jpg" 
                alt="Dr. SongJung Kim" 
                className="w-full h-full object-cover object-top min-h-[400px]"
              />
            </div>
            <div className="md:w-3/5 p-10 md:p-14 space-y-6">
              <h2 className="text-3xl font-serif font-bold text-primary">Message from the CEO</h2>
              <div className="prose prose-primary">
                <p>
                  It has been 20+ years since the Myungsung Christian Medical Center (MCM), also known as the "Korea Hospital," opened its doors to provide healthcare to the people of Ethiopia.
                </p>
                <p>
                  Due to the Korean War, which broke out in 1950, Ethiopia and South Korea initiated an unforgettable blood-shed friendship. Haile Selassie, the Emperor of Ethiopia, ordered to organize the strongest Unit, "Kangnew," and encouraged soldiers: <em>"we must not turn away our face from those who are being attacked unjustly by the invaders…"</em>
                </p>
                <p>
                  In gratitude to Ethiopians' sacrifices, Rev. Sam Hwan Kim heard the Ethiopian Prime Minister request medical assistance for his people. He took it as the Holy Spirit's voice and answered: <strong>"a friend in need is a friend indeed."</strong>
                </p>
                <p>
                  MCM has been recognized as a high-quality and standardized hospital in Ethiopia since it was established in 2004. Recently, MCM was promoted to serve as a Comprehensive Specialized Hospital — the first and only private hospital in the nation.
                </p>
                <p>
                  With cutting-edge medical technology, most surgical operations can be performed with non-invasive techniques. We are here to serve.
                </p>
              </div>
              <div className="pt-6 border-t border-border mt-8">
                <p className="font-serif font-bold text-lg text-primary">SongJung Kim, PhD, FAHA, MS, MDiv</p>
                <p className="text-muted-foreground text-sm">CEO, MCM Comprehensive Specialized Hospital</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Network */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Our Educational Mission</h2>
          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Through Myungsung Medical College (MMC), we offer four post-graduate degree programs and two fellowship programs. We are proud to be the first and only private medical school in Ethiopia to produce specialists and sub-specialists, with a 100% pass rate four years running.
          </p>
          <Link href="/contact" className="inline-flex items-center text-secondary font-medium hover:text-white transition-colors">
            Get in touch to learn more <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </section>

    </PageTransition>
  );
}
