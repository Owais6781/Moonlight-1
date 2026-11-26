
import * as React from "react";
import { useLocation } from "react-router-dom";
import ReusableCard from "./ReusableCard/ReusableCard"
import { type Department, medicalDepartments, } from "./Department type/Department";
import ReusableModal from "./ReusableModal/ReusableModal";
import HowItWorks from "../HomeSection/Work";
import image1 from "../../Media/Medical/General Medicine.png";
import image2 from "../../Media/Medical/Nursing.png";
import image3 from "../../Media/Medical/emergengcy.jpg";
import image4 from "../../Media/Medical/Anesthesiology.jpg";
import image5 from "../../Media/Medical/Pediatrics.jpg";
import image6 from "../../Media/Medical/Obstetrics & Gynecology.jpg";

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

const tagImageMap: Record<string, string> = {
  "General Medicine": image1,
  "Nursing Services": image2,
  "Emergency & Trauma": image3,
  "Anesthesiology": image4,
  "Pediatrics": image5,
  "Obstetrics & Gynecology": image6,
};



const Medical: React.FC = () => {
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;
  const [selectedDept, setSelectedDept] = React.useState<Department | null>(null);


  React.useEffect(() => {
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
            Medical Departments
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#6A6868] sm:text-base md:text-lg">
            We offer competent and certified candidates for every healthcare
            department.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 xl:grid-cols-3 lg:gap-10">
          {medicalDepartments.map((dept) => (
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

      {fromOurExpertise && <HowItWorks />}
    </section>
  );
};

export default Medical;