"use client";

import { useTheme } from "next-themes";

import { LucideIcon } from "./ui";

function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() =>
        setTheme(
          theme === "light"
            ? "dark"
            : theme === "dark"
              ? "sepia"
              : theme === "sepia"
                ? "forest"
                : theme === "forest"
                  ? "system"
                  : "light",
        )
      }
    >
      <LucideIcon
        suppressHydrationWarning
        name={
          theme === "light"
            ? "Sun"
            : theme === "dark"
              ? "Moon"
              : theme === "sepia"
                ? "Book"
                : theme === "forest"
                  ? "Leaf"
                  : "Monitor"
        }
        size={20}
      />
    </button>
  );
}

export default ThemeToggle;
