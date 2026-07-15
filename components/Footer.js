"use client";

import { FiGithub, FiInstagram, FiArrowUpRight } from "react-icons/fi";
import { profile, socials } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="relative border-t border-line tech-grid">
      <div className="absolute inset-0 bg-gradient-to-t from-void via-void/95 to-void/70 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32">
        <span className="section-label text-sm text-rose">
          {t ? t.footer.sectionLabel : "05 / CONTACT"}
        </span>

        <h2 className="mt-6 font-display text-3xl md:text-5xl font-semibold text-ink max-w-2xl leading-tight glow-text">
          {t ? t.footer.heading : "Let's build something worth shipping."}
        </h2>
        <p className="mt-5 text-ink-muted max-w-xl text-lg">
          {t
            ? t.footer.description
            : "Open to fullstack roles, freelance projects, and interesting collaborations. Reach out — I usually reply within a day."}
        </p>

        <a
          href={`mailto:${socials.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-rose text-void-deep font-medium px-6 py-3 hover:bg-glow transition-colors"
        >
          {socials.email}
          <FiArrowUpRight />
        </a>

        <div className="mt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-line pt-8">
          <p className="font-mono text-xs text-ink-faint">
            © {new Date().getFullYear()} {profile.name}. {t ? t.footer.builtWith : "Built with Next.js."}
          </p>
          <div className="flex items-center gap-5 text-ink-muted">
            <a href={socials.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-rose transition-colors">
              <FiGithub size={18} />
            </a>
            <a href={socials.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-rose transition-colors">
              <FiInstagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
