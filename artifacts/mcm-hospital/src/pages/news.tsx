import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { NEWS } from "@/data/news";
import { Link } from "wouter";
import { ArrowRight, Calendar } from "lucide-react";

export default function News() {
  return (
    <PageTransition>
      <SEO title="News & Updates | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-primary pt-20 pb-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">News & Updates</h1>
          <p className="text-lg text-white/80">
            Stay informed about our latest medical breakthroughs, community outreach, and hospital milestones.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 -mt-16 relative z-10 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {NEWS.map((item, i) => (
            <Link key={i} href={`/news/${item.slug}`} className="group">
              <article className="bg-white rounded-2xl overflow-hidden shadow-lg border border-border/50 h-full flex flex-col hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
                    <Calendar size={14} className="text-secondary-foreground" />
                    {item.date}
                  </div>
                  <h3 className="text-xl font-bold font-serif text-primary leading-snug mb-4 group-hover:text-secondary-foreground transition-colors">
                    {item.title}
                  </h3>
                  <div className="mt-auto flex items-center text-sm font-bold text-primary group-hover:text-secondary-foreground transition-colors">
                    Read Story <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
