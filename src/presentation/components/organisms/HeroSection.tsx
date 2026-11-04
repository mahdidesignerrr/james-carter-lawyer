"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../atoms/Button";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const HeroSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section
      id="hero"
      className="relative min-h-[820px] lg:h-[1024px] w-full flex items-end lg:items-center justify-center overflow-hidden bg-[#07183d]"
    >
      {/* Background imagery: Desktop vs Mobile Positioning */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden">
        {/* Mobile Background: Framed on upper portrait */}
        <div className="lg:hidden absolute inset-0">
          <Image
            src="/assets/images/hero-mobile.png"
            alt="James Carter Legal"
            fill
            priority
            className="object-cover object-[50%_12%] opacity-85 scale-105"
          />
          {/* Vertical gradient to protect typography at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#030a1a] via-[#030a1a]/85 via-55% to-transparent" />
        </div>

        {/* Desktop Background: Precision focal alignment on lawyer at right */}
        <div className="hidden lg:block absolute inset-0">
          <div className="relative w-full h-full">
            <Image
              src="/assets/images/hero-bg.png"
              alt="James Carter Attorney at Law"
              fill
              priority
              className="object-cover object-[84%_25%] opacity-85 scale-[1.05] transition-transform duration-1000 ease-out"
            />
            {/* Softened Cinematic Left-to-Right vignette: Dark on text area, bright on attorney */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#030a1a] via-[#030a1a]/70 via-50% to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#07183d] via-transparent via-30% to-black/30" />
          </div>
        </div>
      </div>

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pb-24 sm:pb-28 md:pb-36 lg:py-20 flex flex-col items-start w-full">
        {/* Top Tagline */}
        <div className="py-2">
          <span className="font-sans font-semibold text-[10px] md:text-sm lg:text-[20px] text-[#cba05d] tracking-[2.64px] uppercase select-none">
            EXPERIENCED. STRATEGIC. DEDICATED
          </span>
        </div>

        {/* Main Hero Headline - constrained width so it wraps left of Carter */}
        <div className="py-2 max-w-2xl xl:max-w-3xl">
          <h1 className="font-serif font-medium text-[32px] sm:text-5xl md:text-7xl lg:text-[92px] text-[#fefefe] leading-[1.08] tracking-[-1.5px] drop-shadow-sm">
            Legal Representation <br className="hidden sm:inline" />
            <span className="text-[#fefefe]">You Can Rely On.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="py-2 lg:py-4 max-w-2xl">
          <p className="font-sans font-light text-xs sm:text-lg lg:text-[24px] text-[#cba05d] leading-relaxed">
            Clear advice. Strong advocacy, Results that protect what matters most.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 lg:gap-6 pt-4 lg:pt-8 w-full sm:w-auto">
          <Button
            variant="gold"
            size="lg"
            showArrow
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto font-medium justify-center shadow-lg hover:shadow-xl transition-all"
          >
            Start your case
          </Button>

          <Button
            variant="outline-gold"
            size="lg"
            onClick={() => scrollTo("practice-areas")}
            className="w-full sm:w-auto font-medium justify-center transition-all"
          >
            Explore Our Practice Areas
          </Button>
        </div>
      </div>
    </section>
  );
};
