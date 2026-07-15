"use client";

import { createContext, useContext, useState } from "react";
import { translations } from "@/lib/translations";

export const languages = [
  { id: "en", label: "English" },
  { id: "de", label: "Deutsch" },
];

const LANGUAGE_STORAGE_KEY = "portfolio-language";

const LanguageContext = createContext(null);

function getInitialLanguage() {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return stored && languages.some((l) => l.id === stored) ? stored : "en";
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(getInitialLanguage);

  const setLanguage = (id) => {
    setLanguageState(id);
    document.documentElement.setAttribute("lang", id);
    localStorage.setItem(LANGUAGE_STORAGE_KEY, id);
  };

  const t = language === "de" ? translations.de : null;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
