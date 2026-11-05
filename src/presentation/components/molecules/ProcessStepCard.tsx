import React from "react";
import Image from "next/image";
import { ProcessStep } from "@/domain/process/process.types";

export interface ProcessStepCardProps {
  step: ProcessStep;
  isFirst?: boolean;
  isLast?: boolean;
  className?: string;
}

const STEP_ICONS: Record<number, string> = {
  1: "/assets/icons/call-calling.svg",
  2: "/assets/icons/sms-tracking.svg",
  3: "/assets/icons/briefcase.svg",
  4: "/assets/icons/shield-tick.svg",
};

export const ProcessStepCard: React.FC<ProcessStepCardProps> = ({
  step,
  isFirst = false,
  isLast = false,
  className = "",
}) => {
  const iconSrc = STEP_ICONS[step.stepNumber] || "/assets/icons/call-calling.svg";

  const desktopCornerClass = isFirst
    ? "lg:rounded-l-2xl lg:rounded-r-none"
    : isLast
    ? "lg:rounded-r-2xl lg:rounded-l-none lg:border-l-0"
    : "lg:rounded-none lg:border-l-0";

  return (
    <div
      className={`group bg-[#fefefe] border-2 border-[#e6e8ec] p-6 lg:p-8 rounded-xl ${desktopCornerClass} flex flex-col items-start gap-5 lg:gap-7 transition-all duration-300 hover:border-[#cba05d] hover:shadow-xl hover:-translate-y-1 w-full ${className}`}
    >
      {/* High-Visibility Vector Icon Badge - Large, Bold & Crisp */}
      <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-2xl bg-[#f4eada]/80 border-2 border-[#cba05d]/50 flex items-center justify-center p-3.5 relative shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#f4eada] group-hover:border-[#cba05d] shadow-sm">
        <Image
          src={iconSrc}
          alt={step.title}
          width={48}
          height={48}
          className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 object-contain"
          priority
        />
      </div>

      {/* Content */}
      <div className="flex flex-col items-start w-full">
        <span className="font-sans font-semibold text-xs lg:text-sm text-[#cba05d] uppercase tracking-widest mb-1.5 select-none">
          Step 0{step.stepNumber}
        </span>
        <h3 className="font-sans font-semibold text-lg lg:text-2xl text-[#07183d] pb-2 group-hover:text-[#cba05d] transition-colors">
          {step.title}
        </h3>
        <p className="font-sans font-light text-sm lg:text-base text-[#808080] leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  );
};
