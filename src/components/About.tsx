import interiorImage from '@/assets/interior-detail.jpg';
import exteriorImage from '@/assets/exterior-detail.jpg';
import ceramicImage from '@/assets/ceramic-coating.jpg';
import polishingImage from '@/assets/polishing.jpg';

const About = () => {
  const images = [interiorImage, exteriorImage, ceramicImage, polishingImage];

  return (
    <section id="about" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient-gold">We Got You</span>
            </h2>
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
              At Shine Squad, we understand that your vehicle is more than just transportation—it's an extension of your lifestyle. Our expert team brings years of professional detailing experience directly to your location.
            </p>
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Using only premium products and cutting-edge techniques, we restore your vehicle to showroom condition. From thorough interior deep cleans to paint correction and ceramic coating, we've got you covered.
            </p>
            <a href="#contact" className="btn-gold inline-block">
              Contact Us
            </a>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-3">
            {images.map((img, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl card-hover"
              >
                <img
                  src={img}
                  alt={`Detailing work ${index + 1}`}
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
