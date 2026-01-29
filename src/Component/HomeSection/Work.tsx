


import {
  UserSearch,
  ClipboardCheck,
  Users,
  BadgeCheck,
  Settings,
} from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    id: "01",
    title: "Recruitment",
    desc: "We conduct initial screening, resume review and phone interviews to identify the best candidates",
    icon: UserSearch,
    color: "text-blue-600",
    bg: "bg-blue-100",
    border: "border-blue-200",
    shadow: "shadow-blue-200",
  },
  {
    id: "02",
    title: "Interviews",
    desc: "We conduct first-round and behavioral interviews to assess candidate suitability",
    icon: ClipboardCheck,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
    border: "border-indigo-200",
    shadow: "shadow-indigo-200",
  },
  {
    id: "03",
    title: "Assessment",
    desc: "We perform skill-based and personality assessments to evaluate candidate capabilities Skill Evaluation",
    icon: Users,
    color: "text-violet-600",
    bg: "bg-violet-100",
    border: "border-violet-200",
    shadow: "shadow-violet-200",
  },
  {
    id: "04",
    title: "Verification",
    desc: "We conduct reference and background checks to ensure candidate reliability",
    icon: BadgeCheck,
    color: "text-fuchsia-600",
    bg: "bg-fuchsia-100",
    border: "border-fuchsia-200",
    shadow: "shadow-fuchsia-200",
  },
  {
    id: "05",
    title: "Onboarding",
    desc: "We issue offer letters and conduct new hire orientation for a smooth onboarding process",
    icon: Settings,
    color: "text-rose-600",
    bg: "bg-rose-100",
    border: "border-rose-200",
    shadow: "shadow-rose-200",
  },
];

const HowItWorks = () => {
  return (
    
    <section className="relative   my-8  bg-gradient-to-br from-slate-50 to-slate-100 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 ">
        
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent">
            Recruitment Process
          </h2>
          <p className="mt-4 text-slate-500 text-lg">
            Our proven 5-step journey to finding your perfect match.
          </p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-slate-200 -z-10" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  className="relative flex flex-col items-center text-center group"
                >
                  {/* Circular Container */}
                  <div className="relative mb-8">
                    
                    {/* Pulsing Outer Ring (Hover Effect) */}
                    <div className={`absolute inset-0 rounded-full border-2 border-dashed ${step.border} opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-opacity duration-500 scale-125`} />
                    
                    {/* Main Circle */}
                    <div className={`w-32 h-32 rounded-full bg-white border-4 ${step.border} flex items-center justify-center shadow-xl ${step.shadow} z-10 transition-transform duration-300 group-hover:-translate-y-2`}>
                      
                      {/* Inner Pastel Circle */}
                      <div className={`w-24 h-24 rounded-full ${step.bg} flex items-center justify-center`}>
                        <Icon className={`w-10 h-10 ${step.color} transition-transform duration-300 group-hover:scale-110`} />
                      </div>

                    </div>

                    {/* Step Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white shadow-lg z-20">
                      {step.id}
                    </div>
                  </div>

                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm max-w-[180px] leading-relaxed">
                    {step.desc}
                  </p>
                  
                  {/* Mobile Connecting Line (Vertical) */}
                  {index !== steps.length - 1 && (
                     <div className="lg:hidden absolute -bottom-12 left-1/2 w-0.5 h-8 bg-slate-200 -translate-x-1/2" />
                  )}

                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    
    </section>
  );
};

export default HowItWorks;