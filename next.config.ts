import type { NextConfig } from "next";

const nextConfig = {
  output: 'export',
  basePath: '',
  env: {
    NEXT_PUBLIC_BASE_PATH: '',
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
