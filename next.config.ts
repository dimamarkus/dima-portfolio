import type { NextConfig } from "next";

const isDev = process.argv.includes("dev");

if (!process.env.VELITE_STARTED && isDev) {
  process.env.VELITE_STARTED = "1";

  void import("velite").then((module) =>
    module.build({
      watch: true,
      clean: false,
    }),
  );
}

const nextConfig: NextConfig = {
  typedRoutes: true,
};

export default nextConfig;
