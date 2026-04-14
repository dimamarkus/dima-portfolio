import type { Route } from "next";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";

type EntryCardProps = Readonly<{
  href: string;
  title: string;
  description: string;
  eyebrow: string;
  cornerMeta?: string;
  meta?: string;
  tags?: string[];
}>;

export const EntryCard = ({
  href,
  title,
  description,
  eyebrow,
  cornerMeta,
  meta,
  tags = [],
}: EntryCardProps) => {
  return (
    <article className="group rounded-3xl border border-white/10 bg-slate-950/40 p-6 transition-colors hover:border-sky-400/30 hover:bg-slate-950/55">
      <div className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-start justify-between gap-4">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-sky-300">
              {eyebrow}
            </p>
            {cornerMeta ? (
              <p className="pt-0.5 text-xs font-medium uppercase tracking-[0.14em] text-slate-500">
                {cornerMeta}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">
              <Link
                className="transition-colors hover:text-sky-200"
                href={href as Route}
              >
                {title}
              </Link>
            </h3>
            {meta ? (
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                {meta}
              </p>
            ) : null}
          </div>
        </div>
        <p className="text-base leading-7 text-slate-300">{description}</p>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.slice(0, 4).map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
};
