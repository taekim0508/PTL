"use client";

import { useState } from "react";
import { X } from "lucide-react";

/**
 * Forest-on-forest with the header below it would have read as one thick bar,
 * so the banner takes the deepest tone on the ladder and keeps a gold rule
 * under it. It reads as a notice above the site rather than part of it.
 */
export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="border-b-2 border-gold bg-forest-deep text-cream">
      <div className="mx-auto flex max-w-7xl items-center gap-3 px-5 py-2.5 sm:px-8">
        <p className="flex-1 text-center text-sm leading-relaxed text-cream/90">
          <span className="font-semibold text-gold-soft">Closures and delays:</span>{" "}
          we follow the Everett School District calendar. Please refer to the
          district&apos;s announcements.
        </p>
        <button
          type="button"
          onClick={() => setVisible(false)}
          aria-label="Dismiss announcement"
          className="shrink-0 rounded-full p-1 text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>
      </div>
    </div>
  );
}
