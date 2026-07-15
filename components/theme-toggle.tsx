"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="icon-btn focus-ring relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors hover:border-signal-amber"
    >
      {theme === "dark" ? (
        <Sun size={18} className="text-signal-amber" />
      ) : (
        <Moon size={18} className="text-[#1B2028]" />
      )}
    </button>
  );
}
