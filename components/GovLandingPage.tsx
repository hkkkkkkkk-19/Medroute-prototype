import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Map, 
  Search, 
  BarChart3, 
  AlertTriangle, 
  Users, 
  Database, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  History,
  Scale,
  Globe,
  Award,
  Lock,
  Leaf,
  Package,
  Home,
  LineChart,
  ArrowRight,
  LogIn,
  Zap,
  ShieldAlert,
  X,
  Clock,
  AlertCircle,
  Lightbulb,
  UserPlus,
  Phone,
  Handshake
} from 'lucide-react';
import LiveMap from './LiveMap.tsx';

interface Props {
  onStart: () => void;
  onBack: () => void;
}

const GovLandingPage: React.FC<Props> = ({ onStart, onBack }) => {
  const [isEmergencyMode, setIsEmergencyMode] = useState(false);
  const [showPinPopup, setShowPinPopup] = useState(false);
  const [pin, setPin] = useState('');
  const [pinError, setPinError] = useState(false);

  const handleEmergencyClick = () => {
    if (isEmergencyMode) {
      setIsEmergencyMode(false);
    } else {
      setShowPinPopup(true);
    }
  };

  const handlePinSubmit = () => {
    if (pin === '1905') {
      setIsEmergencyMode(true);
      setShowPinPopup(false);
      setPin('');
      setPinError(false);
    } else {
      setPinError(true);
      setPin('');
    }
  };

  return (
    <div className={`bg-[#030a1a] text-white min-h-screen selection:bg-sky-500/30 ${isEmergencyMode ? 'border-t-4 border-rose-600' : ''}`}>
      {/* PIN Popup */}
      <AnimatePresence>
        {showPinPopup && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowPinPopup(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0f172a] border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-rose-500/10 flex items-center justify-center text-rose-500">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-black text-rose-500 tracking-tight">Emergency Access Required</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-slate-300 mb-3">Enter Emergency PIN</label>
                  <input 
                    type="password" 
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className={`w-full bg-white/5 border ${pinError ? 'border-rose-500' : 'border-white/10'} rounded-2xl px-6 py-4 text-xl font-black tracking-[1em] outline-none focus:ring-2 focus:ring-rose-500 transition-all`}
                    onKeyDown={(e) => e.key === 'Enter' && handlePinSubmit()}
                    autoFocus
                  />
                  {pinError && (
                    <p className="text-rose-500 text-xs font-bold mt-3">Invalid PIN. Please try again.</p>
                  )}
                  <p className="text-slate-500 text-xs font-medium mt-4">
                    Restricted access. PIN required for emergency activation.
                  </p>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => setShowPinPopup(false)}
                    className="flex-1 px-6 py-4 bg-white/5 hover:bg-white/10 text-white rounded-2xl font-bold transition"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={handlePinSubmit}
                    className="flex-1 px-6 py-4 bg-rose-600 hover:bg-rose-500 text-white rounded-2xl font-bold transition shadow-lg shadow-rose-900/40"
                  >
                    Activate
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0">
          <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] ${isEmergencyMode ? 'bg-rose-500/10' : 'bg-sky-500/10'} rounded-full blur-[160px]`}></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`inline-flex items-center px-4 py-1.5 rounded-full ${isEmergencyMode ? 'bg-rose-500/10 border-rose-500/20 text-rose-400' : 'bg-sky-500/10 border-sky-500/20 text-sky-400'} text-sm font-bold mb-8 uppercase tracking-widest`}
          >
            For Government & Policy Makers
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent"
          >
            Data-Driven Transparency for <br />
            Healthcare Policy
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 leading-relaxed"
          >
            Real-time insights, complete traceability, and evidence-based policy making for pharmaceutical redistribution.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button 
              onClick={onStart}
              className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl shadow-sky-900/40 group"
            >
              <LogIn className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              Government Sign In
            </button>
            <button 
              onClick={handleEmergencyClick}
              className={`px-8 py-4 ${isEmergencyMode ? 'bg-rose-600 hover:bg-rose-500' : 'bg-emerald-600 hover:bg-emerald-500'} text-white rounded-2xl font-bold text-lg transition-all flex items-center gap-3 shadow-xl ${isEmergencyMode ? 'shadow-rose-900/40' : 'shadow-emerald-900/40'} group`}
            >
              {isEmergencyMode ? (
                <>
                  <X className="w-5 h-5 group-hover:rotate-90 transition-transform" />
                  Exit Emergency Mode
                </>
              ) : (
                <>
                  <Zap className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Activate Emergency Mode
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Emergency Mode View */}
      {isEmergencyMode && (
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto px-6 space-y-12 mb-32"
        >
          {/* Emergency Alert Banner */}
          <div className="bg-rose-500/10 border border-rose-500/30 rounded-[2rem] p-8 flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-rose-500 flex items-center justify-center text-white shrink-0 animate-pulse">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-rose-500 uppercase tracking-tighter">EMERGENCY MODE ACTIVE</h3>
              <p className="text-rose-400/80 font-medium">3 active disaster zones requiring immediate medical supply. Priority routing enabled for critical deliveries.</p>
            </div>
          </div>

          {/* Emergency Map */}
          <div className="glass-card rounded-[3rem] border border-rose-500/20 overflow-hidden p-8">
            <div className="flex items-center gap-3 mb-6">
              <Map className="w-6 h-6 text-rose-500" />
              <h3 className="text-xl font-bold text-white">Live Emergency Response Map</h3>
            </div>
            <div className="h-[500px] rounded-3xl overflow-hidden relative border border-white/5">
              <LiveMap height="h-full" mapType={isEmergencyMode ? 'emergency' : 'default'} />
            </div>
          </div>

          {/* Disaster Zones */}
          <div>
            <h3 className="text-2xl font-black mb-8 tracking-tight">Active Disaster Zones</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  zone: "Kerala Flood Zone - Pathanamthitta", 
                  type: "Flood", 
                  pop: "45,000", 
                  supply: 30, 
                  urgent: ["Antibiotics", "Water Purification Tablets", "Anti-diarrheal", "First Aid"],
                  priority: "CRITICAL",
                  time: "2 hours ago"
                },
                { 
                  zone: "Gujarat Earthquake Zone - Bhuj", 
                  type: "Earthquake", 
                  pop: "62,000", 
                  supply: 45, 
                  urgent: ["Pain Relief", "Antibiotics", "Bandages", "Antiseptics"],
                  priority: "HIGH",
                  time: "4 hours ago"
                },
                { 
                  zone: "Odisha Cyclone Zone - Puri", 
                  type: "Cyclone", 
                  pop: "78,000", 
                  supply: 25, 
                  urgent: ["Cold & Flu", "Antibiotics", "Vitamins", "Oral Rehydration"],
                  priority: "CRITICAL",
                  time: "1 hour ago"
                }
              ].map((zone, i) => (
                <div key={i} className="glass-card p-8 rounded-[2.5rem] border border-white/5 relative overflow-hidden group">
                  <div className={`absolute top-0 right-0 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest ${zone.priority === 'CRITICAL' ? 'bg-rose-600' : 'bg-amber-600'} text-white rounded-bl-xl`}>
                    {zone.priority}
                  </div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-4">{zone.time}</div>
                  <h4 className="text-lg font-bold mb-4 text-white">{zone.zone}</h4>
                  <div className="flex items-center gap-2 text-slate-400 text-xs mb-6">
                    <Home className="w-4 h-4" />
                    <span>{zone.type}</span>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-500">Affected Population</span>
                      <span className="text-white">{zone.pop}</span>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs font-bold mb-2">
                        <span className="text-slate-500">Supply Status</span>
                        <span className={zone.priority === 'CRITICAL' ? 'text-rose-400' : 'text-amber-400'}>{zone.supply}% of required supply available</span>
                      </div>
                      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${zone.supply}%` }}
                          className={`h-full ${zone.priority === 'CRITICAL' ? 'bg-rose-500' : 'bg-amber-500'}`}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-2">Urgent Medicines</div>
                    <div className="flex flex-wrap gap-2">
                      {zone.urgent.map((med, j) => (
                        <span key={j} className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-[10px] font-bold text-slate-300">
                          {med}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency Deliveries */}
          <div>
            <h3 className="text-2xl font-black mb-8 tracking-tight">Active Emergency Deliveries</h3>
            <div className="space-y-4">
              {[
                { 
                  id: "1", 
                  type: "Antibiotics & Water Purification", 
                  from: "Bangalore Medical Hub", 
                  to: "Kerala Flood Zone", 
                  qty: "5,000 units", 
                  eta: "6 hours", 
                  priority: "CRITICAL" 
                },
                { 
                  id: "2", 
                  type: "Pain Relief & First Aid", 
                  from: "Ahmedabad Supply Center", 
                  to: "Bhuj Earthquake Zone", 
                  qty: "3,500 units", 
                  eta: "4 hours", 
                  priority: "HIGH" 
                },
                { 
                  id: "3", 
                  type: "Cold & Flu + ORS", 
                  from: "Kolkata Distribution Hub", 
                  to: "Puri Cyclone Zone", 
                  qty: "4,200 units", 
                  eta: "8 hours", 
                  priority: "CRITICAL" 
                },
                { 
                  id: "4", 
                  type: "Anti-diarrheal & Vitamins", 
                  from: "Mumbai Emergency Stock", 
                  to: "Kerala Flood Zone", 
                  qty: "2,800 units", 
                  eta: "12 hours", 
                  priority: "HIGH" 
                }
              ].map((delivery, i) => (
                <div key={i} className="glass-card p-6 rounded-3xl border border-white/5 flex items-center justify-between group hover:bg-white/5 transition-all">
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-2xl ${delivery.priority === 'CRITICAL' ? 'bg-rose-500/10 text-rose-500' : 'bg-amber-500/10 text-amber-500'} flex items-center justify-center`}>
                      <Truck className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] font-black uppercase tracking-widest ${delivery.priority === 'CRITICAL' ? 'text-rose-500' : 'text-amber-500'}`}>{delivery.priority} PRIORITY</span>
                        <span className="text-slate-500 text-[10px] font-bold flex items-center gap-1">
                          <Clock className="w-3 h-3" /> ETA: {delivery.eta}
                        </span>
                      </div>
                      <h4 className="font-bold text-white">{delivery.type}</h4>
                      <div className="flex items-center gap-2 text-slate-500 text-xs mt-1 font-medium">
                        <span>{delivery.from}</span>
                        <ArrowRight className="w-3 h-3" />
                        <span className="text-slate-300">{delivery.to}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-1">Quantity</div>
                    <div className="text-lg font-black text-white">{delivery.qty}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Recommendations */}
          <div>
            <h3 className="text-2xl font-black mb-8 tracking-tight">AI-Generated Policy Recommendations</h3>
            <div className="space-y-4">
              {[
                { 
                  title: "Increase Pre-positioned Stock", 
                  desc: "Establish 3 additional emergency medicine stockpiles in disaster-prone coastal areas.", 
                  impact: "Reduce emergency response time by 40%", 
                  priority: "High",
                  color: "emerald"
                },
                { 
                  title: "Strengthen Last-Mile Logistics", 
                  desc: "Partner with local NGOs and community health workers for rapid distribution in affected areas.", 
                  impact: "Reach 25% more beneficiaries in first 48 hours", 
                  priority: "Critical",
                  color: "rose"
                },
                { 
                  title: "Mobile Health Units Deployment", 
                  desc: "Deploy 5 additional mobile medical units to disaster zones for on-site treatment and medicine distribution.", 
                  impact: "Provide immediate care to 10,000+ affected citizens", 
                  priority: "High",
                  color: "sky"
                }
              ].map((rec, i) => (
                <div key={i} className={`glass-card p-8 rounded-[2.5rem] border border-${rec.color}-500/20 flex items-start gap-6 group hover:bg-white/5 transition-all`}>
                  <div className={`w-12 h-12 rounded-2xl bg-${rec.color}-500/10 flex items-center justify-center text-${rec.color}-500 shrink-0`}>
                    <Lightbulb className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-bold text-white">{rec.title}</h4>
                      <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-widest ${rec.priority === 'Critical' ? 'bg-rose-500/10 text-rose-500' : 'bg-emerald-500/10 text-emerald-500'}`}>
                        {rec.priority}
                      </span>
                    </div>
                    <p className="text-slate-400 text-sm font-medium leading-relaxed mb-4">{rec.desc}</p>
                    <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                      <LineChart className="w-4 h-4" />
                      <span>{rec.impact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Help Section */}
          <div className="glass-card p-10 rounded-[3rem] border border-sky-500/20 bg-sky-500/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-sky-500/10 flex items-center justify-center text-sky-400 shrink-0">
                  <Handshake className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-white mb-2">Can You Help in Emergency Response?</h3>
                  <p className="text-slate-400 font-medium">We need volunteers with medical training, logistics support, or local area knowledge to help coordinate emergency medicine distribution in disaster zones.</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <button className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-bold transition flex items-center gap-3">
                  <UserPlus className="w-5 h-5" />
                  Register as Volunteer
                </button>
                <button className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-bold transition flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Emergency Helpline: 1800-XXX-XXXX
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Dashboard Features Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Government Dashboard Features</h2>
            <p className="text-slate-500 font-medium text-lg">Comprehensive oversight and monitoring tools</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Geographic Mapping",
                icon: <Map className="w-6 h-6 text-sky-400" />,
                desc: "Real-time district-wise donation and distribution heatmaps with demographic overlays."
              },
              {
                title: "Transaction Audit",
                icon: <Search className="w-6 h-6 text-emerald-400" />,
                desc: "Complete traceability with batch IDs, timestamps, and verification logs."
              },
              {
                title: "Analytics & Reports",
                icon: <BarChart3 className="w-6 h-6 text-teal-400" />,
                desc: "Monthly trends, waste reduction metrics, and carbon footprint analysis."
              },
              {
                title: "Emergency Mode",
                icon: <AlertTriangle className="w-6 h-6 text-rose-400" />,
                desc: "Disaster response coordination with priority routing and urgent supply tracking."
              },
              {
                title: "Stakeholder Network",
                icon: <Users className="w-6 h-6 text-indigo-400" />,
                desc: "Directory of verified donors, NGOs, and healthcare providers."
              },
              {
                title: "Open Data API",
                icon: <Database className="w-6 h-6 text-amber-400" />,
                desc: "Developer access to anonymized data for research and policy analysis."
              }
            ].map((card, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:bg-white/5 transition-all"
              >
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-8">
                  {card.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{card.title}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Complete Transparency Section */}
      <section className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Complete Transparency</h2>
            <p className="text-slate-500 font-medium text-lg">Every transaction tracked from source to destination</p>
          </div>

          <div className="glass-card p-12 rounded-[3rem] border border-white/5 space-y-10">
            {[
              { title: "Batch-Level Tracking", desc: "Each medicine batch has unique ID, expiry date, verification status, donor details, and final beneficiary information.", icon: <Database className="text-sky-400" /> },
              { title: "Route Optimization", desc: "AI-powered logistics to minimize delivery time and carbon footprint with real-time tracking.", icon: <Truck className="text-emerald-400" /> },
              { title: "Multi-Point Verification", desc: "Licensed pharmacist verification at collection, storage, and distribution points with digital signatures.", icon: <CheckCircle2 className="text-teal-400" /> },
              { title: "Immutable Records", desc: "Blockchain-backed audit trails ensuring data integrity and preventing tampering.", icon: <History className="text-indigo-400" /> }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-8 group">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Policy Impact Metrics Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Policy Impact Metrics</h2>
            <p className="text-slate-500 font-medium text-lg">Evidence-based insights for healthcare policy</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { stat: "₹34.2 Cr", label: "Pharmaceutical Waste Prevented (Annual)", icon: <span className="text-sky-400 font-black">Rs</span> },
              { stat: "142 tons", label: "CO₂ Emissions Reduced (Annual)", icon: <Leaf className="text-emerald-400" /> },
              { stat: "2.8 Lakh", label: "Citizens Served (Annual)", icon: <Users className="text-teal-400" /> },
              { stat: "850+", label: "Healthcare Facilities Participating", icon: <Globe className="text-indigo-400" /> }
            ].map((item, i) => (
              <div key={i} className="glass-card p-10 rounded-[2.5rem] text-center border border-white/5">
                <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  {item.icon}
                </div>
                <div className="text-3xl font-black text-white mb-2">{item.stat}</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory Compliance Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Regulatory Compliance</h2>
            <p className="text-slate-500 font-medium text-lg">Fully compliant with national and international standards</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Drugs and Cosmetics Act, 1940", desc: "Full compliance with pharmaceutical regulations.", icon: <Scale className="text-sky-400" /> },
              { title: "Central Drugs Standard Control Organization", desc: "CDSCO approved processes and protocols.", icon: <Award className="text-emerald-400" /> },
              { title: "ISO 9001:2015 Quality Management", desc: "International quality standards certified.", icon: <ShieldCheck className="text-teal-400" /> },
              { title: "IT Act 2000 & Data Protection", desc: "Secure data handling and privacy protection.", icon: <Lock className="text-indigo-400" /> },
              { title: "Environmental Protection Act", desc: "Eco-friendly waste reduction initiatives.", icon: <Leaf className="text-rose-400" /> },
              { title: "Good Distribution Practices (GDP)", desc: "WHO-recommended distribution standards.", icon: <Package className="text-amber-400" /> }
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

      {/* Government Use Cases Section */}
      <section className="py-32 px-6 bg-[#050c1d]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">Government Use Cases</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="glass-card p-12 rounded-[3rem] border border-white/5">
              <div className="w-14 h-14 bg-rose-500/10 rounded-2xl flex items-center justify-center mb-8 text-rose-400">
                <Home className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Disaster Response Coordination</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                During floods, earthquakes, or pandemics, activate emergency mode to:
              </p>
              <ul className="space-y-4">
                {[
                  "Identify disaster-affected zones requiring urgent medicine supply",
                  "Prioritize critical medications (antibiotics, pain relief, chronic care)",
                  "Coordinate with NGOs and mobile health units for rapid deployment",
                  "Track real-time fulfillment rates and identify supply gaps"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card p-12 rounded-[3rem] border border-white/5">
              <div className="w-14 h-14 bg-sky-500/10 rounded-2xl flex items-center justify-center mb-8 text-sky-400">
                <LineChart className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-white">Public Health Planning</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">
                Use aggregated data for evidence-based policy making:
              </p>
              <ul className="space-y-4">
                {[
                  "Identify districts with medicine shortage patterns",
                  "Optimize public health program budgets and resource allocation",
                  "Monitor chronic disease prevalence through medicine request data",
                  "Evaluate impact of healthcare initiatives on underserved communities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-600 p-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">Partner for Data-Driven Healthcare</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 relative z-10">
              Access comprehensive analytics and transparency tools for better policy decisions
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button 
                onClick={onStart}
                className="px-12 py-5 bg-white text-emerald-700 rounded-2xl font-bold text-lg hover:bg-slate-50 transition shadow-2xl flex items-center gap-3"
              >
                Request Dashboard Access
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                className="px-12 py-5 bg-black/20 hover:bg-black/30 border border-white/20 text-white rounded-2xl font-bold text-lg transition"
              >
                View Open Data API
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GovLandingPage;
