"use client";

import React from "react";
import { SectionHeading } from "../atoms/SectionHeading";

interface StepItem {
  id: string;
  stepNumber: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowItWorksSection: React.FC = () => {
  const steps: StepItem[] = [
    {
      id: "consultation",
      stepNumber: "STEP 01",
      title: "Book a Consultation",
      description: "Reach out and choose a convenient, confidential time to talk.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b39366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          <path d="M14.5 2C17.5 2.5 20.5 5.5 21 8.5" />
          <path d="M14.5 5.5C16 6 17 7 17.5 8.5" />
        </svg>
      ),
    },
    {
      id: "evaluation",
      stepNumber: "STEP 02",
      title: "Case Evaluation",
      description: "We listen carefully and assess the facts, risks, and priorities.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b39366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="6" y="4" width="16" height="16" rx="4" />
          <path d="m22 7-7.5 5.5a2 2 0 0 1-2.4 0L6 7" />
          <path d="M2 8h3" />
          <path d="M1 12h4" />
          <path d="M2 16h3" />
        </svg>
      ),
    },
    {
      id: "strategy",
      stepNumber: "STEP 03",
      title: "Legal Strategy",
      description: "A clear strategy is built around your specific circumstances.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b39366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="7" width="20" height="14" rx="3" />
          <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
          <path d="M12 12v3" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    {
      id: "representation",
      stepNumber: "STEP 04",
      title: "Representation",
      description: "Focused advocacy from first steps through to resolution.",
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#b39366" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#e6e8ec] scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          badge="HOW IT WORKS"
          title="From Your First Call to a Clear Legal Strategy"
        />

        {/* Unified 4-Step Container Matching Figma Image 1 & Node 522:711 */}
        <div className="bg-[#fefefe] rounded-2xl shadow-sm border border-neutral-200/90 overflow-hidden mt-6 sm:mt-8 lg:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-neutral-200/80">
            {steps.map((step) => (
              <div
                key={step.id}
                className="p-7 sm:p-8 lg:p-9 flex flex-col items-start transition-colors duration-200 hover:bg-neutral-50/50"
              >
                {/* Beige Squircle Badge for Icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#faf6f0] border border-[#ece4d6] flex items-center justify-center shrink-0 mb-5 shadow-xs">
                  {step.icon}
                </div>

                {/* Step Number Tagline */}
                <span className="font-sans font-semibold text-xs text-[#a9844c] tracking-[0.165em] uppercase select-none mb-2">
                  {step.stepNumber}
                </span>

                {/* Step Title */}
                <h3 className="font-sans font-bold text-lg lg:text-xl text-[#07183d] tracking-tight mb-2">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="font-sans font-normal text-sm text-[#666666] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
