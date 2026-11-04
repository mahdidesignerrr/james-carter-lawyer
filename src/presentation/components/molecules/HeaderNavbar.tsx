"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const HeaderNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useScrollNavigation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Practice Areas", target: "practice-areas" },
    { label: "About", target: "introduction" },
    { label: "Why Us", target: "why-us" },
    { label: "How It Works", target: "how-it-works" },
    { label: "Attorney", target: "attorney" },
    { label: "Testimonials", target: "testimonials" },
    { label: "FAQ", target: "faq" },
    { label: "Contact", target: "contact" },
  ];

  const handleNavClick = (target: string) => {
    scrollTo(target);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-3 lg:py-5 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop floating pill navbar - Pure Figma Layout */}
        <div
          className={`hidden lg:flex items-center justify-between w-full px-8 py-3 rounded-full transition-all duration-300 ${
            isScrolled
              ? "bg-[#07183d]/95 backdrop-blur-md shadow-2xl border border-white/15"
              : "bg-white/15 backdrop-blur-md border border-white/20 shadow-lg"
          }`}
        >
          {/* Brand Mark: Prominent Cropped Figma Logo */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-3.5 cursor-pointer group text-left py-0.5"
          >
            <Image
              src="/assets/images/logo.png"
              alt="James Carter"
              width={50}
              height={62}
              className="w-10 h-12 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow"
              priority
            />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-2xl text-[#fefefe] tracking-tight group-hover:text-[#cba05d] transition-colors leading-none">
                James Carter
              </span>
              <span className="font-sans font-medium text-[10px] text-[#cba05d] tracking-[2.5px] uppercase mt-1">
                Attorney at Law
              </span>
            </div>
          </button>

          {/* Navigation Links - Clean & Balanced as in Figma */}
          <nav className="flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="font-sans font-normal text-sm lg:text-[15px] text-[#fefefe]/90 hover:text-[#cba05d] transition-colors cursor-pointer py-1 relative group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cba05d] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile top bar */}
        <div className="lg:hidden flex items-center justify-between w-full bg-[#07183d]/95 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/10 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-white hover:text-[#cba05d] transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              <Image
                src="/assets/icons/menu.svg"
                alt="Menu"
                width={26}
                height={26}
                className="brightness-200"
              />
            </button>

            <div
              onClick={() => handleNavClick("hero")}
              className="flex items-center gap-2.5 cursor-pointer"
            >
              <Image
                src="/assets/images/logo.png"
                alt="Logo"
                width={36}
                height={44}
                className="w-8 h-10 object-contain drop-shadow"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-base text-[#fefefe] leading-tight">
                  James Carter
                </span>
                <span className="text-[8px] font-sans font-medium text-[#cba05d] uppercase tracking-wider mt-0.5">
                  Attorney at Law
                </span>
              </div>
            </div>
          </div>

          <button
            onClick={() => handleNavClick("contact")}
            className="px-3.5 py-1.5 border border-[#cba05d] text-[#cba05d] hover:bg-[#cba05d] hover:text-[#030a1a] text-xs font-sans font-medium rounded-full active:scale-95 transition-all cursor-pointer"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Mobile Drawer with Backdrop */}
      {mobileMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm -z-10 lg:hidden animate-in fade-in duration-200"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="lg:hidden mt-2 bg-[#05112b] border border-white/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-2.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left py-2 px-3 text-base font-sans text-white/90 hover:text-[#cba05d] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-white/10 mt-1">
              <button
                onClick={() => handleNavClick("contact")}
                className="w-full py-2.5 bg-[#cba05d] text-white text-sm font-sans font-medium rounded-lg text-center"
              >
                Schedule Consultation
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
};
