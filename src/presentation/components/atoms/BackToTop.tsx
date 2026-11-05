"use client";

import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export const BackToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 450);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-4 left-4 sm:bottom-20 sm:left-auto sm:right-6 z-40 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#cba05d] text-[#030a1a] flex items-center justify-center shadow-xl hover:bg-[#b88f4e] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer border border-white/20 animate-in fade-in slide-in-from-bottom-3"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
