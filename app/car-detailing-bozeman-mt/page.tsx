import type { Metadata } from 'next';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import { ExternalLink, Check, ArrowRight } from 'lucide-react';
import interiorImg from '@/src/assets/interior-detail.jpg';
import exteriorImg from '@/src/assets/exterior-detail.jpg';
import paintCorrectionImg from '@/src/assets/paint-correction.jpg';
import paintCorrection2stepImg from '@/src/assets/paint-correction-2step.jpg';
import about2 from '@/src/assets/about-2.jpg';
import about3 from '@/src/assets/about-3.jpg';
import fullDetailUltraImg from '@/src/assets/full-detail-ultra.jpg';
import heroImg from '@/src/assets/hero-bg.jpg';

export const metadata: Metadata = {
  title: 'Car Detailing Bozeman MT | Velocity Car Detailing',
  description: 'Professional auto detailing in Bozeman, MT. Interior, exterior, paint correction, and full detail packages starting at $145. Book online today.',
  alternates: { canonical: 'https://www.velocitydetailingmt.com/car-detailing-bozeman-mt' },
  openGraph: {
    title: 'Car Detailing Bozeman MT | Velocity Car Detailing',
    description: 'Professional auto detailing in Bozeman, MT. Interior, exterior, paint correction, and full detail packages starting at $145.',
    url: 'https://www.velocitydetailingmt.com/car-detailing-bozeman-mt',
  },
  twitter: {
    title: 'Car Detailing Bozeman MT | Velocity Car Detailing',
    description: 'Professional auto detailing in Bozeman, MT. Interior, exterior, paint correction, and full detail packages starting at $145.',
  },
};

const BOOKING_URL = 'https://detailprocrm.com/book/ed56c048-9b45-4d92-90d2-b55ed2ee5936';
const CONTACT_URL = 'https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9';

interface PricingTier {
  vehicle: string;
  price: string;
}

interface ServiceSection {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  pricing: PricingTier[];
  pricingNote?: string;
  features: string[];
  notes?: string[];
  image: { src: string };
  imageAlt: string;
  flip?: boolean;
  contactOnly?: boolean;
}

const services: ServiceSection[] = [
  {
    id: 'interior',
    title: 'Interior Detail',
    description: 'Want your interior to look and feel new? Look no further than our interior detail package.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$235' },
      { vehicle: 'SUV / Crossover', price: '$280' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$310' },
    ],
    features: [
      'Vacuum and steam clean carpets',
      'Deep clean all hard surfaces including leather, plastic, and vinyl',
      'Window cleaning',
      'UV protection on plastics and leather',
      'Clean door jams',
    ],
    notes: [
      'Additional charges may apply for excessive conditions',
      'All vehicles are subject to pre-detail inspection',
    ],
    image: interiorImg,
    imageAlt: 'Professional interior car detailing — deep clean and steam treatment',
    flip: false,
  },
  {
    id: 'exterior-basic',
    title: 'Exterior Detail',
    subtitle: 'Basic',
    description: 'For when your vehicle needs a little extra care. Bring your ride back to looking fresh.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$145' },
      { vehicle: 'SUV / Crossover', price: '$185' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$225' },
    ],
    features: [
      'Wheel & tire deep clean',
      'Gentle hand wash',
      'Tire dressing',
      'Exterior plastics dressed',
    ],
    notes: [
      'Excessive tar or other exterior contaminants will result in additional charges',
      'All vehicles are subject to pre-detail inspection',
    ],
    image: exteriorImg,
    imageAlt: 'Exterior car wash and detailing service in Bozeman MT',
    flip: true,
  },
  {
    id: 'exterior-ultra',
    title: 'Exterior Detail',
    subtitle: 'Ultra Shine',
    description: 'Our premium exterior package. Everything in Basic plus a deep paint enhancement for a head-turning finish.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$335' },
      { vehicle: 'SUV / Crossover', price: '$375' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$405' },
    ],
    features: [
      'Wheel & tire deep clean',
      'Gentle hand wash',
      'Clay bar decontamination',
      'Paint polish & enhancement',
      '6 month paint protection',
      'Tire dressing',
      'Exterior plastics dressed',
    ],
    notes: [
      'Excessive tar or other exterior contaminants will result in additional charges',
      'All vehicles are subject to pre-detail inspection',
    ],
    image: about2,
    imageAlt: 'Ultra shine paint polish and exterior detailing in Bozeman MT',
    flip: false,
  },
  {
    id: 'full-basic',
    title: 'Full Detail',
    subtitle: 'Basic',
    description: 'Our most popular package. Give your vehicle the works for a fully refreshed ride.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$335' },
      { vehicle: 'SUV / Crossover', price: '$375' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$425' },
    ],
    features: [
      'Full interior detail',
      'Wheel & tire deep clean',
      'Gentle hand wash',
      'Tire dressing',
    ],
    notes: [
      'Additional charges may apply for excessive conditions',
      'Excessive tar or other exterior contaminants will result in additional charges',
      'All vehicles are subject to pre-detail inspection',
    ],
    image: about3,
    imageAlt: 'Full car detail service — interior and exterior in Bozeman MT',
    flip: true,
  },
  {
    id: 'full-ultra',
    title: 'Full Detail',
    subtitle: 'Ultra Shine',
    description: 'The ultimate Velocity experience. A complete interior detail paired with our Ultra Shine exterior package for a showroom-quality result.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$475' },
      { vehicle: 'SUV / Crossover', price: '$525' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$590' },
    ],
    features: [
      'Full interior detail',
      'Wheel & tire deep clean',
      'Gentle hand wash',
      'Clay bar decontamination',
      'Paint polish & enhancement',
      '6 month paint protection',
      'Tire dressing',
      'Exterior plastics dressed',
    ],
    notes: [
      'Additional charges may apply for excessive conditions',
      'Excessive tar or other exterior contaminants will result in additional charges',
      'All vehicles are subject to pre-detail inspection',
    ],
    image: fullDetailUltraImg,
    imageAlt: 'Full detail ultra shine package — complete auto detailing Bozeman MT',
    flip: false,
  },
  {
    id: 'paint-1step',
    title: 'Paint Correction',
    subtitle: '1-Step',
    description: 'Remove around 60% of surface imperfections including swirls, light scratches, and water spots. We highly recommend adding ceramic coating afterwards to protect your freshly corrected paint.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$400' },
      { vehicle: 'SUV / Crossover', price: '$500' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$600' },
    ],
    features: [
      '~60% imperfection removal',
      'Swirl mark elimination',
      'Light scratch removal',
      'Water spot treatment',
      'Single-stage machine polish',
      'High-gloss finish',
    ],
    image: paintCorrectionImg,
    imageAlt: 'One-step paint correction and swirl removal in Bozeman MT',
    flip: true,
  },
  {
    id: 'paint-2step',
    title: 'Paint Correction',
    subtitle: '2-Step',
    description: 'Our most thorough paint correction — removes around 80% of imperfections. Best for dark-colored cars, especially black. An in-person inspection is required before a final quote.',
    pricing: [
      { vehicle: 'Sedan / Coupe', price: '$600' },
      { vehicle: 'SUV / Crossover', price: '$725' },
      { vehicle: 'Large SUV / Minivan / Truck', price: '$850' },
    ],
    pricingNote: 'In-person inspection required for final quote',
    features: [
      '~80% imperfection removal',
      'Deep swirl & scratch correction',
      'Oxidation removal',
      'Two-stage machine polish',
      'Best results on dark/black vehicles',
      'Ceramic coating highly recommended',
    ],
    image: paintCorrection2stepImg,
    imageAlt: 'Two-step paint correction for dark cars in Bozeman MT',
    flip: false,
    contactOnly: true,
  },
];

const carDetailingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Car Detailing',
  description: 'Professional auto detailing services in Bozeman, MT including interior, exterior, full detail, and paint correction packages.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Velocity Car Detailing',
    url: 'https://www.velocitydetailingmt.com',
    telephone: '+16124345327',
    areaServed: 'Bozeman, MT',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Auto Detailing Packages',
    itemListElement: services.flatMap((service) =>
      service.pricing.map((tier) => ({
        '@type': 'Offer',
        name: service.subtitle
          ? `${service.title} — ${service.subtitle} (${tier.vehicle})`
          : `${service.title} (${tier.vehicle})`,
        price: tier.price.replace('$', ''),
        priceCurrency: 'USD',
      }))
    ),
  },
  url: 'https://www.velocitydetailingmt.com/car-detailing-bozeman-mt',
};

const PricingTable = ({ tiers, note }: { tiers: PricingTier[]; note?: string }) => (
  <div className="mb-8">
    <div className="rounded-xl overflow-hidden border border-border">
      {tiers.map((tier, i) => (
        <div
          key={i}
          className={`flex justify-between items-center px-5 py-3 ${
            i % 2 === 0 ? 'bg-background/50' : 'bg-card'
          }`}
        >
          <span className="text-foreground/80 text-sm font-medium">{tier.vehicle}</span>
          <span className="text-primary font-bold text-lg">{tier.price}</span>
        </div>
      ))}
    </div>
    {note && (
      <p className="mt-2 text-sm text-primary/80 italic font-medium">{note}</p>
    )}
  </div>
);

export default function CarDetailingPage() {
  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(carDetailingSchema) }}
      />
      <Header />

      <main>
        {/* Hero Section */}
        <section
          className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${heroImg.src})` }}
            role="img"
            aria-label="Velocity Car Detailing professional auto detailing in Bozeman MT"
          />
          <div className="absolute inset-0 bg-background/70" />
          <div className="relative z-10 text-center px-4">
            <p className="text-foreground/70 text-lg mb-4">
              Professional Car Detailing — Bozeman, MT
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Professional <span className="text-gradient-blue">Auto Detailing</span>
            </h1>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue inline-flex items-center gap-2 text-lg"
            >
              Book Online
              <ArrowRight size={20} />
            </a>
          </div>
        </section>

        {/* Service Sections */}
        {services.map((service, index) => (
          <section
            key={service.id}
            id={service.id}
            className={`py-16 lg:py-24 ${index % 2 === 0 ? 'bg-card' : 'bg-background'}`}
          >
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                {/* Content */}
                <div className={service.flip ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                  <div className="mb-2">
                    <h2 className="text-3xl md:text-4xl font-bold inline">
                      {service.title}
                    </h2>
                    {service.subtitle && (
                      <span className="ml-3 text-primary text-2xl md:text-3xl font-bold">
                        — {service.subtitle}
                      </span>
                    )}
                  </div>
                  <p className="text-foreground/70 mb-6 leading-relaxed">{service.description}</p>

                  <PricingTable tiers={service.pricing} note={service.pricingNote} />

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {service.notes && (
                    <ul className="space-y-1 mb-8">
                      {service.notes.map((note, i) => (
                        <li key={i} className="text-foreground/50 text-xs italic">
                          *{note}
                        </li>
                      ))}
                    </ul>
                  )}

                  {service.contactOnly ? (
                    <a
                      href={CONTACT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue inline-flex items-center gap-2"
                    >
                      Contact Us
                      <ArrowRight size={18} />
                    </a>
                  ) : (
                    <a
                      href={BOOKING_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-blue inline-flex items-center gap-2"
                    >
                      Book Online
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>

                {/* Image */}
                <div className={service.flip ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                  <div className="aspect-[4/3] rounded-xl overflow-hidden">
                    <img
                      src={service.image.src}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Book your professional detailing service today and experience the Velocity difference.
            </p>
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue inline-flex items-center gap-2 text-lg"
            >
              Book Online
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
