// import {
//   ShieldCheck,
//   Lock,
//   Database,
//   UserCheck,
//   Globe,
//   Cookie,
//   Mail,
//   Phone,
//   MapPin,
//   ArrowRight,
//   CheckCircle2,
// } from "lucide-react";
// import { useNavigate } from "react-router-dom";

// const privacySections = [
//   {
//     icon: <Database className="w-7 h-7" />,
//     title: "Information We Collect",
//     color: "from-blue-500 to-cyan-500",
//     items: [
//       "Full Name",
//       "Email Address",
//       "Mobile Number",
//       "Passport Information (when required)",
//       "Travel Destination",
//       "Travel Dates",
//       "Billing Address",
//       "Payment Details",
//       "Device & Browser Information",
//     ],
//   },
//   {
//     icon: <UserCheck className="w-7 h-7" />,
//     title: "How We Use Your Information",
//     color: "from-indigo-500 to-violet-500",
//     items: [
//       "Flight Booking",
//       "Hotel Reservation",
//       "Visa Processing",
//       "Holiday Packages",
//       "Customer Support",
//       "Travel Notifications",
//       "Improve Our Services",
//       "Special Offers (Optional)",
//     ],
//   },
//   {
//     icon: <Cookie className="w-7 h-7" />,
//     title: "Cookies Policy",
//     color: "from-orange-500 to-amber-500",
//     items: [
//       "Remember Login",
//       "Save Preferences",
//       "Improve Website Speed",
//       "Analytics",
//       "Personalized Experience",
//     ],
//   },
//   {
//     icon: <Lock className="w-7 h-7" />,
//     title: "Data Security",
//     color: "from-emerald-500 to-teal-500",
//     items: [
//       "SSL Encryption",
//       "Secure Database",
//       "Secure Payment Gateway",
//       "Restricted Access",
//       "Regular Security Monitoring",
//     ],
//   },
//   {
//     icon: <Globe className="w-7 h-7" />,
//     title: "Sharing Information",
//     color: "from-pink-500 to-rose-500",
//     items: [
//       "Airlines",
//       "Hotels",
//       "Visa Centers",
//       "Embassies",
//       "Government Authorities (if required by law)",
//       "Payment Partners",
//       "We Never Sell Customer Information",
//     ],
//   },
//   {
//     icon: <ShieldCheck className="w-7 h-7" />,
//     title: "Your Rights",
//     color: "from-purple-500 to-fuchsia-500",
//     items: [
//       "Access Your Data",
//       "Update Information",
//       "Delete Information",
//       "Withdraw Consent",
//       "Request Data Copy",
//     ],
//   },
// ];

// export default function Privacy() {
//   const Navigate = useNavigate()

//   const handleContact = () => {
//     Navigate("/contact")
//   }
//   return (
//     <section className="relative overflow-hidden bg-gradient-to-r from-slate-50 to-blue-50/50 py-24 lg:py-28">
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-52 -left-40 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
//         <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl"></div>
//       </div>
//       <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//         {/* HERO */}
//         <div className="text-center max-w-4xl mx-auto mb-24">

//           <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold mb-6">

//             <ShieldCheck size={18} />

//             Privacy Policy

//           </div>

//           <h1 className="text-5xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 bg-clip-text text-transparent">

//             Your Privacy Matters

//           </h1>

//           <p className="mt-8 text-lg md:text-xl text-slate-600 leading-8 md:leading-9 max-w-3xl mx-auto">

//             Moonlight Overseas is committed to protecting your personal
//             information. This Privacy Policy explains how we collect,
//             store, use and safeguard your information while providing
//             Visa Services, Air Ticketing, Hajj & Umrah, Holiday Packages,
//             Manpower Recruitment and other travel solutions.

//           </p>

//           <button
//             onClick={handleContact}
//             className=" cursor-pointer mt-10 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 px-8 py-4 text-white font-semibold shadow-xl hover:scale-105 duration-300">

//             Contact Us

//             <ArrowRight size={20} />

//           </button>

//         </div>

//         {/* INTRO CARD */}
//         <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-3xl   border border-gray-100 shadow-lg p-8 md:p-10 mb-24">


//           <h2 className="text-3xl font-bold  text-slate-900 mb-6">

//             About This Policy

//           </h2>

//           <p className="text-slate-600 leading-8">

//             This Privacy Policy describes how Moonlight Overseas collects,
//             processes and protects your personal information when you use
//             our website or travel services. By using our website, you
//             agree to the collection and use of information in accordance
//             with this policy.

//           </p>

//         </div>

//         {/* GRID */}

//         <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">

//           {privacySections.map((section, index) => (

//             <div
//               key={index}
//               className="group bg-white rounded-3xl border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 p-8 lg:p-9 hover:-translate-y-2"            >

//               <div
//                 className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${section.color} text-white flex items-center justify-center mb-6`}
//               >

//                 {section.icon}

//               </div>

//               <h3 className="text-2xl font-bold text-slate-900 mb-5">

//                 {section.title}

//               </h3>

//               <div className="space-y-3">

//                 {section.items.map((item, i) => (

//                   <div key={i} className="flex gap-3 items-start">

//                     <CheckCircle2
//                       className="text-emerald-500 mt-1"
//                       size={18}
//                     />

//                     <span className="text-slate-600">

//                       {item}

//                     </span>

//                   </div>

//                 ))}

//               </div>

//             </div>

//           ))}

//         </div>

//         {/* Third Party Services */}

//         <div className="mt-24 bg-white rounded-3xl border border-slate-100 shadow-xl p-8 md:p-10  bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500">

//           <h2 className="text-3xl text-white font-bold  mb-6 ">
//             Third-Party Services
//           </h2>

//           <p className="text-white leading-8 mb-8">
//             To provide a seamless travel experience, we may use trusted
//             third-party services. These providers only receive the
//             information necessary to perform their services and are required
//             to protect your information.
//           </p>

//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//             {[
//               "Google Maps",
//               "Google Analytics",
//               "Payment Gateway",
//               "WhatsApp",
//               "Email Services",
//               "SMS Notifications",
//             ].map((item, index) => (

//               <div
//                 key={index}
//                 className="rounded-2xl border border-slate-200 bg-slate-50 p-5 flex items-center gap-3 hover:border-blue-400 hover:bg-blue-50 duration-300"
//               >
//                 <CheckCircle2 className="text-green-500" size={20} />

//                 <span className="font-medium text-slate-700">
//                   {item}
//                 </span>
//               </div>

//             ))}

//           </div>

//         </div>

//         {/* Policy Updates */}

//         <div className="mt-24 bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 rounded-3xl text-white p-8 md:p-10 shadow-xl">

//           <h2 className="text-3xl font-bold mb-5">
//             Policy Updates
//           </h2>

//           <p className="leading-8 text-blue-100">
//             Moonlight Overseas may update this Privacy Policy from time to
//             time to reflect changes in our services, legal obligations or
//             technology. Any changes will be posted on this page along with
//             the updated effective date.
//           </p>

//         </div>

//         {/* Contact */}


//         <div className="mt-24 rounded-3xl bg-white border border-slate-100 shadow-xl overflow-hidden">

//           {/* Header */}
//           <div className="bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 px-8 py-10 md:px-10 md:py-12">

//             <h2 className="text-3xl md:text-4xl font-bold text-white">
//               Questions About Your Privacy?
//             </h2>

//             <p className="mt-4 max-w-3xl text-base md:text-lg leading-8 text-blue-100">
//               If you have any questions about this Privacy Policy or how we collect,
//               use, and protect your personal information, please feel free to contact
//               our team—we're always happy to assist you.
//             </p>

//           </div>

//           {/* Contact Details */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 md:p-10">

//             {/* Email */}
//             <div className="flex items-start gap-4">
//               <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
//                 <Mail className="text-blue-600" />
//               </div>

//               <div>
//                 <h4 className="font-semibold text-slate-900">Email</h4>
//                 <p className="mt-1 text-slate-600">
//                   info@moonlightoverseas.com
//                 </p>
//               </div>
//             </div>

//             {/* Phone */}
//             <div className="flex items-start gap-4">
//               <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center">
//                 <Phone className="text-green-600" />
//               </div>

//               <div>
//                 <h4 className="font-semibold text-slate-900">Phone</h4>
//                 <p className="mt-1 text-slate-600">
//                   +91 8587860420
//                 </p>
//               </div>
//             </div>

//             {/* Address */}
//             <div className="flex items-start gap-4">
//               <div className="w-14 h-14 rounded-2xl bg-rose-100 flex items-center justify-center">
//                 <MapPin className="text-rose-600" />
//               </div>

//               <div>
//                 <h4 className="font-semibold text-slate-900">Branch Office </h4>
//                 <p className="mt-1 text-slate-600 leading-7">
//                   57, First Floor Bharat Nagar New Friends<br />Colony New Delhi - 110025


//                 </p>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* Bottom CTA */}

//         <div className="mt-24 text-center">

//           <div className="inline-block w-full max-w-5xl rounded-3xl bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 px-8 md:px-12 py-12 md:py-16 shadow-2xl">

//             <ShieldCheck
//               className="mx-auto text-white mb-6"
//               size={55}
//             />

//             <h2 className="text-4xl font-bold text-white">
//               Your Privacy is Our Priority
//             </h2>

//             <p className="mt-5 text-blue-100 max-w-3xl mx-auto leading-8 text-base md:text-lg">
//               We value your trust and are committed to protecting your
//               personal information while delivering secure, transparent
//               and reliable travel services around the world.
//             </p>


//             <button
//               onClick={handleContact}
//               className=" cursor-pointer mt-8 px-8 py-4 rounded-full bg-white text-blue-700 font-semibold hover:scale-105 duration-300 shadow-lg"
//             >
//               Contact Support
//             </button>


//           </div>

//         </div>



//       </div>



//     </section>
//   );
// }

import {
  ShieldCheck,
  Lock,
  Database,
  UserCheck,
  Globe,
  Cookie,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 *   Sky blue    #7DB8F2   (light accent on dark panels)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

type PrivacySection = {
  icon: LucideIcon;
  title: string;
  items: string[];
};

const privacySections: PrivacySection[] = [
  {
    icon: Database,
    title: "Information We Collect",
    items: [
      "Full Name",
      "Email Address",
      "Mobile Number",
      "Passport Information (when required)",
      "Travel Destination",
      "Travel Dates",
      "Billing Address",
      "Payment Details",
      "Device & Browser Information",
    ],
  },
  {
    icon: UserCheck,
    title: "How We Use Your Information",
    items: [
      "Flight Booking",
      "Hotel Reservation",
      "Visa Processing",
      "Holiday Packages",
      "Customer Support",
      "Travel Notifications",
      "Improve Our Services",
      "Special Offers (Optional)",
    ],
  },
  {
    icon: Cookie,
    title: "Cookies Policy",
    items: [
      "Remember Login",
      "Save Preferences",
      "Improve Website Speed",
      "Analytics",
      "Personalized Experience",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    items: [
      "SSL Encryption",
      "Secure Database",
      "Secure Payment Gateway",
      "Restricted Access",
      "Regular Security Monitoring",
    ],
  },
  {
    icon: Globe,
    title: "Sharing Information",
    items: [
      "Airlines",
      "Hotels",
      "Visa Centers",
      "Embassies",
      "Government Authorities (if required by law)",
      "Payment Partners",
      "We Never Sell Customer Information",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Your Rights",
    items: [
      "Access Your Data",
      "Update Information",
      "Delete Information",
      "Withdraw Consent",
      "Request Data Copy",
    ],
  },
];

const thirdParties = [
  "Google Maps",
  "Google Analytics",
  "Payment Gateway",
  "WhatsApp",
  "Email Services",
  "SMS Notifications",
];

const focusRing =
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2";

/* Dark navy → brand blue panel used for the three highlight blocks */
const darkPanel = "bg-gradient-to-r from-[#06294D] to-[#015399] text-white";

export default function Privacy() {
  const navigate = useNavigate();

  const handleContact = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate("/contact");
  };

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* HERO */}
        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-20">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#015399]/25 bg-[#015399]/10 px-4 py-1.5 text-sm font-semibold text-[#015399]">
            <ShieldCheck size={18} aria-hidden="true" />
            Privacy Policy
          </span>

          <h1 className="font-heading text-5xl font-semibold leading-tight tracking-tight text-[#06294D] lg:text-7xl">
            Your Privacy Matters
          </h1>
          <div className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#6A6868] md:text-xl md:leading-9">
            Moonlight Overseas is committed to protecting your personal
            information. This Privacy Policy explains how we collect, store,
            use and safeguard your information while providing Visa Services,
            Air Ticketing, Hajj & Umrah, Holiday Packages, Manpower Recruitment
            and other travel solutions.
          </p>

          <button
            type="button"
            onClick={handleContact}
            className={`mt-10 inline-flex min-h-[48px] items-center gap-3 rounded-xl bg-[#015399] px-8 py-3 font-semibold text-white shadow-lg
            transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06294D] hover:shadow-xl ${focusRing}`}
          >
            Contact Us
            <ArrowRight size={20} aria-hidden="true" />
          </button>
        </div>

        {/* INTRO CARD */}
        <div className="mb-16 rounded-2xl border border-[#6A6868]/20 border-l-4 border-l-[#015399] bg-white p-7 shadow-[0_12px_32px_-20px_rgba(6,41,77,0.35)] sm:mb-20 md:p-10">
          <h2 className="mb-5 font-heading text-3xl font-semibold text-[#06294D]">
            About This Policy
          </h2>
          <p className="leading-8 text-[#6A6868]">
            This Privacy Policy describes how Moonlight Overseas collects,
            processes and protects your personal information when you use our
            website or travel services. By using our website, you agree to the
            collection and use of information in accordance with this policy.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
          {privacySections.map((section) => {
            const Icon = section.icon;
            return (
              <div
                key={section.title}
                className="group relative overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white p-7 lg:p-8
                shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] transition-all duration-300
                hover:-translate-y-1.5 hover:border-[#015399] hover:shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)]"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#015399] text-white">
                  <Icon className="h-7 w-7" aria-hidden="true" />
                </div>

                <h3 className="mb-5 font-heading text-2xl font-semibold text-[#06294D]">
                  {section.title}
                </h3>

                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-1 shrink-0 text-[#015399]"
                        size={18}
                        aria-hidden="true"
                      />
                      <span className="text-[#6A6868]">{item}</span>
                    </li>
                  ))}
                </ul>

                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1 w-0 bg-[#015399] transition-all duration-500 ease-out group-hover:w-full"
                />
              </div>
            );
          })}
        </div>

        {/* Third Party Services */}
        <div className={`mt-16 rounded-2xl p-7 shadow-xl sm:mt-20 md:p-10 ${darkPanel}`}>
          <h2 className="mb-5 font-heading text-3xl font-semibold">
            Third-Party Services
          </h2>

          <p className="mb-8 leading-8 text-white/85">
            To provide a seamless travel experience, we may use trusted
            third-party services. These providers only receive the information
            necessary to perform their services and are required to protect your
            information.
          </p>

          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {thirdParties.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl border border-white/15 bg-white p-4 transition-colors duration-300 hover:border-[#7DB8F2]"
              >
                <CheckCircle2 className="shrink-0 text-[#015399]" size={20} aria-hidden="true" />
                <span className="font-medium text-[#06294D]">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Policy Updates */}
        <div className={`mt-16 rounded-2xl p-7 shadow-xl sm:mt-20 md:p-10 ${darkPanel}`}>
          <h2 className="mb-5 font-heading text-3xl font-semibold">Policy Updates</h2>
          <p className="leading-8 text-white/85">
            Moonlight Overseas may update this Privacy Policy from time to time
            to reflect changes in our services, legal obligations or
            technology. Any changes will be posted on this page along with the
            updated effective date.
          </p>
        </div>

        {/* Contact */}
        <div className="mt-16 overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white shadow-xl sm:mt-20">
          <div className={`px-7 py-9 md:px-10 md:py-12 ${darkPanel}`}>
            <h2 className="font-heading text-3xl font-semibold md:text-4xl">
              Questions About Your Privacy?
            </h2>
            <p className="mt-4 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
              If you have any questions about this Privacy Policy or how we
              collect, use, and protect your personal information, please feel
              free to contact our team—we're always happy to assist you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 p-7 md:grid-cols-3 md:p-10">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#015399]/10 text-[#015399]">
                <Mail aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-[#06294D]">Email</h4>
                <p className="mt-1 break-all text-[#6A6868]">info@moonlightoverseas.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#015399]/10 text-[#015399]">
                <Phone aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-[#06294D]">Phone</h4>
                <a
                  href="tel:+918587860420"
                  className={`mt-1 inline-block rounded text-[#6A6868] hover:text-[#015399] ${focusRing}`}
                >
                  +91 8587860420
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#015399]/10 text-[#015399]">
                <MapPin aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-[#06294D]">Branch Office</h4>
                <p className="mt-1 leading-7 text-[#6A6868]">
                  57, First Floor Bharat Nagar New Friends
                  <br />
                  Colony New Delhi - 110025
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center sm:mt-20">
          <div className={`mx-auto w-full max-w-5xl rounded-2xl px-7 py-12 shadow-2xl md:px-12 md:py-16 ${darkPanel}`}>
            <ShieldCheck className="mx-auto mb-6 text-[#7DB8F2]" size={55} aria-hidden="true" />

            <h2 className="font-heading text-4xl font-semibold">
              Your Privacy is Our Priority
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/85 md:text-lg">
              We value your trust and are committed to protecting your personal
              information while delivering secure, transparent and reliable
              travel services around the world.
            </p>

            <button
              type="button"
              onClick={handleContact}
              className="mt-8 min-h-[48px] rounded-xl bg-white px-8 py-3 font-semibold text-[#015399] shadow-lg transition-all duration-300
              hover:-translate-y-0.5 hover:bg-[#F5F7FA] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#015399]"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}





