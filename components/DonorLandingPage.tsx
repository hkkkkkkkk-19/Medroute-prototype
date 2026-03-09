import React from 'react';
import { motion } from 'motion/react';
import { User, Heart, ShieldCheck, Recycle, ReceiptText, UserRound, Store, Hospital, ClipboardCheck, PackageSearch, Truck, BarChart3, CheckCircle2, XCircle } from 'lucide-react';

interface Props {
  onStart: () => void;
  onBack: () => void;
}

const DonorLandingPage: React.FC<Props> = ({ onStart, onBack }) => {
  return (
    <div className="bg-[#030a1a] text-white min-h-screen selection:bg-sky-500/30">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/10 rounded-full blur-[160px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-8 tracking-widest"
          >
            For Donors
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Turn Your Unused Medicines <br />
            Into Life-Saving Resources
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 leading-relaxed"
          >
            Every medicine you donate can save a life. Join thousands of individuals, pharmacies, and hospitals making a difference.
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
              <Heart className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Start Donating Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who Can Donate Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Who Can Donate?</h2>
            <p className="text-slate-500 font-medium text-lg">Everyone can make a difference</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individuals",
                icon: <UserRound className="w-8 h-8 text-sky-400" />,
                items: ["Leftover prescription medicines", "Over-the-counter medications", "Vitamins & supplements", "First aid supplies"]
              },
              {
                title: "Pharmacies",
                icon: <Store className="w-8 h-8 text-emerald-400" />,
                items: ["Near-expiry inventory", "Overstocked items", "Discontinued products", "Sample medications"]
              },
              {
                title: "Hospitals",
                icon: <Hospital className="w-8 h-8 text-teal-400" />,
                items: ["Surplus inventory", "Patient leftover medicines", "Unopened supplies", "Bulk donations"]
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-all"
              >
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold mb-6 text-white">{card.title}</h3>
                <ul className="space-y-4">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-3 text-slate-400 text-sm font-medium">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-500/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Donate Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">How to Donate</h2>
            <p className="text-slate-500 font-medium text-lg">Simple, safe, and convenient donation process</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Register", desc: "Create your free account and complete your donor profile.", icon: <ClipboardCheck className="w-6 h-6" /> },
              { step: "2", title: "List Medicines", desc: "Upload details, scan barcodes, check expiry dates.", icon: <PackageSearch className="w-6 h-6" /> },
              { step: "3", title: "Choose Method", desc: "Drop at nearest location or schedule free pickup.", icon: <Truck className="w-6 h-6" /> },
              { step: "4", title: "Track Impact", desc: "Monitor your donation journey and impact in real-time.", icon: <BarChart3 className="w-6 h-6" /> }
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-8 inline-block">
                  <div className="w-20 h-20 rounded-3xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-sky-600 text-white text-xs font-black flex items-center justify-center border-4 border-[#030a1a]">
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

      {/* Donation Guidelines Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Donation Guidelines</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 rounded-[2.5rem] bg-emerald-500/5 border border-emerald-500/20">
              <div className="flex items-center gap-3 mb-8 text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
                <h3 className="text-xl font-bold tracking-widest text-sm">What We Accept</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Medicines with 3+ months until expiry",
                  "Unopened and sealed packaging",
                  "Prescription and OTC medications",
                  "Vitamins, supplements, and first aid",
                  "Medical supplies and equipment"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500/50 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-10 rounded-[2.5rem] bg-rose-500/5 border border-rose-500/20">
              <div className="flex items-center gap-3 mb-8 text-rose-400">
                <XCircle className="w-6 h-6" />
                <h3 className="text-xl font-bold tracking-widest text-sm">What We Don't Accept</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Expired medications (past expiry date)",
                  "Opened or damaged packaging",
                  "Controlled substances (narcotics)",
                  "Compounded medications",
                  "Injectable or temperature-sensitive drugs"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-300 font-medium">
                    <XCircle className="w-5 h-5 text-rose-500/50 mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Benefits of Donating</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Save Lives", desc: "Your donations directly help patients who can't afford medicines.", icon: <Heart className="w-8 h-8 text-sky-400" /> },
              { title: "Protect Environment", desc: "Reduce pharmaceutical waste and prevent environmental pollution.", icon: <Recycle className="w-8 h-8 text-emerald-400" /> },
              { title: "Get Tax Benefits", desc: "Receive donation receipts for tax deduction purposes.", icon: <ReceiptText className="w-8 h-8 text-teal-400" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-12 rounded-[2.5rem] text-center border border-white/5 hover:bg-white/5 transition-all">
                <div className="w-20 h-20 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-8 shadow-2xl">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-600 p-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">Ready to Make a Difference?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 relative z-10">
              Join our community of donors and start saving lives today
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button 
                onClick={onStart}
                className="px-12 py-5 bg-white text-emerald-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-2xl"
              >
                Create Donor Account
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

export default DonorLandingPage;
