import heroBg from '@/src/assets/hero-bg.jpg';
import about2 from '@/src/assets/about-2.jpg';
import about3 from '@/src/assets/about-3.jpg';
import about4 from '@/src/assets/about-4.jpg';

const aboutImages = [
  { src: heroBg.src, alt: 'Professional car detailing in Bozeman, MT by Velocity Car Detailing', position: 'object-center' },
  { src: about2.src, alt: 'Professional car detailing close-up', position: 'object-center' },
  { src: about3.src, alt: 'Velocity Car Detailing team at work', position: 'object-center' },
  { src: about4.src, alt: 'Premium auto detailing in Bozeman MT', position: 'object-center' },
];

const About = () => {

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-blue">We Got You</span>
            </h2>
            <div className="space-y-6 mb-8">
              <div>
                <p className="text-base font-semibold text-foreground uppercase tracking-wide mb-1">We respect your time.</p>
                <p className="text-foreground/70 leading-relaxed">When you book with us, you're not left wondering when we'll show—we communicate with you from the moment you book, and arrive early, ready, and fully prepared so your day stays on track.</p>
              </div>
              <div>
                <p className="text-base font-semibold text-foreground uppercase tracking-wide mb-1">We tailor everything to you.</p>
                <p className="text-foreground/70 leading-relaxed">No cookie-cutter packages. We listen, recommend what actually makes sense for your car, and deliver results that match (and usually exceed) what you had in mind.</p>
              </div>
              <div>
                <p className="text-base font-semibold text-foreground uppercase tracking-wide mb-1">We leave it better—every time.</p>
                <p className="text-foreground/70 leading-relaxed">With years of experience we clean, restore, and protect your vehicle to not only make it look better, but preserve its value.</p>
              </div>
            </div>
            <a href="#contact" className="btn-blue inline-block">
              Contact Us
            </a>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            {aboutImages.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl card-hover"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full h-full object-cover ${img.position}`}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
