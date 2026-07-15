"use client";

import Image from "next/image";
import { FiInstagram } from "react-icons/fi";
import { photography, socials } from "@/lib/siteData";
import { useLanguage } from "@/context/LanguageContext";

export default function Photography() {
  const { t } = useLanguage();

  return (
    <section id="photography" className="relative py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center gap-4 mb-4">
          <span className="section-label text-sm text-rose">
            {t ? t.photography.sectionLabel : "04 / PHOTOGRAPHY"}
          </span>
          <span className="h-px flex-1 bg-line" />
        </div>
        <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ink">
            {t ? t.photography.heading : "Through the lens"}
          </h2>
          <a
            href={socials.instagram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-sm text-ink-muted hover:text-rose transition-colors"
          >
            <FiInstagram /> {t ? t.photography.moreOnInstagram : "more on instagram"}
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {photography.map((photo, i) => (
            <figure
              key={photo.title}
              className="group rounded-2xl border border-line bg-surface/60 overflow-hidden hover:border-rose/60 transition-colors"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <figcaption className="p-6">
                <h3 className="font-display text-lg font-semibold text-ink group-hover:text-rose transition-colors">
                  {t ? t.photography.items[i].title : photo.title}
                </h3>
                <p className="mt-2 text-sm text-ink-muted leading-relaxed">
                  {t ? t.photography.items[i].description : photo.description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
