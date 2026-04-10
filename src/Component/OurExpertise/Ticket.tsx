


// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import { ArrowLeft } from "lucide-react";
// // Import images
// import image1 from "../../Media/Ticket/Air-India.jpg";
// import image2 from "../../Media/Ticket/Spicejet.jpg";
// import image3 from "../../Media/Ticket/emirates.jpg";
// import image4 from "../../Media/Ticket/etihad.jpg";
// import image5 from "../../Media/Ticket/fa958172-33c2-4949-ac79-b7d60983f1a0.jpg";
// import image6 from "../../Media/Ticket/indigo.jfif";

// // Map each tag to its image
// const tagImageMap: Record<string, string> = {
//   "Air India": image1,
//   "SpiceJet": image2,
//   "Saudia Airlines": image5,
//   "Emirates": image3,
//   "Etihad": image4,
//   "IndiGo": image6,
// };

// // Card Props
// // type CardProps = {
// //   tag: string;
// //   title: string;
// //   description: string;
// //   tagColor?: string;
// //   onReadMore: () => void;

// // };

// // const Card: React.FC<CardProps> = ({ tag, title, description, onReadMore, tagColor = "text-blue-600" }) => {
// //   const imageUrl = tagImageMap[tag] || "/images/default.jpg";


// //   return (

// //     <div
// //       className="group bg-white rounded-2xl overflow-hidden
// //       border-2 border-slate-100 shadow-sm
// //        hover:shadow-2xl hover:-translate-y-2
// //       transition-all duration-300  cursor-pointer"
// //       onClick={onReadMore}
// //     >
// //       {/* Image */}
// //       <div
// //         className="h-52 bg-cover bg-center relative"
// //         style={{ backgroundImage: `url(${imageUrl})` }}
// //       >
// //         <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
// //       </div>

// //       {/* Content */}
// //       <div className="p-6 space-y-4 ">
// //         <span className={`text-xs font-semibold uppercase ${tagColor}`}>
// //           {tag}
// //         </span>

// //         <h3 className="text-xl font-bold text-slate-900 leading-snug">
// //           {title}
// //         </h3>

// //         <p className="text-slate-600 text-sm line-clamp-2">
// //           {description}
// //         </p>

// //         <button
// //           onClick={onReadMore}
// //           className="inline-flex items-center gap-2
// //           text-blue-600 font-medium text-sm
// //           group-hover:gap-3 transition-all cursor-pointer"
// //         >
// //           Read More <span className="text-lg">→</span>
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// const Ticket: React.FC = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const fromOurExpertise = location.state?.fromOurExpertise || false;
//   const [selectedDept, setSelectedDept] = useState<any>(null);
//   // const departments = [
//   //   {
//   //     tag: "Air India",
//   //     title: "Experience World-Class Flying with Air India",
//   //     description:
//   //       "From smooth check-ins to attentive in-flight service, Air India ensures a memorable travel experience.",
//   //   },
//   //   {
//   //     tag: "SpiceJet",
//   //     title: "Your Everyday Airline",
//   //     description: "Fly smart, fly easy and enjoy on-time service with SpiceJet.",
//   //     tagColor: "text-green-600",
//   //   },
//   //   {
//   //     tag: "IndiGo",
//   //     title: "India’s Most Trusted Airline",
//   //     description: "Experience safe, reliable and convenient flights for every journey.",
//   //     tagColor: "text-orange-500",
//   //   },
//   //   {
//   //     tag: "Emirates",
//   //     title: "Fly Better with World-Class Luxury",
//   //     description: "Where every flight is a premium experience, connecting you to the world in style.",
//   //     tagColor: "text-blue-600",
//   //   },
//   //   {
//   //     tag: "Saudia Airlines",
//   //     title: "Fly the Saudi Way",
//   //     description:
//   //       "Enjoy comfortable journeys, attentive service, and a truly welcoming flying experience with Saudia Airlines.",
//   //     tagColor: "text-green-500",
//   //   },
//   //   {
//   //     tag: "Etihad",
//   //     title: "World-Class Luxury in the Skies",
//   //     description:
//   //       "Experience refined comfort, exceptional service and seamless global travel with Etihad Airways.",
//   //     tagColor: "text-orange-500",
//   //   },
//   // ];

//   return (


//     <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-4">
//       <div className="max-w-7xl mx-auto px-6">


//         <div className="mb-16">

//           <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
//             Air Ticket
//           </h2>
//           <p className="text-slate-600 mt-8 text-center">
//             {/* Book domestic and international air tickets at the best available fares.
//             Enjoy quick reservations, flexible options, and hassle-free travel. */}
//             We provide reliable and cost-effective air ticketing services for domestic and international travel, tailored for individuals, families and corporate clients.
//           </p>
//           {/* <div className="w-full flex gap-2  justify-end">
//             {fromOurExpertise && (
//               <button
//                 onClick={() => navigate(-1)}
//                 className="px-6 py-2 bg-slate-600 text-white rounded-xl  "
//               >
//                 Back
//               </button>
//             )}
//           </div> */}
//  <div className="w-full flex justify-start">
//   {fromOurExpertise && (
//     <button
//       onClick={() => navigate(-1)}
//       className="group flex items-center gap-2 px-6 py-2 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
//     >

//       <ArrowLeft
//         className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1"
//       />


//       <span className="font-medium">Back</span>
//     </button>
//   )}
// </div>


//           <div className="font-semibold text-3xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent block mt-6 flex justify-center gap-30">
//             <span 
//             >
//               Air ticket services.
//             </span>
//             <span 
//             >
//               Why book with us.
//             </span>
//           </div>
//           {/* <span className="font-semibold text-3xl bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent block mt-8 mb-2 flex justify-between"
//           >
//             Why Book With Us
//           </span> */}
//           <ul className="text-slate-600 mt-2 flex justify-center gap-14 ">

//             <div>
//               <li>• Domestic & international flight bookings</li>
//               <li>• One-way, round-trip and multi-city itineraries</li>
//               <li>• Economy, business and first-class tickets</li>
//               <li>• Group and corporate travel arrangements</li>
//               <li>• Last-minute and emergency bookings</li>
//             </div>

//             <div>

//               <li>• Competitive fares from multiple airlines</li>
//               <li>• Expert travel consultants</li>
//               <li>• Personalized flight options</li>
//               <li>• Flexible booking support</li>
//               <li>• Transparent pricing</li>
//             </div>
//           </ul>


//         </div>

//         {/* CARDS */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//           {/* {departments.map((dept) => (
//                         <Card
//                             key={dept.tag}
//                             {...dept}
//                             onReadMore={() => setSelectedDept(dept)}
//                         />
//                     ))} */}
//         </div>
//       </div>

//       {/* ---------------- MODAL ---------------- */}
//       {selectedDept && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSelectedDept(null)}>
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
//     </section>
//   );
// };

// export default Ticket;


import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import image1 from "../../Media/Ticket/Air-India.jpg";
import image2 from "../../Media/Ticket/Spicejet.jpg";
import image3 from "../../Media/Ticket/emirates.jpg";
import image4 from "../../Media/Ticket/etihad.jpg";
import image5 from "../../Media/Ticket/fa958172-33c2-4949-ac79-b7d60983f1a0.jpg";
import image6 from "../../Media/Ticket/indigo.jfif";

const tagImageMap: Record<string, string> = {
  "Air India": image1,
  "SpiceJet": image2,
  "Saudia Airlines": image5,
  Emirates: image3,
  Etihad: image4,
  IndiGo: image6,
};

const Ticket: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;
  const [selectedDept, setSelectedDept] = useState<any>(null);

  return (
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-6 sm:py-8 md:py-10 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="mb-10 sm:mb-12 md:mb-14 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-tight">
            Air Ticket
          </h2>

          <p className="text-slate-600 mt-4 sm:mt-5 md:mt-6 text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl lg:max-w-4xl mx-auto px-1">
            We provide reliable and cost-effective air ticketing services for
            domestic and international travel, tailored for individuals,
            families and corporate clients.
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

          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-16">
            <div className="text-center md:text-left bg-white/70 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm">
              <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-snug">
                Air ticket services
              </h3>

              <ul className="text-slate-600 mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                <li>• Domestic & international flight bookings</li>
                <li>• One-way, round-trip and multi-city itineraries</li>
                <li>• Economy, business and first-class tickets</li>
                <li>• Group and corporate travel arrangements</li>
                <li>• Last-minute and emergency bookings</li>
              </ul>
            </div>

            <div className="text-center md:text-left bg-white/70 rounded-2xl p-5 sm:p-6 md:p-7 shadow-sm">
              <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[32px] bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent leading-snug">
                Why book with us
              </h3>

              <ul className="text-slate-600 mt-4 sm:mt-5 space-y-3 sm:space-y-4 text-sm sm:text-base md:text-lg leading-relaxed">
                <li>• Competitive fares from multiple airlines</li>
                <li>• Expert travel consultants</li>
                <li>• Personalized flight options</li>
                <li>• Flexible booking support</li>
                <li>• Transparent pricing</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7 md:gap-8 lg:gap-10">
          {/* Cards can be added here */}
        </div>
      </div>

      {selectedDept && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-3 sm:px-4 md:px-6"
          onClick={() => setSelectedDept(null)}
        >
          <div
            className="bg-white w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl rounded-2xl md:rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedDept(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 cursor-pointer text-red-400 hover:text-red-700 text-lg sm:text-xl"
            >
              ✕
            </button>

            <div
              className="h-40 sm:h-48 md:h-56 lg:h-64 rounded-2xl bg-cover bg-center mb-4 sm:mb-5 md:mb-6"
              style={{
                backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
              }}
            />

            <span className={`text-sm sm:text-base font-semibold ${selectedDept.tagColor}`}>
              {selectedDept.tag}
            </span>

            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mt-2 leading-snug">
              {selectedDept.title}
            </h3>

            <p className="text-slate-600 mt-3 sm:mt-4 leading-relaxed text-sm sm:text-base md:text-lg">
              {selectedDept.description}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Ticket;