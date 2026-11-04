"use client";

import React from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";
import { Calendar as CalendarIcon, Clock, Video, Building2, PhoneCall } from "lucide-react";

export interface ConsultationCalendarProps {
  selectedDate?: Date;
  onSelectDate: (date?: Date) => void;
  selectedTimeSlot?: string;
  onSelectTimeSlot: (slot: string) => void;
  consultationType: "video" | "in-person" | "phone";
  onSelectType: (type: "video" | "in-person" | "phone") => void;
  className?: string;
}

const AVAILABLE_SLOTS = [
  "09:30 AM",
  "11:00 AM",
  "02:00 PM",
  "03:30 PM",
  "05:00 PM",
];

const CONSULTATION_TYPES = [
  { id: "video" as const, label: "Confidential Video", icon: Video, desc: "Secure Zoom link" },
  { id: "in-person" as const, label: "Manhattan Office", icon: Building2, desc: "1221 Ave of the Americas" },
  { id: "phone" as const, label: "Direct Phone", icon: PhoneCall, desc: "Confidential direct call" },
];

export const ConsultationCalendar: React.FC<ConsultationCalendarProps> = ({
  selectedDate,
  onSelectDate,
  selectedTimeSlot = "11:00 AM",
  onSelectTimeSlot,
  consultationType,
  onSelectType,
  className = "",
}) => {
  // Disable past dates and Sundays
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className={`flex flex-col gap-6 bg-[#030a1a]/80 border border-white/10 rounded-xl p-4 sm:p-6 ${className}`}>
      {/* 1. Mode of Consultation */}
      <div className="flex flex-col gap-2">
        <label className="text-sm font-sans text-neutral-300 flex items-center gap-2">
          <span className="text-[#cba05d]">1.</span> Preferred Meeting Format
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
          {CONSULTATION_TYPES.map((type) => {
            const Icon = type.icon;
            const isSelected = consultationType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => onSelectType(type.id)}
                className={`flex flex-col items-start p-3 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? "bg-[#cba05d]/15 border-[#cba05d] shadow-[0_0_12px_rgba(203,160,93,0.2)]"
                    : "bg-[#394664]/40 border-white/10 hover:border-white/30 hover:bg-[#394664]/70"
                }`}
              >
                <div className="flex items-center gap-2 text-white">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-[#cba05d]" : "text-neutral-400"}`} />
                  <span className="font-sans font-medium text-xs sm:text-sm">{type.label}</span>
                </div>
                <span className="text-[11px] text-neutral-400 font-light mt-1">{type.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Interactive Calendar & Time Slots */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start pt-2 border-t border-white/10">
        {/* Calendar Picker (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col items-start w-full">
          <label className="text-sm font-sans text-neutral-300 flex items-center gap-2 mb-3">
            <CalendarIcon className="w-4 h-4 text-[#cba05d]" />
            <span><strong className="text-[#cba05d]">2.</strong> Select Preferred Date</span>
          </label>
          <div className="w-full flex justify-center bg-[#394664]/30 rounded-xl p-2 border border-white/5 [&_.rdp]:m-0 [&_.rdp-root]:text-white [&_.rdp-weekday]:text-[#cba05d] [&_.rdp-weekday]:font-normal [&_.rdp-weekday]:text-xs [&_.rdp-button_selected]:!bg-[#cba05d] [&_.rdp-button_selected]:!text-[#030a1a] [&_.rdp-button_selected]:!font-bold [&_.rdp-today]:border-b-2 [&_.rdp-today]:border-[#cba05d] [&_.rdp-chevron]:!fill-[#cba05d]">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={onSelectDate}
              disabled={[{ before: today }, { dayOfWeek: [0] }]}
            />
          </div>
        </div>

        {/* Time Slots (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col items-start w-full">
          <div className="flex items-center justify-between w-full mb-3">
            <label className="text-sm font-sans text-neutral-300 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#cba05d]" />
              <span><strong className="text-[#cba05d]">3.</strong> Available Window</span>
            </label>
            <span className="text-[10px] text-[#cba05d]/80 bg-[#cba05d]/10 px-2 py-0.5 rounded font-mono">
              EST (New York)
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 w-full">
            {AVAILABLE_SLOTS.map((slot) => {
              const isSelected = selectedTimeSlot === slot;
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => onSelectTimeSlot(slot)}
                  className={`py-2.5 px-3 rounded-lg border text-xs sm:text-sm font-sans transition-all duration-200 flex items-center justify-between cursor-pointer ${
                    isSelected
                      ? "bg-[#cba05d] text-[#030a1a] font-semibold border-[#cba05d] shadow-md"
                      : "bg-[#394664]/50 text-white/90 border-white/10 hover:border-[#cba05d]/60 hover:bg-[#394664]"
                  }`}
                >
                  <span>{slot}</span>
                  <span className={`text-[10px] ${isSelected ? "text-[#030a1a]/80" : "text-[#cba05d]"}`}>
                    Available
                  </span>
                </button>
              );
            })}
          </div>

          {selectedDate && (
            <div className="mt-4 p-3 rounded-lg bg-[#cba05d]/10 border border-[#cba05d]/30 text-xs text-[#fefefe] w-full">
              Selected: <strong className="text-[#cba05d]">{selectedDate.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })}</strong> at <strong className="text-[#cba05d]">{selectedTimeSlot} EST</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
