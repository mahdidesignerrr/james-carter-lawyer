"use client";

import React from "react";
import { FAQ_DATA } from "@/domain/faq/faq.constants";
import { FaqItem } from "../molecules/FaqItem";
import { SectionHeading } from "../atoms/SectionHeading";
import { useFaqAccordion } from "@/application/use-faq-accordion.hook";

export const FaqSection: React.FC = () => {
  const { toggle, isOpen } = useFaqAccordion("faq-cost");

  return (
    <section id="faq" className="bg-[#fefefe] scroll-mt-20 sm:scroll-mt-24 lg:scroll-mt-28 py-16 sm:py-20 lg:py-[100px]">
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <SectionHeading
          badge="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to common questions about consultations, case evaluation, and our legal representation."
        />

        <div className="mt-6 sm:mt-8 lg:mt-10 border-t border-[#e6e8ec] rounded-lg overflow-hidden shadow-sm">
          {FAQ_DATA.map((item) => (
            <FaqItem
              key={item.id}
              item={item}
              isOpen={isOpen(item.id)}
              onToggle={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
