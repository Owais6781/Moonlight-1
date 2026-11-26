


import React, { useEffect, useState } from "react";
import {  Check,  } from "lucide-react";
import ReusableModal from "./ReusableModal/ReusableModal";

import image1 from "../../Media/Ticket/Air-India.jpg";
import image2 from "../../Media/Ticket/Spicejet.jpg";
import image3 from "../../Media/Ticket/emirates.jpg";
import image4 from "../../Media/Ticket/etihad.jpg";
import image5 from "../../Media/Ticket/fa958172-33c2-4949-ac79-b7d60983f1a0.jpg";
import image6 from "../../Media/Ticket/indigo.jfif";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue, for dark areas)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const FALLBACK_IMAGE = "/images/default.jpg";

const tagImageMap: Record<string, string> = {
  "Air India": image1,
  "SpiceJet": image2,
  "Saudia Airlines": image5,
  Emirates: image3,
  Etihad: image4,
  IndiGo: image6,
};

type Airline = {
  tag: string;
  title: string;
  description: string;
  /** Kept so existing data still type-checks; the redesign uses the brand palette. */
  tagColor?: string;
};

const services = [
  "Domestic & international flight bookings",
  "One-way, round-trip and multi-city itineraries",
  "Economy, business and first-class tickets",
  "Group and corporate travel arrangements",
  "Last-minute and emergency bookings",
];

const reasons = [
  "Competitive fares from multiple airlines",
  "Expert travel consultants",
  "Personalized flight options",
  "Flexible booking support",
  "Transparent pricing",
];

const InfoCard: React.FC<{ title: string; items: string[] }> = ({
  title,
  items,
}) => (
  <div className="rounded-2xl border border-[#6A6868]/20 bg-white p-6 shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] sm:p-7">
    <h3 className="font-heading text-2xl font-semibold leading-snug text-[#06294D] sm:text-3xl">
      {title}
    </h3>
    <div className="mt-3 h-[3px] w-12 rounded-full bg-[#015399]" aria-hidden="true" />

    <ul className="mt-5 space-y-3.5 text-sm leading-relaxed text-[#6A6868] sm:text-base md:text-lg">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <span className="mt-[0.3em] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#015399]/10 text-[#015399]">
            <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const Ticket: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Airline | null>(null);

  // Close the modal with Escape and lock background scroll while it is open.
  useEffect(() => {
    if (!selectedDept) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedDept(null);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedDept]);

  return (
    <section className="bg-[#F5F7FA] py-10 sm:py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-10 sm:mb-12 lg:mb-14">
          <div className="text-center">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#06294D] sm:text-4xl lg:text-5xl">
              Air Ticket
            </h2>
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
            <p className="mx-auto mt-5 max-w-3xl px-1 text-sm leading-relaxed text-[#6A6868] sm:text-base md:text-lg lg:max-w-4xl">
              We provide reliable and cost-effective air ticketing services for
              domestic and international travel, tailored for individuals,
              families and corporate clients.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-12">
            <InfoCard title="Air ticket services" items={services} />
            <InfoCard title="Why book with us" items={reasons} />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 md:gap-8 lg:gap-10 xl:grid-cols-3">
          {/* Cards can be added here */}
        </div>
      </div>

    <ReusableModal
        isOpen={!!selectedDept}
        onClose={() => setSelectedDept(null)}
        tag={selectedDept?.tag || ""}
        title={selectedDept?.title || ""}
        description={selectedDept?.description || ""}
        image={
          selectedDept
            ? tagImageMap[selectedDept.tag] || FALLBACK_IMAGE
            : undefined
        }
        fallbackImage={FALLBACK_IMAGE}
      />
    </section>
  );
};

export default Ticket;