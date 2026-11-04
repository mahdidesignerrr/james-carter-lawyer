import { AttorneyProfile } from "./attorney.types";

export const ATTORNEY_DATA: AttorneyProfile = {
  name: "James Carter",
  title: "Principal Attorney & Legal Counselor",
  photoUrl: "/assets/images/attorney-portrait.png",
  credentials: [
    {
      label: "Education",
      value: "J.D., Columbia Law School",
    },
    {
      label: "Professional Memberships",
      value: "American Bar Association · State Trial Lawyers Association",
    },
    {
      label: "Professional Experience",
      value: "15+ Years",
    },
    {
      label: "Licenses & Certifications",
      value: "State Bar · Federal District Court",
    },
    {
      label: "Practice Areas",
      value: "Family Law · Criminal Defense · Corporate Law · Civil Litigation",
    },
  ],
};
