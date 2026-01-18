import { useState, useEffect } from 'react';
import { Menu, X, Phone, ImageIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    { href: '/car-detailing-[your-city]-[state]', label: 'Car Detailing' },
    { href: '/ceramic-coating-[your-city]-[state]', label: 'Ceramic Coating' },
    { href: '/contact', label: 'Contact' },
    { href: '/blog', label: 'Blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center border border-border overflow-hidden">
              {/* Replace this div with: <img src={yourLogo} alt="Company Logo" className="w-full h-full object-contain" /> */}
              <ImageIcon className="w-5 h-5 text-foreground/40" />
            </div>
            <span className="font-display text-xl md:text-2xl tracking-wider text-foreground">
              [YOUR <span className="text-primary">COMPANY]</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-200 uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-4">
            <a
              href="tel:[yourphone]"
              className="hidden md:flex items-center gap-2 text-primary font-medium"
            >
              <Phone size={18} />
              <span>[Your Phone]</span>
            </a>
            <Link
              to="/contact"
              className="hidden sm:block btn-blue text-sm"
            >
              Book Now
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-primary transition-colors py-2 uppercase tracking-wide font-medium"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:[yourphone]"
                className="flex items-center gap-2 text-primary font-medium py-2"
              >
                <Phone size={18} />
                <span>[Your Phone]</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
