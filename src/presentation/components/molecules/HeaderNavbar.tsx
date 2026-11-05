"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";

export const HeaderNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useScrollNavigation();

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
    <header className="fixed top-0 left-0 right-0 z-50 py-4 lg:py-6 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Desktop Floating Pill Navbar - Permanently Frosted Glass with Symmetrical Padding */}
        <div className="hidden lg:flex items-center justify-between w-full px-10 xl:px-12 py-2.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300">
          {/* Brand Mark: Cropped Figma Logo & Pure Name */}
          <button
            onClick={() => handleNavClick("hero")}
            className="flex items-center gap-3 cursor-pointer group text-left py-0.5"
          >
            <Image
              src="/assets/images/logo.png"
              alt="James Carter"
              width={50}
              height={62}
              className="w-9 h-11 object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow"
              priority
            />
            <span className="font-serif font-semibold text-2xl text-[#fefefe] tracking-tight group-hover:text-[#cba05d] transition-colors leading-none">
              James Carter
            </span>
          </button>

          {/* Navigation Links - Symmetrically Padded & Balanced */}
          <nav className="flex items-center gap-6 xl:gap-7">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="font-sans font-normal text-sm xl:text-[15px] text-[#fefefe]/90 hover:text-[#cba05d] transition-colors cursor-pointer py-1 relative group select-none"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cba05d] group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Top Bar - Frosted Glass Matching Figma Layout */}
        <div className="lg:hidden flex items-center justify-between w-full bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shadow-lg">
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
              className="w-7 h-9 object-contain drop-shadow"
            />
            <span className="font-serif font-semibold text-lg text-[#fefefe] leading-tight">
              James Carter
            </span>
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
          <div className="lg:hidden mt-2 bg-[#05112b]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-5 shadow-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => handleNavClick(link.target)}
                className="text-left py-2.5 px-3 text-base font-sans text-white/90 hover:text-[#cba05d] hover:bg-white/5 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>
        </>
      )}
    </header>
  );
};
