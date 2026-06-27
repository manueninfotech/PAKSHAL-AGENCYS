import { useState, useEffect } from 'react';

// Import local image assets
import marinePlywood from '../assets/homepage-marineplywood.png';
import veneers from '../assets/veneer2.png';
import laminates from '../assets/laminates.png';
import hardwareFittings from '../assets/hardwarefittings.png';
import doors from '../assets/fancydoors.png';

const COLLECTIONS = [
  {
    title: "MARINE PLYWOOD",
    subtitle: "Strong. Durable. Reliable.",
    image: marinePlywood
  },
  {
    title: "VENEERS",
    subtitle: "Natural Beauty. Perfect Finish",
    image: veneers
  },
  {
    title: "LAMINATES",
    subtitle: "Style That Stands Out",
    image: laminates
  },
  {
    title: "HARDWARE FITTINGS",
    subtitle: "Precision in Every Detail",
    image: hardwareFittings
  },
  {
    title: "DOORS & ACCESSORIES",
    subtitle: "Complete Your Interior",
    image: doors
  }
];

export const PremiumCollections = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Middle index (Laminates) is active by default
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  // Update width on resize for responsive coverflow spacing
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  const handleCardClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex((prev) => (prev + 1) % COLLECTIONS.length);
    } else {
      setActiveIndex(index);
    }
  };

  // Determine spacing based on viewport width
  const getSpacing = () => {
    if (windowWidth < 640) return 90; // Mobile
    if (windowWidth < 768) return 140; // Small tablet
    if (windowWidth < 1024) return 180; // Large tablet
    return 240; // Desktop
  };

  const spacing = getSpacing();

  return (
    <section className="pt-6 pb-16 px-4 bg-[#FAF8F5] overflow-hidden select-none text-center font-sans border-b border-[#C9A44C]/10">
      
      {/* Title block matching user screenshot */}
      <div className="max-w-7xl mx-auto mb-10 text-center flex flex-col items-center">
        <span className="text-[10.5px] font-black uppercase tracking-[0.25em] text-[#C9A44C] block leading-none">
          EXPLORE OUR
        </span>
        <h2 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-[#1C1917] leading-tight mt-3">
          PREMIUM COLLECTIONS
        </h2>
        
        {/* Horizontal Gold Line flourishes on subtitle */}
        <div className="flex items-center gap-4 mt-3 max-w-lg w-full justify-center">
          <div className="w-12 sm:w-20 h-[1.5px] bg-[#C9A44C]/45" />
          <p className="text-[11px] sm:text-xs text-slate-550 font-bold uppercase tracking-wider whitespace-nowrap">
            Wide Range of Plywood, Laminates, Veneers, Hardware & More
          </p>
          <div className="w-12 sm:w-20 h-[1.5px] bg-[#C9A44C]/45" />
        </div>
      </div>

      {/* 3D Coverflow Container */}
      <div className="relative max-w-7xl mx-auto h-[460px] flex items-center justify-center">
        


        {/* 3D Perspective Card Wrapper */}
        <div 
          className="relative w-full max-w-[90%] md:max-w-4xl h-[380px] flex items-center justify-center"
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d'
          }}
        >
          {COLLECTIONS.map((item, idx) => {
            // Calculate distance offset from activeIndex
            let offset = idx - activeIndex;

            // Handle wrap-around offsets so transition is continuous
            if (offset < -Math.floor(COLLECTIONS.length / 2)) {
              offset += COLLECTIONS.length;
            } else if (offset > Math.floor(COLLECTIONS.length / 2)) {
              offset -= COLLECTIONS.length;
            }

            const isActive = offset === 0;

            // Formulate card style transformations based on offset
            const style = {
              transform: `translateX(${offset * spacing}px) scale(${isActive ? 1.05 : 0.82}) rotateY(${offset * -24}deg) translateZ(${Math.abs(offset) * -120}px)`,
              zIndex: 10 - Math.abs(offset),
              opacity: Math.abs(offset) > 2 ? 0 : 0.70 + (isActive ? 0.30 : 0),
              transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.65s cubic-bezier(0.4, 0, 0.2, 1), z-index 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
              WebkitBoxReflect: 'below 6px linear-gradient(transparent 62%, rgba(255, 255, 255, 0.16))',
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            };

            return (
              <div
                key={idx}
                onClick={() => handleCardClick(idx)}
                style={style}
                className={`absolute w-[280px] sm:w-[380px] md:w-[440px] h-[220px] sm:h-[260px] md:h-[300px] rounded-[1.8rem] border border-[#C9A44C]/25 bg-stone-900 overflow-hidden shadow-2xl transition-all cursor-pointer flex flex-col justify-end p-5 md:p-6 group select-none`}
              >
                {/* Background Full-Cover Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 brightness-[0.72] group-hover:brightness-[0.76]"
                />
                
                {/* Dynamic Bottom Overlay Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent z-0 pointer-events-none" />

                {/* Text and Button Layer */}
                <div className="relative z-10 text-left flex flex-col gap-1 sm:gap-2">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-white leading-tight uppercase font-sans tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-stone-300 font-bold uppercase tracking-wider leading-snug">
                    {item.subtitle}
                  </p>
                  
                  {/* Explore Button */}
                  <div className="mt-3">
                    <button className="px-4.5 py-2 bg-gradient-to-r from-[#ebd8a1] to-[#C9A44C] hover:from-[#FAF2DF] hover:to-[#ebd8a1] text-slate-900 font-black text-[9px] uppercase tracking-wider rounded-lg transition-all flex items-center gap-1.5 shadow">
                      Explore
                      <span className="font-extrabold text-[10px]">&rarr;</span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Pager Dots Navigation */}
      <div className="flex justify-center items-center gap-2.5 mt-8">
        {COLLECTIONS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => handleDotClick(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
              idx === activeIndex 
                ? 'bg-[#C9A44C] scale-125' 
                : 'bg-stone-300 hover:bg-[#ebd8a1]/60'
            }`}
          />
        ))}
      </div>

    </section>
  );
};
