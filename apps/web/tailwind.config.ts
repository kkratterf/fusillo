const base = require("@fusillo/config/tailwind.config");

/** @type {import('tailwindcss').Config} */
module.exports = {
  ...base,
  plugins: [...base.plugins],
};
