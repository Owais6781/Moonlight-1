




import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);

  const expertiseItems = [
    { name: "Healthcare Recruitment", path: "/medical" },
    { name: "Manpower Recruitment", path: "/recruitment" },
    { name: " Visa Services", path: "/services" },
    { name: "Holiday Tour Package", path: "/package" },
    { name: "Air Ticket", path: "#" },
    { name: "Document Attestation", path: "/attestation" },
  ];

  return (
    <header className="fixed top-11 left-0 w-full z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="flex items-center justify-between gap-10 px-6 md:px-12 py-4 text-slate-900">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl md:text-3xl font-extrabold tracking-tight"
          onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
        >
          Moonlight <span className="text-slate-600">Overseas</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex gap-10 text-sm font-medium">
          <NavLink
            to="/"
            end
             onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Home</span>
                <span
                
                  className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                  
                />
              </>
            )}
          </NavLink>

          {/* OUR EXPERTISE DROPDOWN */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-600 hover:text-slate-900">
              Our Expertise <ChevronDown size={16} />
            </button>

            <div className="absolute left-0 top-full mt-3 w-56 bg-white border rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {expertiseItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-3 text-sm transition ${
                      isActive
                        ? "text-blue-600 font-semibold"
                        : "text-slate-700 hover:bg-slate-50 hover:rounded-t-xl"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/about"
             onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>About</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
             onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}
            className={({ isActive }) =>
              `relative group ${
                isActive
                  ? "text-slate-900"
                  : "text-slate-600 hover:text-slate-900"
              }`
            }
          >
            {({ isActive }) => (
              <>
                <span>Contact</span>
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-slate-900 transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </>
            )}
          </NavLink>
        </nav>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-slate-900"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE NAV */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-[500px] border-t" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-5 py-6 text-slate-700 text-base font-medium">
          <NavLink to="/" end onClick={() => setOpen(false)}>
            Home
          </NavLink>

          {/* MOBILE EXPERTISE DROPDOWN */}
          <button
            onClick={() => setExpertiseOpen(!expertiseOpen)}
            className="flex items-center gap-1"
          >
            Our Expertise <ChevronDown size={16} />
          </button>

          {expertiseOpen && (
            <div className="flex flex-col gap-3">
              {expertiseItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  onClick={() => {
                    setOpen(false);
                    setExpertiseOpen(false);
                  }}
                  className="text-slate-600 hover:text-slate-900"
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          )}

          <NavLink to="/about" onClick={() => setOpen(false)}>
            About
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)}>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
