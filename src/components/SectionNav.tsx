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
 * In-page anchor chips. These scroll rather than route, and they deliberately
 * never write to the hash: the hash now carries which page you are on, and an
 * anchor landing in it would read as a page that does not exist.
 */
export default function SectionNav({ items, onSelect }: Props) {
  function jump(id: string) {
    if (onSelect) {
      onSelect(id);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <nav aria-label="On this page" className="mt-8 flex flex-wrap justify-center gap-2">
      {items.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            jump(id);
          }}
          className="rounded-full border border-forest/20 bg-cream px-4 py-2 text-sm font-semibold text-forest shadow-sm transition-colors hover:border-forest/50 hover:bg-white"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
