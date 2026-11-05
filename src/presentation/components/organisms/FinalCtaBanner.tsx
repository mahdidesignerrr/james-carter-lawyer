"use client";

import React from "react";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { ArrowRight } from "lucide-react";

export const FinalCtaBanner: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section className="bg-[#fefefe] py-14 lg:py-24 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Dark Navy Container Matching Figma Node 522:749 */}
        <div className="bg-[#030a1a] rounded-xl px-6 py-16 sm:py-20 lg:py-24 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl">
          {/* Subtle Decorative Golden Circles (Node 522:764 & 522:765) */}
          <div className="absolute -top-28 -left-28 w-80 h-80 rounded-full border border-[#cba05d]/35 pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full border border-[#cba05d]/35 pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            {/* Tagline with Flanking Horizontal Accent Lines (Node 522:751) */}
            <div className="flex items-center justify-center gap-3.5 mb-4">
              <span className="w-8 h-px bg-[#cba05d]" />
              <span className="font-sans font-semibold text-xs sm:text-sm text-[#cba05d] tracking-[0.165em] uppercase select-none">
                When It Matters Most, Experience Matters
              </span>
              <span className="w-8 h-px bg-[#cba05d]" />
            </div>

            {/* Heading (Node 522:757) */}
            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[48px] text-white leading-tight pt-2 pb-4">
              Don&apos;t Leave Your Legal Future <br className="hidden sm:inline" />
              to Chance.
            </h2>

            {/* Paragraph (Node 522:759) */}
            <p className="font-sans font-normal text-base sm:text-xl text-white/90 pb-8 max-w-2xl leading-relaxed">
              When the outcome matters, having the right legal strategy matters too.
            </p>

            {/* CTA Button: Book Your Consultation -> (Node 522:761) */}
            <button
              onClick={() => scrollTo("contact")}
              className="px-7 py-3.5 rounded-md bg-[#cba05d] hover:bg-[#b88f4e] text-white font-sans font-normal text-lg sm:text-xl shadow-lg hover:shadow-xl inline-flex items-center gap-2.5 transition-all duration-300 active:scale-98 cursor-pointer"
            >
              <span>Book Your Consultation</span>
              <ArrowRight className="w-5 h-5 text-white" />
            </button>

            {/* Confidentiality Footer Note (Node 522:763) */}
            <p className="font-sans font-normal text-sm sm:text-base text-white/70 pt-6 select-none">
              Confidential • Personalized • No Obligation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
