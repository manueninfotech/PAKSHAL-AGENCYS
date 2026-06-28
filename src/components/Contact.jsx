import React, { useState } from 'react';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', product: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please fill in your Name and Mobile Number.');
      return;
    }
    // Simulate submission
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', product: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-12 bg-white border-t border-slate-100 text-left relative overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Card Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 rounded-3xl border border-[#ebd8a1]/25 shadow-[0_20px_50px_rgba(0,0,0,0.05)] overflow-hidden bg-white">
          
          {/* Left Column - Contact Details */}
          <div className="lg:col-span-5 bg-[#fcf7ea] p-8 sm:p-10 lg:p-12 flex flex-col gap-6 justify-center">
            <div className="flex flex-col gap-1.5">
              <span className="text-[#a88634] font-black uppercase tracking-[0.12em] text-[10px] sm:text-xs">
                LOOKING FOR PREMIUM
              </span>
              <span className="text-[#a88634] font-black uppercase tracking-[0.12em] text-[10px] sm:text-xs">
                INTERIOR &amp; CONSTRUCTION MATERIALS?
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] lg:leading-[1.15] font-black tracking-tight text-slate-900 font-sans">
              Let's Build Something<br />Exceptional Together
            </h2>
            
            <p className="text-slate-600 text-sm sm:text-[15px] leading-relaxed max-w-[95%] font-medium">
              Get genuine products, trusted brands and expert support for your next project.
            </p>

            {/* Quick Action Button Strip - Two buttons in a row */}
            <div className="grid grid-cols-2 gap-1.5 sm:gap-2.5 mt-4 w-full">
              <a
                href="tel:+919247449522"
                className="flex items-center justify-center gap-1 sm:gap-1.5 bg-[#38a12c] hover:bg-[#2e8a23] text-white py-3.5 px-1 sm:px-3 rounded-xl text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-green-900/10 text-center whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M20 15.5c-1.2 0-2.4-.2-3.6-.6-.3-.1-.7 0-1 .2l-2.2 2.2c-2.8-1.4-5.1-3.8-6.6-6.6l2.2-2.2c.3-.3.4-.7.2-1-.3-1.1-.5-2.3-.5-3.5 0-.6-.4-1-1-1H4c-.6 0-1 .4-1 1 0 9.4 7.6 17 17 17 .6 0 1-.4 1-1v-3.5c0-.6-.4-1-1-1z" />
                </svg>
                <span>Call Now</span>
              </a>
              <a
                href="https://wa.me/919247449522"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-1 sm:gap-1.5 bg-[#38a12c] hover:bg-[#2e8a23] text-white py-3.5 px-1 sm:px-3 rounded-xl text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 shadow-md shadow-green-900/10 text-center whitespace-nowrap"
              >
                <svg className="w-3.5 h-3.5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.493 4.904 1.495 5.182 0 9.4-4.216 9.403-9.397.001-2.51-1-4.87-2.817-6.649-1.817-1.778-4.23-2.757-6.79-2.758-5.186 0-9.409 4.217-9.412 9.4-.002 1.942.506 3.843 1.472 5.513L2.26 21.53l4.387-1.376zM18.04 14.99c-.32-.16-1.89-.93-2.18-1.04-.3-.1-.51-.16-.72.16-.21.32-.82 1.04-1 1.25-.19.21-.38.24-.7.08-.32-.16-1.35-.5-2.57-1.59-.95-.95-1.59-1.9-1.78-2.22-.19-.32-.02-.49.14-.65.15-.14.32-.32.48-.48.16-.16.21-.27.32-.48.11-.21.05-.4-.03-.56-.08-.16-.72-1.74-.99-2.38-.26-.64-.53-.55-.72-.56l-.61-.01c-.21 0-.55.08-.84.4-.29.32-1.12 1.1-1.12 2.68s1.15 3.1 1.31 3.32c.16.22 2.27 3.46 5.5 4.86.76.33 1.36.53 1.83.68.77.24 1.47.21 2.03.12.62-.09 1.89-.77 2.15-1.51.26-.74.26-1.38.18-1.51-.08-.13-.3-.21-.62-.37z" />
                </svg>
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Divider Column */}
          <div className="hidden lg:flex lg:col-span-1 justify-center self-stretch py-12 relative bg-[#fcf7ea]">
            <div className="w-[1px] bg-[#ebd8a1]/30 h-full" />
          </div>

          {/* Right Column - Enquiry Form */}
          <div className="lg:col-span-6 bg-white p-8 sm:p-10 lg:p-12 flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-2.5">
              <h3 className="text-lg font-black text-slate-900 tracking-wider font-sans leading-none">ENQUIRE NOW</h3>
            </div>

            {submitted && (
              <div className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 px-4 py-3 rounded-lg text-sm font-semibold animate-fade-in">
                🎉 Thank you! Your inquiry has been submitted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-900 font-extrabold uppercase tracking-widest">Your Name*</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-950 font-bold placeholder-slate-500 focus:outline-none focus:border-[#38a12c] focus:ring-4 focus:ring-[#38a12c]/10 hover:border-slate-400 transition-all duration-300 shadow-sm"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-900 font-extrabold uppercase tracking-widest">Mobile Number*</label>
                  <input
                    type="tel"
                    placeholder="Enter mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-950 font-bold placeholder-slate-500 focus:outline-none focus:border-[#38a12c] focus:ring-4 focus:ring-[#38a12c]/10 hover:border-slate-400 transition-all duration-300 shadow-sm"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-900 font-extrabold uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    placeholder="Enter email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-950 font-bold placeholder-slate-500 focus:outline-none focus:border-[#38a12c] focus:ring-4 focus:ring-[#38a12c]/10 hover:border-slate-400 transition-all duration-300 shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] text-slate-900 font-extrabold uppercase tracking-widest">Product Requirement*</label>
                  <div className="relative">
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-950 font-bold focus:outline-none focus:border-[#38a12c] focus:ring-4 focus:ring-[#38a12c]/10 hover:border-slate-400 transition-all duration-300 appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231e293b%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')] bg-[length:0.65em_auto] bg-[position:right_1rem_center] bg-no-repeat cursor-pointer shadow-sm"
                      required
                    >
                      <option value="" className="text-slate-500 font-bold">Select a product</option>
                      <option value="plywood">Plywood</option>
                      <option value="laminates">Laminates</option>
                      <option value="doors">Fancy Doors</option>
                      <option value="hardware">Hardware Fittings</option>
                      <option value="kitchen">Kitchen Accessories</option>
                      <option value="sliding">Sliding Channels</option>
                      <option value="tandem">Tandem Boxes</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] text-slate-900 font-extrabold uppercase tracking-widest">Message</label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your requirement..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-white border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-950 font-bold placeholder-slate-500 focus:outline-none focus:border-[#38a12c] focus:ring-4 focus:ring-[#38a12c]/10 hover:border-slate-400 transition-all duration-300 resize-none shadow-sm"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full bg-[#38a12c] hover:bg-[#2e8a23] text-white font-extrabold rounded-xl text-xs tracking-wider uppercase transition-all shadow-md shadow-green-950/10 hover:shadow-lg hover:shadow-green-900/15 cursor-pointer flex items-center justify-between overflow-hidden group/btn"
              >
                <span className="flex-1 text-center py-4">Send Enquiry</span>
                <div className="border-l border-green-700/60 px-5 py-4 flex items-center justify-center bg-green-700/20 group-hover/btn:bg-green-700/40 transition-colors">
                  <svg className="w-3.5 h-3.5 fill-current transform rotate-45 -mt-0.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                  </svg>
                </div>
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
