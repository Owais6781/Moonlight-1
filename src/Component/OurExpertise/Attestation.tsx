


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

// /* ---------------- CARD COMPONENT ---------------- */
// type CardProps = {
//     tag: string;
//     title: string;
//     description: string;
//     tagColor?: string;
//     onReadMore: () => void;
// };

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
//             className="group bg-white rounded-2xl overflow-hidden
//       border-2 border-slate-100 shadow-sm
//        hover:shadow-2xl hover:-translate-y-2
//       transition-all duration-300  cursor-pointer"
//             onClick={onReadMore}
//         >
//             {/* Image */}
//             <div
//                 className="h-52 bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${imageUrl})` }}
//             >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-6 space-y-4 ">
//                 <span className={`text-xs font-semibold uppercase ${tagColor}`}>
//                     {tag}
//                 </span>

//                 <h3 className="text-xl font-bold text-slate-900 leading-snug">
//                     {title}
//                 </h3>

//                 <p className="text-slate-600 text-sm line-clamp-2">
//                     {description}
//                 </p>

//                 <button
//                     onClick={onReadMore}
//                     className="inline-flex items-center gap-2
//           text-blue-600 font-medium text-sm
//           group-hover:gap-3 transition-all cursor-pointer"
//                 >
//                     Read More <span className="text-lg">→</span>
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

//     const [selectedDept, setSelectedDept] = useState<any>(null);


//     const departments = [
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
//                 "Document Attestation by Ministry of External Affairs and Apostle stamping.",
//             // " All original documents/copies requiring attestation or Apostille should be first authenticated by the designated authorities of the State/Union Territory from where the document has been issued.                          State Home Department Authentication: In case of personal documents like Birth Certificates/Marriage Certificates etc, Home/General Administration Department of the concerned State Government/Union Territory are the designated authorities.                                                       State HRD Authentication :In case of educational documents, the documents should first be authenticated by the Education Department of the concerned State Government/Union Territory.  ",
//             tagColor: "text-orange-500",
//         },
//     ];


//     return (
//         <section className="bg-gradient-to-br from-slate-50 to-slate-100  py-4">
//             <div className="max-w-7xl mx-auto px-6">


//                 <div className="mb-16">

//                     <h2 className="text-4xl py-4 font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//                         Document Legalisation/Attestation
//                     </h2>
//                     <p className="text-slate-600 mt-2 text-center">
//                         Fast, secure and reliable document attestation services.
//                     </p>
//                     {/* <div className="w-full flex gap-2  justify-end">
//                         {fromOurExpertise && (
//                             <button
//                                 onClick={() => navigate(-1)}
//                                 className="px-6 py-2 bg-slate-600 text-white rounded-xl  "
//                             >
//                                 Back
//                             </button>
//                         )}
//                     </div> */}
//                     <div className="w-full  justify-start hidden md:block ">
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
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//                     {departments.map((dept) => (
//                         <Card
//                             key={dept.tag}
//                             {...dept}
//                             onReadMore={() => setSelectedDept(dept)}
//                         />
//                     ))}
//                 </div>
//             </div>

//             {/* ---------------- MODAL ---------------- */}
//             {selectedDept && (
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSelectedDept(null)}>
//                     <div className="bg-white max-w-xl w-full mx-4 rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

//                         {/* Close */}
//                         <button
//                             onClick={() => setSelectedDept(null)}
//                             className="absolute top-4 right-4 cursor-pointer text-red-400 hover:text-red-700 text-xl"
//                         >
//                             ✕
//                         </button>

//                         {/* Image */}
//                         <div
//                             className="h-56 rounded-2xl bg-cover bg-center mb-6"
//                             style={{
//                                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//                             }}
//                         />

//                         <span className={`text-sm font-semibold ${selectedDept.tagColor}`}>
//                             {selectedDept.tag}
//                         </span>

//                         <h3 className="text-2xl font-bold mt-2">
//                             {selectedDept.title}
//                         </h3>

//                         <p className="text-slate-600 mt-4 leading-relaxed whitespace-pre-wrap  overflow-auto max-h-40">
//                             {selectedDept.description}
//                         </p>

//                         <div className="mt-6 text-right">
//                             {/* <button
//                 onClick={() => setSelectedDept(null)}
//                 className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
//                 text-white font-semibold hover:shadow-lg transition"
//               >
//                 Close
//               </button> */}
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Attestation;




import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import image1 from "../../Media/Attestation/Dubai Embassy.png";
import image2 from "../../Media/Attestation/Saudi embassy,.png";
import image3 from "../../Media/Attestation/Qatar Embassy.png";
import image4 from "../../Media/Attestation/Kuwait Embassy.png";
import image5 from "../../Media/Attestation/Bahrain Embassy.png";
import image6 from "../../Media/Attestation/MEA.png";

/* ---------------- IMAGE MAP ---------------- */
const tagImageMap: Record<string, string> = {
  "UAE Embassy": image1,
  "Saudi Embassy": image2,
  "Kuwait Embassy": image4,
  "Qatar Embassy": image3,
  "Bahrain Embassy": image5,
  "MEA and apostille": image6,
};

/* ---------------- TYPES ---------------- */
type Department = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
};

type CardProps = Department & {
  onReadMore: () => void;
};

/* ---------------- CARD COMPONENT ---------------- */
const Card: React.FC<CardProps> = ({
  tag,
  title,
  description,
  tagColor = "text-blue-600",
  onReadMore,
}) => {
  const imageUrl = tagImageMap[tag];

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer min-h-[340px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
      onClick={onReadMore}
    >
      {/* Image */}
      <div
        className="h-40 sm:h-44 md:h-48 lg:h-52 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="mt-2 text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed line-clamp-3">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="mt-auto pt-4 inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base group-hover:gap-3 transition-all cursor-pointer"
        >
          Read More <span className="text-base sm:text-lg">→</span>
        </button>
      </div>
    </div>
  );
};

/* ---------------- MAIN PAGE ---------------- */
const Attestation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-5 sm:py-6 md:py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="py-2 sm:py-3 md:py-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
            Document Legalisation/Attestation
          </h2>

          <p className="mt-2 text-center text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Fast, secure and reliable document attestation services.
          </p>

          {/* Desktop / tablet back button */}
          <div className="hidden md:flex w-full justify-start mt-5">
            {fromOurExpertise && (
              <button
                onClick={() => navigate(-1)}
                className="group flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium text-sm md:text-base">Back</span>
              </button>
            )}
          </div>

          {/* Mobile back button */}
          <div className="  w-full justify-center   hidden md:block mt-4">
            {fromOurExpertise && (
              <button
                onClick={() => navigate(-1)}
                className="group flex items-center gap-2 px-4 py-2 rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <span className="font-medium text-sm">Back</span>
              </button>
            )}
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
          {departments.map((dept) => (
            <Card
              key={dept.tag}
              {...dept}
              onReadMore={() => setSelectedDept(dept)}
            />
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selectedDept && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
          onClick={() => setSelectedDept(null)}
        >
          <div
            className="bg-white w-full max-w-xl mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-3 right- sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
            >
              ✕
            </button>

            {/* Image */}
            <div
              className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
              style={{
                backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
              }}
            />

            <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
              {selectedDept.tag}
            </span>

            <h3 className="mt-2 text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 leading-snug">
              {selectedDept.title}
            </h3>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed whitespace-pre-wrap overflow-auto max-h-40">
              {selectedDept.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Attestation;




