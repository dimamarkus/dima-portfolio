import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Tag } from "@/components/ui/tag";
import { getSiteConfig } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "Background, focus areas, and links for Dima Markus.",
};

export default function AboutPage() {
  const site = getSiteConfig();

  return (
    <Container>
      <Section
        description="A concise profile page driven by the singleton site config so the personal details live in one place."
        eyebrow="About"
        title={site.name}
      >
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/40 p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-300">{site.summary}</p>
            <div className="flex flex-wrap gap-2">
              <Tag>{site.title}</Tag>
              <Tag>{site.location}</Tag>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-white">Links</h2>
            <div className="flex flex-col gap-3 text-sm text-slate-300">
              <a className="hover:text-white" href={`mailto:${site.email}`}>
                {site.email}
              </a>
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
