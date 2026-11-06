'use client';

import React from 'react';

export function KeloraBadge() {
  const getTemplateUrl =
    process.env.NEXT_PUBLIC_GET_TEMPLATE_URL ||
    'https://ui8.net/kelora-studio/products/james-carter---law-firm-website-figma-template';

  return (
    <aside
      aria-label="Kelora studio attribution"
      className="fixed bottom-6 right-6 z-50 group select-none"
    >
      {/* Get Template button with matched width and hover bridge */}
      <a
        href={getTemplateUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get this template"
        className="absolute bottom-[calc(100%+16px)] left-0 w-full h-[46px] rounded-full bg-[#ff5c00] hover:bg-[#e05200] text-white flex items-center justify-center gap-2 px-4 shadow-[0_12px_28px_rgba(255,92,0,0.35)] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300 ease-out after:content-[''] after:absolute after:top-full after:left-0 after:right-0 after:h-5 after:bg-transparent"
      >
        <span className="text-[13px] font-medium tracking-tight whitespace-nowrap">
          Get Template
        </span>
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="transition-transform duration-200 group-hover:translate-x-0.5"
        >
          <path d="M7 17L17 7M17 7H7M17 7V17" />
        </svg>
      </a>

      {/* Main Made in Kelora box */}
      <a
        href="https://kelora.studio"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit Kelora Studio"
        className="flex items-center gap-3 px-4 py-2.5 rounded-full bg-[#0c0d0e]/90 hover:bg-[#141618] text-[#f4f5f6] border border-white/10 shadow-[0_12px_32px_rgba(0,0,0,0.45)] backdrop-blur-md transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
      >
        <span className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-white/90">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </span>
        <span className="text-[13px] font-medium tracking-tight text-white/90 whitespace-nowrap">
          Made in Kelora
        </span>
      </a>
    </aside>
  );
}
