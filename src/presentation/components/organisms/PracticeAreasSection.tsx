"use client";

import React from "react";
import { PRACTICE_AREAS } from "@/domain/practice-area/practice-area.constants";
import { PracticeAreaCard } from "../molecules/PracticeAreaCard";
import { SectionHeading } from "../atoms/SectionHeading";
import { Button } from "../atoms/Button";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const PracticeAreasSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section
      id="practice-areas"
      className="bg-[#fefefe] lg:bg-[#07183d] py-16 lg:py-32 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Heading with responsive theme */}
        <SectionHeading
          badge="OUR AREAS OF PRACTICE"
          title="Legal Support for What Matters Most."
          subtitle="From family and business matters to property, immigration, and disputes, we provide clear legal guidance when it matters most."
          theme="responsive"
        />

        {/* 6 Cards Grid: 2 columns on mobile, 3 on desktop with generous Figma gaps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 pt-4 pb-12">
          {PRACTICE_AREAS.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>

        {/* Lets Get Started (Figma Node 522:696) - Clean unboxed callout */}
        <div className="pt-8 sm:pt-12 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-black/10 lg:border-white/15">
          <div className="flex flex-col items-start gap-2 max-w-2xl">
            <h4 className="font-sans font-normal text-xl sm:text-2xl lg:text-[24px] text-[#5c4f39] lg:text-[#fefefe]">
              Not sure where your case fits?
            </h4>
            <p className="font-sans font-normal text-sm sm:text-base lg:text-[16px] text-[#9c8561] lg:text-[#fefefe]/80 leading-relaxed">
              Start with a confidential consultation. We&apos;ll help you understand your options and next steps.
            </p>
          </div>

          <Button
            variant="gold"
            size="md"
            showArrow
            onClick={() => scrollTo("contact")}
            className="w-full md:w-auto shrink-0 justify-center shadow-md hover:shadow-lg rounded-[4px]"
          >
            Book a Confidential Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
