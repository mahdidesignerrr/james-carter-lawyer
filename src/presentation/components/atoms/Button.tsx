import React from "react";
import Image from "next/image";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gold" | "outline-gold" | "navy" | "white";
  size?: "sm" | "md" | "lg";
  showArrow?: boolean;
  arrowColor?: "white" | "gold" | "navy";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "gold",
  size = "md",
  showArrow = false,
  arrowColor,
  children,
  className = "",
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-sans font-normal transition-all duration-200 rounded-[4px] min-h-[44px] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none active:scale-[0.99]";

  const variantStyles = {
    gold: "bg-[#cba05d] text-[#fefefe] hover:bg-[#b88f4e] shadow-sm",
    "outline-gold": "border border-[#cba05d] text-[#cba05d] hover:bg-[#cba05d] hover:text-[#fefefe]",
    navy: "bg-[#07183d] text-[#fefefe] hover:bg-[#05112b] shadow-sm",
    white: "bg-[#fefefe] text-[#161616] hover:bg-[#f4f4f4] shadow-sm",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm gap-2",
    md: "px-6 py-3 text-base gap-2",
    lg: "px-6 py-4 text-lg lg:text-[20px] gap-2 tracking-[0.35px]",
  };

  // Determine arrow icon source
  const selectedArrowColor = arrowColor || (variant === "outline-gold" ? "gold" : "white");
  const arrowSvg =
    selectedArrowColor === "gold"
      ? "/assets/icons/arrow-right.svg"
      : "/assets/icons/arrow-right.svg";

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      disabled={disabled}
      {...props}
    >
      <span>{children}</span>
      {showArrow && (
        <span className="relative shrink-0 w-5 h-5 flex items-center justify-center transition-transform group-hover:translate-x-1">
          <Image
            src={arrowSvg}
            alt=""
            width={20}
            height={20}
            className={`w-5 h-5 ${selectedArrowColor === "gold" ? "brightness-100" : "brightness-200"}`}
          />
        </span>
      )}
    </button>
  );
};
