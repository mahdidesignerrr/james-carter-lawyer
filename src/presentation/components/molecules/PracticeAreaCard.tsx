import React from "react";
import Image from "next/image";
import { PracticeArea } from "@/domain/practice-area/practice-area.types";

export interface PracticeAreaCardProps {
  area: PracticeArea;
  className?: string;
}

const PRACTICE_ICONS: Record<string, string> = {
  "family-law": "/assets/images/practice-1.png",
  "criminal-defense": "/assets/images/practice-2.png",
  "corporate-law": "/assets/images/practice-3.png",
  "real-estate-law": "/assets/images/practice-4.png",
  "immigration-law": "/assets/images/practice-5.png",
  "civil-litigation": "/assets/images/practice-6.png",
};

export const PracticeAreaCard: React.FC<PracticeAreaCardProps> = ({
  area,
  className = "",
}) => {
  const isDarkDesktop = area.bgVariantDesktop === "dark";
  const isCream1Mobile = area.bgVariantMobile === "cream1";
  const iconSrc = PRACTICE_ICONS[area.id] || "/assets/images/practice-1.png";

  return (
    <div
      className={`group flex flex-col items-center text-center p-6 sm:p-8 lg:p-8 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-black/5 lg:border-white/5 ${
        isCream1Mobile ? "bg-[#fcf8f3]" : "bg-[#f4eada]"
      } ${
        isDarkDesktop ? "lg:bg-[#05112b]" : "lg:bg-[#394664]"
      } ${className}`}
    >
      {/* Fitting, Proportional Practice Area Icon Badge matching Figma Node 522:689 (~48-52px) */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 mb-4 sm:mb-5 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={iconSrc}
          alt={area.title}
          width={56}
          height={56}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain drop-shadow-sm"
        />
      </div>

      {/* Heading as in Figma */}
      <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#5c4f39] lg:text-[#fefefe] mb-2 sm:mb-2.5 tracking-tight">
        {area.title}
      </h3>

      {/* Description as in Figma */}
      <p className="font-sans font-light text-xs sm:text-sm text-[#9c8561] lg:text-[#fefefe]/80 leading-relaxed max-w-xs">
        {area.description}
      </p>
    </div>
  );
};
