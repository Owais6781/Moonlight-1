




import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ReusableCard from "./ReusableCard/ReusableCard"
import { type Department, RecruitmentDepartments, } from "./Department type/Department";
import ReusableModal from "./ReusableModal/ReusableModal";
import HowItWorks from "../HomeSection/Work";

// Import images
import image1 from "../../Media/Recruitment/Construction-Workforce.jpg";
import image2 from "../../Media/Recruitment/Hospitality & Hotel Staff.png";
import image3 from "../../Media/Recruitment/Security & Facility Management.png";
import image4 from "../../Media/Recruitment/Skilled & Unskilled Workers.png";
import image5 from "../../Media/Recruitment/Technical & Non-Technical Staff.png";
import image6 from "../../Media/Recruitment/Oil & Gas Workforce.png";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue, for dark areas)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily,
 * otherwise it falls back to the body font.
 */

const FALLBACK_IMAGE = "/images/default.jpg";

// Map each department tag to its image
const tagImageMap: Record<string, string> = {
  "Construction Workforce": image1,
  "Hospitality & Hotel Staff": image2,
  "Security & Facility Management": image3,
  "Skilled & Unskilled Workers": image4,
  "Technical & Non-Technical Staff": image5,
  "Oil & Gas Workforce": image6,
};





const Recruitment: React.FC = () => {
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;

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
    <div>
      <section className="bg-[#F5F7FA] py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
          <div className="mb-12 text-center sm:mb-14 lg:mb-16">
            <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#06294D] sm:text-4xl lg:text-5xl">
              Manpower Recruitment
            </h2>
            <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
            <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#6A6868] sm:text-base md:text-lg">
              Explore our comprehensive manpower recruitment solutions,
              connecting skilled professionals with businesses across multiple
              industries.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10 xl:grid-cols-3">
            {RecruitmentDepartments.map((dept) => (
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

        {/* MODAL */}
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

        {fromOurExpertise && <HowItWorks />}
      </section>
    </div>
  );
};

export default Recruitment;