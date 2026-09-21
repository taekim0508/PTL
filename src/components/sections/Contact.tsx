"use client";

import { MapPin, Phone, Mail, MessageSquare } from "lucide-react";
import { contactInfo } from "@/lib/data";
import { InstagramIcon } from "@/components/SocialIcons";
import PageHeader from "@/components/PageHeader";
import TourRequestForm from "@/components/TourRequestForm";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;
const smsHref = `sms:${contactInfo.phone.replace(/-/g, "")}`;
const mapQuery = encodeURIComponent(contactInfo.address);

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd Love To Meet Your Family"
        lead="The best way to experience PTL Treehouse is to visit. Come see children learning, laughing, praying, exploring, and growing. We think you'll quickly understand why so many families call PTL Treehouse their second home."
      />

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div className="rounded-soft border border-forest/10 bg-white p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-forest">
              Request a Tour
            </h2>
            <div className="mt-5">
              <TourRequestForm variant="page" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-soft border border-forest/10 bg-white p-6 shadow-sm">
              <h2 className="font-display text-2xl font-semibold text-forest">
                {contactInfo.name}
              </h2>
              <ul className="mt-4 space-y-3.5 text-base text-charcoal/75">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  <a href={telHref} className="hover:text-forest">
                    {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MessageSquare
                    className="mt-1 h-4 w-4 shrink-0 text-gold"
                    strokeWidth={1.75}
                  />
                  <a href={smsHref} className="hover:text-forest">
                    Text us at {contactInfo.phone}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-forest">
                    {contactInfo.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <InstagramIcon className="mt-1 h-4 w-4 shrink-0 text-gold" />
                  <a
                    href={contactInfo.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-forest"
                  >
                    {contactInfo.instagram}
                  </a>
                </li>
              </ul>
            </div>

            <div className="overflow-hidden rounded-soft border border-forest/10 shadow-sm">
              <iframe
                title="Map to PTL Treehouse Early Learning Center"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-72 w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
