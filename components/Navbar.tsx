import React, { useContext, useState } from 'react';
import { AuthContext } from '../App.tsx';
import { useLanguage, Language } from '../LanguageContext.tsx';
import { ChevronDown, Globe } from 'lucide-react';

interface Props {
  onAuth: () => void;
  onDonate: () => void;
  onRequest: () => void;
  onNGO: () => void;
  onGov: () => void;
  onHome: () => void;
}

const Navbar: React.FC<Props> = ({ onAuth, onDonate, onRequest, onNGO, onGov, onHome }) => {
  const auth = useContext(AuthContext);
  const { language, setLanguage, t } = useLanguage();
  const [isTranslateOpen, setIsTranslateOpen] = useState(false);

  const handleBrandClick = () => {
    onHome();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const languages = [
    { code: Language.ENGLISH, label: 'English' },
    { code: Language.HINDI, label: 'हिन्दी' },
    { code: Language.PUNJABI, label: 'ਪੰਜਾਬੀ' },
    { code: Language.TAMIL, label: 'தமிழ்' },
    { code: Language.MARATHI, label: 'मराठी' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#030a1a]/80 backdrop-blur-xl border-b border-white/5 px-8 py-3">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo and Brand */}
        <div 
          className="flex items-center gap-3 cursor-pointer group" 
          onClick={handleBrandClick}
        >
          <div className="w-10 h-10 bg-[#0ea5e9] rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-500/20 group-hover:scale-105 transition-transform">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.5 9.5C2.5 8.39543 3.39543 7.5 4.5 7.5H13.5C14.0523 7.5 14.5 7.94772 14.5 8.5V16.5C14.5 17.0523 14.0523 17.5 13.5 17.5H4.5C3.39543 17.5 2.5 16.6046 2.5 15.5V9.5Z" fill="currentColor"/>
              <path d="M14.5 8.5H16.5C17.6046 8.5 18.5 9.39543 18.5 10.5V11.5L21.3147 13.3765C21.7417 13.6611 22 14.1374 22 14.6472V16.5C22 17.0523 21.5523 17.5 21 17.5H14.5V8.5Z" fill="currentColor"/>
              <circle cx="6.5" cy="18.5" r="2.5" fill="currentColor"/>
              <circle cx="17.5" cy="18.5" r="2.5" fill="currentColor"/>
              <path d="M7 11.5H10" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round"/>
              <path d="M8.5 10V13" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-xl font-bold text-white tracking-tight">MedRoute</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <button onClick={onHome} className="text-sm font-medium text-slate-400 hover:text-white transition">{t('nav.home')}</button>
          <button onClick={onDonate} className="text-sm font-medium text-slate-400 hover:text-white transition">{t('nav.donate')}</button>
          <button onClick={onRequest} className="text-sm font-medium text-slate-400 hover:text-white transition">{t('nav.request')}</button>
          <button onClick={onNGO} className="text-sm font-medium text-slate-400 hover:text-white transition">{t('nav.ngo')}</button>
          <button onClick={onGov} className="text-sm font-medium text-slate-400 hover:text-white transition">{t('nav.gov')}</button>
          <button onClick={() => scrollTo('impact')} className="text-sm font-medium text-slate-400 hover:text-white transition">{t('nav.about')}</button>
          
          {/* Translate Dropdown */}
          <div className="relative">
            <button 
              onClick={() => setIsTranslateOpen(!isTranslateOpen)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-400 hover:text-white transition"
            >
              <Globe size={14} />
              {t('nav.translate')}
              <ChevronDown size={14} className={`transition-transform ${isTranslateOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isTranslateOpen && (
              <div className="absolute top-full right-0 mt-2 w-40 bg-slate-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden py-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code);
                      setIsTranslateOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-bold transition hover:bg-white/5 ${
                      language === lang.code ? 'text-sky-400 bg-sky-400/5' : 'text-slate-400'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-6">
          {auth?.user ? (
            <div className="flex items-center gap-4">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-white">{auth.user.name}</div>
                <div className="text-[10px] text-sky-400 font-black">{auth.user.role}</div>
              </div>
              <button 
                onClick={auth.logout}
                className="px-5 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-bold hover:bg-white/10 transition"
              >
                {t('nav.logout')}
              </button>
            </div>
          ) : (
            <>
              <button 
                onClick={onAuth}
                className="text-sm font-medium text-slate-400 hover:text-white transition"
              >
                {t('nav.signin')}
              </button>
              <button 
                onClick={onAuth}
                className="px-6 py-2.5 bg-[#0ea5e9] text-white rounded-xl font-bold text-sm hover:bg-sky-500 transition shadow-lg shadow-sky-500/10"
              >
                {t('nav.getstarted')}
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;