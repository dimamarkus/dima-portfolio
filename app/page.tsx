import { getContentSummary, getSiteConfig } from "@/lib/content";

const stats = [
  {
    label: "Blog posts ready to migrate",
    key: "blogPosts",
  },
  {
    label: "Work entries in final collection",
    key: "workItems",
  },
  {
    label: "Playground entries in final collection",
    key: "playgroundItems",
  },
] as const;

export default function HomePage() {
  const site = getSiteConfig();
  const summary = getContentSummary();

  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/20 md:p-12">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
            Standalone portfolio scaffold
          </span>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {site.hero.headline}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {site.hero.supportingText}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>{site.title}</span>
            <span aria-hidden="true">/</span>
            <span>{site.location}</span>
            <span aria-hidden="true">/</span>
            <a className="text-sky-300 hover:text-sky-200" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <article
            key={stat.key}
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
          >
            <p className="text-sm text-slate-400">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold text-white">
              {summary[stat.key]}
            </p>
          </article>
        ))}
      </section>

      <section className="grid gap-6 rounded-3xl border border-white/10 bg-slate-950/50 p-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            Why this scaffold exists
          </h2>
          <p className="leading-7 text-slate-300">
            The old portfolio architecture mixed monorepo UI, hybrid CMS wiring,
            and local content. This standalone repo is starting from a clean
            Next.js App Router foundation so the content migration can happen on
            purpose instead of by accidental copy-paste.
          </p>
        </div>
        <div className="rounded-2xl border border-sky-400/20 bg-sky-400/10 p-6">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-sky-200">
            Phase status
          </p>
          <p className="mt-3 text-lg text-white">
            Phase 1 is represented by this app shell.
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Phase 2 adds the typed local content system, slug strategy, and
            content query helpers that the route rebuild will sit on top of.
          </p>
        </div>
      </section>
    </main>
  );
}
