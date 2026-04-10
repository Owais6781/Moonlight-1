

// import React,{ useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// import image1 from "../../Media/Services/Business Visa.jpg"
// import image2 from "../../Media/Services/Tourist Visa.png"
// import image3 from "../../Media/Services/Work Visa.png"
// import image4 from "../../Media/Services/Student Visa.png"
// import image5 from "../../Media/Services/Seaman Visa.jpg"
// import image6 from "../../Media/Services/Medical  Visa.jpg"


// const tagImageMap: Record<string, string> = {
//     "Business Visa":image1 ,
//     "Tourist Visa":image2,
//     "Work Visa":image3 ,
//     "Student Visa":image4,
//     "Seaman Visa":image5,
//     "Medical  Visa":image6 ,

// };

// // Card Props
// type CardProps = {
//     tag: string;
//     title: string;
//     description: string;
//     tagColor?: string;
//       onReadMore: () => void;
// };

// const Card: React.FC<CardProps> = ({ tag, title, description,onReadMore, tagColor = "text-blue-600" }) => {
//     const imageUrl = tagImageMap[tag] || "/images/default.jpg";

//     return (
//         <div
//             className="group bg-white rounded-2xl overflow-hidden
//                  border border-slate-200 shadow-sm hover:shadow-2xl
//                  hover:-translate-y-2 transition-all duration-300  cursor-pointer"
//                  onClick={onReadMore}
//         >
//             {/* Image */}
//             <div
//                 className="h-52 bg-cover bg-center relative"
//                 style={{ backgroundImage: `url(${imageUrl})` }}
//             >
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
//             </div>

//             {/* Content */}
//             <div className="p-6 space-y-4">
//                 <span className={`text-xs font-semibold uppercase ${tagColor}`}>
//                     {tag}
//                 </span>

//                 <h3 className="text-xl font-bold text-slate-900 leading-snug">
//                     {title}
//                 </h3>

//                 <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
//                     {description}
//                 </p>

//                   <button
//           onClick={onReadMore}
//           className="inline-flex items-center gap-2
//           text-blue-600 font-medium text-sm
//           group-hover:gap-3 transition-all cursor-pointer"
//         >
//           Read More <span className="text-lg">→</span>
//         </button>
//             </div>
//         </div>
//     );
// };

// const Services:React.FC = () => {

//     const navigate = useNavigate();
//     const location = useLocation();
//     const fromOurExpertise = location.state?.fromOurExpertise || false;

//      const [selectedDept, setSelectedDept] = useState<any>(null);

//     const departments = [
//         {
//             tag: "Business Visa",
//             title: " Business Travel Solutions",
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
//             title: " Seaman Visa is issued to crew members working on ships",
//             description:"A Seaman Visa is issued to crew members working on ships, allowing them to enter  a country to join, serve on, or depart from a vessel.",
//             tagColor: "text-green-500",
//         },
//         {
//             tag: "Medical  Visa",
//             title: "Bringing Families Together for Care & Healing",
//             description:"Our medical visa services help patients and their loved ones travel safely and smoothly for timely treatment, compassionate care abroad, and comfortable hotel stay arrangements.",
//             tagColor: "text-orange-500",
//         },
//     ];

//     return (


//    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-4 ">
//             <div className="max-w-7xl mx-auto px-6">


//                 <div className="mb-16">

//                     <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">

//                         Visa Services
//                     </h2>
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
//                      <div className="w-full  justify-start hidden md:block">
//                                 {fromOurExpertise && (
//                                   <button
//                                     onClick={() => navigate(-1)}
//                                     className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//                                   >

//                                     <ArrowLeft
//                                       className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
//                                     />


//                                     <span className="font-medium">Back</span>
//                                   </button>
//                                 )}
//                               </div>

//                     <div className="text-slate-600 mt-2 text-center">
//                         {/* <p>
//                             Reliable visa assistance services to simplify documentation and approval
//                             processes.
//                         </p> */}

//                         <ul className="mt-3 space-y-2 text-left max-w-xl mx-auto list-disc ">
//                             <li> Reliable visa assistance services to simplify documentation and approval
//                             processes.</li>
//                             <li>
//                                 Procurement of visas on behalf of customers — no need to stand in line we do the waiting for you.
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

//   </ul>
// </div>

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
//                 <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"     onClick={() => setSelectedDept(null)}>
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

//                         <p className="text-slate-600 mt-4 leading-relaxed">
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
//       )}
//     </section>
//     );
// };

// export default Services
//     ;



import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import image1 from "../../Media/Services/Business Visa.jpg";
import image2 from "../../Media/Services/Tourist Visa.png";
import image3 from "../../Media/Services/Work Visa.png";
import image4 from "../../Media/Services/Student Visa.png";
import image5 from "../../Media/Services/Seaman Visa.jpg";
import image6 from "../../Media/Services/Medical  Visa.jpg";

const tagImageMap: Record<string, string> = {
    "Business Visa": image1,
    "Tourist Visa": image2,
    "Work Visa": image3,
    "Student Visa": image4,
    "Seaman Visa": image5,
    "Medical  Visa": image6,
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
            <div className="p-4 sm:p-5 md:p-6 space-y-3 sm:space-y-4 flex-1 flex flex-col">
                <span className={`text-[11px] sm:text-xs font-semibold uppercase ${tagColor}`}>
                    {tag}
                </span>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 leading-snug">
                    {title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base line-clamp-3 leading-relaxed">
                    {description}
                </p>

                <button
                    onClick={onReadMore}
                    className="inline-flex items-center gap-2 text-blue-600 font-medium text-sm sm:text-base group-hover:gap-3 transition-all cursor-pointer mt-auto"
                >
                    Read More <span className="text-base sm:text-lg">→</span>
                </button>
            </div>
        </div>
    );
};

const Services: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const fromOurExpertise = location.state?.fromOurExpertise || false;

    const [selectedDept, setSelectedDept] = useState<Department | null>(null);

    const departments: Department[] = [
        {
            tag: "Business Visa",
            title: "Business Travel Solutions",
            description:
                "Complete Business Visa assistance ensuring smooth documentation, compliance and timely approvals for international business engagements.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Tourist Visa",
            title: "Explore the World with Ease",
            description:
                "Complete Tourist Visa assistance ensuring smooth documentation, compliance and hassle-free approvals for international travel.",
            tagColor: "text-green-600",
        },
        {
            tag: "Work Visa",
            title: "Work Abroad with Confidence",
            description:
                "Complete Work Visa assistance helping professionals navigate eligibility, documentation and approvals for a successful international career.",
            tagColor: "text-orange-500",
        },
        {
            tag: "Student Visa",
            title: "Study Abroad Made Simple",
            description:
                "Complete Student Visa assistance helping students navigate admissions, documentation and approvals for a successful international education journey.",
            tagColor: "text-blue-600",
        },
        {
            tag: "Seaman Visa",
            title: "Seaman Visa is issued to crew members working on ships",
            description:
                "A Seaman Visa is issued to crew members working on ships, allowing them to enter a country to join, serve on, or depart from a vessel.",
            tagColor: "text-green-500",
        },
        {
            tag: "Medical  Visa",
            title: "Bringing Families Together for Care & Healing",
            description:
                "Our medical visa services help patients and their loved ones travel safely and smoothly for timely treatment, compassionate care abroad, and comfortable hotel stay arrangements.",
            tagColor: "text-orange-500",
        },
    ];

    return (
        <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-5 sm:py-6 md:py-8 lg:py-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
                        Visa Services
                    </h2>

                    {/* Desktop / tablet back button */}
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



                    <div className="text-slate-600 mt-4 text-center">
                        <ul className="mt-3 space-y-2 text-left max-w-xl mx-auto list-disc pl-5 text-sm sm:text-base leading-relaxed">
                            <li>
                                Reliable visa assistance services to simplify documentation and approval processes.
                            </li>
                            <li>
                                Procurement of visas on behalf of customers — no need to stand in line, we do the waiting for you.
                            </li>
                            <li>
                                Guaranteed accuracy, security, and privacy of your documents.
                            </li>
                            <li>
                                Convenient online tracking of your visa application status.
                            </li>
                            <li>
                                Providing correct and up-to-date visa requirements.
                            </li>
                            <li>
                                Professional, reliable, and expert customer service.
                            </li>
                        </ul>
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
                        className="bg-white max-w-xl w-full mx-2 sm:mx-4 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
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

                        <p className="text-slate-600 mt-3 sm:mt-4 text-sm sm:text-base leading-relaxed">
                            {selectedDept.description}
                        </p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default Services;