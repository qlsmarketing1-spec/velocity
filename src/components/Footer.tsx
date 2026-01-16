import { Phone, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const locations = [
    'Eden Prairie, MN',
    'Chanhassen, MN',
    'Minnetonka, MN',
    'Wayzata, MN',
    'Excelsior, MN',
    'Shorewood, MN',
    'Victoria, MN',
    'Orono, MN',
    'Plymouth, MN',
    'Hopkins, MN',
    'Minneapolis, MN',
    'Edina, MN',
  ];

  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/[yourcompany]/', label: 'Instagram' },
    { icon: Facebook, href: 'https://www.facebook.com/[yourcompany]', label: 'Facebook' },
    { icon: Youtube, href: 'http://www.youtube.com/@[YourCompany]', label: 'YouTube' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/[your-company]', label: 'LinkedIn' },
  ];

  const hours = [
    { day: 'Sunday - Saturday', time: '8am — 8pm' },
  ];

  return (
    <footer className="bg-background py-16 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center">
                <span className="font-display font-bold text-lg text-primary-foreground">YC</span>
              </div>
              <span className="font-display text-xl tracking-wider">
                [YOUR <span className="text-primary">COMPANY]</span>
              </span>
            </a>
            <p className="text-foreground/60 mb-6">
              Professional mobile car detailing services throughout the [Your City] metro area.
            </p>
            <a
              href="tel:6515093631"
              className="flex items-center gap-2 text-primary font-medium"
            >
              <Phone size={18} />
              <span>(651) 509-3631</span>
            </a>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-wider">
              Locations Served
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {locations.slice(0, 8).map((location, index) => (
                <li key={index} className="text-sm text-foreground/60">
                  {location}
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
                  <span className="font-medium text-foreground">{item.day}:</span>{' '}
                  {item.time}
                </li>
              ))}
            </ul>
            <p className="text-sm text-foreground/60 mt-4">By appointment only</p>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-lg mb-6 uppercase tracking-wider">
              Follow Us
            </h4>
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
              href="https://g.co/kgs/8uE7T3h"
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
              © {new Date().getFullYear()} [Your Company]. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-foreground/50">
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
          <p className="text-xs text-foreground/40 text-center mt-6">
            Bookings outside of our service range (30 min away) may incur additional charges.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
