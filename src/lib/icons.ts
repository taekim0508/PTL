/**
 * Accent tones drawn from the PTL Treehouse logo palette.
 *
 * Colour lives in two places on this site: the bands, and these accent rules.
 * It deliberately does not live in card fills. Six pale tints of the same
 * warm beige read as printing noise rather than as meaning, so `card` is used
 * only where a tinted surface earns its keep, and every tint here is strong
 * enough to actually be seen when it is.
 */
export const accentMap: Record<
  string,
  { bar: string; card: string; text: string; ring: string }
> = {
  green: {
    bar: "bg-leaf",
    card: "bg-leaf/12",
    text: "text-leaf-dark",
    ring: "border-leaf/30",
  },
  gold: {
    bar: "bg-gold",
    card: "bg-gold/14",
    text: "text-gold-dark",
    ring: "border-gold/35",
  },
  rose: {
    bar: "bg-rose",
    card: "bg-rose/12",
    text: "text-rose-dark",
    ring: "border-rose/30",
  },
  sky: {
    bar: "bg-sage",
    card: "bg-sky/40",
    text: "text-sage-dark",
    ring: "border-sage/30",
  },
  blush: {
    bar: "bg-blush",
    card: "bg-blush/40",
    text: "text-bark-dark",
    ring: "border-blush/60",
  },
  bark: {
    bar: "bg-bark",
    card: "bg-bark/12",
    text: "text-bark-dark",
    ring: "border-bark/30",
  },
};

export type AccentName = keyof typeof accentMap;

/** The card recipe every raised surface on the site shares. */
export const CARD = "rounded-soft border border-forest/12 bg-white shadow-sm";

/** The two button recipes. Nothing on the site invents a third. */
export const BTN_PRIMARY =
  "inline-flex items-center justify-center rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark";

export const BTN_SECONDARY =
  "inline-flex items-center justify-center rounded-full border-2 border-forest px-7 py-3.5 text-base font-semibold text-forest transition-colors hover:bg-forest/5";

/** The light-on-dark primary, for the forest bands. */
export const BTN_ON_FOREST =
  "inline-flex items-center justify-center rounded-full bg-cream px-7 py-3.5 text-base font-semibold text-forest shadow-sm transition-colors hover:bg-gold-soft";
