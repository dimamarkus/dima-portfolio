import { Container } from "@/components/site/container";
import { getSiteConfig } from "@/lib/content";

export const SiteFooter = () => {
  const site = getSiteConfig();

  return (
    <footer className="border-t border-white/10 bg-slate-950/80 py-10">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-white">{site.name}</p>
          <p className="max-w-xl text-sm leading-6 text-slate-400">
            {site.summary}
          </p>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-slate-300">
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
      </Container>
    </footer>
  );
};
