import React from 'react';
import { motion } from 'motion/react';
import { 
  User, 
  Users, 
  HeartHandshake, 
  ClipboardList, 
  Search, 
  Handshake, 
  PackageCheck, 
  Stethoscope, 
  Pill, 
  Activity, 
  ShieldCheck, 
  FileText, 
  Fingerprint, 
  HelpCircle, 
  ChevronDown,
  ArrowRight
} from 'lucide-react';

interface Props {
  onStart: () => void;
  onBack: () => void;
}

const ReceiverLandingPage: React.FC<Props> = ({ onStart, onBack }) => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(0);

  const faqs = [
    {
      q: "Is there any cost for requesting medicines?",
      a: "No, our service is completely free. Some medicines may have minimal processing or delivery charges, but we work to keep costs as low as possible for everyone."
    },
    {
      q: "How long does it take to receive medicines?",
      a: "Typically 2-5 days depending on availability and your location. Emergency requests are prioritized and can be fulfilled within 24-48 hours."
    },
    {
      q: "Are the medicines safe and verified?",
      a: "Yes, all donated medicines are verified by licensed pharmacists for expiry dates, packaging integrity, and authenticity before redistribution."
    },
    {
      q: "Can I request medicines for my family members?",
      a: "Yes, you can request on behalf of family members with their valid prescriptions and consent."
    }
  ];

  return (
    <div className="bg-[#030a1a] text-white min-h-screen selection:bg-emerald-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-500/10 rounded-full blur-[160px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-bold mb-8 uppercase tracking-widest"
          >
            For Citizens
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Access Life-Saving Medicines <br />
            When You Need Them Most
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 leading-relaxed"
          >
            Free or subsidized medicines for those who need them. No patient should go without essential medication.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button 
              onClick={onStart}
              className="px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl shadow-sky-900/40 mx-auto group"
            >
              <Pill className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Request Medicines
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who Can Request Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Who Can Request Medicines?</h2>
            <p className="text-slate-500 font-medium text-lg">MedRoute serves everyone in need</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Patients",
                icon: <User className="w-8 h-8 text-sky-400" />,
                desc: "Anyone facing financial constraints, lacking insurance, or needing emergency medication. We prioritize those with a valid Ayushman ID for last-mile access."
              },
              {
                title: "Families",
                icon: <Users className="w-8 h-8 text-emerald-400" />,
                desc: "Families struggling with chronic illness costs, multiple prescriptions, or unexpected medical emergencies."
              },
              {
                title: "Caregivers",
                icon: <HeartHandshake className="w-8 h-8 text-teal-400" />,
                desc: "Caregivers managing medication needs for elderly parents, disabled family members, or dependents."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-all text-center"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 mx-auto">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Request Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">How to Request Medicines</h2>
            <p className="text-slate-500 font-medium text-lg">Simple 4-step process to get the medicines you need</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Register", desc: "Create your profile with basic information and verification.", icon: <ClipboardList className="w-6 h-6" /> },
              { step: "2", title: "Submit Request", desc: "Upload prescription and specify medicines needed.", icon: <Search className="w-6 h-6" /> },
              { step: "3", title: "Get Matched", desc: "Our system finds available medicines from verified donors.", icon: <Handshake className="w-6 h-6" /> },
              { step: "4", title: "Receive", desc: "Pick up from nearest hub or get home delivery.", icon: <PackageCheck className="w-6 h-6" /> }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 rounded-3xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-emerald-600 text-white text-xs font-black flex items-center justify-center border-4 border-[#030a1a]">
                    {item.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium px-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commonly Available Medicines */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Commonly Available Medicines</h2>
            <p className="text-slate-500 font-medium text-lg">Wide range of medications available through our network</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "Chronic Care", desc: "Diabetes, Hypertension, Asthma", icon: <Activity className="text-sky-400" /> },
              { title: "Antibiotics", desc: "Common Infections, Respiratory", icon: <Pill className="text-emerald-400" /> },
              { title: "Pain Relief", desc: "Analgesics, Anti-inflammatory", icon: <Stethoscope className="text-teal-400" /> },
              { title: "General Health", desc: "Vitamins, Supplements, First Aid", icon: <ClipboardList className="text-indigo-400" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 text-center">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-slate-500 text-xs font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Requirements */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Request Requirements</h2>
          </div>

          <div className="space-y-4">
            {[
              { title: "Valid Prescription", desc: "For prescription medicines, a valid doctor's prescription is required (can be uploaded as photo or PDF)", icon: <FileText className="text-emerald-400" /> },
              { title: "Identity Verification", desc: "Basic identity verification to ensure medicines reach genuine beneficiaries (Aadhaar, PAN, or other ID)", icon: <Fingerprint className="text-sky-400" /> },
              { title: "Medical Need Documentation", desc: "Brief explanation of medical condition and financial need (optional but helps prioritize urgent cases)", icon: <ShieldCheck className="text-teal-400" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 rounded-3xl border border-white/5 flex items-start gap-6">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-2xl border border-white/5 overflow-hidden">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <span className="font-bold text-white">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="p-6 pt-0 text-slate-400 text-sm font-medium leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-sky-600 to-emerald-600 p-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">Need Medicines? We're Here to Help</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 relative z-10">
              No one should go without essential medication. Request what you need today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button 
                onClick={onStart}
                className="px-12 py-5 bg-white text-sky-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-2xl flex items-center gap-3"
              >
                Submit Medicine Request
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={onBack}
                className="px-12 py-5 bg-black/20 hover:bg-black/30 border border-white/20 text-white rounded-2xl font-bold text-lg transition"
              >
                Back to Home
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReceiverLandingPage;
