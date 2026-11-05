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
        isOpen ? "bg-neutral-50/70" : "bg-[#fefefe]"
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
        {/* Prominent High-Visibility Circular Chevron Badge */}
        <div
          className={`shrink-0 w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300 border ${
            isOpen
              ? "bg-[#cba05d] text-[#030a1a] border-[#cba05d] rotate-180 shadow-md"
              : "bg-neutral-100 text-[#07183d] border-neutral-300 group-hover:bg-[#cba05d]/20 group-hover:border-[#cba05d] group-hover:text-[#cba05d]"
          }`}
        >
          <ChevronDown className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.5]" />
        </div>
      </button>

      {/* Modern zero-CLS accordion transition using CSS Grid */}
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 lg:px-8 pb-5 lg:pb-7">
            <p className="font-sans font-light text-sm sm:text-base lg:text-lg text-[#666666] leading-relaxed max-w-3xl">
              {item.answer}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
