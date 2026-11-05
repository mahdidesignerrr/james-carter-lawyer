"use client";

import React from "react";
import Image from "next/image";
import { StatFigure } from "@/domain/stats/stats.types";
import { useCountUp } from "@/application/use-count-up.hook";

export interface StatCardProps {
  stat: StatFigure;
  className?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ stat, className = "" }) => {
  const { count, elementRef } = useCountUp({
    end: stat.value,
    duration: 1800,
  });

  return (
    <div
      ref={elementRef}
      className={`group flex flex-col items-start gap-3 lg:gap-4 p-6 sm:p-7 lg:p-8 transition-colors duration-300 hover:bg-neutral-50/60 w-full relative ${className}`}
    >
      {/* Icon (56x56 in Figma) */}
      <div className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
        <Image
          src={stat.icon}
          alt=""
          width={56}
          height={56}
          className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain"
        />
      </div>

      <div className="flex flex-col items-start w-full">
        {/* Count: 56px in Figma, SemiBold 600, color #363636 */}
        <div className="flex items-center">
          <span className="font-sans font-semibold text-2xl sm:text-3xl lg:text-[52px] leading-tight text-[#363636] tracking-wider group-hover:text-[#cba05d] transition-colors">
            {stat.prefix}
            {count.toLocaleString()}
            {stat.suffix}
          </span>
        </div>

        {/* Label: 24px Regular in Figma, uppercase, color #808080 */}
        <div className="pt-1 lg:pt-2 w-full">
          <p className="font-sans font-normal text-xs sm:text-sm lg:text-lg text-[#808080] tracking-wider uppercase leading-snug">
            {stat.label.map((line, idx) => (
              <span key={idx} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};
