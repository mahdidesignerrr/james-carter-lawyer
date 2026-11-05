"use client";

import React from "react";
import { useConsultationForm } from "@/application/use-consultation-form.hook";
import { CheckCircle2 } from "lucide-react";

const PRACTICE_CHIPS = [
  "Family Law",
  "Criminal Defense",
  "Immigration",
  "Corporate Law",
  "Civil Litigation",
  "Real Estate",
  "Other",
];

export const ConsultationSection: React.FC = () => {
  const {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    updateField,
    handleSubmit,
    reset,
  } = useConsultationForm();

  return (
    <section id="contact" className="w-full relative overflow-hidden bg-white">
      {/* Dual Full-Bleed Background for Ultra-Wide Displays */}
      <div className="absolute inset-0 pointer-events-none hidden lg:grid lg:grid-cols-2">
        <div className="bg-white" />
        <div className="bg-[#07183d]" />
      </div>

      {/* Main Container constrained to Figma 1440px architecture */}
      <div className="relative z-10 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column: White Side (Figma Node 522:767) */}
        <div className="bg-white flex flex-col justify-between py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-16 xl:px-20">
          {/* Top Title & Narrative */}
          <div>
            <span className="font-sans font-semibold text-xs sm:text-sm lg:text-[16px] text-[#cba05d] tracking-[2.64px] uppercase select-none block">
              CONSULTATION BOOKING
            </span>

            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[40px] text-[#161616] leading-[1.2] pt-2 pb-4">
              Take the First Step With Confidence.
            </h2>

            <p className="font-sans font-normal text-base sm:text-lg lg:text-[20px] text-[#161616] leading-relaxed pb-6 max-w-[480px]">
              Tell us a little about your situation and choose a convenient time for a confidential consultation.
            </p>

            {/* Privacy Assurance Bar with Gold Vertical Accent (Node 522:771) */}
            <div className="border-l-2 border-[#cba05d] pl-5 py-2 my-8 lg:my-10">
              <p className="font-sans font-medium text-base text-[#161616] leading-snug">
                Your privacy comes first
              </p>
              <p className="font-sans font-normal text-sm lg:text-base text-[#808080] leading-snug">
                All information you share is kept strictly confidential.
              </p>
            </div>
          </div>

          {/* Direct Office Details (Node 522:774) */}
          <div className="flex flex-col gap-6 lg:gap-8 pt-6 border-t border-neutral-100 lg:border-transparent">
            <div>
              <span className="font-serif text-sm lg:text-base text-[#aaaaaa] block mb-1 font-normal">
                Contact
              </span>
              <a
                href="tel:2125550147"
                className="font-sans font-light text-2xl lg:text-[24px] text-[#07183d] hover:text-[#cba05d] transition-colors"
              >
                (212) 555-0147
              </a>
            </div>

            <div>
              <span className="font-serif text-sm lg:text-base text-[#aaaaaa] block mb-1 font-normal">
                Working Hours
              </span>
              <span className="font-sans font-normal text-base text-[#07183d] block">
                Mon–Fri · 9:00 AM – 6:00 PM
              </span>
            </div>

            <div>
              <span className="font-serif text-sm lg:text-base text-[#aaaaaa] block mb-1 font-normal">
                Office Address
              </span>
              <span className="font-sans font-light text-xl lg:text-[24px] text-[#07183d] leading-snug block max-w-sm">
                400 Madison Avenue, Suite 1800, New York, NY
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Solid Dark Navy (Figma Node 522:778) */}
        <div className="bg-[#07183d] text-white py-16 sm:py-20 lg:py-20 px-6 sm:px-12 lg:px-16 xl:px-20 flex flex-col justify-center">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in duration-300 max-w-[560px]">
              <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-[#cba05d] mb-4 border border-white/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
                Consultation Request Received
              </h3>
              <p className="font-sans text-neutral-300 max-w-md mb-8 leading-relaxed text-sm sm:text-base">
                Thank you, <strong>{formData.fullName}</strong>. Your consultation inquiry has been logged. Our office will contact you directly.
              </p>
              <button
                type="button"
                onClick={reset}
                className="py-3 px-8 rounded-md bg-white text-[#161616] font-medium text-base hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                Book Another Consultation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full max-w-[560px]" noValidate>
              {/* Question 1: What legal issue do you need help with? */}
              <div>
                <h3 className="font-sans font-medium text-xl lg:text-[24px] text-white mb-4">
                  What legal issue do you need help with?
                </h3>
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {PRACTICE_CHIPS.map((chip) => {
                    const isSelected = formData.practiceArea === chip;
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => updateField("practiceArea", chip)}
                        className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-sm sm:text-[15px] font-medium transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#394664] text-white border border-transparent shadow-sm"
                            : "bg-transparent text-[#b2b7c3] border border-[#b2b7c3]/80 hover:border-white hover:text-white"
                        }`}
                      >
                        {chip}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Question 2: Is there anything else you’d like us to know? */}
              <div>
                <h3 className="font-sans font-medium text-xl lg:text-[24px] text-white mb-3">
                  Is there anything else you’d like us to know?
                </h3>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell us a little about your situation…"
                  className={`w-full h-[140px] bg-white/[0.04] border rounded-lg p-4 text-white placeholder-[#8d95a6] text-base font-normal resize-none focus:outline-none focus:bg-[#394664]/50 transition-all ${
                    errors.message ? "border-red-400" : "border-[#8d95a6]/60 focus:border-white"
                  }`}
                />
                {errors.message && (
                  <span className="text-xs text-red-300 mt-1 block">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Question 3: Enter your details to book your consultation */}
              <div>
                <h3 className="font-sans font-medium text-xl lg:text-[24px] text-white mb-3">
                  Enter your details to book your consultation.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-sm sm:text-base text-white/90 mb-2 block font-normal">
                      Phone <span className="text-xs text-[#8d95a6]">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+1 (555) 000-0000"
                      className="w-full h-14 bg-white/[0.04] border border-[#8d95a6]/60 focus:border-white focus:bg-[#394664]/50 rounded-lg px-4 text-white placeholder-[#8d95a6] text-base focus:outline-none transition-all"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-sm sm:text-base text-white/90 mb-2 block font-normal">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="e.g. David Miller"
                      className={`w-full h-14 bg-white/[0.04] border rounded-lg px-4 text-white placeholder-[#8d95a6] text-base focus:border-white focus:bg-[#394664]/50 focus:outline-none transition-all ${
                        errors.fullName ? "border-red-400" : "border-[#8d95a6]/60"
                      }`}
                    />
                    {errors.fullName && (
                      <span className="text-xs text-red-300 mt-1 block">
                        {errors.fullName}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit CTA: Book a Consultation (White Button, Black Text, No Arrow - Node 522:804) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[60px] rounded-[4px] bg-white hover:bg-neutral-100 text-[#161616] font-sans font-medium text-lg lg:text-xl shadow-lg transition-all cursor-pointer active:scale-[0.99] flex items-center justify-center"
                >
                  {isSubmitting ? "Submitting..." : "Book a Consultation"}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
