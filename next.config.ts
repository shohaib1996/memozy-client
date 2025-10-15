import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  // basePath: '/test',  // Commented out for main site deployment
  env: {
    NEXT_PUBLIC_BASE_PATH: '',  // Empty for main site
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
