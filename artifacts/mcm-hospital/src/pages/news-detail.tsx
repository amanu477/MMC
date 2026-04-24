import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { NEWS } from "@/data/news";
import { useParams, Link } from "wouter";
import NotFound from "./not-found";
import { ArrowLeft, Calendar } from "lucide-react";

export default function NewsDetail() {
  const { slug } = useParams();
  const article = NEWS.find(n => n.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <PageTransition>
      <SEO title={`${article.title} | MCM Hospital News`} />
      
      <div className="bg-muted/20 py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link href="/news" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to News
          </Link>
        </div>
      </div>

      <article className="py-12 container mx-auto px-4 max-w-4xl pb-24">
        <header className="mb-10">
          <div className="flex items-center gap-2 text-sm font-medium text-secondary-foreground uppercase tracking-wider mb-6">
            <Calendar size={16} />
            {article.date}
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary leading-tight mb-8">
            {article.title}
          </h1>
          <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden shadow-lg">
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        </header>

        <div className="prose prose-lg prose-primary max-w-none">
          <p className="lead text-xl text-muted-foreground font-medium mb-8">
            MCM Comprehensive Specialized Hospital continues its mission of Excellence, Expertise, and Innovation with this latest development.
          </p>
          <p>
            (Content for {article.title} goes here. In a full implementation, this would pull from a rich text field or markdown file in the data layer.)
          </p>
          <p>
            Established in 2004 by the Myungsung Presbyterian Church of South Korea, MCM is dedicated to providing quality healthcare to the people of Ethiopia. Our diverse team of both foreign and Ethiopian medical personnel are motivated and committed to addressing the healthcare needs of every patient who enters our facility.
          </p>
        </div>
      </article>

    </PageTransition>
  );
}
