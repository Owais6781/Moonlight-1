



import React, { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Plane, Palmtree, Heart, Star, ArrowRight, Clock, Users, Zap } from "lucide-react";


import image1 from "../../Media/Offer/Dubai.jpg"
import image2 from "../../Media/Offer/Thailand.jpg"
import image3 from "../../Media/Offer/Maldives-Couples-45.jpg"
import image4 from "../../Media/Offer/Hajj & Umrah.jpg"


const offers = [
  {
    title: "Dubai Visa + Flight",
    price: "₹28,999",
    originalPrice: "₹35,999",
    tag: "Best Seller",
    tagColor: "from-amber-500 to-orange-600",
    icon: Plane,
    image: image1,
    details: [
      "14 Days Tourist Visa",
      "Return Flight Included",
      "Airport Assistance 24/7",
    ],
    gradient: "from-amber-500/20 via-orange-500/5 to-transparent",
    accentColor: "amber",
    rating: 4.9,
    booked: 2340,
  },
  {
    title: "Thailand Adventure",
    price: "₹24,999",
    originalPrice: "₹32,000",
    tag: "Hot Deal 🔥",
    tagColor: "from-rose-500 to-pink-600",
    icon: Palmtree,
    image: image2,
    details: [
      "Visa Free Entry",
      "4 Nights / 5 Days Stay",
      "Private Airport Transfers",
    ],
    gradient: "from-rose-500/20 via-pink-500/5 to-transparent",
    accentColor: "rose",
    rating: 4.8,
    booked: 1856,
  },
  {
    title: "Maldives Honeymoon",
    price: "₹52,999",
    originalPrice: "₹66,000",
    tag: "20% OFF",
    tagColor: "from-cyan-500 to-blue-600",
    icon: Heart,
    image: image3,
    details: [
      "3N Overwater Villa",
      "Romantic Candlelight Dinner",
      "Speedboat Island Transfer",
    ],
    gradient: "from-cyan-500/20 via-blue-500/5 to-transparent",
    accentColor: "cyan",
    rating: 5.0,
    booked: 892,
  },
  {
    title: "Hajj & Umrah 2026",
    price: "₹1,35,000",
    originalPrice: "₹1,55,000",
    tag: "Limited Seats",
    tagColor: "from-emerald-500 to-teal-600",
    icon: Star,
    image: image4,
    details: [
      "Complete Visa Processing",
      "5-Star Hotel Near Haram",
      "Expert Guided Ziyarat",
    ],
    gradient: "from-emerald-500/20 via-teal-500/5 to-transparent",
    accentColor: "emerald",
    rating: 4.9,
    booked: 456,
  },
];

const OfferCard: React.FC<{ offer: typeof offers[0]; index: number }> = ({ offer, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = offer.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Main Card */}
      <div className="relative overflow-hidden rounded-2xl bg-slate-900/50 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-900/20 min-w-[300px] w-full">
        
        {/* Background Gradient Effect */}
        <div className={`absolute inset-0 bg-gradient-to-br ${offer.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Animated Glow Effect */}
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500"
          animate={isHovered ? { scale: [1, 1.02, 1] } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />

        {/* Image Section */}
        <div className="relative h-36 overflow-hidden">
          <motion.img
            src={offer.image}
            alt={offer.title}
            className="w-full h-full object-cover"
            animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
          
          {/* Tag Badge */}
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            className={`absolute top-3  px-3 py-1.5 rounded-full bg-gradient-to-r ${offer.tagColor} shadow-lg`}
          >
            <span className="text-xs font-bold text-white flex items-center gap-1">
              <Zap className="w-3 h-3" />
              {offer.tag}
            </span>
          </motion.div>

          {/* Icon Badge */}
          <div className="absolute top-3 left-3 w-10 h-10 rounded-xl bg-slate-950/40 backdrop-blur-md flex items-center justify-center border border-white/10">
            <IconComponent className="w-5 h-5 text-white" />
          </div>

          {/* Rating & Booked */}
          <div className="absolute bottom-3 left-3 flex items-center gap-3">
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-950/60 backdrop-blur-md border border-white/5">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="text-xs font-semibold text-white">{offer.rating}</span>
            </div>
            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-slate-950/60 backdrop-blur-md border border-white/5">
              <Users className="w-3.5 h-3.5 text-cyan-400" />
              <span className="text-xs font-semibold text-slate-200">{offer.booked.toLocaleString()}+ booked</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="relative p-5">
          {/* Title & Price */}
          <div className="flex justify-between items-start mb-4">
            <div>
              <h4 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                {offer.title}
              </h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {offer.price}
                </span>
                <span className="text-sm text-slate-500 line-through">
                  {offer.originalPrice}
                </span>
              </div>
            </div>
            
            {/* Discount Badge */}
            <div className="flex flex-col items-end">
              <div className="px-2 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <span className="text-xs font-bold text-emerald-400">
                  Save {Math.round((1 - parseInt(offer.price.replace(/[^\d]/g, '')) / parseInt(offer.originalPrice.replace(/[^\d]/g, ''))) * 100)}%
                </span>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="space-y-2 mb-5">
            {offer.details.map((detail, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-2"
              >
                <div className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center flex-shrink-0 border border-slate-700">
                  <svg className="w-3 h-3 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-sm text-slate-400">{detail}</span>
              </motion.div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex-1 relative overflow-hidden rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-[1px]"
            >
              <div className="relative px-4 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 flex items-center justify-center gap-2 group/btn">
                <span className="font-bold text-white">Book Now</span>
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </motion.div>
                
                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center hover:bg-slate-700 transition-colors"
            >
              <Heart className="w-5 h-5 text-slate-400 hover:text-pink-400 transition-colors" />
            </motion.button>
          </div>

          {/* Limited Time Indicator */}
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500">
            <Clock className="w-3.5 h-3.5" />
            <span>Limited time offer • Ends soon</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const RightOffersPanel: React.FC = () => {
  return (
    <div className="h-screen w-full max-w-md bg-slate-950 px-6 py-8 flex flex-col overflow-hidden relative">
      
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-32 h-96 bg-gradient-to-l from-cyan-500/5 to-transparent" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative mb-6"
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-600 to-blue-700 flex items-center justify-center shadow-lg shadow-cyan-900/20 border border-white/10">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <motion.div
                className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-slate-950"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Special Offers</h3>
              <p className="text-sm text-slate-400">Exclusive deals just for you</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Scrolling Container */}
      <div className="relative flex-1 overflow-hidden">
        {/* Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-slate-950 to-transparent z-10 pointer-events-none" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-slate-950 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="space-y-5 pr-2"
          animate={{ y: ["0%", "-50%"] }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...offers, ...offers].map((offer, i) => (
            <OfferCard key={i} offer={offer} index={i % offers.length} />
          ))}
        </motion.div>
      </div>

      {/* Footer CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative mt-4 p-4 rounded-2xl bg-slate-900/50 border border-white/10"
      >
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-slate-200">Can't find what you need?</p>
            <p className="text-xs text-slate-400">Get a custom travel quote</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 rounded-xl bg-slate-800 border border-slate-700 text-sm font-semibold text-white hover:bg-slate-700 transition-colors"
          >
           <a href="/Contact"> Contact Us</a>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default RightOffersPanel;



