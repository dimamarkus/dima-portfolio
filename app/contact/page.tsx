import type { Metadata } from "next";

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
        description="The final production contact flow can still grow into a server action, but the standalone site now has a real contact destination instead of a missing route."
        eyebrow="Contact"
        title="Get in touch"
      >
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/40 p-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Email</h2>
            <p className="leading-7 text-slate-300">
              The quickest path is still direct email.
            </p>
            <a
              className="inline-flex rounded-full border border-sky-400/40 bg-sky-400/15 px-4 py-2 text-sm font-medium text-sky-100 transition-colors hover:border-sky-300/60 hover:bg-sky-400/20"
              href={`mailto:${site.email}`}
            >
              {site.email}
            </a>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Elsewhere</h2>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
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
