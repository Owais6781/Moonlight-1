

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { SyntheticEvent } from "react";

import image1 from "../../Media/Offer/Dubai(UAE).jpg";
import image2 from "../../Media/Offer/Thailand.jpg";
import image3 from "../../Media/Offer/Bali.jpg";
import image4 from "../../Media/Offer/Singapore.png";
import image5 from "../../Media/Offer/Maldives-Couples-45.jpg";
import image6 from "../../Media/Offer/Switzerland.png";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue, for photo overlays)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const FALLBACK_IMAGE = "/images/default.jpg";

type Destination = {
  name: string;
  price: string;
  tag: string;
  image: string;
};

const destinations: Destination[] = [
  { name: "Dubai", price: "₹28,999", tag: "Best Seller", image: image1 },
  { name: "Thailand", price: "₹24,999", tag: "Hot Deal", image: image2 },
  { name: "Bali", price: "₹39,999", tag: "Trending", image: image3 },
  { name: "Singapore", price: "₹45,999", tag: "City Life", image: image4 },
  { name: "Maldives", price: "₹55,999", tag: "Honeymoon", image: image5 },
  { name: "Switzerland", price: "₹95,999", tag: "Premium", image: image6 },
];

const handleImageError = (e: SyntheticEvent<HTMLImageElement>) => {
  const img = e.currentTarget;
  if (!img.src.endsWith(FALLBACK_IMAGE)) img.src = FALLBACK_IMAGE;
};

/* ================= DESTINATION CARD ================= */
const DestinationCard = ({ name, price, tag, image }: Destination) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="group relative h-[360px] overflow-hidden rounded-2xl bg-[#06294D]
      shadow-[0_16px_40px_-18px_rgba(6,41,77,0.55)] sm:h-[400px]"
    >
      <img
        src={image}
        alt={`${name} destination`}
        loading="lazy"
        onError={handleImageError}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#06294D]/90 via-[#06294D]/25 to-transparent" />

      {/* Tag */}
      <span className="absolute left-5 top-5 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-[#015399] shadow-md sm:left-6 sm:top-6">
        {tag}
      </span>

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h3 className="mb-2 font-heading text-3xl font-semibold text-white sm:text-4xl">
              {name}
            </h3>
            <p className="text-xl font-semibold text-white sm:text-2xl">
              {price}{" "}
              <span className="text-base font-normal text-white/75 sm:text-lg">
                onwards
              </span>
            </p>
          </div>

          <div
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-[#015399] shadow-lg
            transition-colors duration-300 group-hover:bg-[#015399] group-hover:text-white sm:h-14 sm:w-14"
          >
            <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-0 bg-[#7DB8F2] transition-all duration-500 ease-out group-hover:w-full"
      />
    </motion.article>
  );
};

/* ================= TRENDING DESTINATIONS ================= */
const TrendingDestinations = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="trending-heading"
      className="relative overflow-hidden bg-[#F5F7FA] py-2 sm:py-6 lg:py-4"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 text-center sm:mb-16"
        >
          <h2
            id="trending-heading"
            className="font-heading text-4xl font-semibold tracking-tight text-[#06294D] md:text-6xl"
          >
            Trending Destinations
          </h2>
          <div
            className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#015399]"
            aria-hidden="true"
          />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {destinations.map((d) => (
            <DestinationCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingDestinations;