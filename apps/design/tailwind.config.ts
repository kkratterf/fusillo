const base = require("@fusillo/config/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  content: [...base.content, "./pages/**/*.{tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
};

export {};
