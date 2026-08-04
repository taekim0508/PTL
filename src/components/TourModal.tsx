"use client";

import { useMemo, useState } from "react";
import { CalendarCheck, Check } from "lucide-react";
import Modal from "@/components/Modal";
import { useApp } from "@/context/AppContext";

const TIMES = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM"];

function nextWeekdays(count: number) {
  const days: Date[] = [];
  const cursor = new Date();
  cursor.setDate(cursor.getDate() + 1);
  while (days.length < count) {
    const day = cursor.getDay();
    if (day !== 0 && day !== 6) {
      days.push(new Date(cursor));
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export default function TourModal() {
  const { closeTour } = useApp();
  const days = useMemo(() => nextWeekdays(5), []);
  const [selected, setSelected] = useState<{ day: string; time: string } | null>(null);

  if (selected) {
    return (
      <Modal title="Tour Requested" onClose={closeTour}>
        <div className="flex flex-col items-center gap-3 py-4 text-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10">
            <Check className="h-7 w-7 text-forest" strokeWidth={2} />
          </span>
          <p className="font-display text-lg font-semibold text-forest">
            We&apos;ll see you {selected.day} at {selected.time}!
          </p>
          <p className="max-w-xs text-sm text-charcoal/65">
            Thanks for selecting a time. We&apos;ll use this as your preferred
            tour slot when we follow up with your family.
          </p>
          <button
            type="button"
            onClick={() => setSelected(null)}
            className="mt-2 text-sm font-semibold text-forest underline underline-offset-2"
          >
            Choose a different time
          </button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal title="Schedule a Tour" onClose={closeTour}>
      <p className="text-sm text-charcoal/65">
        Pick a time that works for your family, and we&apos;ll follow up to
        confirm your visit.
      </p>

      <div className="mt-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gold">
        <CalendarCheck className="h-4 w-4" strokeWidth={2} />
        This Week
      </div>

      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {days.map((date) => {
          const dayLabel = date.toLocaleDateString("en-US", {
            weekday: "long",
            month: "short",
            day: "numeric",
          });
          const shortLabel = date.toLocaleDateString("en-US", { weekday: "long" });
          return (
            <div key={dayLabel} className="rounded-soft border border-forest/10 p-3">
              <p className="text-sm font-semibold text-forest">{dayLabel}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {TIMES.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setSelected({ day: shortLabel, time })}
                    className="rounded-full border border-forest/20 px-3 py-1.5 text-xs font-semibold text-charcoal/75 transition-colors hover:border-forest hover:bg-forest hover:text-cream"
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </Modal>
  );
}
