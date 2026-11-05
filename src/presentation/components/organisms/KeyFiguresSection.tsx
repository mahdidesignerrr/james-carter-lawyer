import React from "react";
import { KEY_FIGURES } from "@/domain/stats/stats.constants";
import { StatCard } from "../molecules/StatCard";

export const KeyFiguresSection: React.FC = () => {
  return (
    <section className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 -mt-10 sm:-mt-14 lg:-mt-[120px]">
      {/* Single Unified Floating Bar Matching Figma Node 522:838 */}
      <div className="bg-[#fefefe] rounded-xl shadow-[0px_0px_30px_rgba(77,77,77,0.1)] border border-neutral-100/90 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-neutral-200/80">
          {KEY_FIGURES.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
};
