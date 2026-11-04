"use client";

import React from "react";
import Image from "next/image";
import { ATTORNEY_DATA } from "@/domain/attorney/attorney.constants";
import { Button } from "../atoms/Button";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { Award, ShieldCheck } from "lucide-react";

export const AttorneyProfileSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section id="attorney" className="bg-[#fefefe] py-16 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 xl:gap-28 items-center">
          {/* Desktop Portrait Column with regal gold accent offset border */}
          <div className="hidden lg:block lg:col-span-5 relative">
            {/* Background offset luxury gold accent */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#cba05d]/50 rounded-2xl pointer-events-none" />

            <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900">
              <Image
                src={ATTORNEY_DATA.photoUrl}
                alt={ATTORNEY_DATA.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              {/* Floating verified badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-[#030a1a]/90 backdrop-blur-md border border-white/10 rounded-xl p-3.5 flex items-center gap-3 text-white shadow-xl">
                <div className="w-10 h-10 rounded-lg bg-[#cba05d]/20 border border-[#cba05d]/40 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-[#cba05d]" />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif font-medium text-sm text-[#fefefe]">James Carter, Esq.</span>
                  <span className="text-[11px] font-sans text-neutral-300">15+ Years Courtroom Trial Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Credentials Column with generous breathing room */}
          <div className="lg:col-span-7 flex flex-col items-start w-full">
            {/* Mobile Header with circular avatar */}
            <div className="lg:hidden flex items-center gap-4 pb-6 w-full border-b border-neutral-100">
              <div className="relative w-20 h-20 rounded-full overflow-hidden shrink-0 shadow-md border-2 border-[#cba05d]">
                <Image
                  src={ATTORNEY_DATA.photoUrl}
                  alt={ATTORNEY_DATA.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-sans font-semibold text-[10px] text-[#cba05d] tracking-[2.64px] uppercase">
                  Meet Your Attorney
                </span>
                <h2 className="font-serif font-medium text-2xl text-[#161616]">
                  {ATTORNEY_DATA.name}
                </h2>
              </div>
            </div>

            {/* Desktop Section Header */}
            <div className="hidden lg:flex flex-col items-start">
              <span className="font-sans font-semibold text-base text-[#cba05d] tracking-[2.64px] uppercase py-2 select-none">
                Meet Your Attorney
              </span>
              <h2 className="font-serif font-medium text-4xl lg:text-5xl text-[#161616] leading-tight pb-6">
                {ATTORNEY_DATA.name}
              </h2>
            </div>

            {/* Structured Credentials */}
            <div className="w-full divide-y divide-neutral-200/90 pt-2">
              {ATTORNEY_DATA.credentials.map((item, index) => (
                <div key={index} className="py-4 lg:py-5 flex flex-col gap-1.5 transition-colors hover:bg-neutral-50/50 px-2 rounded-lg">
                  <span className="font-sans font-medium text-xs lg:text-sm text-[#808080] tracking-[1.92px] uppercase">
                    {item.label}
                  </span>
                  <p className="font-sans font-light text-base lg:text-[21px] text-[#161616] leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div className="pt-8 w-full sm:w-auto flex flex-col sm:flex-row items-center gap-4">
              <Button
                variant="navy"
                size="lg"
                showArrow
                onClick={() => scrollTo("contact")}
                className="w-full sm:w-auto justify-center shadow-lg hover:shadow-xl"
              >
                Book a Consultation With James
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
