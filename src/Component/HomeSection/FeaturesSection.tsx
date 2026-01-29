import { motion } from "framer-motion";
import { Shield, Medal, Users, Headphones } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure",
    desc: "Industry-leading security for your data & payments",
  },
  {
    icon: Medal,
    title: "Best Price",
    desc: "Guaranteed lowest prices with no hidden cost",
  },
  {
    icon: Users,
    title: "Expert Team",
    desc: "Experienced consultants at every step",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Round-the-clock assistance worldwide",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative py-24 pt-8 bg-gradient-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition">
                <f.icon className="w-9 h-9 text-white" />
              </div>

              <h3 className="text-xl font-bold mb-3">{f.title}</h3>
              <p className="text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
