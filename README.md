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
- `src/app/page.tsx`: top-level app shell; swaps sections client-side
- `src/context/AppContext.tsx`: active page, tour modal state, and the hash
  sync that gives each page a shareable URL and a working back button
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
- Pages are still swapped client-side from one document. The hash now carries
  which page you are on, which buys back deep links and the back button, but
  real App Router routes would additionally buy per-page titles and
  descriptions for search and for link previews.
