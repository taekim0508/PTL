"use client";

type Props = {
  items: { id: string; label: string }[];
};

/** In-page anchor chips. Pages are swapped client-side, so these scroll rather than route. */
export default function SectionNav({ items }: Props) {
  return (
    <nav
      aria-label="On this page"
      className="mt-8 flex flex-wrap justify-center gap-2"
    >
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-semibold text-forest shadow-sm transition-colors hover:border-forest/30 hover:bg-sky/30"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
