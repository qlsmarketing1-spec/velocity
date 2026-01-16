import { ArrowRight, Phone } from 'lucide-react';
import heroImage from '@/assets/hero-bg.jpg';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-8 pt-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight animate-fade-up">
            <span className="text-foreground">[Your City]</span>
            <br />
            <span className="text-gradient-blue">Car Detailing</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl animate-fade-up delay-100">
            Your time is valuable. That's why [Your Company] brings professional detailing services right to your doorstep.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 animate-fade-up delay-200">
            <a href="#contact" className="btn-blue flex items-center gap-2 text-lg">
              Book Online
              <ArrowRight size={20} />
            </a>
            <a
              href="tel:6515093631"
              className="btn-outline-blue flex items-center gap-2 text-lg"
            >
              <Phone size={20} />
              Call Now
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 flex flex-wrap items-center gap-6 animate-fade-up delay-300">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-foreground/70 text-sm">5.0 on Google</span>
            </div>
            <div className="h-4 w-px bg-foreground/20" />
            <span className="text-foreground/70 text-sm">Mobile Service</span>
            <div className="h-4 w-px bg-foreground/20" />
            <span className="text-foreground/70 text-sm">100% Satisfaction</span>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
