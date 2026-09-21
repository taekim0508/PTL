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
          className="rounded-full border border-forest/15 bg-cream px-4 py-2 text-sm font-semibold text-forest transition-colors hover:border-forest/40 hover:bg-forest/5"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
