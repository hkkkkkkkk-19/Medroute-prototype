import React, { useState, useContext, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { UserRole } from '../types.ts';
import { AuthContext } from '../App.tsx';
import { useLanguage } from '../LanguageContext.tsx';
import { backendService } from '../services/backendService.ts';
import { sendWelcomeEmail } from '../services/mailService.ts';
import { 
  User, 
  Mail, 
  Lock, 
  ArrowLeft, 
  Github, 
  Chrome, 
  Heart, 
  ShieldCheck, 
  Building2, 
  Stethoscope 
} from 'lucide-react';

interface Props {
  initialRole?: UserRole;
  initialIsLogin?: boolean;
  onBack: () => void;
}

const AuthPage: React.FC<Props> = ({ initialRole = UserRole.DONOR, initialIsLogin = true, onBack }) => {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [role, setRole] = useState<UserRole>(initialRole);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const auth = useContext(AuthContext);
  const { t } = useLanguage();

  useEffect(() => {
    setIsLogin(initialIsLogin);
    setRole(initialRole);
  }, [initialIsLogin, initialRole]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (isLogin) {
      const user = backendService.getUserByEmail(email);
      if (user && user.password === password) {
        auth?.login(email, user.role);
      } else {
        setError("Invalid credentials. Please register if you haven't yet.");
      }
    } else {
      try {
        backendService.register({ email, password, role });
        setSuccess("Account created! A welcome email has been sent to your inbox.");
        await sendWelcomeEmail(email); // Send welcome email on registration
        setTimeout(() => {
          auth?.login(email, role);
        }, 2000);
      } catch (err: any) {
        setError(err.message);
      }
    }
  };

  const handleGoogleSignIn = () => {
    // Mock Google Sign-In
    const mockGoogleEmail = "google.user@example.com";
    const existingUser = backendService.getUserByEmail(mockGoogleEmail);
    
    if (!existingUser) {
      // Auto-register mock google user as Donor if they don't exist
      backendService.register({ 
        email: mockGoogleEmail, 
        password: "google-auth-token", 
        role: UserRole.DONOR 
      });
    }
    
    auth?.login(mockGoogleEmail, existingUser?.role || UserRole.DONOR);
  };

  const roles = [
    { id: UserRole.DONOR, label: "Donor", icon: <Heart className="w-5 h-5" /> },
    { id: UserRole.RECEIVER, label: "Receiver", icon: <User className="w-5 h-5" /> },
    { id: UserRole.NGO, label: "NGO Partner", icon: <Building2 className="w-5 h-5" /> },
    { id: UserRole.GOVERNMENT, label: "Government", icon: <ShieldCheck className="w-5 h-5" /> },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8 bg-[#030a1a] font-serif">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-5xl bg-white rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row min-h-[750px]"
      >
        {/* Left Side: Welcome/Switch Panel */}
        <div className="md:w-[42%] bg-gradient-to-br from-[#007fff] to-[#4f46e5] p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[80%] h-[80%] bg-white rounded-full blur-[120px]" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[80%] h-[80%] bg-sky-300 rounded-full blur-[120px]" />
          </div>

          <div className="relative z-10">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2 text-white/80 hover:text-white transition-colors font-black text-[10px] tracking-[0.3em] mb-20 font-lato"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              {t('auth.back')}
            </button>

            <AnimatePresence mode="wait">
              <motion.div
                key={isLogin ? 'login-text' : 'reg-text'}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ type: "spring", damping: 20, stiffness: 100 }}
                className="space-y-8"
              >
                <h2 className="text-6xl font-black tracking-tighter leading-[0.9] drop-shadow-2xl">
                  {isLogin ? t('auth.welcome') : t('auth.join')}
                </h2>
                <p className="text-white/80 font-medium text-lg leading-relaxed max-w-xs font-lato">
                  {isLogin 
                    ? t('auth.loginDesc') 
                    : t('auth.regDesc')}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative z-10">
              <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsLogin(!isLogin)}
              className="px-14 py-5 border-2 border-white/40 hover:border-white rounded-full font-bold text-sm transition-all backdrop-blur-md font-sans"
            >
              {isLogin ? t('auth.create') : t('auth.signin')}
            </motion.button>
          </div>
        </div>

        {/* Right Side: Form Panel */}
        <div className="md:w-[58%] bg-white p-12 md:p-24 flex flex-col justify-center">
          <div className="max-w-md mx-auto w-full">
            <motion.div 
              key={isLogin ? 'login-header' : 'reg-header'}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center mb-10"
            >
              <h1 className="text-5xl font-black text-slate-900 tracking-tighter mb-6">
                {isLogin ? t('auth.signin') : t('auth.create')}
              </h1>
              
              <div className="flex flex-col gap-3 mb-8">
                <button 
                  onClick={handleGoogleSignIn}
                  className="w-full py-4 px-6 rounded-2xl border border-slate-100 flex items-center justify-center gap-3 hover:bg-slate-50 transition-all shadow-sm group font-sans font-bold text-slate-700 active:scale-95"
                >
                  <Chrome className="w-5 h-5 text-sky-500" />
                  <span className="text-sm">{t('auth.google')}</span>
                </button>
                <div className="flex justify-center gap-3">
                  <button className="w-12 h-12 rounded-2xl border border-slate-100 flex items-center justify-center hover:bg-slate-50 transition-all shadow-sm group">
                    <Github className="w-5 h-5 text-slate-500 group-hover:text-indigo-600 transition-colors" />
                  </button>
                </div>
              </div>

              <p className="text-slate-400 text-sm font-medium font-sans">
                {t('auth.emailOr')} {isLogin ? t('auth.login') : t('auth.registration')}
              </p>
            </motion.div>

            {error && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-5 bg-rose-50 border border-rose-100 text-rose-600 rounded-3xl text-xs font-bold flex items-center gap-4 font-sans"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-rose-500">!</div>
                {error}
              </motion.div>
            )}

            {success && (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mb-8 p-5 bg-emerald-50 border border-emerald-100 text-emerald-600 rounded-3xl text-xs font-bold flex items-center gap-4 font-sans"
              >
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shrink-0 shadow-sm text-emerald-500">✓</div>
                {success}
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div className="space-y-4 mb-10">
                  <label className="text-xs font-bold text-slate-400 ml-1 font-sans">{t('auth.identity')}</label>
                  <div className="grid grid-cols-4 gap-3">
                    {roles.map(r => (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setRole(r.id)}
                        className={`p-4 rounded-3xl border-2 flex flex-col items-center gap-2 transition-all duration-300 ${role === r.id ? 'border-sky-500 bg-sky-50 text-sky-600 shadow-xl shadow-sky-100' : 'border-slate-50 bg-slate-50 text-slate-400 hover:border-slate-200'}`}
                      >
                        {r.icon}
                        <div className="text-[10px] font-bold font-sans">{r.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder={t('auth.email')}
                    className="w-full pl-16 pr-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-sky-500 outline-none font-bold text-slate-900 transition-all placeholder:text-slate-300 font-sans"
                    required
                  />
                </div>

                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-sky-500 transition-colors">
                    <Lock className="w-5 h-5" />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder={t('auth.password')}
                    className="w-full pl-16 pr-8 py-6 bg-slate-50 border-2 border-transparent rounded-[2rem] focus:bg-white focus:border-sky-500 outline-none font-bold text-slate-900 transition-all placeholder:text-slate-300 font-sans"
                    required
                  />
                </div>
              </div>

              {isLogin && (
                <div className="flex items-center justify-between px-2 font-lato">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 rounded border-slate-200 text-sky-500 focus:ring-sky-500" />
                    <span className="text-xs font-bold text-slate-400 group-hover:text-slate-600 transition-colors">{t('auth.remember')}</span>
                  </label>
                  <button type="button" className="text-xs font-bold text-slate-400 hover:text-sky-500 transition-colors">
                    {t('auth.forgot')}
                  </button>
                </div>
              )}

              <div className="pt-6">
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-6 bg-sky-500 hover:bg-sky-600 text-white rounded-full font-bold text-base transition-all shadow-2xl shadow-sky-200 font-sans"
                >
                  {isLogin ? t('auth.signin') : t('auth.signup')}
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default AuthPage;
