/** @type {import('prettier').Config} */
const config = {
  plugins: ["prettier-plugin-tailwindcss"],

  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  printWidth: 80,
  tailwindStylesheet: "./app/globals.css",
};

export default config;
