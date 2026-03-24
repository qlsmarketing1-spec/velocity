import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, ChevronRight, Droplets, Shield, Sparkles, Anchor } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import boatHeroImg from "../../Photography/B7408BED-2F98-48F5-A65D-FCE52E082C01_1_105_c.jpeg";
import boatDetailImg from "@/assets/boat-detail.jpg";

const CONTACT_URL = "https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9";

const benefits = [
  {
    icon: Sparkles,
    title: "Restore Faded Gel Coat",
    description:
      "Montana summers oxidize and dull gel coat fast. We compound and polish it back to a deep, wet gloss — like it just left the showroom.",
  },
  {
    icon: Shield,
    title: "Protect Your Investment",
    description:
      "A properly detailed and protected boat holds its value and fends off UV damage, algae, and harsh weather season after season.",
  },
  {
    icon: Droplets,
    title: "Ready For Any Launch",
    description:
      "Flathead, Hebgen, or your favorite local reservoir — we'll have your boat looking its best every time it hits the water.",
  },
];

const services = [
  {
    id: "boat-exterior",
    number: "01",
    title: "Exterior Wash & Detail",
    description:
      "A thorough hand wash of the hull, deck, and topsides. We remove water spots, algae residue, and road grime from trailering — leaving every surface clean and protected.",
    features: [
      "Full hull hand wash",
      "Deck & topsides cleaned",
      "Water spot & algae removal",
      "Exterior plastics & trim dressed",
      "Tires & trailer fenders cleaned",
    ],
  },
  {
    id: "boat-gelcoat",
    number: "02",
    title: "Gel Coat Polish & Restoration",
    description:
      "Oxidized gel coat is the most common issue we see on boats. We compound, polish, and protect the surface to bring back that showroom gloss.",
    features: [
      "Oxidation removal & compounding",
      "Single or two-step machine polish",
      "UV-protective sealant applied",
      "Restores deep gel coat gloss",
      "Best results on white & light hulls",
    ],
  },
  {
    id: "boat-interior",
    number: "03",
    title: "Interior Detail",
    description:
      "From vinyl seating to bilge hatches, we deep clean every inch of the interior. UV protection on all surfaces keeps your upholstery from cracking under the Montana sun.",
    features: [
      "Vinyl seats cleaned & UV protected",
      "Carpet & flooring vacuumed and shampooed",
      "Dashboard & hard surfaces wiped down",
      "Compartments, cup holders & hatches cleaned",
      "Window & windshield cleaning",
    ],
  },
  {
    id: "boat-full",
    number: "04",
    title: "Full Boat Detail",
    description:
      "The complete Velocity treatment. Everything from hull to helm — exterior wash, gel coat polish, and full interior detail. Leave your boat looking better than the day it left the showroom.",
    features: [
      "Everything in Exterior Wash & Detail",
      "Gel coat compound & polish",
      "UV sealant protection",
      "Full interior deep clean",
      "UV protection on all surfaces",
      "Trailer & tires cleaned",
    ],
    featured: true,
  },
];

const boatSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Boat Detailing",
  description:
    "Professional boat detailing in Bozeman, MT. Gel coat restoration, interior deep clean, and full boat detail packages.",
  provider: {
    "@type": "LocalBusiness",
    name: "Velocity Car Detailing",
    url: "https://www.velocitydetailingmt.com",
    areaServed: "Bozeman, MT",
  },
  url: "https://www.velocitydetailingmt.com/boat-detailing-bozeman-mt",
};

const BoatDetailing = () => {
  useSEO({
    title: "Boat Detailing Bozeman MT | Velocity Car Detailing",
    description:
      "Professional boat detailing in Bozeman, MT. Gel coat restoration, interior cleaning, and full boat detail packages. We come to you.",
    canonical: "/boat-detailing-bozeman-mt",
    jsonLd: boatSchema,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[72vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={boatHeroImg}
              alt="Professional boat detailing service in Bozeman MT — gel coat restoration and interior cleaning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-transparent" />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 70% 90% at -5% 50%, hsl(170 66% 47% / 0.07) 0%, transparent 65%)",
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background to-transparent" />
          </div>

          <div className="container mx-auto relative z-10 section-padding">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium tracking-wide">
                <Anchor size={13} />
                Marine Detailing Specialists
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-gradient-blue">Boat Detailing</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg">
                Restore your gel coat. Deep clean your interior. We come to your home, marina, or storage unit.
              </p>
              <div className="w-12 h-px bg-primary mb-10" />
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue inline-flex items-center gap-2 text-lg"
                >
                  Get A Quote
                  <ArrowRight size={20} />
                </a>
                <a href="#services" className="btn-outline-blue inline-flex items-center gap-2 text-lg">
                  View Services
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                Why It Matters
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Your Boat Deserves <span className="text-gradient-blue">The Best</span>
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {benefits.map((benefit, i) => (
                <div key={i} className="glass-card p-8 text-center card-hover">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-foreground/60">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                What We Offer
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Boat Detailing <span className="text-gradient-blue">Packages</span>
              </h2>
              <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
                All pricing is custom-quoted based on your boat's size and condition. Contact us for a fast, transparent estimate.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {services.map((service) => (
                <div
                  key={service.id}
                  className={`glass-card p-8 card-hover relative overflow-hidden ${
                    service.featured
                      ? "border border-primary/40 shadow-[0_0_40px_hsl(170_66%_47%/0.12)]"
                      : ""
                  }`}
                >
                  {service.featured && (
                    <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </div>
                  )}
                  {/* Ghost number */}
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-3 -right-2 text-[7rem] font-bold leading-none select-none pointer-events-none text-foreground/[0.04]"
                    style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.05em" }}
                  >
                    {service.number}
                  </span>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-foreground/60 mb-6 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={CONTACT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200 text-sm"
                  >
                    Get A Quote <ArrowRight size={16} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] rounded-xl overflow-hidden order-2 lg:order-1">
                <img
                  src={boatDetailImg}
                  alt="Velocity Car Detailing — professional boat detailing team in Bozeman MT"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="order-1 lg:order-2">
                <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                  Why Velocity
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  We Come <span className="text-gradient-blue">To You</span>
                </h2>
                <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                  No need to haul your boat anywhere. We bring everything to your home, storage unit, or marina. Every detail is done by hand with marine-grade products built for the job.
                </p>
                <p className="text-lg text-foreground/70 mb-10 leading-relaxed">
                  We'll inspect your boat before we start, walk you through what we find, and recommend the right service — no upselling, just honest advice.
                </p>
                <a
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-blue inline-flex items-center gap-2 text-lg"
                >
                  Get A Quote
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-card to-background" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 100%, hsl(170 66% 47% / 0.08) 0%, transparent 70%)",
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="container mx-auto text-center relative z-10">
            <p className="text-primary font-semibold uppercase tracking-widest mb-4 text-sm">
              Ready to Launch
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Get Your Boat <span className="text-gradient-blue">Looking Its Best</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              Pricing is based on boat size and condition. Contact us for a fast, honest quote — no surprises.
            </p>
            <a
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-blue inline-flex items-center gap-2 text-lg"
            >
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

export default BoatDetailing;
