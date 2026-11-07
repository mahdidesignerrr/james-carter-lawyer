import React from "react";

export interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  theme?: "light" | "dark" | "responsive" | "dark-to-light";
  align?: "left" | "center";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  theme = "light",
  align = "left",
  className = "",
}) => {
  const alignClass = align === "center" ? "items-center text-center" : "items-start text-left";

  const getTitleColor = () => {
    switch (theme) {
      case "dark-to-light":
        return "text-[#fefefe] lg:text-[#161616]";
      case "responsive":
        return "text-[#161616] lg:text-[#fefefe]";
      case "dark":
        return "text-[#fefefe]";
      case "light":
      default:
        return "text-[#161616]";
    }
  };

  const getSubtitleColor = () => {
    switch (theme) {
      case "dark-to-light":
        return "text-[#fefefe]/85 lg:text-[#808080]";
      case "responsive":
        return "text-[#808080] lg:text-[#fefefe]/85";
      case "dark":
        return "text-[#fefefe]/85";
      case "light":
      default:
        return "text-[#808080]";
    }
  };

  return (
    <div className={`flex flex-col ${alignClass} w-full pb-6 sm:pb-7 lg:pb-8 ${className}`}>
      {badge && (
        <div className="py-1 lg:py-1.5">
          <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[15px] text-[#cba05d] tracking-[2.64px] uppercase select-none">
            {badge}
          </span>
        </div>
      )}
      <h2
        className={`font-serif font-medium text-2xl sm:text-3xl lg:text-[40px] leading-[1.2] pt-1 pb-3 ${getTitleColor()}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`font-sans font-normal text-sm sm:text-base lg:text-[18px] xl:text-[20px] max-w-3xl leading-relaxed ${getSubtitleColor()}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
