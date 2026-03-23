import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import OurStory from '@/components/OurStory';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useSEO } from '@/hooks/useSEO';

const Index = () => {
  useSEO({
    title: 'Velocity Car Detailing | Bozeman Mobile Car Detailing',
    description:
      'Professional mobile car detailing services in the Bozeman area. We bring showroom-quality detailing right to your doorstep. Book today!',
    canonical: '/',
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
