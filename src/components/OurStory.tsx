import ourStoryImage from '@/assets/our-story.jpg';

const OurStory = () => {
  return (
    <section id="our-story" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content - Left side, right-aligned */}
          <div className="text-right order-2 lg:order-1">
            {/* Header */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              Our <span className="text-gradient-blue">Story</span>
            </h2>

            {/* Story Content */}
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                [Your Company] was founded with a simple mission: to provide exceptional car detailing services that save our customers time without compromising on quality. What started as a passion for automotive care has grown into a trusted mobile detailing service that the [Your City] community relies on.
              </p>
              
              <p>
                Our founder recognized that busy professionals and families needed a better solution than spending hours at traditional car washes. By bringing our premium services directly to homes and offices, we've made it easier than ever to maintain a showroom-quality vehicle.
              </p>
              
              <p>
                Today, our team of certified detailers continues to uphold the same values that built our reputation: meticulous attention to detail, premium products, and customer service that goes above and beyond.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-border">
              <div className="text-center md:text-right">
                <p className="text-3xl font-bold text-primary mb-1">[X]+</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Years</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-bold text-primary mb-1">[X]+</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Cars</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-bold text-primary mb-1">5.0</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Rating</p>
              </div>
              <div className="text-center md:text-right">
                <p className="text-3xl font-bold text-primary mb-1">100%</p>
                <p className="text-xs text-foreground/60 uppercase tracking-wide">Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Image - Right side */}
          <div className="order-1 lg:order-2">
            <div className="aspect-square overflow-hidden rounded-2xl">
              <img
                src={ourStoryImage}
                alt="Professional car detailer at work"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
