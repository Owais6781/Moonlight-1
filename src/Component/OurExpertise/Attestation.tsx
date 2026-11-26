


// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import image1 from "../../Media/Attestation/Dubai Embassy.png";
// import image2 from "../../Media/Attestation/Saudi embassy,.png";
// import image3 from "../../Media/Attestation/Qatar Embassy.png";
// import image4 from "../../Media/Attestation/Kuwait Embassy.png";
// import image5 from "../../Media/Attestation/Bahrain Embassy.png";
// import image6 from "../../Media/Attestation/MEA.png";

// /* ---------------- IMAGE MAP ---------------- */
// const tagImageMap: Record<string, string> = {
//     "UAE Embassy": image1,
//     "Saudi Embassy": image2,
//     "Kuwait Embassy": image4,
//     "Qatar Embassy": image3,
//     "Bahrain Embassy": image5,
//     "MEA and apostille": image6,
// };

// /* ---------------- TYPES ---------------- */
// type Department = {
//     tag: string;
//     title: string;
//     description: string;
//     tagColor?: string;
// };

// type CardProps = Department & {
//     onReadMore: () => void;
// };

// /* ---------------- CARD COMPONENT ---------------- */
// const Card: React.FC<CardProps> = ({
//     tag,
//     title,
//     description,
//     tagColor = "text-blue-600",
//     onReadMore,
// }) => {
//     const imageUrl = tagImageMap[tag];

//     return (
//         <div
//             className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer min-h-[340px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
//             onClick={onReadMore}
//         >
//             {/* Image */}
//             <div
//                 className="h-40 sm:h-44 md:h-48 lg:h-52 bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${imageUrl})` }}
//             >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
//                 <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
//                     {tag}
//                 </span>

//                 <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
//                     {title}
//                 </h3>

//                 <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
//                     {description}
//                 </p>

//                 <button
//                     onClick={onReadMore}
//                     className="mt-auto pt-4 inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base group-hover:gap-3 transition-all cursor-pointer"
//                 >
//                     Read More <span className="text-base sm:text-lg">→</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// /* ---------------- MAIN PAGE ---------------- */
// const Attestation: React.FC = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;

//     const [selectedDept, setSelectedDept] = useState<Department | null>(null);

//     const departments: Department[] = [
//         {
//             tag: "UAE Embassy",
//             title: "UAE Embassy Attestation Services",
//             description:
//                 "End-to-end document attestation services for UAE ensuring legal compliance.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Saudi Embassy",
//             title: "Saudi Embassy Attestation",
//             description:
//                 "Accurate and compliant Saudi Embassy documentation support.",
//             tagColor: "text-green-600",
//         },
//         {
//             tag: "Kuwait Embassy",
//             title: "Kuwait Embassy Attestation",
//             description:
//                 "Professional Kuwait Embassy documentation handling.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Qatar Embassy",
//             title: "Qatar Embassy Attestation",
//             description:
//                 "Fast and secure document attestation for Qatar employment.",
//             tagColor: "text-orange-500",
//         },
//         {
//             tag: "Bahrain Embassy",
//             title: "Bahrain Embassy Attestation",
//             description:
//                 "Trusted Bahrain Embassy document attestation services.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "MEA and apostille",
//             title: "MEA and Apostille Services",
//             description:
//                 "Document Attestation by Ministry of External Affairs and Apostille stamping.",
//             tagColor: "text-orange-500",
//         },
//     ];

//     return (
//         <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-5 sm:py-6 md:py-8 lg:py-10">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//                 <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//                     <h2 className="py-2 sm:py-3 md:py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
//                         Document Legalisation/Attestation
//                     </h2>

//                     <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
//                         Fast, secure and reliable document attestation services.
//                     </p>

//                     {/* Desktop / tablet back button */}
//                     <div className="w-full justify-start hidden md:block mt-6">
//                         {fromOurExpertise && (
//                             <button
//                                 onClick={() => navigate(-1)}
//                                 className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//                             >

//                                 <ArrowLeft
//                                     className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
//                                 />


//                                 <span className="font-medium">Back</span>
//                             </button>
//                         )}
//                     </div>


//                 </div>

//                 {/* CARDS */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
//                     {departments.map((dept) => (
//                         <Card
//                             key={dept.tag}
//                             {...dept}
//                             onReadMore={() => setSelectedDept(dept)}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* MODAL */}
//             {selectedDept && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
//                     onClick={() => setSelectedDept(null)}
//                 >
//                     <div
//                         className="bg-white w-full max-w-xl mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         {/* Close */}
//                         <button
//                             onClick={() => setSelectedDept(null)}
//                             className="absolute top-3 right- sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
//                         >
//                             ✕
//                         </button>

//                         {/* Image */}
//                         <div
//                             className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
//                             style={{
//                                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//                             }}
//                         />

//                         <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
//                             {selectedDept.tag}
//                         </span>

//                         <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
//                             {selectedDept.title}
//                         </h3>

//                         <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-wrap overflow-auto max-h-40">
//                             {selectedDept.description}
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Attestation;




import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

import image1 from "../../Media/Attestation/Dubai Embassy.png";
import image2 from "../../Media/Attestation/Saudi embassy,.png";
import image3 from "../../Media/Attestation/Qatar Embassy.png";
import image4 from "../../Media/Attestation/Kuwait Embassy.png";
import image5 from "../../Media/Attestation/Bahrain Embassy.png";
import image6 from "../../Media/Attestation/MEA.png";

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
  "UAE Embassy": image1,
  "Saudi Embassy": image2,
  "Kuwait Embassy": image4,
  "Qatar Embassy": image3,
  "Bahrain Embassy": image5,
  "MEA and apostille": image6,
};

type Department = {
  tag: string;
  title: string;
  description: string;
  /** Kept so existing data still type-checks; the redesign uses the brand palette. */
  tagColor?: string;
};

type CardProps = Department & {
  onReadMore: () => void;
};

const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (!img.src.endsWith(FALLBACK_IMAGE)) img.src = FALLBACK_IMAGE;
};

const Card: React.FC<CardProps> = ({ tag, title, description, onReadMore }) => {
  const imageUrl = tagImageMap[tag] || FALLBACK_IMAGE;

  return (
    <article
      className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white
      shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] transition-all duration-300
      hover:-translate-y-1.5 hover:border-[#015399] hover:shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)]
      focus-within:ring-2 focus-within:ring-[#015399] focus-within:ring-offset-2 focus-within:ring-offset-[#F5F7FA]
      sm:min-h-[360px] lg:min-h-[400px]"
    >
      <div className="relative h-44 shrink-0 overflow-hidden bg-[#06294D] lg:h-52">
        <img
          src={imageUrl}
          alt={`${tag}`}
          loading="lazy"
          onError={handleImageError}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06294D]/75 via-[#06294D]/10 to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-[#015399] shadow-sm">
          {tag}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-heading text-xl font-semibold leading-snug text-[#06294D] sm:text-2xl">
          {title}
        </h3>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#6A6868] sm:text-base">
          {description}
        </p>

        {/* ::after stretches the button over the whole card: full card is clickable,
            with no nested interactive elements and no double-firing. */}
        <button
          type="button"
          onClick={onReadMore}
          aria-label={`Read more about ${tag}`}
          className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[#015399] outline-none
          after:absolute after:inset-0 after:content-[''] sm:text-base"
        >
          Read more
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </button>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-0 bg-[#015399] transition-all duration-500 ease-out group-hover:w-full"
      />
    </article>
  );
};

const Attestation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const reduceMotion = useReducedMotion();
  const fromOurExpertise = location.state?.fromOurExpertise || false;

  const [selectedDept, setSelectedDept] = useState<Department | null>(null);

  const departments: Department[] = [
    {
      tag: "UAE Embassy",
      title: "UAE Embassy Attestation Services",
      description:
        "End-to-end document attestation services for UAE ensuring legal compliance.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Saudi Embassy",
      title: "Saudi Embassy Attestation",
      description:
        "Accurate and compliant Saudi Embassy documentation support.",
      tagColor: "text-green-600",
    },
    {
      tag: "Kuwait Embassy",
      title: "Kuwait Embassy Attestation",
      description:
        "Professional Kuwait Embassy documentation handling.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Qatar Embassy",
      title: "Qatar Embassy Attestation",
      description:
        "Fast and secure document attestation for Qatar employment.",
      tagColor: "text-orange-500",
    },
    {
      tag: "Bahrain Embassy",
      title: "Bahrain Embassy Attestation",
      description:
        "Trusted Bahrain Embassy document attestation services.",
      tagColor: "text-green-500",
    },
    {
      tag: "MEA and apostille",
      title: "MEA and Apostille Services",
      description:
        "Document Attestation by Ministry of External Affairs and Apostille stamping.",
      tagColor: "text-orange-500",
    },
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
        {/* Back button: now visible on all screen sizes */}
        {fromOurExpertise && (
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-[#6A6868]/30 bg-white px-5 py-2
            text-sm font-medium text-[#06294D] shadow-sm transition-all duration-300
            hover:border-[#015399] hover:text-[#015399] hover:shadow-md
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399]"
          >
            <ArrowLeft
              className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back
          </button>
        )}

        <div className="mb-12 text-center sm:mb-14 lg:mb-16">
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#06294D] sm:text-4xl lg:text-5xl">
            Document Legalisation/Attestation
          </h2>
          <div className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[#6A6868] sm:text-base md:text-lg">
            Fast, secure and reliable document attestation services.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10 xl:grid-cols-3">
          {departments.map((dept) => (
            <Card
              key={dept.tag}
              {...dept}
              onReadMore={() => setSelectedDept(dept)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDept && (
          <motion.div
            key="overlay"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#06294D]/60 px-3 backdrop-blur-sm sm:px-4"
            onClick={() => setSelectedDept(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="attestation-dialog-title"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedDept(null)}
                aria-label="Close"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#06294D] shadow
                transition-colors hover:bg-[#015399] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] sm:right-4 sm:top-4"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="mb-5 h-44 overflow-hidden rounded-2xl bg-[#06294D] sm:mb-6 sm:h-52 md:h-56">
                <img
                  src={tagImageMap[selectedDept.tag] || FALLBACK_IMAGE}
                  alt={`${selectedDept.tag}`}
                  onError={handleImageError}
                  className="h-full w-full object-cover"
                />
              </div>

              <span className="text-sm font-semibold text-[#015399]">
                {selectedDept.tag}
              </span>

              <h3
                id="attestation-dialog-title"
                className="mt-2 font-heading text-2xl font-semibold leading-snug text-[#06294D] sm:text-3xl"
              >
                {selectedDept.title}
              </h3>

              <div className="mt-4 h-[3px] w-12 rounded-full bg-[#015399]" aria-hidden="true" />

              <p className="mt-4 max-h-40 overflow-auto whitespace-pre-wrap text-sm leading-relaxed text-[#6A6868] sm:text-base">
                {selectedDept.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Attestation;