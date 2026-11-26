

import medicalimage1 from "../../../Media/Medical/General Medicine.png";
import medicalimage2 from "../../../Media/Medical/Nursing.png";
import medicalimage3 from "../../../Media/Medical/emergengcy.jpg";
import medicalimage4 from "../../../Media/Medical/Anesthesiology.jpg";
import medicalimage5 from "../../../Media/Medical/Pediatrics.jpg";
import medicalimage6 from "../../../Media/Medical/Obstetrics & Gynecology.jpg";




import Packageimage1 from "../../../Media/Package/Rajasthan.jpg";
import Packageimage2 from "../../../Media/Package/Goa.jpg";
import Packageimage3 from "../../../Media/Package/Russia.jpg";
import Packageimage4 from "../../../Media/Package/Malaysia.png";
import Packageimage5 from "../../../Media/Package/japan.png";
import Packageimage6 from "../../../Media/Package/Kashmir.jpg";

import Recruitmentimage1 from "../../../Media/Recruitment/Construction-Workforce.jpg";
import Recruitmentimage2 from "../../../Media/Recruitment/Hospitality & Hotel Staff.png";
import Recruitmentimage3 from "../../../Media/Recruitment/Security & Facility Management.png";
import Recruitmentimage4 from "../../../Media/Recruitment/Skilled & Unskilled Workers.png";
import Recruitmentimage5 from "../../../Media/Recruitment/Technical & Non-Technical Staff.png";
import Recruitmentimage6 from "../../../Media/Recruitment/Oil & Gas Workforce.png";

import Servicesimage1 from "../../../Media/Services/Business Visa.jpg";
import Servicesimage2 from "../../../Media/Services/Tourist Visa.png";
import Servicesimage3 from "../../../Media/Services/Work Visa.png";
import Servicesimage4 from "../../../Media/Services/Student Visa.png";
import Servicesimage5 from "../../../Media/Services/Seaman Visa.jpg";
import Servicesimage6 from "../../../Media/Services/Medical  Visa.jpg";

export type Department = {
  tag: string;
  title: string;
  description: string;
  image: string;
  tagColor?: string;
};
export const medicalDepartments: Department[] = [
  {
    tag: "General Medicine",
    title: "Trusted Physicians for Lifelong Wellness",
    description:
      "Diagnosis and management of acute and chronic adult medical conditions with holistic, patient-centered care.",
    image: medicalimage1,
    tagColor: "text-blue-600",
  },
  {
    tag: "Nursing Services",
    title: "Professional Nursing Services You Can Trust",
    description:
      "Comprehensive nursing care delivered by trained professionals, ensuring patient comfort, safety and recovery at every stage.",
    image: medicalimage2,
    tagColor: "text-green-600",
  },
  {
    tag: "Emergency & Trauma",
    title: "24/7 Critical & Life-Saving Care",
    description:
      "The Emergency & Trauma department provides round-the-clock care for accidents, injuries and critical illnesses.",
    image: medicalimage3,
    tagColor: "text-orange-500",
  },
  {
    tag: "Anesthesiology",
    title: "Expert Anesthetic Care",
    description:
      "Providing safe anesthesia and perioperative care for all surgical procedures.",
    image: medicalimage4,
    tagColor: "text-blue-600",
  },
  {
    tag: "Pediatrics",
    title: "Comprehensive Child Healthcare",
    description:
      "Dedicated care for infants, children and adolescents to support healthy growth and development.",
    image: medicalimage5,
    tagColor: "text-green-500",
  },
  {
    tag: "Obstetrics & Gynecology",
    title: "Women’s Health & Maternity Care",
    description:
      "Comprehensive care for pregnancy, childbirth and women’s reproductive health.",
    image: medicalimage6,
    tagColor: "text-orange-500",
  },
];



export const PackageDepartments: Department[] = [
  {
    tag: "Rajasthan",
    title: "Royal Rajasthan: A Journey Through Heritage",
    description:
      "Experience majestic palaces, vibrant culture, desert safaris and timeless traditions with our expertly crafted Rajasthan tours.",
   image:Packageimage1,
      tagColor: "text-blue-600",
  },
  {
    tag: "Goa",
    title: "Love, Luxury & Beaches in Goa",
    description:
      "Celebrate your love with serene beaches, candlelight dinners, luxury resorts and unforgettable sunset moments in Goa.",
     image:Packageimage2,
     tagColor: "text-green-600",
  },
  {
    tag: "Kashmir",
    title: "Explore the Beauty of Kashmir",
    description:
      "Snowy peaks, green valleys and timeless charm—Kashmir awaits your next adventure.",
     image:Packageimage6,
     tagColor: "text-orange-500",
  },
  {
    tag: "Malaysia",
    title: "Explore Malaysia’s Modern Wonders",
    description:
      "Experience vibrant cities, tropical islands, cultural heritage and world-class attractions across Malaysia.",
    image:Packageimage4,
     tagColor: "text-blue-600",
  },
  {
    tag: "Japan",
    title: "Timeless Traditions & Futuristic Cities",
    description:
      "Experience ancient temples, cherry blossoms, bullet trains and cutting-edge city life across Japan.",
    image:Packageimage5,
     tagColor: "text-green-500",
  },
  {
    tag: "Russia",
    title: "Explore Russia’s Rich History & Culture",
    description:
      "From Moscow’s Red Square to Saint Petersburg’s royal palaces, experience Russia’s unforgettable charm.",
     image:Packageimage3,
     tagColor: "text-orange-500",
  },
];



 export const RecruitmentDepartments: Department[] = [
    {
      tag: "Construction Workforce",
      title: "Skilled Professionals Powering Every Build",
      description:
        "Providing skilled and reliable construction professionals, including engineers, supervisors, technicians and laborers to meet project demands efficiently and safely.",
       image:Recruitmentimage1
       ,tagColor: "text-blue-600",
    },
    {
      tag: "Hospitality & Hotel Staff",
      title: "Reliable Hospitality & Hotel Staffing Solutions",
      description:
        "Providing well-trained hospitality and hotel staff to ensure exceptional guest experiences and service excellence.",
         image:Recruitmentimage2,
         tagColor: "text-green-600",
    },
    {
      tag: "Security & Facility Management",
      title: "24/7 Security & Facility Management Solutions",
      description:
        "End-to-end security and facility management solutions for safe and well-maintained environments.",
         image:Recruitmentimage3,tagColor: "text-orange-500",
    },
    {
      tag: "Technical & Non-Technical Staff",
      title: "Empowering Businesses with Diverse Talent",
      description:
        "Providing qualified technical and non-technical staff to support operations, administration and specialized business functions across industries.",
         image:Recruitmentimage5,
         tagColor: "text-blue-600",
    },
    {
      tag: "Oil & Gas Workforce",
      title: "Expert Oil & Gas Workforce You Can Rely On",
      description:
        "Providing certified and experienced oil and gas professionals for upstream, midstream and downstream operations with a strong focus on safety and compliance.",
         image:Recruitmentimage6,
         tagColor: "text-green-500",
    },
    {
      tag: "Skilled & Unskilled Workers",
      title: "Workforce Support for Every Industry",
      description:
        "Providing skilled and unskilled workers to support construction, manufacturing, logistics and operational needs across multiple industries.",
         image:Recruitmentimage4,tagColor: "text-orange-500",
    },
  ];


  export const ServicesDepartments: Department[] = [
    {
      tag: "Business Visa",
      title: "Business Travel Solutions",
      description:
        "Complete Business Visa assistance ensuring smooth documentation, compliance and timely approvals for international business engagements.",
     image:Servicesimage1,
      tagColor: "text-blue-600",
    },
    {
      tag: "Tourist Visa",
      title: "Explore the World with Ease",
      description:
        "Complete Tourist Visa assistance ensuring smooth documentation, compliance and hassle-free approvals for international travel.",
      image:Servicesimage2,
      tagColor: "text-green-600",
    },
    {
      tag: "Work Visa",
      title: "Work Abroad with Confidence",
      description:
        "Complete Work Visa assistance helping professionals navigate eligibility, documentation and approvals for a successful international career.",
      image:Servicesimage3,
      tagColor: "text-orange-500",
    },
    {
      tag: "Student Visa",
      title: "Study Abroad Made Simple",
      description:
        "Complete Student Visa assistance helping students navigate admissions, documentation and approvals for a successful international education journey.",
      image:Servicesimage4,
      tagColor: "text-blue-600",
    },
    {
      tag: "Seaman Visa",
      title: "Seaman Visa is issued to crew members working on ships",
      description:
        "A Seaman Visa is issued to crew members working on ships, allowing them to enter a country to join, serve on, or depart from a vessel.",
         image:Servicesimage5,
         tagColor: "text-green-500",
    },
    {
      tag: "Medical  Visa",
      title: "Bringing Families Together for Care & Healing",
      description:
        "Our medical visa services help patients and their loved ones travel safely and smoothly for timely treatment, compassionate care abroad, and comfortable hotel stay arrangements.",
         image:Servicesimage6,
         tagColor: "text-orange-500",
    },
  ];


