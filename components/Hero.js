"use client";

import Image from "next/image";
import { FiArrowDownRight } from "react-icons/fi";
import { profile } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      className="relative pt-28 md:pt-18 min-h-screen flex items-center tech-grid"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-evening/40 via-void to-void pointer-events-none" />

      <div className="relative mx-auto max-w-6xl w-full px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <p className="section-label text-sm text-rose mb-5">
            {t ? t.hero.badge : "<hello world />"}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.08] text-ink glow-text">
            {t ? t.profile.heroTitle : profile.heroTitle}
          </h1>
          <p className="mt-6 text-ink-muted text-lg leading-relaxed max-w-xl">
            {t ? t.profile.heroDescription : profile.heroDescription}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-rose text-void-deep font-medium px-6 py-3 hover:bg-glow transition-colors"
            >
              {t ? t.hero.viewWork : "View my work"}
              <FiArrowDownRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-ink hover:border-rose hover:text-rose transition-colors"
            >
              {t ? t.hero.getInTouch : "Get in touch"}
            </a>
          </div>

          <p className="mt-10 font-mono text-xs text-ink-faint section-label">
            {(t ? t.profile.role : profile.role).toUpperCase()} — {profile.location.toUpperCase()}
          </p>
        </div>

        <div className="order-1 md:order-2 relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-rose-deep/30 via-evening/20 to-transparent blur-2xl" />
          <div className="relative rounded-[1.75rem] overflow-hidden border border-line shadow-2xl shadow-black/40 aspect-[4/5]">
            <Image
              src="/images/pp.jpeg"
              alt={profile.name}
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-5 rounded-xl border border-line bg-surface/90 backdrop-blur px-4 py-3 font-mono text-xs text-rose shadow-lg">
            status: <span className="text-ink cursor-blink">building</span>
          </div>
        </div>
      </div>
    </section>
  );
}
