import type { Metadata } from "next";

import { Container } from "@/components/site/container";
import { Section } from "@/components/site/section";
import { Tag } from "@/components/ui/tag";
import { getSiteConfig } from "@/lib/content";
import { buildPageMetadata } from "@/lib/seo/build-metadata";

export const metadata: Metadata = buildPageMetadata({
  title: "About",
  description: "Background, focus areas, and links for Dima Markus.",
  path: "/about",
});

export default function AboutPage() {
  const site = getSiteConfig();

  return (
    <Container>
      <Section
        description="Front-end engineer, product designer, and co-founder focused on turning complex product problems into durable software."
        eyebrow="About"
        title={site.name}
      >
        <div className="grid gap-8 rounded-3xl border border-white/10 bg-slate-950/40 p-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            <p className="text-lg leading-8 text-slate-300">{site.summary}</p>
            <p className="leading-7 text-slate-400">{site.hero.supportingText}</p>
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
