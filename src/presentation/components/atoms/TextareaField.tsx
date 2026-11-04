import React from "react";

export interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  optional?: boolean;
  error?: string;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  optional = false,
  error,
  className = "",
  id,
  rows = 4,
  ...props
}) => {
  const generatedId = `textarea-${label.toLowerCase().replace(/[^a-z0-9]/g, "-")}`;
  const textareaId = id || generatedId;

  return (
    <div className={`group flex flex-col items-start w-full gap-2 ${className}`}>
      <label
        htmlFor={textareaId}
        className="flex items-center gap-1.5 text-[#fefefe] group-focus-within:text-[#cba05d] font-sans text-sm md:text-base font-normal transition-colors duration-200 cursor-pointer"
      >
        <span>{label}</span>
        {optional && (
          <span className="text-xs text-[#b2b7c3] group-focus-within:text-[#cba05d]/70 font-light transition-colors">
            (optional)
          </span>
        )}
      </label>
      <div className="relative w-full transition-transform duration-300 ease-out group-focus-within:-translate-y-0.5">
        <textarea
          id={textareaId}
          rows={rows}
          aria-invalid={!!error}
          aria-describedby={error ? `${textareaId}-error` : undefined}
          className={`w-full bg-[#394664]/80 group-focus-within:bg-[#394664] border rounded-lg px-4 py-3 text-base text-[#fefefe] placeholder-[#b2b7c3] focus:outline-none transition-all duration-300 ease-out resize-none ${
            error
              ? "border-red-400 focus:border-red-400 focus:ring-2 focus:ring-red-400/40 focus:shadow-[0_0_15px_rgba(248,113,113,0.25)]"
              : "border-white/20 hover:border-white/40 focus:border-[#cba05d] focus:ring-2 focus:ring-[#cba05d]/40 focus:shadow-[0_0_20px_rgba(203,160,93,0.2)]"
          }`}
          {...props}
        />
      </div>
      {error && (
        <span
          id={`${textareaId}-error`}
          role="alert"
          className="text-xs text-red-300 mt-0.5 animate-in fade-in duration-200"
        >
          {error}
        </span>
      )}
    </div>
  );
};
