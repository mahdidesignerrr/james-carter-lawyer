"use client";

import { useState } from "react";
import {
  ConsultationFormData,
  ConsultationFormErrors,
} from "../domain/consultation/consultation.types";
import { validateConsultationForm } from "../domain/consultation/consultation.validation";

const initialForm: ConsultationFormData = {
  fullName: "",
  email: "",
  phone: "",
  practiceArea: "Family Law",
  consultationType: "video",
  preferredDate: undefined,
  preferredTimeSlot: "11:00 AM",
  message: "",
};

export function useConsultationForm() {
  const [formData, setFormData] = useState<ConsultationFormData>(initialForm);
  const [errors, setErrors] = useState<ConsultationFormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = <K extends keyof ConsultationFormData>(
    field: K,
    value: ConsultationFormData[K]
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const errorKey = field as keyof ConsultationFormErrors;
    if (errors[errorKey]) {
      setErrors((prev) => ({ ...prev, [errorKey]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateConsultationForm(formData);

    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const reset = () => {
    setIsSubmitted(false);
    setFormData(initialForm);
    setErrors({});
  };

  return {
    formData,
    errors,
    isSubmitting,
    isSubmitted,
    updateField,
    handleSubmit,
    reset,
  };
}
