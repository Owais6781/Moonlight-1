


import { useState } from "react";
import { MapPin, Mail, Phone, Send } from "lucide-react";
import emailjs from "@emailjs/browser";


const InfoCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  value: string;
  action: string;
  link?: string;
}> = ({ icon, title, subtitle, value, action, link }) => (
  <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition ">
    <div className="flex items-center mb-4 text-blue-600">{icon}</div>
    <h4 className="font-bold text-lg mb-1">{title}</h4>
    <p className="text-sm text-gray-500 mb-2">{subtitle}</p>
    <p className="text-gray-700 mb-2">{value}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 font-medium flex items-center gap-1 hover:underline"
      >
        {action} <Send className="w-4 h-4" />
      </a>
    )}
  </div>
);

/* ---------------- MAIN CONTACT COMPONENT ---------------- */
const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
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
        "service_ydc3erg", // ✅ your service ID
        "template_wicg04p", // ✅ your template ID
        templateParams,
        "y5gunvblEinQd0bkV" // ✅ your public key
      )
      .then(
        () => {
          setSuccessMsg("✅ Message sent successfully! We’ll contact you soon.");
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
          setErrorMsg("❌ Failed to send message. Please try again.");
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
  ]
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 overflow-x-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-50/50 to-transparent" />
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[10%] left-[-5%] w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      {/* Header */}
      <div className="relative pt-4 pb-16 px-4 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          We’d love to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
            hear from you
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-slate-600">
          Have questions? Fill out the form and our team will reach out.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-24">
        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <InfoCard
            icon={<MapPin className="w-6 h-6" />}
            title="Visit our Office"
            subtitle="Registered Office"
            value="H-45/B, Abul Fazal Enclave-1, Jamia Nagar, New Delhi 110025"
            action="View on Map"
            link="https://maps.google.com?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi"
          />
          <InfoCard
            icon={<Mail className="w-6 h-6 cursor-pointer" />}
            title="Email Us"
            subtitle="Support Team"
            value="info@moonlightoverseas.in"
            action="Send Email"
            link="mailto:info@moonlightoverseas.in"
          />
          <InfoCard
            icon={<Phone className="w-6 h-6" />}
            title="Call Us"
            subtitle="Mon–Sat | 9am–7pm"
            value="+91 8587860420"
            action="Call Now"
            link="tel:+918587860420"
          />
        </div>

        {/* Form + Map */}
        <div className="grid lg:grid-cols-12 gap-8 bg-white rounded-3xl shadow-xl border overflow-hidden">

          {/* LEFT – FORM */}
          <div className="lg:col-span-5 p-4">
            <h3 className="text-2xl font-bold mb-4">Send us a message</h3>

            {successMsg && (
              <div className="mb-4 rounded-lg bg-green-50 border border-green-200 p-3 text-green-700 font-medium">
                {successMsg}
              </div>
            )}
            {errorMsg && (
              <div className="mb-4 rounded-lg bg-red-50 border border-red-200 p-3 text-red-700 font-medium">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <input className="w-full border rounded-md p-2" placeholder="Your Name" required />
              <input className="w-full border rounded-md p-2" placeholder="Your Email" required />
              <input className="w-full border rounded-md p-2" placeholder="Your Phone" />
              {/* <input className="w-full border rounded-md p-2" placeholder="Subject" required /> */}

              {/* SUBJECT DROPDOWN */}
              <select
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                className="w-full border rounded-md p-2 bg-white"
              >
                <option value="" disabled>
                  Select Subject
                </option>
                {subjectOption.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </select>
              <textarea rows={5} className="w-full border rounded-md p-2" placeholder="Your Message" required />

              <button
               disabled={loading}
              className="inline-flex items-center  gap-2 px-5 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
                {loading ? "Sending..." : "Send Message"}
                <Send className="w-4 h-4 " />
              </button>
            </form>
          </div>

          {/* RIGHT – INQUIRY + MAP */}
          <div className="lg:col-span-7 relative">

            {/* INQUIRY CONTENT */}
            <div className="p-6  h-full bg-slate-50">
              <h4 className="text-lg font-semibold text-slate-800">
                Have an inquiry?
              </h4>
              <p className="text-sm text-slate-600 mt-1">
                Fill out the inquiry form and our team will get back to you via email or phone as soon as possible.        Fill out the inquiry form and our team will contact you as soon as possible.
              </p>

              <div className="relative min-h-[350px] mt-12">
                <iframe
                  title="map"
                  src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
                  className="absolute top-1/2 left-1/2 h-full w-1/2
               -translate-x-1/2 -translate-y-1/2
               grayscale hover:grayscale-0 transition"
                  loading="lazy"
                />
              </div>

            </div>

            {/* MAP */}
            {/* <div className="relative min-h-[350px]">
      <iframe
        title="map"
        src="https://www.google.com/maps?q=Abul+Fazal+Enclave-1,+Jamia+Nagar,+New+Delhi&output=embed"
        className="absolute inset-0  flex justify-center items-center w-1/2 h-full grayscale hover:grayscale-0 transition"
        loading="lazy"
      />
    </div> */}

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
