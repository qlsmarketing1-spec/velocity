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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/98 backdrop-blur-xl shadow-[0_1px_0_0_hsl(0_0%_100%/0.05)] py-4'
          : 'bg-gradient-to-b from-background/80 to-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-md bg-foreground/5 flex items-center justify-center overflow-hidden transition-colors duration-300 group-hover:bg-foreground/10">
              {/* Replace this div with: <img src={yourLogo} alt="Company Logo" className="w-full h-full object-contain" /> */}
              <ImageIcon className="w-4 h-4 text-foreground/30" />
            </div>
            <span 
              className="text-lg md:text-xl text-foreground/90 transition-colors duration-300 group-hover:text-foreground"
              style={{ fontWeight: 500, letterSpacing: '0.02em' }}
            >
              [YOUR <span className="text-primary/90">COMPANY]</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="text-sm text-foreground/60 hover:text-foreground/95 transition-all duration-300 tracking-wide"
                style={{ fontWeight: 400 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-6">
            <a
              href="tel:[yourphone]"
              className="hidden md:flex items-center gap-2 text-foreground/50 hover:text-foreground/80 transition-colors duration-300"
              style={{ fontWeight: 400 }}
            >
              <Phone size={14} className="opacity-60" />
              <span className="text-sm">[Your Phone]</span>
            </a>
            <Link
              to="/contact"
              className="hidden sm:block bg-primary/90 hover:bg-primary text-primary-foreground text-sm px-5 py-2.5 rounded-lg transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(210_100%_50%/0.4)]"
              style={{ fontWeight: 500 }}
            >
              Book Now
            </Link>

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
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/60 hover:text-foreground/95 transition-colors duration-300 py-3 tracking-wide"
                  style={{ fontWeight: 400 }}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:[yourphone]"
                className="flex items-center gap-2 text-foreground/50 hover:text-foreground/80 transition-colors duration-300 py-3"
                style={{ fontWeight: 400 }}
              >
                <Phone size={14} className="opacity-60" />
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
