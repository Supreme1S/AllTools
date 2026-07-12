import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      {
        source: "/compare",
        destination: "/more",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
