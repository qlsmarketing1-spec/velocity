import { ArrowRight, Check } from "lucide-react";

const FORM_URL = "https://detailprocrm.com/form/3efeeb6b-6094-47cd-98ba-01ae1dbc0ba9";

const Contact = () => {
  const trustBadges = ["5 Star Rated", "#1 Detailer in Bozeman", "Passionate Team", "Licensed & Insured"];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Get In <span className="text-gradient-blue">Touch</span>
        </h2>
        <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-10">
          Ready for a showroom shine? Fill out our quick contact form and we'll get back to you fast.
        </p>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-blue inline-flex items-center gap-2 text-lg mb-16"
        >
          Contact Us
          <ArrowRight size={20} />
        </a>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {trustBadges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2">
              <Check className="w-5 h-5 text-primary" />
              <span className="text-sm md:text-base text-foreground/80">{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
