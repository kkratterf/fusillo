/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [],
  },
  transpilePackages: ["@fusillo/lib", "@fusillo/ui"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
