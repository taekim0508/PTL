import { accentMap } from "@/lib/icons";

export type Item = {
  label: string;
  line?: string;
  accent?: string;
};

type Props = {
  items: Item[];
  columns?: string;
  /** Centers each item, for short label-only lists. */
  centered?: boolean;
};

/**
 * The site-wide item motif: an accent bar, the label, then the line. Used for
 * every flat list on the site so the pages read as one system.
 */
export default function ItemGrid({
  items,
  columns = "sm:grid-cols-2 lg:grid-cols-3",
  centered = false,
}: Props) {
  return (
    <div className={`grid gap-x-10 gap-y-8 ${columns}`}>
      {items.map(({ label, line, accent }) => {
        const bar = accent ? accentMap[accent].bar : "bg-gold";
        return (
          <div
            key={label}
            className={centered ? "flex flex-col items-center text-center" : ""}
          >
            <span
              aria-hidden
              className={`block h-1 w-10 rounded-full ${bar} ${centered ? "mx-auto" : ""}`}
            />
            <h3 className="mt-3 font-display text-lg font-semibold leading-tight text-forest">
              {label}
            </h3>
            {line ? (
              <p className="mt-1.5 text-base leading-relaxed text-charcoal/75">{line}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
