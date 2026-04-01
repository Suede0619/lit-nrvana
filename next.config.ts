import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/lit-nrvana",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
