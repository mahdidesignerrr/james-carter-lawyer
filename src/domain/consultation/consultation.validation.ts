import { ConsultationFormData, ConsultationFormErrors } from "./consultation.types";

export function validateConsultationForm(data: ConsultationFormData): {
  isValid: boolean;
  errors: ConsultationFormErrors;
} {
  const errors: ConsultationFormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (data.email && data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.message.trim()) {
    errors.message = "Please tell us a little about your situation.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
