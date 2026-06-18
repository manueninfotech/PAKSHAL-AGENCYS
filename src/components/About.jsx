import React from 'react';

export const About = ({ onNavigate }) => {
  const checkItems = [
    {
      label: 'Years of Experience',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: 'Strong Market Presence',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      label: 'Genuine Products',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    },
    {
      label: 'Trusted Distribution Network',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      )
    },
    {
      label: 'Professional Customer Support',
      icon: (
        <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="about" className="py-12 bg-white text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Panel: Warehouse Image */}
          <div className="lg:col-span-5 relative group">
            <div className="absolute inset-0 bg-emerald-500 rounded-2xl rotate-3 scale-98 opacity-5 group-hover:rotate-2 transition-transform duration-300" />
            <img
              src={`${import.meta.env.BASE_URL}about-warehouse.png`}
              alt="Forklift in Timber warehouse"
              className="relative z-10 w-full h-[450px] object-cover rounded-2xl shadow-xl border border-slate-100"
            />
          </div>

          {/* Right Panel: Content Details */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left">
            <div className="text-emerald-600 font-extrabold uppercase tracking-wider text-[10px]">
              About Pakshal Agencies
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-slate-900">
              Trusted Partner for Interior &amp; Construction Materials
            </h2>

            <div className="flex flex-col gap-4 text-slate-900 text-sm leading-relaxed font-semibold">
              <p>
                Pakshal Agencies is a leading distributor of premium plywood, laminates, fancy doors, hardware fittings, kitchen accessories, sliding systems and furniture hardware solutions.
              </p>
              <p>
                We serve architects, interior designers, builders, contractors, furniture manufacturers &amp; dealers with genuine products, competitive pricing and reliable supply support.
              </p>
            </div>

            {/* Checklist Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {checkItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 py-1.5">
                  <div className="text-emerald-600 shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-xs font-extrabold text-slate-950 tracking-wide">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex justify-start">
              <button
                onClick={onNavigate}
                className="inline-flex items-center gap-2 bg-[#38a12c] hover:bg-[#2e8a23] text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-green-900/10 cursor-pointer"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
