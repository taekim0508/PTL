import { iconMap, accentMap } from "@/lib/icons";

export type IconGridItem = {
  label: string;
  line?: string;
  icon: string;
  accent?: string;
};

type Props = {
  items: IconGridItem[];
  /** "stack" centers each item; "inline" runs the highlight down the left. */
  variant?: "stack" | "inline";
  columns?: string;
};

/**
 * The site-wide item motif: a short accent bar as the highlight, then a small
 * unboxed icon beside the label. Every list and card on the site uses this, so
 * the pages read as one system.
 */
export default function IconGrid({
  items,
  variant = "stack",
  columns = "sm:grid-cols-3 lg:grid-cols-6",
}: Props) {
  return (
    <div className={`grid grid-cols-2 gap-x-8 gap-y-9 ${columns}`}>
      {items.map(({ label, line, icon, accent }) => {
        const Icon = iconMap[icon];
        const tone = accent ? accentMap[accent] : undefined;
        const rule = tone ? tone.rule : "bg-gold";
        const tint = tone ? tone.text : "text-gold-dark";

        if (variant === "inline") {
          return (
            <div key={label} className="border-t border-forest/12 pt-4">
              <span aria-hidden className={`block h-1 w-10 rounded-full ${rule}`} />
              <h3 className="mt-3 flex items-center gap-2 font-display text-lg font-semibold text-forest">
                <Icon aria-hidden className={`h-5 w-5 shrink-0 ${tint}`} strokeWidth={1.75} />
                {label}
              </h3>
              {line ? (
                <p className="mt-1.5 text-base leading-relaxed text-charcoal/70">{line}</p>
              ) : null}
            </div>
          );
        }

        return (
          <div key={label} className="flex flex-col items-center text-center">
            <span aria-hidden className={`block h-1 w-10 rounded-full ${rule}`} />
            <h3 className="mt-3 flex items-center gap-2 font-display text-lg font-semibold leading-tight text-forest">
              <Icon aria-hidden className={`h-5 w-5 shrink-0 ${tint}`} strokeWidth={1.75} />
              {label}
            </h3>
            {line ? (
              <p className="mt-1.5 text-sm leading-snug text-charcoal/65">{line}</p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
