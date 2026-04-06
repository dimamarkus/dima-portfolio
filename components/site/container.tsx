import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type ContainerProps = Readonly<{
  children: ReactNode;
  className?: string;
}>;

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6 lg:px-8", className)}>
      {children}
    </div>
  );
};
