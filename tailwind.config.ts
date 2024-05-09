import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'pink': '#ff00bf',
        'black': '#000000',
        'blue': '#00b0ff',
        'gray-light': '#dcdcdc',
        'gray-dark': '#5b5b5b',
      },
      fontFamily: {
        walkway: ['var(--font-walkway)'],
      }
    },
  },
  plugins: [],
};
export default config;
