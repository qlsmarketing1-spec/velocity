import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Phone, ExternalLink, Check, ImageIcon } from 'lucide-react';

const interiorFeatures = [
  'Deep Interior Cleaning',
  'Door Jamb Cleaning',
  'Streak-Free Glass Cleaning',
  'Air Purging/Dusting',
  'Vacuuming',
  'Cleaning & Protecting Surfaces',
  'Fabric Guards',
];

const exteriorFeatures = [
  'Hand Wash & Dry',
  'Wheel & Tire Cleaning',
  'Tire Dressing',
  'Door Jamb Cleaning',
  'Trim Restoration',
  'Paint Sealant Application',
  'Glass Treatment',
];

const fullDetailFeatures = [
  'Complete Interior Detail',
  'Complete Exterior Detail',
  'Engine Bay Cleaning',
  'Clay Bar Treatment',
  'Paint Decontamination',
  'Leather Conditioning',
  'Premium Paint Sealant',
  'Odor Elimination',
];

const CarDetailing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image Placeholder */}
          <div className="absolute inset-0 bg-card flex items-center justify-center">
            <div className="text-center text-foreground/30">
              <ImageIcon className="w-24 h-24 mx-auto mb-4" />
              <p className="text-lg">Hero Background Image</p>
              <p className="text-sm">(1920x1080 recommended)</p>
            </div>
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-background/70" />
          
          {/* Content */}
          <div className="relative z-10 text-center px-4">
            <p className="text-foreground/70 text-lg mb-4">
              Professional Car Detailing [Your City], [State]
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Professional <span className="text-gradient-blue">Auto Detailing</span>
            </h1>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now to Book
              <span className="ml-2 font-semibold">(XXX) XXX-XXXX</span>
            </Button>
          </div>
        </section>

        {/* Interior Detail Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Interior Detailing Services
                </h2>
                <p className="text-primary text-xl font-semibold italic mb-6">
                  Starting at $XXX
                </p>
                
                <ul className="space-y-3 mb-8">
                  {interiorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 uppercase tracking-wide text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Book
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Book Online
                  </Button>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-background rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center text-foreground/30">
                    <ImageIcon className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-sm">Interior Detail Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Exterior Detail Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Placeholder */}
              <div>
                <div className="aspect-[4/3] bg-card rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center text-foreground/30">
                    <ImageIcon className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-sm">Exterior Detail Image</p>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Exterior Detailing Services
                </h2>
                <p className="text-primary text-xl font-semibold italic mb-6">
                  Starting at $XXX
                </p>
                
                <ul className="space-y-3 mb-8">
                  {exteriorFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 uppercase tracking-wide text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Book
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Book Online
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Full Detail Section */}
        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Full Detail Package
                </h2>
                <p className="text-primary text-xl font-semibold italic mb-6">
                  Starting at $XXX
                </p>
                
                <ul className="space-y-3 mb-8">
                  {fullDetailFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground/80 uppercase tracking-wide text-sm font-medium">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call to Book
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Book Online
                  </Button>
                </div>
              </div>
              
              {/* Image Placeholder */}
              <div className="order-1 lg:order-2">
                <div className="aspect-[4/3] bg-background rounded-lg flex items-center justify-center border border-border">
                  <div className="text-center text-foreground/30">
                    <ImageIcon className="w-16 h-16 mx-auto mb-3" />
                    <p className="text-sm">Full Detail Image</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-foreground/70 text-lg mb-8 max-w-2xl mx-auto">
              Book your professional car detailing service today and experience the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now: (XXX) XXX-XXXX
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Book Online
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarDetailing;
