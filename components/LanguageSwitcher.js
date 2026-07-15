"use client";

import { useEffect, useRef, useState } from "react";
import { FiGlobe, FiCheck } from "react-icons/fi";
import { languages, useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    function onClickOutside(e) {
      if (rootRef.current && !rootRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-label="Change language"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 text-ink-muted hover:text-rose transition-colors"
      >
        <FiGlobe size={18} />
        <span className="font-mono text-xs uppercase">{language}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-40 rounded-xl border border-line bg-surface/95 backdrop-blur-md shadow-xl p-2 z-50">
          {languages.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => {
                setLanguage(l.id);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left font-mono text-xs text-ink-muted hover:bg-evening/60 hover:text-ink transition-colors"
            >
              <span className="flex-1">{l.label}</span>
              {language === l.id && <FiCheck className="text-rose shrink-0" size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
