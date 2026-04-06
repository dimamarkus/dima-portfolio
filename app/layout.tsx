import type { Metadata } from "next";
import type { ReactNode } from "react";

import { SiteFooter } from "@/components/site/footer";
import { SiteHeader } from "@/components/site/header";
import { getSiteConfig } from "@/lib/content";
import { getAbsoluteUrl } from "@/lib/utils/get-site-url";

import "./globals.css";

const site = getSiteConfig();

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: `${site.name} | ${site.title}`,
    template: `%s | ${site.name}`,
  },
  description: site.summary,
  alternates: {
    canonical: getAbsoluteUrl("/"),
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: getAbsoluteUrl("/"),
    title: site.name,
    siteName: site.name,
    description: site.summary,
    images: [
      {
        url: getAbsoluteUrl("/opengraph-image"),
        width: 1200,
        height: 630,
        alt: `${site.name} portfolio preview`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.summary,
    images: [getAbsoluteUrl("/twitter-image")],
  },
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
