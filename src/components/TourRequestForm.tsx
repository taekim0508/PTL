"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { Check, Phone, MessageSquare } from "lucide-react";
import { contactInfo, programs } from "@/lib/data";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;
const smsHref = `sms:${contactInfo.phone.replace(/-/g, "")}`;

const inputClass =
  "w-full rounded-soft border border-forest/20 bg-white px-4 py-2.5 text-base text-charcoal transition-colors focus:border-forest";

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-charcoal/80">{label}</span>
      {children}
    </label>
  );
}

type Props = {
  /** "modal" stacks to one column and drops the optional message field. */
  variant?: "page" | "modal";
};

/**
 * A tour request, not a booking. Nothing here reserves a slot: the school
 * follows up to confirm, which is how PTL actually schedules tours.
 */
export default function TourRequestForm({ variant = "page" }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const isModal = variant === "modal";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 py-10 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-leaf/15">
          <Check className="h-7 w-7 text-leaf-dark" strokeWidth={2} />
        </span>
        <p className="font-display text-xl font-semibold text-forest">
          Thanks! Your request is in.
        </p>
        <p className="max-w-sm text-base leading-relaxed text-charcoal/75">
          We&apos;ll reach out to confirm a time that works for your family. If
          you&apos;d rather talk sooner, call or text us at {contactInfo.phone}.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-1 text-sm font-semibold text-forest underline underline-offset-2"
        >
          Send another request
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap items-center gap-2.5 rounded-soft border border-forest/10 bg-white px-4 py-3">
        <span className="text-sm font-semibold text-charcoal/75">
          Prefer to talk now?
        </span>
        <a
          href={telHref}
          className="inline-flex items-center gap-1.5 rounded-full bg-forest px-4 py-2 text-sm font-semibold text-cream transition-colors hover:bg-forest-dark"
        >
          <Phone className="h-3.5 w-3.5" strokeWidth={2} />
          Call
        </a>
        <a
          href={smsHref}
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-forest px-4 py-2 text-sm font-semibold text-forest transition-colors hover:bg-forest/5"
        >
          <MessageSquare className="h-3.5 w-3.5" strokeWidth={2} />
          Text
        </a>
        <span className="text-sm font-semibold text-charcoal/75">
          {contactInfo.phone}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="mt-5 space-y-4">
        <div className={isModal ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
          <Field label="Your name">
            <input required type="text" name="name" autoComplete="name" className={inputClass} />
          </Field>
          <Field label="Email">
            <input required type="email" name="email" autoComplete="email" className={inputClass} />
          </Field>
          <Field label="Phone">
            <input type="tel" name="phone" autoComplete="tel" className={inputClass} />
          </Field>
          <Field label="Child's age">
            <input
              type="text"
              name="childAge"
              placeholder="e.g. 3 years"
              className={inputClass}
            />
          </Field>
          <Field label="Program you're interested in">
            <select name="program" defaultValue="" className={inputClass}>
              <option value="">Not sure yet</option>
              {programs.map(({ id, name }) => (
                <option key={id} value={id}>
                  {name}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Preferred tour date">
            <input type="date" name="tourDate" className={inputClass} />
          </Field>
        </div>

        {isModal ? null : (
          <Field label="Anything you'd like us to know? (optional)">
            <textarea rows={4} name="message" className={`${inputClass} resize-none`} />
          </Field>
        )}

        <button
          type="submit"
          className="w-full rounded-full bg-forest px-7 py-3.5 text-base font-semibold text-cream shadow-sm transition-colors hover:bg-forest-dark sm:w-auto"
        >
          Request a Tour
        </button>

        <p className="text-sm leading-relaxed text-charcoal/75">
          Tours run during school hours, Monday to Friday. We&apos;ll confirm your
          time by phone or email.
        </p>
      </form>
    </>
  );
}
