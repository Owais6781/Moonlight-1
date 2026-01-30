

import React,{ useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import image1 from "../../Media/Services/Business Visa.jpg"
import image2 from "../../Media/Services/Tourist Visa.png"
import image3 from "../../Media/Services/Work Visa.png"
import image4 from "../../Media/Services/Student Visa.png"
import image5 from "../../Media/Services/Transit Visa.png"
import image6 from "../../Media/Services/Medical  Visa.jpg"


const tagImageMap: Record<string, string> = {
    "Business Visa":image1 ,
    "Tourist Visa":image2,
    "Work Visa":image3 ,
    "Student Visa":image4,
    "Transit Visa":image5,
    "Medical  Visa":image6 ,

};

// Card Props
type CardProps = {
    tag: string;
    title: string;
    description: string;
    tagColor?: string;
      onReadMore: () => void;
};

const Card: React.FC<CardProps> = ({ tag, title, description,onReadMore, tagColor = "text-blue-600" }) => {
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

const Services:React.FC = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromOurExpertise = location.state?.fromOurExpertise || false;

     const [selectedDept, setSelectedDept] = useState<any>(null);

    const departments = [
        {
            tag: "Business Visa",
            title: " Business Travel Solutions",
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
            tag: "Transit Visa",
            title: "Seamless Transit Visa Assistance",
            description:
                "Reliable Transit Visa services to ensure smooth layovers with proper documentation, compliance and hassle-free approvals.",
            tagColor: "text-green-500",
        },
        {
            tag: "Medical  Visa",
            title: "Bringing Families Together for Care & Healing",
            description:
                "Our medical visa services help patients and their loved ones travel safely and smoothly for timely treatment and compassionate care abroad.",
            tagColor: "text-orange-500",
        },
    ];

    return (
     

   <section className="bg-gradient-to-br from-slate-50 to-slate-100 py-4 ">
            <div className="max-w-7xl mx-auto px-6">


                <div className="mb-16">

                    <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">

                        Visa Services
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

                    <div className="text-slate-600 mt-2 text-center">
                        {/* <p>
                            Reliable visa assistance services to simplify documentation and approval
                            processes.
                        </p> */}

                        <ul className="mt-3 space-y-2 text-left max-w-xl mx-auto list-disc ">
                            <li> Reliable visa assistance services to simplify documentation and approval
                            processes.</li>
                            <li>
                                Procurement of visas on behalf of customers — no need to stand in line we do the waiting for you.
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
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"     onClick={() => setSelectedDept(null)}>
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
    </section>
    );
};

export default Services
    ;


