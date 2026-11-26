// import { useState } from "react";
// import { Menu, X, ChevronDown } from "lucide-react";
// import { Link, NavLink } from "react-router-dom";
// import MoonlightLogo from "../../Media/HomeSlide/moonlight-overseas-logo.png";
// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [expertiseOpen, setExpertiseOpen] = useState(false);

//   const expertiseItems = [
//     { name: "Healthcare Recruitment", path: "/medical" },
//     { name: "Manpower Recruitment", path: "/recruitment" },
//     { name: "Holiday Tour Package", path: "/package" },
//     { name: "Document Attestation", path: "/attestation" },
//     { name: " Visa Services", path: "/services" },
//     { name: "Air Ticket", path: "/ticket" },
//   ];

//   return (
//     <header className="fixed top-11 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
//       <div className="flex items-center justify-between gap-10 px-6 md:px-12  text-slate-900">
//         {/* Logo */}
//         <Link
//           to="/"
//           className="text-2xl md:text-3xl font-extrabold tracking-tight"
//           onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//         >
//           <div className="bg-white p-1 rounded-md">
//             <img src={MoonlightLogo}
//               alt="Moonlight Overseas - Your Trusted Travel Partner"
//               className="h-auto w-32 md:h-16 md:w-64   object-contain "

//                />
//           </div>


//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden md:flex gap-10 text-sm font-medium">
//           <NavLink
//             to="/"
//             end
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className={({ isActive }) =>
//               `relative group ${isActive
//                 ? "text-slate-900"
//                 : "text-slate-600 hover:text-slate-900"
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <span>Home</span>
//                 <span

//                   className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}

//                 />
//               </>
//             )}
//           </NavLink>

//           {/* OUR EXPERTISE DROPDOWN */}
//           <div className="relative group">
//             <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900">
//               Our Expertise <ChevronDown size={16} />
//             </button>

//             <div className="absolute left-0  top-full mt-3 w-46 bg-white border  border-slate-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
//               {expertiseItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   className={({ isActive }) =>
//                     `block px-4 py-3 text-sm transition ${isActive
//                       ? "text-blue-600 font-semibold"
//                       : "text-slate-700 hover:bg-slate-100   hover:border-b  hover:rounded-t-xl hover:rounded-b-xl my-0.5 "
//                     }`
//                   }
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>
//           </div>

//           <NavLink
//             to="/about"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className={({ isActive }) =>
//               `relative group ${isActive
//                 ? "text-slate-900"
//                 : "text-slate-600 hover:text-slate-900"
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <span>About</span>
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                 />
//               </>
//             )}
//           </NavLink>

//           <NavLink
//             to="/contact"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//             className={({ isActive }) =>
//               `relative group ${isActive
//                 ? "text-slate-900"
//                 : "text-slate-600 hover:text-slate-900"
//               }`
//             }
//           >
//             {({ isActive }) => (
//               <>
//                 <span>Contact</span>
//                 <span
//                   className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all ${isActive ? "w-full" : "w-0 group-hover:w-full"
//                     }`}
//                 />
//               </>
//             )}
//           </NavLink>
//         </nav>

//         {/* MOBILE TOGGLE */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden text-slate-900"
//         >
//           {open ? <X size={26} /> : <Menu size={26} />}
//         </button>
//       </div>

//       {/* MOBILE NAV */}
//       <div
//         className={`md:hidden transition-all duration-300 overflow-hidden ${open ? "max-h-[500px] border-t" : "max-h-0"
//           }`}
//       >
//         <nav className="flex flex-col items-center gap-5 py-6 text-slate-700 text-base font-medium">
//           <NavLink to="/" end onClick={() => setOpen(false)}>
//             Home
//           </NavLink>

//           {/* MOBILE EXPERTISE DROPDOWN */}
//           <button
//             onClick={() => setExpertiseOpen(!expertiseOpen)}
//             className="flex items-center gap-1"
//           >
//             Our Expertise <ChevronDown size={16} />
//           </button>

//           {expertiseOpen && (
//             <div className="flex flex-col gap-3">
//               {expertiseItems.map((item) => (
//                 <NavLink
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => {
//                     setOpen(false);
//                     setExpertiseOpen(false);
//                   }}
//                   className="text-slate-600 hover:text-slate-900"
//                 >
//                   {item.name}
//                 </NavLink>
//               ))}
//             </div>
//           )}

//           <NavLink to="/about" onClick={() => setOpen(false)}>
//             About
//           </NavLink>

//           <NavLink to="/contact" onClick={() => setOpen(false)}>
//             Contact
//           </NavLink>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;







import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import MoonlightLogo from "../../Media/HomeSlide/moonlight-overseas-logo.png";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 * Same fixed position (top-11, under TopHeader) and logo size as before.
 */

const expertiseItems = [
  { name: "Healthcare Recruitment", path: "/medical" },
  { name: "Manpower Recruitment", path: "/recruitment" },
  { name: "Holiday Tour Package", path: "/package" },
  { name: "Document Attestation", path: "/attestation" },
  { name: "Visa Services", path: "/services" },
  { name: "Air Ticket", path: "/ticket" },
];

const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2 rounded";

/* Desktop link with animated underline */
const DesktopLink = ({
  to,
  label,
  end,
}: {
  to: string;
  label: string;
  end?: boolean;
}) => (
  <NavLink
    to={to}
    end={end}
    onClick={scrollTop}
    className={({ isActive }) =>
      `group relative py-1 transition-colors ${focusRing} ${isActive ? "text-[#015399]" : "text-[#172033]/80 hover:text-[#015399]"
      }`
    }
  >
    {({ isActive }) => (
      <>
        <span>{label}</span>
        <span
          aria-hidden="true"
          className={`absolute -bottom-0.5 left-0 h-[2px] bg-[#015399] transition-all duration-300 ${isActive ? "w-full" : "w-0 group-hover:w-full"
            }`}
        />
      </>
    )}
  </NavLink>
);

const Header = () => {
  const [open, setOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const { pathname } = useLocation();

  const inExpertise = expertiseItems.some((i) => i.path === pathname);

  const closeMobile = () => {
    setOpen(false);
    setExpertiseOpen(false);
  };

  return (
    <header className="fixed left-0 top-11 z-50 w-full border-b border-[#6A6868]/20 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-6 px-6 text-[#172033] md:gap-10 md:px-12">
        {/* Logo */}
        <Link to="/" onClick={scrollTop} aria-label="Moonlight Overseas home" className={focusRing}>
          <div className="rounded-md bg-white p-1">
            <img
              src={MoonlightLogo}
              alt="Moonlight Overseas - Your Trusted Travel Partner"
              className="h-auto w-32 object-contain md:h-16 md:w-64"
            />
          </div>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-8 text-sm font-medium md:flex lg:gap-10" aria-label="Main">
          <DesktopLink to="/" label="Home" end />





          {/* OUR EXPERTISE DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={expertiseOpen}
              onClick={() => setExpertiseOpen((prev) => !prev)}
              className={`flex items-center gap-1 py-1 transition-colors ${focusRing} ${inExpertise
                  ? "text-[#015399]"
                  : "text-[#172033]/80 hover:text-[#015399]"
                }`}
            >
              Our Expertise
              <ChevronDown
                size={16}
                aria-hidden="true"
                className={`transition-transform duration-300 ${expertiseOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {expertiseOpen && (
              <div className="absolute left-0 top-full z-50 pt-3">
                <div className="min-w-[14rem] overflow-hidden rounded-xl border border-[#6A6868]/20 bg-white p-1.5 shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)]">
                  {expertiseItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => {
                        setExpertiseOpen(false);
                        scrollTop();
                      }}
                      className={({ isActive }) =>
                        `block rounded-lg px-4 py-2.5 text-sm transition-colors ${focusRing} ${isActive
                          ? "bg-[#015399]/10 font-semibold text-[#015399]"
                          : "text-[#172033]/85 hover:bg-[#015399]/10 hover:text-[#015399]"
                        }`
                      }
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
              </div>
            )}
          </div>


          <DesktopLink to="/about" label="About" />
          <DesktopLink to="/contact" label="Contact" />

          <Link
            to="/contact"
            onClick={scrollTop}
            className="inline-flex min-h-[40px] items-center rounded-xl bg-[#015399] px-5 text-sm font-semibold text-white shadow-md
            transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06294D] hover:shadow-lg
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2"
          >
            Book a Consultation
          </Link>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className={`flex h-11 w-11 items-center justify-center text-[#06294D] md:hidden ${focusRing}`}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        id="mobile-nav"
        className={`overflow-y-auto transition-all duration-300 md:hidden ${open ? "visible max-h-[80vh] border-t border-[#6A6868]/20" : "invisible max-h-0"
          }`}
      >
        <nav className="flex flex-col items-center gap-1 py-5 text-base font-medium" aria-label="Mobile">
          <NavLink
            to="/"
            end
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-4 py-2.5 ${focusRing} ${isActive ? "text-[#015399]" : "text-[#172033]/85"}`
            }
          >
            Home
          </NavLink>

          {/* MOBILE EXPERTISE DROPDOWN */}
          <button
            type="button"
            onClick={() => setExpertiseOpen(!expertiseOpen)}
            aria-expanded={expertiseOpen}
            className={`flex items-center gap-1 px-4 py-2.5 ${focusRing} ${inExpertise ? "text-[#015399]" : "text-[#172033]/85"
              }`}
          >
            Our Expertise
            <ChevronDown
              size={16}
              aria-hidden="true"
              className={`transition-transform duration-300 ${expertiseOpen ? "rotate-180" : ""}`}
            />
          </button>

          {expertiseOpen && (
            <div className="mb-1 flex w-full max-w-xs flex-col items-center gap-0.5 rounded-xl bg-[#F5F7FA] py-2">
              {expertiseItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobile}
                  className={({ isActive }) =>
                    `px-4 py-2 text-[15px] ${focusRing} ${isActive ? "font-semibold text-[#015399]" : "text-[#6A6868] hover:text-[#015399]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink
            to="/about"
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-4 py-2.5 ${focusRing} ${isActive ? "text-[#015399]" : "text-[#172033]/85"}`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMobile}
            className={({ isActive }) =>
              `px-4 py-2.5 ${focusRing} ${isActive ? "text-[#015399]" : "text-[#172033]/85"}`
            }
          >
            Contact
          </NavLink>

          <Link
            to="/contact"
            onClick={closeMobile}
            className="mt-3 inline-flex min-h-[48px] w-[85%] max-w-xs items-center justify-center rounded-xl bg-[#015399] px-6 font-semibold text-white shadow-md hover:bg-[#06294D]"
          >
            Book a Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;