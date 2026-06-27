import { useState } from 'react';
import { Lock, Mail, Key, ArrowLeft, Eye, EyeOff, ShieldAlert } from 'lucide-react';

export const LoginForm = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate small delay for realistic premium login feel
    setTimeout(() => {
      if (email === 'admin@pakshal.com' && password === 'admin@pakshal') {
        sessionStorage.setItem('admin_auth', 'true');
        setIsLoading(false);
        onNavigate('admin');
      } else {
        setError('Invalid administrative credentials. Please check your ID and password.');
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center items-center px-4 py-16 font-sans text-left text-slate-800 select-none">
      <div className="max-w-md w-full bg-white border border-[#C9A44C]/25 rounded-[2.5rem] p-8 sm:p-10 shadow-xl relative overflow-hidden">
        {/* Decorative background orbs */}
        <div className="absolute -top-12 -left-12 w-32 h-32 rounded-full bg-[#0F5C3B]/5 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-[#C9A44C]/5 blur-2xl pointer-events-none" />

        {/* Back navigation button */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute top-6 left-6 text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mt-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FAF2DF] to-[#ebd8a1] flex items-center justify-center mb-5 shadow border border-[#C9A44C]">
            <Lock className="w-7 h-7 text-[#0F5C3B]" />
          </div>
          
          <h1 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
            Pakshal Agencies
          </h1>
          <p className="text-[10px] text-[#C9A44C] tracking-[0.25em] font-black uppercase mb-1">
            ADMINISTRATOR PORTAL
          </p>
          <p className="text-stone-500 text-xs font-semibold leading-relaxed mt-2 max-w-[280px]">
            Please sign in with your administrative credentials to manage product offers and digital assets.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {/* Email field */}
          <div>
            <label className="block text-[9.5px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
              Email Address / ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Mail className="h-4 w-4 text-stone-450" />
              </div>
              <input
                type="email"
                required
                placeholder="admin@pakshal.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-3 pl-10 pr-4 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label className="block text-[9.5px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Key className="h-4 w-4 text-stone-450" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-xl py-3 pl-10 pr-10 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-450 hover:text-stone-600 transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-650 text-[10.5px] font-bold p-3.5 rounded-xl flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-3 bg-[#0F5C3B] hover:bg-[#0b472e] text-white font-black text-[10.5px] uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  Verifying...
                  <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                </>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>

        <div className="mt-8 border-t border-stone-150 pt-4 text-center">
          <span className="text-[9px] font-black text-stone-400 tracking-wider uppercase">
            SECURE MANAGEMENT GATEWAY
          </span>
        </div>
      </div>
    </div>
  );
};
