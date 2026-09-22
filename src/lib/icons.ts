import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  X,
  type LucideIcon,
} from "lucide-react";

/**
 * Only functional icons ship: things that mark an action or a piece of contact
 * data. Decorative glyphs are gone; sections are marked by the accent bar.
 */
export const functionalIcons: Record<string, LucideIcon> = {
  "arrow-right": ArrowRight,
  check: Check,
  "chevron-down": ChevronDown,
  clock: Clock,
  mail: Mail,
  "map-pin": MapPin,
  menu: Menu,
  "message-square": MessageSquare,
  phone: Phone,
  x: X,
};

/**
 * Accent tones drawn from the PTL Treehouse logo palette. One entry per family:
 * `bar` marks a section, `card` tints the surface it sits on, `text` is for the
 * rare bit of type that needs to carry the accent.
 */
export const accentMap: Record<
  string,
  { bar: string; card: string; text: string }
> = {
  green: { bar: "bg-leaf", card: "bg-leaf/8", text: "text-leaf-dark" },
  gold: { bar: "bg-gold", card: "bg-gold/10", text: "text-gold-dark" },
  rose: { bar: "bg-rose", card: "bg-rose/8", text: "text-rose" },
  sky: { bar: "bg-sage", card: "bg-sky/20", text: "text-sage-dark" },
  blush: { bar: "bg-blush", card: "bg-blush/25", text: "text-bark-dark" },
  bark: { bar: "bg-bark", card: "bg-bark/8", text: "text-bark-dark" },
};

export type AccentName = keyof typeof accentMap;

/** The card recipe every surface on the site shares. */
export const CARD = "rounded-soft border border-forest/10 shadow-sm";
