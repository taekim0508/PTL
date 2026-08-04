import { Camera, type LucideIcon } from "lucide-react";

type Props = {
  caption: string;
  icon?: LucideIcon;
  className?: string;
  tone?: "warm" | "forest" | "rose";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  warm: "from-gold-soft/60 to-cream-soft border-gold-soft",
  forest: "from-forest/15 to-cream-soft border-forest/20",
  rose: "from-rose/20 to-cream-soft border-rose/25",
};

export default function PlaceholderImage({
  caption,
  icon: Icon = Camera,
  className = "",
  tone = "warm",
}: Props) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-soft border bg-gradient-to-br text-center ${tones[tone]} ${className}`}
    >
      <Icon className="h-7 w-7 text-forest/50" strokeWidth={1.5} />
      <span className="px-4 text-xs font-semibold uppercase tracking-wide text-forest/50">
        {caption}
      </span>
    </div>
  );
}
