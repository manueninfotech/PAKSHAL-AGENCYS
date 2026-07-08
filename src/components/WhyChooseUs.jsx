import React from 'react';
import { BadgeCheck, ShieldCheck, Boxes, Tag, Truck, Handshake } from 'lucide-react';

export const WhyChooseUs = () => {
  const points = [
    {
      title: 'Authorized Distributor',
      desc: 'We are authorized partners of leading global brands.',
      icon: <BadgeCheck className="w-7 h-7" strokeWidth={1.8} />
    },
    {
      title: 'Genuine Products',
      desc: '100% genuine & quality-assured products.',
      icon: <ShieldCheck className="w-7 h-7" strokeWidth={1.8} />
    },
    {
      title: 'Wide Product Range',
      desc: 'Everything you need under one roof.',
      icon: <Boxes className="w-7 h-7" strokeWidth={1.8} />
    },
    {
      title: 'Competitive Pricing',
      desc: 'Best prices for retailers & bulk projects.',
      icon: <Tag className="w-7 h-7" strokeWidth={1.8} />
    },
    {
      title: 'Bulk Supply Support',
      desc: 'Reliable supply for large & ongoing projects.',
      icon: <Truck className="w-7 h-7" strokeWidth={1.8} />
    },
    {
      title: 'Trusted Dealer Network',
      desc: 'Strong network of dealers across the region.',
      icon: <Handshake className="w-7 h-7" strokeWidth={1.8} />
    }
  ];

  return (
    <section id="why-choose-us" className="py-10 bg-white select-none">
      <div className="max-w-[98.5%] xl:max-w-[1780px] mx-auto px-1 sm:px-2">
        <div className="bg-[#fcf7ea] rounded-3xl border border-[#ebd8a1]/30 p-6 sm:p-8 md:p-10 text-center flex flex-col gap-8 shadow-[0_12px_45px_rgba(201,164,76,0.08)]">

          {/* Header Title inside Gold Container */}
          <div className="flex flex-col items-center">
            <div className="flex items-center justify-center gap-3 w-full max-w-lg mx-auto">
              <div className="h-[1.5px] w-10 bg-[#071330]/15 rounded-full" />
              <span className="text-[#071330] font-extrabold uppercase tracking-widest text-[10px] sm:text-[11px]">
                WHY CHOOSE PAKSHAL AGENCIES
              </span>
              <div className="h-[1.5px] w-10 bg-[#071330]/15 rounded-full" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans text-[#071330] mt-4">
              Your <span className="text-[#38a12c]">Trust.</span> Our Commitment.
            </h2>
          </div>

          {/* Points Grid - 6 Columns on Extra Large Screens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            {points.map((point, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center text-center p-5 bg-white border border-[#ebd8a1]/25 rounded-2xl transition-all duration-300 hover:-translate-y-1 group shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-md"
              >
                {/* Icon Container */}
                <div className="mb-4 w-14 h-14 rounded-2xl bg-[#38a12c]/8 border border-[#38a12c]/15 flex items-center justify-center text-[#38a12c] transition-all duration-300">
                  {point.icon}
                </div>

                {/* Title */}
                <h3 className="text-[17px] font-extrabold text-[#071330] tracking-tight leading-snug min-h-[45px] flex items-center justify-center">
                  {point.title}
                </h3>

                {/* Divider Line */}
                <div className="w-6 h-[1.5px] bg-[#38a12c]/20 my-3 rounded-full" />

                {/* Description */}
                <p className="text-[13.5px] text-slate-600 leading-relaxed font-semibold">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
