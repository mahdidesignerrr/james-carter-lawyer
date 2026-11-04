"use client";

import React from "react";
import { Button } from "../atoms/Button";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const FinalCtaBanner: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section className="bg-[#fefefe] py-14 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="bg-[#030a1a] rounded-3xl px-8 py-16 sm:p-16 lg:p-24 text-center flex flex-col items-center justify-center relative overflow-hidden shadow-2xl border border-white/10">
          {/* Subtle background ambient gradient */}
          <div className="absolute inset-0 bg-radial from-[#394664]/30 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-3xl flex flex-col items-center">
            <span className="font-sans font-semibold text-xs lg:text-sm text-[#cba05d] tracking-[2.64px] uppercase py-2">
              When It Matters Most, Experience Matters
            </span>

            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-5xl text-[#fefefe] leading-tight pt-3 pb-4">
              Don&apos;t Leave Your Legal Future to Chance.
            </h2>

            <p className="font-sans font-normal text-base lg:text-xl text-[#fefefe]/85 pb-8 max-w-2xl leading-relaxed">
              When the outcome matters, having the right legal strategy matters too.
              Reach out today for dedicated, strategic counsel.
            </p>

            <Button
              variant="gold"
              size="lg"
              showArrow
              onClick={() => scrollTo("contact")}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
