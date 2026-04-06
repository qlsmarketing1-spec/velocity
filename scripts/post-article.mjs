/**
 * Publishes a blog article to Contentful including images.
 * Usage: node scripts/post-article.mjs
 * Requires CONTENTFUL_MANAGEMENT_TOKEN in .env.local
 */

import { createClient } from 'contentful-management';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── Load .env.local ──────────────────────────────────────────────────────────
const envPath = path.join(__dirname, '..', '.env.local');
const envVars = Object.fromEntries(
  fs.readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => { const i = l.indexOf('='); return [l.slice(0, i).trim(), l.slice(i + 1).trim()]; })
);

const SPACE_ID = envVars.CONTENTFUL_SPACE_ID;
const MGMT_TOKEN = envVars.CONTENTFUL_MANAGEMENT_TOKEN;

if (!MGMT_TOKEN) {
  console.error('❌  CONTENTFUL_MANAGEMENT_TOKEN not found in .env.local');
  process.exit(1);
}

const PHOTOS = path.join(__dirname, '..', 'Photography');

// ── Rich text helpers ────────────────────────────────────────────────────────
const t = (value, ...marks) => ({ nodeType: 'text', value, marks: marks.map(type => ({ type })), data: {} });
const p = (...content) => ({ nodeType: 'paragraph', data: {}, content });
const h2 = (value) => ({ nodeType: 'heading-2', data: {}, content: [t(value)] });
const h3 = (value) => ({ nodeType: 'heading-3', data: {}, content: [t(value)] });
const ul = (...items) => ({
  nodeType: 'unordered-list', data: {},
  content: items.map(item => ({ nodeType: 'list-item', data: {}, content: [p(t(item))] })),
});
const link = (uri, label) => ({ nodeType: 'hyperlink', data: { uri }, content: [t(label)] });
const asset = (id) => ({ nodeType: 'embedded-asset-block', data: { target: { sys: { id, type: 'Link', linkType: 'Asset' } } }, content: [] });

// ── Upload image + publish ───────────────────────────────────────────────────
async function uploadImage(env, filePath, title, description) {
  console.log(`  Uploading: ${path.basename(filePath)}`);
  const buffer = fs.readFileSync(filePath);
  const ext = path.extname(filePath).slice(1).toLowerCase();
  const mime = ext === 'png' ? 'image/png' : 'image/jpeg';

  const upload = await env.createUpload({ file: buffer });

  let assetEntry = await env.createAsset({
    fields: {
      title: { 'en-US': title },
      description: { 'en-US': description },
      file: {
        'en-US': {
          contentType: mime,
          fileName: path.basename(filePath),
          uploadFrom: { sys: { type: 'Link', linkType: 'Upload', id: upload.sys.id } },
        },
      },
    },
  });

  await assetEntry.processForAllLocales();

  // Poll until processed (max 30s)
  for (let i = 0; i < 15; i++) {
    await new Promise(r => setTimeout(r, 2000));
    assetEntry = await env.getAsset(assetEntry.sys.id);
    if (assetEntry.fields?.file?.['en-US']?.url) break;
  }

  const published = await assetEntry.publish();
  console.log(`  ✓ Asset ready: ${published.sys.id}`);
  return published;
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n🚀  Posting article to Contentful...\n');

  const client = createClient({ accessToken: MGMT_TOKEN });
  const space = await client.getSpace(SPACE_ID);
  const env = await space.getEnvironment('master');

  // 1. Upload images
  console.log('📸  Uploading images...');
  const featuredAsset = await uploadImage(
    env,
    path.join(PHOTOS, 'Should_you_do_a_paint_correction_750x.jpg'),
    'Paint correction before and after on a black car',
    'Split view showing swirl marks and scratches on the left vs. polished, flawless paint on the right after professional paint correction in Bozeman, MT'
  );
  const vetteAsset = await uploadImage(
    env,
    path.join(PHOTOS, 'vette-side-view.jpeg'),
    'Velocity Car Detailing technician polishing a white Corvette',
    'A Velocity Car Detailing professional performing paint correction on a white C8 Corvette in Bozeman, Montana'
  );
  const jeepAsset = await uploadImage(
    env,
    path.join(PHOTOS, 'jeep-foam.jpeg'),
    'Mobile car detailing on a Jeep in Bozeman, MT',
    'Velocity Car Detailing mobile service washing a black Jeep with foam soap at a residential driveway in Bozeman, Montana'
  );

  // 2. Build rich text body
  const body = {
    nodeType: 'document',
    data: {},
    content: [
      p(t('If you've ever looked at your car in direct sunlight and noticed a web of fine scratches, swirl marks, or a dull haze where a deep shine used to be, you're looking at paint defects. '
        + 'Paint correction is the professional process that removes them — and for Bozeman drivers dealing with harsh winters, mountain roads, and abrasive car washes, '
        + 'it's one of the most valuable services you can invest in.')),

      h2('What Is Paint Correction?'),
      p(t('Paint correction is a multi-step machine polishing process that removes imperfections from your vehicle's clear coat — the transparent protective layer that sits on top of your color coat. '
        + 'Using a rotary or dual-action polisher and increasingly fine abrasive compounds, a trained technician levels the surface of the clear coat to eliminate scratches, swirl marks, water spots, and oxidation. '
        + 'The result is a mirror-like, factory-fresh finish that no car wash or wax can replicate.')),
      p(t('It's important to understand that paint correction does not add anything to the paint — it removes a microscopic amount of clear coat to bring the rest of the surface to an even level, '
        + 'eliminating the imperfections that scatter light and make your paint look dull.')),

      h2('What Causes Paint Damage on Montana Vehicles?'),
      p(t('Bozeman drivers face conditions that accelerate paint degradation faster than most parts of the country:')),
      ul(
        'Road salt and sand — spread heavily on Bozeman roads from October through March, these materials are abrasive and corrosive to your clear coat.',
        'Automated car washes — the spinning brushes and dirty recycled water at tunnel washes are one of the most common causes of swirl marks.',
        'High-altitude UV exposure — Bozeman sits at roughly 4,800 feet. The thinner atmosphere means more UV radiation reaching your paint, accelerating oxidation and fading.',
        'Debris from mountain driving — gravel roads to Big Sky, Hyalite, and surrounding areas send rocks and debris into your paint regularly.',
        'Bird droppings and tree sap — when left untreated, both are acidic and etch permanently into clear coat within days in summer heat.',
      ),

      h2('Do You Need Paint Correction?'),
      p(t('You likely need paint correction if you notice any of the following:')),
      ul(
        'Swirl marks visible under direct sunlight or a bright light — they look like fine circular scratches across the paint surface.',
        'A dull, chalky, or hazy appearance even after washing and waxing.',
        'Water spots or mineral deposits that won't come off with a normal wash.',
        'Oxidation — a faded, rough-textured surface common on older vehicles or those left in the sun.',
        'Fine scratches from brushes, keys, or contact with other objects.',
      ),
      asset(featuredAsset.sys.id),
      p(t('The image above shows a classic paint correction scenario: the left half of the panel is covered in swirl marks and micro-scratches visible under shop lighting, '
        + 'while the right half has been corrected to a deep, clear reflection. This level of transformation is what professional paint correction delivers.')),

      h2('Single Stage vs. Two Stage Paint Correction'),
      h3('Single Stage Correction'),
      p(t('A single stage correction uses a medium-cut polish and a machine polisher to remove light swirl marks, minor scratches, and surface oxidation. '
        + 'It's the right choice for vehicles that are generally well-maintained but have accumulated light defects over time. '
        + 'Most vehicles driven in Bozeman benefit from a single stage correction every 1–2 years.')),
      h3('Two Stage Correction'),
      p(t('A two stage correction starts with a heavier cutting compound to remove deeper scratches, followed by a finer polish to refine the finish. '
        + 'This is necessary for vehicles with significant damage — deeper scratches, heavy swirling, or paint that has oxidized. '
        + 'Two stage corrections take longer and cost more, but they can restore vehicles that look beyond saving.')),

      h2('Paint Correction Before Ceramic Coating'),
      p(t('If you're considering a ceramic coating for your vehicle, paint correction is not optional — it's essential. '
        + 'Ceramic coatings lock in the condition of your paint permanently. If you apply a coating over swirl marks and scratches, '
        + 'those defects are sealed in forever and become even more visible under the coating's high gloss.')),
      p(t('Every ceramic coating job at Velocity Car Detailing includes a paint decontamination and inspection, '
        + 'and we will always recommend the appropriate level of paint correction before coating to ensure the result looks flawless.')),
      asset(vetteAsset.sys.id),

      h2('What to Expect from Professional Paint Correction in Bozeman'),
      p(t('At Velocity Car Detailing, our paint correction process includes:')),
      ul(
        'A thorough hand wash and decontamination to remove all surface contamination before polishing.',
        'A paint thickness gauge reading at multiple points to ensure safe polishing.',
        'Machine polishing with professional-grade compound and polish products.',
        'A final inspection under high-intensity lighting to confirm all defects are addressed.',
        'Optional ceramic coating, paint sealant, or wax protection to lock in the corrected finish.',
      ),
      p(t('We are a fully mobile service, meaning we bring all our equipment directly to your home or workplace in Bozeman, Belgrade, Big Sky, and the surrounding Gallatin Valley. '
        + 'No drop-off required.')),
      asset(jeepAsset.sys.id),

      h2('Frequently Asked Questions'),
      h3('How much does paint correction cost in Bozeman, MT?'),
      p(t('Paint correction pricing depends on the size of the vehicle, the severity of the defects, and whether one or two stages are needed. '
        + 'Contact us at (612) 434-5327 or book online for a personalized quote.')),
      h3('How long does paint correction take?'),
      p(t('A single stage correction on a sedan typically takes 4–6 hours. A two stage correction or larger vehicles like trucks and SUVs can take 8–12+ hours. '
        + 'Because we're mobile, we complete the work at your location while you go about your day.')),
      h3('Will paint correction remove deep scratches?'),
      p(t('Paint correction can remove scratches that have not penetrated through the clear coat into the base coat. '
        + 'A simple test: run your fingernail across the scratch. If your nail catches in it, it likely goes too deep for correction alone and may require touch-up paint. '
        + 'We will always inspect and advise before beginning work.')),

      h2('Book Paint Correction in Bozeman, MT'),
      p(t('Ready to restore your paint to a flawless finish? Velocity Car Detailing serves Bozeman, Belgrade, Four Corners, Big Sky, and all of Gallatin County. '
        + 'We're a mobile service — we come to you.')),
      p(
        t('Call us at '),
        link('tel:+16124345327', '(612) 434-5327'),
        t(' or '),
        link('https://detailprocrm.com/book/ed56c048-9b45-4d92-90d2-b55ed2ee5936', 'book online'),
        t(' to schedule your paint correction today.'),
      ),
    ],
  };

  // 3. Create entry
  console.log('\n📝  Creating blog post entry...');
  let entry = await env.createEntry('blogPost', {
    fields: {
      title: { 'en-US': 'What Is Paint Correction — And Do You Need It in Bozeman, MT?' },
      slug: { 'en-US': 'what-is-paint-correction-bozeman-mt' },
      excerpt: { 'en-US': 'Paint correction removes swirl marks, scratches, and oxidation to restore your car\'s factory shine. Here\'s what Bozeman, MT drivers need to know — and signs it\'s time to book.' },
      body: { 'en-US': body },
      featuredImage: { 'en-US': { sys: { type: 'Link', linkType: 'Asset', id: featuredAsset.sys.id } } },
      publishedDate: { 'en-US': new Date().toISOString() },
      metaTitle: { 'en-US': 'What Is Paint Correction? | Bozeman, MT | Velocity Detailing' },
      metaDescription: { 'en-US': 'Paint correction removes swirl marks, scratches, and oxidation from your car\'s paint. Learn when you need it and what it costs in Bozeman, MT.' },
    },
  });

  entry = await entry.publish();
  console.log(`\n✅  Article published! Entry ID: ${entry.sys.id}`);
  console.log(`    URL: https://www.velocitydetailingmt.com/blog/what-is-paint-correction-bozeman-mt\n`);
}

main().catch(err => {
  console.error('\n❌  Error:', err.message ?? err);
  process.exit(1);
});
