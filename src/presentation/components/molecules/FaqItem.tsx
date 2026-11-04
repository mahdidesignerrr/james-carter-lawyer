import React from "react";
import { ChevronDown } from "lucide-react";
import { FaqItemData } from "@/domain/faq/faq.types";

export interface FaqItemProps {
  item: FaqItemData;
  isOpen: boolean;
  onToggle: () => void;
  className?: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({
  item,
  isOpen,
  onToggle,
  className = "",
}) => {
  return (
    <div
      className={`border-b border-[#e6e8ec] transition-colors ${
        isOpen ? "bg-neutral-50/60" : "bg-[#fefefe]"
      } ${className}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 sm:py-6 lg:py-7 px-4 lg:px-8 text-left cursor-pointer focus:outline-none group select-none"
        aria-expanded={isOpen}
      >
        <span className="font-sans font-medium text-base sm:text-lg lg:text-xl text-[#161616] group-hover:text-[#cba05d] transition-colors pr-4">
          {item.question}
        </span>
        {/* Prominent Circular Chevron Badge (36x36 on mobile, 44x44 on desktop) */}
        <div
          className={`shrink-0 w-9 h-9 sm:w-10 sm:h-10 lg:w-11 lg:h-11 rounded-full flex items-center justify-center transition-all duration-300 border ${
            isOpen
              ? "bg-[#cba05d] text-[#030a1a] border-[#cba05d] rotate-180 shadow-md"
              : "bg-neutral-100 text-[#07183d] border-neutral-200 group-hover:bg-[#cba05d]/15 group-hover:border-[#cba05d]/50 group-hover:text-[#cba05d]"
          }`}
        >
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 stroke-[2.5]" />
        </div>
      </button>

      {/* Modern zero-CLS accordion transition using CSS Grid */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 lg:px-8 pb-5 lg:pb-6">
            <p className="font-sans font-light text-sm sm:text-base text-[#666666] leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
