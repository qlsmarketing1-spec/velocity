import Header from '@/components/Header';
import Footer from '@/components/Footer';

const CeramicCoating = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Premium <span className="text-gradient-blue">Ceramic Coating</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Protect your vehicle with our professional-grade ceramic coating services.
            </p>
          </div>
        </section>

        {/* Content Placeholder */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="glass-card p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Ceramic Coating Services</h2>
              <p className="text-foreground/60 mb-6">
                Add your ceramic coating packages, benefits, and pricing information here.
              </p>
              <div className="w-full p-6 rounded-lg border-2 border-dashed border-border bg-background/50">
                <p className="text-foreground/40">[Ceramic Coating Content Placeholder]</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CeramicCoating;
