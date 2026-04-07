import type { InputHTMLAttributes } from "react";

import { cn } from "@/lib/utils/cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "w-full rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-sky-400/40",
        className,
      )}
      {...props}
    />
  );
};
