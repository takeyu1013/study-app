/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@tremor/react"],
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placekitten.com",
      },
    ],
  },
};

module.exports = nextConfig;
