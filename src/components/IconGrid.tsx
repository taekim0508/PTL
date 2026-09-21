import { iconMap, accentMap } from "@/lib/icons";

export type IconGridItem = {
  label: string;
  line?: string;
  icon: string;
  accent?: string;
};

type Props = {
  items: IconGridItem[];
  /** "stack" centers icon over label; "inline" sits the icon beside the text. */
  variant?: "stack" | "inline";
  columns?: string;
};

export default function IconGrid({
  items,
  variant = "stack",
  columns = "sm:grid-cols-3 lg:grid-cols-6",
}: Props) {
  return (
    <div className={`grid grid-cols-2 gap-x-6 gap-y-9 ${columns}`}>
      {items.map(({ label, line, icon, accent }) => {
        const Icon = iconMap[icon];
        const tone = accent ? accentMap[accent] : undefined;
        const chip = tone ? tone.chip : "bg-forest/10 text-forest";

        if (variant === "inline") {
          return (
            <div key={label} className="flex items-start gap-4">
              <span
                className={`flex h-13 w-13 shrink-0 items-center justify-center rounded-full ${chip}`}
              >
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </span>
              <div>
                <h3 className="font-display text-lg font-semibold text-forest">{label}</h3>
                {line ? (
                  <p className="mt-1 text-base leading-relaxed text-charcoal/70">{line}</p>
                ) : null}
              </div>
            </div>
          );
        }

        return (
          <div key={label} className="flex flex-col items-center text-center">
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-full ${chip}`}
            >
              <Icon className="h-6 w-6" strokeWidth={1.5} />
            </span>
            <h3 className="mt-4 font-display text-lg font-semibold leading-tight text-forest">
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
