import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Check, ArrowRight, ChevronRight, Shield, BarChart3, Clock, FileText, Truck, Calendar } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import fleetDetailImg from "@/assets/fleet-detail.jpg";
import detailProLogo from "../../Photography/DetailPro_FinalLogos-03.png";

const CONTACT_URL = "https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9";

const operationalStandards = [
  {
    icon: Shield,
    title: "Asset Preservation",
    description:
      "We prevent the corrosive build-up of road salts and industrial grime that devalues your capital investment — extending the life of every vehicle in your fleet.",
  },
  {
    icon: BarChart3,
    title: "Brand Integrity",
    description:
      "Your vehicles are your most visible billboards. We ensure they reflect the professionalism of your team every mile they're on the road.",
  },
  {
    icon: Clock,
    title: "Driver Retention",
    description:
      "A clean, sanitized workspace is a safety requirement and a key factor in keeping high-quality drivers. We help you create an environment your team takes pride in.",
  },
];

const complianceItems = [
  {
    title: "The 50-Foot Rule (49 CFR § 390.21)",
    description:
      "We ensure all USDOT numbers and company branding maintain sharp contrast and 50-foot legibility to avoid \"low-hanging fruit\" citations.",
  },
  {
    title: "Safety Conspicuity",
    description:
      "High-clarity cleaning of all reflective safety tape (CFR § 393) and lighting lenses, ensuring your fleet meets visibility requirements in all conditions.",
  },
  {
    title: "CSA Score Protection",
    description:
      "By eliminating \"Vehicle Maintenance\" violations like obscured plates or dirty mirrors, we help protect your fleet's safety rating and lower your insurance premiums.",
  },
  {
    title: "Engine & Undercarriage Safety",
    description:
      "We degrease critical components so your mechanics can spot leaks early and inspectors can see a well-maintained machine.",
  },
];

const downtimeItems = [
  {
    icon: Truck,
    title: "On-Site Mobile Service",
    description:
      "We come to your yard or job site. No more paying drivers to sit in line at a truck wash.",
  },
  {
    icon: Calendar,
    title: "After-Hours & Weekend Scheduling",
    description:
      "We service your fleet when your drivers are off the clock, ensuring 100% uptime for your operations.",
  },
  {
    icon: FileText,
    title: "GPS-Verified Documentation",
    description:
      "Every service is logged with photos and timestamps, providing you with a digital audit trail for your maintenance records.",
  },
];

const tiers = [
  {
    number: "01",
    tier: "Tier 1",
    title: "Exterior Wash",
    focus: "Exterior visibility and DOT compliance",
    features: [
      "High-pressure degrease of frame and wheels",
      "Clarity cleaning of all lighting, glass, and reflective tape",
      "Hand wash with salt-neutralizer",
      "Tire dressing",
      "Window cleaning",
    ],
  },
  {
    number: "02",
    tier: "Tier 2",
    title: "Exterior & Interior Detail",
    focus: "Driver health, safety, and retention",
    features: [
      "Everything in Tier 1",
      "Full cab vacuuming and compressed air blow-out of electronics",
      "Steam-sanitization of high-touch surfaces (steering wheel, gear shift, handles)",
      "UV protection on dash and plastics",
      "Interior glass treatment for maximum night-time visibility",
    ],
  },
  {
    number: "03",
    tier: "Tier 3",
    title: "Rolling Billboard Restoration",
    focus: "Brand image and exterior preservation",
    features: [
      "Everything in Tier 2",
      "Clay bar paint decontamination",
      "Paint polish & enhancement",
      "UV-protection sealant applied",
      "Polishing of chrome and aluminum accents",
      "Wheel brightening and tire dressing",
    ],
    featured: true,
  },
];

const systemItems = [
  {
    icon: FileText,
    title: "Consolidated Invoicing",
    description: "One monthly bill for the entire fleet. No more juggling multiple vendors or chasing receipts.",
  },
  {
    icon: Calendar,
    title: "Proactive Scheduling",
    description:
      "We track your service intervals and alert you when a vehicle is due for maintenance — before it becomes a problem.",
  },
  {
    icon: Shield,
    title: "SLA-Backed Performance",
    description:
      "We work under Service Level Agreements to ensure consistent quality across every terminal and every visit.",
  },
];

const fleetSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fleet Detailing",
  description:
    "Professional fleet detailing and compliance-first maintenance in Bozeman, MT. DOT inspection readiness, recurring maintenance programs, and fleet ceramic coating.",
  provider: {
    "@type": "LocalBusiness",
    name: "Velocity Car Detailing",
    url: "https://www.velocitydetailingmt.com",
    telephone: "+16124345327",
    areaServed: "Bozeman, MT",
  },
  url: "https://www.velocitydetailingmt.com/fleet-detailing-bozeman-mt",
};

const FleetDetailing = () => {
  useSEO({
    title: "Fleet Detailing Bozeman MT | Velocity Car Detailing",
    description:
      "Compliance-first fleet detailing in Bozeman, MT. DOT inspection readiness, CSA score protection, recurring maintenance programs, and zero-downtime scheduling.",
    canonical: "/fleet-detailing-bozeman-mt",
    jsonLd: fleetSchema,
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative min-h-[72vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={fleetDetailImg}
              alt="Professional fleet detailing and DOT compliance maintenance in Bozeman MT"
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
                <span
                  className="w-1.5 h-1.5 rounded-full bg-primary"
                  style={{ animation: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
                />
                Fleet Optimization & Compliance
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Professional <span className="text-gradient-blue">Fleet Detailing</span>
              </h1>
              <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg">
                Protecting your assets, securing your CSA scores, and ensuring your brand stays Road-Ready 365 days a year.
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
                <a href="#tiers" className="btn-outline-blue inline-flex items-center gap-2 text-lg">
                  View Services
                  <ChevronRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Operational Standard Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="max-w-3xl mb-14">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                The Operational Standard
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why "Just a Wash" <span className="text-gradient-blue">Isn't Enough</span>
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Most detailers focus on how a truck looks. We focus on how your business performs. A dirty fleet isn't just an eyesore — it's a liability that impacts driver morale, fuel efficiency, and regulatory compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {operationalStandards.map((item, i) => (
                <div key={i} className="glass-card p-8 card-hover">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Edge Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                  The Compliance Edge
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Reducing DOT <span className="text-gradient-blue">Intervention</span>
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  We specialize in "Inspection-Ready" detailing. We understand that a failed roadside inspection costs more than just a fine — it costs time.
                </p>
              </div>
              <div className="space-y-0 divide-y divide-border/50">
                {complianceItems.map((item, i) => (
                  <div key={i} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full gradient-blue flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{item.title}</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Zero Downtime Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                Zero Downtime
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Engineered for <span className="text-gradient-blue">Your Operation</span>
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                If your wheels aren't turning, you aren't earning. Our service is designed to integrate into your existing logistics without friction.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {downtimeItems.map((item, i) => (
                <div key={i} className="glass-card p-8 text-center card-hover">
                  <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Tiers */}
        <section id="tiers" className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="text-center mb-14">
              <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                Professional Service Tiers
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                Built for <span className="text-gradient-blue">Every Fleet Need</span>
              </h2>
              <p className="text-foreground/60 mt-4 max-w-2xl mx-auto text-lg">
                All pricing is custom-quoted based on vehicle count, type, and service frequency. Contact us for a fast, transparent estimate.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {tiers.map((tier) => (
                <div
                  key={tier.number}
                  className={`glass-card p-8 card-hover relative overflow-hidden flex flex-col ${
                    tier.featured
                      ? "border border-primary/40 shadow-[0_0_40px_hsl(170_66%_47%/0.12)]"
                      : ""
                  }`}
                >
                  {tier.featured && (
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
                    {tier.number}
                  </span>
                  <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">{tier.tier}</p>
                  <h3 className="text-xl font-bold mb-1">{tier.title}</h3>
                  <p className="text-foreground/50 text-sm italic mb-6">Focus: {tier.focus}</p>
                  <ul className="space-y-3 mb-8 flex-1">
                    {tier.features.map((feature, i) => (
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

        {/* Systemized Management Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                  Systemized Management
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  The "Set It and <span className="text-gradient-blue">Forget It"</span> Model
                </h2>
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Stop chasing vendors. We provide a consolidated billing and scheduling system that handles the details for you.
                </p>
              </div>
              <div className="space-y-6">
                {systemItems.map((item, i) => (
                  <div key={i} className="glass-card p-6 card-hover flex items-start gap-5">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-foreground/60 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DetailPro Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto">
            <div className="glass-card p-10 lg:p-14 border border-primary/20 shadow-[0_0_40px_hsl(170_66%_47%/0.08)]">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <p className="text-primary font-semibold uppercase tracking-wider mb-4 text-sm">
                    Powered by Technology
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Fleet Management Made <span className="text-gradient-blue">Simple</span>
                  </h2>
                  <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                    Velocity uses DetailPro — a professional detailing software with dedicated fleet management tools. As a fleet owner, you get direct access to your service history, invoices, scheduling, and vehicle records all in one place.
                  </p>
                  <p className="text-lg text-foreground/70 leading-relaxed">
                    No more back-and-forth emails or lost paperwork. Everything your fleet operation needs is tracked, documented, and accessible from day one.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <a
                    href="https://detailpro.tech"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:opacity-80 transition-opacity duration-300"
                  >
                    <img
                      src={detailProLogo}
                      alt="DetailPro fleet management software"
                      className="max-w-xs w-full"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-background" />
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
              Let's Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8">
              Ready to Elevate <span className="text-gradient-blue">Your Fleet?</span>
            </h2>
            <p className="text-foreground/60 text-lg mb-10 max-w-xl mx-auto">
              Fleet pricing is custom-quoted based on vehicle count and service needs. Reach out and we'll get back to you fast.
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

export default FleetDetailing;
