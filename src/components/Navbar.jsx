import React, { useState } from 'react';

export const Navbar = ({ currentPage, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = (e, page, hash = '') => {
    e.preventDefault();
    setIsOpen(false);
    onNavigate(page, hash);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#ebd8a1] via-[#f5ecd0] to-[#ebd8a1] py-3.5 shadow-md border-b border-black/5 select-none text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">

          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className="flex-shrink-0 flex items-center gap-2.5 group"
          >
            <svg className="w-9 h-9 text-[#38a12c] transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V8a4 4 0 014-4h4a5 5 0 015 5v0a5 5 0 01-5 5H8" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16V10a2 2 0 012-2h2a3 3 0 013 3v0a3 3 0 01-3 3h-4" />
            </svg>
            <div className="flex flex-col text-left">
              <span className="text-2xl font-black tracking-tight text-slate-900 leading-none font-sans">PAKSHAL</span>
              <span className="text-[10px] text-slate-800 font-extrabold uppercase tracking-[0.25em] mt-1.5 leading-none">AGENCIES</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden xl:flex items-center gap-7">
            {/* Home Link */}
            <div className="relative flex flex-col items-center py-2">
              <a
                href="#home"
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
                href="#about"
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
                href="#gallery"
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
                href="/products"
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
              href="/contact"
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
              href="tel:+919247449522"
              className="flex items-center gap-2 text-slate-800 hover:text-[#38a12c] transition-colors text-sm font-bold"
            >
              <svg className="w-4 h-4 text-[#C9A44C] fill-current" viewBox="0 0 24 24">
                <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
              </svg>
              92474 49522
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="xl:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-black/5 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="xl:hidden bg-gradient-to-b from-[#ebd8a1] to-[#e6d19c] border-t border-black/5 py-4 px-6 flex flex-col gap-3.5 animate-fade-in text-left">
          <a
            href="#home"
            onClick={(e) => handleLinkClick(e, 'home')}
            className={`text-sm font-bold uppercase transition-colors ${currentPage === 'home' ? 'text-[#38a12c]' : 'text-slate-800'}`}
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, 'about')}
            className={`text-sm font-bold uppercase transition-colors ${currentPage === 'about' ? 'text-[#38a12c]' : 'text-slate-800'}`}
          >
            About Us
          </a>
          <a
            href="#gallery"
            onClick={(e) => handleLinkClick(e, 'gallery')}
            className={`text-sm font-bold uppercase transition-colors ${currentPage === 'gallery' ? 'text-[#38a12c]' : 'text-slate-800'}`}
          >
            Gallery
          </a>
          <a
            href="/products"
            onClick={(e) => handleLinkClick(e, 'products')}
            className={`text-sm font-bold uppercase transition-colors ${currentPage === 'products' ? 'text-[#38a12c]' : 'text-slate-800'}`}
          >
            Products
          </a>

          <a
            href="/contact"
            onClick={(e) => handleLinkClick(e, 'contact')}
            className={`text-sm font-bold uppercase transition-colors ${currentPage === 'contact' ? 'text-[#38a12c]' : 'text-slate-800'}`}
          >
            Contact Us
          </a>
          <div className="h-[1px] bg-black/10 my-1" />
          <a
            href="tel:+919247449522"
            className="text-sm font-bold text-slate-900 flex items-center gap-2 py-1"
          >
            📞 92474 49522
          </a>
        </div>
      )}
    </nav>
  );
};
