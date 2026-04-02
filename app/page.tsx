import type { Metadata } from 'next';
import Header from '@/src/components/Header';
import Hero from '@/src/components/Hero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import OurStory from '@/src/components/OurStory';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Velocity Car Detailing | Bozeman Mobile Car Detailing',
  description: 'Professional mobile car detailing services in the Bozeman area. We bring showroom-quality detailing right to your doorstep. Book today!',
  alternates: { canonical: 'https://www.velocitydetailingmt.com/' },
  openGraph: {
    title: 'Velocity Car Detailing | Bozeman Mobile Car Detailing',
    description: 'Professional mobile car detailing services in the Bozeman area. We bring showroom-quality detailing right to your doorstep.',
    url: 'https://www.velocitydetailingmt.com/',
  },
  twitter: {
    title: 'Velocity Car Detailing | Bozeman Mobile Car Detailing',
    description: 'Professional mobile car detailing services in the Bozeman area.',
  },
};

const homepageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailingService',
  name: 'Velocity Car Detailing',
  description: 'Professional mobile car detailing services in the Bozeman area.',
  telephone: '+16124345327',
  url: 'https://www.velocitydetailingmt.com/',
  areaServed: ['Bozeman', 'Belgrade', 'Four Corners', 'Big Sky', 'Gallatin County'],
  priceRange: '$125-$850',
  openingHours: ['Mo Tu We Th Fr Su 08:00-18:00'],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '4',
  },
};

export default function IndexPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
      />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <OurStory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
