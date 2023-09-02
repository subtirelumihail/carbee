/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/auth/:slug*",
        destination: "/api/auth/:slug*", // Rewrite auth routes as is
      },
      {
        source: "/api/:slug*",
        destination: `${process.env.NEXT_PUBLIC_API_URL}/api/:slug*`,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/dashboard",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
