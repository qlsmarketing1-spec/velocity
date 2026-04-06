import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import type { Options } from '@contentful/rich-text-react-renderer';
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import { getPostBySlug, getAllSlugs, getFeaturedImageUrl } from '@/src/lib/contentful';
import Link from 'next/link';

export const revalidate = 3600;

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};

  const title = (post.fields.metaTitle ?? post.fields.title) as string;
  const description = (post.fields.metaDescription ?? post.fields.excerpt) as string;
  const imageUrl = getFeaturedImageUrl(post.fields.featuredImage);
  const url = `https://www.velocitydetailingmt.com/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      images: imageUrl ? [{ url: imageUrl }] : [],
      type: 'article',
      publishedTime: post.fields.publishedDate as string,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : [],
    },
  };
}

const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <strong className="font-semibold text-foreground">{text}</strong>,
    [MARKS.ITALIC]: (text) => <em>{text}</em>,
    [MARKS.CODE]: (text) => (
      <code className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{text}</code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mb-5 text-foreground/80 leading-relaxed">{children}</p>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-2xl font-bold mt-10 mb-4 text-foreground">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-xl font-semibold mt-8 mb-3 text-foreground">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="text-lg font-semibold mt-6 mb-2 text-foreground">{children}</h4>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc list-inside mb-5 space-y-1 text-foreground/80">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="list-decimal list-inside mb-5 space-y-1 text-foreground/80">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <li>{children}</li>,
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="border-l-4 border-primary pl-5 italic text-foreground/60 my-6">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="border-border my-8" />,
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const url = getFeaturedImageUrl(node.data.target);
      const alt = node.data.target?.fields?.title ?? '';
      if (!url) return null;
      return (
        <img
          src={url}
          alt={alt}
          className="rounded-xl w-full my-8 object-cover"
        />
      );
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline underline-offset-2 hover:opacity-80 transition-opacity"
      >
        {children}
      </a>
    ),
  },
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const title = post.fields.title as string;
  const publishedDate = post.fields.publishedDate as string;
  const imageUrl = getFeaturedImageUrl(post.fields.featuredImage);
  const url = `https://www.velocitydetailingmt.com/blog/${slug}`;

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: post.fields.excerpt as string,
    image: imageUrl ?? undefined,
    datePublished: publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Velocity Car Detailing',
      url: 'https://www.velocitydetailingmt.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Velocity Car Detailing',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.velocitydetailingmt.com/logo.png',
      },
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="min-h-screen bg-background pt-28 pb-20">
        <div className="container mx-auto px-6 md:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-sm text-foreground/50 hover:text-primary transition-colors mb-10"
            >
              ← Back to Blog
            </Link>

            {publishedDate && (
              <time
                dateTime={publishedDate}
                className="block text-xs text-foreground/40 uppercase tracking-wide mb-4"
              >
                {new Date(publishedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            )}

            <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">{title}</h1>

            {imageUrl && (
              <img
                src={imageUrl}
                alt={title}
                className="w-full rounded-xl mb-10 aspect-[16/9] object-cover"
              />
            )}

            <article className="prose-sm max-w-none">
              {documentToReactComponents(post.fields.body as Parameters<typeof documentToReactComponents>[0], richTextOptions)}
            </article>

            <div className="mt-14 pt-8 border-t border-border">
              <p className="text-foreground/50 text-sm mb-4">
                Ready for a professional detail?
              </p>
              <a
                href="https://detailprocrm.com/book/ed56c048-9b45-4d92-90d2-b55ed2ee5936"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary/90 hover:bg-primary text-primary-foreground text-sm px-6 py-3 rounded-lg transition-all duration-300 hover:shadow-[0_4px_20px_-4px_hsl(170_66%_47%/0.4)]"
              >
                Book Now
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
