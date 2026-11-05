"use client";

import React from "react";
import { TESTIMONIALS_DATA } from "@/domain/testimonial/testimonial.constants";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { SectionHeading } from "../atoms/SectionHeading";

export const TestimonialsSection: React.FC = () => {
  // Exact 3 testimonials from Figma Node 550:1444 (Margaret H., David L., Priya S.)
  const testimonials = TESTIMONIALS_DATA.slice(0, 3);

  return (
    <section
      id="testimonials"
      className="bg-[#e6e8ec] scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 lg:py-[100px]"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[80px]">
        {/* Section Heading matching Figma Node 550:1445 */}
        <div className="pb-8 lg:pb-12">
          <SectionHeading
            badge="TESTIMONIALS"
            title="Trusted by the People We Represent."
            className="pb-0"
          />
        </div>

        {/* 3 Testimonials Grid matching Figma Node 550:1446 (w-[450px] cards with 48px gap) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-[48px] items-stretch">
          {testimonials.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>
      </div>
    </section>
  );
};
