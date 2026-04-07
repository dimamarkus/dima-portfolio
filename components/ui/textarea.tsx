import type { TextareaHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = ({ className, ...props }: TextareaProps) => {
  return (
    <textarea
      className={cn(
        "min-h-36 w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-400/40",
        className,
      )}
      {...props}
    />
  );
};
