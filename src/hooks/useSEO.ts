import { useEffect } from 'react';

const BASE_URL = 'https://www.velocitydetailingmt.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

interface SEOProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  jsonLd?: Record<string, any> | Record<string, any>[];
}

const setMeta = (selector: string, attribute: string, attrValue: string, content: string) => {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attribute, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
};

const setCanonical = (href: string) => {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
};

export const useSEO = ({ title, description, canonical, ogImage, jsonLd }: SEOProps) => {
  useEffect(() => {
    const image = ogImage ?? DEFAULT_OG_IMAGE;
    const url = `${BASE_URL}${canonical}`;

    document.title = title;

    setMeta('meta[name="description"]', 'name', 'description', description);
    setMeta('meta[property="og:title"]', 'property', 'og:title', title);
    setMeta('meta[property="og:description"]', 'property', 'og:description', description);
    setMeta('meta[property="og:url"]', 'property', 'og:url', url);
    setMeta('meta[property="og:image"]', 'property', 'og:image', image);
    setMeta('meta[property="og:site_name"]', 'property', 'og:site_name', 'Velocity Car Detailing');
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description);
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', image);
    setCanonical(url);

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      // Remove any previously injected page-level schemas
      document.querySelectorAll('script[data-page-schema]').forEach((el) => el.remove());
      schemas.forEach((schema) => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.setAttribute('data-page-schema', 'true');
        script.textContent = JSON.stringify(schema);
        document.head.appendChild(script);
      });
    }
  }, [title, description, canonical, ogImage, jsonLd]);
};
