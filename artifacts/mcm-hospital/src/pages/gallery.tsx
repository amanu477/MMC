import { SEO } from "@/components/SEO";
import { PageTransition } from "@/components/PageTransition";
import { GALLERY_IMAGES } from "@/data/gallery";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Gallery() {
  return (
    <PageTransition>
      <SEO title="Photo Gallery | MCM Comprehensive Specialized Hospital" />
      
      <div className="bg-primary pt-20 pb-32">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">Our Facilities</h1>
          <p className="text-lg text-white/80">
            A glimpse into our world-class facilities, advanced technology, and the daily lives of our dedicated staff.
          </p>
        </div>
      </div>

      <section className="container mx-auto px-4 -mt-16 relative z-10 mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((url, i) => (
            <Dialog key={i}>
              <DialogTrigger asChild>
                <div className="group relative aspect-square overflow-hidden rounded-xl bg-white shadow-md cursor-pointer border border-border">
                  <img 
                    src={url} 
                    alt={`MCM Gallery Image ${i+1}`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="text-white font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">View Larger</span>
                  </div>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl bg-transparent border-none shadow-none p-0">
                <div className="relative w-full h-[80vh] flex items-center justify-center">
                  <img 
                    src={url} 
                    alt={`MCM Gallery Image ${i+1}`}
                    className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
