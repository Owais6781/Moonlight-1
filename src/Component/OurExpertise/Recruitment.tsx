

import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import HowItWorks from "../HomeSection/Work";


// Import images
import image1 from "../../Media/Recruitment/Construction-Workforce.jpg";
import image2 from "../../Media/Recruitment/Hospitality & Hotel Staff.png";;
import image3 from "../../Media/Recruitment/Security & Facility Management.png";;
import image4 from "../../Media/Recruitment/Skilled & Unskilled Workers.png";;
import image5 from "../../Media/Recruitment/Technical & Non-Technical Staff.png";;
import image6 from "../../Media/Recruitment/Oil & Gas Workforce.png";;

// Map each department tag to its image
const tagImageMap: Record<string, string> = {
  "Construction Workforce": image1,
  "Hospitality & Hotel Staff": image2,
  "Security & Facility Management": image3,
  "Skilled & Unskilled Workers": image4,
  "Technical & Non-Technical Staff": image5,
  "Oil & Gas Workforce": image6,


};

// Card Props
type CardProps = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
  onReadMore: () => void;
};

const Card: React.FC<CardProps> = ({ tag, title, description, onReadMore, tagColor = "text-blue-600" }) => {
  const imageUrl = tagImageMap[tag] || "/images/default.jpg";

  return (
    <div
      className="group bg-white rounded-2xl overflow-hidden
                 border border-slate-200 shadow-sm hover:shadow-2xl
                 hover:-translate-y-2 transition-all duration-300  cursor-pointer"
      onClick={onReadMore}
    >
      {/* Image */}
      <div
        className="h-52 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <span className={`text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="text-xl font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed">
          {description}
        </p>

        <button
          onClick={onReadMore}
          className="inline-flex items-center gap-2
          text-blue-600 font-medium text-sm
          group-hover:gap-3 transition-all cursor-pointer"
        >
          Read More <span className="text-lg">→</span>
        </button>
      </div>
    </div>
  );
};


const Recruitment: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;

  const [selectedDept, setSelectedDept] = useState<any>(null);

  const departments = [
    {
      tag: "Construction Workforce",
      title: "Skilled Professionals Powering Every Build",
      description:
        "Providing skilled and reliable construction professionals, including engineers, supervisors, technicians and laborers to meet project demands efficiently and safely.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Hospitality & Hotel Staff",
      title: "Reliable Hospitality & Hotel Staffing Solutions",
      description:
        "Providing well-trained hospitality and hotel staff to ensure exceptional guest experiences and service excellence.",
      tagColor: "text-green-600",
    },
    {
      tag: "Security & Facility Management",
      title: "24/7 Security & Facility Management Solutions",
      description:
        "End-to-end security and facility management solutions for safe and well-maintained environments.",
      tagColor: "text-orange-500",
    },
    {
      tag: "Technical & Non-Technical Staff",
      title: "Empowering Businesses with Diverse Talent",
      description:
        "Providing qualified technical and non-technical staff to support operations, administration and specialized business functions across industries.",
      tagColor: "text-blue-600",
    },
    {
      tag: "Oil & Gas Workforce",
      title: "Expert Oil & Gas Workforce You Can Rely On",
      description:
        "Providing certified and experienced oil and gas professionals for upstream, midstream  and downstream operations with a strong focus on safety and compliance.",
      tagColor: "text-green-500",
    },
    {
      tag: "Skilled & Unskilled Workers",
      title: "Workforce Support for Every Industry",
      description:
        "Providing skilled and unskilled workers to support construction, manufacturing, logistics  and operational needs across multiple industries.",
      tagColor: "text-orange-500",
    },
  ];

  return (
   
    <div >
      <section className="bg-gradient-to-br from-slate-50 to-slate-100 pt-4  " >
        <div className="max-w-7xl mx-auto px-6">


          <div className="mb-16">

            <h2 className="text-4xl  font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
              Manpower Recruitment
            </h2>
            <div className="w-full flex gap-2  justify-end">
              {fromOurExpertise && (
                <button
                  onClick={() => navigate(-1)}
                  className="px-6 py-2 bg-slate-600 text-white rounded-xl  "
                >
                  Back
                </button>
              )}
            </div>

            <p className="text-slate-600 mt-2 text-center">
              Explore our comprehensive manpower recruitment solutions,  connecting skilled professionals with businesses across multiple industries.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {departments.map((dept) => (
              <Card
                key={dept.tag}
                {...dept}
                onReadMore={() => setSelectedDept(dept)}
              />
            ))}
          </div>
        </div>

        {/* ---------------- MODAL ---------------- */}
        {selectedDept && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm " onClick={() => setSelectedDept(null)}>
            <div className="bg-white max-w-xl w-full mx-4 rounded-3xl shadow-2xl p-8 relative animate-fadeIn">

              {/* Close */}
              <button
                onClick={() => setSelectedDept(null)}
                className="absolute top-4 right-4 cursor-pointer text-red-400 hover:text-red-700 text-xl"
              >
                ✕
              </button>

              {/* Image */}
              <div
                className="h-56 rounded-2xl bg-cover bg-center mb-6"
                style={{
                  backgroundImage: `url(${tagImageMap[selectedDept.tag]})`,
                }}
              />

              <span className={`text-sm font-semibold ${selectedDept.tagColor}`}>
                {selectedDept.tag}
              </span>

              <h3 className="text-2xl font-bold mt-2">
                {selectedDept.title}
              </h3>

              <p className="text-slate-600 mt-4 leading-relaxed">
                {selectedDept.description}
              </p>

              <div className="mt-6 text-right">
                {/* <button
                onClick={() => setSelectedDept(null)}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600
                text-white font-semibold hover:shadow-lg transition"
              >
                Close
              </button> */}
              </div>
            </div>
          </div>
        )}
        {fromOurExpertise && (
        
    <HowItWorks />

        )}
      </section>
    </div>
  );
};

export default Recruitment



