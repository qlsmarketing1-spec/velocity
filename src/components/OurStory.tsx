const OurStory = () => {
  return (
    <section id="our-story" className="section-padding bg-card">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Our <span className="text-gradient-blue">Story</span>
            </h2>
          </div>

          {/* Story Content */}
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
            <p>
              [Your Company] was founded with a simple mission: to provide exceptional car detailing services that save our customers time without compromising on quality. What started as a passion for automotive care has grown into a trusted mobile detailing service that the [Your City] community relies on.
            </p>
            
            <p>
              Our founder recognized that busy professionals and families needed a better solution than spending hours at traditional car washes. By bringing our premium services directly to homes and offices, we've made it easier than ever to maintain a showroom-quality vehicle.
            </p>
            
            <p>
              Today, our team of certified detailers continues to uphold the same values that built our reputation: meticulous attention to detail, premium products, and customer service that goes above and beyond. Every vehicle we touch receives the care and expertise it deserves.
            </p>

            <p>
              We're proud to be a part of the [Your City] community and look forward to helping you keep your vehicle looking its absolute best.
            </p>
          </div>

          {/* Stats or Values */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-border">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">[X]+</p>
              <p className="text-sm text-foreground/60 uppercase tracking-wide">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">[X]+</p>
              <p className="text-sm text-foreground/60 uppercase tracking-wide">Cars Detailed</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">5.0</p>
              <p className="text-sm text-foreground/60 uppercase tracking-wide">Google Rating</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary mb-2">100%</p>
              <p className="text-sm text-foreground/60 uppercase tracking-wide">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
