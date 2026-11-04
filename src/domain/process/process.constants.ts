import { ProcessStep } from "./process.types";

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "consultation",
    stepNumber: 1,
    title: "Book a Consultation",
    description: "Reach out and choose a convenient, confidential time to talk.",
    iconIndex: 6,
  },
  {
    id: "evaluation",
    stepNumber: 2,
    title: "Case Evaluation",
    description: "We listen carefully and assess the facts, risks, and priorities.",
    iconIndex: 7,
  },
  {
    id: "strategy",
    stepNumber: 3,
    title: "Legal Strategy",
    description: "A clear strategy is built around your specific circumstances.",
    iconIndex: 8,
  },
  {
    id: "representation",
    stepNumber: 4,
    title: "Representation",
    description: "Focused advocacy from first steps through to resolution.",
    iconIndex: 9,
  },
];
