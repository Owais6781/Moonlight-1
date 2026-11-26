
// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";

// /* ================= COUNT UP COMPONENT ================= */

// type CountUpProps = {
//   end: number;
//   duration?: number;
//   suffix?: string;
// };
// const CountUp = ({ end, duration=2000,suffix = "" }: CountUpProps) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//   let startTime: number | null = null;
//     let animationFrameId: number;

//     const animate = (timestamp:number) => {
//       if (startTime===null) startTime = timestamp;
//        const progress = Math.min((timestamp - startTime) / duration, 1);
//       setCount(Math.floor(progress * end));

//       if (progress < 1) {
//         animationFrameId = requestAnimationFrame(animate);
//       }
//     };

//     animationFrameId = requestAnimationFrame(animate);

//     return () => cancelAnimationFrame(animationFrameId);
//   }, [end, duration]);

//   return (
//     <span>
//       {count}
//        {suffix}
//     </span>
//   );
// };

// /* ================= ABOUT COMPONENT ================= */
// const About = () => {
//   return (
//     <section className="relative py-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden ">
//       {/* Decorative background elements */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute top-60 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
//         <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-sky-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
//       </div>

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Header with modern typography */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
//             <span className="text-white text-sm font-medium tracking-wider">ABOUT MOONLIGHT OVERSEAS</span>
//           </div>

//           <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold  leading-tight tracking-tight  bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
//             Crafting  Travel Stories
//             <span className="block mt-2 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
//               {/* Travel Stories */}
//             </span>
//           </h2>

//           <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
//             We transform travel dreams into reality through personalized experiences, expert guidance
//             and seamless execution across six continents.
//           </p>

//           {/* Services Badges */}
//           <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
//             {[
//               { text: "Visa Services", color: "from-blue-500 to-cyan-500" },
//               { text: "Manpower Recruitment", color: "from-indigo-500 to-purple-500" },
//               { text: "Document Attestation", color: "from-emerald-500 to-teal-500" },
//               { text: "Hajj & Umrah", color: "from-amber-500 to-orange-500" },
//               { text: "Air Ticketing", color: "from-violet-500 to-fuchsia-500" },
//               { text: "Customized Holiday Packages", color: "from-rose-500 to-pink-500" }
//             ].map((service, index) => (
//               <span
//                 key={index}
//                 className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
//               >
//                 {service.text}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Modern Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mb-20">
        


//           {/* Mission Card */}
//           <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-200 hover:-translate-y-2">

//             {/* Hover background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             {/* Content */}
//             <div className="relative z-10">
//               {/* Icon */}
//               <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//               </div>

//               {/* Title */}
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Our Mission
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 leading-relaxed text-base">
//                 Redefining travel experiences through Innovation, Integrity, Competent, Reliable, Ethical & expert customer service
//                 and personalized care. We create seamless journeys that exceed expectations
//                 while promoting sustainability and cultural sensitivity.
//               </p>
//             </div>

//             {/* Bottom hover line */}
//             <div
//               className="absolute bottom-0 left-0 right-0 h-1
//                bg-gradient-to-r from-blue-500 to-cyan-500
//                rounded-b-3xl
//                scale-x-0 group-hover:scale-x-100
//                transition-transform duration-500 origin-left"
//             />
//           </div>


//           {/* Services Card */}


//           <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-indigo-200 hover:-translate-y-2">

//             {/* Hover background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                   />
//                 </svg>
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 What We Offer
//               </h3>

//               <div className="space-y-3">
//                 {[
//                   "Customized holiday packages & luxury escapes",
//                   "Global visa processing & documentation",
//                   "Air ticketing with price match guarantee",
//                   "Corporate travel management",
//                   "Destination weddings & events",
//                   "24/7 travel support",
//                 ].map((item, i) => (
//                   <div key={i} className="flex items-center gap-3">
//                     <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
//                     <span className="text-gray-600 text-sm sm:text-base">
//                       {item}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom hover line */}
//             <div
//               className="absolute bottom-0 left-0 right-0 h-1
//                bg-gradient-to-r from-indigo-500 to-purple-500
//                rounded-b-3xl
//                scale-x-0 group-hover:scale-x-100
//                transition-transform duration-500 origin-left"
//             />
//           </div>


//           {/* Values Card */}


//           <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-emerald-200 hover:-translate-y-2">

//             {/* Hover background */}
//             <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//             {/* Content */}
//             <div className="relative z-10">
//               <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   className="h-7 w-7 text-white"
//                   fill="none"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                   />
//                 </svg>
//               </div>

//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 Why Choose Us
//               </h3>

//               <div className="space-y-4">
//                 {[
//                   { title: "Global Network", desc: "Partnerships in 60+ countries" },
//                   { title: "Transparency", desc: "No hidden cost, clear pricing" },
//                   { title: "Expert Team", desc: "20+ years of collective experience" },
//                   { title: "Tailored Solutions", desc: "Customized to your preferences" },
//                 ].map((value, i) => (
//                   <div key={i}>
//                     <h4 className="font-semibold text-gray-900 flex items-center gap-2">
//                       <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
//                       {value.title}
//                     </h4>
//                     <p className="text-gray-500 text-sm mt-1 pl-4">
//                       {value.desc}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Bottom hover line */}
//             <div
//               className="absolute bottom-0 left-0 right-0 h-1
//                bg-gradient-to-r from-emerald-500 to-teal-500
//                rounded-b-3xl
//                scale-x-0 group-hover:scale-x-100
//                transition-transform duration-500 origin-left"
//             />
//           </div>

//         </div>

//         {/* ================= STATS SECTION (AUTO COUNT) ================= */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
//           {[
//             { number: 15000, suffix: "+", label: "Happy Travelers", color: "text-blue-600" },
//             { number: 40, suffix: "+", label: "Countries Served", color: "text-indigo-600" },
//             { number: 98, suffix: "%", label: "Visa Success Rate", color: "text-emerald-600" },
//             { number: 24, suffix: "/7", label: "Support Available", color: "text-amber-600" }
//           ].map((stat, index) => (
//             <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg">
//               <div className={`text-4xl font-bold ${stat.color} mb-2`}>
//              <CountUp end={stat.number} suffix={stat.suffix} />
//               </div>
//               <div className="text-gray-600 font-medium">{stat.label}</div>
//             </div>
//           ))}
//         </div>

//         {/* Quote Section */}
//         <div className="relative max-w-4xl mx-auto">
//           <div className="absolute -top-6 -left-6 w-12 h-12 text-blue-200">
//             <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//               <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
//             </svg>
//           </div>

//           <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 p-10 rounded-3xl border border-gray-100 shadow-lg">
//             <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
//               "We believe travel is more than visiting places—it's about connecting with cultures, creating lasting memories
//               and expanding perspectives. Every journey we craft tells a unique story."
//             </blockquote>

//             <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
//               <div>
//                 <div className="text-lg font-bold text-gray-900">Moonlight Overseas Team</div>
//                 <div className="text-gray-600">Your Global Travel Partners</div>
//               </div>

//               <Link
//                 to="/contact"
//                 className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
//               >
//                 <span>Start Your Journey</span>
//                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
//                 </svg>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;




import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Briefcase, CheckCircle2, Heart } from "lucide-react";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

/* ================= COUNT UP COMPONENT ================= */

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};

// Counts up once, when it scrolls into view. Jumps straight to the final
// value for people who prefer reduced motion.
const CountUp = ({ end, duration = 2000, suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let animationFrameId = 0;
    let started = false;

    const run = () => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setCount(end);
        return;
      }
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) animationFrameId = requestAnimationFrame(animate);
      };
      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {count.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
};

/* ================= DATA (unchanged content) ================= */

const serviceBadges = [
  "Visa Services",
  "Manpower Recruitment",
  "Document Attestation",
  "Hajj & Umrah",
  "Air Ticketing",
  "Customized Holiday Packages",
];

const offers = [
  "Customized holiday packages & luxury escapes",
  "Global visa processing & documentation",
  "Air ticketing with price match guarantee",
  "Corporate travel management",
  "Destination weddings & events",
  "24/7 travel support",
];

const values = [
  { title: "Global Network", desc: "Partnerships in 60+ countries" },
  { title: "Transparency", desc: "No hidden cost, clear pricing" },
  { title: "Expert Team", desc: "20+ years of collective experience" },
  { title: "Tailored Solutions", desc: "Customized to your preferences" },
];

const stats = [
  { number: 15000, suffix: "+", label: "Happy Travelers" },
  { number: 40, suffix: "+", label: "Countries Served" },
  { number: 98, suffix: "%", label: "Visa Success Rate" },
  { number: 24, suffix: "/7", label: "Support Available" },
];

/* ================= SHARED CARD SHELL ================= */

const AboutCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: typeof CheckCircle2;
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className="group relative overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white p-7 sm:p-8
    shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] transition-all duration-300
    hover:-translate-y-1.5 hover:border-[#015399] hover:shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)]"
  >
    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#015399] text-white">
      <Icon className="h-7 w-7" aria-hidden="true" />
    </div>

    <h3 className="mb-4 font-heading text-2xl font-semibold text-[#06294D]">
      {title}
    </h3>

    {children}

    <div
      aria-hidden="true"
      className="absolute bottom-0 left-0 right-0 h-1 origin-left scale-x-0 bg-[#015399] transition-transform duration-500 group-hover:scale-x-100"
    />
  </div>
);

/* ================= ABOUT COMPONENT ================= */
const About = () => {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] py-16 sm:py-20 lg:py-24">
      <div className="container relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center sm:mb-20">
          <span className="mb-6 inline-block rounded-full border border-[#015399]/25 bg-[#015399]/10 px-4 py-1.5 text-sm font-semibold text-[#015399]">
            About Moonlight Overseas
          </span>

          <h2 className="font-heading text-5xl font-semibold leading-tight tracking-tight text-[#06294D] sm:text-6xl lg:text-7xl">
            Crafting Travel Stories
          </h2>
          <div
            className="mx-auto mt-6 h-[3px] w-16 rounded-full bg-[#015399]"
            aria-hidden="true"
          />

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-[#6A6868] sm:text-xl">
            We transform travel dreams into reality through personalized
            experiences, expert guidance and seamless execution across six
            continents.
          </p>

          {/* Service badges */}
          <div className="mx-auto mt-10 flex max-w-2xl flex-wrap justify-center gap-3">
            {serviceBadges.map((text) => (
              <span
                key={text}
                className="rounded-full border border-[#015399]/25 bg-white px-4 py-2 text-sm font-medium text-[#015399]
                transition-all duration-300 hover:-translate-y-0.5 hover:border-[#015399] hover:bg-[#015399] hover:text-white"
              >
                {text}
              </span>
            ))}
          </div>
        </div>

        {/* Cards grid */}
        <div className="mb-16 grid grid-cols-1 gap-6 sm:mb-20 md:grid-cols-3 lg:gap-8">
          {/* Mission */}
          <AboutCard icon={CheckCircle2} title="Our Mission">
            <p className="text-base leading-relaxed text-[#6A6868]">
              Redefining travel experiences through Innovation, Integrity,
              Competent, Reliable, Ethical & expert customer service and
              personalized care. We create seamless journeys that exceed
              expectations while promoting sustainability and cultural
              sensitivity.
            </p>
          </AboutCard>

          {/* What we offer */}
          <AboutCard icon={Briefcase} title="What We Offer">
            <ul className="space-y-3">
              {offers.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-[0.55em] h-2 w-2 shrink-0 rounded-full bg-[#015399]"
                    aria-hidden="true"
                  />
                  <span className="text-sm text-[#6A6868] sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </AboutCard>

          {/* Why choose us */}
          <AboutCard icon={Heart} title="Why Choose Us">
            <div className="space-y-4">
              {values.map((value) => (
                <div key={value.title}>
                  <h4 className="flex items-center gap-2 font-semibold text-[#06294D]">
                    <span
                      className="h-2 w-2 rounded-full bg-[#015399]"
                      aria-hidden="true"
                    />
                    {value.title}
                  </h4>
                  <p className="mt-1 pl-4 text-sm text-[#6A6868]">
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </AboutCard>
        </div>

        {/* ================= STATS (AUTO COUNT) ================= */}
        <div className="mb-16 grid grid-cols-2 gap-4 sm:mb-20 sm:gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-[#6A6868]/20 bg-white p-5 text-center shadow-[0_8px_24px_-16px_rgba(6,41,77,0.3)] sm:p-6"
            >
              <div className="mb-2 font-heading text-4xl font-semibold text-[#015399] sm:text-5xl">
                <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm font-medium text-[#6A6868] sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Quote section */}
        <div className="relative mx-auto max-w-4xl">
          <div className="rounded-2xl border border-[#6A6868]/20 border-l-4 border-l-[#015399] bg-white p-7 shadow-[0_16px_40px_-22px_rgba(6,41,77,0.35)] sm:p-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="mb-4 h-9 w-9 text-[#015399]/25"
              aria-hidden="true"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <blockquote className="mb-8 font-heading text-2xl font-medium leading-relaxed text-[#06294D] md:text-3xl">
              "We believe travel is more than visiting places—it's about
              connecting with cultures, creating lasting memories and expanding
              perspectives. Every journey we craft tells a unique story."
            </blockquote>

            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <div className="text-lg font-semibold text-[#06294D]">
                  Moonlight Overseas Team
                </div>
                <div className="text-[#6A6868]">Your Global Travel Partners</div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex min-h-[48px] items-center justify-center gap-3 rounded-xl bg-[#015399] px-8 py-3 font-semibold text-white
                shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06294D] hover:shadow-xl
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;