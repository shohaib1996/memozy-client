import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*", // allow all hostnames
        port: "",
        pathname: "**", // allow all paths
      },
    ],
  },
};

export default nextConfig;
