/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["next", "prettier", "turbo", "plugin:tailwindcss/recommended"],
  plugins: ["tailwindcss"],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./apps/*/tsconfig.json", "./packages/*/tsconfig.json"],
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
    tailwindcss: {
      callees: ["cn", "cva"],
      config: "tailwind.config.js",
    },
  },
  rules: {
    "@next/next/no-img-element": "off",
    "tailwindcss/no-custom-classname": "off",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};
