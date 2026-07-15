"use client";

import { profile } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  const interests = t ? t.interests : profile.interests;

  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-10">
          <span className="section-label text-sm text-rose">
            {t ? t.about.sectionLabel : "02 / ABOUT"}
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>

        <div className="grid md:grid-cols-[1fr_1.4fr] gap-10 md:gap-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold leading-tight text-ink">
            {t ? t.profile.aboutTitle : profile.aboutTitle}
          </h2>
          <p className="text-ink-muted text-lg leading-relaxed">
            {t ? t.profile.aboutDescription : profile.aboutDescription}
          </p>
        </div>

        <div className="mt-16 grid sm:grid-cols-3 gap-6">
          {interests.map((interest) => (
            <div
              key={interest.title}
              className="group rounded-2xl border border-line bg-surface/60 p-6 hover:border-rose/60 hover:bg-surface transition-colors"
            >
              <span className="section-label text-xs text-mauve">
                {interest.label}
              </span>
              <h3 className="mt-3 font-display text-xl font-semibold text-ink group-hover:text-rose transition-colors">
                {interest.title}
              </h3>
              <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
