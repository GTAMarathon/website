import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      height: {
        '17': '4.25rem',
        '18': '4.5rem',
      },
      fontFamily: {
        'bebasneue': ['BebasNeue'],
        'europagrotesk': ['EuropaGrotesk'],
        'centurygothic': ['CenturyGothic'],
        'slopeopera': ['SlopeOpera'],
      }
    },
  },
  plugins: [],
} satisfies Config;
