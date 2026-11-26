


import type { FC, ReactNode } from "react";
import {
  FaBuilding,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import MoonlightLogo from "../../Media/HomeSlide/moonlight-overseas-logo.png";

const Footer:FC = () => {
  const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7DB8F2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#06294D] rounded";
  const footerLinks = [

    { label: "Home", path: "/" },
    { label: "Our Expertise", path: "/expertise" },
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  const ContactRow = ({
  icon,
  label,
  children,
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
}) => (
  <li className="group flex items-start gap-4">
    <div
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#7DB8F2]
      transition-colors duration-300 group-hover:bg-[#015399] group-hover:text-white"
    >
      {icon}
    </div>
    <div>
      <p className="font-medium text-white">{label}</p>
      <div className="text-sm leading-relaxed text-white/80">{children}</div>
    </div>
  </li>
);


  // return (
  //   <footer className="bg-slate-950 text-slate-300 font-sans border-t border-slate-900">
  //     <div className="max-w-7xl mx-auto px-6 pt-8 pb-8">
  //       {/* Top Section */}
  //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  //         {/* Column 1: Brand & About */}
  //         <div className="space-y-6">
  //           <div>

  //             <h2 className=" text-3xl font-extrabold tracking-tight text-white">
  //               <div className="rounded-md  p-1">
  //                 <img
  //                   src={MoonlightLogo}
  //                   alt="Moonlight Overseas - Your Trusted Travel Partner"
  //                   className="h-auto w-32 object-contain md:w-64"  
  //                 />
  //               </div>
  //             </h2>
  //             <span className="text-xs font-semibold tracking-widest text-slate-200 uppercase">
  //               Your Trusted Travel Partner
  //             </span>
  //           </div>
  //           <p className="text-slate-200 text-sm leading-relaxed pr-4">
  //             We are an established company with an excellent track record for
  //             customer satisfaction. We never compromise on the quality of
  //             services provided to our client.
  //           </p>
  //         </div>

  //         {/* Column 2: Company Links */}
  //         <div className=" ">
  //           <h3 className="   text-white font-bold text-lg mb-6">Link</h3>
  //           <ul className="space-y-4 text-sm">
  //             {footerLinks.map((item) => (
  //               <li key={item.path}>
  //                 <Link
  //                   to={item.path}
  //                   onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  //                   className="  gap-0.5  text-slate-200 hover:text-blue-400 transition-colors group"
  //                 >
  //                   <FaArrowRight
  //                     className="text-[5px] opacity-0 -translate-x-2 transition-all duration-300
  //                     group-hover:opacity-100 group-hover:translate-x-0"
  //                   />
  //                   {item.label}
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </div>
  //         {/* <div className="text-center">
  //           <h3 className="text-white font-bold text-lg mb-6">Link</h3>

  //           <ul className="space-y-4 text-sm">
  //             {footerLinks.map((item) => (
  //               <li key={item.path}>
  //                 <Link
  //                   to={item.path}
  //                   className="flex justify-center items-center gap-2 text-slate-200 hover:text-blue-400 transition-colors group"
  //                 >
  //                   <FaArrowRight
  //                     className="text-[10px] opacity-0 -translate-x-2 transition-all duration-300
  //           group-hover:opacity-100 group-hover:translate-x-0"
  //                   />
  //                   <span className="text-center">{item.label}</span>
  //                 </Link>
  //               </li>
  //             ))}
  //           </ul>
  //         </div> */}


  //         {/* Column 3: Contact Info */}
  //         <div className="">
  //           <h3 className="text-white font-bold text-lg mb-6">Get in Touch</h3>
  //           <ul className="space-y-6 text-sm">

  //             <div className="flex flex-wrap gap-6">
  //               <li className="flex items-center gap-4 group">
  //                 <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-green-500
  //                 group-hover:bg-blue-600 group-hover:text-white transition-colors">
  //                   <FaPhoneAlt size={14} />
  //                 </div>
  //                 <div>
  //                   <p className="text-white font-medium">Phone</p>
  //                   <p className="text-slate-200 text-xs">+91 8587860420</p>
  //                 </div>

  //               </li>
  //               <li className="flex items-center gap-4 group">
  //                 <div className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-yellow-500
  //                 group-hover:bg-blue-600 group-hover:text-white transition-colors">
  //                   <FaEnvelope size={14} />
  //                 </div>
  //                 <div>
  //                   <p className="text-white font-medium">Email</p>
  //                   <p className="text-slate-200 text-xs break-all">
  //                     info@moonlightoverseas.in
  //                   </p>
  //                 </div>
  //               </li>

  //             </div>




  //             <li className="flex items-start gap-4 group">
  //               <div
  //                 className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500
  //   group-hover:bg-blue-600 group-hover:text-white transition-colors"
  //               >
  //                 <FaBuilding />
  //               </div>

  //               <div>
  //                 <p className="text-white font-medium">Registered Office</p>
  //                 <p className="text-slate-200 text-xs leading-relaxed">
  //                   H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi - 110025
  //                 </p>
  //               </div>
  //             </li>

  //             <li className="flex items-start gap-4 group">
  //               <div
  //                 className="w-10 h-10 rounded-lg bg-slate-900 flex items-center justify-center text-blue-500
  //   group-hover:bg-blue-600 group-hover:text-white transition-colors"
  //               >
  //                 <FaLocationDot />
  //               </div>

  //               <div>
  //                 <p className="text-white font-medium">Branch Office </p>
  //                 <p className="text-slate-200 text-xs leading-relaxed">
  //                   57, First Floor, Bharat Nagar, New Friends Colony, New Delhi - 110025
  //                 </p>
  //               </div>
  //             </li>
  //           </ul>
  //         </div>
  //       </div>

  //       {/* Bottom Bar */}
  //       <div className="border-t border-slate-900 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
  //         <p className="text-sm text-slate-500 text-center md:text-left">
  //           © {new Date().getFullYear()} Moonlight Overseas. All rights reserved.
  //         </p>
  //         <div className="flex gap-6 text-sm font-medium text-slate-500">
  //           <Link to="/privacy" className="hover:text-white transition-colors">
  //             Privacy
  //           </Link>
  //           <Link to="/terms" className="hover:text-white transition-colors">
  //             Terms
  //           </Link>
  //           <Link to="/sitemap" className="hover:text-white transition-colors">
  //             Sitemap
  //           </Link>
  //         </div>
  //       </div>
  //     </div>
  //   </footer>
  // );
 return (
    <footer className="border-t-4 border-[#015399] bg-[#06294D] font-sans text-white/80">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="inline-block rounded-xl bg-white p-3">
              <img
                src={MoonlightLogo}
                alt="Moonlight Overseas - Your Trusted Travel Partner"
                className="h-auto w-48 object-contain md:w-64"
              />
            </div>
            <p className="pr-4 text-sm leading-relaxed text-white/80">
              We are an established company with an excellent track record for
              customer satisfaction. We never compromise on the quality of
              services provided to our client.
            </p>
          </div>

          {/* Column 2: Company Links */}
          <nav aria-label="Footer">
            <h3 className="mb-6 font-heading text-2xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className={`group inline-flex items-center gap-2 text-white/85 transition-colors hover:text-[#7DB8F2] ${focusRing}`}
                  >
                    <FaArrowRight
                      aria-hidden="true"
                      className="h-2.5 w-2.5 -translate-x-2 text-[#7DB8F2] opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                    />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-6 font-heading text-2xl font-semibold text-white">
              Get in Touch
            </h3>
            <ul className="space-y-6">
              {/* <ContactRow icon={<FaPhoneAlt size={14} aria-hidden="true" />} label="Phone">
                <a href="tel:+918587860420" className={`hover:text-[#7DB8F2] ${focusRing}`}>
                  +91 8587860420
                </a>
              </ContactRow>

              <ContactRow icon={<FaEnvelope size={14} aria-hidden="true" />} label="Email">
                <a
                  href="mailto:info@moonlightoverseas.in"
                  className={`break-all hover:text-[#7DB8F2] ${focusRing}`}
                >
                  info@moonlightoverseas.in
                </a>
              </ContactRow> */}


              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-1 min-w-0">
                  <ContactRow icon={<FaPhoneAlt size={14} aria-hidden="true" />} label="Phone">
                    <a href="tel:+918587860420" className={`hover:text-[#7DB8F2] ${focusRing}`}>
                      +91 8587860420
                    </a>
                  </ContactRow>
                </div>

                <div className="flex-1 min-w-0">
                  <ContactRow icon={<FaEnvelope size={14} aria-hidden="true" />} label="Email">
                    <a
                      href="mailto:info@moonlightoverseas.in"
                      className={`whitespace-nowrap hover:text-[#7DB8F2] ${focusRing}`}
                    >
                      info@moonlightoverseas.in
                    </a>
                  </ContactRow>
                </div>
              </div>


              <ContactRow icon={<FaBuilding aria-hidden="true" />} label="Registered Office">
                H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi - 110025
              </ContactRow>

              <ContactRow icon={<FaLocationDot aria-hidden="true" />} label="Branch Office">
                57, First Floor, Bharat Nagar, New Friends Colony, New Delhi - 110025
              </ContactRow>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/15 pt-8 md:flex-row">
          <p className="text-center text-sm text-white/65 md:text-left">
            © {new Date().getFullYear()} Moonlight Overseas. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium text-white/65">
            <Link to="/privacy" className={`transition-colors hover:text-white ${focusRing}`}>
              Privacy
            </Link>
            <Link to="/terms" className={`transition-colors hover:text-white ${focusRing}`}>
              Terms
            </Link>
            <Link to="/sitemap" className={`transition-colors hover:text-white ${focusRing}`}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );

};

export default Footer;



