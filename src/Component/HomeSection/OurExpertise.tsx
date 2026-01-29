



import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Globe,
  Users,
  Stethoscope,
  Luggage,
  Plane,
  Stamp,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Healthcare Recruitment",
    icon: Stethoscope,
    desc: "Connecting hospitals with certified doctors, nurses & medical professionals worldwide.",
    route: "/medical",
    // Cyan/Blue Theme
    colorTheme: {
      iconBg: "from-cyan-500 to-blue-600",
      lineColor: "bg-blue-500",
      shadow: "shadow-blue-200",
      hoverBg: "group-hover:from-cyan-50 group-hover:to-blue-50",
    },
  },
  {
    title: "Manpower Recruitment",
    icon: Users,
    desc: "Skilled, semi-skilled & white-collar manpower for diverse industries globally.",
    route: "/Recruitment",
    // Orange/Amber Theme
    colorTheme: {
      iconBg: "from-orange-500 to-amber-600",
      lineColor: "bg-orange-500",
      shadow: "shadow-orange-200",
      hoverBg: "group-hover:from-orange-50 group-hover:to-amber-50",
    },
  },
  {
    title: "Visa Services",
    icon: Globe,
    desc: "End-to-end support for tourist, business, work & study visas.",
    route: "/Services",
    // Emerald/Green Theme
    colorTheme: {
      iconBg: "from-emerald-500 to-green-600",
      lineColor: "bg-emerald-500",
      shadow: "shadow-emerald-200",
      hoverBg: "group-hover:from-emerald-50 group-hover:to-green-50",
    },
  },
  {
    title: "Holiday Tour Package",
    icon: Luggage,
    desc: "Curated vacations — beaches, mountains, culture & adventure.",
    route: "/Package",
    // Pink/Rose Theme
    colorTheme: {
      iconBg: "from-pink-500 to-rose-600",
      lineColor: "bg-pink-500",
      shadow: "shadow-pink-200",
      hoverBg: "group-hover:from-pink-50 group-hover:to-rose-50",
    },
  },
  {
    title: "Air Ticket",
    icon: Plane,
    desc: "Fast & affordable flight bookings for any destination.",
    route: "/Ticket",
    // Sky/Indigo Theme
    colorTheme: {
      iconBg: "from-sky-500 to-indigo-600",
      lineColor: "bg-sky-500",
      shadow: "shadow-sky-200",
      hoverBg: "group-hover:from-sky-50 group-hover:to-indigo-50",
    },
  },
  {
    title: "Document Attestation",
    icon: Stamp,
    desc: "Embassy & government-compliant attestation services.",
    route: "/Attestation",
    // Violet/Purple Theme
    colorTheme: {
      iconBg: "from-violet-500 to-purple-600",
      lineColor: "bg-violet-500",
      shadow: "shadow-violet-200",
      hoverBg: "group-hover:from-violet-50 group-hover:to-purple-50",
    },
  },
];

const OurExpertise = () => {
  const navigate = useNavigate();

  const handleCardClick = (service: typeof services[0]) => {
    if (service.route) {
       window.scrollTo({ top: 0, behavior: "instant" });
      navigate(service.route, { state: { fromOurExpertise: true } });
      console.log(service.title, "clicked");
    
    }
  };

  return (
    <section className="relative py-24 pt-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      {/* Background blur shapes */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-cyan-200/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Our Expertise
          </h2>
          <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto">
            End-to-end solutions delivered with trust, precision and global
            excellence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 cursor-pointer">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -12 }}
              onClick={() => handleCardClick(s)}
              className="group relative rounded-3xl border border-white/30 bg-white/70 backdrop-blur-xl p-10 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
         
              <div
                className={`absolute inset-0 bg-gradient-to-br transition-all duration-500 opacity-0 group-hover:opacity-100 ${s.colorTheme.hoverBg}`}
              />

              <div
                className={`relative z-10 w-16 h-16 rounded-2xl bg-gradient-to-br ${s.colorTheme.iconBg} flex items-center justify-center mb-6 shadow-md ${s.colorTheme.shadow} group-hover:scale-110 transition-transform duration-300`}
              >
                <s.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="relative z-10 text-2xl font-bold text-slate-900 mb-4 group-hover:text-slate-800">
                {s.title}
              </h3>

              <p className="relative z-10 text-slate-600 leading-relaxed group-hover:text-slate-700">
                {s.desc}
              </p>

              <ArrowUpRight className="absolute top-8 right-8 w-6 h-6 text-slate-300 group-hover:text-slate-900 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-0 group-hover:opacity-100" />

              {/* Bottom Hover Line */}
              <div
                className={`absolute bottom-0 left-0 h-1.5 w-0 group-hover:w-full transition-all duration-500 ease-out ${s.colorTheme.lineColor}`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;