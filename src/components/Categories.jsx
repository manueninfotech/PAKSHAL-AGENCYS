import React from 'react';
import laminates from '../assets/laminates.png';
import doorfittings from '../assets/door_fittings.png';
import fancydoors from '../assets/fancydoors.png';
import hardwarefittings from '../assets/hardwarefittings.png';
import kitchenaccessories from '../assets/kitchenaccessories.png';
import slidingchannels from '../assets/slidingchannels.png';
import tandemboxes from '../assets/tandembox.png';


export const Categories = ({ onNavigate }) => {
  const getCategoryQuery = (title) => {
    switch (title) {
      case 'Plywood': return 'plywood';
      case 'Laminates': return 'laminates';
      case 'Fancy Doors': return 'fancy-doors';
      case 'Hardware Fittings': return 'hardware';
      case 'Door Fittings': return 'door-fittings';
      case 'Kitchen Accessories': return 'kitchen-accessories';
      case 'Sliding Channels': return 'sliding-channels';
      case 'Tandem Boxes': return 'tandem-boxes';
      default: return '';
    }
  };
  const categoriesList = [
    {
      title: 'Plywood',
      desc: 'Premium plywood for every application',
      img: laminates,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v16.5M20.25 3v16.5M3 5.25h18M3 9.75h18M3 14.25h18M3 18.75h18" />
        </svg>
      )
    },
    {
      title: 'Laminates',
      desc: 'Decorative laminates for beautiful interiors',
      img: laminates,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h12M6 12h12M6 18h12M4 3h16a1 1 0 011 1v16a1 1 0 01-1 1H4a1 1 0 01-1-1V4a1 1 0 011-1z" />
        </svg>
      )
    },
    {
      title: 'Fancy Doors',
      desc: 'Designer doors for stylish spaces',
      img: fancydoors,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0110.5 3h3a2.25 2.25 0 012.25 2.25V9m-9 0H18m-9 0v10.5a2.25 2.25 0 002.25 2.25h3a2.25 2.25 0 002.25-2.25V9m-9 0h9" />
        </svg>
      )
    },
    {
      title: 'Hardware Fittings',
      desc: 'Premium hardware for perfect functionality',
      img: hardwarefittings,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.085L21 5.5m0 0l-4.5 4.5M21 5.5l-4.5-4.5M12.58 8.915L3 18.5m0 0l4.5-4.5M3 18.5l4.5 4.5" />
        </svg>
      )
    },
    {
      title: 'Door Fittings',
      desc: 'Premium range of door accessories',
      img: doorfittings,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5M3 9h18M3 15h18" />
        </svg>
      )
    },
    {
      title: 'Kitchen Accessories',
      desc: 'Smart solutions for modular kitchens',
      img: kitchenaccessories,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21V3m0 18a9 9 0 000-18m0 0a9.004 9.004 0 018.716 6.747M12 3a9.004 9.004 0 00-8.716 6.747" />
        </svg>
      )
    },
    {
      title: 'Sliding Channels',
      desc: 'Smooth & silent sliding systems',
      img: slidingchannels,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.25h18M3 15.75h18" />
        </svg>
      )
    },
    {
      title: 'Tandem Boxes',
      desc: 'Premium drawer solutions',
      img: tandemboxes,
      icon: (
        <svg className="w-5 h-5 text-[#7A5C12]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
        </svg>
      )
    }
  ];

  return (
    <section id="products" className="py-12 bg-white text-slate-900 border-t border-slate-100">
      <div className="max-w-[97%] xl:max-w-[1680px] mx-auto px-2 sm:px-4 lg:px-6 text-center flex flex-col gap-10">

        {/* Header Title */}
        <div className="flex flex-col items-center gap-2">
          <span className="text-[#C9A44C] font-extrabold uppercase tracking-widest text-[11px]">
            OUR PRODUCT CATEGORIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans">
            Everything Your Project Needs
          </h2>
        </div>

        {/* Categories Grid - 3 Columns on Large Screens, Centered Last Row */}
        <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          {categoriesList.map((cat, idx) => {
            const query = getCategoryQuery(cat.title);
            const basePrefix = window.location.pathname.startsWith('/PAKSHAL-AGENCYS') ? '/PAKSHAL-AGENCYS' : '';
            return (
              <a
                key={idx}
                href={`${basePrefix}/products?category=${query}`}
                rel="nofollow"
                onClick={(e) => {
                  e.preventDefault();
                  if (onNavigate) {
                    onNavigate('products', '', `?category=${query}`);
                  }
                }}
                className="group relative rounded-2xl overflow-hidden border border-[#C9A44C]/25 h-48 sm:h-60 flex items-center p-5 sm:p-6 bg-[#f5ecd0] shadow-[0_4px_20px_rgba(201,164,76,0.08)] cursor-pointer select-none w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)]"
              >
                {/* Background Image on Right Half */}
                <div
                  className="absolute right-0 top-0 bottom-0 w-[55%] bg-cover bg-center"
                  style={{ backgroundImage: `url('${cat.img}')` }}
                />

                {/* Fading Light Gold Overlay - covering left and fading mid-right */}
                <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#f5ecd0] via-[#f5ecd0] via-[48%] to-transparent z-5" />

                {/* Text & Icon Content */}
                <div className="relative z-10 text-left flex flex-col justify-between h-full w-[62%]">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-shrink-0">
                        {cat.icon}
                      </div>
                      <h3 className="text-[15px] sm:text-base font-black text-[#071330] tracking-tight leading-none">
                        {cat.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 font-bold leading-normal max-w-[95%] line-clamp-2">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Arrow Icon */}
                  <div className="mt-auto text-[#7A5C12]">
                    <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="3.2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
