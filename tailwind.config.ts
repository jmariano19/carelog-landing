import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"] ,
  theme: {
    extend: {
      colors: {
        cream: "#fbf6ee",
        creamDeep: "#fbf3e9",
        ink: "#2d2926",
        inkSoft: "#2b2623",
        brandGreen: "#2e915e",
        brandGreenDeep: "#216e46",
        accentGold: "#e9b351",
        actionStartTop: "#c27353",
        actionStartBottom: "#a85e42"
      },
      fontFamily: {
        serif: ["var(--font-lora)", "Lora", "serif"],
        sans: ["var(--font-outfit)", "Outfit", "system-ui", "sans-serif"],
        logo: ["Malayalam MN", "var(--font-lora)", "Lora", "serif"]
      },
      boxShadow: {
        soft: "0px 18px 20px rgba(40, 31, 26, 0.08)",
        card: "0px 18px 20px rgba(40, 31, 26, 0.08)",
        overlay: "0px 4px 40px rgba(0, 0, 0, 0.25)",
        header: "0px 8px 20px rgba(31, 23, 18, 0.08)"
      }
    }
  },
  plugins: []
};

export default config;
