"use client";

import React, { useState, useEffect } from "react";
import { TESTIMONIALS_DATA } from "@/domain/testimonial/testimonial.constants";
import { TestimonialCard } from "../molecules/TestimonialCard";
import { SectionHeading } from "../atoms/SectionHeading";
import { useTestimonialsSlider } from "@/application/use-testimonials-slider.hook";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TestimonialsSection: React.FC = () => {
  const { currentIndex, next, prev, goTo, setIsPaused } =
    useTestimonialsSlider({
      totalItems: TESTIMONIALS_DATA.length,
      interval: 5000,
      autoPlay: true,
    });

  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, TESTIMONIALS_DATA.length - visibleCount);
  const safeIndex = Math.min(currentIndex, maxIndex);
  const stepPercent = 100 / visibleCount;

  return (
    <section
      id="testimonials"
      className="bg-[#e6e8ec] py-14 lg:py-28 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 lg:mb-8">
          <SectionHeading
            badge="TESTIMONIALS"
            title="Trusted by the People We Represent."
            className="pb-0"
          />

          {/* Slider controls */}
          <div className="flex items-center gap-3 pt-3 md:pt-0 shrink-0">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#fefefe] border border-neutral-300 flex items-center justify-center text-[#161616] hover:bg-[#cba05d] hover:text-white hover:border-[#cba05d] transition-colors shadow-sm cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-[#fefefe] border border-neutral-300 flex items-center justify-center text-[#161616] hover:bg-[#cba05d] hover:text-white hover:border-[#cba05d] transition-colors shadow-sm cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative w-full overflow-hidden py-3">
          <div
            className="flex transition-transform duration-500 ease-out gap-4 lg:gap-6"
            style={{
              transform: `translateX(-${safeIndex * stepPercent}%)`,
            }}
          >
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="w-full md:w-[calc(50%-8px)] lg:w-[calc(33.333%-16px)] shrink-0"
              >
                <TestimonialCard testimonial={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Dot Pagination */}
        <div className="flex items-center justify-center gap-2 pt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                safeIndex === idx
                  ? "w-8 bg-[#cba05d]"
                  : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
