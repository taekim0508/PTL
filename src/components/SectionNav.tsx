"use client";

type Props = {
  items: { id: string; label: string }[];
  /**
   * When given, the parent handles the jump instead, so it can expand the
   * target first and then scroll to where it actually ended up.
   */
  onSelect?: (id: string) => void;
};

/**
 * In-page anchor chips. Now that each page is its own route, the hash is free
 * to mean what it normally means, so these are ordinary anchors again: they
 * can be copied, opened in a new tab, and sent to someone as
 * /admissions#tuition. The browser does the scrolling, smoothly, via the
 * scroll-behavior rule in globals.css.
 */
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
          className="rounded-full border border-forest/20 bg-cream px-4 py-2 text-sm font-semibold text-forest shadow-sm transition-colors hover:border-forest/50 hover:bg-white"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
