"use client";

import React from "react";
import Image from "next/image";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { PhoneCall, Mail, MapPin } from "lucide-react";

export const FooterSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <footer className="bg-[#f6f8fa] text-[#161616] border-t border-neutral-200/80 pt-16 lg:pt-24 pb-14 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Spacious 3-Column Grid Matching Figma Node 566:1738 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-neutral-200/80">
          {/* Col 1: Brand Story & Mission (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3">
              <Image
                src="/assets/images/logo.png"
                alt="James Carter"
                width={48}
                height={60}
                className="w-9 h-11 object-contain"
              />
              <span className="font-serif font-medium text-2xl lg:text-3xl text-[#07183d] uppercase tracking-wide">
                James Carter
              </span>
            </div>

            <p className="font-sans font-light text-sm sm:text-base text-[#666666] leading-relaxed max-w-md pt-2">
              Strategic legal counsel built around experience, discretion, and a clear understanding of what is at stake.
            </p>

            <p className="font-serif italic text-base lg:text-lg text-[#cba05d] pt-2">
              &ldquo;Your Case. Your Privacy. Our Commitment.&rdquo;
            </p>
          </div>

          {/* Col 2: Navigation Links (3 Cols) */}
          <div className="md:col-span-3 flex flex-col items-start gap-4">
            <span className="font-sans font-semibold text-xs text-[#cba05d] tracking-[2.5px] uppercase mb-1">
              Explore
            </span>
            <ul className="flex flex-col gap-3 font-sans font-light text-sm text-[#4d4d4d]">
              {[
                { label: "Practice Areas", target: "practice-areas" },
                { label: "About", target: "introduction" },
                { label: "Why Choose Us", target: "why-us" },
                { label: "How It Works", target: "how-it-works" },
                { label: "Attorney Profile", target: "attorney" },
                { label: "Testimonials", target: "testimonials" },
                { label: "FAQ", target: "faq" },
                { label: "Contact", target: "contact" },
              ].map((item) => (
                <li
                  key={item.label}
                  onClick={() => scrollTo(item.target)}
                  className="hover:text-[#cba05d] transition-colors cursor-pointer"
                >
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact Details (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <span className="font-sans font-semibold text-xs text-[#cba05d] tracking-[2.5px] uppercase mb-1">
              Get in Touch
            </span>
            <div className="flex flex-col gap-4 font-sans font-light text-sm text-[#4d4d4d]">
              <a
                href="tel:2125550147"
                className="flex items-center gap-3.5 hover:text-[#cba05d] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-200/60 flex items-center justify-center shrink-0 group-hover:bg-[#cba05d]/20 transition-colors">
                  <PhoneCall className="w-4 h-4 text-[#cba05d]" />
                </div>
                <span>(212) 555-0147</span>
              </a>

              <a
                href="mailto:contact@carterlaw.com"
                className="flex items-center gap-3.5 hover:text-[#cba05d] transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-neutral-200/60 flex items-center justify-center shrink-0 group-hover:bg-[#cba05d]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#cba05d]" />
                </div>
                <span>contact@carterlaw.com</span>
              </a>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-neutral-200/60 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-[#cba05d]" />
                </div>
                <span className="leading-relaxed">
                  350 Fifth Avenue, 42nd Floor,
                  <br />
                  New York, NY 10118
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal Policies */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans font-light text-xs text-[#808080]">
          <p>© {new Date().getFullYear()} James Carter. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-[#cba05d] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              onClick={() => scrollTo("faq")}
              className="hover:text-[#cba05d] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
