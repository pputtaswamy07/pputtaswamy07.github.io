"use client";

import { createContext, useContext, useState } from "react";

export const themes = [
  { id: "rose", label: "Rose Quartz", swatch: "#e8b4bc" },
  { id: "ocean", label: "Midnight Ocean", swatch: "#7ec8e3" },
  { id: "forest", label: "Forest Moss", swatch: "#a9c97e" },
  { id: "sunset", label: "Sunset Ember", swatch: "#f0a868" },
  { id: "mono", label: "Slate Mono", swatch: "#cfd6de" },
];

const THEME_STORAGE_KEY = "portfolio-theme";

const ThemeContext = createContext(null);

function getInitialTheme() {
  if (typeof window === "undefined") return "rose";
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored && themes.some((t) => t.id === stored) ? stored : "rose";
}

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(getInitialTheme);

  const setTheme = (id) => {
    setThemeState(id);
    document.documentElement.setAttribute("data-theme", id);
    localStorage.setItem(THEME_STORAGE_KEY, id);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within a ThemeProvider");
  return ctx;
}
