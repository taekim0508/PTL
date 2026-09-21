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
- `src/app/page.tsx`: top-level app shell; swaps sections client-side (no routing)
- `src/context/AppContext.tsx`: active section + tour modal state
- `src/components/`: Nav, Footer, Logo, and shared UI (PageHeader, SectionNav,
  Accordion, IconGrid, ScheduleTable, TourRequestForm)
- `src/components/sections/`: Home, About, Our Approach, Programs, Daily Life,
  Admissions, Parent Resources, Contact
- `src/lib/content/`: all site copy, one module per page
- `src/lib/data.ts`: barrel re-exporting the content modules
- `src/lib/icons.ts`: the lucide icon map and the accent palette map

## Content

Every string a visitor reads lives in `src/lib/content/`, so copy edits never
require touching a component. Pages map to files: `about.ts`, `approach.ts`,
`programs.ts`, `daily-life.ts`, `admissions.ts`, `faq.ts`, plus `home.ts` and
`site.ts` for shared facts and navigation.

## Notes for the next pass

- The tour request form and its Contact page twin need a real destination,
  either an email service or the school's existing intake.
- `photos/` is the raw photo library. Files are copied into `public/home/`
  when they go live on a page.
- Team photography beyond the directors is still outstanding.
