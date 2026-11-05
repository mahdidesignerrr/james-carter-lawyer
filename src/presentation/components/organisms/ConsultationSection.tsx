"use client";

import React from "react";
import { useConsultationForm } from "@/application/use-consultation-form.hook";
import { PRACTICE_AREAS } from "@/domain/practice-area/practice-area.constants";
import { InputField } from "../atoms/InputField";
import { TextareaField } from "../atoms/TextareaField";
import { Button } from "../atoms/Button";
import { ConsultationCalendar } from "../molecules/ConsultationCalendar";
import { CheckCircle2, ShieldCheck, PhoneCall, Clock, MapPin } from "lucide-react";

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
    <section id="contact" className="bg-[#fefefe] py-16 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-20 items-start">
          {/* Left Column: Narrative, Privacy Assurance & Direct Office Details (Figma Node 522:767) */}
          <div className="lg:col-span-5 flex flex-col items-start pt-2">
            <span className="font-sans font-semibold text-xs lg:text-sm text-[#cba05d] tracking-[2.64px] uppercase py-1 select-none">
              CONSULTATION BOOKING
            </span>

            <h2 className="font-serif font-medium text-3xl sm:text-4xl lg:text-[44px] text-[#161616] leading-tight pt-2 pb-4">
              Take the First Step With Confidence.
            </h2>

            <p className="font-sans font-normal text-base sm:text-lg text-[#808080] leading-relaxed pb-6">
              Tell us a little about your situation and choose a convenient time for a confidential consultation.
            </p>

            {/* Privacy Callout Bar (Node 522:771) */}
            <div className="border-l-2 border-[#cba05d] pl-4 py-2 mb-8 bg-[#fdfbf7] rounded-r-lg">
              <p className="font-sans font-medium text-sm text-[#161616]">
                Your privacy comes first.
              </p>
              <p className="font-sans font-light text-xs sm:text-sm text-[#808080]">
                All information you share is kept strictly confidential.
              </p>
            </div>

            {/* Direct Contact Info (Node 522:774) */}
            <div className="flex flex-col gap-5 w-full pt-2 border-t border-neutral-200/80">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#cba05d]/15 flex items-center justify-center text-[#cba05d] shrink-0 mt-0.5">
                  <PhoneCall className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-[#808080] uppercase tracking-wider">Contact</span>
                  <a href="tel:2125550147" className="font-sans font-medium text-base text-[#07183d] hover:text-[#cba05d] transition-colors">
                    (212) 555-0147
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#cba05d]/15 flex items-center justify-center text-[#cba05d] shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-[#808080] uppercase tracking-wider">Working Hours</span>
                  <span className="font-sans font-normal text-sm sm:text-base text-[#07183d]">
                    Mon–Fri · 9:00 AM – 6:00 PM
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-[#cba05d]/15 flex items-center justify-center text-[#cba05d] shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-sans text-xs text-[#808080] uppercase tracking-wider">Office Address</span>
                  <span className="font-sans font-normal text-sm sm:text-base text-[#07183d] leading-relaxed">
                    400 Madison Avenue, Suite 1800, New York, NY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dark Navy Booking Surface & Form (Figma Node 522:778) */}
          <div className="lg:col-span-7 bg-[#07183d] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-2xl w-full">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-[#cba05d]/20 flex items-center justify-center text-[#cba05d] mb-4 border border-[#cba05d]/40">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-2xl lg:text-3xl text-[#fefefe] mb-2">
                  Consultation Request Received
                </h3>
                <p className="font-sans text-neutral-300 max-w-lg mb-6 leading-relaxed text-sm sm:text-base">
                  Thank you, <strong>{formData.fullName}</strong>. Your consultation request for{" "}
                  <span className="text-[#cba05d] font-medium">{formData.practiceArea}</span>
                  {formData.preferredDate && (
                    <> on <strong>{formData.preferredDate.toLocaleDateString()}</strong> at <strong>{formData.preferredTimeSlot}</strong></>
                  )}{" "}
                  has been logged. We will send formal confirmation to <strong>{formData.email}</strong> shortly.
                </p>

                <div className="flex items-center gap-2 text-xs text-neutral-400 bg-white/5 px-4 py-2 rounded-full mb-6 border border-white/5">
                  <ShieldCheck className="w-4 h-4 text-[#cba05d]" />
                  <span>Protected by Attorney-Client Privilege</span>
                </div>

                <Button variant="gold" size="md" onClick={reset}>
                  Book Another Consultation
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
                {/* Practice Area Selection Chips (Node 522:782) */}
                <div className="flex flex-col gap-2.5">
                  <label className="font-sans font-medium text-sm text-[#fefefe]">
                    What legal issue do you need help with?
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {PRACTICE_AREAS.map((area) => {
                      const isSelected = formData.practiceArea === area.title;
                      return (
                        <button
                          key={area.id}
                          type="button"
                          onClick={() => updateField("practiceArea", area.title)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-sans transition-all duration-200 cursor-pointer ${
                            isSelected
                              ? "bg-[#cba05d] text-[#030a1a] font-semibold shadow-md"
                              : "bg-white/10 text-white/90 hover:bg-white/15 border border-white/10"
                          }`}
                        >
                          {area.title}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Date & Time Picker */}
                <div className="pt-2">
                  <ConsultationCalendar
                    selectedDate={formData.preferredDate}
                    onSelectDate={(d) => updateField("preferredDate", d)}
                    selectedTimeSlot={formData.preferredTimeSlot}
                    onSelectTimeSlot={(t) => updateField("preferredTimeSlot", t)}
                    consultationType={formData.consultationType}
                    onSelectType={(type) => updateField("consultationType", type)}
                  />
                </div>

                {/* Case Overview Note (Node 522:793) */}
                <TextareaField
                  label="Is there anything else you’d like us to know?"
                  name="message"
                  value={formData.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  error={errors.message}
                  placeholder="Tell us a little about your situation…"
                  rows={3}
                  required
                />

                {/* Personal Contact Details (Node 522:797) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <InputField
                    label="Full Name"
                    name="fullName"
                    value={formData.fullName}
                    onChange={(e) => updateField("fullName", e.target.value)}
                    error={errors.fullName}
                    placeholder="e.g. John Doe"
                    required
                  />

                  <InputField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    error={errors.email}
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <InputField
                  label="Phone"
                  name="phone"
                  type="tel"
                  optional
                  value={formData.phone || ""}
                  onChange={(e) => updateField("phone", e.target.value)}
                  error={errors.phone}
                  placeholder="(555) 000-0000"
                />

                {/* Submit CTA */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant="gold"
                    size="lg"
                    showArrow
                    disabled={isSubmitting}
                    className="w-full justify-center text-base py-4 font-semibold shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    {isSubmitting ? "Submitting..." : "Confirm Consultation"}
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
