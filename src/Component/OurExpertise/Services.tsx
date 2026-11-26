
import React, { useEffect, useState } from "react";
import ReusableCard from "./ReusableCard/ReusableCard"
import { type Department, ServicesDepartments, } from "./Department type/Department";
import ReusableModal from "./ReusableModal/ReusableModal";

import image1 from "../../Media/Services/Business Visa.jpg";
import image2 from "../../Media/Services/Tourist Visa.png";
import image3 from "../../Media/Services/Work Visa.png";
import image4 from "../../Media/Services/Student Visa.png";
import image5 from "../../Media/Services/Seaman Visa.jpg";
import image6 from "../../Media/Services/Medical  Visa.jpg";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue, for dark areas)
 *   Sky blue    #7DB8F2   (light accent for use on dark backgrounds)
 *   Page bg     #F5F7FA · Body text #172033
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const FALLBACK_IMAGE = "/images/default.jpg";

const tagImageMap: Record<string, string> = {
  "Business Visa": image1,
  "Tourist Visa": image2,
  "Work Visa": image3,
  "Student Visa": image4,
  "Seaman Visa": image5,
  "Medical  Visa": image6, // note: double space matches the tag below
};




const Services: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);
  const highlights = [
    "Reliable visa assistance services to simplify documentation and approval processes.",
    "Procurement of visas on behalf of customers — no need to stand in line, we do the waiting for you.",
    "Guaranteed accuracy, security, and privacy of your documents.",
    "Convenient online tracking of your visa application status.",
    "Providing correct and up-to-date visa requirements.",
    "Professional, reliable, and expert customer service.",
  ];

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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#06294D] sm:text-4xl lg:text-5xl">
            Visa Services
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
          <ul className="mx-auto mt-6 max-w-xl space-y-2.5 text-left text-sm leading-relaxed text-[#6A6868] sm:text-base">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3">
                <span
                  className="mt-[0.6em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#015399]"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10 xl:grid-cols-3">
          {ServicesDepartments.map((dept) => (
              <ReusableCard
                key={dept.tag}
                tag={dept.tag}
                title={dept.title}
                description={dept.description}
                image={tagImageMap[dept.tag] || FALLBACK_IMAGE}
                fallbackImage={FALLBACK_IMAGE}
                onReadMore={() => setSelectedDept(dept)}
              />
          ))}
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

export default Services;