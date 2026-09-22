"use client";

import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";
import { contactInfo, keyFacts } from "@/lib/data";
import { InstagramIcon } from "@/components/SocialIcons";
import Band from "@/components/Band";
import PageHeader from "@/components/PageHeader";
import SectionHeading from "@/components/SectionHeading";
import TourRequestForm from "@/components/TourRequestForm";

const telHref = `tel:${contactInfo.phone.replace(/-/g, "")}`;
const smsHref = `sms:${contactInfo.phone.replace(/-/g, "")}`;
const mapQuery = encodeURIComponent(contactInfo.address);
const hours = keyFacts.find((fact) => fact.label === "Hours")?.value ?? "";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="We'd Love To Meet Your Family"
        lead="The best way to experience PTL Treehouse is to visit. Come see children learning, laughing, praying, exploring, and growing. We think you'll quickly understand why so many families call PTL Treehouse their second home."
      />

      <Band tone="page" size="lg" seamless>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-12">
          <div className="rounded-soft border border-forest/12 bg-white p-6 shadow-sm sm:p-9">
            <SectionHeading eyebrow="Start here" title="Request a Tour" />
            <div className="mt-7">
              <TourRequestForm variant="page" />
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-soft border border-forest/12 bg-white p-6 shadow-sm sm:p-7">
              <h2 className="font-display text-2xl font-semibold text-forest">
                {contactInfo.name}
              </h2>
              <ul className="mt-5 space-y-3.5 text-base text-charcoal/80">
                <li className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  <span>{contactInfo.address}</span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="mt-1 h-4 w-4 shrink-0 text-gold" strokeWidth={1.75} />
                  <span>{hours}</span>
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

            <figure className="overflow-hidden rounded-soft border border-forest/12 shadow-sm">
              <iframe
                title="Map to PTL Treehouse Early Learning Center"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block h-72 w-full border-0"
              />
              <figcaption className="border-t border-forest/12 bg-white px-5 py-3 text-sm text-charcoal/75">
                We are on 22nd Ave SE, a few minutes from Mill Creek and Bothell.
              </figcaption>
            </figure>
          </div>
        </div>
      </Band>
    </>
  );
}
