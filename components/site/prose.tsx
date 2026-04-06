import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ProseProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export const Prose = ({ children, className }: ProseProps) => {
  return (
    <div
      className={cn(
        "prose prose-invert max-w-none prose-headings:tracking-tight prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-a:text-sky-300",
        className,
      )}
    >
      {children}
    </div>
  );
};
