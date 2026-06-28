import { useState, useEffect } from 'react';
import { 
  Flame, Layers, Gift, Settings, HardHat, ArrowUpRight, X, MessageCircle, Check 
} from 'lucide-react';

// Local static fallback images for card background overlays
import plywoodBg from '../assets/homepage-marineplywood.png';
import laminatesBg from '../assets/laminates2.png';
import hardwareBg from '../assets/hardwarefittings.png';

const FALLBACK_OFFERS = [
  {
    id: "1",
    category: "Marine Plywood",
    badge: "UP TO",
    title: "10% Off",
    description: "ON SELECTED PRODUCTS",
    validUntil: "2026-07-31",
    terms: "Valid on premium calibrated BWP marine plywood. Minimum order of 25 sheets.",
    image: ""
  },
  {
    id: "2",
    category: "Laminates",
    badge: "UP TO",
    title: "19% Off",
    description: "ON SELECTED PRODUCTS",
    validUntil: "2026-08-15",
    terms: "Purchase laminate sheets and adhesive together to get additional cashbacks.",
    image: ""
  },
  {
    id: "3",
    category: "Hardware",
    badge: "UP TO",
    title: "13% Off",
    description: "ON SELECTED PRODUCTS",
    validUntil: "No Expiry",
    terms: "Custom wholesale pricing active for verified dealers and contractors.",
    image: ""
  }
];

export const OffersSection = () => {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedOffer, setSelectedOffer] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);

  useEffect(() => {
    const loadOffers = async () => {
      try {
        const res = await fetch('/api/offers');
        if (res.ok) {
          const data = await res.json();
          // Map database categories to correct category naming if needed
          setOffers(data.length > 0 ? data : FALLBACK_OFFERS);
        } else {
          setOffers(FALLBACK_OFFERS);
        }
      } catch {
        console.warn('Backend server not connected. Falling back to local promotions.');
        setOffers(FALLBACK_OFFERS);
      } finally {
        setLoading(false);
      }
    };

    loadOffers();
  }, []);

  const getCardTheme = (index, category = '', offerImage = '') => {
    const cat = category.toLowerCase();
    
    // Default fallback backgrounds
    let bgOverlay = laminatesBg;
    if (index === 0 || cat.includes('plywood')) bgOverlay = plywoodBg;
    else if (index === 2 || cat.includes('hardware') || cat.includes('fitting')) bgOverlay = hardwareBg;

    if (offerImage) {
      bgOverlay = offerImage;
    }

    if (index === 0 || cat.includes('plywood')) {
      return {
        bgClass: 'from-[#e0efe7] via-[#FAF9F5] to-white border-[#0F5C3B]/20',
        circleBg: 'bg-[#0F5C3B]',
        textClass: 'text-[#0F5C3B]',
        buttonClass: 'bg-[#0F5C3B]/70 border border-[#C9A44C]/35 text-white backdrop-blur-sm hover:bg-[#0F5C3B] hover:shadow-[0_4px_12px_rgba(15,92,59,0.3)]',
        icon: <Layers className="w-5.5 h-5.5 text-[#C9A44C]" />,
        bgOverlay
      };
    }
    if (index === 1 || cat.includes('laminate')) {
      return {
        bgClass: 'from-[#f7eed9] via-[#FAF9F5] to-white border-[#C9A44C]/20',
        circleBg: 'bg-[#C9A44C]',
        textClass: 'text-[#8c601b]',
        buttonClass: 'bg-[#7a5c12]/75 border border-[#C9A44C]/35 text-white backdrop-blur-sm hover:bg-[#7a5c12] hover:shadow-[0_4px_12px_rgba(122,92,18,0.3)]',
        icon: <Gift className="w-5.5 h-5.5 text-white" />,
        bgOverlay
      };
    }
    // Hardware / default
    return {
      bgClass: 'from-[#e2ebee] via-[#FAF9F5] to-white border-teal-300/30',
      circleBg: 'bg-[#0b5466]',
      textClass: 'text-[#0b5466]',
      buttonClass: 'bg-[#0b5466]/70 border border-[#C9A44C]/35 text-white backdrop-blur-sm hover:bg-[#0b5466] hover:shadow-[0_4px_12px_rgba(11,84,102,0.3)]',
      icon: <Settings className="w-5.5 h-5.5 text-[#C9A44C]" />,
      bgOverlay
    };
  };

  const handleWhatsAppInquiry = (offerTitle) => {
    const text = encodeURIComponent(`Hi Pakshal Agencies, I would like to inquire about your offer: "${offerTitle}".`);
    window.open(`https://wa.me/919247449522?text=${text}`, '_blank');
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(`Hi Pakshal Agencies, I am a Builder/Contractor and would like to request a bulk quote for a project.`);
    window.open(`https://wa.me/919247449522?text=${text}`, '_blank');
  };

  if (loading) {
    return (
      <div className="w-full py-12 bg-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0F5C3B]"></div>
      </div>
    );
  }

  const displayOffers = offers.slice(0, 3);

  return (
    <section className="pt-12 pb-2 px-4 sm:px-6 lg:px-8 bg-white text-left select-none animate-fade-in">
      
      {/* Outer Styled Card Box - Using exact Cream White (#FAF7F2) */}
      <div className="max-w-[97%] xl:max-w-[1280px] mx-auto bg-[#FAF7F2] border border-[#C9A44C]/30 rounded-[2.5rem] shadow-sm p-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch gap-6 lg:gap-3 bg-[#FAF7F2] rounded-[2.2rem] overflow-hidden">
          
          {/* Left Dark Emerald Green Card (#0F5C3B) (Cols: 3) */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#0F5C3B] via-[#0b472e] to-[#072d1d] p-8 flex flex-col justify-between relative overflow-hidden text-left min-h-[400px] rounded-[2.2rem]">

            {/* Subtle abstract gold wave lines in the background */}
            <svg 
              className="absolute inset-0 w-full h-full opacity-10 pointer-events-none z-0" 
              viewBox="0 0 100 400" 
              preserveAspectRatio="none"
            >
              <path d="M0,60 C30,120 70,80 100,140" fill="none" stroke="#C9A44C" strokeWidth="0.75" />
              <path d="M0,160 C40,220 60,180 100,240" fill="none" stroke="#C9A44C" strokeWidth="0.75" />
              <path d="M0,260 C20,320 80,280 100,340" fill="none" stroke="#C9A44C" strokeWidth="0.75" />
            </svg>

            {/* Glowing gold/orb dust in bg */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#C9A44C]/30 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-16 -left-16 w-36 h-36 rounded-full bg-emerald-700/20 blur-xl pointer-events-none" />

            {/* Title Block */}
            <div className="relative z-10 text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8.5px] text-[#C9A44C] font-black uppercase tracking-widest">
                <Flame className="w-3.5 h-3.5 fill-current text-[#C9A44C] animate-pulse" />
                <span>LIMITED TIME ONLY</span>
              </div>
              
              <h2 className="text-3xl font-black leading-none tracking-tight font-sans mt-4">
                <span className="text-white font-sans uppercase">Special</span><br />
                <span className="text-[#C9A44C] font-sans uppercase">Offers &</span><br />
                <span className="text-[#C9A44C] font-sans uppercase">Deals</span>
              </h2>
              
              <p className="text-stone-300 font-bold text-xs leading-relaxed mt-3 max-w-[200px]">
                Premium Savings on Interior Materials
              </p>
              
              {/* Gold divider line */}
              <div className="w-10 h-0.5 bg-[#C9A44C]/60 mt-4" />
            </div>

            {/* Trust Badges */}
            <div className="relative z-10 mt-6 grid grid-cols-3 gap-2">
              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="text-[10px] font-black text-[#C9A44C] uppercase tracking-wider">Best Quality</span>
                <div className="w-[1.5px] h-4 bg-[#C9A44C]/30 hidden" />
              </div>
              <div className="flex flex-col items-center text-center gap-1.5 border-l border-r border-[#C9A44C]/30 px-1">
                <span className="text-[10px] font-black text-[#C9A44C] uppercase tracking-wider">Trusted Brands</span>
              </div>
              <div className="flex flex-col items-center text-center gap-1.5">
                <span className="text-[10px] font-black text-[#C9A44C] uppercase tracking-wider">Lowest Prices</span>
              </div>
            </div>

            {/* Footer Pill/T&C */}
            <div className="relative z-10 mt-6 flex items-center justify-between gap-2 border-t border-white/5 pt-4">
              <div className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/5 border border-[#C9A44C]/30 rounded-full text-[8.5px] text-[#C9A44C] font-black">
                <span>✨ Deals You Can't Miss!</span>
              </div>
              <span className="text-[8.5px] font-bold text-stone-400 uppercase tracking-wider">T&C Apply*</span>
            </div>
          </div>

          {/* Middle 3 Offers Cards (Cols: 6) */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch p-4 lg:py-6 lg:px-2 relative z-10">
            {displayOffers.map((offer, idx) => {
              const theme = getCardTheme(idx, offer.category, offer.image);
              return (
                <div 
                  key={offer.id} 
                  className={`bg-gradient-to-b ${theme.bgClass} rounded-[2rem] border border-[#ebd8a1]/30 flex flex-col items-center justify-between text-center pt-20 pb-4 px-4 relative overflow-hidden shadow-sm min-h-[380px]`}
                >
                  {/* Clean, opaque overlay background image at the bottom */}
                  <img 
                    src={theme.bgOverlay} 
                    className="absolute bottom-0 left-0 right-0 h-[44%] w-full object-cover z-0 select-none pointer-events-none rounded-b-[1.9rem]" 
                    alt="" 
                  />

                  {/* Overlapping Round Circle Icon with golden metallic outline glow */}
                  <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-14 h-14 rounded-full ${theme.circleBg} border-2 border-[#C9A44C] flex items-center justify-center shadow-[0_0_12px_rgba(201,164,76,0.45)] z-10`}>
                    {theme.icon}
                  </div>

                  {/* Info Text */}
                  <div className="flex flex-col items-center gap-0.5 flex-1 relative z-10 mt-1">
                    <span className="text-[12px] font-black text-slate-800 tracking-wide uppercase font-sans">
                      {offer.category}
                    </span>
                    <span className="text-[8px] font-black bg-stone-200/60 px-2 py-0.5 rounded text-slate-700 uppercase tracking-widest leading-none mt-1.5">
                      {offer.badge}
                    </span>
                    <span className={`text-2xl font-black ${theme.textClass} tracking-tight mt-2.5 font-sans leading-none`}>
                      {offer.title}
                    </span>
                    <span className="text-[9px] font-extrabold text-slate-500 uppercase tracking-wider mt-2.5 leading-snug">
                      {offer.description}
                    </span>
                  </div>

                  {/* View Details Button (Translucent Glassmorphism) */}
                  <button
                    onClick={() => setSelectedOffer(offer)}
                    className={`relative z-10 mt-5 w-full py-2.5 ${theme.buttonClass} active:scale-[0.98] font-extrabold text-[9px] uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer`}
                  >
                    View Details
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              );
            })}
          </div>

          {/* Right Charcoal Black Card (#111111) (Cols: 3) */}
          <div className="lg:col-span-3 bg-[#111111] p-6 flex flex-col justify-between text-left relative overflow-hidden min-h-[400px] shadow-inner rounded-[2.2rem]">
            {/* Exclusive gold ribbon */}
            <div className="absolute top-4 -right-9 w-32 bg-[#C9A44C] py-1 rotate-45 text-[8px] font-black uppercase text-[#111111] tracking-widest text-center shadow-md">
              👑 EXCLUSIVE
            </div>

            {/* Background gold orb */}
            <div className="absolute -bottom-16 -right-16 w-36 h-36 rounded-full bg-[#C9A44C]/5 blur-2xl pointer-events-none" />

            <div>
              {/* Construction Helmet Icon with metallic outline */}
              <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black/30">
                <HardHat className="w-6 h-6 text-[#C9A44C]" />
              </div>

              <h3 className="text-[15px] font-black text-[#C9A44C] tracking-wider uppercase leading-snug font-sans">
                Builder & Contractor<br />Special Deal
              </h3>
              
              <p className="text-stone-400 font-bold text-[11px] leading-relaxed mt-2.5">
                Large Project? Get The Best Prices & Priority Support.
              </p>

              {/* Checklist details */}
              <div className="flex flex-col gap-2 mt-5">
                {[
                  'Priority Support',
                  'Best Bulk Pricing',
                  'Best Bulk Products',
                  'Best Contractor'
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/10 border border-emerald-500/35 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-emerald-500" />
                    </div>
                    <span className="text-[10.5px] font-bold text-stone-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowQuoteModal(true)}
              className="mt-8 w-full py-3 bg-gradient-to-r from-[#ebd8a1] to-[#C9A44C] hover:from-[#FAF2DF] hover:to-[#ebd8a1] text-slate-900 font-black text-[10px] uppercase tracking-wider rounded-xl transition-all shadow flex items-center justify-center gap-1.5 cursor-pointer"
            >
              Get Quote Now
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-900" />
            </button>
          </div>

        </div>
      </div>

      {/* Offer Details Modal */}
      {selectedOffer && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative border border-slate-100 shadow-2xl text-left">
            <button 
              onClick={() => setSelectedOffer(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-1 bg-[#0F5C3B]/10 text-[#0F5C3B] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#0F5C3B]/20">
              {selectedOffer.category} - {selectedOffer.badge}
            </span>
            
            <h3 className="text-xl font-black text-[#0F5C3B] tracking-tight uppercase mt-3 mb-2 font-sans">
              {selectedOffer.title}
            </h3>
            
            <p className="text-slate-650 font-bold text-xs leading-relaxed mb-4">
              {selectedOffer.description}
            </p>

            {selectedOffer.validUntil && (
              <p className="text-[10px] text-slate-400 font-bold mb-4">
                Offer Valid Until: <span className="text-slate-650">{selectedOffer.validUntil}</span>
              </p>
            )}

            {selectedOffer.terms && (
              <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mb-6">
                <span className="text-[9px] font-black uppercase tracking-widest text-[#8E7640] block mb-1">Terms & Conditions</span>
                <span className="text-[11px] font-bold text-slate-500 leading-relaxed">{selectedOffer.terms}</span>
              </div>
            )}

            <button
              onClick={() => handleWhatsAppInquiry(selectedOffer.title)}
              className="w-full py-3 bg-[#25d366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              Inquire on WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Quote Request Modal */}
      {showQuoteModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 relative border border-slate-100 shadow-2xl text-left">
            <button 
              onClick={() => setShowQuoteModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 transition-colors p-1"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-2.5 py-1 bg-[#ebd8a1] text-[#614920] rounded-full text-[9px] font-black uppercase tracking-wider border border-[#C9A44C]/25">
              Bulk Deals
            </span>
            
            <h3 className="text-xl font-black text-slate-900 tracking-tight uppercase mt-3 mb-2 font-sans">
              Request B2B Quote
            </h3>
            
            <p className="text-slate-550 font-bold text-xs leading-relaxed mb-6">
              Connect with our wholesale sales desk for custom pricing, shipping lead times, and builder credit accounts.
            </p>

            <button
              onClick={handleWhatsAppQuote}
              className="w-full py-3 bg-[#25d366] hover:bg-[#20ba59] active:scale-[0.98] text-white font-extrabold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle className="w-4.5 h-4.5 fill-current" />
              Request Quote via WhatsApp
            </button>
          </div>
        </div>
      )}

    </section>
  );
};
