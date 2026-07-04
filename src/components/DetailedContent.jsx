import React, { useState } from 'react';
import {
  ChevronDown,
  ChevronUp,
  ExternalLink,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Layers,
  Trees,
  DoorClosed,
  Palette,
  Image,
  Wrench,
  LayoutGrid,
  Sliders,
  ChevronRight
} from 'lucide-react';

import plywoodImg from '../assets/plywood-image.png';
import laminatesImg from '../assets/laminates.png';
import hardwareImg from '../assets/hardwarefittings.png';

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
    },
    {
      question: "Do you offer delivery services in Hyderabad?",
      answer: "Yes, we provide bulk delivery services across Hyderabad, Secunderabad, and neighboring regions. With our organized fleet and stock warehouse, we ensure your materials reach the construction site or factory on schedule."
    },
    {
      question: "Can I get customized plywood sizes or designer door finishes?",
      answer: "We supply standard certified sizes directly from our brand partners. However, for large commercial projects or custom bulk orders, we can coordinate with manufacturers to deliver custom thicknesses or specific designer door finishes."
    },
    {
      question: "What are the standard payment terms for B2B orders?",
      answer: "We offer flexible payment options for registered B2B dealers, builders, and corporate clients, including bank transfers, card payments, and UPI. Contact our billing department for wholesale pricing and account setup."
    }
  ];

  const brands = [
    { name: 'Ebco', url: 'https://www.ebco.in', desc: 'Precision drawer slides and cabinetry fittings.' },
    { name: 'Hettich', url: 'https://www.hettich.com', desc: 'German-engineered soft-close hinges and hardware.' },
    { name: 'Godrej', url: 'https://www.godrej.com', desc: 'Smart locks and security door systems.' },
    { name: 'Dorset', url: 'https://www.dorsetindia.com', desc: 'Designer pull handles and architectural fittings.' },
    { name: 'Hafele', url: 'https://www.hafeleindia.com', desc: 'Premium kitchen systems and smart hardware.' }
  ];

  return (
    <section id="detailed-info" className="pt-16 pb-8 bg-white border-t border-b border-slate-100 text-left relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-3 mb-16">
          <div className="flex items-center gap-3 w-full justify-center">
            <div className="flex items-center gap-2">
              <span className="text-[#a88634] font-black uppercase tracking-[0.25em] text-[11px] sm:text-xs font-sans">
                RESOURCES
              </span>
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#a88634]/10 text-[#a88634]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#a88634]" />
              </span>
              <span className="text-[#a88634] font-black uppercase tracking-[0.25em] text-[11px] sm:text-xs font-sans">
                INSIGHTS
              </span>
            </div>
          </div>
          <h2 className="text-3xl sm:text-4.5xl font-extrabold tracking-tight text-slate-955 font-sans mt-1">
            Detailed Materials &amp; Supply Information
          </h2>
          <p className="text-slate-500 text-sm sm:text-[15px] font-medium max-w-3xl mx-auto mt-2 leading-relaxed">
            Explore our premium material range, decorative finishes, and authorized brand distributions — trusted by B2B projects across Hyderabad.
          </p>
        </div>

        {/* Detailed Material Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Card 1: Plywood & Structural */}
          <div className="bg-white rounded-[28px] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div>
              {/* Image with slanted separator and floating badge */}
              <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                <img 
                  src={plywoodImg} 
                  alt="Plywood & Structural Panels" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-[#2e7d32] text-white flex items-center justify-center shadow-lg z-20">
                  <Layers className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4">
                <h3 className="text-lg font-black text-[#2e7d32] mb-3 tracking-wider uppercase font-sans">
                  PLYWOOD &amp; STRUCTURAL PANELS
                </h3>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold">
                  Boiling Water Proof (BWP) marine grade sheets, calibrated plywood, blockboards, and designer flush doors. Made from selected Gurjan timber for structural integrity and borer resistance.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 sm:p-8 pt-0">
              <a
                href="/products?category=plywood"
                onClick={(e) => handleLinkClick(e, 'products', '?category=plywood')}
                className="flex items-center justify-between p-3 bg-[#2e7d32]/5 hover:bg-[#2e7d32]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#2e7d32] shadow-sm border border-[#2e7d32]/10">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#2e7d32] transition-colors">
                    Plywood Products
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#2e7d32] group-hover/pill:translate-x-0.5 transition-all" />
              </a>

              <a
                href="/products?category=veneers"
                onClick={(e) => handleLinkClick(e, 'products', '?category=veneers')}
                className="flex items-center justify-between p-3 bg-[#2e7d32]/5 hover:bg-[#2e7d32]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#2e7d32] shadow-sm border border-[#2e7d32]/10">
                    <Trees className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#2e7d32] transition-colors">
                    Premium Wood Veneers
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#2e7d32] group-hover/pill:translate-x-0.5 transition-all" />
              </a>

              <a
                href="/products?category=fancy-doors"
                onClick={(e) => handleLinkClick(e, 'products', '?category=fancy-doors')}
                className="flex items-center justify-between p-3 bg-[#2e7d32]/5 hover:bg-[#2e7d32]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#2e7d32] shadow-sm border border-[#2e7d32]/10">
                    <DoorClosed className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#2e7d32] transition-colors">
                    Designer Doors
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#2e7d32] group-hover/pill:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Card 2: Surface Finishes */}
          <div className="bg-white rounded-[28px] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div>
              {/* Image with slanted separator and floating badge */}
              <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                <img 
                  src={laminatesImg} 
                  alt="Decorative Surfaces" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-[#a88634] text-white flex items-center justify-center shadow-lg z-20">
                  <Palette className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4">
                <h3 className="text-lg font-black text-[#a88634] mb-3 tracking-wider uppercase font-sans">
                  DECORATIVE SURFACES
                </h3>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold">
                  Premium wood veneers, high-pressure laminates, and high-gloss acrylic panels. Elegant Italian-inspired Armani acrylic sheets and Indigo matt finishes featuring high scratch resistance.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 sm:p-8 pt-0">
              <a
                href="/products?category=laminates"
                onClick={(e) => handleLinkClick(e, 'products', '?category=laminates')}
                className="flex items-center justify-between p-3 bg-[#a88634]/5 hover:bg-[#a88634]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#a88634] shadow-sm border border-[#a88634]/10">
                    <Palette className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#a88634] transition-colors">
                    Decorative Laminates
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#a88634] group-hover/pill:translate-x-0.5 transition-all" />
              </a>

              <a
                href="/products?category=acrylic-panels"
                onClick={(e) => handleLinkClick(e, 'products', '?category=acrylic-panels')}
                className="flex items-center justify-between p-3 bg-[#a88634]/5 hover:bg-[#a88634]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#a88634] shadow-sm border border-[#a88634]/10">
                    <Layers className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#a88634] transition-colors">
                    Acrylic Sheets
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#a88634] group-hover/pill:translate-x-0.5 transition-all" />
              </a>

              <a
                href="/gallery"
                onClick={(e) => handleLinkClick(e, 'gallery')}
                className="flex items-center justify-between p-3 bg-[#a88634]/5 hover:bg-[#a88634]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#a88634] shadow-sm border border-[#a88634]/10">
                    <Image className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#a88634] transition-colors">
                    Showroom Gallery
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#a88634] group-hover/pill:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

          {/* Card 3: Architectural Hardware */}
          <div className="bg-white rounded-[28px] border border-slate-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.03)] flex flex-col justify-between group overflow-hidden hover:shadow-lg transition-all duration-300">
            <div>
              {/* Image with slanted separator and floating badge */}
              <div className="relative w-full h-[180px] overflow-hidden bg-slate-100">
                <img 
                  src={hardwareImg} 
                  alt="Architectural Hardware" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 0 100%)' }}
                />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-tl-2xl rounded-br-2xl rounded-tr-lg rounded-bl-lg bg-[#0c2340] text-white flex items-center justify-center shadow-lg z-20">
                  <Wrench className="w-5 h-5" />
                </div>
              </div>

              <div className="p-6 sm:p-8 pt-4">
                <h3 className="text-lg font-black text-[#0c2340] mb-3 tracking-wider uppercase font-sans">
                  ARCHITECTURAL HARDWARE
                </h3>
                <p className="text-slate-600 text-[13.5px] leading-relaxed font-semibold">
                  Authorized distribution of soft-close hinges, sliding drawer channels, modular kitchen systems, and luxury pull handles. Made from premium SS 304 stainless steel.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-3 p-6 sm:p-8 pt-0">
              <a
                href="/products?category=hardware"
                onClick={(e) => handleLinkClick(e, 'products', '?category=hardware')}
                className="flex items-center justify-between p-3 bg-[#0c2340]/5 hover:bg-[#0c2340]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0c2340] shadow-sm border border-[#0c2340]/10">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#0c2340] transition-colors">
                    Cabinet Hardware
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#0c2340] group-hover/pill:translate-x-0.5 transition-all" />
              </a>

              <a
                href="/products?category=kitchen-accessories"
                onClick={(e) => handleLinkClick(e, 'products', '?category=kitchen-accessories')}
                className="flex items-center justify-between p-3 bg-[#0c2340]/5 hover:bg-[#0c2340]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0c2340] shadow-sm border border-[#0c2340]/10">
                    <LayoutGrid className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#0c2340] transition-colors">
                    Kitchen Accessories
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#0c2340] group-hover/pill:translate-x-0.5 transition-all" />
              </a>

              <a
                href="/products?category=sliding-channels"
                onClick={(e) => handleLinkClick(e, 'products', '?category=sliding-channels')}
                className="flex items-center justify-between p-3 bg-[#0c2340]/5 hover:bg-[#0c2340]/10 rounded-2xl transition-all duration-300 group/pill"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#0c2340] shadow-sm border border-[#0c2340]/10">
                    <Sliders className="w-4 h-4" />
                  </div>
                  <span className="text-[13.5px] font-black text-slate-800 group-hover/pill:text-[#0c2340] transition-colors">
                    Drawer Slide Channels
                  </span>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-400 group-hover/pill:text-[#0c2340] group-hover/pill:translate-x-0.5 transition-all" />
              </a>
            </div>
          </div>

        </div>

        {/* Brand Partners & FAQs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-0">

          {/* Left Column: Official Brand Partners */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
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
                    <h4 className="font-extrabold text-[15px] text-slate-900 leading-snug group-hover:text-[#a88634] transition-colors">{brand.name}</h4>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">{brand.desc}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-[#a88634] transition-colors shrink-0 ml-3" />
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: FAQs Accordion */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="flex items-center gap-2.5">
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
                      className="w-full flex items-center justify-between p-5 text-left font-extrabold text-[15px] sm:text-base text-slate-900 hover:text-[#a88634] focus:outline-none transition-colors duration-200"
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

      </div>
    </section>
  );
};
