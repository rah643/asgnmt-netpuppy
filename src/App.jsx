import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { CustomCursor } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { InquiryModal } from './components/InquiryModal';

import { Hero } from './sections/Hero';
import { Introduction } from './sections/Introduction';
import { WhyTIS } from './sections/WhyTIS';
import { CampusLife } from './sections/CampusLife';
import { Academics } from './sections/Academics';
import { Achievements } from './sections/Achievements';
import { Testimonials } from './sections/Testimonials';
import { AdmissionsCTA } from './sections/AdmissionsCTA';
import { Footer } from './sections/Footer';

export default function App() {
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const handleOpenInquiry = () => setIsInquiryOpen(true);
  const handleCloseInquiry = () => setIsInquiryOpen(false);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1A2332] dark:bg-[#090D14] dark:text-[#E2E8F0] selection:bg-[#C5A059] selection:text-white">
      {/* Interactive Global Features */}
      <ScrollProgress />
      <CustomCursor />

      {/* Main Navigation */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Homepage Sections */}
      <main id="main-content">
        <Hero onOpenInquiry={handleOpenInquiry} />
        <Introduction />
        <WhyTIS />
        <CampusLife />
        <Academics onOpenInquiry={handleOpenInquiry} />
        <Achievements />
        <Testimonials />
        <AdmissionsCTA onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={handleOpenInquiry} />

      {/* Inquiry Dialog Modal */}
      <InquiryModal isOpen={isInquiryOpen} onClose={handleCloseInquiry} />
    </div>
  );
}
