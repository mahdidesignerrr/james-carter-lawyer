"use client";

import React from "react";
import Image from "next/image";
import { ATTORNEY_DATA } from "@/domain/attorney/attorney.constants";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { ArrowRight } from "lucide-react";

export const AttorneyProfileSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <section id="attorney" className="bg-[#fefefe] py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 xl:gap-20 items-center">
          {/* Portrait Column: Figma Node 550:1317 (w-[572px] h-[824px] rounded-[8px]) */}
          <div className="lg:col-span-5 relative w-full flex justify-center lg:justify-start">
            <div className="relative w-full max-w-[500px] lg:max-w-[572px] aspect-[572/760] sm:aspect-[572/800] rounded-[8px] overflow-hidden shadow-xl bg-neutral-900 border border-neutral-100">
              <Image
                src={ATTORNEY_DATA.photoUrl}
                alt={ATTORNEY_DATA.name}
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 45vw"
                priority
              />
            </div>
          </div>

          {/* Credentials Column: Figma Node 550:1318 */}
          <div className="lg:col-span-7 flex flex-col items-start w-full lg:pl-6 xl:pl-10">
            {/* Header: Meet Your Attorney + James Carter */}
            <div className="flex flex-col items-start pb-6 lg:pb-8">
              <span className="font-sans font-semibold text-sm lg:text-[16px] text-[#cba05d] tracking-[2.64px] uppercase select-none mb-2">
                Meet Your Attorney
              </span>
              <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[40px] text-[#161616] leading-tight">
                {ATTORNEY_DATA.name}
              </h2>
            </div>

            {/* Clean Structured Credentials (No Dividers, Exact Typography from Figma) */}
            <div className="flex flex-col gap-6 lg:gap-7 w-full">
              {ATTORNEY_DATA.credentials.map((item, index) => (
                <div key={index} className="flex flex-col items-start">
                  <span className="font-sans font-light text-[12px] text-[#808080] tracking-[1.92px] uppercase select-none mb-1.5">
                    {item.label}
                  </span>
                  <p className="font-sans font-light text-base sm:text-lg lg:text-[20px] text-[#363636] leading-snug">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* Action CTA: View Attorney Profile -> (Figma Node 550:1327) */}
            <div className="pt-8 lg:pt-10 w-full sm:w-auto">
              <button
                onClick={() => scrollTo("contact")}
                className="bg-[#07183d] hover:bg-[#030a1a] text-[#fefefe] px-6 py-4 rounded-[4px] font-sans font-normal text-base inline-flex items-center justify-center gap-2.5 transition-all shadow-md hover:shadow-lg active:scale-98 cursor-pointer w-full sm:w-auto"
              >
                <span>View Attorney Profile</span>
                <ArrowRight className="w-5 h-5 text-[#fefefe] shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
