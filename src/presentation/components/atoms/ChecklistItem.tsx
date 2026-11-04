import React from "react";
import Image from "next/image";

export interface ChecklistItemProps {
  text: string;
  theme?: "light" | "dark";
  className?: string;
}

export const ChecklistItem: React.FC<ChecklistItemProps> = ({
  text,
  theme = "light",
  className = "",
}) => {
  const isDark = theme === "dark";

  return (
    <div className={`flex items-center gap-3 py-2 w-full ${className}`}>
      <div className="relative shrink-0 w-6 h-6 flex items-center justify-center">
        <Image
          src="/assets/icons/tick-square.svg"
          alt=""
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>
      <p
        className={`font-sans font-light text-base lg:text-[20px] leading-normal ${
          isDark ? "text-[#fefefe]" : "text-[#161616]"
        }`}
      >
        {text}
      </p>
    </div>
  );
};
