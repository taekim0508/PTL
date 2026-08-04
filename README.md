# PTL Treehouse — Interactive Mockup

A click-through, front-end-only prototype of the PTL Treehouse preschool
website. This is a design/UX sign-off tool for the preschool's co-owners and
a working base for further development — it is not the production build.

No backend, CMS, database, or third-party services are wired up. Tour
scheduling, the welcome video, and the contact form are all simulated with
local React state so they feel real to a reviewer without being connected to
anything live.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/app/layout.tsx` — fonts (Fraunces, Nunito, Caveat) and root shell
- `src/app/page.tsx` — top-level app shell; swaps sections client-side (no routing)
- `src/context/AppContext.tsx` — active section + modal state
- `src/components/` — Nav, Footer, Logo, modals, shared UI
- `src/components/sections/` — Home, About Us, Programs, Why PTL, Parent Resources, Contact
- `src/lib/data.ts` — all copy/content in one place for easy editing

## Notes for the next pass

- The PTL Treehouse tree icon in the nav/footer is a placeholder — swap
  `src/components/Logo.tsx` for the real logo asset when available.
- All photo/video placeholders (`PlaceholderImage`, `VideoModal`) are marked
  clearly so real photography and video can drop in later.
- `TourModal` and the Contact form use local state only — replace with real
  scheduling and email integrations for production.
