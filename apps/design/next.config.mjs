import nextra from "nextra";

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["geist", "@fusillo/ui", "@fusillo/lib"],
  images: {
    domains: ["images.unsplash.com"],
  },
};

export default withNextra(nextConfig);
