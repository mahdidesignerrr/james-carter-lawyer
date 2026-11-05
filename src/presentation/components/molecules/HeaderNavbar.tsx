"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { X, ArrowRight } from "lucide-react";

export const HeaderNavbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useScrollNavigation();

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Exact 5 navigation items as designed in Figma (Node 550:1422 & Node 653:1266)
  const navLinks = [
    { label: "Practice Areas", target: "practice-areas" },
    { label: "About", target: "introduction" },
    { label: "FAQ", target: "faq" },
    { label: "Testimonials", target: "testimonials" },
    { label: "Contact", target: "contact" },
  ];

  const handleNavClick = (target: string) => {
    scrollTo(target);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 py-4 lg:py-6 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Desktop Floating Pill Navbar - Permanently Frosted Glass with Symmetrical Padding */}
          <div className="hidden lg:flex items-center justify-between w-full px-10 xl:px-14 py-3 rounded-full bg-white/15 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-300">
            {/* Brand Mark: Cropped Figma Logo & Pure Name */}
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
              <span className="font-serif font-semibold text-2xl text-[#fefefe] tracking-tight group-hover:text-[#cba05d] transition-colors leading-none">
                James Carter
              </span>
            </button>

            {/* Navigation Links - Clean, Spacious & Symmetrical (Figma Node 550:1422) */}
            <nav className="flex items-center gap-8 xl:gap-10">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className="font-sans font-normal text-base xl:text-[17px] text-[#fefefe]/90 hover:text-[#cba05d] transition-colors cursor-pointer py-1 relative group select-none"
                >
                  <span>{link.label}</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#cba05d] group-hover:w-full transition-all duration-300" />
                </button>
              ))}
            </nav>
          </div>

          {/* Mobile Top Bar - Frosted Glass Matching Figma Layout (Node 553:1651) */}
          <div className="lg:hidden flex items-center justify-between w-full bg-white/15 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-white/20 shadow-lg">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1.5 text-white hover:text-[#cba05d] transition-colors cursor-pointer"
              aria-label="Open navigation menu"
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
      </header>

      {/* Full-Screen Mobile Drawer - Pixel-Perfect Alignment to Figma Node 653:1266 */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[100] lg:hidden flex flex-col bg-[#030a1a]/80 backdrop-blur-2xl animate-in fade-in duration-300 overflow-y-auto"
        >
          {/* Menu Container */}
          <div className="w-full min-h-screen flex flex-col justify-between px-6 pt-7 pb-10 max-w-md mx-auto">
            {/* Top Bar: MENU Tagline & Close X */}
            <div>
              <div className="flex items-center justify-between pb-6">
                <span className="font-sans font-semibold text-[11px] text-[#cba05d] uppercase tracking-[0.264em] select-none">
                  MENU
                </span>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-white hover:text-[#cba05d] transition-colors cursor-pointer rounded-full hover:bg-white/10 active:scale-95"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6 stroke-[2]" />
                </button>
              </div>

              {/* Navigation Links with 60px Height & 0.5px Dividers (Node 653:1276) */}
              <nav className="flex flex-col w-full">
                {navLinks.map((link, index) => {
                  const isFirst = index === 0;
                  return (
                    <button
                      key={link.target}
                      onClick={() => handleNavClick(link.target)}
                      className="h-[62px] flex items-center justify-between border-b border-[#59647d]/35 w-full text-left transition-colors group cursor-pointer"
                    >
                      <span
                        className={`font-sans text-xl tracking-tight transition-colors ${
                          isFirst
                            ? "text-[#cba05d] font-medium"
                            : "text-[#fefefe] font-light group-hover:text-[#cba05d]"
                        }`}
                      >
                        {link.label}
                      </span>
                      {isFirst && (
                        <ArrowRight className="w-5 h-5 text-[#cba05d]" />
                      )}
                    </button>
                  );
                })}
              </nav>

              {/* Large Gold CTA Button: Start your case -> (Node 653:1302) */}
              <div className="pt-8">
                <button
                  onClick={() => handleNavClick("contact")}
                  className="w-full py-4 px-6 rounded-md bg-[#cba05d] hover:bg-[#b88f4e] text-white font-sans font-medium text-base shadow-xl flex items-center justify-center gap-2.5 transition-all duration-300 active:scale-98 cursor-pointer"
                >
                  <span>Start your case</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Bottom Subtle Brand Mark */}
            <div className="pt-12 text-center select-none opacity-60">
              <span className="font-serif italic text-xs text-[#fefefe]/70">
                James Carter • Attorney at Law
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
