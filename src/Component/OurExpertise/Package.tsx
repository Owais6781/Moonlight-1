
import React, { useEffect, useState } from "react";
import ReusableCard from "./ReusableCard/ReusableCard"
import { type Department, PackageDepartments, } from "./Department type/Department";
import ReusableModal from "./ReusableModal/ReusableModal";

import image1 from "../../Media/Package/Rajasthan.jpg";
import image2 from "../../Media/Package/Goa.jpg";
import image3 from "../../Media/Package/Russia.jpg";
import image4 from "../../Media/Package/Malaysia.png";
import image5 from "../../Media/Package/japan.png";
import image6 from "../../Media/Package/Kashmir.jpg";

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
  Rajasthan: image1,
  Goa: image2,
  Russia: image3,
  Malaysia: image4,
  Japan: image5,
  Kashmir: image6,
};




const Package: React.FC = () => {
  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

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
            Holiday Domestic/International Tour Package
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#6A6868] sm:text-base md:text-lg">
            Experience the world with thoughtfully curated holiday tours.
            Luxury, adventure and comfort—perfectly blended for you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10 xl:grid-cols-3">
          {PackageDepartments.map((dept) => (
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

export default Package;