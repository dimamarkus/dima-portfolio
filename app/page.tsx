const highlights = [
  "Next.js App Router foundation",
  "TypeScript and strict project settings",
  "Tailwind CSS 4 baseline styling",
] as const;

export default function HomePage() {
  return (
    <main className="space-y-10">
      <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/20 md:p-12">
        <div className="flex flex-col gap-6">
          <span className="text-sm font-medium uppercase tracking-[0.24em] text-sky-300">
            Standalone portfolio scaffold
          </span>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              A clean standalone portfolio shell is now in place.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              This repo now has its own Next.js runtime, local tooling, and a
              minimal app shell so future migration work has a real destination.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            <span>Phase 1 checkpoint</span>
            <span aria-hidden="true">/</span>
            <span>Standalone app scaffold</span>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {highlights.map((highlight) => (
          <article
            key={highlight}
            className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
          >
            <p className="text-sm text-slate-400">Included</p>
            <p className="mt-3 text-lg font-semibold text-white">{highlight}</p>
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
            The next layer adds a typed local content system so future routes can
            consume real collections instead of temporary placeholder copy.
          </p>
        </div>
      </section>
    </main>
  );
}
