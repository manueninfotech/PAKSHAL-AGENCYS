import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { OffersSection } from '../components/OffersSection';
import { PremiumCollections } from '../components/PremiumCollections';
import { About } from '../components/About';
import { Brands } from '../components/Brands';
import { Categories } from '../components/Categories';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { DetailedContent } from '../components/DetailedContent';
import { Contact } from '../components/Contact';
import { useDocumentMetadata } from '../hooks/useDocumentMetadata';

export const HomePage = ({ onNavigateAbout, onNavigate }) => {
  useDocumentMetadata(
    "Pakshal Agencies | Plywood, Laminates & Hardware",
    "Authorized distributor of premium plywood, veneers, laminates, and luxury hardware fittings in Hyderabad. Serving builders and architects since 2011."
  );

  return (
    <>
      {/* Hero Section - Full screen banner with headline and CTA */}
      <Hero />

      {/* Stats Bar - Floating stats card overlapping hero */}
      <Stats />

      {/* Offers & Deals Section */}
      <OffersSection />

      {/* Premium Collections Section */}
      <PremiumCollections />

      {/* About Section - Who we are */}
      <About onNavigate={onNavigateAbout} />

      {/* Brands Section - Trusted brands we distribute */}
      <Brands />

      {/* Product Categories Grid */}
      <Categories onNavigate={onNavigate} />

      {/* Why Choose Us - Key differentiators */}
      <WhyChooseUs />

      {/* Detailed supply info, FAQs, internal/external links, and social shares for SEO */}
      <DetailedContent onNavigate={onNavigate} />

      {/* Contact Section */}
      <Contact />
    </>
  );
};
