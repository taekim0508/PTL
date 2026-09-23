# PTL Treehouse

The PTL Treehouse preschool website. All copy comes from the directors'
2026 content document.

The site is front-end only. There is no backend, CMS, database, or
third-party service wired up. The tour request form uses local React state,
so it confirms to the visitor without sending anything yet.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/layout.tsx`: fonts (Fraunces, Nunito, Caveat) and root shell
- `src/app/<route>/page.tsx`: one file per page, each exporting its own
  metadata and rendering a section component
- `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/not-found.tsx`
- `src/components/SiteShell.tsx`: the chrome every route shares
- `src/context/AppContext.tsx`: tour modal state
- `src/components/`: Nav, Footer, Logo, and shared UI
- `src/components/sections/`: Home, About, Our Approach, Programs, Daily Life,
  Admissions, FAQ, Contact
- `src/lib/content/`: all site copy, one module per page
- `src/lib/data.ts`: barrel re-exporting the content modules
- `src/lib/icons.ts`: the icon map, accent palette, and the button and card recipes

## Design system

Three primitives carry the layout. Building a new section means reaching for
these rather than inventing another arrangement of a centred heading over a
grid of cards.

- **`Band`** wraps a section and sets its surface. Surfaces run on a ladder:
  `page` (cream), `band` (sand), `raised` (white), `forest` (the dark anchor).
  Neighbouring sections never share a tone, and the light tones also carry a
  hairline, so a section boundary is always a visible step rather than a
  three-percent shift in beige.
- **`SectionHeading`** opens a section with a fixed gold rule, an eyebrow and
  the title. The rule is the part that matters: it marks the start of a
  section independently of the background behind it. It defaults to
  left-aligned, and centring is a decision, not the default.
- **`SplitFeature`** is a full-bleed row, photo running to the edge of the
  viewport against a solid panel of copy. The seam is the strongest divider
  on the site, so it is reserved for the heaviest moments: the bilingual
  programme, the invitation to visit, and the three pillars on Our Approach.

Colour lives in the bands and the accent rules, not in card fills. Six pale
tints of the same warm beige read as printing noise rather than as meaning,
so `accentMap.card` is used only where a tinted surface earns its keep.

Buttons come from `BTN_PRIMARY`, `BTN_SECONDARY` and `BTN_ON_FOREST`. Cards
come from `CARD` and `CARD_BARE`. Nothing invents a fourth.

## Routes and metadata

Every page is a real route, prerendered as static HTML:

| Route | Page |
| --- | --- |
| `/` | Home |
| `/about` | About Us |
| `/our-approach` | Our Approach |
| `/programs` | Preschool Programs |
| `/daily-life` | Daily Life |
| `/admissions` | Admissions & Tuition |
| `/faq` | Frequently Asked Questions |
| `/contact` | Contact & Visit |

Each route calls `pageMetadata()` from `src/lib/metadata.ts` for its title,
description, canonical URL and share card. `src/components/StructuredData.tsx`
emits schema.org data describing the school itself, which is what a local
search result is built from.

The hash is free for in-page anchors, so `/admissions#tuition` links straight
to the tuition and fees section and `/programs#full-day` opens that programme. The
router scrolls to the top while it hydrates, which undoes the browser's own
jump to the anchor, so `src/components/HashScroll.tsx` re-asserts the
position for a few frames and gives up the moment the reader scrolls.

Set `NEXT_PUBLIC_SITE_URL` when the school moves to its own domain. Without
it everything canonicalises to the Vercel URL in `src/lib/content/site.ts`.

## Content

Every string a visitor reads lives in `src/lib/content/`, so copy edits never
require touching a component. Pages map to files: `about.ts`, `approach.ts`,
`programs.ts`, `daily-life.ts`, `admissions.ts`, `faq.ts`, plus `home.ts` and
`site.ts` for shared facts and navigation.

## Notes for the next pass

- The tour request form and its Contact page twin need a real destination,
  either an email service or the school's existing intake.
- `photos/` is the raw photo library. Files are copied into `public/home/`
  when they go live on a page, resized to 1800px on the long edge so they
  land in the same weight class as the rest of the library.
- Team photography beyond the directors is still outstanding. The About page
  says so in place rather than showing a dashed placeholder.
- **The tour request form does not send anything.** It sets local state and
  tells the visitor "Your request is in." In production that means a parent
  believes they have asked for a tour and the school never hears about it.
  This needs a real destination before the site is handling live traffic.
- `brand/` holds raw brand artwork that the site does not load.
