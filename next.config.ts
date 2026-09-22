import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // 👈 এখানে শুধু এই নামটুকু থাকবে, কোনো '://' থাকবে না
      },
    ],
  },
};

export default nextConfig;
