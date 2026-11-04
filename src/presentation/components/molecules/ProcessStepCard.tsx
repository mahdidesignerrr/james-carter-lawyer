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
      {/* Prominent High-Visibility Vector Icon Badge (60x60 on mobile, 68x68 on desktop) */}
      <div className="w-14 h-14 sm:w-16 sm:h-16 lg:w-[68px] lg:h-[68px] rounded-xl bg-[#cba05d]/15 border-2 border-[#cba05d]/40 flex items-center justify-center p-3 relative shrink-0 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#cba05d]/25 group-hover:border-[#cba05d] shadow-sm">
        <Image
          src={iconSrc}
          alt={step.title}
          width={40}
          height={40}
          className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 object-contain drop-shadow"
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
