"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Matches the scroll-margin-top the anchored sections carry in globals.css. */
const HEADER_OFFSET = 112;

/**
 * Lands a visitor on the right part of the page when they arrive with a hash.
 *
 * The browser scrolls to a hash target itself, but the router then scrolls to
 * the top while it hydrates, which undoes it. So /admissions#tuition would
 * open at the top of Admissions and the tuition link a parent shared would be
 * a link to nothing in particular.
 *
 * This re-asserts the position for a few frames until it stops being
 * overwritten, then stops. Any deliberate scroll from the reader ends it
 * immediately, so it can never fight someone who has started reading.
 */
export default function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    if (!id) return;

    let cancelled = false;
    const stop = () => {
      cancelled = true;
    };

    window.addEventListener("wheel", stop, { once: true, passive: true });
    window.addEventListener("touchstart", stop, { once: true, passive: true });
    window.addEventListener("keydown", stop, { once: true });

    const deadline = performance.now() + 700;

    const settle = () => {
      if (cancelled) return;
      const el = document.getElementById(id);
      if (el) {
        const { top } = el.getBoundingClientRect();
        // `behavior: "auto"` overrides the smooth scrolling in the stylesheet,
        // which would otherwise restart its animation on every frame here.
        if (Math.abs(top - HEADER_OFFSET) > 4) {
          el.scrollIntoView({ block: "start", behavior: "auto" });
        }
      }
      if (performance.now() < deadline) requestAnimationFrame(settle);
    };

    requestAnimationFrame(settle);

    return () => {
      cancelled = true;
      window.removeEventListener("wheel", stop);
      window.removeEventListener("touchstart", stop);
      window.removeEventListener("keydown", stop);
    };
  }, [pathname]);

  return null;
}
