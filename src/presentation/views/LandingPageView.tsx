import React from "react";
import { HeaderNavbar } from "../components/molecules/HeaderNavbar";
import { HeroSection } from "../components/organisms/HeroSection";
import { KeyFiguresSection } from "../components/organisms/KeyFiguresSection";
import { IntroductionSection } from "../components/organisms/IntroductionSection";
import { PracticeAreasSection } from "../components/organisms/PracticeAreasSection";
import { WhyChooseUsSection } from "../components/organisms/WhyChooseUsSection";
import { HowItWorksSection } from "../components/organisms/HowItWorksSection";
import { AttorneyProfileSection } from "../components/organisms/AttorneyProfileSection";
import { TestimonialsSection } from "../components/organisms/TestimonialsSection";
import { FaqSection } from "../components/organisms/FaqSection";
import { FinalCtaBanner } from "../components/organisms/FinalCtaBanner";
import { ConsultationSection } from "../components/organisms/ConsultationSection";
import { FooterSection } from "../components/organisms/FooterSection";
import { BackToTop } from "../components/atoms/BackToTop";
import { SmoothScrollProvider } from "../providers/SmoothScrollProvider";

export const LandingPageView: React.FC = () => {
  return (
    <SmoothScrollProvider>
      <div className="relative min-h-screen bg-[#fefefe] selection:bg-[#cba05d] selection:text-white">
        <HeaderNavbar />
        <main>
          <HeroSection />
          <KeyFiguresSection />
          <IntroductionSection />
          <PracticeAreasSection />
          <WhyChooseUsSection />
          <HowItWorksSection />
          <AttorneyProfileSection />
          <TestimonialsSection />
          <FaqSection />
          <FinalCtaBanner />
          <ConsultationSection />
        </main>
        <FooterSection />
        <BackToTop />
      </div>
    </SmoothScrollProvider>
  );
};
