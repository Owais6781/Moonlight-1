

// import React from "react";
// import { motion } from "framer-motion";
// import { Mail, Phone } from "lucide-react";
// import {
//   FaInstagram,
//   FaTwitter,
//   FaFacebookF,
//   FaLinkedinIn,
// } from "react-icons/fa";

// const TopHeader: React.FC = () => {
//   return (
//     <header className="bg-slate-700 text-white fixed top-0 z-50 w-full">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex items-center justify-between h-11">

//           {/* LEFT SIDE – Email & Phone */}
//           <div className="flex items-center gap-6">
//             {/* Email */}
//             <motion.a
//               href="mailto:info@moonlightoverseas.in"
//               className="flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition"
//               whileHover={{ x: 2 }}
//             >
//               <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
//                 <Mail className="w-4 h-4 text-cyan-400" />
//               </div>
//               <span className="hidden sm:inline hover:underline">
//                 info@moonlightoverseas.in
//               </span>
//             </motion.a>

//             {/* Phone */}
//             <motion.a
//               href="tel:+918587860420"
//               className="flex items-center gap-2 text-sm text-white/80 hover:text-green-400 transition"
//               whileHover={{ x: 2 }}
//             >
//               <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
//                 <Phone className="w-4 h-4 text-green-400" />
//               </div>
//               <span className="hidden sm:inline">
//                 +91 8587860420
//                 </span>
//             </motion.a>
//           </div>

//           {/* RIGHT SIDE – Social Icons */}
//           <div className="flex items-center gap-3">
//             <motion.a
//               href="https://www.instagram.com/moonlightoverseas.in?igsh=bXk3MG9ma3A1b2tr&utm_source=qr"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -2 }}
//               className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 hover:bg-pink-500/30 transition"
//             >
//               <FaInstagram size={14} />
//             </motion.a>

//             <motion.a
//               href="https://twitter.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -2 }}
//               className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 hover:bg-sky-500/30 transition"
//             >
//               <FaTwitter size={14} />
//             </motion.a>

//             <motion.a
//               href="https://www.facebook.com/share/14UFhWDxWxZ/?mibextid=wwXIfr"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -2 }}
//               className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition"
//             >
//               <FaFacebookF size={14} />
//             </motion.a>

//             <motion.a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               whileHover={{ y: -2 }}
//               className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition"
//             >
//               <FaLinkedinIn size={14} />
//             </motion.a>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default TopHeader;



import type { FC, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Deep navy   #06294D   (darker shade of the brand blue, bar background)
 *   Sky blue    #7DB8F2   (light accent for icons on the dark bar)
 * Same fixed position and height (h-11) as before, so page offsets don't change.
 */

const iconBox =
  "flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-[#7DB8F2] transition-colors duration-300";

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB8F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06294D]";

type Social = { label: string; href: string; icon: ReactNode };

const socials: Social[] = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/moonlightoverseas.in?igsh=bXk3MG9ma3A1b2tr&utm_source=qr",
    icon: <FaInstagram size={14} />,
  },
  {
    label: "Twitter",
    href: "https://twitter.com",
    icon: <FaTwitter size={14} />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/14UFhWDxWxZ/?mibextid=wwXIfr",
    icon: <FaFacebookF size={14} />,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: <FaLinkedinIn size={14} />,
  },
];

const TopHeader: FC = () => {
  const reduceMotion = useReducedMotion();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#06294D] text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-11 items-center justify-between">
          {/* LEFT SIDE – Email & Phone */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Email */}
            <motion.a
              href="mailto:info@moonlightoverseas.in"
              aria-label="Email info@moonlightoverseas.in"
              className={`group flex items-center gap-2 rounded-lg text-sm text-white/85 transition-colors hover:text-white ${focusRing}`}
              whileHover={reduceMotion ? undefined : { x: 2 }}
            >
              <span className={`${iconBox} group-hover:bg-[#015399] group-hover:text-white`}>
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="hidden sm:inline group-hover:underline">
                info@moonlightoverseas.in
              </span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+918587860420"
              aria-label="Call +91 8587860420"
              className={`group flex items-center gap-2 rounded-lg text-sm text-white/85 transition-colors hover:text-white ${focusRing}`}
              whileHover={reduceMotion ? undefined : { x: 2 }}
            >
              <span className={`${iconBox} group-hover:bg-[#015399] group-hover:text-white`}>
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="hidden sm:inline group-hover:underline">
                +91 8587860420
              </span>
            </motion.a>
          </div>

          {/* RIGHT SIDE – Social Icons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                whileHover={reduceMotion ? undefined : { y: -2 }}
                className={`${iconBox} hover:bg-[#015399] hover:text-white ${focusRing}`}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;