"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export const KeloraWatermark: React.FC = () => {
  return (
    <a
      href="https://ui8.net/kelora-studio/products/james-carter---law-firm-website-figma-template"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Buy James Carter Figma Template by Kelora Studio"
      className="fixed bottom-6 right-6 z-40 group flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[#07183d]/90 hover:bg-[#05112b] backdrop-blur-md border border-white/15 hover:border-[#cba05d]/60 shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_8px_25px_rgba(203,160,93,0.25)] select-none"
    >
      {/* Kelora Crest Mark */}
      <div className="relative w-6 h-6 rounded-full overflow-hidden shrink-0 border border-white/20 bg-black/40 flex items-center justify-center p-0.5">
        <Image
          src="/assets/images/kelora-mark.png"
          alt="Kelora Studio"
          width={24}
          height={24}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      {/* Typography */}
      <div className="flex flex-col text-left leading-none">
        <span className="font-sans font-light text-[9px] text-neutral-400 group-hover:text-[#cba05d] transition-colors uppercase tracking-wider">
          Kelora Studio
        </span>
        <span className="font-sans font-medium text-xs text-[#fefefe] group-hover:text-white transition-colors mt-0.5">
          Get Template
        </span>
      </div>

      {/* Arrow Indicator */}
      <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-[#cba05d] group-hover:text-[#030a1a] flex items-center justify-center transition-colors shrink-0 text-white/80">
        <ArrowUpRight className="w-3.5 h-3.5" />
      </div>
    </a>
  );
};
