import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

type HeroProps = Readonly<{
  title: string;
  supportingText: string;
  summary: string;
  location: string;
  primaryActionHref: string;
  secondaryActionHref: string;
  stats: Array<{
    label: string;
    value: number;
  }>;
}>;

export const Hero = ({
  title,
  supportingText,
  summary,
  location,
  primaryActionHref,
  secondaryActionHref,
  stats,
}: HeroProps) => {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl shadow-sky-950/20 md:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-6">
          <Tag>Standalone portfolio</Tag>
          <div className="space-y-4">
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
              {title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              {supportingText}
            </p>
            <p className="max-w-2xl text-base leading-7 text-slate-400">
              {summary}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button href={primaryActionHref}>View work</Button>
            <Button href={secondaryActionHref} variant="secondary">
              Read the blog
            </Button>
          </div>
          <p className="text-sm text-slate-400">{location}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
          {stats.map((stat) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-slate-950/40 p-6"
            >
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-semibold text-white">
                {stat.value}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
