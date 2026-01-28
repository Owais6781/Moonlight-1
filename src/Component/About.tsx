
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

/* ================= COUNT UP COMPONENT ================= */

type CountUpProps = {
  end: number;
  duration?: number;
  suffix?: string;
};
const CountUp = ({ end, duration=2000,suffix = "" }: CountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
  let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp:number) => {
      if (startTime===null) startTime = timestamp;
       const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [end, duration]);

  return (
    <span>
      {count}
       {suffix}
    </span>
  );
};

/* ================= ABOUT COMPONENT ================= */
const About = () => {
  return (
    <section className="relative py-4 bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden ">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-gradient-to-br from-sky-500/5 to-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Header with modern typography */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full mb-6">
            <span className="text-white text-sm font-medium tracking-wider">ABOUT MOONLIGHT OVERSEAS</span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold  leading-tight tracking-tight  bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
            Crafting  Travel Stories
            <span className="block mt-2 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
              {/* Travel Stories */}
            </span>
          </h2>

          <p className="mt-8 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
            We transform travel dreams into reality through personalized experiences, expert guidance
            and seamless execution across six continents.
          </p>

          {/* Services Badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
            {[
              { text: "Visa Services", color: "from-blue-500 to-cyan-500" },
              { text: "Manpower Recruitment", color: "from-indigo-500 to-purple-500" },
              { text: "Document Attestation", color: "from-emerald-500 to-teal-500" },
              { text: "Hajj & Umrah", color: "from-amber-500 to-orange-500" },
              { text: "Air Ticketing", color: "from-violet-500 to-fuchsia-500" },
              { text: "Customized Holiday Packages", color: "from-rose-500 to-pink-500" }
            ].map((service, index) => (
              <span
                key={index}
                className={`px-4 py-2 bg-gradient-to-r ${service.color} text-white text-sm font-medium rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                {service.text}
              </span>
            ))}
          </div>
        </div>

        {/* Modern Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mb-20">
        


          {/* Mission Card */}
          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-blue-200 hover:-translate-y-2">

            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed text-base">
                Redefining travel experiences through innovation, integrity, and
                personalized care. We create seamless journeys that exceed expectations
                while promoting sustainability and cultural sensitivity.
              </p>
            </div>

            {/* Bottom hover line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1
               bg-gradient-to-r from-blue-500 to-cyan-500
               rounded-b-3xl
               scale-x-0 group-hover:scale-x-100
               transition-transform duration-500 origin-left"
            />
          </div>


          {/* Services Card */}


          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-indigo-200 hover:-translate-y-2">

            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                What We Offer
              </h3>

              <div className="space-y-3">
                {[
                  "Customized holiday packages & luxury escapes",
                  "Global visa processing & documentation",
                  "Air ticketing with price match guarantee",
                  "Corporate travel management",
                  "Destination weddings & events",
                  "24/7 travel support",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                    <span className="text-gray-600 text-sm sm:text-base">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom hover line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1
               bg-gradient-to-r from-indigo-500 to-purple-500
               rounded-b-3xl
               scale-x-0 group-hover:scale-x-100
               transition-transform duration-500 origin-left"
            />
          </div>


          {/* Values Card */}


          <div className="group relative overflow-hidden bg-white/80 backdrop-blur-sm p-8 rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 hover:border-emerald-200 hover:-translate-y-2">

            {/* Hover background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Content */}
            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose Us
              </h3>

              <div className="space-y-4">
                {[
                  { title: "Global Network", desc: "Partnerships in 60+ countries" },
                  { title: "Transparency", desc: "No hidden fees, clear pricing" },
                  { title: "Expert Team", desc: "20+ years of collective experience" },
                  { title: "Tailored Solutions", desc: "Customized to your preferences" },
                ].map((value, i) => (
                  <div key={i}>
                    <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                      <span className="w-2 h-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full" />
                      {value.title}
                    </h4>
                    <p className="text-gray-500 text-sm mt-1 pl-4">
                      {value.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom hover line */}
            <div
              className="absolute bottom-0 left-0 right-0 h-1
               bg-gradient-to-r from-emerald-500 to-teal-500
               rounded-b-3xl
               scale-x-0 group-hover:scale-x-100
               transition-transform duration-500 origin-left"
            />
          </div>

        </div>

        {/* ================= STATS SECTION (AUTO COUNT) ================= */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {[
            { number: 15000, suffix: "+", label: "Happy Travelers", color: "text-blue-600" },
            { number: 40, suffix: "+", label: "Countries Served", color: "text-indigo-600" },
            { number: 98, suffix: "%", label: "Visa Success Rate", color: "text-emerald-600" },
            { number: 24, suffix: "/7", label: "Support Available", color: "text-amber-600" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-100 shadow-lg">
              <div className={`text-4xl font-bold ${stat.color} mb-2`}>
             <CountUp end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Quote Section */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 w-12 h-12 text-blue-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>

          <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 p-10 rounded-3xl border border-gray-100 shadow-lg">
            <blockquote className="text-2xl md:text-3xl font-medium text-gray-800 leading-relaxed mb-8">
              "We believe travel is more than visiting places—it's about connecting with cultures, creating lasting memories
              and expanding perspectives. Every journey we craft tells a unique story."
            </blockquote>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div>
                <div className="text-lg font-bold text-gray-900">Moonlight Overseas Team</div>
                <div className="text-gray-600">Your Global Travel Partners</div>
              </div>

              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-slate-900 via-blue-600 to-cyan-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                <span>Start Your Journey</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 group-hover:translate-x-2 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
