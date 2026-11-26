

// import * as React from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import HowItWorks from "../HomeSection/Work";
// import image1 from "../../Media/Medical/General Medicine.png";
// import image2 from "../../Media/Medical/Nursing.png";
// import image3 from "../../Media/Medical/emergengcy.jpg";
// import image4 from "../../Media/Medical/Anesthesiology.jpg";
// import image5 from "../../Media/Medical/Pediatrics.jpg";
// import image6 from "../../Media/Medical/Obstetrics & Gynecology.jpg";

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

// type Department = {
//   tag: string;
//   title: string;
//   description: string;
//   tagColor?: string;
// };

// type CardProps = Department & {
//   onReadMore: () => void;
// };

// const Card: React.FC<CardProps> = ({
//   tag,
//   title,
//   description,
//   onReadMore,
//   tagColor = "text-blue-600",
// }) => {
//   const imageUrl = tagImageMap[tag] || "/images/default.jpg";

//   return (
//     <div
//       onClick={onReadMore}
//       className="group bg-white rounded-2xl overflow-hidden
//       border border-slate-200 shadow-sm
//       hover:shadow-2xl hover:-translate-y-2
//       transition-all duration-300 cursor-pointer
//       min-h-[360px] sm:min-h-[380px] md:min-h-[400px] lg:min-h-[420px]
//       flex flex-col"
//     >
//       <div
//         className="h-40 sm:h-44 md:h-48 lg:h-52 bg-cover bg-center relative shrink-0"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//       </div>

//       <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
//         <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
//           {tag}
//         </span>

//         <h3 className="text-lg sm:text-xl md:text-[22px] font-bold text-slate-900 leading-snug mt-2">
//           {title}
//         </h3>

//         <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed mt-2 line-clamp-3">
//           {description}
//         </p>

//         <button
//           onClick={onReadMore}
//           className="mt-auto pt-4 text-blue-600 cursor-pointer font-medium text-sm sm:text-base flex justify-start"
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
//     <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-6 sm:py-8 md:py-10 lg:py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//         <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
//             Medical Departments
//           </h2>

//           <p className="text-slate-600 mt-3 text-center text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
//             We offer competent and certified candidates for every healthcare department.
//           </p>

//           <div className="w-full justify-start hidden md:block mt-6">
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

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
//           {departments.map((dept) => (
//             <Card
//               key={dept.tag}
//               {...dept}
//               onReadMore={() => setSelectedDept(dept)}
//             />
//           ))}
//         </div>
//       </div>

//       {selectedDept && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
//           onClick={() => setSelectedDept(null)}
//         >
//           <div
//             className="bg-white max-w-xl w-full rounded-2xl sm:rounded-3xl shadow-2xl
//             p-4 sm:p-6 md:p-8 relative animate-fadeIn max-h-[90vh] overflow-y-auto"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedDept(null)}
//               className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
//             >
//               ✕
//             </button>

//             <div
//               className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
//               style={{
//                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//               }}
//             />

//             <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
//               {selectedDept.tag}
//             </span>

//             <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-snug">
//               {selectedDept.title}
//             </h3>

//             <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base">
//               {selectedDept.description}
//             </p>
//           </div>
//         </div>
//       )}

//       {fromOurExpertise && <HowItWorks />}
//     </section>
//   );
// };

// export default Medical;








// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";

// import image1 from "../../Media/Package/Rajasthan.jpg";
// import image2 from "../../Media/Package/Goa.jpg";
// import image3 from "../../Media/Package/Russia.jpg";
// import image4 from "../../Media/Package/Malaysia.png";
// import image5 from "../../Media/Package/japan.png";
// import image6 from "../../Media/Package/Kashmir.jpg";

// const tagImageMap: Record<string, string> = {
//     Rajasthan: image1,
//     Goa: image2,
//     Russia: image3,
//     Malaysia: image4,
//     Japan: image5,
//     Kashmir: image6,
// };

// type Department = {
//     tag: string;
//     title: string;
//     description: string;
//     tagColor?: string;
// };

// type CardProps = Department & {
//     onReadMore: () => void;
// };

// const Card: React.FC<CardProps> = ({
//     tag,
//     title,
//     description,
//     onReadMore,
//     tagColor = "text-blue-600",
// }) => {
//     const imageUrl = tagImageMap[tag] || "/images/default.jpg";

//     return (
//         <div
//             className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer min-h-[340px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
//             onClick={onReadMore}
//         >
//             <div
//                 className="h-40 sm:h-44 md:h-48 lg:h-52 bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${imageUrl})` }}
//             >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
//                 <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
//                     {tag}
//                 </span>

//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
//                     {title}
//                 </h3>

//                 <p className="text-slate-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
//                     {description}
//                 </p>

//                 <button
//                     onClick={onReadMore}
//                     className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base group-hover:gap-3 transition-all cursor-pointer mt-auto"
//                 >
//                     Read More <span className="text-base sm:text-lg">→</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// const Package: React.FC = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;

//     const [selectedDept, setSelectedDept] = useState<Department | null>(null);

//     const departments: Department[] = [
//         {
//             tag: "Rajasthan",
//             title: "Royal Rajasthan: A Journey Through Heritage",
//             description:
//                 "Experience majestic palaces, vibrant culture, desert safaris and timeless traditions with our expertly crafted Rajasthan tours.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Goa",
//             title: "Love, Luxury & Beaches in Goa",
//             description:
//                 "Celebrate your love with serene beaches, candlelight dinners, luxury resorts and unforgettable sunset moments in Goa.",
//             tagColor: "text-green-600",
//         },
//         {
//             tag: "Kashmir",
//             title: "Explore the Beauty of Kashmir",
//             description:
//                 "Snowy peaks, green valleys and timeless charm—Kashmir awaits your next adventure.",
//             tagColor: "text-orange-500",
//         },
//         {
//             tag: "Malaysia",
//             title: "Explore Malaysia’s Modern Wonders",
//             description:
//                 "Experience vibrant cities, tropical islands, cultural heritage and world-class attractions across Malaysia.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Japan",
//             title: "Timeless Traditions & Futuristic Cities",
//             description:
//                 "Experience ancient temples, cherry blossoms, bullet trains and cutting-edge city life across Japan.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "Russia",
//             title: "Explore Russia’s Rich History & Culture",
//             description:
//                 "From Moscow’s Red Square to Saint Petersburg’s royal palaces, experience Russia’s unforgettable charm.",
//             tagColor: "text-orange-500",
//         },
//     ];

//     return (
//         <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-5 sm:py-6 md:py-8 lg:py-10">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//                 <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-2 sm:py-3 md:py-4 font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
//                         Holiday Domestic/International Tour Package
//                     </h2>

//                     <p className="text-slate-600 mt-2 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
//                         Experience the world with thoughtfully curated holiday tours.
//                         Luxury, adventure and comfort—perfectly blended for you.
//                     </p>
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

//             {selectedDept && (
//                 <div
//                     className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
//                     onClick={() => setSelectedDept(null)}
//                 >
//                     <div
//                         className="bg-white max-w-xl w-full mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <button
//                             onClick={() => setSelectedDept(null)}
//                             className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
//                         >
//                             ✕
//                         </button>

//                         <div
//                             className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
//                             style={{
//                                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//                             }}
//                         />

//                         <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
//                             {selectedDept.tag}
//                         </span>

//                         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-snug">
//                             {selectedDept.title}
//                         </h3>

//                         <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
//                             {selectedDept.description}
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Package;









// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import HowItWorks from "../HomeSection/Work";
// import { ArrowLeft } from "lucide-react";

// // Import images
// import image1 from "../../Media/Recruitment/Construction-Workforce.jpg";
// import image2 from "../../Media/Recruitment/Hospitality & Hotel Staff.png";
// import image3 from "../../Media/Recruitment/Security & Facility Management.png";
// import image4 from "../../Media/Recruitment/Skilled & Unskilled Workers.png";
// import image5 from "../../Media/Recruitment/Technical & Non-Technical Staff.png";
// import image6 from "../../Media/Recruitment/Oil & Gas Workforce.png";

// // Map each department tag to its image
// const tagImageMap: Record<string, string> = {
//   "Construction Workforce": image1,
//   "Hospitality & Hotel Staff": image2,
//   "Security & Facility Management": image3,
//   "Skilled & Unskilled Workers": image4,
//   "Technical & Non-Technical Staff": image5,
//   "Oil & Gas Workforce": image6,
// };

// type Department = {
//   tag: string;
//   title: string;
//   description: string;
//   tagColor?: string;
// };

// type CardProps = Department & {
//   onReadMore: () => void;
// };

// const Card: React.FC<CardProps> = ({
//   tag,
//   title,
//   description,
//   onReadMore,
//   tagColor = "text-blue-600",
// }) => {
//   const imageUrl = tagImageMap[tag] || "/images/default.jpg";

//   return (
//     <div
//       className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer min-h-[340px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[400px] flex flex-col"
//       onClick={onReadMore}
//     >
//       {/* Image */}
//       <div
//         className="h-40 sm:h-44 md:h-48 lg:h-52 bg-cover bg-center relative"
//         style={{ backgroundImage: `url(${imageUrl})` }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//       </div>

//       {/* Content */}
//       <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
//         <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
//           {tag}
//         </span>

//         <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
//           {title}
//         </h3>

//         <p className="text-slate-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
//           {description}
//         </p>

//         <button
//           onClick={onReadMore}
//           className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base group-hover:gap-3 transition-all cursor-pointer mt-auto"
//         >
//           Read More <span className="text-base sm:text-lg">→</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// const Recruitment: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const fromOurExpertise = location.state?.fromOurExpertise || false;

//   const [selectedDept, setSelectedDept] = useState<Department | null>(null);

//   const departments: Department[] = [
//     {
//       tag: "Construction Workforce",
//       title: "Skilled Professionals Powering Every Build",
//       description:
//         "Providing skilled and reliable construction professionals, including engineers, supervisors, technicians and laborers to meet project demands efficiently and safely.",
//       tagColor: "text-blue-600",
//     },
//     {
//       tag: "Hospitality & Hotel Staff",
//       title: "Reliable Hospitality & Hotel Staffing Solutions",
//       description:
//         "Providing well-trained hospitality and hotel staff to ensure exceptional guest experiences and service excellence.",
//       tagColor: "text-green-600",
//     },
//     {
//       tag: "Security & Facility Management",
//       title: "24/7 Security & Facility Management Solutions",
//       description:
//         "End-to-end security and facility management solutions for safe and well-maintained environments.",
//       tagColor: "text-orange-500",
//     },
//     {
//       tag: "Technical & Non-Technical Staff",
//       title: "Empowering Businesses with Diverse Talent",
//       description:
//         "Providing qualified technical and non-technical staff to support operations, administration and specialized business functions across industries.",
//       tagColor: "text-blue-600",
//     },
//     {
//       tag: "Oil & Gas Workforce",
//       title: "Expert Oil & Gas Workforce You Can Rely On",
//       description:
//         "Providing certified and experienced oil and gas professionals for upstream, midstream and downstream operations with a strong focus on safety and compliance.",
//       tagColor: "text-green-500",
//     },
//     {
//       tag: "Skilled & Unskilled Workers",
//       title: "Workforce Support for Every Industry",
//       description:
//         "Providing skilled and unskilled workers to support construction, manufacturing, logistics and operational needs across multiple industries.",
//       tagColor: "text-orange-500",
//     },
//   ];

//   return (
//     <div>
//       <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-5 sm:py-6 md:py-8 lg:py-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//           <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//             <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
//               Manpower Recruitment
//             </h2>

//             <p className="text-slate-600 mt-2 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
//               Explore our comprehensive manpower recruitment solutions, connecting skilled professionals with businesses across multiple industries.
//             </p>

//             {/* Desktop / Tablet Back Button */}
//             <div className="w-full justify-start hidden md:block mt-6">
//               {fromOurExpertise && (
//                 <button
//                   onClick={() => navigate(-1)}
//                   className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//                 >

//                   <ArrowLeft
//                     className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
//                   />


//                   <span className="font-medium">Back</span>
//                 </button>
//               )}
//             </div>

//           </div>

//           {/* CARDS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 md:gap-8 lg:gap-10">
//             {departments.map((dept) => (
//               <Card
//                 key={dept.tag}
//                 {...dept}
//                 onReadMore={() => setSelectedDept(dept)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* MODAL */}
//         {selectedDept && (
//           <div
//             className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4"
//             onClick={() => setSelectedDept(null)}
//           >
//             <div
//               className="bg-white max-w-xl w-full mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <button
//                 onClick={() => setSelectedDept(null)}
//                 className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
//               >
//                 ✕
//               </button>

//               <div
//                 className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
//                 style={{
//                   backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//                 }}
//               />

//               <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
//                 {selectedDept.tag}
//               </span>

//               <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-snug">
//                 {selectedDept.title}
//               </h3>

//               <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
//                 {selectedDept.description}
//               </p>
//             </div>
//           </div>
//         )}

//         {fromOurExpertise && <HowItWorks />}
//       </section>
//     </div>
//   );
// };

// export default Recruitment;


// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft, ArrowRight, X } from "lucide-react";
// import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
// import HowItWorks from "../HomeSection/Work";

// // Import images
// import image1 from "../../Media/Recruitment/Construction-Workforce.jpg";
// import image2 from "../../Media/Recruitment/Hospitality & Hotel Staff.png";
// import image3 from "../../Media/Recruitment/Security & Facility Management.png";
// import image4 from "../../Media/Recruitment/Skilled & Unskilled Workers.png";
// import image5 from "../../Media/Recruitment/Technical & Non-Technical Staff.png";
// import image6 from "../../Media/Recruitment/Oil & Gas Workforce.png";

// /*
//  * Brand tokens used below (arbitrary-value classes, no config change needed):
//  *   Deep Navy #0B1F3A · Royal Blue #174A7E · Gold #D4AF6A
//  *   Light bg #F5F7FA · Dark text #172033
//  * Headings use `font-heading` — add it to tailwind.config.ts fontFamily,
//  * otherwise it falls back to the body font.
//  */

// const FALLBACK_IMAGE = "/images/default.jpg";

// // Map each department tag to its image
// const tagImageMap: Record<string, string> = {
//   "Construction Workforce": image1,
//   "Hospitality & Hotel Staff": image2,
//   "Security & Facility Management": image3,
//   "Skilled & Unskilled Workers": image4,
//   "Technical & Non-Technical Staff": image5,
//   "Oil & Gas Workforce": image6,
// };

// type Department = {
//   tag: string;
//   title: string;
//   description: string;
//   /** Kept so existing data still type-checks; the redesign uses one brand colour. */
//   tagColor?: string;
// };

// type CardProps = Department & {
//   onReadMore: () => void;
// };

// const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
//   const img = e.currentTarget;
//   if (!img.src.endsWith(FALLBACK_IMAGE)) img.src = FALLBACK_IMAGE;
// };

// const Card: React.FC<CardProps> = ({ tag, title, description, onReadMore }) => {
//   const imageUrl = tagImageMap[tag] || FALLBACK_IMAGE;

//   return (
//     <article
//       className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-2xl border border-[#0B1F3A]/10 bg-white
//       shadow-[0_8px_24px_-14px_rgba(11,31,58,0.25)] transition-all duration-300
//       hover:-translate-y-1.5 hover:border-[#D4AF6A] hover:shadow-[0_20px_40px_-18px_rgba(11,31,58,0.35)]
//       focus-within:ring-2 focus-within:ring-[#D4AF6A] focus-within:ring-offset-2 focus-within:ring-offset-[#F5F7FA]
//       sm:min-h-[360px] lg:min-h-[400px]"
//     >
//       {/* Image */}
//       <div className="relative h-44 shrink-0 overflow-hidden bg-[#0B1F3A] lg:h-52">
//         <img
//           src={imageUrl}
//           alt={tag}
//           loading="lazy"
//           onError={handleImageError}
//           className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//         />
//         <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/70 via-[#0B1F3A]/10 to-transparent" />
//         <span className="absolute bottom-3 left-4 rounded-full bg-[#0B1F3A]/80 px-3 py-1 text-xs font-medium text-[#D4AF6A] backdrop-blur-sm">
//           {tag}
//         </span>
//       </div>

//       {/* Content */}
//       <div className="flex flex-1 flex-col p-5 sm:p-6">
//         <h3 className="font-heading text-xl font-semibold leading-snug text-[#0B1F3A] sm:text-2xl">
//           {title}
//         </h3>

//         <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-[#172033]/70 sm:text-base">
//           {description}
//         </p>

//         {/* ::after stretches the button over the whole card, so the full card is
//             clickable without nesting interactive elements or double-firing. */}
//         <button
//           type="button"
//           onClick={onReadMore}
//           aria-label={`Read more about ${tag}`}
//           className="mt-auto flex items-center gap-2 pt-5 text-sm font-semibold text-[#174A7E] outline-none
//           after:absolute after:inset-0 after:content-[''] sm:text-base"
//         >
//           Read more
//           <ArrowRight
//             className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
//             aria-hidden="true"
//           />
//         </button>
//       </div>

//       <div
//         aria-hidden="true"
//         className="absolute bottom-0 left-0 h-1 w-0 bg-[#D4AF6A] transition-all duration-500 ease-out group-hover:w-full"
//       />
//     </article>
//   );
// };

// const Recruitment: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const reduceMotion = useReducedMotion();
//   const fromOurExpertise = location.state?.fromOurExpertise || false;

//   const [selectedDept, setSelectedDept] = useState<Department | null>(null);

//   const departments: Department[] = [
//     {
//       tag: "Construction Workforce",
//       title: "Skilled Professionals Powering Every Build",
//       description:
//         "Providing skilled and reliable construction professionals, including engineers, supervisors, technicians and laborers to meet project demands efficiently and safely.",
//       tagColor: "text-blue-600",
//     },
//     {
//       tag: "Hospitality & Hotel Staff",
//       title: "Reliable Hospitality & Hotel Staffing Solutions",
//       description:
//         "Providing well-trained hospitality and hotel staff to ensure exceptional guest experiences and service excellence.",
//       tagColor: "text-green-600",
//     },
//     {
//       tag: "Security & Facility Management",
//       title: "24/7 Security & Facility Management Solutions",
//       description:
//         "End-to-end security and facility management solutions for safe and well-maintained environments.",
//       tagColor: "text-orange-500",
//     },
//     {
//       tag: "Technical & Non-Technical Staff",
//       title: "Empowering Businesses with Diverse Talent",
//       description:
//         "Providing qualified technical and non-technical staff to support operations, administration and specialized business functions across industries.",
//       tagColor: "text-blue-600",
//     },
//     {
//       tag: "Oil & Gas Workforce",
//       title: "Expert Oil & Gas Workforce You Can Rely On",
//       description:
//         "Providing certified and experienced oil and gas professionals for upstream, midstream and downstream operations with a strong focus on safety and compliance.",
//       tagColor: "text-green-500",
//     },
//     {
//       tag: "Skilled & Unskilled Workers",
//       title: "Workforce Support for Every Industry",
//       description:
//         "Providing skilled and unskilled workers to support construction, manufacturing, logistics and operational needs across multiple industries.",
//       tagColor: "text-orange-500",
//     },
//   ];

//   // Close the modal with Escape and lock background scroll while it is open.
//   useEffect(() => {
//     if (!selectedDept) return;
//     const onKey = (e: KeyboardEvent) => {
//       if (e.key === "Escape") setSelectedDept(null);
//     };
//     const previousOverflow = document.body.style.overflow;
//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", onKey);
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = previousOverflow;
//     };
//   }, [selectedDept]);

//   return (
//     <div>
//       <section className="bg-[#F5F7FA] py-10 sm:py-12 lg:py-16">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
//           {/* Back button — now visible on all screen sizes */}
//           {fromOurExpertise && (
//             <button
//               type="button"
//               onClick={() => navigate(-1)}
//               className="group mb-8 inline-flex items-center gap-2 rounded-xl border border-[#0B1F3A]/15 bg-white px-5 py-2
//               text-sm font-medium text-[#0B1F3A] shadow-sm transition-all duration-300
//               hover:border-[#D4AF6A] hover:shadow-md
//               focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A]"
//             >
//               <ArrowLeft
//                 className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1"
//                 aria-hidden="true"
//               />
//               Back
//             </button>
//           )}

//           <div className="mb-12 text-center sm:mb-14 lg:mb-16">
//             <h2 className="font-heading text-3xl font-semibold leading-tight tracking-tight text-[#0B1F3A] sm:text-4xl lg:text-5xl">
//               Manpower Recruitment
//             </h2>
//             <div className="mx-auto mt-5 h-px w-20 bg-[#D4AF6A]" aria-hidden="true" />
//             <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-[#172033]/70 sm:text-base md:text-lg">
//               Explore our comprehensive manpower recruitment solutions,
//               connecting skilled professionals with businesses across multiple
//               industries.
//             </p>
//           </div>

//           {/* CARDS */}
//           <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:gap-10 xl:grid-cols-3">
//             {departments.map((dept) => (
//               <Card
//                 key={dept.tag}
//                 {...dept}
//                 onReadMore={() => setSelectedDept(dept)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* MODAL */}
//         <AnimatePresence>
//           {selectedDept && (
//             <motion.div
//               key="overlay"
//               initial={reduceMotion ? false : { opacity: 0 }}
//               animate={{ opacity: 1 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.2 }}
//               className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1F3A]/60 px-3 backdrop-blur-sm sm:px-4"
//               onClick={() => setSelectedDept(null)}
//             >
//               <motion.div
//                 role="dialog"
//                 aria-modal="true"
//                 aria-labelledby="dept-dialog-title"
//                 initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
//                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                 exit={{ opacity: 0, y: 12 }}
//                 transition={{ duration: 0.25, ease: "easeOut" }}
//                 className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl bg-white p-4 shadow-2xl sm:rounded-3xl sm:p-6 md:p-8"
//                 onClick={(e) => e.stopPropagation()}
//               >
//                 <button
//                   type="button"
//                   onClick={() => setSelectedDept(null)}
//                   aria-label="Close"
//                   className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[#0B1F3A] shadow
//                   transition-colors hover:bg-[#D4AF6A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF6A] sm:right-4 sm:top-4"
//                 >
//                   <X className="h-5 w-5" aria-hidden="true" />
//                 </button>

//                 <div className="mb-5 h-44 overflow-hidden rounded-2xl bg-[#0B1F3A] sm:mb-6 sm:h-52 md:h-56">
//                   <img
//                     src={tagImageMap[selectedDept.tag] || FALLBACK_IMAGE}
//                     alt={selectedDept.tag}
//                     onError={handleImageError}
//                     className="h-full w-full object-cover"
//                   />
//                 </div>

//                 <span className="text-sm font-medium text-[#174A7E]">
//                   {selectedDept.tag}
//                 </span>

//                 <h3
//                   id="dept-dialog-title"
//                   className="mt-2 font-heading text-2xl font-semibold leading-snug text-[#0B1F3A] sm:text-3xl"
//                 >
//                   {selectedDept.title}
//                 </h3>

//                 <div className="mt-4 h-px w-12 bg-[#D4AF6A]" aria-hidden="true" />

//                 <p className="mt-4 text-sm leading-relaxed text-[#172033]/75 sm:text-base">
//                   {selectedDept.description}
//                 </p>
//               </motion.div>
//             </motion.div>
//           )}
//         </AnimatePresence>

//         {fromOurExpertise && <HowItWorks />}
//       </section>
//     </div>
//   );
// };

// export default Recruitment;



// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import image1 from "../../Media/Services/Business Visa.jpg";
// import image2 from "../../Media/Services/Tourist Visa.png";
// import image3 from "../../Media/Services/Work Visa.png";
// import image4 from "../../Media/Services/Student Visa.png";
// import image5 from "../../Media/Services/Seaman Visa.jpg";
// import image6 from "../../Media/Services/Medical  Visa.jpg";

// const tagImageMap: Record<string, string> = {
//     "Business Visa": image1,
//     "Tourist Visa": image2,
//     "Work Visa": image3,
//     "Student Visa": image4,
//     "Seaman Visa": image5,
//     "Medical  Visa": image6,
// };

// type Department = {
//     tag: string;
//     title: string;
//     description: string;
//     tagColor?: string;
// };

// type CardProps = Department & {
//     onReadMore: () => void;
// };

// const Card: React.FC<CardProps> = ({
//     tag,
//     title,
//     description,
//     onReadMore,
//     tagColor = "text-blue-600",
// }) => {
//     const imageUrl = tagImageMap[tag] || "/images/default.jpg";

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
//             <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
//                 <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
//                     {tag}
//                 </span>

//                 <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
//                     {title}
//                 </h3>

//                 <p className="text-slate-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
//                     {description}
//                 </p>

//                 <button
//                     onClick={onReadMore}
//                     className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base group-hover:gap-3 transition-all cursor-pointer mt-auto"
//                 >
//                     Read More <span className="text-base sm:text-lg">→</span>
//                 </button>
//             </div>
//         </div>
//     );
// };

// const Services: React.FC = () => {
//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;

//     const [selectedDept, setSelectedDept] = useState<Department | null>(null);

//     const departments: Department[] = [
//         {
//             tag: "Business Visa",
//             title: "Business Travel Solutions",
//             description:
//                 "Complete Business Visa assistance ensuring smooth documentation, compliance and timely approvals for international business engagements.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Tourist Visa",
//             title: "Explore the World with Ease",
//             description:
//                 "Complete Tourist Visa assistance ensuring smooth documentation, compliance and hassle-free approvals for international travel.",
//             tagColor: "text-green-600",
//         },
//         {
//             tag: "Work Visa",
//             title: "Work Abroad with Confidence",
//             description:
//                 "Complete Work Visa assistance helping professionals navigate eligibility, documentation and approvals for a successful international career.",
//             tagColor: "text-orange-500",
//         },
//         {
//             tag: "Student Visa",
//             title: "Study Abroad Made Simple",
//             description:
//                 "Complete Student Visa assistance helping students navigate admissions, documentation and approvals for a successful international education journey.",
//             tagColor: "text-blue-600",
//         },
//         {
//             tag: "Seaman Visa",
//             title: "Seaman Visa is issued to crew members working on ships",
//             description:
//                 "A Seaman Visa is issued to crew members working on ships, allowing them to enter a country to join, serve on, or depart from a vessel.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "Medical  Visa",
//             title: "Bringing Families Together for Care & Healing",
//             description:
//                 "Our medical visa services help patients and their loved ones travel safely and smoothly for timely treatment, compassionate care abroad, and comfortable hotel stay arrangements.",
//             tagColor: "text-orange-500",
//         },
//     ];

//     return (
//         <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-5 sm:py-6 md:py-8 lg:py-10">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
//                 <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//                     <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
//                         Visa Services
//                     </h2>

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



//                     <div className="text-slate-600 mt-4 text-center">
//                         <ul className="mt-3 space-y-2 text-left max-w-xl mx-auto list-disc pl-5 text-sm sm:text-base leading-relaxed">
//                             <li>
//                                 Reliable visa assistance services to simplify documentation and approval processes.
//                             </li>
//                             <li>
//                                 Procurement of visas on behalf of customers — no need to stand in line, we do the waiting for you.
//                             </li>
//                             <li>
//                                 Guaranteed accuracy, security, and privacy of your documents.
//                             </li>
//                             <li>
//                                 Convenient online tracking of your visa application status.
//                             </li>
//                             <li>
//                                 Providing correct and up-to-date visa requirements.
//                             </li>
//                             <li>
//                                 Professional, reliable, and expert customer service.
//                             </li>
//                         </ul>
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
//                         className="bg-white max-w-xl w-full mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
//                         onClick={(e) => e.stopPropagation()}
//                     >
//                         <button
//                             onClick={() => setSelectedDept(null)}
//                             className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
//                         >
//                             ✕
//                         </button>

//                         <div
//                             className="h-40 sm:h-48 md:h-56 rounded-2xl bg-cover bg-center mb-4 sm:mb-6"
//                             style={{
//                                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//                             }}
//                         />

//                         <span className={`text-xs sm:text-sm font-semibold ${selectedDept.tagColor}`}>
//                             {selectedDept.tag}
//                         </span>

//                         <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mt-2 leading-snug">
//                             {selectedDept.title}
//                         </h3>

//                         <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
//                             {selectedDept.description}
//                         </p>
//                     </div>
//                 </div>
//             )}
//         </section>
//     );
// };

// export default Services;




// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import image1 from "../../Media/Ticket/Air-India.jpg";
// import image2 from "../../Media/Ticket/Spicejet.jpg";
// import image3 from "../../Media/Ticket/emirates.jpg";
// import image4 from "../../Media/Ticket/etihad.jpg";
// import image5 from "../../Media/Ticket/fa958172-33c2-4949-ac79-b7d60983f1a0.jpg";
// import image6 from "../../Media/Ticket/indigo.jfif";

// const tagImageMap: Record<string, string> = {
//   "Air India": image1,
//   "SpiceJet": image2,
//   "Saudia Airlines": image5,
//   Emirates: image3,
//   Etihad: image4,
//   IndiGo: image6,
// };

// const Ticket: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const fromOurExpertise = location.state?.fromOurExpertise || false;
//   const [selectedDept, setSelectedDept] = useState<any>(null);

//   return (
//     <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-6 sm:py-8 md:py-10 lg:py-12">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
//         <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
//           <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
//             Air Ticket
//           </h2>

//           <p className="text-slate-600 mt-4 sm:mt-5 md:mt-6 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl lg:max-w-4xl mx-auto px-1">
//             We provide reliable and cost-effective air ticketing services for
//             domestic and international travel, tailored for individuals,
//             families and corporate clients.
//           </p>

//           <div className="w-full justify-start hidden md:block mt-6">
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

//           <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-16">
//             <div className="text-center md:text-left bg-white/70 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm">
//               <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-snug">
//                 Air ticket services
//               </h3>

//               <ul className="text-slate-600 mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
//                 <li>• Domestic & international flight bookings</li>
//                 <li>• One-way, round-trip and multi-city itineraries</li>
//                 <li>• Economy, business and first-class tickets</li>
//                 <li>• Group and corporate travel arrangements</li>
//                 <li>• Last-minute and emergency bookings</li>
//               </ul>
//             </div>

//             <div className="text-center md:text-left bg-white/70 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm">
//               <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-snug">
//                 Why book with us
//               </h3>

//               <ul className="text-slate-600 mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
//                 <li>• Competitive fares from multiple airlines</li>
//                 <li>• Expert travel consultants</li>
//                 <li>• Personalized flight options</li>
//                 <li>• Flexible booking support</li>
//                 <li>• Transparent pricing</li>
//               </ul>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
//           {/* Cards can be added here */}
//         </div>
//       </div>

//       {selectedDept && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4 md:px-6"
//           onClick={() => setSelectedDept(null)}
//         >
//           <div
//             className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setSelectedDept(null)}
//               className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
//             >
//               ✕
//             </button>

//             <div
//               className="h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl bg-cover bg-center mb-4 sm:mb-5 md:mb-6"
//               style={{
//                 backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
//               }}
//             />

//             <span className={`text-sm sm:text-base font-semibold ${selectedDept.tagColor}`}>
//               {selectedDept.tag}
//             </span>

//             <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 leading-snug">
//               {selectedDept.title}
//             </h3>

//             <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
//               {selectedDept.description}
//             </p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Ticket;




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
// import {
//   Globe,
//   Users,
//   Stethoscope,
//   Luggage,
//   Plane,
//   Stamp,
//   ArrowUpRight,
// } from "lucide-react";

// const services = [
//   {
//     title: "Healthcare Recruitment",
//     icon: Stethoscope,
//     desc: "Connecting hospitals with certified doctors, nurses & medical professionals worldwide.",
//     route: "/medical",
//     colorTheme: {
//       iconBg: "from-cyan-500 to-blue-600",
//       lineColor: "bg-blue-500",
//       shadow: "shadow-blue-200",
//       hoverBg: "from-cyan-50 to-blue-50",
//     },
//   },
//   {
//     title: "Manpower Recruitment",
//     icon: Users,
//     desc: "Skilled, semi-skilled & white-collar manpower for diverse industries globally.",
//     route: "/recruitment",
//     colorTheme: {
//       iconBg: "from-orange-500 to-amber-600",
//       lineColor: "bg-orange-500",
//       shadow: "shadow-orange-200",
//       hoverBg: "from-orange-50 to-amber-50",
//     },
//   },
//   {
//     title: "Visa Services",
//     icon: Globe,
//     desc: "End-to-end support for tourist, business, work permit & study visas.",
//     route: "/services",
//     colorTheme: {
//       iconBg: "from-emerald-500 to-green-600",
//       lineColor: "bg-emerald-500",
//       shadow: "shadow-emerald-200",
//       hoverBg: "from-emerald-50 to-green-50",
//     },
//   },
//   {
//     title: "Holiday Tour Package",
//     icon: Luggage,
//     desc: "Curated vacations — beaches, mountains, culture & adventure.",
//     route: "/package",
//     colorTheme: {
//       iconBg: "from-pink-500 to-rose-600",
//       lineColor: "bg-pink-500",
//       shadow: "shadow-pink-200",
//       hoverBg: "from-pink-50 to-rose-50",
//     },
//   },
//   {
//     title: "Air Ticket",
//     icon: Plane,
//     desc: "Fast & affordable flight bookings for any destination.",
//       route: "/ticket",
//     colorTheme: {
//       iconBg: "from-sky-500 to-indigo-600",
//       lineColor: "bg-sky-500",
//       shadow: "shadow-sky-200",
//       hoverBg: "from-sky-50 to-indigo-50",
//     },
//   },
//   {
//     title: "Document Attestation",
//     icon: Stamp,
//     desc: "Embassy & government-compliance. attestation services.",
//     route: "/attestation",
//     colorTheme: {
//       iconBg: "from-violet-500 to-purple-600",
//       lineColor: "bg-violet-500",
//       shadow: "shadow-violet-200",
//       hoverBg: "from-violet-50 to-purple-50",
//     },
//   },
// ];

// const OurExpertise = () => {
//   const navigate = useNavigate();
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   const handleCardClick = (service: typeof services[0], index: number) => {
//     // First tap on mobile → hover
//     if (activeIndex !== index) {
//       setActiveIndex(index);
//       return;
//     }

//     // Second tap → navigate
//     if (service.route) {
//       window.scrollTo({ top: 0, behavior: "instant" });
//       navigate(service.route, { state: { fromOurExpertise: true } });
//     }
//   };

//   return (
//     <section className="relative py-24 pt-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
//       {/* Background blur shapes */}
//       <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
//       <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />

//       <div className="relative max-w-7xl mx-auto px-6">
//         {/* Heading */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-20"
//         >
//           <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//             Our Expertise
//           </h2>
//           <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
//             End-to-end solutions delivered with trust, precision and global excellence.
//           </p>
//         </motion.div>

//         {/* Cards */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {services.map((s, i) => {
//             const isActive = activeIndex === i;

//             return (
//               <motion.div
//                 key={s.title}
//                 initial={{ opacity: 0, y: 40 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true }}
//                 transition={{ delay: i * 0.1 }}
//                 whileHover={{ y: -12 }}
//                 onClick={() => handleCardClick(s, i)}
//                 className={`group relative rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl p-10 shadow-lg transition-all duration-500 overflow-hidden cursor-pointer
//                   ${isActive ? "shadow-2xl -translate-y-3" : ""}
//                 `}
//               >
//                 {/* Hover / Touch background */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br transition-all duration-500
//                     ${isActive ? "opacity-100" : "opacity-0"}
//                     group-hover:opacity-100
//                     ${s.colorTheme.hoverBg}`}
//                 />

//                 {/* Icon */}
//                 <div
//                   className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${s.colorTheme.iconBg}
//                     flex items-center justify-center mb-6 shadow-md ${s.colorTheme.shadow}
//                     transition-transform duration-300
//                     ${isActive ? "scale-110" : ""}
//                     group-hover:scale-110`}
//                 >
//                   <s.icon className="w-8 h-8 text-white" />
//                 </div>

//                 {/* Title */}
//                 <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4">
//                   {s.title}
//                 </h3>

//                 {/* Description */}
//                 <p className="relative z-10 text-slate-600 leading-relaxed">
//                   {s.desc}
//                 </p>

//                 {/* Arrow */}
//                 <ArrowUpRight
//                   className={`absolute top-8 right-8 w-6 h-6 transition-all
//                     ${isActive
//                       ? "opacity-100 translate-x-1 -translate-y-1 text-slate-900"
//                       : "opacity-0 text-slate-300"}
//                     group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1`}
//                 />

//                 {/* Bottom line */}
//                 <div
//                   className={`absolute bottom-0 left-0 h-1.5 transition-all duration-500 ease-out
//                     ${isActive ? "w-full" : "w-0"}
//                     group-hover:w-full ${s.colorTheme.lineColor}`}
//                 />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurExpertise;

// import { motion } from "framer-motion";
// import { Shield, Medal, Users, Headphones } from "lucide-react";

// const features = [
//   {
//     icon: Shield,
//     title: "100% Secure",
//     desc: "Industry-leading security for your data & payments",
//   },
//   {
//     icon: Medal,
//     title: "Best Price",
//     desc: "Guaranteed lowest prices with no hidden cost",
//   },
//   {
//     icon: Users,
//     title: "Expert Team",
//     desc: "Experienced Consultants at every step",
//   },
//   {
//     icon: Headphones,
//     title: "24/7 Support",
//     desc: "Round-the-clock assistance worldwide",
//   },
// ];

// const FeaturesSection = () => {
//   return (
//     <section className="relative py-24 pt-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid md:grid-cols-4 gap-8">
//           {features.map((f) => (
//             <motion.div
//               key={f.title}
//               whileHover={{ y: -8 }}
//               transition={{ duration: 0.3 }}
//               className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center group"
//             >
//               <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
//                 <f.icon className="w-9 h-9 text-white" />
//               </div>

//               <h3 className="text-xl font-bold mb-3">{f.title}</h3>
//               <p className="text-slate-600">{f.desc}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FeaturesSection;

// import { motion } from "framer-motion";
// import { ArrowUpRight } from "lucide-react";


// import image1 from "../../Media/Offer/Dubai(UAE).jpg"
// import image2 from "../../Media/Offer/Thailand.jpg"
// import image3 from "../../Media/Offer/Bali.jpg"
// import image4 from "../../Media/Offer/Singapore.png"
// import image5 from "../../Media/Offer/Maldives-Couples-45.jpg"
// import image6 from "../../Media/Offer/Switzerland.png"

// const destinations = [
//   {
//     name: "Dubai",
//     price: "₹28,999",
//     tag: "Best Seller",
//     image: image1,
//   },
//   {
//     name: "Thailand",
//     price: "₹24,999",
//     tag: "Hot Deal",
//     image: image2,
//   },
//   {
//     name: "Bali",
//     price: "₹39,999",
//     tag: "Trending",
//     image: image3,
//   },
//   {
//     name: "Singapore",
//     price: "₹45,999",
//     tag: "City Life",
//     image: image4,
//   },
//   {
//     name: "Maldives",
//     price: "₹55,999",
//     tag: "Honeymoon",
//     image: image5,
//   },
//   {
//     name: "Switzerland",
//     price: "₹95,999",
//     tag: "Premium",
//     image: image6,
//   },
// ];

// /* ================= DESTINATION CARD ================= */
// const DestinationCard = ({ name, price, tag, image }: any) => {
//   const tagColor =
//     tag === "Best Seller"
//       ? "from-amber-500 to-orange-600"
//       : tag === "Visa Free"
//       ? "from-emerald-500 to-teal-600"
//       : tag === "Trending"
//       ? "from-purple-500 to-pink-600"
//       : "from-blue-500 to-indigo-600";

//   return (
//     <motion.div
//       whileHover={{ y: -12, scale: 1.02 }}
//       transition={{ duration: 0.4 }}
//       className="group relative h-[400px] overflow-hidden rounded-3xl shadow-2xl cursor-pointer"
//     >
//       <img
//         src={image}
//         alt={name}
//         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//       />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

//       {/* Tag */}
//       <span
//         className={`absolute top-6 left-6 px-5 py-2 bg-gradient-to-r ${tagColor} text-white text-xs font-bold rounded-full shadow-lg`}
//       >
//         {tag}
//       </span>

//       {/* Content */}
//       <div className="absolute bottom-0 left-0 w-full p-8">
//         <div className="flex justify-between items-end">
//           <div>
//             <h3 className="text-4xl font-extrabold text-white mb-2">
//               {name}
//             </h3>
//             <p className="text-2xl font-bold text-white">
//               {price}{" "}
//               <span className="text-lg font-normal text-white/70">
//                 onwards
//               </span>
//             </p>
//           </div>

//           <motion.div
//             whileHover={{ scale: 1.15, rotate: 5 }}
//             className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-gradient-to-br group-hover:from-slate-900 group-hover:to-slate-800 group-hover:text-white transition-all"
//           >
//             <ArrowUpRight className="w-6 h-6" />
//           </motion.div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// /* ================= TRENDING DESTINATIONS ================= */
// const TrendingDestinations = () => {
//   return (
//     <section className="relative py-24 pt-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 ">
//         <h2
//         className="text-4xl py-10  md:text-6xl text-center font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//           Trending Destinations
//         </h2>

//         <div className="grid md:grid-cols-3 gap-10 ">
//           {destinations.map((d) => (
//             <DestinationCard key={d.name} {...d} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TrendingDestinations;




// import {
//   UserSearch,
//   ClipboardCheck,
//   Users,
//   BadgeCheck,
//   Settings,
// } from "lucide-react";
// import { motion } from "framer-motion";

// const steps = [
//   {
//     id: "01",
//     title: "Recruitment",
//     desc: "We conduct initial screening, resume review and phone interviews to identify the best candidates",
//     icon: UserSearch,
//     color: "text-blue-600",
//     bg: "bg-blue-100",
//     border: "border-blue-200",
//     shadow: "shadow-blue-200",
//   },
//   {
//     id: "02",
//     title: "Interviews",
//     desc: "We conduct first-round and behavioral interviews to assess candidate suitability",
//     icon: ClipboardCheck,
//     color: "text-indigo-600",
//     bg: "bg-indigo-100",
//     border: "border-indigo-200",
//     shadow: "shadow-indigo-200",
//   },
//   {
//     id: "03",
//     title: "Assessment",
//     desc: "We perform skill-based and personality assessments to evaluate candidate capabilities and Skill Evaluation",
//     icon: Users,
//     color: "text-violet-600",
//     bg: "bg-violet-100",
//     border: "border-violet-200",
//     shadow: "shadow-violet-200",
//   },
//   {
//     id: "04",
//     title: "Verification",
//     desc: "We conduct reference and background checks to ensure candidate reliability",
//     icon: BadgeCheck,
//     color: "text-fuchsia-600",
//     bg: "bg-fuchsia-100",
//     border: "border-fuchsia-200",
//     shadow: "shadow-fuchsia-200",
//   },
//   {
//     id: "05",
//     title: "Onboarding",
//     desc: "We will have the emigration process, ticketing and will provide orientation to candidate for a smooth onboarding process.",
//     icon: Settings,
//     color: "text-rose-600",
//     bg: "bg-rose-100",
//     border: "border-rose-200",
//     shadow: "shadow-rose-200",
//   },
// ];

// const HowItWorks = () => {
//   return (
    
//     <section className="relative   mt-4 py-8  bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">

//       <div className="max-w-7xl mx-auto px-4 ">
        
//         {/* Header */}
//         <div className="text-center mb-20">

//           <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//             Recruitment Process
//           </h2>
//           <p className="mt-4 text-slate-500 text-lg">
//             Our proven 5-step journey to finding your perfect match.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Connector Line (Desktop Only) */}
//           <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-slate-200 -z-10" />

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               return (
//                 <motion.div
//                   key={index}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: index * 0.15, duration: 0.5 }}
//                   className="relative flex flex-col items-center text-center group"
//                 >
//                   {/* Circular Container */}
//                   <div className="relative mb-8">
                    
//                     {/* Pulsing Outer Ring (Hover Effect) */}
//                     <div className={`absolute inset-0 rounded-full border-2 border-dashed ${step.border} opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500 scale-125`} />
                    
//                     {/* Main Circle */}
//                     <div className={`w-32 h-32 rounded-full bg-white border-4 ${step.border} flex items-center justify-center shadow-xl ${step.shadow} z-10 transition-transform duration-300 group-hover:-translate-y-2`}>
                      
//                       {/* Inner Pastel Circle */}
//                       <div className={`w-24 h-24 rounded-full ${step.bg} flex items-center justify-center`}>
//                         <Icon className={`w-10 h-10 ${step.color} transition-transform duration-300 group-hover:scale-110`} />
//                       </div>

//                     </div>

//                     {/* Step Number Badge */}
//                     <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg z-20">
//                       {step.id}
//                     </div>
//                   </div>

//                   {/* Text Content */}
//                   <h3 className="text-xl font-bold text-slate-900 mb-2">
//                     {step.title}
//                   </h3>
//                   <p className="text-slate-500 text-sm max-w-[180px] leading-relaxed">
//                     {step.desc}
//                   </p>
                  
//                   {/* Mobile Connecting Line (Vertical) */}
//                   {index !== steps.length - 1 && (
//                      <div className="lg:hidden absolute -bottom-12 left-1/2 w-0.5 h-8 bg-slate-200 -translate-x-1/2" />
//                   )}

//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
    
//     </section>
//   );
// };

// export default HowItWorks;


