import { createClient } from 'contentful';
import type { EntryFieldTypes, Asset } from 'contentful';

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export interface BlogPostSkeleton {
  contentTypeId: 'blogPost';
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    body: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.AssetLink;
    publishedDate: EntryFieldTypes.Date;
    metaTitle: EntryFieldTypes.Text;
    metaDescription: EntryFieldTypes.Text;
  };
}

export async function getAllPosts() {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-fields.publishedDate'],
  });
  return entries.items;
}

export async function getPostBySlug(slug: string) {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  });
  return entries.items[0] ?? null;
}

export async function getAllSlugs() {
  const entries = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    select: ['fields.slug'],
  });
  return entries.items.map((item) => item.fields.slug as string);
}

export function getFeaturedImageUrl(image: unknown): string | null {
  const asset = image as Asset | undefined;
  if (!asset?.fields?.file) return null;
  const file = asset.fields.file as { url?: string };
  return file.url ? `https:${file.url}` : null;
}
