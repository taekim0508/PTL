"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AnnouncementBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="flex items-center justify-center gap-3 bg-forest px-4 py-2 text-center text-sm text-cream">
      <span>Reminder: No school this Friday — Teacher In-Service Day.</span>
      <button
        type="button"
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="shrink-0 rounded-full p-1 text-cream/80 transition-colors hover:bg-cream/10 hover:text-cream"
      >
        <X className="h-4 w-4" strokeWidth={2} />
      </button>
    </div>
  );
}
