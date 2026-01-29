

import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import {
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";

const TopHeader: React.FC = () => {
  return (
    <header className="bg-slate-700 text-white fixed top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-11">

          {/* LEFT SIDE – Email & Phone */}
          <div className="flex items-center gap-6">
            {/* Email */}
            <motion.a
              href="mailto:Shail.moonlight@gmail.com"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-cyan-400 transition"
              whileHover={{ x: 2 }}
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="hidden sm:inline hover:underline">
                Shail.moonlight@gmail.com
              </span>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+918587860420"
              className="flex items-center gap-2 text-sm text-white/80 hover:text-green-400 transition"
              whileHover={{ x: 2 }}
            >
              <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center">
                <Phone className="w-4 h-4 text-green-400" />
              </div>
              <span className="hidden sm:inline">+91 8587860420</span>
            </motion.a>
          </div>

          {/* RIGHT SIDE – Social Icons */}
          <div className="flex items-center gap-3">
            <motion.a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400 hover:bg-pink-500/30 transition"
            >
              <FaInstagram size={14} />
            </motion.a>

            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-lg bg-sky-500/20 flex items-center justify-center text-sky-400 hover:bg-sky-500/30 transition"
            >
              <FaTwitter size={14} />
            </motion.a>

            <motion.a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400 hover:bg-blue-500/30 transition"
            >
              <FaFacebookF size={14} />
            </motion.a>

            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2 }}
              className="w-8 h-8 rounded-lg bg-blue-600/20 flex items-center justify-center text-blue-500 hover:bg-blue-600/30 transition"
            >
              <FaLinkedinIn size={14} />
            </motion.a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
