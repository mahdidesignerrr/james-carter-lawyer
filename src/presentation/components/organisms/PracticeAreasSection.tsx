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
      className="bg-[#fefefe] lg:bg-[#07183d] py-14 lg:py-28 relative transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Section Heading with responsive theme */}
        <SectionHeading
          badge="OUR AREAS OF PRACTICE"
          title="Legal Support for What Matters Most."
          subtitle="From family and business matters to property, immigration, and disputes, we provide clear legal guidance when it matters most."
          theme="responsive"
        />

        {/* 6 Cards Grid: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8 pt-2 pb-10">
          {PRACTICE_AREAS.map((area) => (
            <PracticeAreaCard key={area.id} area={area} />
          ))}
        </div>

        {/* Bottom Banner: Not sure where your case fits? */}
        <div className="mt-8 p-8 sm:p-10 lg:p-14 rounded-2xl bg-[#f4eada]/60 lg:bg-[#05112b] border border-neutral-200 lg:border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 lg:gap-10 shadow-lg">
          <div className="flex flex-col max-w-2xl">
            <h4 className="font-serif font-medium text-lg sm:text-xl lg:text-3xl text-[#161616] lg:text-[#fefefe] pb-2">
              Not sure where your case fits?
            </h4>
            <p className="font-sans font-light text-sm sm:text-base lg:text-lg text-[#666666] lg:text-[#fefefe]/80 leading-relaxed">
              Start with a confidential consultation. We&apos;ll help you understand your options and next steps.
            </p>
          </div>

          <Button
            variant="gold"
            size="lg"
            showArrow
            onClick={() => scrollTo("contact")}
            className="w-full md:w-auto shrink-0 justify-center shadow-md hover:shadow-lg"
          >
            Book a Confidential Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};
