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
      className={`group bg-[#fefefe] flex flex-col items-start gap-2.5 lg:gap-4 p-4 sm:p-6 lg:p-8 rounded-xl shadow-md border border-neutral-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full relative overflow-hidden ${className}`}
    >
      {/* Top subtle golden accent bar on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#cba05d] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Icon */}
      <div className="relative shrink-0 w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 flex items-center justify-center transition-transform group-hover:scale-105">
        <Image
          src={stat.icon}
          alt=""
          width={56}
          height={56}
          className="w-7 h-7 sm:w-9 sm:h-9 lg:w-14 lg:h-14 object-contain"
        />
      </div>

      <div className="flex flex-col items-start w-full">
        {/* Count */}
        <div className="flex items-center">
          <span className="font-sans font-semibold text-xl sm:text-3xl lg:text-[56px] leading-tight text-[#363636] tracking-wider group-hover:text-[#cba05d] transition-colors">
            {stat.prefix}
            {count.toLocaleString()}
            {stat.suffix}
          </span>
        </div>

        {/* Label */}
        <div className="pt-0.5 lg:pt-2 w-full">
          <p className="font-sans font-normal text-[10px] sm:text-xs lg:text-xl text-[#808080] tracking-wider uppercase leading-snug whitespace-normal break-words">
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
