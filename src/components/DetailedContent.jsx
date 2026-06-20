import React, { useState } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Share2, 
  Mail, 
  CheckCircle2, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';

export const DetailedContent = ({ onNavigate }) => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleLinkClick = (e, page, search = '') => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, '', search);
    }
  };

  const faqs = [
    {
      question: "What makes calibrated plywood better?",
      answer: "Calibrated plywood is double-pressed under strict thickness tolerances (usually ±0.2mm). This provides a perfectly flat, uniform surface on both sides, which is essential for high-end modular furniture and kitchen shutters to prevent gaps, warping, or misalignment."
    },
    {
      question: "Are the hardware fittings genuine?",
      answer: "Yes, Pakshal Agencies is an authorized distributor. Every hinge, lock, or drawer slide channel is sourced directly from manufacturers like Ebco, Hettich, Godrej, Hafele, and Dorset. We stand behind 100% genuine quality for all architectural hardware solutions."
    },
    {
      question: "Where is the Pakshal showroom located?",
      answer: "Our experience center and showroom is located at 5-5-755, Hindi Nagar, Goshamahal, Hyderabad, 500012, Telangana. You can visit us to explore our physical material collection and request custom quotes."
    }
  ];

  const brands = [
    { name: 'Ebco', url: 'https://www.ebco.in', desc: 'Precision drawer slides and cabinetry fittings.' },
    { name: 'Hettich', url: 'https://www.hettich.com', desc: 'German-engineered soft-close hinges and hardware.' },
    { name: 'Godrej', url: 'https://www.godrej.com', desc: 'Smart locks and security door systems.' },
    { name: 'Dorset', url: 'https://www.dorsetindia.com', desc: 'Designer pull handles and architectural fittings.' },
    { name: 'Hafele', url: 'https://www.hafeleindia.com', desc: 'Premium kitchen systems and smart hardware.' }
  ];

  const shareUrl = "https://abdulrahamanshaik-manuen.github.io/PAKSHAL-AGENCYS/";
  const shareText = "Check out Pakshal Agencies for Premium Plywood, Laminates & Hardware Solutions";

  return (
    <section id="detailed-info" className="py-16 bg-[#fcf7ea]/40 border-t border-b border-[#ebd8a1]/20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start gap-2 mb-12">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5.5 rounded-full bg-[#38a12c]" />
            <span className="text-[#a88634] font-black uppercase tracking-[0.15em] text-[10px] sm:text-xs">
              RESOURCES &amp; INSIGHTS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-sans mt-1">
            Detailed Materials &amp; Supply Information
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-medium max-w-3xl mt-2 leading-relaxed">
            Learn more about our premium wood selections, luxury decorative finishes, and official brand distributions that power B2B projects across Hyderabad.
          </p>
        </div>

        {/* Detailed Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Plywood & Structural */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ebd8a1]/20 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#38a12c]/30 hover:shadow-md transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38a12c]/8 flex items-center justify-center text-[#38a12c] mb-6 group-hover:scale-105 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight">Plywood &amp; Structural Panels</h3>
              <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold mb-6">
                Featuring Boiling Water Proof (BWP) marine grade sheets, double-pressed calibrated plywood, high-density blockboards, and designer flush doors. Made from selected Gurjan timber for structural integrity and borer resistance.
              </p>
            </div>
            
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
              <a 
                href="/products?category=plywood" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=plywood')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Plywood Products</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="/products?category=veneers" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=veneers')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Premium Wood Veneers</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="/products?category=fancy-doors" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=fancy-doors')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Designer Doors</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Surface Finishes */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ebd8a1]/20 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#38a12c]/30 hover:shadow-md transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38a12c]/8 flex items-center justify-center text-[#38a12c] mb-6 group-hover:scale-105 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight">Decorative Surfaces</h3>
              <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold mb-6">
                Premium wood veneers, high-pressure laminates, and high-gloss acrylic panels. Elegant Italian-inspired Armani acrylic sheets and Indigo matt finishes featuring high scratch resistance and anti-fingerprint technology.
              </p>
            </div>
            
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
              <a 
                href="/products?category=laminates" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=laminates')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Decorative Laminates</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="/products?category=acrylic-panels" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=acrylic-panels')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Acrylic Sheets</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="/gallery" 
                onClick={(e) => handleLinkClick(e, 'gallery')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Showroom Gallery</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Card 3: Architectural Hardware */}
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#ebd8a1]/20 shadow-[0_10px_30px_rgba(0,0,0,0.02)] flex flex-col justify-between group hover:border-[#38a12c]/30 hover:shadow-md transition-all duration-300">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#38a12c]/8 flex items-center justify-center text-[#38a12c] mb-6 group-hover:scale-105 transition-all duration-300">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight">Architectural Hardware</h3>
              <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold mb-6">
                Authorized distribution of soft-close hinges, sliding drawer channels, modular kitchen systems, and luxury pull handles. Made from premium SS 304 stainless steel and cycle-tested up to 100,000 openings.
              </p>
            </div>
            
            <div className="flex flex-col gap-2.5 pt-4 border-t border-slate-100">
              <a 
                href="/products?category=hardware" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=hardware')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Cabinet Hardware</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="/products?category=kitchen-accessories" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=kitchen-accessories')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Kitchen Accessories</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
              <a 
                href="/products?category=sliding-channels" 
                rel="nofollow"
                onClick={(e) => handleLinkClick(e, 'products', '?category=sliding-channels')}
                className="inline-flex items-center text-xs font-black uppercase text-[#a88634] hover:text-[#38a12c] tracking-widest transition-colors duration-200"
              >
                <span>Drawer Slide Channels</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Brand Partners & FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Left Column: Official Brand Partners */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-5.5 rounded-full bg-[#38a12c]" />
              <h3 className="text-lg font-black text-slate-900 tracking-wider font-sans leading-none">OFFICIAL BRAND PARTNERS</h3>
            </div>
            
            <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold">
              We work directly with certified global manufacturers to guarantee authenticity, full warranty support, and reliable bulk supply pipelines.
            </p>

            <div className="flex flex-col gap-3">
              {brands.map((brand, idx) => (
                <a
                  key={idx}
                  href={brand.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-2xl hover:border-[#a88634]/30 hover:shadow-sm transition-all duration-300 group"
                >
                  <div>
                    <h4 className="font-extrabold text-[15px] text-slate-900 leading-snug group-hover:text-[#38a12c] transition-colors">{brand.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">{brand.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#38a12c] transition-colors shrink-0 ml-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: FAQs Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
              <span className="w-1.5 h-5.5 rounded-full bg-[#38a12c]" />
              <h3 className="text-lg font-black text-slate-900 tracking-wider font-sans leading-none">FREQUENTLY ASKED QUESTIONS</h3>
            </div>

            <div className="flex flex-col gap-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx} 
                    className="border border-[#ebd8a1]/20 rounded-2xl overflow-hidden bg-white shadow-[0_4px_12px_rgba(0,0,0,0.01)]"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-extrabold text-[15px] sm:text-base text-slate-900 hover:text-[#38a12c] focus:outline-none transition-colors duration-200"
                    >
                      <span className="flex items-center gap-2.5">
                        <HelpCircle className="w-4.5 h-4.5 text-[#a88634] shrink-0" />
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0 ml-2" />
                      )}
                    </button>
                    
                    {isOpen && (
                      <div className="px-5 pb-5 border-t border-slate-50">
                        <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold pt-4">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Share Section */}
        <div className="mt-16 bg-[#fcf7ea] rounded-3xl border border-[#ebd8a1]/20 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white border border-[#ebd8a1]/20 flex items-center justify-center text-[#a88634] shrink-0 hidden sm:flex">
              <Share2 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-[16px] text-slate-900">Share Our Website</h3>
              <p className="text-xs sm:text-[13px] text-slate-500 font-semibold mt-0.5">Help builders, architects, and developers discover premium materials.</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 justify-center">
            {/* Facebook Share */}
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-[#3b5998] hover:text-[#3b5998] text-slate-700 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3.6L15 8h-3V6c0-.9.7-1 1-1h2V2h-3a4 4 0 00-4 4v2z" />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </a>

            {/* Twitter Share */}
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-black hover:text-black text-slate-700 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              {/* Inline X logo */}
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              <span className="hidden sm:inline">Twitter</span>
            </a>

            {/* LinkedIn Share */}
            <a
              href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-[#0077b5] hover:text-[#0077b5] text-slate-700 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 011-.77c.76 0 1 .58 1 1.42v4.7h2.8M6.5 8.37a1.37 1.37 0 100-2.75 1.37 1.37 0 000 2.75M8 18.5V10.13H5.2v8.37H8z" />
              </svg>
              <span className="hidden sm:inline">LinkedIn</span>
            </a>

            {/* WhatsApp Share */}
            <a
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
              </svg>
              <span>WhatsApp</span>
            </a>

            {/* Email Share */}
            <a
              href={`mailto:?subject=${encodeURIComponent(shareText)}&body=Check%20out%20Pakshal%20Agencies%20at%20${encodeURIComponent(shareUrl)}`}
              className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-800 hover:text-slate-800 text-slate-700 py-2.5 px-4 rounded-xl text-xs font-extrabold transition-all duration-300 hover:-translate-y-0.5 shadow-sm"
            >
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">Email</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
