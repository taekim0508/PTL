"use client";

import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";

export type AccordionItem = {
  id: string;
  title: string;
  meta?: ReactNode;
  lead?: ReactNode;
  body: ReactNode;
};

type Props = {
  items: AccordionItem[];
  /** Uncontrolled: open this item on first render. Pass null to start collapsed. */
  defaultOpenId?: string | null;
  /** Controlled: pass with onToggle to drive the open item from the parent. */
  openId?: string | null;
  onToggle?: (id: string | null) => void;
};

export default function Accordion({
  items,
  defaultOpenId = null,
  openId,
  onToggle,
}: Props) {
  const [uncontrolledOpenId, setUncontrolledOpenId] = useState<string | null>(
    defaultOpenId
  );
  const isControlled = openId !== undefined;
  const currentOpenId = isControlled ? openId : uncontrolledOpenId;

  function toggle(next: string | null) {
    if (!isControlled) setUncontrolledOpenId(next);
    onToggle?.(next);
  }

  return (
    <div className="space-y-3">
      {items.map((item) => {
        const open = currentOpenId === item.id;
        return (
          <div
            key={item.id}
            // Doubles as the anchor target for in-page links to this item.
            id={item.id}
            /* An open row carries a gold edge. A row that is doing something
               should look different from eight rows that are not, and the
               chevron alone was too small to carry that. */
            className={`overflow-hidden rounded-soft border bg-white shadow-sm transition-colors ${
              open ? "border-forest/20" : "border-forest/12 hover:border-forest/30"
            }`}
          >
            <h3>
              <button
                type="button"
                onClick={() => toggle(open ? null : item.id)}
                aria-expanded={open}
                aria-controls={`${item.id}-panel`}
                className={`flex w-full items-start gap-4 border-l-[3px] p-5 text-left transition-colors ${
                  open ? "border-gold" : "border-transparent"
                }`}
              >
                <span className="flex-1">
                  <span className="block font-display text-xl font-semibold text-forest">
                    {item.title}
                  </span>
                  {item.meta}
                  {item.lead}
                </span>
                <ChevronDown
                  aria-hidden
                  className={`mt-1 h-5 w-5 shrink-0 text-forest transition-transform duration-200 ${
                    open ? "rotate-180" : ""
                  }`}
                />
              </button>
            </h3>
            {open ? (
              <div
                id={`${item.id}-panel`}
                className="border-t border-forest/12 bg-cream/50 px-5 pb-6 pt-5"
              >
                {item.body}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
