"use client";

import React from "react";
import Image from "next/image";
import { ChecklistItem } from "../atoms/ChecklistItem";
import { Button } from "../atoms/Button";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const IntroductionSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section id="introduction" className="bg-[#fefefe] scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        {/* Desktop Side-by-Side Layout (lg and above) */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column: Photo */}
          <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-neutral-100">
            <Image
              src="/assets/images/intro-photo.png"
              alt="Attorney consultation"
              fill
              className="object-cover object-center"
              sizes="50vw"
            />
          </div>

          {/* Right Column: Narrative & Benefits with Balanced Spacing */}
          <div className="flex flex-col items-start w-full">
            <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[15px] text-[#cba05d] tracking-[2.64px] uppercase py-1 select-none">
              Introduction
            </span>

            <h2 className="font-serif font-medium text-2xl sm:text-3xl lg:text-[40px] text-[#161616] leading-[1.2] pt-2 pb-3">
              Your Case Deserves More Than Legal Advice
            </h2>

            <p className="font-sans font-normal text-base sm:text-lg lg:text-[20px] text-[#808080] leading-relaxed pb-3">
              Every legal matter comes with its own challenges. We listen
              carefully, assess what&apos;s at stake, and build a strategy
              designed around your goals not a one size fits all approach.
            </p>

            {/* Checklist items - Balanced equidistant vertical spacing */}
            <div className="flex flex-col gap-1.5 py-4 w-full border-y border-transparent">
              <ChecklistItem text="Clear Legal Strategy" theme="light" />
              <ChecklistItem text="Personalised Guidance" theme="light" />
              <ChecklistItem text="Trusted Representation" theme="light" />
            </div>

            {/* CTA Button with matching margin */}
            <div className="pt-4">
              <Button
                variant="gold"
                size="md"
                showArrow
                onClick={() => scrollTo("attorney")}
              >
                Learn More About the Attorney
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Layout (matching Figma node 553:2415) */}
        <div className="lg:hidden relative rounded-2xl overflow-hidden min-h-[640px] sm:min-h-[700px] flex flex-col justify-end p-6 sm:p-10 shadow-2xl">
          {/* Background image & gradient */}
          <div className="absolute inset-0 pointer-events-none">
            <Image
              src="/assets/images/intro-photo.png"
              alt="Introduction"
              fill
              className="object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          </div>

          {/* Overlay content */}
          <div className="relative z-10 flex flex-col items-start w-full">
            <span className="font-sans font-semibold text-[10px] sm:text-xs text-[#cba05d] tracking-[2.64px] uppercase py-1 select-none">
              Introduction
            </span>

            <h2 className="font-serif font-medium text-2xl sm:text-3xl text-[#fefefe] leading-snug pt-1 pb-2">
              More Than Legal Advice
            </h2>

            <p className="font-sans font-light text-xs sm:text-sm text-[#fefefe]/85 leading-relaxed pb-3">
              We listen, understand your needs, and build a legal strategy tailored to your goals.
            </p>

            <div className="flex flex-col gap-1 py-3 w-full">
              <ChecklistItem text="Clear Legal Strategy" theme="dark" />
              <ChecklistItem text="Personalised Guidance" theme="dark" />
              <ChecklistItem text="Trusted Representation" theme="dark" />
            </div>

            <div className="pt-3 w-full">
              <Button
                variant="gold"
                size="md"
                showArrow
                onClick={() => scrollTo("attorney")}
                className="w-full justify-center"
              >
                Learn More About the Attorney
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
