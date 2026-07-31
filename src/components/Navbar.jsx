import { useState } from 'react';
import { LogIn, ShieldCheck, LogOut, Home, Info, Image as ImageIcon, ShoppingBag, PhoneCall, X, Menu } from 'lucide-react';
import pakshallogo from '../assets/pakshallogo_new.png';

export const Navbar = ({ currentPage, onNavigate, isAdminAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);
  const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';

  const handleLinkClick = (e, page, hash = '') => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page, hash);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#f5ecd0] via-[#ebd8a1] to-[#f5ecd0] py-3.5 shadow-md border-b border-black/5 select-none text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo Section */}
          <a
            href={`${basePrefix}/`}
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex-shrink-0 flex items-center group relative h-14 w-48 sm:w-56 md:w-64"
          >
            <img
              src={pakshallogo}
              alt="Pakshal Agencies Logo"
              className="absolute left-0 top-1/2 -translate-y-1/2 h-16 sm:h-20 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03]"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7">
            {/* Home Link */}
            <div className="relative flex flex-col items-center py-2">
              <a
                href={`${basePrefix}/`}
                onClick={(e) => handleLinkClick(e, 'home')}
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${currentPage === 'home' ? 'text-[#38a12c]' : 'text-slate-800 hover:text-[#38a12c]'}`}
              >
                Home
              </a>
              {currentPage === 'home' && (
                <div className="absolute bottom-[-4px] w-8 h-[2.5px] bg-[#38a12c] rounded-full" />
              )}
            </div>

            {/* About Us Link */}
            <div className="relative flex flex-col items-center py-2">
              <a
                href={`${basePrefix}/about`}
                onClick={(e) => handleLinkClick(e, 'about')}
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${currentPage === 'about' ? 'text-[#38a12c]' : 'text-slate-800 hover:text-[#38a12c]'}`}
              >
                About Us
              </a>
              {currentPage === 'about' && (
                <div className="absolute bottom-[-4px] w-8 h-[2.5px] bg-[#38a12c] rounded-full" />
              )}
            </div>

            {/* Gallery Link */}
            <div className="relative flex flex-col items-center py-2">
              <a
                href={`${basePrefix}/gallery`}
                onClick={(e) => handleLinkClick(e, 'gallery')}
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${currentPage === 'gallery' ? 'text-[#38a12c]' : 'text-slate-800 hover:text-[#38a12c]'}`}
              >
                Gallery
              </a>
              {currentPage === 'gallery' && (
                <div className="absolute bottom-[-4px] w-8 h-[2.5px] bg-[#38a12c] rounded-full" />
              )}
            </div>


            {/* Products Page Link */}
            <div className="relative flex flex-col items-center py-2">
              <a
                href={`${basePrefix}/products`}
                onClick={(e) => handleLinkClick(e, 'products')}
                className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${currentPage === 'products' ? 'text-[#38a12c]' : 'text-slate-800 hover:text-[#38a12c]'}`}
              >
                Products
              </a>
              {currentPage === 'products' && (
                <div className="absolute bottom-[-4px] w-8 h-[2.5px] bg-[#38a12c] rounded-full" />
              )}
            </div>

            <a
              href={`${basePrefix}/contact`}
              onClick={(e) => handleLinkClick(e, 'contact')}
              className={`text-[11px] font-extrabold uppercase tracking-widest transition-colors ${currentPage === 'contact' ? 'text-[#38a12c]' : 'text-slate-800 hover:text-[#38a12c]'}`}
            >
              Contact Us
            </a>
          </div>

          {/* Actions Section */}
          <div className="hidden xl:flex items-center gap-6">
            {/* Phone link */}
            <a
              href="tel:+919966493777"
              className="flex items-center gap-2 text-slate-800 hover:text-[#38a12c] transition-colors text-sm font-bold"
            >
              <svg className="w-4 h-4 text-[#C9A44C] fill-current" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
              </svg>
              9966493777
            </a>

            {isAdminAuthenticated && (
              <div className="flex items-center gap-3">
                <button
                  onClick={() => onNavigate('admin')}
                  className="px-4 py-2 bg-[#0F5C3B] hover:bg-[#0b472e] text-white rounded-xl text-[11.5px] font-extrabold uppercase tracking-wider transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-[#C9A44C]" />
                  Dashboard
                </button>
                <button
                  onClick={() => {
                    sessionStorage.removeItem('admin_auth');
                    onNavigate('home');
                  }}
                  className="px-3.5 py-2 bg-[#FAF8F5]/10 border border-slate-700/20 text-slate-800 hover:bg-slate-900/5 hover:border-slate-800/40 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1 cursor-pointer"
                  title="Logout"
                >
                  <LogOut className="w-3.5 h-3.5 text-slate-500" />
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-black/5 focus:outline-none transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden">
          {/* Glassmorphic Backdrop */}
          <div
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs transition-opacity duration-300"
          />

          {/* Right Slide-over Panel */}
          <div className="absolute top-0 bottom-0 right-0 w-[300px] sm:w-[350px] bg-[#FAF9F6] shadow-2xl p-6 flex flex-col justify-between animate-slide-in border-l border-slate-200/50">

            {/* Drawer Header */}
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-stone-200/60 mb-8">
                <div className="flex flex-col text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#C9A44C]">
                    PAKSHAL AGENCIES
                  </span>
                  <span className="text-[9px] text-slate-400 font-bold uppercase mt-0.5">
                    Premium Wood & Fittings
                  </span>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="w-9 h-9 rounded-xl bg-stone-100 hover:bg-stone-200/80 flex items-center justify-center cursor-pointer transition-all border border-stone-200/20 text-slate-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-2.5">
                {[
                  { id: 'home', label: 'Home', icon: Home },
                  { id: 'about', label: 'About Us', icon: Info },
                  { id: 'gallery', label: 'Experience Gallery', icon: ImageIcon },
                  { id: 'products', label: 'Products Catalogue', icon: ShoppingBag },
                  { id: 'contact', label: 'Contact Us', icon: PhoneCall },
                ].map((item) => {
                  const isActive = currentPage === item.id;
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={`${basePrefix}/${item.id === 'home' ? '' : item.id}`}
                      onClick={(e) => handleLinkClick(e, item.id)}
                      className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-[12px] font-extrabold uppercase tracking-wider transition-all duration-200 ${isActive
                          ? 'bg-[#0F5C3B] text-white shadow-md shadow-[#0F5C3B]/10 border border-[#0F5C3B]/20'
                          : 'bg-transparent text-slate-700 hover:bg-stone-100 hover:text-slate-900 border border-transparent'
                        }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-[#C9A44C]' : 'text-slate-400'}`} />
                      <span>{item.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Drawer Footer */}
            <div className="flex flex-col gap-5">
              <div className="h-[1px] bg-stone-200" />

              {/* Phone Details */}
              <div className="bg-[#FAF2DF] border border-[#C9A44C]/30 rounded-[1.5rem] p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#0F5C3B]/10 flex items-center justify-center text-[#0F5C3B]">
                  <PhoneCall className="w-4.5 h-4.5 text-[#0f5c3b]" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[8px] font-black text-[#8c6d23] uppercase tracking-widest">
                    Quick Inquiry Call
                  </span>
                  <a
                    href="tel:+919966493777"
                    className="text-sm font-black text-slate-800 hover:text-[#0F5C3B] transition-colors mt-0.5"
                  >
                    +91 9966493777
                  </a>
                </div>
              </div>

              {/* Admin Panel Details */}
              {isAdminAuthenticated ? (
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      onNavigate('admin');
                    }}
                    className="w-full py-3 bg-[#0F5C3B] hover:bg-[#0b472e] text-white rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <ShieldCheck className="w-4 h-4 text-[#C9A44C]" />
                    Dashboard
                  </button>
                  <button
                    onClick={() => {
                      setIsOpen(false);
                      sessionStorage.removeItem('admin_auth');
                      onNavigate('home');
                    }}
                    className="w-full py-3 bg-red-50 hover:bg-red-100 border border-red-200/50 text-red-600 rounded-xl text-[10px] font-extrabold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout Admin
                  </button>
                </div>
              ) : (
                <a
                  href={`${basePrefix}/?page=login`}
                  onClick={(e) => handleLinkClick(e, 'login')}
                  className="py-2.5 px-4 bg-stone-100 hover:bg-stone-200/80 border border-stone-200/40 text-stone-600 hover:text-stone-800 rounded-xl text-[9px] font-extrabold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <LogIn className="w-3.5 h-3.5 text-stone-500" />
                  Staff Login Portal
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </nav>
  );
};


