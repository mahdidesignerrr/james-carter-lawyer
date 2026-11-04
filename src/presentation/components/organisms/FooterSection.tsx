"use client";

import React from "react";
import Image from "next/image";
import { useScrollNavigation } from "@/application/use-scroll-navigation.hook";
import { PhoneCall, Mail, MapPin, Clock, ArrowRight } from "lucide-react";

export const FooterSection: React.FC = () => {
  const { scrollTo } = useScrollNavigation();

  return (
    <footer className="bg-[#030a1a] text-[#fefefe] border-t border-white/10 pt-16 lg:pt-24 pb-14 relative overflow-hidden">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-[#cba05d]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Fast-Track Consultation Callout Bar - Generous Padding & Substantial Bottom Margin */}
        <div className="bg-gradient-to-r from-[#07183d] via-[#05112b] to-[#07183d] border border-white/15 rounded-3xl p-8 sm:p-12 lg:p-16 mb-24 lg:mb-32 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col max-w-xl">
            <span className="font-sans font-semibold text-xs text-[#cba05d] uppercase tracking-[3px] mb-2 select-none">
              Need Immediate Legal Counsel?
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white leading-tight">
              Speak Directly with Our Legal Team Today
            </h3>
            <p className="font-sans font-light text-sm text-neutral-400 mt-2 leading-relaxed">
              Facing urgent deadlines or legal disputes? Our attorneys are available for immediate confidential consultations.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full md:w-auto shrink-0">
            <a
              href="tel:2125550147"
              className="flex items-center justify-center gap-3 px-7 py-4 bg-white/10 hover:bg-white/15 border border-white/15 text-white rounded-xl transition-all font-sans text-sm font-medium hover:scale-105 active:scale-95 shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-[#cba05d]" />
              <span>(212) 555-0147</span>
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="flex items-center justify-center gap-2.5 px-7 py-4 bg-[#cba05d] hover:bg-[#b88f4e] text-[#030a1a] font-semibold rounded-xl transition-all shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm cursor-pointer"
            >
              <span>Schedule Online</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Clean, Spacious 3-Column Grid - Faithful to Figma Design */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Col 1: Brand Story & Mission (5 Cols) */}
          <div className="md:col-span-5 flex flex-col items-start gap-4">
            <div className="flex items-center gap-3.5">
              <Image
                src="/assets/images/logo.png"
                alt="James Carter"
                width={48}
                height={60}
                className="w-10 h-12 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-serif font-bold text-2xl text-[#fefefe] tracking-tight leading-none">
                  JAMES CARTER
                </span>
                <span className="text-[10px] font-sans font-medium text-[#cba05d] uppercase tracking-[2.5px] mt-1">
                  Attorney at Law
                </span>
              </div>
            </div>

            <p className="font-sans font-light text-sm sm:text-base text-neutral-400 leading-relaxed max-w-md pt-2">
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
            <ul className="flex flex-col gap-3 font-sans font-light text-sm text-neutral-300">
              {[
                { label: "Practice Areas", target: "practice-areas" },
                { label: "About", target: "introduction" },
                { label: "Why Choose Us", target: "why-us" },
                { label: "How It Works", target: "how-it-works" },
                { label: "Attorney Profile", target: "attorney" },
                { label: "Client Reviews", target: "testimonials" },
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

          {/* Col 3: Get In Touch (4 Cols) */}
          <div className="md:col-span-4 flex flex-col items-start gap-4">
            <span className="font-sans font-semibold text-xs text-[#cba05d] tracking-[2.5px] uppercase mb-1">
              Get in Touch
            </span>
            <div className="flex flex-col gap-4 font-sans font-light text-sm text-neutral-300">
              <div className="flex items-center gap-3">
                <PhoneCall className="w-4 h-4 text-[#cba05d] shrink-0" />
                <a href="tel:2125550147" className="hover:text-[#cba05d] transition-colors">(212) 555-0147</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#cba05d] shrink-0" />
                <a href="mailto:JamesCarter@gmail.com" className="hover:text-[#cba05d] transition-colors">JamesCarter@gmail.com</a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#cba05d] mt-1 shrink-0" />
                <span>400 Madison Avenue, Suite 1800, New York, NY 10017</span>
              </div>
              <div className="flex items-center gap-3 pt-2 text-xs text-neutral-400">
                <Clock className="w-4 h-4 text-[#cba05d] shrink-0" />
                <span>Mon–Fri: 8:30 AM – 6:30 PM (24/7 Priority Hotline)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Disclaimers */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-sans text-neutral-500">
          <p>© {new Date().getFullYear()} Ashford & Vance, Attorneys at Law. All rights reserved.</p>
          <p className="text-center md:text-right max-w-xl">
            Attorney Advertising. Prior results do not guarantee or predict a similar outcome.
          </p>
        </div>
      </div>
    </footer>
  );
};
