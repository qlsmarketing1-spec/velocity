import { Phone, Instagram, Facebook, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const locations = [
    { label: "Bozeman, MT", href: "/car-detailing-bozeman-mt" },
    { label: "Belgrade, MT", href: "/car-detailing-belgrade-mt" },
    { label: "Four Corners, MT", href: "/car-detailing-four-corners-mt" },
    { label: "Big Sky, MT", href: "/car-detailing-big-sky-mt" },
    { label: "Gallatin County, MT", href: "/car-detailing-gallatin-county-mt" },
  ] as const;

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/velocitydetailingmt?igsh=MTFjOWJvbDV2b3d0bg%3D%3D&", label: "Instagram" },
    { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61589017723415", label: "Facebook" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCBDHuXbakJ-K_Tn28ucX3Wg", label: "YouTube" },
  ];

  const hours = [
    { day: "Sunday - Friday", time: "8am — 6pm" },
    { day: "Saturday", time: "Closed" },
  ];

  return (
    <footer className="bg-background py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img src="/logo.png" alt="Velocity Car Detailing" className="h-10 w-auto" />
            </a>
            <p className="text-foreground/60 mb-6">
              Professional mobile car detailing services throughout the Bozeman area.
            </p>
            <a href="tel:+16124345327" className="flex items-center gap-2 text-primary font-medium">
              <Phone size={18} />
              <span className="italic">(612) 434-5327</span>
            </a>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {[
                { href: '/car-detailing-bozeman-mt', label: 'Car Detailing' },
                { href: '/ceramic-coating-bozeman-mt', label: 'Ceramic Coating' },
                { href: '/boat-detailing-bozeman-mt', label: 'Boat Detailing' },
                { href: '/fleet-detailing-bozeman-mt', label: 'Fleet Detailing' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-wider">Locations Served</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {locations.map((location, index) => (
                <li key={index}>
                  <Link href={location.href} className="text-sm text-foreground/60 hover:text-primary transition-colors duration-200">
                    {location.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-wider">Hours</h4>
            <ul className="space-y-2">
              {hours.map((item, index) => (
                <li key={index} className="text-sm text-foreground/60">
                  <span className="font-medium text-foreground">{item.day}:</span> {item.time}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 mt-4">By appointment only</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-wider">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground/60 hover:text-primary hover:bg-muted/80 transition-colors"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
            <a
              href="https://share.google/3ED0ImSWFoQ7QAD1F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-sm text-primary hover:underline"
            >
              See our Google Reviews →
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-foreground/50">
              © {new Date().getFullYear()} Velocity Car Detailing. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-foreground/50">
            </div>
          </div>
          <p className="text-xs text-foreground/40 text-center mt-6">
            Bookings outside of our service range (30 min away) may incur additional charges.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="text-xs text-foreground/40">powered by</span>
            <a
              href="https://www.detailpro.tech"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="DetailPro"
              className="opacity-100 hover:opacity-80 transition-opacity duration-200"
            >
              <img src="/detailpro-logo.svg" alt="DetailPro" className="h-12 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
