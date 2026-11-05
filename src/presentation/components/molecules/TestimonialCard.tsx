import React from "react";
import { Testimonial } from "@/domain/testimonial/testimonial.types";

export interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  className = "",
}) => {
  return (
    <div
      className={`bg-[#fefefe] drop-shadow-[0px_0px_15px_rgba(167,167,167,0.1)] p-6 sm:p-[24px] rounded-[8px] flex flex-col justify-between w-full transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${className}`}
    >
      <div>
        {/* Large Decorative Serif Quotation Mark (Figma Node 251:622) */}
        <div className="pb-1 select-none">
          <span className="font-serif font-normal text-[48px] text-[#07183d] leading-none inline-block">
            “
          </span>
        </div>

        {/* Testimonial Quote Text (Figma Node 251:624) */}
        <p className="font-sans font-normal text-base sm:text-lg lg:text-[20px] text-[#363636] leading-[1.4] min-h-[84px] sm:min-h-[96px]">
          {testimonial.quote}
        </p>
      </div>

      {/* Author and Practice Area Figcaption (Figma Node 251:626) */}
      <div className="pt-8 mt-6 border-t border-[#aaa] flex flex-col items-start w-full">
        <span className="font-sans font-semibold text-[12px] text-[#aaa] tracking-normal select-none">
          {testimonial.author}
        </span>
        <span className="font-sans font-normal text-sm sm:text-[16px] text-[#363636] tracking-[1.92px] uppercase pt-2 select-none">
          {testimonial.practiceArea}
        </span>
      </div>
    </div>
  );
};
