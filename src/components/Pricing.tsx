import { Check, Star } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Essential',
    price: '$149',
    description: 'Perfect for regular maintenance',
    features: [
      'Exterior hand wash',
      'Interior vacuum',
      'Window cleaning',
      'Tire dressing',
      'Dashboard wipe down',
    ],
  },
  {
    name: 'Premium',
    price: '$249',
    description: 'Our most popular package',
    popular: true,
    features: [
      'Everything in Essential',
      'Clay bar treatment',
      'Paint polish',
      'Leather conditioning',
      'Engine bay cleaning',
      'Odor elimination',
    ],
  },
  {
    name: 'Ultimate',
    price: '$399',
    description: 'Complete transformation',
    features: [
      'Everything in Premium',
      'Paint correction',
      'Ceramic sealant',
      'Headlight restoration',
      'Fabric protection',
      'Interior steam clean',
      '6-month guarantee',
    ],
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Simple <span className="text-gradient-gold">Pricing</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Choose the package that fits your needs.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 lg:p-8 transition-all duration-300 ${
                tier.popular
                  ? 'bg-gradient-to-b from-primary/20 to-card border-2 border-primary scale-105 shadow-gold'
                  : 'glass-card card-hover'
              }`}
            >
              {/* Popular Badge */}
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-gold px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                    <span className="text-sm font-bold text-primary-foreground">Most Popular</span>
                  </div>
                </div>
              )}

              {/* Tier Info */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{tier.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold text-primary">{tier.price}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`block text-center py-3 rounded-lg font-semibold transition-all ${
                  tier.popular
                    ? 'btn-gold w-full'
                    : 'btn-outline-gold w-full'
                }`}
              >
                Choose {tier.name}
              </a>
            </div>
          ))}
        </div>

        {/* Extra Info */}
        <p className="text-center text-foreground/60 text-sm mt-12">
          Prices may vary based on vehicle size and condition. Contact us for a custom quote.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
