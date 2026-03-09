import React from 'react';
import LiveMap from './LiveMap.tsx';
import AnimatedCounter from './AnimatedCounter.tsx';
import NearbyHubSearch from './NearbyHubSearch.tsx';
import { useLanguage } from '../LanguageContext.tsx';

interface Props {
  onAuth: () => void;
  onStart: () => void;
  onDonate: () => void;
  onRequest: () => void;
  onNGO: () => void;
  onGov: () => void;
}

const LandingPage: React.FC<Props> = ({ onAuth, onStart, onDonate, onRequest, onNGO, onGov }) => {
  const { t } = useLanguage();

  const stats = [
    { 
      label: t('stats.saved'), 
      val: "128830", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/>
        </svg>
      )
    },
    { 
      label: t('stats.lives'), 
      val: "46272", 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      )
    },
    { 
      label: t('stats.co2'), 
      val: "9513", 
      plus: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
        </svg>
      )
    },
    { 
      label: t('stats.waste'), 
      val: "2340819", 
      currency: true,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/><path d="M12 12V2"/><path d="M19 12H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Z"/><path d="M3 16h18"/>
        </svg>
      )
    }
  ];

  const workflowSteps = [
    {
      title: t('how.step1.title'),
      desc: t('how.step1.desc'),
      color: "bg-sky-500/10 text-sky-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.636V13m0 0l-3-3m3 3l3-3" />
        </svg>
      )
    },
    {
      title: t('how.step2.title'),
      desc: t('how.step2.desc'),
      color: "bg-emerald-500/10 text-emerald-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: t('how.step3.title'),
      desc: t('how.step3.desc'),
      color: "bg-teal-500/10 text-teal-400",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    }
  ];

  return (
    <div className="bg-[#030a1a] text-white min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-40 px-6 overflow-hidden flex flex-col items-center text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none z-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-sky-500/10 rounded-full blur-[160px]"></div>
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center px-8 py-3 rounded-full bg-[#081421] border border-white/5 text-[#007fff] text-base font-medium mb-12 shadow-2xl">
            {t('hero.badge')}
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-black leading-[1.05] tracking-tighter mb-8 bg-gradient-to-b from-white to-slate-400 bg-clip-text text-transparent">
            {t('hero.title').split('medicines')[0]} medicines <br className="hidden md:block"/>
            {t('hero.title').split('medicines')[1]?.split('resources')[0]} <br className="hidden md:block"/>
            <span className="text-sky-400">life-saving resources</span>
          </h1>

          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 leading-relaxed">
            {t('hero.desc')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={onDonate} className="w-full sm:w-auto px-10 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-2xl font-medium text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-sky-900/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"/></svg>
              {t('hero.donate')}
            </button>
            <button onClick={onRequest} className="w-full sm:w-auto px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl font-medium text-lg transition-all flex items-center justify-center gap-3 shadow-xl shadow-emerald-900/40">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12H3m12-6l6 6-6 6"/></svg>
              {t('hero.request')}
            </button>
            <button onClick={onNGO} className="w-full sm:w-auto px-10 py-4 bg-slate-800/50 border border-white/10 hover:bg-slate-800 text-slate-300 rounded-2xl font-medium text-lg transition-all flex items-center justify-center gap-3">
              {t('hero.partner')}
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 border-y border-white/5 bg-[#0a1b3d]/30">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="w-16 h-16 rounded-full bg-[#111827] flex items-center justify-center mb-8 mx-auto border border-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] text-sky-400 group-hover:scale-110 group-hover:bg-[#1f2937] transition-all duration-500">
                  {stat.icon}
                </div>
                <AnimatedCounter 
                  value={`${stat.currency ? '₹' : ''}${stat.val}${stat.plus ? '+' : ''}`} 
                  className="text-4xl md:text-[2.75rem] font-black mb-3 tracking-tight text-white"
                />
                <div className="text-[11px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Hub */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">{t('map.title')}</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
              {t('map.desc')}
            </p>
          </div>
          
          <LiveMap mapType="default" />

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {[
              { val: "500+", label: t('map.dropbox'), icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              ), color: "bg-sky-500/10 text-sky-400" },
              { val: "5", label: t('map.routes'), icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1m-6-1a1 1 0 011-1h1"/></svg>
              ), color: "bg-emerald-500/10 text-emerald-400" },
              { val: "5", label: t('map.delivered'), icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              ), color: "bg-teal-500/10 text-teal-400" }
            ].map((card, i) => (
              <div key={i} className="glass-card p-6 rounded-3xl flex items-center gap-6 border border-white/5">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.color}`}>
                  {card.icon}
                </div>
                <div>
                  <div className="text-3xl font-black tracking-tighter">{card.val}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{card.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby Search Feature */}
      <section className="py-24 bg-sky-900/10">
        <div className="max-w-6xl mx-auto px-8">
           <NearbyHubSearch />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-32 bg-[#030a1a]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold tracking-tight mb-4 text-white">{t('how.title')}</h2>
            <p className="text-slate-500 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
              {t('how.desc')}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {workflowSteps.map((step, i) => (
              <div key={i} className="glass-card p-12 rounded-[2.5rem] text-center border border-white/5 hover:bg-white/5 transition-all duration-500 group">
                <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8 shadow-2xl transition-transform group-hover:scale-110 ${step.color}`}>
                  {step.icon}
                </div>
                <h4 className="text-2xl font-bold mb-4 text-white">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-emerald-600 to-sky-600 p-16 md:p-24 text-center">
            <div className="absolute inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_top_right,white,transparent)]"></div>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6 relative z-10">{t('cta.title')}</h2>
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto font-medium mb-12 relative z-10">
              {t('cta.desc')}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button onClick={onDonate} className="px-12 py-5 bg-white text-emerald-700 rounded-2xl font-semibold text-lg hover:bg-slate-50 transition shadow-2xl">
                {t('cta.start')}
              </button>
              <button className="px-12 py-5 bg-black/20 hover:bg-black/30 border border-white/20 text-white rounded-2xl font-semibold text-lg transition">
                {t('cta.learn')}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
