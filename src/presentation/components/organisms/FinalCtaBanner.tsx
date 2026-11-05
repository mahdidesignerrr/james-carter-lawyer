"use client";

import React from "react";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { ArrowRight } from "lucide-react";

export const FinalCtaBanner: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section className="bg-[#fefefe] py-14 lg:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dark Navy Container Matching Figma Image 2 & Node 522:749 */}
        <div className="bg-[#07183d] rounded-2xl sm:rounded-3xl px-6 py-14 sm:py-20 lg:py-22 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            {/* Tagline (Image 2) */}
            <span className="font-sans font-semibold text-xs sm:text-sm text-[#cba05d] tracking-[0.2em] uppercase select-none mb-3 sm:mb-4">
              WHEN IT MATTERS MOST, EXPERIENCE MATTERS
            </span>

            {/* Heading (Image 2) */}
            <h2 className="font-serif font-normal sm:font-medium text-3xl sm:text-5xl lg:text-[52px] text-white leading-[1.15] pb-4">
              Don&apos;t Leave Your Legal Future to Chance.
            </h2>

            {/* Paragraph (Image 2) */}
            <p className="font-sans font-light text-base sm:text-lg lg:text-[19px] text-white/85 pb-8 max-w-2xl leading-relaxed">
              When the outcome matters, having the right legal strategy matters too. Reach out today for dedicated, strategic counsel.
            </p>

            {/* CTA Button: Book a Consultation -> (Image 2) */}
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-3.5 rounded-lg bg-[#cba05d] hover:bg-[#b88f4e] text-white font-sans font-medium text-base sm:text-lg shadow-lg hover:shadow-xl inline-flex items-center gap-2.5 transition-all duration-300 active:scale-98 cursor-pointer"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
