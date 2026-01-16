import { useState } from 'react';
import { Phone, Mail, Clock, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '[Your Phone]',
      href: 'tel:[yourphone]',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'info@[yourcompany].com',
      href: 'mailto:info@[yourcompany].com',
    },
    {
      icon: Clock,
      label: 'Hours',
      value: 'Daily 8am - 8pm',
    },
    {
      icon: MapPin,
      label: 'Service Area',
      value: '[Your City] Metro',
    },
  ];

  return (
    <section id="contact" className="section-padding bg-card">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Get In <span className="text-gradient-blue">Touch</span>
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Ready for a showroom shine? Contact us today to schedule your mobile detailing service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="glass-card p-6 lg:p-8">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full gradient-blue mx-auto mb-4 flex items-center justify-center">
                  <Send className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-foreground/70">
                  We've received your message and will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                      placeholder="[Your Phone]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="interior">Interior Detailing</option>
                    <option value="exterior">Exterior Detailing</option>
                    <option value="ceramic">Ceramic Coating</option>
                    <option value="full">Full Detail Package</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                    placeholder="Tell us about your vehicle and any specific needs..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-blue w-full flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="glass-card p-5 card-hover"
                >
                  <item.icon className="w-6 h-6 text-primary mb-3" />
                  <p className="text-sm text-foreground/60 mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-semibold text-foreground">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Book Online CTA */}
            <div className="glass-card p-8 text-center">
              <h3 className="text-2xl font-bold mb-3">Prefer to Book Online?</h3>
              <p className="text-foreground/70 mb-6">
                Schedule your appointment instantly through our online booking system.
              </p>
              <a
                href="https://app.urable.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-blue inline-block"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
