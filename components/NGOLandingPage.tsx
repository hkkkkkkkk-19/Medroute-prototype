import React from 'react';
import { motion } from 'motion/react';
import { 
  Building2, 
  Home, 
  UserPlus, 
  ShieldCheck, 
  Truck, 
  LineChart, 
  FileText, 
  Lock, 
  Network, 
  ClipboardCheck, 
  Search, 
  ShoppingCart, 
  Share2, 
  Award, 
  Users, 
  BarChart3,
  ArrowRight,
  Handshake
} from 'lucide-react';

interface Props {
  onStart: () => void;
  onBack: () => void;
}

const NGOLandingPage: React.FC<Props> = ({ onStart, onBack }) => {
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
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-bold mb-8 uppercase tracking-widest"
          >
            For NGOs & Healthcare Providers
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Partner With Us to Scale <br />
            Your Impact
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 leading-relaxed"
          >
            Access verified medicines, streamline distribution, and serve more communities through our transparent network.
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
              <Handshake className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Become a Partner
            </button>
          </motion.div>
        </div>
      </section>

      {/* Who Can Partner Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Who Can Partner With MedRoute?</h2>
            <p className="text-slate-500 font-medium text-lg">Organizations committed to healthcare access</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "NGOs & Charities",
                icon: <Building2 className="w-8 h-8 text-sky-400" />,
                desc: "Non-profit organizations working in healthcare, poverty alleviation, or community welfare programs."
              },
              {
                title: "Community Clinics",
                icon: <Home className="w-8 h-8 text-emerald-400" />,
                desc: "Rural health centers, free clinics, and community health programs serving underserved populations."
              },
              {
                title: "Healthcare Workers",
                icon: <UserPlus className="w-8 h-8 text-teal-400" />,
                desc: "Medical camps, mobile health units, and frontline healthcare workers in remote areas."
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

      {/* Partnership Benefits Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Partnership Benefits</h2>
            <p className="text-slate-500 font-medium text-lg">Why organizations choose MedRoute</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Verified Medicines", desc: "All medicines verified by licensed pharmacists for safety and quality", icon: <ShieldCheck className="w-6 h-6 text-sky-400" /> },
              { title: "Free Logistics", desc: "No-cost delivery to your distribution centers across the country", icon: <Truck className="w-6 h-6 text-emerald-400" /> },
              { title: "Real-Time Tracking", desc: "Monitor inventory, deliveries, and impact metrics on your dashboard", icon: <LineChart className="w-6 h-6 text-teal-400" /> },
              { title: "Documentation", desc: "Automated invoices, receipts, and impact reports for donors", icon: <FileText className="w-6 h-6 text-indigo-400" /> },
              { title: "Compliance", desc: "Full regulatory compliance and transparent audit trails", icon: <Lock className="w-6 h-6 text-rose-400" /> },
              { title: "Network Access", desc: "Connect with 1000+ donors, hospitals, and pharma partners", icon: <Network className="w-6 h-6 text-amber-400" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-all">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-white">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">How It Works for Partners</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Register & Verify", desc: "Submit NGO registration, certifications, and program details.", icon: <ClipboardCheck className="w-6 h-6" /> },
              { step: "2", title: "Browse Inventory", desc: "Access real-time database of available verified medicines.", icon: <Search className="w-6 h-6" /> },
              { step: "3", title: "Place Orders", desc: "Request medicines based on your community needs.", icon: <ShoppingCart className="w-6 h-6" /> },
              { step: "4", title: "Track & Distribute", desc: "Monitor delivery and distribute to beneficiaries.", icon: <Share2 className="w-6 h-6" /> }
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

      {/* Partnership Requirements */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Partnership Requirements</h2>
          </div>

          <div className="space-y-4">
            {[
              { title: "Valid Registration", desc: "NGO registration (12A/80G), FCRA (if applicable), or healthcare facility license", icon: <Award className="text-sky-400" /> },
              { title: "Program Documentation", desc: "Details of healthcare programs, beneficiary demographics, and distribution plans", icon: <FileText className="text-emerald-400" /> },
              { title: "Qualified Personnel", desc: "Licensed pharmacist or healthcare professional on staff for medicine management", icon: <Users className="text-teal-400" /> },
              { title: "Impact Reporting", desc: "Agreement to provide quarterly reports on medicine distribution and beneficiary impact", icon: <BarChart3 className="text-indigo-400" /> }
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

      {/* Success Stories Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Partner Success Stories</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                org: "Healthbridge Foundation", 
                stat: "₹2.3L", 
                label: "medicines redistributed", 
                desc: "Serving 15 rural clinics across Rajasthan" 
              },
              { 
                org: "Hope Medical Services", 
                stat: "5,000+", 
                label: "patients treated", 
                desc: "Mobile health camps in tribal areas" 
              },
              { 
                org: "Community Care NGO", 
                stat: "12 Districts", 
                label: "coverage expanded", 
                desc: "Chronic disease management programs" 
              }
            ].map((item, i) => (
              <div key={i} className="glass-card p-12 rounded-[2.5rem] text-center border border-white/5">
                <h4 className="text-lg font-bold mb-6 text-slate-300">{item.org}</h4>
                <div className="text-4xl font-black text-sky-400 mb-2">{item.stat}</div>
                <div className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-6">{item.label}</div>
                <p className="text-slate-400 text-xs italic font-medium">
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
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">Ready to Join Our Network?</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 relative z-10">
              Partner with MedRoute and amplify your healthcare impact across communities
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button 
                onClick={onStart}
                className="px-12 py-5 bg-white text-emerald-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-2xl flex items-center gap-3"
              >
                Apply for Partnership
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

export default NGOLandingPage;
