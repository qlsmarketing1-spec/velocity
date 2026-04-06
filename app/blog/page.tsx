import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import { getAllPosts, getFeaturedImageUrl } from '@/src/lib/contentful';

export const metadata: Metadata = {
  title: 'Car Detailing Blog | Tips & Advice | Velocity Detailing Bozeman',
  description: 'Expert car detailing tips, ceramic coating guides, and detailing advice from Velocity Car Detailing in Bozeman, MT.',
  alternates: { canonical: 'https://www.velocitydetailingmt.com/blog' },
  openGraph: {
    title: 'Car Detailing Blog | Velocity Detailing Bozeman',
    description: 'Expert car detailing tips, ceramic coating guides, and detailing advice from Velocity Car Detailing in Bozeman, MT.',
    url: 'https://www.velocitydetailingmt.com/blog',
  },
};

export const revalidate = 3600;

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-3xl mb-14">
            <p className="text-primary text-sm uppercase tracking-widest mb-3">Blog</p>
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Detailing Tips & Advice
            </h1>
            <p className="text-foreground/60 text-lg">
              Expert insights on car care, ceramic coatings, and keeping your vehicle looking its best in Bozeman.
            </p>
          </div>

          {posts.length === 0 ? (
            <p className="text-foreground/50">No posts yet — check back soon.</p>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => {
                const imageUrl = getFeaturedImageUrl(post.fields.featuredImage);
                const slug = post.fields.slug as string;
                const title = post.fields.title as string;
                const excerpt = post.fields.excerpt as string;
                const publishedDate = post.fields.publishedDate as string;

                return (
                  <Link
                    key={post.sys.id}
                    href={`/blog/${slug}`}
                    className="group flex flex-col bg-muted/30 border border-border rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
                  >
                    {imageUrl && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={imageUrl}
                          alt={title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="flex flex-col flex-1 p-6">
                      {publishedDate && (
                        <time
                          dateTime={publishedDate}
                          className="text-xs text-foreground/40 uppercase tracking-wide mb-3"
                        >
                          {new Date(publishedDate).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          })}
                        </time>
                      )}
                      <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors duration-200">
                        {title}
                      </h2>
                      {excerpt && (
                        <p className="text-sm text-foreground/60 line-clamp-3 flex-1">{excerpt}</p>
                      )}
                      <span className="mt-4 text-sm text-primary font-medium">
                        Read more →
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
