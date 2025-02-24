import type { Config } from "tailwindcss";
import ZCHOOL_DEFAULTS from "./zchool.config";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./custom/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: ZCHOOL_DEFAULTS.THEME.PRIMARY_COLOR,
        secondary: ZCHOOL_DEFAULTS.THEME.SECONDARY_COLOR,
        primaryblue: "#1777ff",
        darkblue: "#001628",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
