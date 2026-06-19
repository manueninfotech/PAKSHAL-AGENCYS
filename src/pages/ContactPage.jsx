import { useState, useEffect } from 'react';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

// ==========================================
// 1. HELPER COMPONENTS
// ==========================================

// Custom Premium Toast / Notification Banner
const StatusBanner = ({ message, type, onClose }) => {
  return (
    <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-xl border backdrop-blur-md transition-all duration-300 animate-slide-in ${
      type === 'success'
        ? 'bg-emerald-500/95 border-emerald-400 text-white'
        : 'bg-rose-500/95 border-rose-400 text-white'
    }`}>
      <div className="shrink-0">
        {type === 'success' ? (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        )}
      </div>
      <p className="text-sm font-semibold tracking-wide">{message}</p>
      <button onClick={onClose} className="ml-4 hover:opacity-75 transition-opacity">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
};

// ContactInfoItem Component - Beautiful responsive card with micro-interactions
const ContactInfoCard = ({ label, icon, children, href }) => {
  const CardContent = () => (
    <div className="flex gap-4 items-center bg-white p-5 rounded-2xl border border-stone-200/50 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_30px_rgba(198,150,26,0.06)] hover:border-[#C6961A]/35 transition-all duration-300 group select-none">
      <div className="p-3 bg-[#C6961A]/10 text-[#C6961A] rounded-xl shrink-0 group-hover:bg-[#C6961A] group-hover:text-white transition-all duration-300">
        {icon}
      </div>
      <div className="space-y-0.5 text-left">
        <div className="text-[10px] font-black text-stone-400 tracking-widest uppercase">{label}</div>
        <div className="text-sm font-bold text-stone-800 transition-colors group-hover:text-[#C6961A]">
          {children}
        </div>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block transition-transform duration-300 hover:-translate-y-1">
        <CardContent />
      </a>
    );
  }

  return (
    <div className="transition-transform duration-300 hover:-translate-y-1">
      <CardContent />
    </div>
  );
};

// ==========================================
// 2. MAIN CONTACT PAGE COMPONENT
// ==========================================

export const ContactPage = () => {
  useDocumentMetadata(
    "Contact Pakshal Agencies | Showroom Location & Dealership Inquiry",
    "Visit our experience center at Goshamahal, Hyderabad. Register as a dealer, request direct wholesale quotes, or call us at 92464 84452."
  );

  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '', subject: '', message: ''
  });
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const subject = params.get('subject');
    const message = params.get('message');
    if (subject || message) {
      setFormData(prev => ({
        ...prev,
        subject: subject || prev.subject,
        message: message || prev.message
      }));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      setNotification({ message: 'Please fill in both Name and Phone Number.', type: 'error' });
      setTimeout(() => setNotification(null), 4000);
      return;
    }
    setNotification({ message: 'Thank you! Your inquiry has been sent successfully.', type: 'success' });
    setFormData({ fullName: '', phone: '', email: '', subject: '', message: '' });
    setTimeout(() => setNotification(null), 5000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const mapsUrl = "https://maps.google.com/?q=5-5-755,+Hindi+Nagar,+Goshamahal,+Hyderabad+500012";

  return (
    <div className="w-full min-h-screen pt-24 pb-16 font-sans bg-[#FAF8F4] relative overflow-hidden">
      
      {/* Decorative Radial Gradients for visual premiumness without heavy images */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] rounded-full bg-[#C6961A]/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[30vw] h-[30vw] rounded-full bg-[#C6961A]/4 blur-[100px] pointer-events-none" />

      {/* Toast Notification */}
      {notification && (
        <StatusBanner
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Main Page Layout Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col gap-12">
        
        {/* ── HEADER SECTION ── */}
        <div className="text-center space-y-4 max-w-2xl mx-auto mt-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-[#C6961A]/10 border border-[#C6961A]/20 text-[#C6961A] text-[10px] font-black tracking-[0.25em] uppercase px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6961A] animate-pulse" />
            Get In Touch
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-[#1a1714]">
            Let's Build Something <br className="hidden sm:inline" />
            <span className="text-[#C6961A]">Great Together</span>
          </h1>
          <p className="text-sm md:text-base text-stone-500 font-medium leading-relaxed">
            Have a project in mind or need expert advice? We're here to help you select the absolute finest materials for your spaces.
          </p>
        </div>

        {/* ── TWO-COLUMN GRID CONTENT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SIDE: Contact details + Quick info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <ContactInfoCard
                label="Phone Number"
                href="tel:+919100088040"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.387a20.373 20.373 0 01-7.108-7.108c-.155-.44.01-.928.387-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                }
              >
                +91 91000 88040
              </ContactInfoCard>

              <ContactInfoCard
                label="Email Support"
                href="mailto:info@pakshalagencies.com"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                }
              >
                info@pakshalagencies.com
              </ContactInfoCard>

              <ContactInfoCard
                label="Business Location"
                href={mapsUrl}
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25s-7.5-4.108-7.5-11.25a7.5 7.5 0 1115 0z" />
                  </svg>
                }
              >
                5-5-755, Hindi Nagar, Goshamahal, Hyderabad 500012. Ts
              </ContactInfoCard>

              <ContactInfoCard
                label="Working Hours"
                icon={
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                }
              >
                Mon–Sat: 9:30 AM–7:00 PM | Sun: 10:30 AM–5:00 PM
              </ContactInfoCard>
            </div>

            {/* Premium Dynamic Location Card */}
            <div className="bg-[#1a1714] text-white p-6 rounded-3xl border border-white/5 space-y-4 shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(198,150,26,0.15),transparent_60%)] pointer-events-none" />
              
              <div className="space-y-1">
                <div className="text-[9px] font-bold text-[#C6961A] tracking-[0.25em] uppercase">Experience Centre</div>
                <h3 className="text-xl font-bold font-serif tracking-wide">GOSHAMAHAL SHOWROOM</h3>
                <p className="text-xs text-stone-400 font-medium leading-relaxed mt-2">
                  Come explore Hyderabad's finest collection of premium plywood, hardware fittings, designer doors, and custom kitchen accessories.
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#C6961A] hover:text-[#a87e14] transition-colors group/btn"
                >
                  <span>Open Directions in Maps</span>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="transform group-hover/btn:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Gorgeous Centered Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-stone-200/80 rounded-3xl p-6 md:p-8 shadow-xl shadow-stone-200/40 relative">
              <div className="absolute top-0 inset-x-0 h-1.5 bg-[#C6961A] rounded-t-3xl" />
              
              <div className="border-b border-stone-100 pb-5 mb-6">
                <h3 className="text-xl font-black text-stone-800 tracking-wide uppercase">Send Inquiry</h3>
                <p className="text-xs text-stone-400 font-medium mt-1">Our customer service representatives will contact you shortly.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 focus:outline-none focus:border-[#C6961A] focus:bg-white transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 focus:outline-none focus:border-[#C6961A] focus:bg-white transition-all font-semibold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="name@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 focus:outline-none focus:border-[#C6961A] focus:bg-white transition-all font-semibold"
                    />
                  </div>
                  <div className="space-y-1.5 text-left">
                    <label className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">Subject</label>
                    <div className="relative">
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 focus:outline-none focus:border-[#C6961A] focus:bg-white transition-all font-semibold appearance-none cursor-pointer"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24'%3E%3Cpath fill='%237a7570' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 14px center',
                        }}
                      >
                        <option value="">Select a topic</option>
                        <option value="product">Product Specification Enquiry</option>
                        <option value="dealership">Dealership / Partner Zone Request</option>
                        <option value="quote">Pricing &amp; Custom Quote Request</option>
                        <option value="support">General Business Enquiry</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5 text-left">
                  <label className="text-[10px] font-bold tracking-wider text-stone-500 uppercase">Your Message</label>
                  <textarea
                    rows="4"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or requirement details..."
                    className="w-full px-4 py-3 rounded-xl border border-stone-200 bg-stone-50 text-sm text-stone-800 focus:outline-none focus:border-[#C6961A] focus:bg-white transition-all font-semibold resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#C6961A] hover:bg-[#a87e14] active:scale-[0.98] text-white font-black text-xs tracking-widest uppercase rounded-xl shadow-lg shadow-[#C6961A]/20 transition-all duration-200 flex items-center justify-center gap-2 group"
                >
                  <span>Submit Inquiry</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>



      </div>
    </div>
  );
};
