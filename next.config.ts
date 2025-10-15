import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '/test',
  env: {
    NEXT_PUBLIC_BASE_PATH: '/test',
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
