"use client";

import React from "react";
import Image from "next/image";
import { ChecklistItem } from "../atoms/ChecklistItem";
import { Button } from "../atoms/Button";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const IntroductionSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section id="introduction" className="bg-[#fefefe] py-12 lg:py-28">
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

          {/* Right Column: Narrative & Benefits */}
          <div className="flex flex-col items-start w-full">
            <span className="font-sans font-semibold text-base text-[#cba05d] tracking-[2.64px] uppercase py-2 select-none">
              Introduction
            </span>

            <h2 className="font-serif font-medium text-[40px] text-[#161616] leading-tight pt-2 pb-4">
              Your Case Deserves More Than Legal Advice
            </h2>

            <p className="font-sans font-normal text-xl text-[#808080] leading-relaxed pb-6">
              Every legal matter comes with its own challenges. We listen
              carefully, assess what&apos;s at stake, and build a strategy
              designed around your goals not a one size fits all approach.
            </p>

            {/* Checklist items */}
            <div className="flex flex-col gap-2 pb-8 w-full">
              <ChecklistItem text="Clear Legal Strategy" theme="light" />
              <ChecklistItem text="Personalised Guidance" theme="light" />
              <ChecklistItem text="Trusted Representation" theme="light" />
            </div>

            {/* CTA */}
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

        {/* Mobile / Tablet Layout (matching Figma node 553:2415) */}
        <div className="lg:hidden relative rounded-2xl overflow-hidden min-h-[680px] sm:min-h-[750px] flex flex-col justify-end p-8 sm:p-12 shadow-2xl">
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

            <h2 className="font-serif font-medium text-2xl sm:text-3xl text-[#fefefe] leading-snug pt-1 pb-3">
              More Than Legal Advice
            </h2>

            <p className="font-sans font-light text-xs sm:text-sm text-[#fefefe]/85 leading-relaxed pb-4">
              We listen, understand your needs, and build a legal strategy tailored to your goals.
            </p>

            <div className="flex flex-col gap-1.5 pb-6 w-full">
              <ChecklistItem text="Clear Legal Strategy" theme="dark" />
              <ChecklistItem text="Personalised Guidance" theme="dark" />
              <ChecklistItem text="Trusted Representation" theme="dark" />
            </div>

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
    </section>
  );
};
