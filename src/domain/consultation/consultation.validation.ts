import { ConsultationFormData, ConsultationFormErrors } from "./consultation.types";

export function validateConsultationForm(data: ConsultationFormData): {
  isValid: boolean;
  errors: ConsultationFormErrors;
} {
  const errors: ConsultationFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!data.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Please provide a brief summary of your situation.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
