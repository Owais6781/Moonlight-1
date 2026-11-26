

import {
  UserSearch,
  ClipboardCheck,
  Users,
  BadgeCheck,
  Settings,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const steps = [
  {
    id: "01",
    title: "Recruitment",
    desc: "We conduct initial screening, resume review and phone interviews to identify the best candidates",
    icon: UserSearch,
  },
  {
    id: "02",
    title: "Interviews",
    desc: "We conduct first-round and behavioral interviews to assess candidate suitability",
    icon: ClipboardCheck,
  },
  {
    id: "03",
    title: "Assessment",
    desc: "We perform skill-based and personality assessments to evaluate candidate capabilities and Skill Evaluation",
    icon: Users,
  },
  {
    id: "04",
    title: "Verification",
    desc: "We conduct reference and background checks to ensure candidate reliability",
    icon: BadgeCheck,
  },
  {
    id: "05",
    title: "Onboarding",
    desc: "We will have the emigration process, ticketing and will provide orientation to candidate for a smooth onboarding process.",
    icon: Settings,
  },
];

const HowItWorks = () => {
  const reduceMotion = useReducedMotion();

  return (
    // `isolate` makes this section its own stacking context so the connector
    // line (z-index -1) stays visible above the section background.
    <section className="relative isolate mt-4 overflow-hidden bg-[#F5F7FA] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className="mb-16 text-center sm:mb-20">
          <h2 className="font-heading text-4xl font-semibold tracking-tight text-[#06294D] sm:text-5xl">
            Recruitment Process
          </h2>
          <div
            className="mx-auto mt-5 h-[3px] w-16 rounded-full bg-[#015399]"
            aria-hidden="true"
          />
          <p className="mt-5 text-lg text-[#6A6868]">
            Our proven 5-step journey to finding your perfect match.
          </p>
        </div>

        <div className="relative">
          {/* Connector line (desktop only), from the first circle's centre to the last */}
          <div
            aria-hidden="true"
            className="absolute left-[10%] right-[10%] top-16 -z-10 hidden h-0.5 bg-[#015399]/25 lg:block"
          />

          <ol className="grid grid-cols-1 gap-14 md:grid-cols-2 lg:grid-cols-5 lg:gap-4">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.li
                  key={step.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                  className="group relative flex flex-col items-center text-center"
                >
                  {/* Circular container */}
                  <div className="relative mb-8">
                    {/* Dashed outer ring (hover effect) */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 scale-125 rounded-full border-2 border-dashed border-[#015399]/40 opacity-0
                      transition-opacity duration-500 group-hover:opacity-100 group-hover:animate-[spin_14s_linear_infinite]
                      motion-reduce:animate-none"
                    />

                    {/* Main circle */}
                    <div
                      className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full border-4 border-[#015399] bg-white
                      shadow-[0_14px_30px_-14px_rgba(6,41,77,0.45)] transition-transform duration-300 group-hover:-translate-y-2"
                    >
                      {/* Inner tint circle */}
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#015399]/10 transition-colors duration-300 group-hover:bg-[#015399]">
                        <Icon
                          className="h-10 w-10 text-[#015399] transition-colors duration-300 group-hover:text-white"
                          aria-hidden="true"
                        />
                      </div>
                    </div>

                    {/* Step number badge */}
                    <div className="absolute -right-2 -top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full border-4 border-[#F5F7FA] bg-[#06294D] text-sm font-bold text-white shadow-lg">
                      {step.id}
                    </div>
                  </div>

                  {/* Text */}
                  <h3 className="mb-2 font-heading text-2xl font-semibold text-[#06294D]">
                    {step.title}
                  </h3>
                  <p className="max-w-[200px] text-sm leading-relaxed text-[#6A6868]">
                    {step.desc}
                  </p>

                  {/* Mobile connecting line (vertical) */}
                  {index !== steps.length - 1 && (
                    <div
                      aria-hidden="true"
                      className="absolute -bottom-12 left-1/2 h-8 w-0.5 -translate-x-1/2 bg-[#015399]/25 md:hidden"
                    />
                  )}
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;