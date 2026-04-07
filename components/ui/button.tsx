import type { Route } from "next";
import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/utils/cn";

type SharedButtonProps = Readonly<{
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "ghost";
}>;

type ButtonAsLinkProps = SharedButtonProps &
  Readonly<{
    href: string;
  }>;

type ButtonAsButtonProps = SharedButtonProps &
  Readonly<{
    href?: never;
    disabled?: boolean;
    type?: "button" | "submit" | "reset";
  }>;

type ButtonProps = ButtonAsLinkProps | ButtonAsButtonProps;

const buttonStyles = {
  primary:
    "border border-sky-400/40 bg-sky-400/15 text-sky-100 hover:border-sky-300/60 hover:bg-sky-400/20",
  secondary:
    "border border-white/10 bg-white/5 text-white hover:border-white/20 hover:bg-white/10",
  ghost:
    "border border-transparent bg-transparent text-slate-300 hover:border-white/10 hover:bg-white/5 hover:text-white",
} as const;

const sharedClassName =
  "inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-60";

export const Button = (props: ButtonProps) => {
  const variant = props.variant ?? "primary";
  const className = cn(sharedClassName, buttonStyles[variant], props.className);

  if (props.href !== undefined) {
    return (
      <Link className={className} href={props.href as Route}>
        {props.children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      disabled={props.disabled}
      type={props.type ?? "button"}
    >
      {props.children}
    </button>
  );
};
