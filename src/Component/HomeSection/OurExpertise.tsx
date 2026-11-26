
import { useState } from "react";
import type { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import {
  Globe,
  Users,
  Stethoscope,
  Luggage,
  Plane,
  Stamp,
  ArrowUpRight,
} from "lucide-react";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 *   Sky blue    #7DB8F2   (light accent on the blue hover state)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const services = [
  {
    title: "Healthcare Recruitment",
    icon: Stethoscope,
    desc: "Connecting hospitals with certified doctors, nurses & medical professionals worldwide.",
    route: "/medical",
  },
  {
    title: "Manpower Recruitment",
    icon: Users,
    desc: "Skilled, semi-skilled & white-collar manpower for diverse industries globally.",
    route: "/recruitment",
  },
  {
    title: "Visa Services",
    icon: Globe,
    desc: "End-to-end support for tourist, business, work permit & study visas.",
    route: "/services",
  },
  {
    title: "Holiday Tour Package",
    icon: Luggage,
    desc: "Curated vacations — beaches, mountains, culture & adventure.",
    route: "/package",
  },
  {
    title: "Air Ticket",
    icon: Plane,
    desc: "Fast & affordable flight bookings for any destination.",
    route: "/ticket",
  },
  {
    title: "Document Attestation",
    icon: Stamp,
    desc: "Embassy & government-compliance. attestation services.",
    route: "/attestation",
  },
];

type Service = (typeof services)[number];

const OurExpertise = () => {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const goTo = (service: Service) => {
    if (!service.route) return;
    window.scrollTo({ top: 0, behavior: "instant" });
    navigate(service.route, { state: { fromOurExpertise: true } });
  };

  const handleCardClick = (service: Service, index: number) => {
    // Touch screens (no hover): first tap highlights the card, second tap opens it.
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    if (isTouchOnly && activeIndex !== index) {
      setActiveIndex(index);
      return;
    }
    // Mouse users already see the hover state, so one click opens the page.
    goTo(service);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>, service: Service) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      goTo(service);
    }
  };

  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="relative overflow-hidden bg-[#F5F7FA] py-2 sm:py-6 lg:py-4"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {/* Heading */}
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-20"
        >
          <h2
            id="expertise-heading"
            className="font-heading text-4xl font-semibold tracking-tight text-[#06294D] sm:text-5xl lg:text-6xl"
          >
            Our Expertise
          </h2>
          <div
            className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#015399]"
            aria-hidden="true"
          />
          <p className="mt-6 text-lg leading-relaxed text-[#6A6868] sm:text-xl">
            End-to-end solutions delivered with trust, precision and global
            excellence.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((s, i) => {
            const isActive = activeIndex === i;
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                role="link"
                tabIndex={0}
                aria-label={`${s.title}: open page`}
                onClick={() => handleCardClick(s, i)}
                onKeyDown={(e) => handleKeyDown(e, s)}
                onBlur={() => setActiveIndex((cur) => (cur === i ? null : cur))}
                initial={reduceMotion ? false : { opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border p-8 outline-none
                  shadow-[0_8px_24px_-14px_rgba(6,41,77,0.3)] transition-colors duration-300
                  focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F7FA]
                  sm:p-9
                  ${
                    isActive
                      ? "border-[#015399] bg-[#015399]"
                      : "border-[#6A6868]/20 bg-white hover:border-[#015399] hover:bg-[#015399]"
                  }`}
              >
                {/* Icon */}
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300
                    ${
                      isActive
                        ? "bg-white text-[#015399]"
                        : "bg-[#015399] text-white group-hover:bg-white group-hover:text-[#015399]"
                    }`}
                >
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                {/* Title */}
                <h3
                  className={`mb-3 pr-8 font-heading text-2xl font-semibold transition-colors duration-300
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#06294D] group-hover:text-white"
                    }`}
                >
                  {s.title}
                </h3>

                {/* Description */}
                <p
                  className={`leading-relaxed transition-colors duration-300
                    ${
                      isActive
                        ? "text-white/85"
                        : "text-[#6A6868] group-hover:text-white/85"
                    }`}
                >
                  {s.desc}
                </p>

                {/* Arrow */}
                <ArrowUpRight
                  aria-hidden="true"
                  className={`absolute right-6 top-6 h-5 w-5 transition-all duration-300
                    ${
                      isActive
                        ? "translate-x-0.5 -translate-y-0.5 text-[#7DB8F2]"
                        : "text-[#6A6868]/40 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white"
                    }`}
                />

                {/* Bottom line */}
                <div
                  aria-hidden="true"
                  className={`absolute bottom-0 left-0 h-1 bg-[#7DB8F2] transition-all duration-500 ease-out
                    ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OurExpertise;