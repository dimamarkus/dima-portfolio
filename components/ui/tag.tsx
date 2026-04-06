import { cn } from "@/lib/utils/cn";

type TagProps = Readonly<{
  children: string;
  className?: string;
}>;

export const Tag = ({ children, className }: TagProps) => {
  return (
    <span
      className={cn(
        "inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.16em] text-slate-300",
        className,
      )}
    >
      {children}
    </span>
  );
};
