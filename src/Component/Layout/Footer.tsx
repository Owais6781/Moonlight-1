

import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  const footerLinks = [

    { label: "Home", path: "/" },
    { label: "Our Expertise", path: "/expertise" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-white mb-2">
                Moonlight <span className="text-slate-500">Overseas</span>
              </h2>
              <span className="text-xs font-semibold tracking-widest text-slate-200 uppercase">
                Tour & Travel Company
              </span>
            </div>
            <p className="text-slate-200 text-sm leading-relaxed pr-4">
              We are an established company with an excellent track record for
              customer satisfaction. We never compromise on the quality of
              services provided to our client.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <div className=" ">
            <h3 className="text-white font-bold text-lg mb-6">Link</h3>
            <ul className="space-y-4 text-sm">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="  gap-2  text-slate-200 hover:text-blue-400 transition-colors group"
                  >
                    <FaArrowRight
                      className="text-[10px] opacity-0 -translate-x-2 transition-all duration-300
                      group-hover:opacity-100 group-hover:translate-x-0"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* <div className="text-center">
            <h3 className="text-white font-bold text-lg mb-6">Link</h3>

            <ul className="space-y-4 text-sm">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="flex justify-center items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors group"
                  >
                    <FaArrowRight
                      className="text-[10px] opacity-0 -translate-x-2 transition-all duration-300
            group-hover:opacity-100 group-hover:translate-x-0"
                    />
                    <span className="text-center">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}


          {/* Column 3: Contact Info */}
          <div className="">
            <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
            <ul className="space-y-6 text-sm">

              <div className="flex flex-wrap gap-6">
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-green-500
                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaPhoneAlt size={14} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Phone</p>
                    <p className="text-slate-200 text-xs">+91 8587860420</p>
                  </div>

                </li>
                <li className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-yellow-500
                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <FaEnvelope size={14} />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-slate-200 text-xs break-all">
                      shail.moonlight@gmail.com
                    </p>
                  </div>
                </li>

              </div>

              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500
                  group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <p className="text-white font-medium">Registered Office</p>
                  <p className="text-slate-200 text-xs leading-relaxed">
                    H-45/B, Abul Fazal Enclave-1 Jamia Nagar, New Delhi 110025
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500 text-center md:text-left">
            © {new Date().getFullYear()} Moonlight Overseas. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-slate-500">
            <Link to="/privacy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
