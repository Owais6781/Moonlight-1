


import { motion, useReducedMotion } from "framer-motion";
import { Shield, Medal, Users, Headphones } from "lucide-react";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    desc: "Industry-leading security for your data & payments",
  },
  {
    icon: Medal,
    title: "Best Price",
    desc: "Guaranteed lowest prices with no hidden cost",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced Consultants at every step",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock assistance worldwide",
  },
];

const FeaturesSection = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {features.map((f, i) => {
            const Icon = f.icon;

            return (
              <motion.div
                key={f.title}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                whileHover={reduceMotion ? undefined : { y: -6 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="group relative overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white p-8 text-center
                shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] transition-all duration-300
                hover:border-[#015399] hover:shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)] sm:p-9"
              >
                <div
                  className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#015399] text-white
                  transition-transform duration-300 group-hover:scale-110"
                >
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>

                <h3 className="mb-3 font-heading text-2xl font-semibold text-[#06294D]">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-[#6A6868]">{f.desc}</p>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-[#015399] transition-all duration-500 ease-out group-hover:w-full"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;