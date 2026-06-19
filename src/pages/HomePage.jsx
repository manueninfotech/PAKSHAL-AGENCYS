import React from 'react';
import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { About } from '../components/About';
import { Brands } from '../components/Brands';
import { Categories } from '../components/Categories';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Contact } from '../components/Contact';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const HomePage = ({ onNavigateAbout, onNavigate }) => {
  useDocumentMetadata(
    "Pakshal Agencies | Premium Plywood, Laminates & Hardware Solutions in Hyderabad",
    "Authorized distributor of premium plywood, veneers, laminates, and luxury hardware fittings in Hyderabad. Serving builders and architects since 2011."
  );

  return (
    <>
      {/* Hero Section - Full screen banner with headline and CTA */}
      <Hero />

      {/* Stats Bar - Floating stats card overlapping hero */}
      <Stats />

      {/* About Section - Who we are */}
      <About onNavigate={onNavigateAbout} />

      {/* Brands Section - Trusted brands we distribute */}
      <Brands />

      {/* Product Categories Grid */}
      <Categories onNavigate={onNavigate} />

      {/* Why Choose Us - Key differentiators */}
      <WhyChooseUs />

      {/* Featured Products Horizontal Slider */}
      <FeaturedProducts />

      {/* Contact Section */}
      <Contact />
    </>
  );
};
