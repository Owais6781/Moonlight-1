// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { ArrowRight } from "lucide-react";

// const slides = [


//   {
//     image:
//       "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600",
//     title: "Visa & Emmigration Made Easy",
//     subtitle: "Visa Services",
//     button: "Apply Today",
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
//     title: "Dream Holidays, Best Prices",
//     subtitle: "Holiday Packages",
//     button: "View Packages",
    
//   },
//   {
//     image:
//       "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600",
//     title: "Hajj & Umrah ",
//     subtitle: "Hajj & Umrah Packages",
//     button: "View Packages",
//   },
//    {
//     image:
//        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1600", // Example flight image
//     title: " Air Ticketing ",
//     subtitle: "Air Ticket Services",
//     button: "Book Now",
//   },
//      {
//     image:
//       "https://images.unsplash.com/photo-1581092919535-7146b4d5a1c6?q=80&w=1600",
//     title: "Document Attestation ",
//     subtitle: "Certificate & Embassy Attestation",
//     button: "Get Started",
//   },
//    {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
//     title: "Travel Insurance ",
//     subtitle: " Secure Your Journey",
//     button: "Discover Now",
  
//   },
//     {
//     image:
//       "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
//     title: "Explore the World with Confidence",
//     subtitle: " Tour & Travels",
//     button: "Discover Now",
  
//   },
// ];

// const LeftImageSlider: React.FC = () => {
//   const [index, setIndex] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="relative h-screen overflow-hidden w-full min-w-lg">
//       {/* SLIDES */}
//       <div
//         className="flex h-full transition-transform duration-1000"
//         style={{ transform: `translateX(-${index * 100}%)` }}
//       >
//         {slides.map((slide, i) => (
//           <div
          
//             key={i}
//             className="min-w-full h-full bg-cover bg-center relative"
//             style={{ backgroundImage: `url(${slide.image})` }}
//           >
//             <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
//           </div>
//         ))}
//       </div>

//       {/* TEXT OVERLAY */}
//       <div className="absolute inset-0 flex items-center px-10 z-10">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="max-w-xl space-y-6 text-white"
//         >
//           <p className="uppercase tracking-widest text-cyan-400 font-semibold">
//             {slides[index].subtitle}
//           </p>

//           <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
//             {slides[index].title}
//           </h1>

//           <button className="inline-flex items-center gap-3 rounded-full bg-cyan-500 px-8 py-4 font-semibold hover:bg-cyan-600 transition">
//             {slides[index].button}
//             <ArrowRight />
//           </button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default LeftImageSlider;





import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import image1 from "../../Media/HomeSlide/Visa.png" 
import image2 from "../../Media/HomeSlide/tour-packages-banner.jpg" 
import image3 from "../../Media/HomeSlide/Tawaf.png" 
import image4 from "../../Media/Ticket/Air-India.jpg"
import image5 from "../../Media/HomeSlide/Embassy-Attestation-1024x1024.png"
import image6 from "../../Media/HomeSlide/travel-insurance.jpg"
import { useNavigate } from "react-router-dom";

const slides = [
  {
    image: image1,
    title: "Visa & Emmigration Made Easy",
    subtitle: "Visa Services",
    button: "Apply Today",
     route: "/services"
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
    // route: "/Package",
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
    title: "Document Attestation",
    subtitle: "Certificate & Embassy Attestation",
    button: "Get Started",
     route: "/attestation"
  },
  {
    image:  image6,
    title: "Travel Insurance",
    subtitle: "Secure Your Journey",
    button: "Discover Now",
  },
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600",
    title: "Explore the World with Confidence",
    subtitle: "Tour & Travels",
    button: "Discover Now",
  },
];

const LeftImageSlider: React.FC = () => {
  const [index, setIndex] = useState(0);
   const navigate=useNavigate()
   
   

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);



    const handleCardClick = (service: typeof slides[0]) => {
    if (service.route) {
       window.scrollTo({ top: 0, behavior: "instant" });
      navigate(service.route, { state: { fromOurExpertise: true } });
      console.log(service.title, "clicked");
    
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden min-w-[300px]">
      {/* SLIDES */}
      {/* <div
        className="flex h-full transition-transform duration-1000"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="min-w-full h-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          </div>
        ))}
      </div> */}

      {/* SLIDES */}
<motion.div
  key={index}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  transition={{ duration: 0.8 }}
  className="absolute inset-0 w-full h-full bg-cover bg-center"
  style={{ backgroundImage: `url(${slides[index].image})` }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
</motion.div>


      {/* TEXT OVERLAY */}
      <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:px-10 z-10">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
      
          className="max-w-xl space-y-4 sm:space-y-5 md:space-y-6 text-white"
        >
          <p className="uppercase tracking-widest text-cyan-400 font-semibold text-sm sm:text-base">
            {slides[index].subtitle}
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-snug sm:leading-tight md:leading-tight lg:leading-tight">
            {slides[index].title}
          </h1>

          <button
          // onClick={ButtonCallBack}
           onClick={() => handleCardClick(slides[index])}
           className="inline-flex items-center cursor-pointer gap-2 sm:gap-3 rounded-full bg-cyan-500 px-6 sm:px-8 py-2 sm:py-4 font-semibold text-sm sm:text-base hover:bg-cyan-600 transition">
            {slides[index].button}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default LeftImageSlider;
