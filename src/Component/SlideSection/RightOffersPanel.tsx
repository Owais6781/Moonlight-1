



// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Sparkles, Plane, Palmtree, Heart, Star, ArrowRight, Clock, Users, Zap } from "lucide-react";


// import image1 from "../../Media/Offer/Dubai.jpg"
// import image2 from "../../Media/Offer/Thailand.jpg"
// import image3 from "../../Media/Offer/Maldives-Couples-45.jpg"
// import image4 from "../../Media/Offer/Hajj & Umrah.jpg"


// const offers = [
//   {
//     title: "Dubai Visa + Flight",
//     price: "₹28,999",
//     originalPrice: "₹35,999",
//     tag: "Best Seller",
//     tagColor: "from-amber-500 to-orange-600",
//     icon: Plane,
//     image: image1,
//     details: [
//       "14 Days Tourist Visa",
//       "Return Flight Included",
//       "Airport Assistance 24/7",
//     ],
//     gradient: "from-amber-500/20 via-orange-500/5 to-transparent",
//     accentColor: "amber",
//     rating: 4.9,
//     booked: 2340,
//   },
//   {
//     title: "Thailand Adventure",
//     price: "₹24,999",
//     originalPrice: "₹32,000",
//     tag: "Hot Deal 🔥",
//     tagColor: "from-rose-500 to-pink-600",
//     icon: Palmtree,
//     image: image2,
//     details: [
//       "Visa Free Entry",
//       "4 Nights / 5 Days Stay",
//       "Private Airport Transfers",
//     ],
//     gradient: "from-rose-500/20 via-pink-500/5 to-transparent",
//     accentColor: "rose",
//     rating: 4.8,
//     booked: 1856,
//   },
//   {
//     title: "Maldives Honeymoon",
//     price: "₹52,999",
//     originalPrice: "₹66,000",
//     tag: "20% OFF",
//     tagColor: "from-cyan-500 to-blue-600",
//     icon: Heart,
//     image: image3,
//     details: [
//       "3N Overwater Villa",
//       "Romantic Candlelight Dinner",
//       "Speedboat Island Transfer",
//     ],
//     gradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
//     accentColor: "cyan",
//     rating: 5.0,
//     booked: 892,
//   },
//   {
//     title: "Hajj & Umrah 2026",
//     price: "₹1,35,000",
//     originalPrice: "₹1,55,000",
//     tag: "Limited Seats",
//     tagColor: "from-emerald-500 to-teal-600",
//     icon: Star,
//     image: image4,
//     details: [
//       "Complete Visa Processing",
//       "5-Star Hotel Near Haram",
//       "Expert Guided Ziyarat",
//     ],
//     gradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
//     accentColor: "emerald",
//     rating: 4.9,
//     booked: 456,
//   },
// ];

// const OfferCard: React.FC<{ offer: typeof offers[0]; index: number }> = ({ offer, index }) => {
//   const [isHovered, setIsHovered] = useState(false);
//   const IconComponent = offer.icon;

//   return (
//     <motion.div
//       initial={{ opacity: 0, x: 50 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ delay: index * 0.1, duration: 0.5 }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//       className="relative group"
//     >
//       {/* Main Card */}
//       <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20 min-w-[300px] w-full">
        
//         {/* Background Gradient Effect */}
//         <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
//         {/* Animated Glow Effect */}
//         <motion.div
//           className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
//           animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
//           transition={{ duration: 2, repeat: Infinity }}
//         />

//         {/* Image Section */}
//         <div className="relative h-36 overflow-hidden">
//           <motion.img
//             src={offer.image}
//             alt={offer.title}
//             className="w-full h-full object-cover"
//             animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
//             transition={{ duration: 0.5 }}
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
//           {/* Tag Badge */}
//           <motion.div
//             initial={{ x: 100 }}
//             animate={{ x: 0 }}
//             className={`absolute top-3  px-3 py-1.5 rounded-full bg-gradient-to-r ${offer.tagColor} shadow-lg`}
//           >
//             <span className="text-xs font-bold text-white flex items-center gap-1">
//               <Zap className="w-3 h-3" />
//               {offer.tag}
//             </span>
//           </motion.div>

//           {/* Icon Badge */}
//           <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/40 backdrop-blur-md flex items-center justify-center border border-white/10">
//             <IconComponent className="w-5 h-5 text-white" />
//           </div>

//           {/* Rating & Booked */}
//           <div className="absolute bottom-3 left-3 flex items-center gap-3">
//             <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-950/60 backdrop-blur-md border border-white/5">
//               <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
//               <span className="text-xs font-semibold text-white">{offer.rating}</span>
//             </div>
//             <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-950/60 backdrop-blur-md border border-white/5">
//               <Users className="w-3.5 h-3.5 text-cyan-400" />
//               <span className="text-xs font-semibold text-slate-200">{offer.booked.toLocaleString()}+ booked</span>
//             </div>
//           </div>
//         </div>

//         {/* Content Section */}
//         <div className="relative p-5">
//           {/* Title & Price */}
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
//                 {offer.title}
//               </h4>
//               <div className="flex items-center gap-2 mt-1">
//                 <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
//                   {offer.price}
//                 </span>
//                 <span className="text-sm text-slate-500 line-through">
//                   {offer.originalPrice}
//                 </span>
//               </div>
//             </div>
            
//             {/* Discount Badge */}
//             <div className="flex flex-col items-end">
//               <div className="px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
//                 <span className="text-xs font-bold text-emerald-400">
//                   Save {Math.round((1 - parseInt(offer.price.replace(/[^\d]/g, '')) / parseInt(offer.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Details */}
//           <div className="space-y-2 mb-5">
//             {offer.details.map((detail, idx) => (
//               <motion.div
//                 key={idx}
//                 initial={{ opacity: 0, x: -20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 transition={{ delay: 0.2 + idx * 0.1 }}
//                 className="flex items-center gap-2"
//               >
//                 <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
//                   <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
//                   </svg>
//                 </div>
//                 <span className="text-sm text-slate-400">{detail}</span>
//               </motion.div>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex gap-3">
//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               className="flex-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-[1px]"
//             >
//               <div className="relative px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center gap-2 group/btn">
//                 <span className="font-bold text-white">Book Now</span>
//                 <motion.div
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <ArrowRight className="w-4 h-4 text-white" />
//                 </motion.div>
                
//                 {/* Shine Effect */}
//                 <motion.div
//                   className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
//                   initial={{ x: "-100%" }}
//                   whileHover={{ x: "100%" }}
//                   transition={{ duration: 0.6 }}
//                 />
//               </div>
//             </motion.button>
            
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors"
//             >
//               <Heart className="w-5 h-5 text-slate-400 hover:text-pink-400 transition-colors" />
//             </motion.button>
//           </div>

//           {/* Limited Time Indicator */}
//           <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
//             <Clock className="w-3.5 h-3.5" />
//             <span>Limited time offer • Ends soon</span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };

// const RightOffersPanel: React.FC = () => {
//   return (
//     <div className="h-screen w-full max-w-md bg-slate-950 px-6 py-8 flex flex-col overflow-hidden relative">
      
//       {/* Background Effects */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
//         <div className="absolute bottom-40 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 right-0 w-32 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent" />
//       </div>

//       {/* Header */}
//       <motion.div
//         initial={{ opacity: 0, y: -20 }}
//         animate={{ opacity: 1, y: 0 }}
//         className="relative mb-6"
//       >
//         <div className="flex items-center justify-between">
//           <div className="flex items-center gap-3">
//             <div className="relative">
//               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-900/20 border border-white/10">
//                 <Sparkles className="w-6 h-6 text-white" />
//               </div>
//               <motion.div
//                 className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950"
//                 animate={{ scale: [1, 1.2, 1] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//             </div>
//             <div>
//               <h3 className="text-xl font-bold text-white">Special Offers</h3>
//               <p className="text-sm text-slate-400">Exclusive deals just for you</p>
//             </div>
//           </div>
//         </div>
//       </motion.div>

//       {/* Scrolling Container */}
//       <div className="relative flex-1 overflow-hidden">
//         {/* Top Fade */}
//         <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
        
//         {/* Bottom Fade */}
//         <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

//         <motion.div
//           className="space-y-5 pr-2"
//           animate={{ y: ["0%", "-50%"] }}
//           transition={{
//             duration: 30,
//             ease: "linear",
//             repeat: Infinity,
//           }}
//           whileHover={{ animationPlayState: "paused" }}
//         >
//           {[...offers, ...offers].map((offer, i) => (
//             <OfferCard key={i} offer={offer} index={i % offers.length} />
//           ))}
//         </motion.div>
//       </div>

//       {/* Footer CTA */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.5 }}
//         className="relative mt-4 p-4 rounded-2xl bg-slate-900/50 border border-white/10"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <p className="text-sm font-semibold text-slate-200">Can't find what you need?</p>
//             <p className="text-xs text-slate-400">Get a custom travel quote</p>
//           </div>
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
//           >
//            <a href="/Contact"> Contact Us</a>
//           </motion.button>
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default RightOffersPanel;



import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Plane,
  Palmtree,
  Heart,
  Star,
  ArrowRight,
  Clock,
  Users,
  Zap,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import image1 from "../../Media/Offer/Dubai.jpg";
import image2 from "../../Media/Offer/Thailand.jpg";
import image3 from "../../Media/Offer/Maldives-Couples-45.jpg";
import image4 from "../../Media/Offer/Hajj & Umrah.jpg";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Deep navy   #06294D   (darker shade of the brand blue, panel background)
 *   Sky blue    #7DB8F2   (light accent on the dark panel)
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

type Offer = {
  title: string;
  price: string;
  originalPrice: string;
  tag: string;
  icon: LucideIcon;
  image: string;
  details: string[];
  rating: number;
  booked: number;
};

const offers: Offer[] = [
  {
    title: "Dubai Visa + Flight",
    price: "₹28,999",
    originalPrice: "₹35,999",
    tag: "Best Seller",
    icon: Plane,
    image: image1,
    details: ["14 Days Tourist Visa", "Return Flight Included", "Airport Assistance 24/7"],
    rating: 4.9,
    booked: 2340,
  },
  {
    title: "Thailand Adventure",
    price: "₹24,999",
    originalPrice: "₹32,000",
    tag: "Hot Deal",
    icon: Palmtree,
    image: image2,
    details: ["Visa Free Entry", "4 Nights / 5 Days Stay", "Private Airport Transfers"],
    rating: 4.8,
    booked: 1856,
  },
  {
    title: "Maldives Honeymoon",
    price: "₹52,999",
    originalPrice: "₹66,000",
    tag: "20% OFF",
    icon: Heart,
    image: image3,
    details: ["3N Overwater Villa", "Romantic Candlelight Dinner", "Speedboat Island Transfer"],
    rating: 5.0,
    booked: 892,
  },
  {
    title: "Hajj & Umrah 2026",
    price: "₹1,35,000",
    originalPrice: "₹1,55,000",
    tag: "Limited Seats",
    icon: Star,
    image: image4,
    details: ["Complete Visa Processing", "5-Star Hotel Near Haram", "Expert Guided Ziyarat"],
    rating: 4.9,
    booked: 456,
  },
];

const toNumber = (price: string) => parseInt(price.replace(/[^\d]/g, ""), 10);

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB8F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06294D]";

const OfferCard: React.FC<{ offer: Offer; decorative?: boolean }> = ({
  offer,
  decorative = false,
}) => {
  const [liked, setLiked] = useState(false);
  const Icon = offer.icon;
  const save = Math.round(
    (1 - toNumber(offer.price) / toNumber(offer.originalPrice)) * 100
  );
  // The looping copy of the list is hidden from keyboards and screen readers.
  const tab = decorative ? -1 : 0;

  return (
    <article className="group relative w-full min-w-[300px] overflow-hidden rounded-2xl border border-white/15 bg-white/[0.06] transition-all duration-300 hover:border-[#7DB8F2]/60 hover:bg-white/[0.09]">
      {/* Image */}
      <div className="relative h-36 overflow-hidden bg-[#06294D]">
        <img
          src={offer.image}
          alt={decorative ? "" : offer.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06294D] via-[#06294D]/45 to-transparent" />

        {/* Icon badge */}
        <div className="absolute left-3 top-3 flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#06294D]/60 backdrop-blur-md">
          <Icon className="h-5 w-5 text-white" aria-hidden="true" />
        </div>

        {/* Tag */}
        <span className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-[#015399] shadow-lg">
          <Zap className="h-3 w-3" aria-hidden="true" />
          {offer.tag}
        </span>

        {/* Rating & booked */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#06294D]/70 px-2 py-1 backdrop-blur-md">
            <Star className="h-3.5 w-3.5 fill-[#7DB8F2] text-[#7DB8F2]" aria-hidden="true" />
            <span className="text-xs font-semibold text-white">{offer.rating}</span>
          </div>
          <div className="flex items-center gap-1 rounded-lg border border-white/10 bg-[#06294D]/70 px-2 py-1 backdrop-blur-md">
            <Users className="h-3.5 w-3.5 text-[#7DB8F2]" aria-hidden="true" />
            <span className="text-xs font-semibold text-white/90">
              {offer.booked.toLocaleString()}+ booked
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h4 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-[#7DB8F2]">
              {offer.title}
            </h4>
            <div className="mt-1 flex items-center gap-2">
              <span className="text-2xl font-bold text-white">{offer.price}</span>
              <span className="text-sm text-white/50 line-through">{offer.originalPrice}</span>
            </div>
          </div>

          <span className="shrink-0 rounded-lg border border-[#7DB8F2]/30 bg-[#7DB8F2]/10 px-2 py-1 text-xs font-bold text-[#7DB8F2]">
            Save {save}%
          </span>
        </div>

        <ul className="mb-5 space-y-2">
          {offer.details.map((detail) => (
            <li key={detail} className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#7DB8F2]/40 bg-[#015399]/40">
                <Check className="h-3 w-3 text-[#7DB8F2]" strokeWidth={3} aria-hidden="true" />
              </span>
              <span className="text-sm text-white/80">{detail}</span>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex gap-3">
          <Link
            to="/contact"
            tabIndex={tab}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`group/btn flex min-h-[48px] flex-1 items-center justify-center gap-2 rounded-xl bg-[#015399] px-4 py-3 font-semibold text-white
            transition-colors duration-300 hover:bg-[#0A6CC4] ${focusRing}`}
          >
            Book Now
            <ArrowRight
              className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1"
              aria-hidden="true"
            />
          </Link>

          <button
            type="button"
            tabIndex={tab}
            onClick={() => setLiked((v) => !v)}
            aria-pressed={liked}
            aria-label={liked ? `Remove ${offer.title} from favourites` : `Save ${offer.title} to favourites`}
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 transition-colors hover:bg-white/20 ${focusRing}`}
          >
            <Heart
              className={`h-5 w-5 transition-colors ${liked ? "fill-[#7DB8F2] text-[#7DB8F2]" : "text-white/70"}`}
              aria-hidden="true"
            />
          </button>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60">
          <Clock className="h-3.5 w-3.5" aria-hidden="true" />
          <span>Limited time offer • Ends soon</span>
        </div>
      </div>
    </article>
  );
};

const RightOffersPanel: React.FC = () => {
  return (
    <div className="relative flex h-screen w-full max-w-md flex-col overflow-hidden bg-[#06294D] px-6 py-8">
      {/* Scroll animation. Pauses on hover/focus; stops entirely for reduced motion. */}
      <style>{`
        @keyframes offers-scroll { to { transform: translateY(-50%); } }
        .offers-marquee { animation: offers-scroll 30s linear infinite; }
        .offers-marquee:hover, .offers-marquee:focus-within { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) { .offers-marquee { animation: none; } }
      `}</style>

      {/* Header */}
      <div className="relative mb-6 flex items-center gap-3">
        <div className="relative">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#015399] shadow-lg">
            <Sparkles className="h-6 w-6 text-white" aria-hidden="true" />
          </div>
          <span
            className="absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full border-2 border-[#06294D] bg-[#7DB8F2] motion-reduce:animate-none"
            aria-hidden="true"
          />
        </div>
        <div>
          <h3 className="font-heading text-2xl font-semibold text-white">Special Offers</h3>
          <p className="text-sm text-white/70">Exclusive deals just for you</p>
        </div>
      </div>

      {/* Scrolling container (becomes manually scrollable for reduced motion) */}
      <div className="relative flex-1 overflow-hidden motion-reduce:overflow-y-auto">
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-8 bg-gradient-to-b from-[#06294D] to-transparent" />
        <div className="pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-8 bg-gradient-to-t from-[#06294D] to-transparent" />

        <div className="offers-marquee">
          <div className="space-y-5 pb-5 pr-2">
            {offers.map((offer) => (
              <OfferCard key={offer.title} offer={offer} />
            ))}
          </div>
          {/* Looping copy: hidden from assistive tech, keyboard and reduced-motion users */}
          <div className="space-y-5 pb-5 pr-2 motion-reduce:hidden" aria-hidden="true">
            {offers.map((offer) => (
              <OfferCard key={`copy-${offer.title}`} offer={offer} decorative />
            ))}
          </div>
        </div>
      </div>

      {/* Footer CTA */}
      <div className="relative mt-4 rounded-2xl border border-white/15 bg-white/[0.06] p-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-white">Can't find what you need?</p>
            <p className="text-xs text-white/70">Get a custom travel quote</p>
          </div>
          <Link
            to="/contact"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`inline-flex min-h-[40px] items-center rounded-xl bg-[#015399] px-4 text-sm font-semibold text-white transition-colors hover:bg-[#0A6CC4] ${focusRing}`}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RightOffersPanel;