"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../atoms/SectionHeading";

const EXPERIENCE_NARRATIVE =
  "With a strong legal education, recognised professional qualifications, and more than 15 years of experience, I bring deep legal knowledge and strategic insight to every case. I take a personal approach to each client, providing clear advice, careful preparation, and dedicated representation while protecting your interests and maintaining complete confidentiality throughout the process.";

export const WhyChooseUsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLSpanElement[]>([]);

  const words = EXPERIENCE_NARRATIVE.split(" ");

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion || !containerRef.current) return;

    gsap.registerPlugin(ScrollTrigger);

    const spans = wordsRef.current.filter(Boolean);
    if (!spans.length) return;

    // Word-by-word scrub highlight as user scrolls down
    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        {
          opacity: 0.2,
          scale: 0.98,
        },
        {
          opacity: 1,
          scale: 1,
          stagger: 0.1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 45%",
            scrub: 0.6,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      className="bg-[#07183d] lg:bg-[#fefefe] py-20 sm:py-24 lg:py-[120px] transition-colors duration-300"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-[80px]">
        {/* Heading: Corrected from invisible white to crisp dark-to-light theme */}
        <SectionHeading
          badge="WHY CHOOSE US"
          title="Experience You Can Trust. Attention You Can Rely On."
          theme="dark-to-light"
        />

        {/* Narrative text with balanced line-height and scroll-driven word highlight */}
        <div ref={containerRef} className="max-w-6xl pt-6 lg:pt-10">
          <p className="font-sans font-light text-lg sm:text-2xl md:text-3xl lg:text-[38px] leading-snug sm:leading-relaxed lg:leading-[1.5] tracking-normal">
            {words.map((word, index) => (
              <span
                key={index}
                ref={(el) => {
                  if (el) wordsRef.current[index] = el;
                }}
                className="inline-block mr-[0.3em] transition-colors duration-200 text-[#fefefe] lg:text-[#161616]"
              >
                {word}
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};
