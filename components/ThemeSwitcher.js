"use client";

import { useEffect, useRef, useState } from "react";
import { TbPalette } from "react-icons/tb";
import { FiCheck } from "react-icons/fi";
import { themes, useTheme } from "@/context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
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
        aria-label="Change theme"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="text-ink-muted hover:text-rose transition-colors"
      >
        <TbPalette size={18} />
      </button>

      {open && (
        <div className="absolute right-0 mt-3 w-48 rounded-xl border border-line bg-surface/95 backdrop-blur-md shadow-xl p-2 z-50">
          {themes.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => {
                setTheme(t.id);
                setOpen(false);
              }}
              className="w-full flex items-center gap-3 rounded-lg px-3 py-2 text-left font-mono text-xs text-ink-muted hover:bg-evening/60 hover:text-ink transition-colors"
            >
              <span
                className="h-3.5 w-3.5 rounded-full border border-line shrink-0"
                style={{ backgroundColor: t.swatch }}
              />
              <span className="flex-1">{t.label}</span>
              {theme === t.id && <FiCheck className="text-rose shrink-0" size={14} />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
