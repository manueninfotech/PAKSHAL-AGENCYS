import React from 'react';

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${import.meta.env.BASE_URL}hero-image.png')` }}
      />

      {/* Ultra Soft Luxury Overlay */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(245,243,238,0.88) 0%, rgba(245,243,238,0.78) 20%, rgba(245,243,238,0.55) 35%, rgba(245,243,238,0.20) 50%, rgba(245,243,238,0) 70%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-12 items-center min-h-screen pt-28 pb-32 sm:pb-36 lg:pt-20 lg:pb-24">

          {/* Left Content */}
          <div className="lg:col-span-6 flex flex-col items-start">

            {/* Heading */}
            <h1
              className="text-[36px] sm:text-[46px] lg:text-[56px] xl:text-[60px] font-black leading-[1.08] tracking-tight text-[#071330] max-w-3xl"
              style={{
                textShadow: '0 4px 20px rgba(255,255,255,0.6)',
              }}
            >
              Premium Plywood,
              <br />
              Hardware &amp;
              <br />
              Interior Solutions
              <br />
              <span className="text-[#A67C00]">
                for Modern Spaces
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 text-base sm:text-lg text-slate-700 leading-relaxed max-w-xl font-medium">
              Delivering trusted brands, genuine products, and reliable
              supply solutions for residential, commercial, and interior
              projects.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-10">

              <a
                href="#products"
                className="inline-flex items-center justify-center bg-[#38a12c] hover:bg-[#2f8a24] text-white px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 shadow-lg hover:-translate-y-0.5"
              >
                View Products
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center border border-[#C9A44C]/60 text-[#071330] hover:bg-[#C9A44C]/10 px-8 py-4 rounded-xl text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5"
              >
                Contact Us
              </a>

            </div>

          </div>

          {/* Right Side Space */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>
      </div>

    </section>
  );
};