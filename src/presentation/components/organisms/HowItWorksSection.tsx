"use client";

import React from "react";
import { SectionHeading } from "../atoms/SectionHeading";

interface StepItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export const HowItWorksSection: React.FC = () => {
  const steps: StepItem[] = [
    {
      id: "consultation",
      title: "Book a Consultation",
      description: "Reach out and choose a convenient, confidential time to talk.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M22 10C25 11 28 14 29 17" stroke="#cba05d" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 6C30 8 33 12 35 18" stroke="#cba05d" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 7C10.5 7 9 8 8 9.5C6 12 6.5 17 11 23C15.5 29 20.5 31.5 24 30.5C26 30 27.5 28.5 28.5 27L25 22C24.5 21.5 23.5 21.5 22.5 22L20.5 23.5C18.5 22.5 16.5 20.5 15.5 18.5L17 16.5C17.5 15.5 17.5 14.5 17 14L12 7Z" stroke="#07183d" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "evaluation",
      title: "Case Evaluation",
      description: "We listen carefully and assess the facts, risks, and priorities.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M15 8H25V11H15V8Z" stroke="#07183d" strokeWidth="2" strokeLinejoin="round" />
          <path d="M12 10H10C8.89543 10 8 10.8954 8 12V32C8 33.1046 8.89543 34 10 34H26C27.1046 34 28 33.1046 28 32V25" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
          <path d="M13 16H23" stroke="#07183d" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M13 21H21" stroke="#07183d" strokeWidth="1.8" strokeLinecap="round" />
          <circle cx="28" cy="27" r="7" stroke="#cba05d" strokeWidth="2" fill="#ffffff" />
          <path d="M25 27L27 29L31 25" stroke="#cba05d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      id: "strategy",
      title: "Legal Strategy",
      description: "A clear strategy is built around your specific circumstances.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M20 7V33" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
          <path d="M15 33H25" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 13H32" stroke="#07183d" strokeWidth="2" strokeLinecap="round" />
          <circle cx="20" cy="7" r="2" fill="#cba05d" />
          <path d="M8 13L5 22H15L12 13" stroke="#cba05d" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M5 22C5 24 8 26 10 26C12 26 15 24 15 22" stroke="#cba05d" strokeWidth="1.8" />
          <path d="M32 13L29 22H39L36 13" stroke="#cba05d" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M29 22C29 24 32 26 34 26C36 26 39 24 39 22" stroke="#cba05d" strokeWidth="1.8" />
        </svg>
      ),
    },
    {
      id: "representation",
      title: "Representation",
      description: "Focused advocacy from first steps through to resolution.",
      icon: (
        <svg width="42" height="42" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
          <path d="M20 6L25 8V14C25 17 22.5 19.5 20 21C17.5 19.5 15 17 15 14V8L20 6Z" stroke="#cba05d" strokeWidth="1.8" fill="#ffffff" />
          <path d="M18 13L19.5 14.5L22.5 11.5" stroke="#cba05d" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 23L12 20L17 24L15 26L18 29L14 33L10 28L12 26L7 23Z" stroke="#07183d" strokeWidth="2" strokeLinejoin="round" />
          <path d="M33 23L28 20L23 24L25 26L22 29L26 33L30 28L28 26L33 23Z" stroke="#07183d" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#e6e8ec] py-16 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          badge="HOW IT WORKS"
          title="From Your First Call to a Clear Legal Strategy"
        />

        {/* Single Unified White Container Matching Figma Node 522:711 & Image 5 */}
        <div className="bg-[#fefefe] rounded-2xl shadow-sm border border-neutral-200/90 overflow-hidden mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 lg:divide-x divide-neutral-200/80">
            {steps.map((step) => (
              <div
                key={step.id}
                className="p-8 lg:p-10 flex flex-col items-start gap-4 transition-colors duration-200 hover:bg-neutral-50/50"
              >
                {/* Bare Vector Icon (No Squircle Box) */}
                <div className="w-12 h-12 flex items-center justify-start shrink-0 mb-2">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="font-sans font-semibold text-lg lg:text-xl text-[#07183d] tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="font-sans font-light text-sm sm:text-base text-[#808080] leading-relaxed">
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
