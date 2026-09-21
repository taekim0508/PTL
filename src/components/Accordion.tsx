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
  /** Open this item on first render. Pass null to start fully collapsed. */
  defaultOpenId?: string | null;
};

export default function Accordion({ items, defaultOpenId = null }: Props) {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId);

  return (
    <div className="space-y-4">
      {items.map((item) => {
        const open = openId === item.id;
        return (
          <div
            key={item.id}
            className="overflow-hidden rounded-soft border border-forest/10 bg-white shadow-sm"
          >
            <h3>
              <button
                type="button"
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
                aria-controls={`${item.id}-panel`}
                className={`flex w-full items-start gap-4 p-5 text-left transition-colors ${
                  open ? "bg-sky/40" : "hover:bg-sky/20"
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
                className="border-t border-forest/10 px-5 pb-5 pt-4"
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
