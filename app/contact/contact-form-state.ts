type ContactFieldName = "name" | "email" | "topic" | "message" | "company";

export type ContactFormFields = Readonly<Record<ContactFieldName, string>>;

export type ContactFormErrors = Partial<Record<ContactFieldName, string>>;

export type ContactActionState = Readonly<{
  status: "idle" | "error" | "success";
  message: string;
  fields: ContactFormFields;
  errors: ContactFormErrors;
  mailtoUrl?: string;
}>;

export const initialContactActionState: ContactActionState = {
  status: "idle",
  message: "",
  fields: {
    name: "",
    email: "",
    topic: "",
    message: "",
    company: "",
  },
  errors: {},
};
