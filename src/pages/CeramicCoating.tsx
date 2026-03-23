import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, Shield, Sparkles, Droplets, ChevronRight, ArrowRight } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ceramicHeroImg from "@/assets/ceramic-hero.jpg";
import gallery1Img from "@/assets/ceramic-gallery-1.jpg";
import gallery2Img from "@/assets/ceramic-gallery-2.jpg";
import gallery3Img from "@/assets/ceramic-gallery-3.jpg";
import whyUsImg from "@/assets/ceramic-why-us.jpg";
import step1Img from "@/assets/ceramic-step-1.jpg";
import step2Img from "@/assets/ceramic-step-2.jpg";
import step3Img from "@/assets/ceramic-step-3.jpg";
import step4Img from "@/assets/ceramic-step-4.jpg";

const CONTACT_URL = "https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9";

const packageInclusions = [
  "Full decontamination wash",
  "One Step Paint Enhancement",
  "Tires Cleaned & Dressed",
  "Reported to CarFax",
  "FREE Care Kit",
  "Aftercare Support",
];

const coatingAddons = [
  {
    title: "Wheel Face Ceramic Coating",
    description: "For ease of cleaning",
  },
  {
    title: "Wheels Off: Wheel Barrels & Calipers",
    description: "Coating for further ease of cleaning where the details matter",
  },
  {
    title: "Paint Correction Polish",
    description: "To remove deeper swirls and scratches",
  },
  {
    title: "Windshield & Windows",
    description: "Ceramic coating for ease of cleaning and improved visibility/safety",
  },
];

const installationSteps = [
  {
    step: 1,
    title: "Clean & Decontaminate",
    description:
      "Quality ceramic coatings require quality paint preparation. Step one is a triple decontamination wash with iron removal and a clay process.",
    image: step1Img,
    alt: "Car decontamination wash and clay bar treatment — ceramic coating prep in Bozeman MT",
  },
  {
    step: 2,
    title: "Inspection",
    description:
      "Once your vehicle is clean, we can get a better look at the condition of the paint and recommend the best course of action to suit your needs.",
    image: step2Img,
    alt: "Paint inspection before ceramic coating application in Bozeman MT",
  },
  {
    step: 3,
    title: "Paint Correction aka Swirl Removal",
    description:
      "No matter the age of your vehicle, we will polish to make sure the paint is as clean as possible. You can stick with our included enhancement polish or achieve a near-perfect look with scratch removal.",
    image: step3Img,
    alt: "Paint correction and swirl removal before ceramic coating in Bozeman MT",
  },
  {
    step: 4,
    title: "Wiped, Coated, & Cured",
    description:
      "Ceramic coating is a systematic process: timing and teamwork is everything. Then we wait for the coating to cure in a temperature controlled environment.",
    image: step4Img,
    alt: "Ceramic coating application and curing process in Bozeman MT",
  },
];

const faqs = [
  {
    question: "Do ceramic coatings prevent rock chips?",
    answer:
      "No, ceramic coatings do not prevent rock chips. They provide protection against chemical stains, UV rays, and minor scratches, but for rock chip protection, you would need Paint Protection Film (PPF).",
  },
  {
    question: "What's the difference between coatings and wax?",
    answer:
      "Ceramic coatings chemically bond with your paint and last 2-5+ years, while wax sits on top of the paint and typically lasts only a few weeks to months. Coatings provide superior protection and a longer-lasting shine.",
  },
  {
    question: "Where can you apply a ceramic coating?",
    answer:
      "Ceramic coatings can be applied to paint, wheels, glass, plastic trim, and interior surfaces. Each area may require a specific type of coating formulated for that surface.",
  },
  {
    question: "What will a ceramic coating look like?",
    answer:
      "A properly applied ceramic coating enhances your paint's gloss and depth, giving it a wet, candy-like appearance. It also makes the surface extremely hydrophobic, causing water to bead and sheet off.",
  },
  {
    question: "What is ceramic coating?",
    answer:
      "Ceramic coating is a liquid polymer applied to the exterior of a vehicle. It chemically bonds with the factory paint, creating a protective layer that enhances the vehicle's appearance and provides long-lasting protection against environmental contaminants.",
  },
  {
    question: "How long does a ceramic coating last?",
    answer: "Depending on the product and maintenance, ceramic coatings can last anywhere from 2 to 5 years or more.",
  },
  {
    question: "How to maintain ceramic coating?",
    answer:
      "To maintain ceramic coating, regular washing with pH-neutral soap and avoiding harsh chemicals is recommended. Additionally, periodic reapplication of a maintenance product can help extend the life of the coating.",
  },
];

const ceramicServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Ceramic Coating',
  description:
    'Professional ceramic coating application for vehicles in Bozeman, MT. Includes full decontamination wash, paint enhancement, and a 2- or 5-year warranty.',
  provider: {
    '@type': 'LocalBusiness',
    name: 'Velocity Car Detailing',
    url: 'https://velocitycardetailing.com',
    areaServed: 'Bozeman, MT',
  },
  offers: [
    {
      '@type': 'Offer',
      name: '2-Year Ceramic Coating',
      price: '795',
      priceCurrency: 'USD',
      priceSpecification: { '@type': 'UnitPriceSpecification', description: 'Starting price, varies by vehicle size' },
    },
  ],
  url: 'https://velocitycardetailing.com/ceramic-coating-bozeman-mt',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

const CeramicCoating = () => {
  useSEO({
    title: 'Ceramic Coating Bozeman MT | Velocity Car Detailing',
    description:
      'Professional ceramic coating services in Bozeman, MT. 2-year and 5-year packages starting at $795. Protect your paint with a long-lasting hydrophobic coating.',
    canonical: '/ceramic-coating-bozeman-mt',
    jsonLd: [ceramicServiceSchema, faqSchema],
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={ceramicHeroImg}
              alt="Professional ceramic coating service in Bozeman MT — glossy paint protection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
          </div>

          <div className="container mx-auto relative z-10 section-padding">
            <div className="max-w-2xl">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4">Ceramic Coating Specialists</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Professional <span className="text-gradient-blue">Ceramic Coatings</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-8">Your Ceramic Coating Experts in Bozeman, MT</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-blue inline-flex items-center gap-2 text-lg">
                  Get A Quote
                  <ArrowRight size={20} />
                </a>
                <a href="#packages" className="btn-outline-blue inline-flex items-center gap-2 text-lg">
                  View Packages
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* You May Be Thinking Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider mb-4">Ceramic Specialists</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">You May Be Thinking...</h2>
                <p className="text-lg text-foreground/70">
                  A ceramic coating will protect your ride from the elements, keep your vehicle looking clean longer,
                  and make washing a breeze! Long gone are the days of spending the whole afternoon washing your car!
                  Instead a quick wash will uncover the added glossy look of your ceramic coating!
                </p>
              </div>

              {/* YouTube Video */}
              <div className="aspect-video rounded-xl overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/c_XgoOZqzuI"
                  title="Ceramic coating water beading and glossy finish demonstration"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="glass-card p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Hardened Layer of Protection</h3>
                <p className="text-foreground/60">
                  Superior defense against environmental contaminants and chemical stains.
                </p>
              </div>

              <div className="glass-card p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Wet Glossy Paint Look</h3>
                <p className="text-foreground/60">
                  Enhanced shine and depth that makes your paint look showroom fresh.
                </p>
              </div>

              <div className="glass-card p-8 text-center card-hover">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <Droplets className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">Easier To Wash & Maintain</h3>
                <p className="text-foreground/60">
                  Hydrophobic surface repels water, dirt, and grime for effortless cleaning.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Package Options Section */}
        <section id="packages" className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4">Stays Cleaner Longer</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Ceramic Coating Package Options</h2>
            </div>

            {/* Included With All Packages */}
            <div className="glass-card p-8 lg:p-12 mb-12">
              <h3 className="text-2xl font-bold mb-6 text-center">Included With All Ceramic Coating Packages</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {packageInclusions.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Warranty Tiers */}
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              <div className="glass-card p-8 text-center card-hover border-2 border-transparent hover:border-primary/50 transition-all">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">2 Year</h3>
                <p className="text-foreground/60 mb-4">Durability/Warranty</p>
                <p className="text-lg font-semibold text-primary">Starting at $795</p>
                <p className="text-sm text-foreground/50">Depending on vehicle size</p>
              </div>

              <div className="glass-card p-8 text-center card-hover border-2 border-primary/30 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-primary">5</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">5 Year</h3>
                <p className="text-foreground/60 mb-4">Durability/Warranty</p>
                <p className="text-lg font-semibold text-primary">Contact for pricing</p>
                <p className="text-sm text-foreground/50">Based on vehicle size</p>
              </div>
            </div>

            <p className="text-center text-foreground/60 italic">
              Keeping your vehicle longer? Ask about our LIFETIME maintenance program
            </p>
          </div>
        </section>

        {/* Add-ons Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Choose Your Coating <span className="text-gradient-blue">Add-ons</span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {coatingAddons.map((addon, index) => (
                <div key={index} className="glass-card p-6 card-hover flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">{addon.title}</h3>
                    <p className="text-foreground/60">{addon.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-blue inline-flex items-center gap-2 text-lg">
                Price My Vehicle
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* Before/After Gallery Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                See The <span className="text-gradient-blue">Difference</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="aspect-[4/3] rounded-xl overflow-hidden card-hover">
                <img
                  src={gallery1Img}
                  alt="Ceramic coating results — deep gloss and paint protection on a vehicle in Bozeman MT"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden card-hover">
                <img
                  src={gallery2Img}
                  alt="Hydrophobic water beading effect after ceramic coating application in Bozeman MT"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden card-hover">
                <img
                  src={gallery3Img}
                  alt="Showroom shine and paint protection from professional ceramic coating in Bozeman MT"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-square rounded-xl overflow-hidden order-2 lg:order-1">
                <img
                  src={whyUsImg}
                  alt="Velocity Car Detailing team — professional ceramic coating installers in Bozeman MT"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Why Choose Us To <span className="text-gradient-blue">Install?</span>
                </h2>
                <p className="text-lg text-foreground/70 mb-8">
                  We strongly believe in transparency which is why our clients love to come back! We thoroughly inspect
                  every vehicle that comes in and share our findings and professional recommendations with you. Our
                  clients love knowing we keep them in the loop during the entire process.
                </p>
                <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-blue inline-flex items-center gap-2 text-lg">
                  Get A Quote
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Installation Process Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                How Are Ceramic Coatings <span className="text-gradient-blue">Installed?</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
                Installing a ceramic coating is an extremely tedious process. Below is a breakdown of how ceramic
                coatings are installed.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {installationSteps.map((step) => (
                <div key={step.step} className="glass-card p-8 card-hover">
                  <div className="aspect-video rounded-lg overflow-hidden mb-6">
                    <img
                      src={step.image}
                      alt={step.alt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center flex-shrink-0">
                      <span className="text-xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    <h3 className="text-xl font-bold">{step.title}</h3>
                  </div>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-blue inline-flex items-center gap-2 text-lg">
                Get A Quote
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4">New To Ceramic Coatings?</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Frequently Asked <span className="text-gradient-blue">Questions</span>
              </h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="glass-card px-6 border-none">
                    <AccordionTrigger className="text-left font-semibold hover:no-underline">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/70">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="section-padding bg-gradient-to-b from-card to-background">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Care for <span className="text-gradient-blue">Your Car?</span>
            </h2>
            <a href={CONTACT_URL} target="_blank" rel="noopener noreferrer" className="btn-blue inline-flex items-center gap-2 text-lg">
              Get A Quote
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CeramicCoating;
