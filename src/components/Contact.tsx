import { Phone, Mail, Clock, MapPin, Check } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "[Your Phone]",
      href: "tel:[yourphone]",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@[yourcompany].com",
      href: "mailto:info@[yourcompany].com",
    },
    {
      icon: Clock,
      label: "Hours",
      value: "Daily 8am - 8pm",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "[Your City] Metro",
    },
  ];

  const trustBadges = ["5 Star Rated", "#1 Detailer in [Your City]", "Passionate Team", "Licensed & Insured"];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready for a showroom shine? Contact us today to schedule your mobile detailing service.
          </p>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-16">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base text-foreground/80">{badge}</span>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* DetailPro Contact Form Placeholder */}
          <div className="glass-card p-6 lg:p-8">
            <div className="flex flex-col items-center justify-center min-h-[400px] text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 mb-6 flex items-center justify-center">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">DetailPro Contact Form</h3>
              <p className="text-foreground/60 mb-6 max-w-sm">
                Paste your DetailPro embed code here to display your contact form.
              </p>
              <div className="w-full p-4 rounded-lg border-2 border-dashed border-border bg-background/50">
                <code className="text-sm text-foreground/50">{/* Insert DetailPro embed code here */}</code>
                <p className="text-xs text-foreground/40 mt-2">[DetailPro Embed Code Placeholder]</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="glass-card p-5 card-hover">
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-foreground/60 mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-semibold text-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Book Online CTA */}
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Prefer to Book Online?</h3>
              <p className="text-foreground/70 mb-6">
                Schedule your appointment instantly through our online booking system.
              </p>
              <a
                href="https://app.urable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-blue inline-block"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>

        {/* TrustIndex Placeholder */}
        <div className="mt-16">
          <div className="glass-card p-8 text-center">
            <h3 className="text-xl font-bold mb-3">Customer Reviews</h3>
            <p className="text-foreground/60 mb-6">
              Paste your TrustIndex embed code here to display customer reviews.
            </p>
            <div className="w-full p-6 rounded-lg border-2 border-dashed border-border bg-background/50">
              <code className="text-sm text-foreground/50">{/* Insert TrustIndex embed code here */}</code>
              <p className="text-xs text-foreground/40 mt-2">[TrustIndex Embed Code Placeholder]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
