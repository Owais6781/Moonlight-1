


// import { useState } from "react";
// import { MapPin, Mail, Phone, Send } from "lucide-react";
// import emailjs from "@emailjs/browser";


// const InfoCard: React.FC<{
//   icon: React.ReactNode;
//   title: string;
//   subtitle: string;
//   value: string;
//   action: string;
//   link?: string;
// }> = ({ icon, title, subtitle, value, action, link }) => (
//   <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition ">
//     <div className="flex items-center mb-4 text-blue-600">{icon}</div>
//     <h4 className="font-bold text-lg mb-1">{title}</h4>
//     <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
//     <p className="text-gray-700 mb-2">{value}</p>
//     {link && (
//       <a
//         href={link}
//         target="_blank"
//         rel="noopener noreferrer"
//         className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
//       >
//         {action} <Send className="w-4 h-4" />
//       </a>
//     )}
//   </div>
// );

// /* ---------------- MAIN CONTACT COMPONENT ---------------- */
// const Contact: React.FC = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [subject, setSubject] = useState("");
//   const [message, setMessage] = useState("");

//   const [loading, setLoading] = useState(false);
//   const [successMsg, setSuccessMsg] = useState("");
//   const [errorMsg, setErrorMsg] = useState("");

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);

//     const templateParams = {
//       from_name: name,
//       email,
//       phone,
//       subject,
//       message,
//     };

//     emailjs
//       .send(
//         "service_ydc3erg", // ✅ your service ID
//         "template_wicg04p", // ✅ your template ID
//         templateParams,
//         "y5gunvblEinQd0bkV" // ✅ your public key
//       )
//       .then(
//         () => {
//           setSuccessMsg("✅ Message sent successfully! We’ll contact you soon.");
//           setErrorMsg("");
//           setName("");
//           setEmail("");
//           setPhone("");
//           setSubject("");
//           setMessage("");
//           setLoading(false);
//           setTimeout(() => setSuccessMsg(""), 4000);
//         },
//         () => {
//           setErrorMsg("❌ Failed to send message. Please try again.");
//           setSuccessMsg("");
//           setLoading(false);
//           setTimeout(() => setErrorMsg(""), 4000);
//         }
//       );
//   };


//   const subjectOption = [
//     "Healthcare  Recruitment",
//     "Visa Consultation",
//     "Air Ticket Booking",
//     "Travel Consultation",
//     "Hajj & Umarah",
//     "Holiday Tour Packages",
//     "Document Legalisation/Attestation",
//     "Other",
//   ]
//   return (
//     <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
//       {/* Background Effects */}
//       <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
//       <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
//       <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

//       {/* Header */}
//       <div className="relative pt-4 pb-16 px-4 text-center">
//         <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
//           We would love to{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             hear from you
//           </span>
//         </h1>
//         <p className="max-w-2xl mx-auto text-lg text-slate-600">
//           Have questions? Fill out the form and our team will reach out.
//         </p>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 pb-24">
//         {/* Info Cards */}
//         <div className="grid md:grid-cols-3 gap-6 mb-20">
//           <InfoCard
//             icon={<MapPin className="w-6 h-6" />}
//             title="Visit our Office"
//             subtitle="Registered Office"
//             value="H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi 110025"
//             action="View on Map"
//             link="https://maps.google.com?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi"
//           />
//           <InfoCard
//             icon={<Mail className="w-6 h-6 cursor-pointer" />}
//             title="Email Us"
//             subtitle="Support Team"
//             value="info@moonlightoverseas.in"
//             action="Send Email"
//             link="mailto:info@moonlightoverseas.in"
//           />
//           <InfoCard
//             icon={<Phone className="w-6 h-6" />}
//             title="Call Us"
//             subtitle="Mon–Sat | 9am–7pm"
//             value="+91 8587860420"
//             action="Call Now"
//             link="tel:+918587860420"
//           />
//         </div>

//         {/* Form + Map */}
//         <div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border overflow-hidden">

//           {/* LEFT – FORM */}
//           <div className="lg:col-span-5 p-4">
//             <h3 className="text-2xl font-bold mb-4">Send us a message</h3>

//             {successMsg && (
//               <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 font-medium">
//                 {successMsg}
//               </div>
//             )}
//             {errorMsg && (
//               <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 font-medium">
//                 {errorMsg}
//               </div>
//             )}

//             <form onSubmit={handleSubmit} className="space-y-4">
//               <input className="w-full border rounded-md p-2" placeholder="Your Name" required />
//               <input className="w-full border rounded-md p-2" placeholder="Your Email" required />
//               <input className="w-full border rounded-md p-2" placeholder="Your Phone" />
//               {/* <input className="w-full border rounded-md p-2" placeholder="Subject" required /> */}

//               {/* SUBJECT DROPDOWN */}
//               <select
//                 value={subject}
//                 onChange={(e) => setSubject(e.target.value)}
//                 required
//                 className="w-full border rounded-md p-2 bg-white"
//               >
//                 <option value="" disabled>
//                   Select Subject
//                 </option>
//                 {subjectOption.map((item, index) => (
//                   <option key={index} value={item}>
//                     {item}
//                   </option>
//                 ))}
//               </select>
//               <textarea rows={5} className="w-full border rounded-md p-2" placeholder="Your Message" required />

//               <button
//                disabled={loading}
//               className="inline-flex items-center cursor-pointer gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
//                 {loading ? "Sending..." : "Send Message"}
//                 <Send className="w-4 h-4 " />
//               </button>
//             </form>
//           </div>

//           {/* RIGHT – INQUIRY + MAP */}
//           <div className="lg:col-span-7 relative">

//             {/* INQUIRY CONTENT */}
//             <div className="p-6  h-full bg-slate-50">
//               <h4 className="text-lg font-semibold text-slate-800">
//                 Have an inquiry?
//               </h4>
//               <p className="text-sm text-slate-600 mt-1">
//                 Fill out the inquiry form and our team will get back to you via email or phone as soon as possible.        Fill out the inquiry form and our team will contact you as soon as possible.
//               </p>

//               <div className="relative min-h-[350px] mt-12">
//                 <iframe
//                   title="map"
//                   src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
//                   className="absolute top-1/2 left-1/2 h-full w-1/2
//                -translate-x-1/2 -translate-y-1/2
//                grayscale hover:grayscale-0 transition"
//                   loading="lazy"
//                 />
//               </div>

//             </div>

//             {/* MAP */}
//             {/* <div className="relative min-h-[350px]">
//       <iframe
//         title="map"
//         src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
//         className="absolute inset-0  flex justify-center items-center w-1/2 h-full grayscale hover:grayscale-0 transition"
//         loading="lazy"
//       />
//     </div> */}

//           </div>

//         </div>

//       </div>
//     </div>
//   );
// };

// export default Contact;






import { useState } from "react";
import type { FC, FormEvent, ReactNode } from "react";
import { AlertCircle, CheckCircle2, MapPin, Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

/*
 * Palette taken from the Moonlight Overseas logo:
 *   Brand blue  #015399   (the "M", "N" and the compass lines)
 *   Logo grey   #6A6868   (the infinity "OO", "LIGHT", "OVERSEAS")
 *   Deep navy   #06294D   (darker shade of the brand blue)
 *   Page bg     #F5F7FA
 * Headings use `font-heading` — define it in tailwind.config.ts fontFamily.
 */

const inputClass =
  "w-full rounded-lg border border-[#6A6868]/30 bg-white px-3.5 py-2.5 text-[#172033] placeholder:text-[#6A6868]/70 " +
  "transition focus:border-[#015399] focus:outline-none focus:ring-2 focus:ring-[#015399]/25";

/* ---------------- INFO CARD ---------------- */
const InfoCard: FC<{
  icon: ReactNode;
  title: string;
  subtitle: string;
  value: string;
  action: string;
  link?: string;
}> = ({ icon, title, subtitle, value, action, link }) => {
  const isWeb = !!link && link.startsWith("http");

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white p-6
      shadow-[0_8px_24px_-14px_rgba(6,41,77,0.25)] transition-all duration-300
      hover:-translate-y-1 hover:border-[#015399] hover:shadow-[0_20px_40px_-18px_rgba(6,41,77,0.35)]"
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#015399] text-white">
        {icon}
      </div>
      <h4 className="mb-1 font-heading text-xl font-semibold text-[#06294D]">{title}</h4>
      <p className="mb-2 text-sm text-[#6A6868]">{subtitle}</p>
      <p className="mb-3 break-words text-[#172033]">{value}</p>
      {link && (
        <a
          href={link}
          {...(isWeb ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          className="inline-flex items-center gap-1.5 font-semibold text-[#015399] hover:underline
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2"
        >
          {action} <Send className="h-4 w-4" aria-hidden="true" />
        </a>
      )}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-1 w-0 bg-[#015399] transition-all duration-500 ease-out group-hover:w-full"
      />
    </div>
  );
};

/* ---------------- MAIN CONTACT COMPONENT ---------------- */
const Contact: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      from_name: name,
      email,
      phone,
      subject,
      message,
    };

    emailjs
      .send(
        "service_ydc3erg", // your service ID
        "template_wicg04p", // your template ID
        templateParams,
        "y5gunvblEinQd0bkV" // your public key
      )
      .then(
        () => {
          setSuccessMsg("Message sent successfully! We’ll contact you soon.");
          setErrorMsg("");
          setName("");
          setEmail("");
          setPhone("");
          setSubject("");
          setMessage("");
          setLoading(false);
          setTimeout(() => setSuccessMsg(""), 4000);
        },
        () => {
          setErrorMsg("Failed to send message. Please try again.");
          setSuccessMsg("");
          setLoading(false);
          setTimeout(() => setErrorMsg(""), 4000);
        }
      );
  };

  const subjectOption = [
    "Healthcare  Recruitment",
    "Visa Consultation",
    "Air Ticket Booking",
    "Travel Consultation",
    "Hajj & Umarah",
    "Holiday Tour Packages",
    "Document Legalisation/Attestation",
    "Other",
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F5F7FA] text-[#172033]">
      {/* Header */}
      <div className="relative px-4 pb-14 pt-8 text-center sm:pt-10">
        <h1 className="mb-5 font-heading text-4xl font-semibold tracking-tight text-[#06294D] sm:text-5xl md:text-6xl">
          We would love to hear from you
        </h1>
        <div className="mx-auto mb-5 h-[3px] w-16 rounded-full bg-[#015399]" aria-hidden="true" />
        <p className="mx-auto max-w-2xl text-lg text-[#6A6868]">
          Have questions? Fill out the form and our team will reach out.
        </p>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-20 sm:pb-24">
        {/* Info Cards */}
        <div className="mb-14 grid gap-6 sm:mb-20 md:grid-cols-3">
          <InfoCard
            icon={<MapPin className="h-6 w-6" aria-hidden="true" />}
            title="Visit our Office"
            subtitle="Registered Office"
            value="H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi 110025"
            action="View on Map"
            link="https://maps.google.com?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi"
          />
          <InfoCard
            icon={<Mail className="h-6 w-6" aria-hidden="true" />}
            title="Email Us"
            subtitle="Support Team"
            value="info@moonlightoverseas.in"
            action="Send Email"
            link="mailto:info@moonlightoverseas.in"
          />
          <InfoCard
            icon={<Phone className="h-6 w-6" aria-hidden="true" />}
            title="Call Us"
            subtitle="Mon–Sat | 9am–7pm"
            value="+91 8587860420"
            action="Call Now"
            link="tel:+918587860420"
          />
        </div>

        {/* Form + Map */}
        <div className="grid gap-0 overflow-hidden rounded-2xl border border-[#6A6868]/20 bg-white shadow-[0_24px_60px_-30px_rgba(6,41,77,0.4)] lg:grid-cols-12">
          {/* LEFT – FORM */}
          <div className="p-6 sm:p-8 lg:col-span-5">
            <h3 className="mb-5 font-heading text-3xl font-semibold text-[#06294D]">
              Send us a message
            </h3>

            <div aria-live="polite">
              {successMsg && (
                <div
                  role="status"
                  className="mb-4 flex items-start gap-2 rounded-lg border border-green-200 bg-green-50 p-3 font-medium text-green-800"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  {successMsg}
                </div>
              )}
              {errorMsg && (
                <div
                  role="alert"
                  className="mb-4 flex items-start gap-2 rounded-lg border border-red-200 bg-red-50 p-3 font-medium text-red-800"
                >
                  <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                  {errorMsg}
                </div>
              )}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-[#06294D]">
                  Your name
                </label>
                <input
                  id="c-name"
                  className={inputClass}
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="name"
                  required
                />
              </div>

              <div>
                <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-[#06294D]">
                  Your email
                </label>
                <input
                  id="c-email"
                  type="email"
                  className={inputClass}
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </div>

              <div>
                <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-[#06294D]">
                  Your phone <span className="font-normal text-[#6A6868]">(optional)</span>
                </label>
                <input
                  id="c-phone"
                  type="tel"
                  className={inputClass}
                  placeholder="Your Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  autoComplete="tel"
                />
              </div>

              {/* SUBJECT DROPDOWN */}
              <div>
                <label htmlFor="c-subject" className="mb-1.5 block text-sm font-medium text-[#06294D]">
                  Subject
                </label>
                <select
                  id="c-subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  required
                  className={inputClass}
                >
                  <option value="" disabled>
                    Select Subject
                  </option>
                  {subjectOption.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-[#06294D]">
                  Your message
                </label>
                <textarea
                  id="c-message"
                  rows={5}
                  className={inputClass}
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-[#015399] px-7 py-2.5 font-semibold text-white
                shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#06294D] hover:shadow-lg
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015399] focus-visible:ring-offset-2
                disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" aria-hidden="true" />
              </button>
            </form>
          </div>

          {/* RIGHT – INQUIRY + MAP */}
          <div className="flex flex-col bg-[#F5F7FA] p-6 sm:p-8 lg:col-span-7">
            <h4 className="font-heading text-2xl font-semibold text-[#06294D]">
              Have an inquiry?
            </h4>
            <p className="mt-2 text-sm text-[#6A6868] sm:text-base">
              Fill out the inquiry form and our team will get back to you via
              email or phone as soon as possible.
            </p>

            <div className="relative mt-6 min-h-[320px] flex-1 overflow-hidden rounded-xl border border-[#6A6868]/20 bg-white">
              <iframe
                title="Moonlight Overseas office location map"
                src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
                className="absolute inset-0 h-full w-full grayscale transition duration-500 hover:grayscale-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;