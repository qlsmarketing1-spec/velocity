import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactSection from '@/components/Contact';
import { Check } from 'lucide-react';

const Contact = () => {
  const trustBadges = [
    '5 Star Rated Google Shop',
    'Most Certified Shop in [Your City]',
    'Passionate Team',
    'Licensed & Insured',
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Trust Badges */}
        <section className="bg-card/80 border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-primary" />
                  <span className="text-sm md:text-base text-foreground/80">{badge}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
