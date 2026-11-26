
 import React from "react";
 import { ArrowRight } from "lucide-react";
 import image1 from "../../Media/HomeSlide/Visa.png";
 import image2 from "../../Media/HomeSlide/tour-packages-banner.jpg";
 import image3 from "../../Media/HomeSlide/Tawaf.png";
 import image4 from "../../Media/Ticket/Air-India.jpg";
 import image5 from "../../Media/HomeSlide/Embassy-Attestation-1024x1024.png";
 import image6 from "../../Media/HomeSlide/travel-insurance.jpg";
 import { useNavigate } from "react-router-dom";

 import { Swiper, SwiperSlide } from "swiper/react";
 import { Autoplay, Pagination,} from "swiper/modules";

 import "swiper/css";
 import "swiper/css/pagination"
  //import "swiper/css/navigation";

 const slides = [
   {
     image: image1,
     title: "Visa & Emmigration Made Easy",
     subtitle: "Visa Services",
     button: "Apply Today",
     route: "/services",
   },
   {
     image: image2,
     title: "Dream Holidays, Best Prices",
     subtitle: "Holiday Packages",
     button: "View Packages",
     route: "/package",
   },
   {
     image: image3,
     title: "Hajj & Umrah",
     subtitle: "Hajj & Umrah Packages",
     button: "View Packages",
     route: "/package",
   },
   {
     image: image4,
     title: "Air Ticketing",
     subtitle: "Air Ticket Services",
     button: "Book Now",
     route: "/ticket",
   },
   {
     image: image5,
     title: "Document Legalisation/Attestation",
     subtitle: "Certificate & Embassy Attestation",
     button: "Get Started",
     route: "/attestation",
   },
   {
     image: image6,
     title: "Travel Insurance",
     subtitle: "Secure Your Journey",
     button: "Discover Now",
     route: "/insurance",
   },
   {
     image:
       "https:images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
     title: "Explore the World with Confidence",
     subtitle: "Tour & Travels",
     button: "Discover Now",
     route: "/tour",
   },
 ];

 const LeftImageSlider: React.FC = () => {
   const navigate = useNavigate();

const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

   const handleCardClick = (service: (typeof slides)[0]) => {
     if (service.route) {
       window.scrollTo({ top: 0, behavior: "smooth" });
       navigate(service.route, { state: { fromOurExpertise: true } });
     }
   };

  // return (
  //   <div className="relative w-full h-screen overflow-hidden min-w-[300px]">
  //     <Swiper
  //       modules={[Autoplay, Pagination, Navigation]}
  //       loop={true}
  //       speed={1000}
  //       autoplay={{
  //         delay: 3000,
  //         disableOnInteraction: false,
  //         pauseOnMouseEnter: false,
  //       }}
  //       pagination={{ clickable: true }}
  //       navigation={true}
  //       className="w-full h-full"
  //     >
  //       {slides.map((slide, i) => (
  //         <SwiperSlide key={i}>
  //           <div
  //             className="relative w-full h-screen bg-cover bg-center"
  //             style={{ backgroundImage: `url(${slide.image})` }}
  //           >
  //             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

  //             <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 z-10">
  //               <div className="max-w-xl space-y-4 sm:space-y-5 md:space-y-6 text-white">
  //                 <p className="uppercase tracking-widest text-cyan-400 font-semibold text-sm sm:text-base">
  //                   {slide.subtitle}
  //                 </p>

  //                 <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
  //                   {slide.title}
  //                 </h1>

  //                 <button
  //                   onClick={() => handleCardClick(slide)}
  //                   className="inline-flex items-center cursor-pointer gap-2 sm:gap-3 rounded-full bg-cyan-500 px-6 sm:px-8 py-2 sm:py-4 font-semibold text-sm sm:text-base hover:bg-cyan-600 transition"
  //                 >
  //                   {slide.button}
  //                   <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
  //                 </button>
  //               </div>
  //             </div>
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //   </div>
  // );
  return (
    <div className="relative h-screen w-full min-w-[300px] overflow-hidden bg-[#06294D]">
      {/* Pagination dots in the brand palette */}
      <style>{`
        .hero-swiper .swiper-pagination-bullet { background:#fff; opacity:.55; width:10px; height:10px; transition:all .3s; }
        .hero-swiper .swiper-pagination-bullet-active { background:#7DB8F2; opacity:1; width:28px; border-radius:9999px; }
      `}</style>

      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        speed={1000}
        autoplay={
          prefersReducedMotion
            ? false
            : {
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
        }
        pagination={{ clickable: true }}
        className="hero-swiper h-full w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={slide.title}>
            <div className="relative h-screen w-full">
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                loading={i === 0 ? "eager" : "lazy"}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06294D]/90 via-[#06294D]/60 to-[#06294D]/10" />

              <div className="absolute inset-0 z-10 flex items-center px-4 sm:px-6 md:px-10">
                <div className="max-w-xl space-y-4 text-white sm:space-y-5 md:space-y-6">
                  <p className="text-sm font-semibold tracking-wide text-[#7DB8F2] sm:text-base">
                    {slide.subtitle}
                  </p>

                  <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h2>

                  <div className="h-[3px] w-14 rounded-full bg-[#7DB8F2]" aria-hidden="true" />

                  <button
                    type="button"
                    onClick={() => handleCardClick(slide)}
                    className="group inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/25 bg-[#015399] px-6 py-3 text-sm font-semibold text-white
                    shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#015399]
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06294D]
                    sm:gap-3 sm:px-8 sm:text-base"
                  >
                    {slide.button}
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
                      aria-hidden="true"
                    />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LeftImageSlider;





// import React from "react";
// import { ArrowRight } from "lucide-react";
// import image1 from "../../Media/HomeSlide/Visa.png";
// import image2 from "../../Media/HomeSlide/tour-packages-banner.jpg";
// import image3 from "../../Media/HomeSlide/Tawaf.png";
// import image4 from "../../Media/Ticket/Air-India.jpg";
// import image5 from "../../Media/HomeSlide/Embassy-Attestation-1024x1024.png";
// import image6 from "../../Media/HomeSlide/travel-insurance.jpg";
// import { useNavigate } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, Pagination } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/pagination";

// /*
//  * Palette taken from the Moonlight Overseas logo:
//  *   Brand blue  #015399   (the "M", "N" and the compass lines)
//  *   Deep navy   #06294D   (darker shade of the brand blue, photo overlay)
//  *   Sky blue    #7DB8F2   (light accent on dark photos)
//  * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
//  */

// type Slide = {
//   image: string;
//   title: string;
//   subtitle: string;
//   button: string;
//   route: string;
// };

// const slides: Slide[] = [
//   {
//     image: image1,
//     title: "Visa & Emigration Made Easy",
//     subtitle: "Visa Services",
//     button: "Apply Today",
//     route: "/services",
//   },
//   {
//     image: image2,
//     title: "Dream Holidays, Best Prices",
//     subtitle: "Holiday Packages",
//     button: "View Packages",
//     route: "/package",
//   },
//   {
//     image: image3,
//     title: "Hajj & Umrah",
//     subtitle: "Hajj & Umrah Packages",
//     button: "View Packages",
//     route: "/package",
//   },
//   {
//     image: image4,
//     title: "Air Ticketing",
//     subtitle: "Air Ticket Services",
//     button: "Book Now",
//     route: "/ticket",
//   },
//   {
//     image: image5,
//     title: "Document Legalisation/Attestation",
//     subtitle: "Certificate & Embassy Attestation",
//     button: "Get Started",
//     route: "/attestation",
//   },
//   {
//     image: image6,
//     title: "Travel Insurance",
//     subtitle: "Secure Your Journey",
//     button: "Discover Now",
//     route: "/insurance",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
//     title: "Explore the World with Confidence",
//     subtitle: "Tour & Travels",
//     button: "Discover Now",
//     route: "/tour",
//   },
// ];

// const LeftImageSlider: React.FC = () => {
//   const navigate = useNavigate();

//   // Don't autoplay for people who prefer reduced motion.
//   const prefersReducedMotion =
//     typeof window !== "undefined" &&
//     window.matchMedia("(prefers-reduced-motion: reduce)").matches;

//   const handleCardClick = (service: Slide) => {
//     if (service.route) {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//       navigate(service.route, { state: { fromOurExpertise: true } });
//     }
//   };

//   return (
//     <div className="relative h-screen w-full min-w-[300px] overflow-hidden bg-[#06294D]">
//       {/* Pagination dots in the brand palette */}
//       <style>{`
//         .hero-swiper .swiper-pagination-bullet { background:#fff; opacity:.55; width:10px; height:10px; transition:all .3s; }
//         .hero-swiper .swiper-pagination-bullet-active { background:#7DB8F2; opacity:1; width:28px; border-radius:9999px; }
//       `}</style>

//       <Swiper
//         modules={[Autoplay, Pagination]}
//         loop={true}
//         speed={1000}
//         autoplay={
//           prefersReducedMotion
//             ? false
//             : {
//                 delay: 3000,
//                 disableOnInteraction: false,
//                 pauseOnMouseEnter: true,
//               }
//         }
//         pagination={{ clickable: true }}
//         className="hero-swiper h-full w-full"
//       >
//         {slides.map((slide, i) => (
//           <SwiperSlide key={slide.title}>
//             <div className="relative h-screen w-full">
//               <img
//                 src={slide.image}
//                 alt=""
//                 aria-hidden="true"
//                 loading={i === 0 ? "eager" : "lazy"}
//                 className="absolute inset-0 h-full w-full object-cover"
//               />
//               <div className="absolute inset-0 bg-gradient-to-r from-[#06294D]/90 via-[#06294D]/60 to-[#06294D]/10" />

//               <div className="absolute inset-0 z-10 flex items-center px-4 sm:px-6 md:px-10">
//                 <div className="max-w-xl space-y-4 text-white sm:space-y-5 md:space-y-6">
//                   <p className="text-sm font-semibold tracking-wide text-[#7DB8F2] sm:text-base">
//                     {slide.subtitle}
//                   </p>

//                   <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
//                     {slide.title}
//                   </h2>

//                   <div className="h-[3px] w-14 rounded-full bg-[#7DB8F2]" aria-hidden="true" />

//                   <button
//                     type="button"
//                     onClick={() => handleCardClick(slide)}
//                     className="group inline-flex min-h-[48px] items-center gap-2 rounded-xl border border-white/25 bg-[#015399] px-6 py-3 text-sm font-semibold text-white
//                     shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#015399]
//                     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06294D]
//                     sm:gap-3 sm:px-8 sm:text-base"
//                   >
//                     {slide.button}
//                     <ArrowRight
//                       className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 sm:h-5 sm:w-5"
//                       aria-hidden="true"
//                     />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default LeftImageSlider;