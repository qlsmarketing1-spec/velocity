import { Check } from 'lucide-react';
import interiorImage from '@/assets/interior-detail.jpg';
import exteriorImage from '@/assets/exterior-detail.jpg';
import ceramicImage from '@/assets/ceramic-coating.jpg';
import paintCorrectionImage from '@/assets/paint-correction.jpg';
import engineDetailImage from '@/assets/engine-detail.jpg';
import headlightRestoreImage from '@/assets/headlight-restore.jpg';

interface Service {
  title: string;
  description: string;
  price: string;
  image: string;
  features: string[];
}

const services: Service[] = [
  {
    title: 'Interior Detailing',
    description: 'Complete interior restoration for a fresh, clean cabin.',
    price: '$149',
    image: interiorImage,
    features: [
      'Deep vacuum & steam cleaning',
      'Leather conditioning',
      'Dashboard & console detailing',
      'Odor elimination',
    ],
  },
  {
    title: 'Exterior Detailing',
    description: 'Bring back that showroom shine with our exterior package.',
    price: '$179',
    image: exteriorImage,
    features: [
      'Hand wash & dry',
      'Clay bar treatment',
      'Paint polishing',
      'Wheel & tire dressing',
    ],
  },
  {
    title: 'Ceramic Coating',
    description: 'Ultimate protection with long-lasting ceramic coating.',
    price: '$499',
    image: ceramicImage,
    features: [
      'Paint correction included',
      '2-year protection',
      'Hydrophobic finish',
      'UV protection',
    ],
  },
  {
    title: 'Paint Correction',
    description: 'Remove swirls, scratches, and oxidation for a flawless finish.',
    price: '$299',
    image: paintCorrectionImage,
    features: [
      'Swirl mark removal',
      'Scratch elimination',
      'Machine polishing',
      'Gloss enhancement',
    ],
  },
  {
    title: 'Engine Bay Detail',
    description: 'Comprehensive engine bay cleaning and dressing.',
    price: '$89',
    image: engineDetailImage,
    features: [
      'Degreasing & cleaning',
      'Plastic & rubber dressing',
      'Hose & wire detailing',
      'Protective coating',
    ],
  },
  {
    title: 'Headlight Restoration',
    description: 'Restore clarity and brightness to foggy headlights.',
    price: '$79',
    image: headlightRestoreImage,
    features: [
      'Oxidation removal',
      'Lens polishing',
      'UV sealant application',
      'Improved visibility',
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Professional mobile detailing services tailored to your needs. We come to you, anywhere in the Twin Cities area.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="glass-card overflow-hidden card-hover"
            >
              {/* Image */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                <p className="text-foreground/70 mb-4">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <span className="text-sm text-foreground/60">Starting at</span>
                    <p className="text-2xl font-bold text-primary">{service.price}</p>
                  </div>
                  <a href="#contact" className="btn-gold text-sm px-6 py-2">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
