import React, { useEffect } from 'react';

export const AboutPage = ({ onNavigateHome }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full bg-white text-slate-800 select-none text-left pt-20">
      
      {/* 1. Page Hero Section */}
      <section className="relative bg-gradient-to-b from-[#fcf7ea] via-[#fcf7ea]/40 to-white py-16 sm:py-24 overflow-hidden border-b border-[#ebd8a1]/20">
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C9A44C_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#ebd8a1] bg-white/80 shadow-sm mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38a12c] mr-2" />
            <span className="text-[10px] font-black uppercase tracking-[0.18em] text-[#a88634]">Est. 2011 • Hyderabad</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#071330] font-sans leading-tight max-w-4xl mx-auto">
            Shaping Modern Spaces with <span className="text-[#38a12c]">Premium</span> Materials
          </h1>
          
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            Pakshal Agencies is a premier distributor of high-end plywood, laminates, designer doors, and state-of-the-art kitchen and furniture hardware.
          </p>

          <button 
            onClick={() => onNavigateHome('#contact')}
            className="mt-8 inline-flex items-center gap-2 bg-[#38a12c] hover:bg-[#2e8a23] text-white px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md hover:-translate-y-0.5 cursor-pointer"
          >
            Work With Us
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </section>

      {/* 2. Core Profile & Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Panel: Content details */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#a88634]">WHO WE ARE</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071330] font-sans">
                A Decade of Quality, Authenticity &amp; Unmatched Service
              </h2>
              
              <div className="flex flex-col gap-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Founded with a vision to streamline supply chains for premium interior fittings, Pakshal Agencies has grown to become Hyderabad's most trusted name for builders, interior architects, dealers, and carpenters.
                </p>
                <p>
                  We act as the bridge between globally leading manufacturers (like Hafele, Hettich, Ebco, Dorset, and Ebco) and your local creations. By maintaining a large, state-of-the-art warehouse, we ensure that bulk demands are met on time, every time, with 100% genuine products.
                </p>
              </div>

              {/* Stats card sub-grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
                {[
                  { value: '15+', label: 'Years of Trust' },
                  { value: '500+', label: 'Dealers & B2B Clients' },
                  { value: '10k+', label: 'Product Range' },
                  { value: '100%', label: 'Genuine Products' }
                ].map((stat, idx) => (
                  <div key={idx} className="bg-[#fcf7ea]/50 border border-[#ebd8a1]/25 p-4 rounded-xl text-center">
                    <div className="text-2xl font-black text-[#071330] font-sans">{stat.value}</div>
                    <div className="text-[10px] text-slate-500 font-extrabold uppercase tracking-wider mt-1 leading-snug">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Panel: Showcase Image */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 bg-[#38a12c] rounded-3xl rotate-2 opacity-5 group-hover:rotate-1 transition-transform duration-300" />
              <img 
                src={`${import.meta.env.BASE_URL}about-warehouse.png`} 
                alt="Central Timber Warehouse" 
                className="relative z-10 w-full h-[400px] object-cover rounded-3xl border border-[#ebd8a1]/30 shadow-lg"
              />
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. Vision, Mission & Core Values */}
      <section className="py-16 bg-[#fcf7ea]/40 border-y border-[#ebd8a1]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Vision */}
            <div className="bg-white border border-[#ebd8a1]/25 p-8 rounded-3xl shadow-[0_4px_20px_rgba(201,164,76,0.03)] flex gap-5">
              <div className="text-[#38a12c] shrink-0 mt-1">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-extrabold text-[#071330]">Our Vision</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  To become the most reliable and premium B2B distributor of interior design and hardware solutions in South India, continuously raising the bar for supply efficiency, customer service, and product authenticity.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-white border border-[#ebd8a1]/25 p-8 rounded-3xl shadow-[0_4px_20px_rgba(201,164,76,0.03)] flex gap-5">
              <div className="text-[#38a12c] shrink-0 mt-1">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                </svg>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-extrabold text-[#071330]">Our Mission</h3>
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  To enable interior designers, builders, and developers to bring luxury spaces to life by supplying the finest plywood, designer doors, and cabinet fittings on demand, backed by strong professional relationships.
                </p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="text-center flex flex-col gap-10 mt-6">
            <div className="flex flex-col items-center gap-2">
              <span className="text-[#a88634] font-extrabold uppercase tracking-widest text-[11px]">OUR CORE VALUES</span>
              <h3 className="text-3xl font-extrabold text-[#071330] font-sans">The Principles That Guide Us</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Genuine Quality',
                  desc: 'We never compromise on product authenticity. Every single handle, channel, or plywood sheet is certified and 100% genuine.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                    </svg>
                  )
                },
                {
                  title: 'Reliable Delivery',
                  desc: 'Construction and interiors depend heavily on timelines. Our centralized logistics team guarantees quick, hassle-free bulk supply.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3-3m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3-3m3 0h1.125c.621 0 1.129-.504 1.09-1.124l-.317-5.072a1.875 1.875 0 00-1.848-1.754h-2.181a.75.75 0 00-.75.75V18.75m-6 0V11.25M3.75 11.25h9.75M16.5 11.25h2.625m-15.75 3h12" />
                    </svg>
                  )
                },
                {
                  title: 'Partnership Spirit',
                  desc: 'We do not run transactional sales. We cultivate long-term alliances with brand manufacturers and dealer chains based on trust.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.005 9.005 0 00-4.72-6.47M18 18.72a9 9 0 004.72-6.47M18 18.72V17a3 3 0 00-3-3H9a3 3 0 00-3 3v1.72M18 18.72a9 9 0 00-12 0M12 10a4 4 0 110-8 4 4 0 010 8z" />
                    </svg>
                  )
                },
                {
                  title: 'Diverse Catalog',
                  desc: 'From simple budget drawer channels to sophisticated smart locks and designer hardware fittings, we hold it all under one roof.',
                  icon: (
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25A2.25 2.25 0 0113.5 8.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                    </svg>
                  )
                }
              ].map((val, idx) => (
                <div key={idx} className="bg-white border border-[#ebd8a1]/25 p-6 rounded-2xl flex flex-col items-center text-center shadow-[0_4px_12px_rgba(0,0,0,0.015)] hover:shadow-md transition-all duration-300">
                  <div className="text-[#38a12c] mb-4 bg-[#38a12c]/5 w-14 h-14 rounded-full flex items-center justify-center">
                    {val.icon}
                  </div>
                  <h4 className="text-base font-extrabold text-[#071330] mb-2">{val.title}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Warehouse & Distribution Network Details */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Panel: visual list */}
            <div className="lg:col-span-5 order-last lg:order-first relative group">
              <div className="absolute inset-0 bg-[#ebd8a1] rounded-3xl -rotate-2 opacity-15 group-hover:rotate-0 transition-transform duration-300" />
              <div className="relative z-10 bg-[#071330] text-white p-8 rounded-3xl shadow-xl border border-slate-800 flex flex-col gap-6">
                <h4 className="text-lg font-black text-[#C9A44C]">Logistics &amp; Infrastructure</h4>
                <div className="flex flex-col gap-4">
                  {[
                    { title: 'Secure Handling', desc: 'Protected timber and moisture-proof fittings storage.' },
                    { title: 'Fleet Network', desc: 'Direct shipping and freight partners for regional dispatch.' },
                    { title: 'Instant Stock Updates', desc: 'Digital tracking systems to provide real-time B2B stock details.' }
                  ].map((infra, idx) => (
                    <div key={idx} className="flex gap-4">
                      <span className="w-6 h-6 rounded-full bg-[#38a12c] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">✓</span>
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-bold">{infra.title}</span>
                        <span className="text-xs text-slate-400 mt-0.5 font-medium leading-relaxed">{infra.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Panel: Content details */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#a88634]">DISTRIBUTION NETWORK</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[#071330] font-sans">
                Supplying Projects of Every Scale Across the Region
              </h2>
              
              <div className="flex flex-col gap-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  With strong fleet connections, we distribute building materials to a vast grid of hardware dealers, retail outlets, and commercial projects across Telangana and neighboring states. 
                </p>
                <p>
                  Whether you are planning a modern modular kitchen manufacturing setup or executing a grand commercial tower development, we supply top-tier fittings and structural timber panels exactly when you require them, avoiding project delays and budget overflows.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-2">
                <button
                  onClick={() => onNavigateHome('#home')}
                  className="bg-[#071330] hover:bg-[#0c1e43] text-white px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Explore Products
                </button>
                <button
                  onClick={() => onNavigateHome('#contact')}
                  className="border border-[#ebd8a1] text-[#071330] hover:bg-[#fcf7ea] px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  Contact Dealer Zone
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Clean Bottom CTA Banner */}
      <section className="py-12 bg-gradient-to-r from-[#071330] to-[#0c1e43] text-white">
        <div className="max-w-5xl mx-auto px-4 text-center flex flex-col gap-6 items-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold font-sans">Experience the Pakshal Commitment</h3>
          <p className="text-sm text-slate-300 max-w-xl leading-relaxed font-medium">
            Contact us today for direct wholesale price lists, bulk lumber rates, or hardware catalogs. Our team is ready to serve you.
          </p>
          <button
            onClick={() => onNavigateHome('#contact')}
            className="bg-[#38a12c] hover:bg-[#2e8a23] text-white px-8 py-4 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-green-950/25 cursor-pointer"
          >
            Become a Registered Dealer
          </button>
        </div>
      </section>

    </div>
  );
};
