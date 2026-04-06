import type { Route } from "next";
import Link from "next/link";

import { Container } from "@/components/site/container";
import { cn } from "@/lib/utils/cn";
import { getSiteConfig } from "@/lib/content";

type SiteHeaderProps = Readonly<{
  className?: string;
}>;

export const SiteHeader = ({ className }: SiteHeaderProps) => {
  const site = getSiteConfig();

  return (
    <header className={cn("border-b border-white/10 bg-slate-950/70", className)}>
      <Container className="flex min-h-18 flex-col gap-4 py-5 md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <Link className="text-lg font-semibold text-white" href="/">
            {site.name}
          </Link>
          <p className="text-sm text-slate-400">{site.title}</p>
        </div>
        <nav aria-label="Primary" className="flex flex-wrap gap-4 text-sm">
          {site.navigation.map((item) => (
            <Link
              key={item.href}
              className="text-slate-300 transition-colors hover:text-white"
              href={item.href as Route}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
};
