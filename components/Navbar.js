"use client";

import { useState } from "react";
import { FiGithub, FiInstagram, FiMenu, FiX } from "react-icons/fi";
import { navLinks, profile, socials } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();

  const label = (link) => (t ? t.nav[link.href] : link.label);

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-line bg-void/80 backdrop-blur-md">
      <nav className="mx-auto max-w-6xl px-6 h-18 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-ink hover:text-rose transition-colors py-4"
        >
          {profile.name}
          <span className="text-glow">.</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-7 font-mono text-sm text-ink-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-rose transition-colors"
                >
                  {label(link)}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4 pl-6 border-l border-line text-ink-muted">
            <a
              href={socials.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="hover:text-rose transition-colors"
            >
              <FiInstagram size={18} />
            </a>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>

        <button
          className="md:hidden text-ink"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-void px-6 py-6">
          <ul className="flex flex-col gap-5 font-mono text-sm text-ink-muted">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-rose transition-colors"
                >
                  {label(link)}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-5 mt-6 text-ink-muted">
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
              <FiInstagram size={20} />
            </a>
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
