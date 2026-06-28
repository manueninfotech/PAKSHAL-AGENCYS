import React, { useEffect } from 'react';
import plywoodImg from '../assets/plywood-image.png';
import laminatesImg from '../assets/laminates.png';
import hardwareImg from '../assets/hardwarefittings.png';
import accessoriesImg from '../assets/kitchenaccessories.png';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const AboutPage = ({ onNavigateHome }) => {
  useDocumentMetadata(
    "About Pakshal | Plywood & Hardware Distributor",
    "Learn about Pakshal Agencies, a trusted distributor of premium plywood, veneers, decorative laminates, and luxury furniture fittings in Hyderabad since 2011."
  );

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="w-full bg-[#FAF8F5] text-slate-800 select-none text-left pt-14 font-sans">

      {/* SECTION 1: Premium Visual Hero Split-Screen Layout (85-100vh height) */}
      <div className="w-full min-h-[85vh] lg:h-screen bg-[#FAF8F5] flex flex-col lg:flex-row items-stretch overflow-hidden border-b border-[#C9A44C]/15 relative">

        {/* LEFT SIDE: Elegant Editorial Brand Story (40% Width) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-between py-12 px-6 sm:px-12 lg:py-20 lg:pl-24 lg:pr-12 bg-[#FAF8F5] min-h-[450px] lg:min-h-screen z-10">

          {/* Top Info Area */}
          <div className="flex flex-col gap-2 self-start">
            <span className="text-[10px] font-black uppercase tracking-[0.22em] text-[#C9A44C] block leading-none">
              ESTABLISHED 2011 • HYDERABAD'S PREMIER DISTRIBUTOR
            </span>
            <div className="flex items-center gap-2 text-[#C9A44C] font-bold text-[10px] tracking-[0.3em] uppercase">
              <span className="w-6 h-[1.5px] bg-[#C9A44C]" />
              ABOUT US
            </div>
          </div>

          {/* Central Magazine-Style Editorial Block */}
          <div className="flex flex-col gap-6 my-auto max-w-md">
            {/* Luxury Editorial Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-sans font-black tracking-tight text-[#1C1917] leading-[1.15]">
              Building Quality.<br />
              <span className="text-[#C9A44C] italic font-sans font-extrabold">Delivering Trust.</span>
            </h1>

            {/* Luxury Magazine Description */}
            <div className="flex flex-col gap-4 text-sm sm:text-base lg:text-[17px] text-[#1C1917] leading-relaxed font-semibold tracking-wide">
              <p>
                Pakshal Agencies is a trusted name in the plywood, laminates, hardware and interior accessory industry. Since our inception, we have been committed to providing high quality products, exceptional service and lasting relationships.
              </p>
              <p>
                As a premier distributor, we bridge the gap between global manufacturers and regional creations. By maintaining centralized, state-of-the-art warehouses, we ensure that bulk demands are met on time with 100% genuine products.
              </p>
            </div>
          </div>

          {/* Bottom Features */}
          <div className="mt-2 pt-4 border-t border-slate-200 flex flex-wrap gap-x-4 gap-y-2 items-center">
            <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-wider text-slate-800 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
              100% Genuine Brands
            </div>
            <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-wider text-slate-800 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
              Centralized Warehousing
            </div>
            <div className="flex items-center gap-2 text-[10px] font-extrabold tracking-wider text-slate-800 uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A44C]" />
              Prompt Bulk Delivery
            </div>
          </div>

        </div>

        {/* RIGHT SIDE: Full-Bleed Immersive Showroom Visual (60% Width) */}
        <div className="w-full lg:w-[60%] relative min-h-[400px] lg:h-screen z-0">
          <img
            src={`${import.meta.env.BASE_URL}showroom-reception.png`}
            alt="Pakshal Agencies modern Experience Centre reception with wooden slats, black stone wall, and gold branding"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Left blend gradient: Blends the left warm ivory background smoothly into the photo's slatted wood paneling */}
          <div className="absolute inset-y-0 left-0 w-[35%] bg-gradient-to-r from-[#FAF8F5] via-[#FAF8F5]/45 to-[#FAF8F5]/0 z-10 pointer-events-none" />

          {/* Bottom blend gradient: Blends the bottom edge of the photo smoothly into the lower layout */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/30 to-[#FAF8F5]/0 z-10 pointer-events-none" />
        </div>

      </div>

      {/* SECTION 2: Our Story & Timeline (Premium Split-Screen Layout with Image on Left) */}
      <div className="w-full min-h-[85vh] lg:h-screen bg-[#FAF8F5] flex flex-col lg:flex-row-reverse items-stretch overflow-hidden border-b border-[#C9A44C]/15 relative">

        {/* RIGHT SIDE: Elegant Editorial Brand Story (40% Width) */}
        <div className="w-full lg:w-[40%] flex flex-col justify-start gap-8 py-12 px-6 sm:px-12 lg:pt-20 lg:pb-36 lg:pl-12 lg:pr-24 bg-[#FAF8F5] min-h-[450px] lg:min-h-screen z-10">

          {/* Top Info Area */}
          <div className="flex items-center gap-4 text-[#C9A44C] font-black text-xs sm:text-sm tracking-[0.3em] uppercase self-start">
            OUR STORY
            <span className="w-20 h-[2px] bg-[#C9A44C]" />
          </div>

          {/* Central Magazine-Style Editorial Block */}
          <div className="flex flex-col gap-6 max-w-md">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-sans font-black tracking-tight text-[#1C1917] leading-[1.15]">
              From a Vision<br />
              to a <span className="text-[#C9A44C] italic font-sans font-extrabold mr-2">Trusted</span> Name
            </h2>

            <div className="flex flex-col gap-4 text-sm sm:text-base lg:text-[17px] text-stone-600 leading-relaxed font-normal tracking-wide">
              <p>
                What began as a small step with a big vision has today grown into a trusted partnership with thousands of satisfied customers. Our journey is built on hard work, honesty and a passion for quality.
              </p>
              <p>
                Over the years, we have continuously evolved to bring the best materials and latest innovations to help create beautiful, functional and lasting spaces.
              </p>
            </div>
          </div>

        </div>

        {/* LEFT SIDE: Full-Bleed Container but Contained Visual (60% Width) */}
        <div className="w-full lg:w-[60%] flex flex-col justify-between bg-[#FAF8F5] py-12 px-6 sm:px-12 lg:pt-20 lg:pb-36 lg:pl-16 lg:pr-8 min-h-[400px] lg:h-screen z-0">

          {/* Sketch Image Container (contained and padded to increase its size) */}
          <div className="flex-1 flex items-start justify-center bg-[#FAF8F5] p-0 overflow-hidden">
            <img
              src={`${import.meta.env.BASE_URL}showroom-sketch1.png`}
              alt="Pakshal Agencies Building Concept Sketch"
              className="max-h-[550px] sm:max-h-[650px] lg:max-h-[850px] w-full h-auto object-contain transform hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

        </div>

        {/* Timeline Bar (positioned absolutely at the bottom across the entire width of both columns) */}
        <div className="absolute bottom-0 left-0 right-0 w-full px-8 sm:px-16 lg:px-32 pb-8 pt-8 bg-[#FAF8F5]/90 backdrop-blur-sm z-20">
          {/* Horizontal line */}
          <div className="absolute left-[12.5%] right-[12.5%] top-[40px] h-[2px] bg-[#C9A44C]/35 z-0" />

          {/* Timeline Items */}
          <div className="relative z-10 flex justify-between items-start">
            {[
              { title: ['Our', 'Beginning'], sub: 'Early Years' },
              { title: ['Expanding', 'Our Range'], sub: 'Growth' },
              { title: ['Building', 'Strong Relationships'], sub: 'Trust' },
              { title: ['Continuing', 'to Serve Better'], sub: 'Today' }
            ].map((milestone, idx) => (
              <div key={idx} className="flex flex-col items-center text-center flex-1">
                {/* Node point */}
                <div className="w-4 h-4 rounded-full bg-[#8E7640] border-2 border-white shadow-md mb-3 z-10" />

                {/* Label */}
                <h4 className="text-xs sm:text-sm font-sans font-extrabold text-slate-900 leading-snug">
                  {milestone.title[0]}<br />{milestone.title[1]}
                </h4>
                <span className="text-[10px] sm:text-xs text-slate-500 font-bold mt-1 tracking-wider uppercase font-sans">
                  ( {milestone.sub} )
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* SECTION 3: What Drives Us (Values) */}
      <section className="relative w-full pt-10 pb-16 px-4 sm:px-6 lg:px-8 bg-[#FDFBF9] border-b border-[#C9A44C]/10">
        <div className="max-w-7xl mx-auto flex flex-col gap-4 text-center items-center">

          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center justify-center gap-3 text-[#C9A44C] font-black text-xs sm:text-sm tracking-[0.3em] uppercase">
              <span className="w-12 h-[2px] bg-[#C9A44C]" />
              WHAT DRIVES US
              <span className="w-12 h-[2px] bg-[#C9A44C]" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#1C1917] leading-tight">
              Values That Define Us
            </h2>
          </div>

          {/* Five Values Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-0 w-full mt-0 md:divide-x md:divide-[#ebd8a1]/30">
            {[
              {
                title: 'QUALITY',
                desc: 'We provide only premium quality products from trusted brands.',
                icon: (
                  <svg className="w-9 h-9 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                )
              },
              {
                title: 'TRUST',
                desc: 'Built on honesty, transparency and long term relationships.',
                icon: (
                  <svg className="w-9 h-9 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                  </svg>
                )
              },
              {
                title: 'RELIABILITY',
                desc: 'Timely service and consistent support you can always count on.',
                icon: (
                  <svg className="w-9 h-9 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12a7.5 7.5 0 11-15 0 7.5 7.5 0 0115 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 18.75l3-3 3 3M12 15.75v5.25" />
                  </svg>
                )
              },
              {
                title: 'INNOVATION',
                desc: 'We keep evolving with the latest trends and better solutions.',
                icon: (
                  <svg className="w-9 h-9 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                  </svg>
                )
              },
              {
                title: 'CUSTOMER FIRST',
                desc: 'Your satisfaction is our priority in everything we do.',
                icon: (
                  <svg className="w-9 h-9 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 18v-6a9 9 0 0118 0v6" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3v5zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3v5z" />
                  </svg>
                )
              }
            ].map((value, idx) => (
              <div key={idx} className="flex flex-col items-center px-4 py-6 text-center gap-4 transition-all duration-300 hover:translate-y-[-2px]">
                <div className="mb-2 w-14 h-14 rounded-full flex items-center justify-center bg-[#C9A44C]/5 border border-[#C9A44C]/10 shadow-[0_4px_12px_rgba(201,164,76,0.03)]">
                  {value.icon}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[#1c1917] tracking-widest uppercase font-sans">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed max-w-[200px] mx-auto">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 4: What We Do (Slanted Products Showcase) */}
      <section className="relative w-full py-16 px-4 sm:px-6 lg:px-8 bg-[#f5ecd0] text-slate-800 border-b border-[#ebd8a1]/30">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-12">

            {/* Description Details Left */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="flex items-center gap-2 text-[#38a12c] font-bold text-[10px] tracking-[0.3em] uppercase">
                <span className="w-6 h-[1.5px] bg-[#38a12c]" />
                WHAT WE DO
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-sans font-black tracking-tight text-slate-900 leading-[1.15]">
                Redefining Spaces<br />
                With <span className="text-[#38a12c] italic font-extrabold">Quality</span> Products
              </h2>

              <p className="text-sm sm:text-base lg:text-[17px] text-slate-600 font-medium leading-relaxed">
                We offer a complete range of interior solutions that combine aesthetics with durability. From premium plywood and laminates to high quality hardware and accessories – we have everything you need to create beautiful spaces.
              </p>
            </div>

            {/* Slanted panels container Right */}
            <div className="lg:col-span-7">
              {/* Mobile Layout (Clean 2-column Grid) */}
              <div className="grid grid-cols-2 gap-4 md:hidden">
                {[
                  { title: 'Plywood', img: plywoodImg },
                  { title: 'Laminates', img: laminatesImg },
                  { title: 'Hardware', img: hardwareImg },
                  { title: 'Accessories', img: accessoriesImg }
                ].map((item, idx) => (
                  <div key={idx} className="relative h-[180px] rounded-xl overflow-hidden shadow-sm group">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 brightness-[0.7] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:opacity-45 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-0 right-0 text-center px-2">
                      <span className="text-[8px] text-[#C9A44C] tracking-widest font-extrabold uppercase block mb-0.5">Pakshal</span>
                      <h3 className="text-xs font-sans font-bold text-white uppercase">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop Layout (Flawless Slanted Clip-Path Panel) */}
              <div className="hidden md:block relative w-full h-[400px] select-none overflow-hidden rounded-2xl border border-[#ebd8a1]/30 bg-[#f5ecd0]">
                {[
                  { title: 'Plywood', img: plywoodImg, clip: 'polygon(0 0, 27% 0, 23% 100%, 0 100%)', textLeft: 'left-[12.5%]' },
                  { title: 'Laminates', img: laminatesImg, clip: 'polygon(27% 0, 52% 0, 48% 100%, 23% 100%)', textLeft: 'left-[36.5%]' },
                  { title: 'Hardware', img: hardwareImg, clip: 'polygon(52% 0, 77% 0, 73% 100%, 48% 100%)', textLeft: 'left-[61.5%]' },
                  { title: 'Accessories', img: accessoriesImg, clip: 'polygon(77% 0, 100% 0, 100% 100%, 73% 100%)', textLeft: 'left-[87.5%]' }
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="absolute inset-0 transition-all duration-500 overflow-hidden group cursor-pointer border-r border-[#ebd8a1]/20"
                    style={{ clipPath: item.clip }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 brightness-[0.7] group-hover:brightness-100"
                    />
                    {/* Shadow overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent group-hover:opacity-45 transition-opacity duration-500" />

                    {/* Label */}
                    <div className={`absolute bottom-6 ${item.textLeft} -translate-x-1/2 text-center w-[120px] pointer-events-none transition-transform duration-500`}>
                      <span className="text-[9px] text-[#C9A44C] tracking-[0.25em] font-extrabold uppercase block mb-1">Pakshal</span>
                      <h3 className="text-xs sm:text-sm font-sans font-bold text-white tracking-wider uppercase">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* SECTION 5: Our Journey in Numbers (Metrics) */}
      <section className="relative w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] border-y border-[#ebd8a1]/30">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 items-center">

          <div className="text-[#C9A44C] font-extrabold text-[9px] tracking-[0.3em] uppercase">
            OUR JOURNEY IN NUMBERS
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full divide-y md:divide-y-0 md:divide-x divide-[#ebd8a1]/35">
            {[
              {
                value: '10+',
                label: 'YEARS OF EXPERIENCE',
                icon: (
                  <svg className="w-10 h-10 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                    <circle cx="8" cy="14" r="0.8" />
                    <circle cx="12" cy="14" r="0.8" />
                    <circle cx="16" cy="14" r="0.8" />
                    <circle cx="8" cy="18" r="0.8" />
                    <circle cx="12" cy="18" r="0.8" />
                    <circle cx="16" cy="18" r="0.8" />
                  </svg>
                )
              },
              {
                value: '1000+',
                label: 'QUALITY PRODUCTS',
                icon: (
                  <svg className="w-10 h-10 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m-8-10l8 4m-8-4v10l8 4m0-10v10" />
                  </svg>
                )
              },
              {
                value: '5000+',
                label: 'HAPPY CUSTOMERS',
                icon: (
                  <svg className="w-10 h-10 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.005 9.005 0 00-4.72-6.47M18 18.72a9 9 0 004.72-6.47M18 18.72V17a3 3 0 00-3-3H9a3 3 0 00-3 3v1.72M18 18.72a9 9 0 00-12 0M12 10a4 4 0 110-8 4 4 0 010 8z" />
                  </svg>
                )
              },
              {
                value: '25+',
                label: 'CITIES SERVED',
                icon: (
                  <svg className="w-10 h-10 text-[#38a12c]" fill="none" stroke="currentColor" strokeWidth="1.2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                )
              }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center gap-2 pt-6 md:pt-0">
                <div className="mb-1">{stat.icon}</div>
                <div className="text-3xl sm:text-4xl font-sans font-black text-[#1C1917] leading-none tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[9px] font-extrabold text-slate-500 tracking-wider font-sans">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 6: Quote Banner */}
      <section className="relative w-full py-16 bg-[#f5ecd0] overflow-hidden text-slate-800 border-t border-[#ebd8a1]/30">
        {/* Decorative Stack of wood veneers on the right background */}
        <div className="absolute right-0 bottom-0 top-0 w-[40%] opacity-70 z-0 select-none pointer-events-none">
          <img
            src={`${import.meta.env.BASE_URL}plywood-bottom-stack.png`}
            alt="Plywood veneer stacks"
            className="w-full h-full object-cover object-right"
          />
          {/* Subtle gradient fading to left */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#f5ecd0] to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl text-left flex flex-col gap-6 md:pl-8 py-4">

            {/* Large gold quotes mark */}
            <span className="text-[#C9A44C] text-5xl font-sans leading-none h-4 -mb-2 select-none">“</span>

            <p className="text-lg sm:text-2xl font-sans font-bold text-slate-800 leading-relaxed italic pr-4">
              Our commitment is to deliver more than products, we deliver trust, quality and lasting relationships.
            </p>

            <span className="text-[#C9A44C] text-5xl font-sans leading-none h-4 text-right pr-12 select-none -mt-4">”</span>

          </div>
        </div>
      </section>

    </div>
  );
};
