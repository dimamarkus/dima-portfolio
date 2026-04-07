"use client";

import { useActionState, useEffect } from "react";

import { createContactDraft } from "@/app/contact/actions";
import { initialContactActionState } from "@/app/contact/contact-form-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const fieldErrorClassName = "text-sm text-rose-300";
const helperTextClassName = "text-sm leading-6 text-slate-400";

const ContactSubmitButton = ({ pending }: Readonly<{ pending: boolean }>) => {
  return (
    <Button disabled={pending} type="submit">
      {pending ? "Preparing email draft..." : "Open email draft"}
    </Button>
  );
};

export const ContactForm = () => {
  const [state, formAction, pending] = useActionState(
    createContactDraft,
    initialContactActionState,
  );
  const currentState = state ?? initialContactActionState;

  useEffect(() => {
    if (currentState.status === "success" && currentState.mailtoUrl) {
      window.location.assign(currentState.mailtoUrl);
    }
  }, [currentState]);

  return (
    <form action={formAction} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            defaultValue={currentState.fields.name}
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
          {currentState.errors.name ? (
            <p className={fieldErrorClassName}>{currentState.errors.name}</p>
          ) : null}
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            defaultValue={currentState.fields.email}
            id="email"
            name="email"
            placeholder="you@company.com"
            required
            type="email"
          />
          {currentState.errors.email ? (
            <p className={fieldErrorClassName}>{currentState.errors.email}</p>
          ) : null}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="topic">Topic</Label>
        <Input
          defaultValue={currentState.fields.topic}
          id="topic"
          name="topic"
          placeholder="Project, consulting, speaking, collaboration..."
          required
        />
        {currentState.errors.topic ? (
          <p className={fieldErrorClassName}>{currentState.errors.topic}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          defaultValue={currentState.fields.message}
          id="message"
          name="message"
          placeholder="A quick summary of what you need, what you're building, and what kind of help you're looking for."
          required
        />
        {currentState.errors.message ? (
          <p className={fieldErrorClassName}>{currentState.errors.message}</p>
        ) : null}
      </div>

      <div aria-hidden="true" className="hidden">
        <Label htmlFor="company">Company</Label>
        <Input
          autoComplete="off"
          defaultValue={currentState.fields.company}
          id="company"
          name="company"
          tabIndex={-1}
        />
      </div>

      {currentState.message ? (
        <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-4">
          <p className={helperTextClassName}>{currentState.message}</p>
          {currentState.mailtoUrl ? (
            <a
              className="mt-3 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200"
              href={currentState.mailtoUrl}
            >
              Open the email draft manually
            </a>
          ) : null}
        </div>
      ) : null}

      <div className="flex flex-wrap items-center gap-4">
        <ContactSubmitButton pending={pending} />
        <p className={helperTextClassName}>
          This keeps delivery simple for now by opening your local email client
          with a prefilled draft.
        </p>
      </div>
    </form>
  );
};
