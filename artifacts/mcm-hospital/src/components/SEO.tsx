import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
}

export function SEO({ 
  title = "MCM Comprehensive Specialized Hospital | We treat, God Heals",
  description = "Ethiopia's first and only private Comprehensive Specialized Hospital. Providing excellence in healthcare since 2004."
}: SEOProps) {
  useEffect(() => {
    document.title = title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', description);
  }, [title, description]);

  return null;
}
