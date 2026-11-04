export interface ConsultationFormData {
  fullName: string;
  email: string;
  phone?: string;
  practiceArea: string;
  consultationType: "video" | "in-person" | "phone";
  preferredDate?: Date;
  preferredTimeSlot?: string;
  message: string;
}

export interface ConsultationFormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  practiceArea?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  message?: string;
}
