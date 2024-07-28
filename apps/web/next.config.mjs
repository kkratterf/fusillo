/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@fusillo/ui", "@fusillo/lib"],
  modularizeImports: {
    "@fusillo/ui/components/icon": {
      transform: "lucide-react/dist/esm/icons/{{ kebabCase member }}",
      preventFullImport: true,
    },
    lodash: {
      transform: "lodash/{{member}}",
    },
  },
  images: {
    domains: [],
  },
};

export default nextConfig;
