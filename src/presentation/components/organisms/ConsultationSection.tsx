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
    <section id="contact" className="w-full relative overflow-hidden bg-[#fefefe]">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full">
        {/* Left Column: White Background (Figma Node 522:767) */}
        <div className="bg-[#ffffff] flex flex-col justify-between py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-20 xl:px-24">
          <div>
            <span className="font-sans font-semibold text-xs sm:text-sm text-[#cba05d] tracking-[2.64px] uppercase select-none">
              CONSULTATION BOOKING
            </span>

            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] text-[#161616] leading-tight pt-3 pb-4">
              Take the First Step With Confidence.
            </h2>

            <p className="font-sans font-normal text-base sm:text-lg text-[#161616] leading-relaxed pb-8 max-w-lg">
              Tell us a little about your situation and choose a convenient time for a confidential consultation.
            </p>

            {/* Privacy Assurance Bar with Gold Vertical Accent (Node 522:771) */}
            <div className="border-l-2 border-[#cba05d] pl-4 py-1 mb-12 lg:mb-20">
              <p className="font-sans font-normal text-base text-[#161616]">
                Your privacy comes first
              </p>
              <p className="font-sans font-light text-sm text-[#808080]">
                All information you share is kept strictly confidential.
              </p>
            </div>
          </div>

          {/* Direct Office Details without Icon Boxes (Node 522:774) */}
          <div className="flex flex-col gap-8 pt-4">
            <div>
              <span className="font-sans text-xs text-[#808080] uppercase tracking-wider block mb-1">
                Contact
              </span>
              <a
                href="tel:2125550147"
                className="font-sans font-normal text-2xl lg:text-[28px] text-[#161616] hover:text-[#cba05d] transition-colors"
              >
                (212) 555-0147
              </a>
            </div>

            <div>
              <span className="font-sans text-xs text-[#808080] uppercase tracking-wider block mb-1">
                Working Hours
              </span>
              <span className="font-sans font-normal text-base text-[#161616]">
                Mon–Fri · 9:00 AM – 6:00 PM
              </span>
            </div>

            <div>
              <span className="font-sans text-xs text-[#808080] uppercase tracking-wider block mb-1">
                Office Address
              </span>
              <span className="font-sans font-normal text-lg lg:text-xl text-[#161616] leading-relaxed">
                400 Madison Avenue, Suite 1800, New York, NY
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Solid Dark Navy (Figma Node 522:778) */}
        <div className="bg-[#07183d] text-white py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:px-20 xl:px-24 flex flex-col justify-center">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-16 animate-in fade-in duration-300">
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
                className="py-3 px-8 rounded-md bg-white text-[#161616] font-medium text-base hover:bg-neutral-100 transition-colors"
              >
                Book Another Consultation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-7 w-full max-w-xl mx-auto lg:mx-0" noValidate>
              {/* Question 1: What legal issue do you need help with? */}
              <div>
                <h3 className="font-sans font-medium text-lg sm:text-xl text-white pb-3.5">
                  What legal issue do you need help with?
                </h3>
                <div className="flex flex-wrap gap-2.5">
                  {PRACTICE_CHIPS.map((chip) => {
                    const isSelected = formData.practiceArea === chip;
                    return (
                      <button
                        key={chip}
                        type="button"
                        onClick={() => updateField("practiceArea", chip)}
                        className={`px-4 py-2.5 rounded-lg text-sm font-sans transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#394664] text-white border border-transparent shadow-sm"
                            : "bg-transparent text-[#b2b7c3] border border-white/20 hover:border-white/40"
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
                <h3 className="font-sans font-medium text-lg sm:text-xl text-white pb-3.5">
                  Is there anything else you’d like us to know?
                </h3>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Tell us a little about your situation…"
                  className={`w-full bg-[#05112b]/60 border rounded-lg p-4 text-white text-base placeholder-white/35 focus:outline-none transition-colors resize-none ${
                    errors.message ? "border-red-400" : "border-white/20 focus:border-white"
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
                <h3 className="font-sans font-medium text-lg sm:text-xl text-white pb-3.5">
                  Enter your details to book your consultation.
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-sans text-sm text-white mb-2 block">
                      Phone <span className="text-xs text-white/50">(optional)</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone || ""}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="+40 390 254 046"
                      className="w-full bg-[#394664]/60 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/35 focus:border-white focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-sans text-sm text-white mb-2 block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="David"
                      className={`w-full bg-[#05112b] border rounded-lg px-4 py-3 text-white placeholder-white/35 focus:border-white focus:outline-none transition-colors ${
                        errors.fullName ? "border-red-400" : "border-white/20"
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

              {/* Submit CTA: Book a Consultation (White Button, Black Text, No Arrow) */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 rounded-md bg-white hover:bg-neutral-100 text-[#161616] font-sans font-medium text-lg shadow-md transition-colors cursor-pointer active:scale-98"
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
