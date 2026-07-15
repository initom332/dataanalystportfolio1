import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A0E14",
          soft: "#0F141C",
          surface: "#141A24",
          border: "#232B38"
        },
        paper: {
          DEFAULT: "#F7F5F0",
          soft: "#FBFAF7",
          surface: "#FFFFFF",
          border: "#E4E1D8"
        },
        signal: {
          amber: "#FFB454",
          violet: "#7C8CFF",
          teal: "#3DDC97",
          rose: "#FF6B81"
        },
        muted: {
          DEFAULT: "#8B97A6",
          light: "#5B6472"
        }
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"]
      },
      backgroundImage: {
        "grid-lines":
          "linear-gradient(to right, rgba(139,151,166,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(139,151,166,0.06) 1px, transparent 1px)"
      },
      backgroundSize: {
        grid: "40px 40px"
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        "fade-up": "fadeUp 0.7s ease forwards",
        blink: "blink 1.4s steps(2) infinite"
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" }
        }
      }
    }
  },
  plugins: []
};

export default config;
