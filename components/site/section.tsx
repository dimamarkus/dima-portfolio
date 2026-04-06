import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type SectionProps = Readonly<{
  title: string;
  description?: string;
  eyebrow?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}>;

export const Section = ({
  title,
  description,
  eyebrow,
  action,
  children,
  className,
}: SectionProps) => {
  return (
    <section className={cn("space-y-6", className)}>
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-3">
          {eyebrow ? (
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-sky-300">
              {eyebrow}
            </p>
          ) : null}
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
              {title}
            </h2>
            {description ? (
              <p className="max-w-2xl text-base leading-7 text-slate-300">
                {description}
              </p>
            ) : null}
          </div>
        </div>
        {action ? <div>{action}</div> : null}
      </div>
      {children}
    </section>
  );
};
