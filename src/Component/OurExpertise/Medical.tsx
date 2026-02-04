

import { useNavigate, useLocation } from "react-router-dom";
import React from "react";
import HowItWorks from "../HomeSection/Work";
import image1 from "../../Media/Medical/General Medicine.png"
import image2 from "../../Media/Medical/Nursing.png"
import image3 from "../../Media/Medical/emergengcy.jpg"
import image4 from "../../Media/Medical/Anesthesiology.jpg"
import image5 from "../../Media/Medical/Pediatrics.jpg"
import image6 from "../../Media/Medical/Obstetrics & Gynecology.jpg"

// Map each department tag to its image
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

// Card Props
type Department = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
};



type CardProps = Department & {
  onReadMore: () => void;
};

const Card: React.FC<CardProps> = ({ tag, title, description, onReadMore, tagColor = "text-blue-600" }) => {
  const imageUrl = tagImageMap[tag] || "/images/default.jpg";

  return (

    <div
      onClick={onReadMore}
      className="group bg-white rounded-2xl overflow-hidden
             border border-slate-200 shadow-sm
             hover:shadow-2xl hover:-translate-y-2
             transition-all duration-300 cursor-pointer
             h-[420px] flex flex-col"
    >
      {/* Image */}
      <div
        className="h-52 bg-cover bg-center relative shrink-0"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <span className={`text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="text-xl font-bold text-slate-900 leading-snug mt-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-2 leading-relaxed mt-2">
          {description}
        </p>

        {/* Push button to bottom */}
        <button
          onClick={onReadMore}
          className="mt-auto text-blue-600 cursor-pointer font-medium text-sm flex justify-start"
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
  const [selectedDept, setSelectedDept] = React.useState<Department | null>( null);

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
    
    <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-4">
      <div className="max-w-7xl mx-auto px-6">


        <div className="mb-16">

          <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Medical Departments
          </h2>
          <div className="w-full flex gap-2  justify-end">
            {fromOurExpertise && (
              <button
                onClick={() => navigate(-1)}
                className="px-6 py-2 bg-slate-600 rounded-xl text-white  cursor-pointer  "
              >
                Back
              </button>
            )}
          </div>

          <p className="text-slate-600 mt-2 text-center">
            We offer competent and certified candidates for every healthcare department.
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
        <div className="fixed inset-0 z-50  flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSelectedDept(null)}>
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

      {/* {fromOurExpertise && (
        <HowItWorks />
      )} */}
       <HowItWorks />

    </section>
  );
};

export default Medical;


