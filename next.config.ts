import type { NextConfig } from "next";

const strapiURL = new URL(process.env.STRAPI_URL!);

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{
      protocol: strapiURL.protocol.replace(":", "") as ("http" | "https"),
      hostname: strapiURL.hostname,
      port: strapiURL.port,
      pathname: "/uploads/**"
    }],
  },
};

export default nextConfig;
