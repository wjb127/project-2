import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
