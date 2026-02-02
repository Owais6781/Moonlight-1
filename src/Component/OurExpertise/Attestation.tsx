


import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

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

/* ---------------- CARD COMPONENT ---------------- */
type CardProps = {
  tag: string;
  title: string;
  description: string;
  tagColor?: string;
  onReadMore: () => void;
};

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
      className="group bg-white rounded-2xl overflow-hidden
      border-2 border-slate-100 shadow-sm
       hover:shadow-2xl hover:-translate-y-2
      transition-all duration-300  cursor-pointer"
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
      <div className="p-6 space-y-4 ">
        <span className={`text-xs font-semibold uppercase ${tagColor}`}>
          {tag}
        </span>

        <h3 className="text-xl font-bold text-slate-900 leading-snug">
          {title}
        </h3>

        <p className="text-slate-600 text-sm line-clamp-2">
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

/* ---------------- MAIN PAGE ---------------- */
const Attestation: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromOurExpertise = location.state?.fromOurExpertise || false;

  const [selectedDept, setSelectedDept] = useState<any>(null);


    const departments = [
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
                 "Document Attestation by Ministry of External Affairs and Apostle stamping.",
               // " All original documents/copies requiring attestation or Apostille should be first authenticated by the designated authorities of the State/Union Territory from where the document has been issued.                          State Home Department Authentication: In case of personal documents like Birth Certificates/Marriage Certificates etc, Home/General Administration Department of the concerned State Government/Union Territory are the designated authorities.                                                       State HRD Authentication :In case of educational documents, the documents should first be authenticated by the Education Department of the concerned State Government/Union Territory.  ",
            tagColor: "text-orange-500",
        },
    ];


    return (
        <section className="bg-gradient-to-br from-slate-50 to-slate-100  py-4">
            <div className="max-w-7xl mx-auto px-6">


                <div className="mb-16">

                    <h2 className="text-4xl py-4 font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
                        Document Legalisation/Attestation
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
                        Fast, secure and reliable document attestation services.
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm" onClick={() => setSelectedDept(null)}>
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

                        <p className="text-slate-600 mt-4 leading-relaxed whitespace-pre-wrap  overflow-auto max-h-40">
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
    </section>
  );
};

export default Attestation;







