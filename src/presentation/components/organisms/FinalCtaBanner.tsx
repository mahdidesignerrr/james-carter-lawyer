"use client";

import React from "react";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { ScrollReveal } from "../atoms/ScrollReveal";
import { ArrowRight } from "lucide-react";

export const FinalCtaBanner: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section className="bg-[#fefefe] px-4 sm:px-8 lg:px-[120px] py-16 sm:py-20 lg:py-[100px] flex justify-center">
      <ScrollReveal direction="up" distance={28} duration={850} className="w-full max-w-[1200px]">
        {/* Container (Figma Node 522:749) - Exact 1200px max width, #030a1a background, rounded 8px */}
        <div className="bg-[#030a1a] w-full rounded-[8px] overflow-hidden relative px-6 py-12 sm:px-12 sm:py-16 lg:px-[100px] lg:py-[80px] flex flex-col items-center justify-center text-center shadow-2xl">
          {/* Decorative Golden Circles (Figma Nodes 522:764 & 522:765) */}
          <div
            aria-hidden="true"
            className="absolute -left-[150px] -top-[64px] w-[300px] h-[300px] rounded-full border border-[#cba05d]/40 pointer-events-none select-none animate-slow-spin"
          />
          <div
            aria-hidden="true"
            className="absolute -right-[100px] -bottom-[100px] lg:left-[976px] lg:top-[389px] w-[320px] h-[320px] rounded-full border border-[#cba05d]/40 pointer-events-none select-none animate-slow-spin"
          />

          {/* Inner Content Column (Figma Node 522:750) - Constrained to 672px */}
          <div className="relative z-10 w-full max-w-[672px] mx-auto flex flex-col items-center justify-center">
            {/* Tagline with 32px Horizontal Lines (Node 522:751) */}
            <div className="flex items-center justify-center gap-3 py-3 sm:py-4">
              <div className="w-[32px] h-px bg-[#cba05d] shrink-0" />
              <p className="font-sans font-semibold text-xs sm:text-sm lg:text-[16px] text-[#cba05d] tracking-[2.64px] uppercase text-center whitespace-normal sm:whitespace-nowrap select-none">
                When It Matters Most, Experience Matters
              </p>
              <div className="w-[32px] h-px bg-[#cba05d] shrink-0" />
            </div>

            {/* Heading 2 (Node 522:756 & 522:757) */}
            <div className="py-3 sm:py-5 lg:py-6 w-full">
              <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[48px] text-[#fefefe] text-center leading-[1.2]">
                Don&apos;t Leave Your Legal Future to Chance.
              </h2>
            </div>

            {/* Paragraph (Node 522:758 & 522:759) */}
            <div className="py-2 w-full">
              <p className="font-sans font-normal text-base sm:text-lg lg:text-[20px] text-[#fefefe] text-center leading-relaxed">
                When the outcome matters, having the right legal strategy matters too.
              </p>
            </div>

            {/* CTA Button (Node 522:760 & 522:761) */}
            <div className="py-5 sm:py-6 w-full flex justify-center">
              <button
                onClick={() => scrollTo("contact")}
                className="group bg-[#cba05d] hover:bg-[#b88f4e] px-6 py-4 rounded-[4px] inline-flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl active:scale-[0.98]"
              >
                <span className="font-sans font-normal text-lg sm:text-[20px] text-[#fefefe] tracking-[0.35px]">
                  Book Your Consultation
                </span>
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#fefefe] shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            {/* Confidentiality Footer Note (Node 522:762 & 522:763) */}
            <div className="pt-1 sm:pt-2 w-full">
              <p className="font-sans font-normal text-sm sm:text-[16px] text-[#fefefe] text-center leading-[20px] select-none opacity-90">
                Confidential • Personalized • No Obligation
              </p>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
