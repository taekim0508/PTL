"use client";

type Props = {
  items: { id: string; label: string }[];
  /**
   * When given, the parent handles the jump instead of the browser, so it can
   * expand the target first and then scroll to where it actually ended up.
   */
  onSelect?: (id: string) => void;
};

/** In-page anchor chips. Pages are swapped client-side, so these scroll rather than route. */
export default function SectionNav({ items, onSelect }: Props) {
  return (
    <nav aria-label="On this page" className="mt-8 flex flex-wrap justify-center gap-2">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={
            onSelect
              ? (e) => {
                  e.preventDefault();
                  onSelect(id);
                }
              : undefined
          }
          className="rounded-full border border-forest/15 bg-white px-4 py-2 text-sm font-semibold text-forest shadow-sm transition-colors hover:border-forest/40"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
