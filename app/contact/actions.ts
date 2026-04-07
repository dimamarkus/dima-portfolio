"use server";

import type {
  ContactActionState,
  ContactFormErrors,
  ContactFormFields,
} from "./contact-form-state";
import { initialContactActionState } from "./contact-form-state";
import { getSiteConfig } from "@/lib/content";

type ContactFieldName = keyof ContactFormFields & string;

const getFieldValue = (formData: FormData, fieldName: ContactFieldName) => {
  const value = formData.get(fieldName);

  return typeof value === "string" ? value.trim() : "";
};

const isValidEmail = (value: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

const buildMailtoUrl = (
  emailAddress: string,
  fields: ContactFormFields,
) => {
  const subject = `[Portfolio] ${fields.topic} (${fields.name})`;
  const body = [
    `Name: ${fields.name}`,
    `Email: ${fields.email}`,
    "",
    fields.message,
  ].join("\n");

  const query = new URLSearchParams({
    subject,
    body,
  });

  return `mailto:${emailAddress}?${query.toString()}`;
};

export async function createContactDraft(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  const site = getSiteConfig();
  const fields: ContactFormFields = {
    name: getFieldValue(formData, "name"),
    email: getFieldValue(formData, "email"),
    topic: getFieldValue(formData, "topic"),
    message: getFieldValue(formData, "message"),
    company: getFieldValue(formData, "company"),
  };

  const errors: ContactFormErrors = {};

  if (fields.company) {
    return {
      ...initialContactActionState,
      status: "success",
      message: "Your message draft is ready.",
    };
  }

  if (fields.name.length < 2) {
    errors.name = "Enter your name.";
  }

  if (!isValidEmail(fields.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (fields.topic.length < 3) {
    errors.topic = "Add a short topic so the email has context.";
  }

  if (fields.message.length < 20) {
    errors.message = "Add a little more detail so the message is useful.";
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Fix the highlighted fields and try again.",
      fields,
      errors,
    };
  }

  return {
    status: "success",
    message:
      "Your email draft is ready. If your email client does not open automatically, use the fallback link below.",
    fields: initialContactActionState.fields,
    errors: {},
    mailtoUrl: buildMailtoUrl(site.email, fields),
  };
}
