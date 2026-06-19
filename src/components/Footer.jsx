import React from 'react';

export const Footer = ({ onNavigate }) => {
  const handleLinkClick = (e, href) => {
    if (href.startsWith('#') && onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#1C120C] to-[#120A05] text-[#E6DFD5]/70 pt-10 sm:pt-12 pb-0 select-none text-left overflow-hidden border-t border-[#C9A44C]/25">
      
      <div className="max-w-[98.5%] xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1 - Brand Info */}
          <div className="flex flex-col gap-5 lg:col-span-3 text-left">
            {/* Logo & Title */}
            <div className="flex items-center gap-3 group">
              <svg className="w-9 h-9 text-[#38a12c] transition-transform duration-300 group-hover:scale-105" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 20V8a4 4 0 014-4h4a5 5 0 015 5v0a5 5 0 01-5 5H8" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16V10a2 2 0 012-2h2a3 3 0 013 3v0a3 3 0 01-3 3h-4" />
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-xl font-black tracking-tight text-[#FAF8F5] leading-none">PAKSHAL</span>
                <span className="text-[10px] text-[#C9A44C] font-extrabold uppercase tracking-[0.25em] mt-1.5">AGENCIES</span>
              </div>
            </div>
            
            <p className="text-[#E6DFD5]/80 text-xs sm:text-[13px] leading-relaxed max-w-[95%] font-medium">
              Authorized distributor of premium plywood, hardware & interior solutions.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-0.5">
              {[
                {
                  name: 'Facebook',
                  href: '#',
                  icon: (
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M9 8H7v3h2v9h3v-9h3.6L15 8h-3V6c0-.9.7-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
                    </svg>
                  )
                },
                {
                  name: 'Instagram',
                  href: '#',
                  icon: (
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  )
                },
                {
                  name: 'LinkedIn',
                  href: '#',
                  icon: (
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 011-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 100-2.75 1.37 1.37 0 000 2.75M8 18.5V10.13H5.2v8.37H8z" />
                    </svg>
                  )
                },
                {
                  name: 'WhatsApp',
                  href: 'https://wa.me/919247449522',
                  icon: (
                    <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
                    </svg>
                  )
                }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  onClick={(e) => {
                    if (social.href.startsWith('#')) handleLinkClick(e, social.href);
                  }}
                  className="w-9 h-9 rounded-full border border-[#C9A44C]/35 hover:border-[#38a12c] flex items-center justify-center text-[#C9A44C] hover:text-[#38a12c] hover:bg-[#38a12c]/10 bg-transparent transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2 - Products */}
          <div className="flex flex-col gap-3.5 lg:col-span-2 text-left">
            <div className="relative mb-2">
              <div className="pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                <h4 className="text-[#FAF8F5] font-extrabold text-xs uppercase tracking-wider">Products</h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A44C]/20" />
            </div>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              {[
                { name: 'Plywood', href: '#products' },
                { name: 'Laminates', href: '#products' },
                { name: 'Hardware Fittings', href: '#products' },
                { name: 'Doors', href: '#products' },
                { name: 'Kitchen Accessories', href: '#products' },
                { name: 'All Products', href: '#products' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group flex items-center text-[#E6DFD5]/75 hover:text-[#C9A44C] font-semibold transition-all duration-300"
                  >
                    <span className="w-0 h-[1.5px] bg-[#C9A44C] group-hover:w-3.5 group-hover:mr-2 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Brands */}
          <div className="flex flex-col gap-3.5 lg:col-span-2 text-left">
            <div className="relative mb-2">
              <div className="pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                <h4 className="text-[#FAF8F5] font-extrabold text-xs uppercase tracking-wider">Brands</h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A44C]/20" />
            </div>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              {['Ebco', 'Hettich', 'Godrej', 'Dorset', 'Hafele'].map((link) => (
                <li key={link}>
                  <a 
                    href="#brands" 
                    onClick={(e) => handleLinkClick(e, '#brands')}
                    className="group flex items-center text-[#E6DFD5]/75 hover:text-[#C9A44C] font-semibold transition-all duration-300"
                  >
                    <span className="w-0 h-[1.5px] bg-[#C9A44C] group-hover:w-3.5 group-hover:mr-2 transition-all duration-300" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Quick Links */}
          <div className="flex flex-col gap-3.5 lg:col-span-2 text-left">
            <div className="relative mb-2">
              <div className="pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                <h4 className="text-[#FAF8F5] font-extrabold text-xs uppercase tracking-wider">Quick Links</h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A44C]/20" />
            </div>
            <ul className="flex flex-col gap-2.5 text-xs sm:text-[13px]">
              {[
                { name: 'About Us', href: '#about', page: 'about' },
                { name: 'Gallery', href: '#gallery', page: 'gallery' },
                { name: 'Products', href: '/products', page: 'products' },
                { name: 'Dealer Zone', href: '/contact', page: 'contact' },
                { name: 'Contact Us', href: '/contact', page: 'contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => {
                      if (link.page === 'about') {
                        e.preventDefault();
                        if (onNavigate) onNavigate('about');
                      } else if (link.page === 'gallery') {
                        e.preventDefault();
                        if (onNavigate) onNavigate('gallery');
                      } else if (link.page === 'products') {
                        e.preventDefault();
                        if (onNavigate) onNavigate('products');
                      } else if (link.page === 'contact') {
                        e.preventDefault();
                        if (onNavigate) onNavigate('contact');
                      } else {
                        handleLinkClick(e, link.href);
                      }
                    }}
                    className="group flex items-center text-[#E6DFD5]/75 hover:text-[#C9A44C] font-semibold transition-all duration-300"
                  >
                    <span className="w-0 h-[1.5px] bg-[#C9A44C] group-hover:w-3.5 group-hover:mr-2 transition-all duration-300" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5 - Contact Info */}
          <div className="flex flex-col gap-4 lg:col-span-3 text-left">
            <div className="relative mb-2">
              <div className="pb-1.5 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
                <h4 className="text-[#FAF8F5] font-extrabold text-xs uppercase tracking-wider">Contact Info</h4>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C9A44C]/20" />
            </div>
            
            <div className="flex flex-col gap-4">
              {/* Phone Card */}
              <div className="flex gap-3 items-start py-1">
                <div className="text-[#38a12c] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 01-7.108-7.108c-.155-.44.01-1.274.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div className="flex flex-col text-left">
                  <a href="tel:+919247449522" className="text-[#38a12c] font-bold text-sm tracking-wide hover:underline">92474 49522</a>
                  <span className="text-[#E6DFD5]/40 text-[10px] font-medium mt-0.5">(Mon - Sat: 10:00 AM - 7:00 PM)</span>
                </div>
              </div>

              {/* Email Card */}
              <div className="flex gap-3 items-start py-1">
                <div className="text-[#38a12c] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <a href="mailto:info@pakshalagencies.com" className="text-[#E6DFD5]/80 font-semibold text-xs sm:text-[13px] hover:text-[#C9A44C] transition-colors mt-0.5">info@pakshalagencies.com</a>
              </div>

              {/* Address Card */}
              <div className="flex gap-3 items-start py-1">
                <div className="text-[#38a12c] mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <span className="text-[#E6DFD5]/80 font-semibold text-xs sm:text-[13px] mt-0.5">5-5-755, Hindi Nagar, Goshamahal, Hyderabad 500012. TS</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="w-full bg-[#120A05] text-[#E6DFD5]/60 border-t border-[#C9A44C]/10 mt-10 py-4 font-medium text-xs select-none">
        <div className="max-w-[98.5%] xl:max-w-[1720px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <span>&copy; {new Date().getFullYear()} Pakshal Agencies. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};
