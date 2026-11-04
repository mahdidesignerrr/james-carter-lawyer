import React from "react";
import { KEY_FIGURES } from "@/domain/stats/stats.constants";
import { StatCard } from "../molecules/StatCard";

export const KeyFiguresSection: React.FC = () => {
  return (
    <section className="relative z-30 max-w-7xl mx-auto px-3 sm:px-6 md:px-12 lg:px-20 -mt-8 sm:-mt-12 lg:-mt-20">
      <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:gap-8">
        {KEY_FIGURES.map((stat) => (
          <StatCard key={stat.id} stat={stat} />
        ))}
      </div>
    </section>
  );
};
