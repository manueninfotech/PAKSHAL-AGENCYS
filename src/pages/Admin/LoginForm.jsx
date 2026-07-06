import { useState } from 'react';
import { Lock, Mail, Key, ArrowLeft, Eye, EyeOff, ShieldAlert } from 'lucide-react';
import { API_BASE_URL } from '../../config';

export const LoginForm = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const res = await fetch(`${API_BASE_URL}/api/admin/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setTimeout(() => {
          sessionStorage.setItem('admin_auth', 'true');
          setIsLoading(false);
          onNavigate('admin');
        }, 300);
      } else {
        setError(data.error || 'Invalid administrative credentials. Please check your ID and password.');
        setIsLoading(false);
      }
    } catch (err) {
      setError('Connection to backend failed. Please verify the server is running.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] flex flex-col justify-center items-center px-4 py-16 font-sans text-left text-slate-800 select-none">
      <div className="max-w-md w-full bg-white border border-[#C9A44C]/25 rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
        {/* Back navigation button */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute top-5 left-5 text-stone-400 hover:text-stone-600 transition-colors flex items-center gap-1 text-[10px] font-black uppercase tracking-wider cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Header Block */}
        <div className="flex flex-col items-center text-center mt-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FAF2DF] to-[#ebd8a1] flex items-center justify-center mb-3.5 shadow border border-[#C9A44C]">
            <Lock className="w-5 h-5 text-[#0F5C3B]" />
          </div>
          
          <h1 className="text-xl font-extrabold text-slate-900 tracking-tight uppercase">
            Pakshal Agencies
          </h1>
          <p className="text-[9px] text-[#C9A44C] tracking-[0.2em] font-black uppercase">
            ADMIN PORTAL
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Email field */}
          <div>
            <label className="block text-[9.5px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
              Email Address / ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-3.5 w-3.5 text-stone-400" />
              </div>
              <input
                type="email"
                required
                placeholder="admin@pakshal.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-lg py-2.5 pl-9 pr-3 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
              />
            </div>
          </div>

          {/* Password field */}
          <div>
            <label className="block text-[9.5px] font-black text-stone-500 uppercase tracking-widest mb-1.5 pl-0.5">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Key className="h-3.5 w-3.5 text-stone-400" />
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-50 border border-stone-200 focus:bg-white rounded-lg py-2.5 pl-9 pr-9 text-xs font-semibold text-slate-800 focus:outline-none focus:border-[#0F5C3B] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-stone-400 hover:text-stone-600 transition-colors cursor-pointer"
              >
                {showPassword ? (
                  <EyeOff className="h-3.5 w-3.5" />
                ) : (
                  <Eye className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
          </div>

          {/* Feedback Messages */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 text-red-600 text-[10.5px] font-bold p-3.5 rounded-xl flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-red-650 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Submit Action */}
          <div className="pt-1.5">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-2.5 bg-[#0F5C3B] hover:bg-[#0b472e] text-white font-extrabold text-xs uppercase tracking-wider rounded-lg transition-all shadow flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
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
      </div>
    </div>
  );
};
