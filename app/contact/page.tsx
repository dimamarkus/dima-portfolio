import type { Metadata } from "next";

import { ContactForm } from "./contact-form";
import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { getSiteConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "Contact",
  description: "Contact details and external profiles for Dima Markus.",
  path: "/contact",
});

export default function ContactPage() {
  const site = getSiteConfig();

  return (
    <Container>
      <Section
        description="Use the form below to generate a prefilled email draft, or reach out directly if you already know what you want to send."
        eyebrow="Contact"
        title="Get in touch"
      >
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/40 p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Start with the form</h2>
            <p className="leading-7 text-slate-300">
              This validates the message server-side, then opens your email
              client with a prefilled draft so nothing disappears into a fake
              backend.
            </p>
            <ContactForm />
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Direct email and links</h2>
            <p className="leading-7 text-slate-300">
              If you prefer, skip the form and email me directly.
            </p>
            <a
              className="inline-flex rounded-full border border-sky-400/40 bg-sky-400/15 px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/60 hover:bg-sky-400/20"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
            <div className="flex flex-col gap-3 pt-4 text-sm text-slate-300">
              {site.socialLinks.map((link) => (
                <a
                  key={link.href}
                  className="hover:text-white"
                  href={link.href}
                  rel="noreferrer"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </Container>
  );
}
