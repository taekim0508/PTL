"use client";

import { useState, type FormEvent } from "react";
import { Check, MapPin, Phone, Mail } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <h1 className="font-display text-4xl font-semibold text-forest">Contact</h1>
      <p className="mt-2 max-w-lg text-sm leading-relaxed text-charcoal/70">
        Questions about enrollment, tours, or daily life at PTL? We&apos;d
        love to hear from you.
      </p>

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-soft border border-forest/10 bg-cream p-6 shadow-sm sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-8 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-forest/10">
                <Check className="h-7 w-7 text-forest" strokeWidth={2} />
              </span>
              <p className="font-display text-lg font-semibold text-forest">
                Thanks — we&apos;ll get back to you soon!
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-1 text-sm font-semibold text-forest underline underline-offset-2"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-charcoal/80">
                  Name
                </label>
                <input
                  required
                  type="text"
                  className="w-full rounded-soft border border-forest/20 bg-cream px-4 py-2.5 text-sm outline-none focus:border-forest"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-charcoal/80">
                  Email
                </label>
                <input
                  required
                  type="email"
                  className="w-full rounded-soft border border-forest/20 bg-cream px-4 py-2.5 text-sm outline-none focus:border-forest"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-semibold text-charcoal/80">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  className="w-full resize-none rounded-soft border border-forest/20 bg-cream px-4 py-2.5 text-sm outline-none focus:border-forest"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-forest px-6 py-2.5 text-sm font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        <ul className="space-y-4 text-sm text-charcoal/75">
          <li className="flex items-start gap-2.5">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
            {contactInfo.address}
          </li>
          <li className="flex items-center gap-2.5">
            <Phone className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
            {contactInfo.phone}
          </li>
          <li className="flex items-center gap-2.5">
            <Mail className="h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
            {contactInfo.email}
          </li>
        </ul>
      </div>
    </section>
  );
}
