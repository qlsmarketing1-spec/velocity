import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import OurStory from '@/components/OurStory';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

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
    reviewCount: '50',
  },
};

const Index = () => {
  useSEO({
    title: 'Velocity Car Detailing | Bozeman Mobile Car Detailing',
    description:
      'Professional mobile car detailing services in the Bozeman area. We bring showroom-quality detailing right to your doorstep. Book today!',
    canonical: '/',
    jsonLd: homepageSchema,
  });

  return (
    <div className="min-h-screen bg-background">
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
};

export default Index;
