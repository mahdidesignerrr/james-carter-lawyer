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
      className={`group flex flex-col items-center text-center p-8 sm:p-10 lg:p-12 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl border border-black/5 lg:border-white/5 ${
        isCream1Mobile ? "bg-[#fcf8f3]" : "bg-[#f4eada]"
      } ${
        isDarkDesktop ? "lg:bg-[#05112b]" : "lg:bg-[#394664]"
      } ${className}`}
    >
      {/* Prominent, Large High-Res Practice Area Icon Badge */}
      <div className="relative w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mb-5 sm:mb-6 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
        <Image
          src={iconSrc}
          alt={area.title}
          width={140}
          height={140}
          className="w-18 h-18 sm:w-22 sm:h-22 lg:w-26 lg:h-26 object-contain drop-shadow-md"
          priority
        />
      </div>

      {/* Heading as in Figma */}
      <h3 className="font-sans font-bold text-lg sm:text-xl lg:text-2xl text-[#5c4f39] lg:text-[#fefefe] mb-2.5 sm:mb-3 tracking-tight">
        {area.title}
      </h3>

      {/* Description as in Figma */}
      <p className="font-sans font-light text-xs sm:text-sm lg:text-base text-[#9c8561] lg:text-[#fefefe]/85 leading-relaxed max-w-xs">
        {area.description}
      </p>
    </div>
  );
};
