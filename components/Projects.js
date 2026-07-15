"use client";

import Image from "next/image";
import { FiGithub, FiArrowUpRight } from "react-icons/fi";
import { projects, socials } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label text-sm text-rose">
            {t ? t.projects.sectionLabel : "03 / PROJECTS"}
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            {t ? t.projects.heading : "Selected work"}
          </h2>
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-ink-muted hover:text-rose transition-colors"
          >
            <FiGithub /> {t ? t.projects.allRepos : "all repositories"}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="group flex flex-col rounded-2xl border border-line bg-surface/60 overflow-hidden hover:border-rose/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col flex-1 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-lg font-semibold text-ink group-hover:text-rose transition-colors">
                    {project.title}
                  </h3>
                  <FiArrowUpRight className="shrink-0 text-ink-muted group-hover:text-rose transition-colors" />
                </div>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed flex-1">
                  {t ? t.projects.items[i].description : project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] tracking-wide text-mauve bg-evening/50 border border-line rounded-full px-2.5 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
