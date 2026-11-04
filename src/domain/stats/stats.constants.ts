import { StatFigure } from "./stats.types";

export const KEY_FIGURES: StatFigure[] = [
  {
    id: "experience",
    value: 15,
    prefix: "+",
    label: ["Years of", "Experience"],
    icon: "/assets/icons/shield-tick.svg",
  },
  {
    id: "cases",
    value: 1200,
    prefix: "+",
    label: ["Cases", "Handled"],
    icon: "/assets/icons/briefcase.svg",
  },
  {
    id: "satisfaction",
    value: 95,
    suffix: "%",
    label: ["Client", "Satisfaction"],
    icon: "/assets/icons/cup.svg",
  },
];
