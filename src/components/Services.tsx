import { Check } from 'lucide-react';
import interiorImage from '@/src/assets/interior-detail.jpg';
import exteriorImage from '@/src/assets/exterior-detail.jpg';
import ceramicImage from '@/src/assets/ceramic-coating.jpg';
import paintCorrectionImage from '@/src/assets/paint-correction.jpg';
import boatDetailImage from '@/src/assets/boat-detail.jpg';
import fleetDetailImage from '@/src/assets/fleet-detail.jpg';

interface Service {
  title: string;
  description: string;
  price?: string;
  image: string;
  alt: string;
  features: string[];
  contactOnly?: boolean;
}

const services: Service[] = [
  {
    title: 'Interior Detailing',
    description: 'Complete interior restoration for a fresh, clean cabin.',
    price: '$235',
    image: interiorImage.src,
    alt: 'Professional interior car detailing in Bozeman MT',
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
    price: '$145',
    image: exteriorImage.src,
    alt: 'Exterior car detailing and hand wash in Bozeman MT',
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
    price: '$795',
    image: ceramicImage.src,
    alt: 'Ceramic coating application on a vehicle in Bozeman MT',
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
    price: '$400',
    image: paintCorrectionImage.src,
    alt: 'Paint correction and scratch removal on a vehicle',
    features: [
      'Swirl mark removal',
      'Scratch elimination',
      'Machine polishing',
      'Gloss enhancement',
    ],
  },
  {
    title: 'Boat Detailing',
    description: 'Professional detailing services to keep your boat looking pristine.',
    image: boatDetailImage.src,
    alt: 'Professional boat detailing service in Bozeman MT',
    contactOnly: true,
    features: [
      'Hull wash & polish',
      'Interior cleaning',
      'Upholstery treatment',
      'Protective wax coating',
    ],
  },
  {
    title: 'Fleet Detailing',
    description: 'Keep your entire fleet looking sharp and professional.',
    image: fleetDetailImage.src,
    alt: 'Fleet vehicle detailing and commercial car washing',
    contactOnly: true,
    features: [
      'Multi-vehicle pricing',
      'Scheduled maintenance plans',
      'Interior & exterior detail',
      'Flexible scheduling',
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
            Our <span className="text-gradient-blue">Services</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Professional mobile detailing services tailored to your needs. We come to you, anywhere in the Bozeman area.
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
                  alt={service.alt}
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
                  {service.contactOnly ? (
                    <a href="https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9" target="_blank" rel="noopener noreferrer" className="btn-blue text-sm px-6 py-2 w-full text-center">
                      Contact Us
                    </a>
                  ) : (
                    <>
                      <div>
                        <span className="text-sm text-foreground/60">Starting at</span>
                        <p className="text-2xl font-bold text-primary">{service.price}</p>
                      </div>
                      <a href="https://detailprocrm.com/book/ed56c048-9b45-4d92-90d2-b55ed2ee5936" target="_blank" rel="noopener noreferrer" className="btn-blue text-sm px-6 py-2">
                        Book Now
                      </a>
                    </>
                  )}
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
