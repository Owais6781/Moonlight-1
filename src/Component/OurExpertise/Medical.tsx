
// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import HowItWorks from "../HomeSection/Work";
// import image1 from "../../Media/Medical/General Medicine.png"
// import image2 from "../../Media/Medical/Nursing.png"
// import image3 from "../../Media/Medical/emergengcy.jpg"
// import image4 from "../../Media/Medical/Anesthesiology.jpg"
// import image5 from "../../Media/Medical/Pediatrics.jpg"
// import image6 from "../../Media/Medical/Obstetrics & Gynecology.jpg"

// // Map each department tag to its image
// const tagImageMap: Record<string, string> = {
//   "Nursing Services": image2,
//   "General Medicine": image1,
//   "Emergency & Trauma": image3,
//   "Anesthesiology": image4,
//   "Pediatrics": image5,
//   "Obstetrics & Gynecology": image6,
//   "Orthopedics": "/images/orthopedics.jpg",
//   "Cardiology": "/images/cardiology.jpg",
//   "Neurology": "/images/neurology.jpg",
//   "Oncology (Cancer Care)": "/images/oncology.jpg",
//   "Nephrology": "/images/nephrology.jpg",
//   "Gastroenterology": "/images/gastroenterology.jpg",
//   "Pulmonology (Chest Medicine)": "/images/pulmonology.jpg",
//   "Endocrinology": "/images/endocrinology.jpg",
//   "Rheumatology": "/images/rheumatology.jpg",
//   "Dermatology": "/images/dermatology.jpg",
//   "Psychiatry": "/images/psychiatry.jpg",
//   "Urology": "/images/urology.jpg",
//   "Ophthalmology (Eye Care)": "/images/ophthalmology.jpg",
//   "ENT (Ear, Nose & Throat)": "/images/ent.jpg",
//   "Radiology & Imaging": "/images/radiology.jpg",
//   "Pathology & Laboratory Medicine": "/images/pathology.jpg",
//   "Nuclear Medicine": "/images/nuclear.jpg",
//   "Microbiology": "/images/microbiology.jpg",
//   "Biochemistry": "/images/biochemistry.jpg",
//   "Cardiothoracic Surgery": "/images/cardiothoracic.jpg",
//   "Neurosurgery": "/images/neurosurgery.jpg",
//   "Plastic & Reconstructive Surgery": "/images/plastic-surgery.jpg",
//   "Pediatric Surgery": "/images/pediatric-surgery.jpg",
//   "Vascular Surgery": "/images/vascular-surgery.jpg",
//   "Laparoscopic Surgery": "/images/laparoscopic.jpg",

//   "Physiotherapy & Rehabilitation": "/images/physiotherapy.jpg",
// };

// // Card Props
// type Department = {
//   tag: string;
//   title: string;
//   description: string;
//   tagColor?: string;
// };



// type CardProps = Department & {
//   onReadMore: () => void;
// };

// const Card: React.FC<CardProps> = ({ tag, title, description, onReadMore, tagColor = "text-blue-600" }) => {
//   const imageUrl = tagImageMap[tag] || "/images/default.jpg";

//   return (

//     <div
//       onClick={onReadMore}
//       className="group bg-white rounded-2xl overflow-hidden
//              border border-slate-200 shadow-sm
//              hover:shadow-2xl hover:-translate-y-2
//              transition-all duration-300 cursor-pointer
//              h-[420px] flex flex-col"
//     >
//       {/* Image */}
//       <div
//         className="h-52 bg-cover bg-center relative shrink-0"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="p-6 flex flex-col flex-1">
//         <span className={`text-xs font-semibold uppercase ${tagColor}`}>
//           {tag}
//         </span>

//         <h3 className="text-xl font-bold text-slate-900 leading-snug mt-2">
//           {title}
//         </h3>

//         <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mt-2">
//           {description}
//         </p>

//         {/* Push button to bottom */}
//         <button
//           onClick={onReadMore}
//           className="mt-auto text-blue-600 cursor-pointer font-medium text-sm flex justify-start"
//         >
//           Read More →
//         </button>
//       </div>
//     </div>

//   );
// };

// const Medical: React.FC = () => {

//   const navigate = useNavigate();
//   const location = useLocation();
//   const fromOurExpertise = location.state?.fromOurExpertise || false;
//   const [selectedDept, setSelectedDept] = React.useState<Department | null>(null);


//   const departments = [
//     {
//       tag: "General Medicine",
//       title: "Trusted Physicians for Lifelong Wellness",
//       description:
//         "Diagnosis and management of acute and chronic adult medical conditions with holistic, patient-centered care.",
//       tagColor: "text-blue-600",
//     },
//     {
//       tag: "Nursing Services",
//       title: "Professional Nursing Services You Can Trust",
//       description:
//         "Comprehensive nursing care delivered by trained professionals, ensuring patient comfort, safety and recovery at every stage.",
//       tagColor: "text-green-600",
//     },
//     {
//       tag: "Emergency & Trauma",
//       title: "24/7 Critical & Life-Saving Care",
//       description:
//         "The Emergency & Trauma department provides round-the-clock care for accidents, injuries and critical illnesses.",
//       tagColor: "text-orange-500",
//     },
//     {
//       tag: "Anesthesiology",
//       title: "Expert Anesthetic Care",
//       description:
//         "Providing safe anesthesia and perioperative care for all surgical procedures.",
//       tagColor: "text-blue-600",
//     },
//     {
//       tag: "Pediatrics",
//       title: "Comprehensive Child Healthcare",
//       description:
//         "Dedicated care for infants, children and adolescents to support healthy growth and development.",
//       tagColor: "text-green-500",
//     },
//     {
//       tag: "Obstetrics & Gynecology",
//       title: "Women’s Health & Maternity Care",
//       description:
//         "Comprehensive care for pregnancy, childbirth and women’s reproductive health.",
//       tagColor: "text-orange-500",
//     },
//   ];

//   return (

//     <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-6">
//       <div className="max-w-7xl mx-auto px-6">


//         <div className="mb-16">

//           <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//             Medical Departments
//           </h2>
//             <p className="text-slate-600 mt-2 text-center">
//             We offer competent and certified candidates for every healthcare department.
//           </p>
//           {/* <div className="w-full flex gap-2  justify-end">
//             {fromOurExpertise && (
//               <button
//                 onClick={() => navigate(-1)}
//                 className="px-6 py-2 bg-slate-600 rounded-xl text-white  cursor-pointer  "
//               >
//                 Back
//               </button>
//             )}
//           </div> */}
//           <div className="w-full  justify-start  hidden  md:block">
//             {fromOurExpertise && (
//               <button
//                 onClick={() => navigate(-1)}
//                 className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//               >

//                 <ArrowLeft
//                   className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
//                 />


//                 <span className="font-medium">Back</span>
//               </button>
//             )}
//           </div>


//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {departments.map((dept) => (
//             <Card
//               key={dept.tag}
//               {...dept}
//               onReadMore={() => setSelectedDept(dept)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* ---------------- MODAL ---------------- */}
//       {selectedDept && (
//         <div className="fixed inset-0 z-50  flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSelectedDept(null)}>
//           <div className="bg-white max-w-xl w-full mx-4 rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

//             {/* Close */}
//             <button
//               onClick={() => setSelectedDept(null)}
//               className="absolute top-4 right-4 cursor-pointer text-red-400 hover:text-red-700 text-xl"
//             >
//               ✕
//             </button>

//             {/* Image */}
//             <div
//               className="h-56 rounded-2xl bg-cover bg-center mb-6"
//               style={{
//                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//               }}
//             />

//             <span className={`text-sm font-semibold ${selectedDept.tagColor}`}>
//               {selectedDept.tag}
//             </span>

//             <h3 className="text-2xl font-bold mt-2">
//               {selectedDept.title}
//             </h3>

//             <p className="text-slate-600 mt-4 leading-relaxed">
//               {selectedDept.description}
//             </p>

//             <div className="mt-6 text-right">
//               {/* <button
//                 onClick={() => setSelectedDept(null)}
//                 className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
//                 text-white font-semibold hover:shadow-lg transition"
//               >
//                 Close
//               </button> */}
//             </div>
//           </div>
//         </div>
//       )}

//       {fromOurExpertise && (
//         <HowItWorks />
//       )}
//       {/* <HowItWorks /> */}

//     </section>
//   );
// };

// export default Medical;



import * as React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import HowItWorks from "../HomeSection/Work";
import image1 from "../../Media/Medical/General Medicine.png";
import image2 from "../../Media/Medical/Nursing.png";
import image3 from "../../Media/Medical/emergengcy.jpg";
import image4 from "../../Media/Medical/Anesthesiology.jpg";
import image5 from "../../Media/Medical/Pediatrics.jpg";
import image6 from "../../Media/Medical/Obstetrics & Gynecology.jpg";

const tagImageMap: Record<string, string> = {
  "Nursing Services": image2,
  "General Medicine": image1,
  "Emergency & Trauma": image3,
  "Anesthesiology": image4,
  "Pediatrics": image5,
  "Obstetrics & Gynecology": image6,
  "Orthopedics": "/images/orthopedics.jpg",
  "Cardiology": "/images/cardiology.jpg",
  "Neurology": "/images/neurology.jpg",
  "Oncology (Cancer Care)": "/images/oncology.jpg",
  "Nephrology": "/images/nephrology.jpg",
  "Gastroenterology": "/images/gastroenterology.jpg",
  "Pulmonology (Chest Medicine)": "/images/pulmonology.jpg",
  "Endocrinology": "/images/endocrinology.jpg",
  "Rheumatology": "/images/rheumatology.jpg",
  "Dermatology": "/images/dermatology.jpg",
  "Psychiatry": "/images/psychiatry.jpg",
  "Urology": "/images/urology.jpg",
  "Ophthalmology (Eye Care)": "/images/ophthalmology.jpg",
  "ENT (Ear, Nose & Throat)": "/images/ent.jpg",
  "Radiology & Imaging": "/images/radiology.jpg",
  "Pathology & Laboratory Medicine": "/images/pathology.jpg",
  "Nuclear Medicine": "/images/nuclear.jpg",
  "Microbiology": "/images/microbiology.jpg",
  "Biochemistry": "/images/biochemistry.jpg",
  "Cardiothoracic Surgery": "/images/cardiothoracic.jpg",
  "Neurosurgery": "/images/neurosurgery.jpg",
  "Plastic & Reconstructive Surgery": "/images/plastic-surgery.jpg",
  "Pediatric Surgery": "/images/pediatric-surgery.jpg",
  "Vascular Surgery": "/images/vascular-surgery.jpg",
  "Laparoscopic Surgery": "/images/laparoscopic.jpg",
  "Physiotherapy & Rehabilitation": "/images/physiotherapy.jpg",
};

type Department = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
};

type CardProps = Department & {
  onReadMore: () => void;
};

const Card: React.FC<CardProps> = ({
  tag,
  title,
  description,
  onReadMore,
  tagColor = "text-blue-600",
}) => {
  const imageUrl = tagImageMap[tag] || "/images/default.jpg";

  return (
    <div
      onClick={onReadMore}
      className="group bg-white rounded-2xl overflow-hidden
      border border-slate-200 shadow-sm
      hover:shadow-2xl hover:-translate-y-2
      transition-all duration-300 cursor-pointer
      min-h-[360px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px]
      flex flex-col"
    >
      <div
        className="h-40 sm:h-44 md:h-48 lg:h-52 bg-cover bg-center relative shrink-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-slate-900 leading-snug mt-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-2 line-clamp-3">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="mt-auto pt-4 text-blue-600 cursor-pointer font-medium text-sm sm:text-base flex justify-start"
        >
          Read More →
        </button>
      </div>
    </div>
  );
};

const Medical: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;
  const [selectedDept, setSelectedDept] = React.useState<Department | null>(null);

  const departments = [
    {
      tag: "General Medicine",
      title: "Trusted Physicians for Lifelong Wellness",
      description:
        "Diagnosis and management of acute and chronic adult medical conditions with holistic, patient-centered care.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Nursing Services",
      title: "Professional Nursing Services You Can Trust",
      description:
        "Comprehensive nursing care delivered by trained professionals, ensuring patient comfort, safety and recovery at every stage.",
      tagColor: "text-green-600",
    },
    {
      tag: "Emergency & Trauma",
      title: "24/7 Critical & Life-Saving Care",
      description:
        "The Emergency & Trauma department provides round-the-clock care for accidents, injuries and critical illnesses.",
      tagColor: "text-orange-500",
    },
    {
      tag: "Anesthesiology",
      title: "Expert Anesthetic Care",
      description:
        "Providing safe anesthesia and perioperative care for all surgical procedures.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Pediatrics",
      title: "Comprehensive Child Healthcare",
      description:
        "Dedicated care for infants, children and adolescents to support healthy growth and development.",
      tagColor: "text-green-500",
    },
    {
      tag: "Obstetrics & Gynecology",
      title: "Women’s Health & Maternity Care",
      description:
        "Comprehensive care for pregnancy, childbirth and women’s reproductive health.",
      tagColor: "text-orange-500",
    },
  ];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
            Medical Departments
          </h2>

          <p className="text-slate-600 mt-3 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer competent and certified candidates for every healthcare department.
          </p>

          <div className="w-full justify-start hidden md:block mt-6">
            {fromOurExpertise && (
              <button
                onClick={() => navigate(-1)}
                className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
              >

                <ArrowLeft
                  className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
                />


                <span className="font-medium">Back</span>
              </button>
            )}
          </div>
        </div>

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

      {selectedDept && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
          onClick={() => setSelectedDept(null)}
        >
          <div
            className="bg-white max-w-xl w-full rounded-2xl sm:rounded-3xl shadow-2xl
            p-4 sm:p-6 md:p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
            >
              ✕
            </button>

            <div
              className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
              style={{
                backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
              }}
            />

            <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
              {selectedDept.tag}
            </span>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-snug">
              {selectedDept.title}
            </h3>

            <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
              {selectedDept.description}
            </p>
          </div>
        </div>
      )}

      {fromOurExpertise && <HowItWorks />}
    </section>
  );
};

export default Medical;


