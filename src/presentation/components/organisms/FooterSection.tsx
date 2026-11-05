"use client";

import React from "react";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { Phone, Mail, MapPin } from "lucide-react";

export const FooterSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <footer className="bg-[#e6e8ec] text-[#07183d] pt-[80px] lg:pt-[100px] px-6 sm:px-12 lg:px-8">
      <div className="max-w-[1200px] mx-auto w-full">
        {/* Main Content (Figma Node 566:1747) */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-16 pb-[48px]">
          {/* Left Column: James Carter narrative (Node 566:1739) */}
          <div className="flex flex-col gap-6 items-start max-w-[500px]">
            <h3 className="font-serif font-medium text-[#07183d] text-2xl lg:text-[32px] uppercase tracking-normal">
              James Carter
            </h3>
            <p className="font-sans font-normal text-base sm:text-lg lg:text-[20px] text-[#5b5b5b] leading-relaxed">
              Strategic legal counsel built around experience, discretion, and a clear understanding of what is at stake.
            </p>
            <p className="font-serif font-normal text-lg lg:text-[20px] text-[#07183d]">
              Your Case. Your Privacy. Our Commitment.
            </p>
          </div>

          {/* Right Columns: Explore + Get in Touch (Node 566:1746) */}
          <div className="flex flex-col sm:flex-row gap-10 sm:gap-14 lg:gap-[56px] items-start">
            {/* Explore (Node 566:1737) */}
            <div className="flex flex-col gap-6 sm:gap-8 items-start w-full sm:w-[180px] lg:w-[200px]">
              <h4 className="font-sans font-semibold text-[#07183d] text-lg lg:text-[20px] uppercase tracking-wider">
                Explore
              </h4>
              <ul className="flex flex-col items-start w-full font-sans text-base text-[#808080]">
                {[
                  { label: "Practice Areas", target: "practice-areas" },
                  { label: "About", target: "introduction" },
                  { label: "FAQ", target: "faq" },
                  { label: "Testimonials", target: "testimonials" },
                  { label: "Contact", target: "contact" },
                ].map((link) => (
                  <li key={link.target} className="py-2 w-full">
                    <button
                      onClick={() => scrollTo(link.target)}
                      className="text-[#808080] hover:text-[#07183d] transition-colors cursor-pointer text-left select-none"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Get in Touch (Node 566:1706) */}
            <div className="flex flex-col gap-6 sm:gap-8 items-start">
              <h4 className="font-sans font-semibold text-[#07183d] text-lg lg:text-[20px] uppercase tracking-wider">
                Get in Touch
              </h4>
              <div className="flex flex-col gap-3.5 items-start font-sans text-base text-[#808080]">
                <a
                  href="tel:2125550147"
                  className="flex items-center gap-2.5 py-1 text-[#808080] hover:text-[#07183d] transition-colors group cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#808080] group-hover:text-[#07183d] shrink-0" />
                  <span>(212) 555-0147</span>
                </a>

                <a
                  href="mailto:JamesCarter@gmail.com"
                  className="flex items-center gap-2.5 py-1 text-[#808080] hover:text-[#07183d] transition-colors group cursor-pointer"
                >
                  <Mail className="w-4 h-4 text-[#808080] group-hover:text-[#07183d] shrink-0" />
                  <span>JamesCarter@gmail.com</span>
                </a>

                <div className="flex items-start gap-2.5 py-1 text-[#808080] max-w-[250px]">
                  <MapPin className="w-4 h-4 text-[#808080] shrink-0 mt-1" />
                  <span className="leading-normal">
                    400 Madison Avenue, Suite 1800, New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Advertising Disclaimer (Node 566:1748) */}
        <div className="border-t-[0.5px] border-[#59647d] pt-6 pb-20 sm:pb-24 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans font-normal text-sm sm:text-base text-[#59647d]">
          <p className="text-center sm:text-left">
            © 2026 James Carter, Attorneys at Law. All rights reserved.
          </p>
          <p className="text-center sm:text-right">
            Attorney Advertising. Prior results do not guarantee a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};
