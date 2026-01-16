import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding bg-card">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-gradient-blue">Blog</span>
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Tips, tricks, and insights from our detailing experts.
            </p>
          </div>
        </section>

        {/* Content Placeholder */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="glass-card p-8 lg:p-12 text-center">
              <h2 className="text-2xl font-bold mb-4">Latest Articles</h2>
              <p className="text-foreground/60 mb-6">
                Add your blog posts and articles here.
              </p>
              <div className="w-full p-6 rounded-lg border-2 border-dashed border-border bg-background/50">
                <p className="text-foreground/40">[Blog Content Placeholder]</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
