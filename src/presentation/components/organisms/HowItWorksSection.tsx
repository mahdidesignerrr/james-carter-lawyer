import React from "react";
import { PROCESS_STEPS } from "@/domain/process/process.constants";
import { ProcessStepCard } from "../molecules/ProcessStepCard";
import { SectionHeading } from "../atoms/SectionHeading";

export const HowItWorksSection: React.FC = () => {
  return (
    <section id="how-it-works" className="bg-[#e6e8ec] py-14 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <SectionHeading
          badge="HOW IT WORKS"
          title="From Your First Call to a Clear Legal Strategy"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 pt-4">
          {PROCESS_STEPS.map((step, idx) => (
            <ProcessStepCard
              key={step.id}
              step={step}
              isFirst={idx === 0}
              isLast={idx === PROCESS_STEPS.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
