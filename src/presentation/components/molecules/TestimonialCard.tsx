import React from "react";
import { Testimonial } from "@/domain/testimonial/testimonial.types";
import { Star } from "lucide-react";

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
      className={`bg-[#fefefe] drop-shadow-[0px_4px_25px_rgba(167,167,167,0.12)] p-6 lg:p-8 rounded-xl flex flex-col justify-between border border-neutral-100 min-h-[320px] w-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${className}`}
    >
      <div>
        {/* Rating Stars & Quote Mark Header */}
        <div className="flex items-center justify-between pb-3">
          <div className="flex items-center gap-1 text-[#cba05d]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#cba05d]" />
            ))}
          </div>
          <span className="font-serif text-4xl lg:text-5xl text-[#07183d] leading-none select-none opacity-40">
            “
          </span>
        </div>

        {/* Quote text */}
        <p className="font-sans font-normal text-sm sm:text-base lg:text-lg text-[#363636] leading-relaxed pt-2">
          {testimonial.quote}
        </p>
      </div>

      {/* Author and Practice Area */}
      <div className="pt-6 mt-4 border-t border-[#aaa]/30 flex flex-col items-start">
        <span className="font-sans font-semibold text-xs text-[#aaa] tracking-wider uppercase">
          {testimonial.author}
        </span>
        <span className="font-sans font-medium text-sm lg:text-base text-[#363636] tracking-[1.92px] uppercase pt-1">
          {testimonial.practiceArea}
        </span>
      </div>
    </div>
  );
};
