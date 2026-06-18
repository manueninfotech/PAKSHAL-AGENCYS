import React, { useRef } from 'react';
import marinePlywoodImg from '../assets/homepage-marineplywood.png';
import decorativeLaminatesImg from '../assets/laminates.png';
import designerDoorImg from '../assets/fancydoors.png';
import drawerChannelImg from '../assets/slidingchannels.png';
import kitchenBasketImg from '../assets/kitchenaccessories.png';
import tandemBoxImg from '../assets/tandembox.png';

export const FeaturedProducts = () => {
  const sliderRef = useRef(null);

  const products = [
    { title: 'Marine Plywood', desc: 'Premium Quality', img: marinePlywoodImg },
    { title: 'Decorative Laminates', desc: 'High Pressure Laminates', img: decorativeLaminatesImg },
    { title: 'Designer Door', desc: 'Premium Finish', img: designerDoorImg },
    { title: 'Soft Close Hinges', desc: 'Smooth Performance', img: `${import.meta.env.BASE_URL}hardware-hinge.png` },
    { title: 'Drawer Channel', desc: 'Heavy Duty', img: drawerChannelImg },
    { title: 'Kitchen Basket', desc: 'Stainless Steel', img: kitchenBasketImg },
    { title: 'Tandem Box', desc: 'Premium Drawer', img: tandemBoxImg }
  ];

  const scroll = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 360;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 bg-white border-t border-slate-200/50 text-left select-none overflow-hidden">
      <div className="max-w-[97%] xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 flex flex-col gap-10">

        {/* Header Block with Slider Controls */}
        <div className="flex justify-between items-end gap-6">
          <div className="flex flex-col gap-2">
            <span className="text-emerald-600 font-extrabold uppercase tracking-widest text-[11px]">
              FEATURED PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-slate-900">
              Premium Quality, Trusted Performance.
            </h2>
          </div>

          {/* Slider buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer hover:shadow active:scale-95"
              aria-label="Scroll left"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-slate-200/80 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-600 hover:text-slate-900 transition-colors shadow-sm cursor-pointer hover:shadow active:scale-95"
              aria-label="Scroll right"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Products Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth w-full py-4 no-scrollbar scrollbar-none snap-x snap-mandatory"
          style={{
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {products.map((prod, idx) => (
            <div
              key={idx}
              className="flex-none w-[250px] sm:w-[calc((100%-24px)/2)] md:w-[calc((100%-24px*2)/3)] lg:w-[calc((100%-24px*3)/4)] xl:w-[calc((100%-24px*4)/5)] snap-start flex flex-col"
            >
              {/* Product Image Card Container */}
              <div className="w-full aspect-square rounded-2xl border border-slate-200/60 bg-slate-50/40 overflow-hidden relative group cursor-pointer hover:shadow-md hover:border-slate-300 transition-all duration-300">
                <img
                  src={prod.img}
                  alt={prod.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              {/* Product Info below the Card */}
              <div className="mt-4 flex flex-col items-start text-left gap-1 px-1">
                <h3 className="text-[15px] font-extrabold text-slate-900 tracking-tight leading-snug">
                  {prod.title}
                </h3>
                <span className="text-xs text-slate-500 font-semibold leading-normal">
                  {prod.desc}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
