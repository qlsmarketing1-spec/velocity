'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Link from 'next/link';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/car-detailing-bozeman-mt', label: 'Car Detailing' },
    { href: '/ceramic-coating-bozeman-mt', label: 'Ceramic Coating' },
    { href: '/boat-detailing-bozeman-mt', label: 'Boat Detailing' },
    { href: '/fleet-detailing-bozeman-mt', label: 'Fleet' },
    { href: 'https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9', label: 'Contact', external: true },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/98 backdrop-blur-xl shadow-[0_1px_0_0_hsl(0_0%_100%/0.05)] py-4'
          : 'bg-gradient-to-b from-background/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Velocity Car Detailing"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground/60 hover:text-foreground/95 transition-all duration-300 tracking-wide"
                  style={{ fontWeight: 400 }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-foreground/60 hover:text-foreground/95 transition-all duration-300 tracking-wide"
                  style={{ fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-6">
            <a
              href="tel:+16124345327"
              className="hidden md:flex items-center gap-2 text-foreground/50 hover:text-foreground/80 transition-colors duration-300"
              style={{ fontWeight: 400 }}
            >
              <Phone size={14} className="opacity-60" />
              <span className="text-sm">(612) 434-5327</span>
            </a>
            <a
              href="https://detailprocrm.com/book/ed56c048-9b45-4d92-90d2-b55ed2ee5936"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:block bg-primary/90 hover:bg-primary text-primary-foreground text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(170_66%_47%/0.4)]"
              style={{ fontWeight: 500 }}
            >
              Book Now
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground/70 hover:text-foreground transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-6 pb-6 animate-fade-in border-t border-foreground/5 pt-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/60 hover:text-foreground/95 transition-colors duration-300 py-3 tracking-wide"
                    style={{ fontWeight: 400 }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-foreground/60 hover:text-foreground/95 transition-colors duration-300 py-3 tracking-wide"
                    style={{ fontWeight: 400 }}
                  >
                    {link.label}
                  </Link>
                )
              ))}
              <a
                href="tel:+16124345327"
                className="flex items-center gap-2 text-foreground/50 hover:text-foreground/80 transition-colors duration-300 py-3"
                style={{ fontWeight: 400 }}
              >
                <Phone size={14} className="opacity-60" />
                <span>(612) 434-5327</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
