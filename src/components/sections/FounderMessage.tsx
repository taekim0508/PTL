"use client";

import { useState } from "react";
import { directorMessage } from "@/lib/data";
import ContentPhoto from "@/components/ContentPhoto";

export default function FounderMessage() {
  const [lang, setLang] = useState<"en" | "ko">("en");
  const copy = directorMessage[lang];
  // Screen readers switch voice on this; without it Korean is read as English.
  const langAttr = lang === "ko" ? "ko" : "en";

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
      <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <div className="rounded-soft border border-forest/10 bg-white p-7 shadow-sm sm:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl font-semibold text-forest sm:text-4xl">
                From Our Directors
              </h2>
              <p className="mt-2 font-accent text-3xl text-gold">
                {directorMessage.heading}
              </p>
            </div>

            <div
              role="group"
              aria-label="Message language"
              className="flex shrink-0 rounded-full border border-forest/15 bg-white p-1"
            >
              {(["en", "ko"] as const).map((code) => (
                <button
                  key={code}
                  type="button"
                  onClick={() => setLang(code)}
                  aria-pressed={lang === code}
                  className={`rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                    lang === code
                      ? "bg-forest text-cream"
                      : "text-charcoal/75 hover:text-forest"
                  }`}
                >
                  {directorMessage[code].label}
                </button>
              ))}
            </div>
          </div>

          <div lang={langAttr} className="mt-6 space-y-4 text-lg leading-relaxed text-charcoal/75">
            {copy.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <p lang={langAttr} className="mt-6 text-lg leading-relaxed text-charcoal/75">
            {copy.prayerLead}
          </p>
          <ul lang={langAttr} className="mt-4 space-y-2 border-l-2 border-gold-soft pl-5">
            {copy.affirmations.map((line) => (
              <li key={line} className="font-display text-xl text-forest">
                {line}
              </li>
            ))}
          </ul>

          <p lang={langAttr} className="mt-6 text-lg leading-relaxed text-charcoal/75">
            {copy.closing}
          </p>

          <div className="mt-6 border-t border-forest/10 pt-5">
            <p lang={langAttr} className="text-base text-charcoal/75">
              {copy.signoffLead}
            </p>
            <div className="mt-2 space-y-0.5 text-base font-semibold text-forest">
              {directorMessage.signoff.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </div>

        <ContentPhoto
          src="/home/directors.jpeg"
          alt="Esther Koh and Julie Kim, co-directors of PTL Treehouse"
          className="aspect-[4/5] lg:sticky lg:top-32"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}
