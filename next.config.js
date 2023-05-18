/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
    serverComponentsExternalPackages: ["@tremor/react", "better-sqlite3"],
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
