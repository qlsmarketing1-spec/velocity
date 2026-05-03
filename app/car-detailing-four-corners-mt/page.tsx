import type { Metadata } from 'next';
import Header from '@/src/components/Header';
import LocationHero from '@/src/components/LocationHero';
import About from '@/src/components/About';
import Services from '@/src/components/Services';
import OurStory from '@/src/components/OurStory';
import Contact from '@/src/components/Contact';
import Footer from '@/src/components/Footer';

export const metadata: Metadata = {
  title: 'Car Detailing Four Corners MT | Velocity Car Detailing',
  description: 'Professional mobile car detailing in Four Corners, MT. Velocity Car Detailing comes to you — interior detailing, ceramic coating, paint correction, and more. Book today!',
  alternates: { canonical: 'https://www.velocitydetailingmt.com/car-detailing-four-corners-mt' },
  openGraph: {
    title: 'Car Detailing Four Corners MT | Velocity Car Detailing',
    description: 'Professional mobile car detailing in Four Corners, MT. We come to you.',
    url: 'https://www.velocitydetailingmt.com/car-detailing-four-corners-mt',
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'AutoDetailingService',
  name: 'Velocity Car Detailing',
  description: 'Professional mobile car detailing services in Four Corners, MT.',
  telephone: '+16124345327',
  url: 'https://www.velocitydetailingmt.com/car-detailing-four-corners-mt',
  areaServed: 'Four Corners, Montana',
  priceRange: '$125-$850',
  openingHours: ['Mo Tu We Th Fr Su 08:00-18:00'],
};

export default function FourCornersPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Header />
      <main>
        <LocationHero city="Four Corners" />
        <About />
        <Services />
        <OurStory />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
