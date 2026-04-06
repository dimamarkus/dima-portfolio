import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dima Markus | Standalone Portfolio",
    template: "%s | Dima Markus",
  },
  description:
    "Standalone rebuild in progress for a local-first portfolio powered by Next.js and typed content collections.",
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <div className="flex-1 py-12 md:py-16">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
