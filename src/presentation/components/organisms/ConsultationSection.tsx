"use client";

import React from "react";
import { useConsultationForm } from "@/application/use-consultation-form.hook";
import { PRACTICE_AREAS } from "@/domain/practice-area/practice-area.constants";
import { InputField } from "../atoms/InputField";
import { TextareaField } from "../atoms/TextareaField";
import { Button } from "../atoms/Button";
import { SectionHeading } from "../atoms/SectionHeading";
import { ConsultationCalendar } from "../molecules/ConsultationCalendar";
import { CheckCircle2, CalendarCheck, ShieldCheck } from "lucide-react";

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
    <section id="contact" className="bg-[#07183d] py-16 lg:py-28 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-12">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Schedule Your Confidential Consultation"
          subtitle="Select your preferred appointment date and time. All communications are strictly protected by attorney-client privilege."
          theme="dark"
          align="center"
        />

        <div className="bg-[#05112b] border border-white/10 rounded-2xl p-5 sm:p-10 shadow-2xl mt-4">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#cba05d]/15 flex items-center justify-center text-[#cba05d] mb-4 border border-[#cba05d]/30">
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

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto mb-4">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => {
                    const title = encodeURIComponent(`Legal Consultation with James Carter (${formData.practiceArea})`);
                    const details = encodeURIComponent(`Confidential consultation regarding ${formData.practiceArea}. Format: ${formData.consultationType}.`);
                    window.open(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}`, "_blank");
                  }}
                  className="w-full sm:w-auto justify-center"
                >
                  <CalendarCheck className="w-4 h-4 mr-2" />
                  Add to Google Calendar
                </Button>

                <Button variant="outline-gold" size="md" onClick={reset} className="w-full sm:w-auto justify-center">
                  Schedule Another Inquiry
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8" noValidate>
              {/* Contact Information Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputField
                  id="consultation-name"
                  label="Full Name"
                  placeholder="e.g. Johnathan Davis"
                  value={formData.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  error={errors.fullName}
                  required
                />

                <InputField
                  id="consultation-email"
                  label="Email Address"
                  type="email"
                  placeholder="e.g. j.davis@example.com"
                  value={formData.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  error={errors.email}
                  required
                />
              </div>

              <InputField
                id="consultation-phone"
                label="Phone Number"
                type="tel"
                optional
                placeholder="+1 (555) 000-0000"
                value={formData.phone || ""}
                onChange={(e) => updateField("phone", e.target.value)}
              />

              {/* Practice Area Selection */}
              <div className="flex flex-col gap-2">
                <div
                  id="practice-area-group-label"
                  className="text-sm md:text-base text-[#fefefe] font-sans font-normal"
                >
                  Matter Focus
                </div>
                <div
                  role="radiogroup"
                  aria-labelledby="practice-area-group-label"
                  className="flex flex-wrap gap-2 pt-1"
                >
                  {PRACTICE_AREAS.map((area) => {
                    const isSelected = formData.practiceArea === area.title;
                    return (
                      <button
                        key={area.id}
                        type="button"
                        role="radio"
                        aria-checked={isSelected}
                        onClick={() => updateField("practiceArea", area.title)}
                        className={`px-4 py-2 rounded-full text-xs sm:text-sm font-sans transition-all duration-200 cursor-pointer ${
                          isSelected
                            ? "bg-[#cba05d] text-[#030a1a] font-semibold shadow-[0_0_15px_rgba(203,160,93,0.3)] scale-[1.02]"
                            : "bg-[#394664]/50 text-white/80 hover:bg-[#394664] border border-white/10"
                        }`}
                      >
                        {area.title}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Interactive Calendar & Slot Booking */}
              <ConsultationCalendar
                selectedDate={formData.preferredDate}
                onSelectDate={(date) => updateField("preferredDate", date)}
                selectedTimeSlot={formData.preferredTimeSlot}
                onSelectTimeSlot={(slot) => updateField("preferredTimeSlot", slot)}
                consultationType={formData.consultationType}
                onSelectType={(type) => updateField("consultationType", type)}
              />

              {/* Situation Message Box */}
              <TextareaField
                id="consultation-message"
                label="Tell us a little about your situation"
                placeholder="Briefly describe the circumstances and legal questions you have..."
                value={formData.message}
                onChange={(e) => updateField("message", e.target.value)}
                error={errors.message}
                rows={4}
                required
              />

              {/* Submission Button */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="gold"
                  size="lg"
                  showArrow
                  disabled={isSubmitting}
                  className="w-full justify-center shadow-lg hover:shadow-xl transition-all"
                >
                  {isSubmitting ? "Locking In Time Slot..." : "Request Consultation With James Carter"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
