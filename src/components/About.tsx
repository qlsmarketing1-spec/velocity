import about1 from '@/src/assets/about-1.jpg';
import about2 from '@/src/assets/about-2.jpg';
import about3 from '@/src/assets/about-3.jpg';
import about4 from '@/src/assets/about-4.jpg';

const aboutImages = [
  { src: about1.src, alt: 'Velocity detailer cleaning car windshield' },
  { src: about2.src, alt: 'Professional car detailing close-up' },
  { src: about3.src, alt: 'Velocity Car Detailing team at work' },
  { src: about4.src, alt: 'Premium auto detailing in Bozeman MT' },
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
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              At Velocity Car Detailing, we understand that your vehicle is more than just transportation—it's an extension of your lifestyle. Our expert team brings years of professional detailing experience directly to your location.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Using only premium products and cutting-edge techniques, we restore your vehicle to showroom condition. From thorough interior deep cleans to paint correction and ceramic coating, we've got you covered.
            </p>
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
                  className="w-full h-full object-cover"
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
